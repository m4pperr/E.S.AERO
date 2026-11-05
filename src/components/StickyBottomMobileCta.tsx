"use client";

import React, { useState, useEffect } from "react";
import { Phone, Clock, ArrowUpRight } from "@/components/Icons";
import { SITE_CONFIG, isOfficeOpen } from "@/lib/config";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function StickyBottomMobileCta() {
  const [isOpen, setIsOpen] = useState(true);
  const scrollTo = useScrollToSection();

  useEffect(() => {
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
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#08111e]/95 backdrop-blur-md border-t border-[#1f2f44] shadow-[0_-8px_24px_rgba(0,0,0,0.7)]"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      <div className="py-1 px-3 text-center text-[11px] font-mono border-b border-[#1f2f44]/50 flex items-center justify-center gap-1.5">
        {isOpen ? (
          <>
            <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse shrink-0" />
            <span className="text-slate-300">
              {SITE_CONFIG.hours.daysShort} · {SITE_CONFIG.hours.timeShort} · Appel gratuit, sans engagement
            </span>
          </>
        ) : (
          <>
            <Clock className="w-3 h-3 text-[#00A887] shrink-0" />
            <span className="text-[#00A887] font-medium">
              Fermé · On vous rappelle à l&apos;ouverture
            </span>
          </>
        )}
      </div>

      <div className="px-3 pt-2 pb-1 flex items-center gap-2 h-16">
        <a
          href={SITE_CONFIG.phonePrimary.tel}
          data-cta="cta_sticky_call"
          className="flex-[65] h-12 rounded-xl bg-[#00A887] active:bg-[#00876c] text-[#08111e] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-transform shadow-md shadow-[#00A887]/25"
          aria-label={`Contactez l'école au ${SITE_CONFIG.phonePrimary.display}`}
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Contactez l&apos;école</span>
        </a>

        <button
          onClick={handleScrollToForm}
          data-cta="cta_sticky_callback"
          className="flex-[35] h-12 rounded-xl bg-[#0e2038] border border-[#1f2f44] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-98 transition-transform cursor-pointer"
        >
          <span>Rappel</span>
          <ArrowUpRight className="w-4 h-4 text-[#00A887]" />
        </button>
      </div>
    </div>
  );
}
