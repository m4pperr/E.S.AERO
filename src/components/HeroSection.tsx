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
    <section className="relative min-h-[92svh] w-full flex flex-col justify-center px-4 sm:px-6 max-w-[1400px] mx-auto pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Colonne Gauche : Contenu textuel et actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Badge officiel */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00A887] bg-[#00A887]/10 border border-[#00A887]/30 px-3.5 py-1.5 rounded-full w-fit mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
            <span>Formation PNC · Admissions ouvertes</span>
          </div>

          {/* H1 Majuscules gras : clamp(32px, 9vw, 56px) */}
          <h1
            className="font-black font-heading leading-[1.02] tracking-tight uppercase mb-5 text-white"
            style={{ fontSize: "clamp(32px, 5.2vw, 56px)" }}
          >
            DEVENEZ HÔTESSE DE L&apos;AIR OU STEWARD.{" "}
            <span className="text-[#00A887] block mt-1">
              FORMÉ(E) AUX STANDARDS EUROPÉENS.
            </span>
          </h1>

          {/* Sous-titre officiel brief v2 */}
          <p className="text-[17px] text-slate-300 leading-[1.6] max-w-[640px] mb-6">
            E.S.AERO, première école en Algérie de formation PNC - Personnel Navigant Commercial.
            Théorie, pratique sur simulateur et 60 h de vol réel en compagnie aérienne, avec
            des formateurs issus de compagnies européennes.
          </p>

          {/* Pastilles officielles */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {pastilles.map((p, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-[#0e2038] border border-[#1f2f44] px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200"
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
          <p className="text-xs text-slate-400 font-mono">
            Nos conseillers répondent du dimanche au jeudi, de 9 h à 16 h · Sans engagement
          </p>
        </div>

        {/* Colonne Droite : Photo réelle d'équipage */}
        <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#1f2f44] shadow-2xl bg-[#0e2038]">
          <Image
            src="/images/cabin-crew.jpg"
            alt="Équipage navigant commercial E.S.AERO en uniforme"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111e]/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0e2038]/85 backdrop-blur-md border border-[#1f2f44] flex items-center justify-between text-xs">
            <span className="font-bold text-white uppercase tracking-wider">Formation certifiante CSS</span>
            <span className="text-[#00A887] font-mono font-bold">Promotion 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
