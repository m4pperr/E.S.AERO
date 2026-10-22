"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "@/components/Icons";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#262626] text-[#f4f1ee] py-2 px-3.5 border border-[#404040] text-xs font-mono font-semibold shadow-2xl">
          <span>Une question ? Écrivez-nous sur WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#bca59d] hover:text-[#f4f1ee] p-0.5 ml-1"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter E.S.AERO sur WhatsApp"
        className="w-13 h-13 bg-[#25D366] hover:bg-[#20bd5a] text-[#0b0a0a] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
