import { NextResponse } from "next/server";

interface CallbackRequestBody {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
  honeypot?: string; // Anti-spam invisible
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
}

/**
 * Validation des numéros algériens :
 * - Local : 10 chiffres (ex: 0555 12 34 56, 06xx, 07xx, 02xx...)
 * - International : +213 ou 00213 suivi de 9 chiffres (ex: +213 555 12 34 56)
 */
function isValidAlgerianPhone(phoneStr: string): boolean {
  const cleaned = phoneStr.replace(/[\s.-]/g, "");
  // Format international +213 / 00213
  if (/^(\+213|00213)[2-7]\d{8}$/.test(cleaned)) return true;
  // Format local 05, 06, 07, 02, 03, 04...
  if (/^0[2-7]\d{8}$/.test(cleaned)) return true;
  // Format permissif standard si préfixe correct
  return /^(?:\+?213|0)[5-7]\d{8}$/.test(cleaned);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: CallbackRequestBody = await request.json();

    // 1. Détection anti-spam invisible (Honeypot)
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Les robots remplissent ce champ caché : on retourne un faux succès silencieux
      return NextResponse.json({ success: true, message: "Demande reçue." });
    }

    const errors: Record<string, string> = {};

    // 2. Validation Nom et prénom
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Veuillez renseigner votre nom et prénom.";
    }

    // 3. Validation Numéro de téléphone algérien
    if (!body.phone || body.phone.trim().length === 0) {
      errors.phone = "Le numéro de téléphone est obligatoire.";
    } else if (!isValidAlgerianPhone(body.phone)) {
      errors.phone = "Vérifiez votre numéro (ex. 0555 12 34 56).";
    }

    // 4. Validation Email (facultatif)
    if (body.email && body.email.trim().length > 0) {
      if (!EMAIL_REGEX.test(body.email.trim())) {
        errors.email = "Veuillez entrer une adresse e-mail valide.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Certaines informations sont incomplètes ou incorrectes.",
          errors,
        },
        { status: 400 }
      );
    }

    // 5. Génération identifiant Lead
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;

    console.log("=== NOUVEAU LEAD E.S.AERO REÇU ===");
    console.log({
      leadId,
      date: new Date().toISOString(),
      fullName: body.fullName?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim() || "Non renseigné",
      question: body.message?.trim() || "Aucune question",
      utm: body.utm || {},
    });

    return NextResponse.json(
      {
        success: true,
        message: "Merci ! Un conseiller vous rappelle dès que possible.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur traitement callback:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez nous contacter directement par téléphone.",
      },
      { status: 500 }
    );
  }
}
