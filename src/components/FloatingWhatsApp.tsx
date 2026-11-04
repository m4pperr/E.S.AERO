"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Contact rapide WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3"
    >
      {/* Bulle info sur desktop */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-[#0e2038] text-[#f4f7f9] py-2 px-3.5 border border-[#1f2f44] rounded-lg text-xs font-mono font-medium shadow-2xl">
          <span>Une question ? Écrivez-nous sur WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bouton d'action flottant */}
      <a
        href={SITE_CONFIG.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="cta_floating_whatsapp"
        aria-label="Contacter E.S.AERO sur WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0b0a0a] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
