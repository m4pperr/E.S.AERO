"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowUpRight, Sparkles } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";
import { useScrollToSection } from "@/lib/useScrollToSection";

const pastilles = [
  "Depuis 2015",
  "Formateurs issus de compagnies européennes",
  "Certification CSS",
  "60 h de vol réel",
];

export default function HeroSection() {
  const scrollTo = useScrollToSection();

  return (
    <section className="relative w-full flex flex-col justify-center px-3 sm:px-6 max-w-[1400px] mx-auto pt-20 sm:pt-24 pb-4 sm:pb-8">
      {/* Panneau Hero Cobalt avec le logo en background comme dans l'ancienne version */}
      <div className="w-full bg-[#234990] text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#2a4e94] shadow-2xl flex flex-col justify-between min-h-[520px]">
        {/* Logo officiel en filigrane d'arrière-plan (comme l'ancienne version) */}
        <div className="absolute -right-8 -bottom-8 sm:-right-10 sm:-bottom-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] opacity-10 pointer-events-none select-none">
          <Image
            src="/images/logo.png"
            alt="Logo E.S.AERO en arrière-plan"
            width={480}
            height={480}
            priority
            className="object-contain w-full h-full"
          />
        </div>

        {/* Contenu textuel et actions */}
        <div className="relative z-10 max-w-[860px]">
          {/* Badge officiel */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00A887] bg-[#08111e]/70 backdrop-blur-sm border border-[#00A887]/30 px-3.5 py-1.5 rounded-full w-fit mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
            <span>Formation PNC · Admissions ouvertes</span>
          </div>

          {/* H1 Majuscules gras : clamp(32px, 9vw, 56px) */}
          <h1
            className="font-black font-heading leading-[0.98] tracking-tight uppercase mb-5 text-white"
            style={{ fontSize: "clamp(32px, 5.2vw, 58px)" }}
          >
            DEVENEZ HÔTESSE DE L&apos;AIR OU STEWARD.{" "}
            <span className="text-[#00A887] block mt-1">
              FORMÉ(E) AUX STANDARDS EUROPÉENS.
            </span>
          </h1>

          {/* Sous-titre officiel brief v2 */}
          <p className="text-base sm:text-lg text-slate-100/90 leading-[1.6] max-w-[680px] mb-6 font-normal">
            E.S.AERO, première école en Algérie de formation PNC - Personnel Navigant Commercial.
            Théorie, pratique sur simulateur et 60 h de vol réel en compagnie aérienne, avec
            des formateurs issus de compagnies européennes.
          </p>

          {/* Pastilles officielles */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {pastilles.map((p, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-[#08111e]/60 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200"
              >
                <Sparkles className="w-3 h-3 text-[#00A887]" />
                <span>{p}</span>
              </span>
            ))}
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              data-cta="cta_hero_call"
              className="btn-primary"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Appeler maintenant</span>
            </a>

            <button
              onClick={() => scrollTo("rappel")}
              data-cta="cta_hero_callback"
              className="btn-secondary cursor-pointer"
            >
              <span>Être rappelé gratuitement</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Microligne */}
          <p className="text-xs text-slate-300/80 font-mono">
            Nos conseillers répondent du dimanche au jeudi, de 9 h à 16 h · Sans engagement
          </p>
        </div>

        {/* Micro hint pour inviter au scroll */}
        <div className="relative z-10 pt-6">
          <button
            onClick={() => scrollTo("chiffres")}
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer w-fit text-left"
          >
            <svg
              className="w-3.5 h-3.5 animate-bounce text-[#00A887]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7-7 7-7-7" />
            </svg>
            <span>Faites défiler pour explorer la formation 👇</span>
          </button>
        </div>
      </div>
    </section>
  );
}
