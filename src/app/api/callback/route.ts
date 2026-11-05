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
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
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
    const leadPayload = {
      leadId,
      date: new Date().toISOString(),
      fullName: body.fullName?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim() || "Non renseigné",
      question: body.message?.trim() || "Aucune question",
      utm: body.utm || {},
    };

    console.log("=== NOUVEAU LEAD E.S.AERO REÇU ===", leadPayload);

    // 6. Enregistrement dans Google Sheets (via Google Apps Script)
    const sheetsUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.WEBHOOK_URL;
    const sheetsSecret = process.env.SHEETS_SECRET || "";

    if (!sheetsUrl) {
      // En production, on refuse de confirmer un lead qui ne serait enregistré nulle part.
      if (process.env.NODE_ENV === "production") {
        console.error(
          "GOOGLE_SHEETS_WEBHOOK_URL manquant : le lead n'a pas pu être enregistré.",
          leadPayload
        );
        return NextResponse.json(
          {
            success: false,
            message:
              "Le service d'enregistrement n'est pas disponible. Veuillez nous appeler directement.",
          },
          { status: 500 }
        );
      }
      console.warn("[dev] GOOGLE_SHEETS_WEBHOOK_URL absent : lead non enregistré.");
    } else {
      try {
        const sendToSheets = async (secretToUse: string) => {
          const res = await fetch(sheetsUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
              secret: secretToUse,
              leadId,
              date: leadPayload.date,
              fullName: leadPayload.fullName,
              phone: leadPayload.phone,
              email: body.email?.trim() || "",
              question: body.message?.trim() || "",
              utm_source: body.utm?.utm_source || body.utm?.source || "",
              utm_medium: body.utm?.utm_medium || body.utm?.medium || "",
              utm_campaign: body.utm?.utm_campaign || body.utm?.campaign || "",
              utm_content: body.utm?.utm_content || body.utm?.content || "",
              utm_term: body.utm?.utm_term || body.utm?.term || "",
            }),
            redirect: "follow",
            signal: AbortSignal.timeout(15000),
          });

          const raw = await res.text();
          let result: { ok?: boolean; error?: string } = {};
          try {
            result = JSON.parse(raw);
          } catch {
            /* réponse non JSON (ex. page de connexion Google ou erreur Apps Script) */
          }
          return { res, raw, result };
        };

        let { res, raw, result } = await sendToSheets(sheetsSecret);

        // Si le script Google a gardé le SECRET par défaut du fichier apps-script-leads.gs
        if (result.error === "unauthorized" && sheetsSecret !== "REMPLACE-PAR-UN-LONG-MOT-DE-PASSE-ALEATOIRE") {
          ({ res, raw, result } = await sendToSheets("REMPLACE-PAR-UN-LONG-MOT-DE-PASSE-ALEATOIRE"));
        }

        if (!res.ok || !result.ok) {
          const plainError = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 200);
          console.error(
            "Échec enregistrement Google Sheets:",
            res.status,
            result.error || plainError
          );
          return NextResponse.json(
            {
              success: false,
              message:
                "Votre demande n'a pas pu être enregistrée. Veuillez réessayer ou nous appeler directement.",
            },
            { status: 502 }
          );
        }
      } catch (sheetsError) {
        console.error("Erreur d'envoi vers Google Sheets:", sheetsError);
        return NextResponse.json(
          {
            success: false,
            message:
              "Votre demande n'a pas pu être enregistrée. Veuillez réessayer ou nous appeler directement.",
          },
          { status: 502 }
        );
      }
    }

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
