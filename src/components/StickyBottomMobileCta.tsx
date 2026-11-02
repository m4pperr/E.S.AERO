"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock, ArrowUpRight } from "@/components/Icons";
import { SITE_CONFIG, isOfficeOpen } from "@/lib/config";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function StickyBottomMobileCta() {
  const [isOpen, setIsOpen] = useState(true);
  const scrollTo = useScrollToSection();

  useEffect(() => {
    // Vérification initiale et intervalle toutes les minutes
    const checkSchedule = () => {
      setIsOpen(isOfficeOpen());
    };
    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToForm = () => {
    scrollTo("rappel");
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0a0a]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_24px_rgba(0,0,0,0.7)]"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      {/* Petite ligne au-dessus des boutons */}
      <div className="py-1 px-3 text-center text-[11px] font-mono border-b border-white/5 flex items-center justify-center gap-1.5">
        {isOpen ? (
          <>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <span className="text-white/80">
              {SITE_CONFIG.hours.daysShort} · {SITE_CONFIG.hours.timeShort} · Appel gratuit, sans engagement
            </span>
          </>
        ) : (
          <>
            <Clock className="w-3 h-3 text-[#F5A623] shrink-0" />
            <span className="text-[#F5A623] font-medium">
              Fermé · On vous rappelle à l&apos;ouverture
            </span>
          </>
        )}
      </div>

      {/* Barre de boutons principale (hauteur 64px) */}
      <div className="px-3 pt-2 pb-1 flex items-center gap-2 h-16">
        {isOpen ? (
          <>
            {/* Ouvert : Appeler (65%) bouton primaire */}
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              data-cta="cta_sticky_call"
              className="flex-[65] h-12 rounded-xl bg-[#F5A623] text-[#0b0a0a] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md shadow-[#F5A623]/25"
              aria-label={`Appeler ${SITE_CONFIG.phonePrimary.display}`}
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Appeler</span>
            </a>

            {/* Ouvert : WhatsApp (35%) bouton vert */}
            <a
              href={SITE_CONFIG.whatsapp.url}
              data-cta="cta_sticky_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[35] h-12 rounded-xl bg-[#25D366] text-[#0b0a0a] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98 transition-transform shadow-md shadow-[#25D366]/25"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </>
        ) : (
          <>
            {/* Fermé : "Être rappelé" devient primaire (scroll vers #rappel) */}
            <button
              onClick={handleScrollToForm}
              data-cta="cta_sticky_call"
              className="flex-[65] h-12 rounded-xl bg-[#F5A623] text-[#0b0a0a] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md shadow-[#F5A623]/25 cursor-pointer"
            >
              <span>Être rappelé</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Fermé : WhatsApp en secondaire */}
            <a
              href={SITE_CONFIG.whatsapp.url}
              data-cta="cta_sticky_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[35] h-12 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98 transition-transform"
              aria-label="Écrire sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}
