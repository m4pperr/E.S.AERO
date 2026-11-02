"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
    };
    dataLayer?: Record<string, unknown>[];
  }
}

const UTM_STORAGE_KEY = "esaero_utm_params";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "adset",
  "ad",
  "fbclid",
  "ttclid",
] as const;

/**
 * Capture les paramètres UTM et identifiants publicitaires (fbclid, ttclid, adset, ad)
 * depuis l'URL et les persiste dans sessionStorage pour toute la durée de la visite.
 */
export function captureAndGetUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  let stored: Record<string, string> = {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    // Ignore erreur sessionStorage (navigation privée stricte)
  }

  const searchParams = new URLSearchParams(window.location.search);
  let updated = false;

  for (const key of TRACKED_PARAMS) {
    const val = searchParams.get(key);
    if (val) {
      stored[key] = val;
      updated = true;
    }
  }

  if (updated) {
    try {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Ignore
    }
  }

  return stored;
}

/**
 * Envoie un événement standard ou personnalisé vers Meta Pixel (fbq), TikTok Pixel (ttq) et dataLayer.
 */
export function trackPixelEvent(
  eventName: string,
  params: Record<string, unknown> = {},
  isCustom = false
) {
  if (typeof window === "undefined") return;

  const utms = captureAndGetUtmParams();
  const payload = { ...utms, ...params };

  // 1. Meta Pixel
  if (typeof window.fbq === "function") {
    if (isCustom) {
      window.fbq("trackCustom", eventName, payload);
    } else {
      window.fbq("track", eventName, payload);
    }
  }

  // 2. TikTok Pixel
  if (window.ttq && typeof window.ttq.track === "function") {
    window.ttq.track(eventName, payload);
  }

  // 3. Google Tag Manager / dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  // Log de debug en local uniquement
  if (process.env.NODE_ENV === "development") {
    console.info(`[Tracking E.S.AERO] ${eventName}`, payload);
  }
}

/**
 * Déclenche l'événement officiel "Contact" (clic téléphone ou WhatsApp).
 */
export function trackContact(ctaId: string, method: "phone" | "whatsapp") {
  trackPixelEvent("Contact", {
    cta_id: ctaId,
    method,
    content_name: "Formation PNC E.S.AERO",
  });
}

/**
 * Déclenche l'événement officiel "Lead" (envoi réussi du formulaire de rappel).
 */
export function trackLead(ctaId = "cta_final_form") {
  trackPixelEvent("Lead", {
    cta_id: ctaId,
    method: "callback_form",
    content_name: "Formation PNC E.S.AERO",
  });
}

