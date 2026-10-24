"use client";

import React from "react";
import Image from "next/image";
import { Plane } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

export default function HeroSection() {
  const scrollTo = useScrollToSection();

  const scrollToForm = () => scrollTo("rappel");
  const scrollToFormation = () => scrollTo("formation");

  return (
    <div className="relative min-h-svh w-full bg-[#08111e] flex flex-col justify-center">
      <div className="h-full w-full flex flex-col justify-center px-2.5 sm:px-6 max-w-[1500px] mx-auto pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-stretch h-full max-h-[720px]">
          {/* Cell A: Main Bold Title Panel (Royal Cobalt #234990) */}
          <div className="col-span-1 md:col-span-8 bg-[#234990] text-white p-5 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl rounded-2xl md:rounded-xl">
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

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00A887] bg-[#08111e]/70 px-3.5 py-1.5 w-fit border border-[#00A887]/30">
                <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
                <span>École Supérieure de l&apos;Aéronautique • Formation PNC</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-[0.92] tracking-tight uppercase my-3 sm:my-4">
                VOTRE AVENIR DANS L&apos;AÉRONAUTIQUE{" "}
                <span className="text-[#00A887] block mt-1">COMMENCE ICI.</span>
              </h1>

              <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Certification CSS</span>
                <span className="text-[#00A887]">•</span>
                <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Théorie 114h</span>
                <span className="text-[#00A887]">•</span>
                <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Pratique 49h</span>
                <span className="text-[#00A887]">•</span>
                <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Coaching 5j</span>
              </div>
            </div>

            {/* Action Call-to-action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={scrollToForm}
                className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/30 cursor-pointer"
              >
                <span>JE SOUHAITE ÊTRE RAPPELÉ</span>
              </button>
              <a
                href="tel:+33189000000"
                className="m-btn-dark text-xs font-black uppercase tracking-wider"
              >
                APPELER MAINTENANT
              </a>
            </div>

            {/* Micro hint pour inviter au scroll */}
            <button
              onClick={scrollToFormation}
              className="pt-2 sm:pt-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-300/80 hover:text-white transition-colors cursor-pointer w-fit text-left"
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

          {/* Cell B: Portrait Photo Panel (Desktop) */}
          <div className="hidden md:flex md:col-span-4 bg-[#0e2038] border border-[#1f2f44] flex-col justify-between overflow-hidden relative shadow-2xl rounded-xl">
            <div className="relative flex-1 w-full min-h-[300px] bg-[#08111e] overflow-hidden">
              <Image
                src="/images/cabin-crew.jpg"
                alt="Équipage navigant commercial en uniforme"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                sizes="35vw"
                quality={90}
              />
            </div>
            <div className="bg-[#00A887] text-[#08111e] px-4 py-3 text-xs font-bold tracking-wider uppercase font-mono flex items-center justify-between">
              <span>Équipage E.S.AERO · En vol</span>
              <Plane className="w-3.5 h-3.5 text-[#08111e]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
