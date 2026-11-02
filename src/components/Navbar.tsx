"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[#08111e]/95 backdrop-blur-md border-[#1f2f44] py-2.5 shadow-xl"
          : "bg-[#08111e] border-transparent py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo officiel à gauche */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (lenis) lenis.scrollTo(0, { duration: 1.2 });
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="E.S.AERO Accueil"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white p-1 shadow-md shadow-[#00A887]/20 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo officiel E.S.AERO"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight font-heading leading-none text-white">
                E.S.<span className="text-[#00A887]">AERO</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#00A887] font-semibold mt-0.5">
                Formation PNC
              </span>
            </div>
          </a>

          {/* Bouton Appeler sticky (40px) à droite */}
          <a
            href={SITE_CONFIG.phonePrimary.tel}
            data-cta="cta_header_call"
            className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#00A887] hover:bg-[#00876c] text-[#08111e] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-[#00A887]/25 min-w-[48px] min-h-[40px]"
            aria-label={`Appeler E.S.AERO au ${SITE_CONFIG.phonePrimary.display}`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">Appeler</span>
          </a>
        </div>
      </div>
    </header>
  );
}
