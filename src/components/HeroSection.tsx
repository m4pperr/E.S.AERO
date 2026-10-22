"use client";

import React from "react";
import Image from "next/image";
import { Phone, CheckCircle2, Plane, Sparkles } from "@/components/Icons";

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("rappel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-4 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e]">
      {/* Bento Grid with Official Logo Palette */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3.5 items-stretch">
        {/* Cell A: Main Bold Title Panel (Royal Cobalt #234990 from the falcon logo) */}
        <div className="md:col-span-8 bg-[#234990] text-white p-6 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[360px] lg:min-h-[460px] relative overflow-hidden group">
          {/* Subtle logo emblem in background */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-10 pointer-events-none">
            <Image
              src="/images/logo.png"
              alt="Logo E.S.AERO"
              width={288}
              height={288}
              className="object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#00A887] bg-[#08111e]/40 backdrop-blur-sm px-3.5 py-1.5 w-fit border border-[#00A887]/30">
            <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
            <span>École Supérieure de l&apos;Aéronautique • Formation PNC</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading leading-[0.9] tracking-tight uppercase my-4">
            VOTRE AVENIR DANS L&apos;AÉRONAUTIQUE{" "}
            <span className="text-[#00A887] block mt-1">COMMENCE ICI.</span>
          </h1>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
            <span className="bg-[#08111e]/30 px-2.5 py-1 border border-white/10">Certification CSS</span>
            <span className="text-[#00A887]">•</span>
            <span className="bg-[#08111e]/30 px-2.5 py-1 border border-white/10">Théorie 114h</span>
            <span className="text-[#00A887]">•</span>
            <span className="bg-[#08111e]/30 px-2.5 py-1 border border-white/10">Pratique 49h</span>
            <span className="text-[#00A887]">•</span>
            <span className="bg-[#08111e]/30 px-2.5 py-1 border border-white/10">Coaching 5j</span>
          </div>
        </div>

        {/* Cell B: Tall Portrait Photo Panel (Right Column with Teal Ledge) */}
        <div className="md:col-span-4 bg-[#0e2038] border border-[#1f2f44] flex flex-col justify-between overflow-hidden relative min-h-[380px] md:min-h-[460px]">
          <div className="relative flex-1 w-full min-h-[320px] bg-[#08111e] overflow-hidden">
            <Image
              src="/images/cabin-crew.jpg"
              alt="Équipage navigant commercial en uniforme"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 35vw"
              quality={90}
            />
          </div>
          {/* Ledge strip in Emerald Teal #00A887 */}
          <div className="bg-[#00A887] text-[#08111e] px-4 py-3 text-xs font-bold tracking-wider uppercase font-mono flex items-center justify-between">
            <span>Équipage E.S.AERO · En vol</span>
            <Plane className="w-3.5 h-3.5 text-[#08111e]" />
          </div>
        </div>

        {/* Cell C: Deep Navy Panel */}
        <div className="md:col-span-4 bg-[#0e2038] border border-[#1f2f44] text-[#f4f7f9] p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
          <span className="text-xs uppercase tracking-widest text-[#00A887] font-bold mb-2 font-mono">
            Objectif Devenir Navigant
          </span>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-[#f4f7f9]">
            Devenez Personnel Navigant Commercial (PNC) grâce à notre formation spécialisée et préparez-vous à intégrer les compagnies aériennes nationales et internationales.
          </p>
          <div className="pt-4 text-xs font-mono uppercase tracking-wider text-[#00A887]">
            Diplôme d&apos;État CSS & Préparation Recrutement
          </div>
        </div>

        {/* Cell D: Soft Teal Tint Panel with 3 Benefits & Primary Action */}
        <div className="md:col-span-5 bg-[#e6f7f4] text-[#08111e] p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-2.5 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#00876c] font-black block mb-1 font-mono">
              Les 3 Piliers du Cursus
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#08111e]">
              <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0" />
              <span>Formation théorique et pratique.</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#08111e]">
              <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0" />
              <span>Préparation à l&apos;examen national du CSS.</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#08111e]">
              <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0" />
              <span>Coaching pour le recrutement auprès des compagnies aériennes.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToForm}
              className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/20"
            >
              <span>JE SOUHAITE ÊTRE RAPPELÉ</span>
            </button>
            <a
              href="tel:+33189000000"
              className="m-link text-xs font-bold uppercase tracking-wider text-[#234990]"
            >
              APPELER MAINTENANT
            </a>
          </div>
        </div>

        {/* Cell E: Deep Cobalt & Teal Alert Panel */}
        <div className="md:col-span-3 bg-[#1d3d78] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00A887] font-bold block mb-2 font-mono">
              Admissions Ouvertes
            </span>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-[#f4f7f9]">
              Donnez une nouvelle dimension à votre avenir professionnel.
            </p>
          </div>
          <div className="pt-4">
            <button
              onClick={scrollToForm}
              className="m-link text-xs uppercase tracking-wider text-[#00A887] font-bold"
            >
              Réserver votre place →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
