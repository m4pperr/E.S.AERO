"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { Phone, ArrowUpRight, CheckCircle2 } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";
import { useScrollToSection } from "@/lib/useScrollToSection";

interface StepItem {
  number: string;
  title: string;
  duration: string;
  benefit: string;
  details: string[];
  image: string;
  alt: string;
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
    image: "/images/theorie-classe.jpg",
    alt: "Salle de cours théorique de formation PNC et sécurité en cabine",
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
    image: "/images/pratique-piscine.webp",
    alt: "Exercice de survie en milieu aquatique",
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
    image: "/images/cabin-crew.jpg",
    alt: "Équipage en cabine d'avion",
  },
];

const STAGE_TOKENS = ["", "1", "12", "123", "1234", "12345"] as const;

/**
 * Convertit la progression de scroll (0 -> 1) en palier discret (0 -> 5).
 * Aucun re-render React ni mutation `style` par frame : seul l'attribut `data-stage`
 * du conteneur change aux 5 seuils, et le compositeur GPU anime via CSS transitions.
 */
function getStepStage(progress: number): number {
  if (progress >= 0.60) return 5; // Point 3
  if (progress >= 0.44) return 4; // Point 2
  if (progress >= 0.28) return 3; // Point 1
  if (progress >= 0.15) return 2; // Benefit
  if (progress >= 0.03) return 1; // Badge + Titre + Zoom image
  return 0;
}

const DETAIL_STAGE_CLASS = [
  "group-data-[stage*=3]:opacity-100 group-data-[stage*=3]:translate-y-0",
  "group-data-[stage*=4]:opacity-100 group-data-[stage*=4]:translate-y-0",
  "group-data-[stage*=5]:opacity-100 group-data-[stage*=5]:translate-y-0",
] as const;

function StickyStep({
  step,
  idx,
  setRef,
}: {
  step: StepItem;
  idx: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const isReversed = idx === 1;
  const revealBase =
    "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu";

  return (
    <div
      ref={setRef}
      data-stage=""
      className="group relative h-[185svh] md:h-[200svh]"
    >
      <div className="sticky top-16 md:top-20 h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] flex items-center py-3 sm:py-6 transform-gpu">
        <article className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Colonne Image : zoom déclenché par palier CSS (zéro re-rasterisation par frame) */}
          <div
            className={`md:col-span-6 ${
              isReversed ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="relative h-44 sm:h-56 md:h-auto md:aspect-[4/3] lg:aspect-[16/11] w-full rounded-2xl border border-[#1f2f44] shadow-md md:shadow-2xl overflow-hidden bg-[#0e2038]">
              <div className="relative w-full h-full md:scale-[1.08] md:group-data-[stage*=1]:scale-100 md:transition-transform md:duration-700 md:ease-out">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  loading="eager"
                  decoding="async"
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne Texte avec fine barre de progression verticale */}
          <div
            className={`md:col-span-6 ${
              isReversed ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="relative pl-4 sm:pl-6 lg:pl-8">
              {/* Fine barre de progression verticale #00A887 */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[#1f2f44] overflow-hidden"
              >
                <div className="w-full h-full bg-[#00A887] origin-top transition-transform duration-500 ease-out transform-gpu scale-y-[0.08] group-data-[stage*=1]:scale-y-[0.25] group-data-[stage*=2]:scale-y-[0.45] group-data-[stage*=3]:scale-y-[0.65] group-data-[stage*=4]:scale-y-[0.85] group-data-[stage*=5]:scale-y-100" />
              </div>

              {/* Numéro géant en filigrane + badge durée */}
              <div
                className={`relative flex flex-wrap items-center gap-3 sm:gap-4 mb-1.5 sm:mb-3 opacity-35 translate-y-3 group-data-[stage*=1]:opacity-100 group-data-[stage*=1]:translate-y-0 ${revealBase}`}
              >
                <span
                  aria-hidden="true"
                  className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading leading-none text-[#00A887]/20 select-none"
                >
                  {step.number}
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#08111e] text-[#00A887] border border-[#00A887]/30">
                  {step.duration}
                </span>
              </div>

              {/* Titre */}
              <h3
                className={`text-xl sm:text-2xl lg:text-4xl font-black font-heading text-white uppercase tracking-tight mb-1.5 sm:mb-3 opacity-0 translate-y-5 group-data-[stage*=1]:opacity-100 group-data-[stage*=1]:translate-y-0 ${revealBase}`}
              >
                Étape {idx + 1} · {step.title}
              </h3>

              {/* Benefit */}
              <p
                className={`text-sm sm:text-base lg:text-lg text-[#00A887] font-semibold mb-3 sm:mb-6 leading-snug opacity-0 translate-y-5 group-data-[stage*=2]:opacity-100 group-data-[stage*=2]:translate-y-0 ${revealBase}`}
              >
                {step.benefit}
              </p>

              {/* Points details révélés un par un aux paliers 3, 4, 5 */}
              <div className="space-y-2.5 sm:space-y-3.5 border-t border-[#1f2f44] pt-3 sm:pt-5">
                {step.details.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className={`flex items-start gap-2.5 sm:gap-3 opacity-0 translate-y-5 ${
                      DETAIL_STAGE_CLASS[pIdx] ?? DETAIL_STAGE_CLASS[2]
                    } ${revealBase}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5 sm:mt-1" />
                    <p className="text-[13px] sm:text-sm lg:text-base text-slate-200 leading-snug sm:leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function StaticReducedMotionStepCard({
  step,
  idx,
}: {
  step: StepItem;
  idx: number;
}) {
  const isReversed = idx === 1;

  return (
    <article className="rounded-2xl bg-[#0e2038] border border-[#1f2f44] shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
        <div
          className={`md:col-span-6 ${
            isReversed ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#1f2f44] shadow-md bg-[#08111e]">
            <Image
              src={step.image}
              alt={step.alt}
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={`md:col-span-6 ${
            isReversed ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
            <span className="text-2xl sm:text-3xl font-black font-heading text-[#00A887] leading-none">
              {step.number}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold font-heading text-white uppercase tracking-tight">
              Étape {idx + 1} · {step.title}
            </h3>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#08111e] text-[#00A887] border border-[#00A887]/20">
              {step.duration}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-medium mb-4">
            {step.benefit}
          </p>

          <div className="space-y-3 pt-4 border-t border-[#1f2f44]">
            {step.details.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CinematicStepsSection() {
  const scrollTo = useScrollToSection();
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stagesRef = useRef<number[]>([0, 0, 0]);

  useEffect(() => {
    if (reducedMotion) return;

    let rafId = 0;
    let ticking = false;
    // Cache les positions géométriques pour éviter tout getBoundingClientRect() pendant le scroll
    let metrics: { top: number; scrollable: number }[] = [];

    const measure = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      metrics = steps.map((_, i) => {
        const el = stepRefs.current[i];
        if (!el) return { top: 0, scrollable: 1 };
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + scrollY,
          scrollable: Math.max(1, rect.height - vh + 80),
        };
      });
    };

    const updateStages = () => {
      ticking = false;
      const scrollY = window.scrollY;

      for (let i = 0; i < steps.length; i++) {
        const el = stepRefs.current[i];
        const m = metrics[i];
        if (!el || !m) continue;

        const rawProgress = (scrollY - m.top + 80) / m.scrollable;
        const progress = Math.max(0, Math.min(1, rawProgress));
        const nextStage = getStepStage(progress);

        if (nextStage !== stagesRef.current[i]) {
          stagesRef.current[i] = nextStage;
          el.dataset.stage = STAGE_TOKENS[nextStage];
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(updateStages);
      }
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    updateStages();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1100px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] mb-3 block">
          Méthode complète
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-white">
          3 ÉTAPES POUR PASSER DE LA PASSION{" "}
          <span className="text-[#00A887]">AU MÉTIER</span>
        </h2>
      </div>

      {/* Liste des 3 étapes : animation sticky cinématique 100 % GPU (zéro re-render React au scroll) */}
      <div className={reducedMotion ? "space-y-6 mb-10" : "mb-12"}>
        {steps.map((step, idx) =>
          reducedMotion ? (
            <StaticReducedMotionStepCard key={step.number} step={step} idx={idx} />
          ) : (
            <StickyStep
              key={step.number}
              step={step}
              idx={idx}
              setRef={(el) => {
                stepRefs.current[idx] = el;
              }}
            />
          )
        )}
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
        <p className="text-xs text-slate-400 font-mono">
          On vous répond en 2 minutes.
        </p>
      </div>
    </section>
  );
}
