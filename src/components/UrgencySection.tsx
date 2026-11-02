"use client";

import React from "react";
import { ArrowUpRight } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function UrgencySection() {
  const scrollTo = useScrollToSection();

  return (
    <section className="pt-2 pb-12 sm:pb-20 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* Bandeau contrasté : ni compte à rebours, ni date, ni chiffre */}
      <div className="bg-[#234990] border-2 border-[#00A887] rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A887] block mb-1.5">
            Sessions en cours
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading leading-tight tracking-tight uppercase text-white max-w-[680px]">
            LES INSCRIPTIONS SONT OUVERTES. LES PLACES PAR SESSION SONT LIMITÉES.
          </h2>
        </div>

        <button
          onClick={() => scrollTo("rappel")}
          data-cta="cta_urgency_call"
          className="btn-primary shrink-0 cursor-pointer"
        >
          <span>Réserver ma place</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
