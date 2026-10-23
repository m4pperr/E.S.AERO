"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  PlaneTakeoff,
  Briefcase,
  Clock,
  CheckCircle2,
  Layers,
} from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

/**
 * Section compacte qui fusionne l'ancienne Intro, la Timeline horizontale (320vh)
 * et "Pourquoi E.S.AERO" : un seul écran, 3 étapes lisibles d'un coup d'œil.
 */
const steps = [
  {
    step: "01",
    panel: "bg-[#234990] text-white",
    accent: "text-[#00A887]",
    title: "Théorie",
    duration: "3 semaines · 114h",
    icon: BookOpen,
    image: "/images/hero-aircraft.jpg",
    points: [
      "Lutte contre le feu et la fumée",
      "Survie & premiers secours",
      "Gestion des passagers",
      "QCM & examens blancs CSS",
    ],
  },
  {
    step: "02",
    panel: "bg-[#00A887] text-[#08111e]",
    accent: "text-[#08111e]",
    title: "Pratique",
    duration: "7 jours · 49h",
    icon: PlaneTakeoff,
    image: "/images/safety-training.jpg",
    points: [
      "Exercices feux & fumées réels",
      "Survie en milieu aquatique",
      "Équipements d'urgence cabine",
      "Épreuves officielles DACM",
    ],
  },
  {
    step: "03",
    panel: "bg-[#0e2038] border border-[#1f2f44] text-[#f4f7f9]",
    accent: "text-[#00A887]",
    title: "Coaching",
    duration: "5 jours",
    icon: Briefcase,
    image: "/images/cabin-crew.jpg",
    points: [
      "Préparation aux entretiens",
      "Présentation professionnelle",
      "Dossier de candidature",
      "Accès aux compagnies aériennes",
    ],
  },
];

const highlights = [
  "Diplôme d'État CSS",
  "Examens blancs inclus",
  "Simulateur cabine",
  "Coaching recrutement",
];

export default function ProgrammeSection() {
  const scrollTo = useScrollToSection();

  return (
    <div className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto">
      {/* Header */}
      <div className="bg-[#1d3d78] text-white p-6 sm:p-8 lg:p-10 mb-2 sm:mb-3.5 border border-[#2a4e94] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Un parcours complet · 1 seule école</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading uppercase leading-[0.95] tracking-tight">
            DEVENEZ PNC EN <span className="text-[#00A887]">3 ÉTAPES</span>
          </h2>
        </div>

        {/* Atouts (ex-section "Pourquoi E.S.AERO") */}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm font-bold">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3.5">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.step}
              className={`${item.panel} flex flex-col group transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="relative w-full aspect-[16/8] overflow-hidden bg-[#08111e]">
                <Image
                  src={item.image}
                  alt={`Formation PNC – ${item.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 font-heading font-black text-5xl leading-none text-white/90 drop-shadow-lg">
                  {item.step}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-[#08111e] text-[#00A887] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl font-black font-heading uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#08111e] text-[#f4f7f9] text-[11px] font-mono font-bold uppercase tracking-wider whitespace-nowrap">
                    <Clock className="w-3 h-3 text-[#00A887]" />
                    {item.duration}
                  </span>
                </div>

                <ul className="space-y-2 text-sm">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${item.accent}`} />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* Inline CTA (remplace l'ancienne grosse bannière) */}
      <div className="mt-2 sm:mt-3.5 bg-[#08111e] border border-[#1f2f44] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-slate-200">
          <span className="inline-block px-2 py-0.5 mr-2 bg-[#00A887] text-[#08111e] text-[11px] font-mono font-black uppercase tracking-widest align-middle">
            Inscriptions ouvertes
          </span>
          Places limitées pour la prochaine session.
        </p>
        <button
          onClick={() => scrollTo("rappel")}
          className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/20 whitespace-nowrap"
        >
          <span>RÉSERVER MON APPEL GRATUIT</span>
        </button>
      </div>
    </div>
  );
}
