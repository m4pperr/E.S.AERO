"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, ArrowUpRight, CheckCircle2 } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";
import { useScrollToSection } from "@/lib/useScrollToSection";

interface StepItem {
  number: string;
  title: string;
  duration: string;
  benefit: string;
  details: string[];
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Théorie",
    duration: "3 semaines · 114 h",
    benefit: "Vous arrivez à l'examen du CSS préparé(e), pas juste informé(e).",
    details: [
      "Cours dans notre centre, avec entraînements intensifs aux QCM et examens blancs.",
      "Au programme : lutte contre le feu et la fumée, survie, premiers secours, hygiène, discipline et responsabilités, effets physiologiques en vol, gestion des passagers, communication.",
      "Examen national du CSS (théorique) : QCM de 1 h 30, dont 1 h de sécurité et 30 min de premiers secours.",
    ],
  },
  {
    number: "02",
    title: "Pratique",
    duration: "7 jours · 49 h",
    benefit: "Vous apprenez les gestes qui sauvent, en conditions réelles.",
    details: [
      "Exercices réels de feux et de fumées, survie en milieu aquatique, mise à l'eau.",
      "Évacuation et utilisation des équipements d'urgence en cabine, sur notre simulateur.",
      "La session pratique démarre après la réception des résultats communiqués par la DACM, selon ses créneaux.",
    ],
  },
  {
    number: "03",
    title: "Vol réel",
    duration: "60 h en compagnie aérienne",
    benefit: "Vous passez de la salle de cours au ciel : vous appliquez ce que vous avez appris, pour de vrai.",
    details: [
      "Vous effectuez 60 heures de vol réel au sein d'une compagnie aérienne partenaire.",
      "Le but : vous exercer dans un environnement réel, valider votre apprentissage, découvrir le quotidien du métier et confirmer votre choix avant de vous lancer.",
    ],
  },
];

export default function StepsAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const scrollTo = useScrollToSection();

  const toggleStep = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1100px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5A623] mb-3 block">
          Méthode complète
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-[#F5F2EC]">
          3 ÉTAPES POUR PASSER DE LA PASSION{" "}
          <span className="text-[#F5A623]">AU MÉTIER</span>
        </h2>
      </div>

      {/* Accordéon : 3 cartes */}
      <div className="space-y-4 mb-10">
        {steps.map((step, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#141212] border-[#F5A623]/50 shadow-xl"
                  : "bg-[#141212]/60 border-white/10 hover:border-white/20"
              }`}
            >
              {/* En-tête toujours visible */}
              <button
                type="button"
                onClick={() => toggleStep(idx)}
                className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
                  <span className="text-2xl sm:text-3xl font-black font-heading text-[#F5A623] shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="text-lg sm:text-2xl font-bold font-heading text-white uppercase tracking-tight">
                        Étape {idx + 1} · {step.title}
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#F5A623]">
                        {step.duration}
                      </span>
                    </div>
                    {/* Le bénéfice est toujours visible */}
                    <p className="text-sm sm:text-base text-[#F5F2EC]/80 font-medium">
                      {step.benefit}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#F5A623] text-[#0b0a0a]" : "text-white"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Détail dépliable */}
              {isOpen && (
                <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-white/5">
                  <div className="space-y-3 pt-3">
                    {step.details.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-[#F5F2EC]/90 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA de la section */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-3">
          <a
            href={SITE_CONFIG.phonePrimary.tel}
            data-cta="cta_steps_call"
            className="btn-primary"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Connaître les dates de la prochaine session</span>
          </a>

          <button
            onClick={() => scrollTo("rappel")}
            data-cta="cta_steps_callback"
            className="btn-secondary cursor-pointer"
          >
            <span>Être rappelé</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-[#F5F2EC]/60 font-mono">
          On vous répond en 2 minutes.
        </p>
      </div>
    </section>
  );
}

