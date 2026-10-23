"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, Compass } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function IntroSection() {
  const scrollTo = useScrollToSection();
  const scrollToForm = () => scrollTo("rappel");

  return (
    <div className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3.5 items-stretch">
        {/* Main Statement Panel (Deep Navy #0e2038 with Teal and Blue Accents) */}
        <div className="md:col-span-7 bg-[#0e2038] border border-[#1f2f44] text-[#f4f7f9] p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A887] mb-4 font-mono">
              <Compass className="w-3.5 h-3.5 text-[#00A887]" />
              <span>Votre Passerelle Vers les Airs</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading leading-[0.95] tracking-tight uppercase mb-6 text-white">
              FAITES DE VOTRE PASSION POUR L&apos;AVIATION{" "}
              <span className="text-[#00A887] block mt-1">UN MÉTIER.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Le secteur aéronautique offre des opportunités professionnelles passionnantes. E.S.AERO vous accompagne dans votre parcours grâce à une formation structurée qui combine enseignement théorique, apprentissage pratique et préparation au recrutement.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={scrollToForm}
              className="m-link text-xs font-bold uppercase tracking-wider text-[#00A887]"
            >
              Échanger avec notre équipe pédagogique →
            </button>
          </div>
        </div>

        {/* Right Photograph Panel (Commercial Aircraft in flight) */}
        <div className="md:col-span-5 bg-[#08111e] border border-[#1f2f44] flex flex-col justify-between overflow-hidden relative min-h-[320px]">
          <div className="relative flex-1 w-full min-h-[260px] bg-[#08111e] overflow-hidden">
            <Image
              src="/images/hero-aircraft.jpg"
              alt="Avion de ligne commercial en vol au coucher du soleil"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="bg-[#234990] text-white px-4 py-3 text-xs font-semibold tracking-wider uppercase font-mono flex items-center justify-between">
            <span>Aviation Civile Internationale · Formation Homologuée</span>
            <span className="text-[#00A887] font-bold">E.S.AERO</span>
          </div>
        </div>

        {/* Sub-panel 1: Teal Surface - Sécurité */}
        <div className="md:col-span-6 bg-[#00A887] text-[#08111e] p-6 sm:p-8 flex flex-col justify-between min-h-[190px]">
          <div>
            <div className="w-9 h-9 bg-[#08111e] text-[#00A887] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-[#00A887]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-[#08111e] mb-2 tracking-tight">
              Sécurité & Réglementation Aéronautique
            </h3>
            <p className="text-xs sm:text-sm text-[#08111e]/90 leading-relaxed font-normal">
              Apprentissage approfondi des protocoles d&apos;urgence, lutte anti-incendie, gestion des turbulences et maîtrise absolue des premiers secours en altitude.
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#08111e]/70 pt-3 font-bold">
            Norme Nationale DACM & CSS
          </span>
        </div>

        {/* Sub-panel 2: Royal Blue Surface - Relation Passagers */}
        <div className="md:col-span-6 bg-[#234990] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[190px]">
          <div>
            <div className="w-9 h-9 bg-[#08111e] text-[#00A887] flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-[#00A887]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-white mb-2 tracking-tight">
              Excellence Relationnelle & Service
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Posture irréprochable, sens aigu de l&apos;accueil, gestion de cabine multiculturelle et communication positive avec l&apos;ensemble des passagers.
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#00A887] pt-3 font-bold">
            Standards Compagnies Aériennes
          </span>
        </div>
      </div>
    </div>
  );
}
