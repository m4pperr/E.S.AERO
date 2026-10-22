import { NextResponse } from "next/server";

interface CallbackRequestBody {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

// Regex matching common phone formats (French, International E.164, local)
const PHONE_REGEX = /^(?:(?:\+|00)[1-9][0-9]{1,4}[\s.-]?|0)[1-9](?:[\s.-]?[0-9]{2}){4}$|^\+?[0-9]{8,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: CallbackRequestBody = await request.json();

    const errors: Record<string, string> = {};

    // Validate Full Name
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Veuillez renseigner votre nom et prénom (au moins 2 caractères).";
    }

    // Validate Phone Number
    if (!body.phone || body.phone.trim().length === 0) {
      errors.phone = "Le numéro de téléphone est obligatoire.";
    } else {
      const sanitizedPhone = body.phone.replace(/[\s.-]/g, "");
      if (sanitizedPhone.length < 8 || sanitizedPhone.length > 15 || !/^\+?[0-9]+$/.test(sanitizedPhone)) {
        errors.phone = "Veuillez entrer un numéro de téléphone valide (ex. 06 12 34 56 78 ou +33 6 12 34 56 78).";
      }
    }

    // Validate Email if provided
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

    // Simulate lead storage or forward to CRM/webhook
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;

    console.log("=== NOUVEAU LEAD E.S.AERO REÇU ===");
    console.log({
      leadId,
      date: new Date().toISOString(),
      fullName: body.fullName?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim() || "Non renseigné",
      message: body.message?.trim() || "Aucun message",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a bien été enregistrée. Notre équipe vous contactera très rapidement pour discuter de votre projet aéronautique.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur traitement callback:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur technique est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.",
      },
      { status: 500 }
    );
  }
}
