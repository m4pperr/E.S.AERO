"use client";

import React, { useState } from "react";
import { Phone, X } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Contactez l'école"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3"
    >
      {/* Bulle info */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-[#0e2038] text-[#f4f7f9] py-2 px-3.5 border border-[#1f2f44] rounded-lg text-xs font-mono font-medium shadow-2xl">
          <a
            href={SITE_CONFIG.phonePrimary.tel}
            data-cta="cta_floating_call_label"
            className="hover:text-[#00A887] transition-colors"
          >
            Contactez l&apos;école · {SITE_CONFIG.phonePrimary.display}
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bouton d'appel flottant */}
      <a
        href={SITE_CONFIG.phonePrimary.tel}
        data-cta="cta_floating_call"
        aria-label={`Contactez l'école au ${SITE_CONFIG.phonePrimary.display}`}
        className="w-13 h-13 rounded-full bg-[#00A887] hover:bg-[#00c49e] text-[#08111e] flex items-center justify-center shadow-[0_8px_24px_rgba(0,168,135,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
}
