"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "@/components/Icons";

export default function CtaBannerSection() {
  const scrollToForm = () => {
    const el = document.getElementById("rappel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e]">
      <div className="relative overflow-hidden bg-[#08111e] min-h-[440px] flex items-center justify-center border border-[#1f2f44]">
        {/* Full-bleed background image with template dark treatment */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-tarmac.jpg"
            alt="Avion de ligne sur le tarmac d'aéroport au crépuscule"
            fill
            className="object-cover object-center opacity-40"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08111e]/95 via-[#08111e]/80 to-[#08111e]/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          <div className="inline-block px-3.5 py-1 bg-[#00A887] text-[#08111e] text-xs font-mono font-black uppercase tracking-widest mb-6">
            Prochaine Session · Inscriptions Ouvertes
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading uppercase text-white leading-[0.95] tracking-tight mb-6">
            PRÊT(E) À DÉCOLLER VERS{" "}
            <span className="text-[#00A887]">UNE NOUVELLE CARRIÈRE ?</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Contactez notre équipe dès aujourd&apos;hui pour obtenir toutes les informations concernant notre formation PNC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="m-btn text-xs font-black"
            >
              <span>DEMANDER À ÊTRE RAPPELÉ</span>
            </button>

            <a
              href="tel:+33189000000"
              className="m-btn-light"
            >
              <Phone className="w-4 h-4 mr-2 text-[#00A887]" />
              <span>CONTACTER L&apos;ÉCOLE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
