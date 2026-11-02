export const SITE_CONFIG = {
  name: "E.S.AERO",
  fullName: "E.S.AERO – École Supérieure de l'Aéronautique",
  formationName: "Formation PNC – Personnel Navigant Commercial",
  phonePrimary: {
    display: "0560 78 04 61",
    international: "+213 560 780 461",
    tel: "tel:+213560780461",
  },
  phoneSecondary: {
    display: "0560 78 39 04",
    international: "+213 560 783 904",
    tel: "tel:+213560783904",
  },
  whatsapp: {
    number: "+213 560 783 904",
    url: "https://wa.me/213560783904?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20PNC.",
  },
  email: "contact@esaero-dz.com",
  address: "Cité AADL Lot 155 N: 09 SAID HAMDINE, BIR MOURAD RAIS, ALGER.",
  city: "Alger, Algérie",
  hours: {
    days: "Dimanche au jeudi",
    daysShort: "Dim–Jeu",
    time: "9 h à 16 h",
    timeShort: "9 h–16 h",
    startHour: 9,
    endHour: 16,
    // Dimanche = 0, Lundi = 1, Mardi = 2, Mercredi = 3, Jeudi = 4
    openDays: [0, 1, 2, 3, 4],
    timezone: "Africa/Algiers",
  },
  socials: {
    facebook: "https://facebook.com/esaero",
    instagram: "https://instagram.com/esaero",
    linkedin: "https://linkedin.com/company/esaero",
  },
} as const;

/**
 * Vérifie si le secrétariat est actuellement ouvert selon le fuseau horaire algérien (Dim–Jeu, 9h–16h).
 */
export function isOfficeOpen(): boolean {
  try {
    const now = new Date();
    // Convertir en heure locale d'Alger
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: SITE_CONFIG.hours.timezone,
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      weekday: "short",
    });

    const parts = formatter.formatToParts(now);
    const weekdayStr = parts.find((p) => p.type === "weekday")?.value?.toLowerCase() || "";
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);

    // Dimanche: sun, Lundi: mon, Mardi: tue, Mercredi: wed, Jeudi: thu, Vendredi: fri, Samedi: sat
    const openDaysMap: Record<string, boolean> = {
      sun: true,
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: false,
      sat: false,
    };

    const isOpenDay = openDaysMap[weekdayStr] ?? false;
    const isOpenHour = hour >= SITE_CONFIG.hours.startHour && hour < SITE_CONFIG.hours.endHour;

    return isOpenDay && isOpenHour;
  } catch {
    // Par défaut en fallback si Intl échoue
    const d = new Date();
    const day = d.getDay();
    const h = d.getHours();
    return day >= 0 && day <= 4 && h >= 9 && h < 16;
  }
}

