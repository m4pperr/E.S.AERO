"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function StickyBottomMobileCta() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTo = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => scrollTo("rappel");

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-[#08111e] border-t-2 border-[#1f2f44] shadow-2xl animate-slideUp">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Appeler Button */}
        <a
          href="tel:+33189000000"
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#1f2f44] active:bg-[#234990] text-white font-bold text-xs uppercase tracking-wider text-center"
        >
          <Phone className="w-4 h-4 text-[#00A887]" />
          <span>APPELER</span>
        </a>

        {/* Être Rappelé Button */}
        <button
          onClick={scrollToForm}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#00A887] active:bg-[#00876c] text-[#08111e] font-black text-xs uppercase tracking-wider text-center"
        >
          <span>ÊTRE RAPPELÉ</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
