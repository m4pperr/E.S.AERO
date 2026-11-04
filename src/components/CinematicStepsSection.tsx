"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
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
    image: "/images/safety-training.jpg",
    alt: "Formation théorique à la sécurité en cabine",
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

const DETAIL_THRESHOLDS: [number, number][] = [
  [0.30, 0.44],
  [0.46, 0.60],
  [0.62, 0.76],
];

function StickyDetailPoint({
  point,
  index,
  progress,
}: {
  point: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const range = DETAIL_THRESHOLDS[index] ?? [0.64, 0.76];
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [28, 0]);

  return (
    <motion.div style={{ opacity, y }} className="flex items-start gap-2.5 sm:gap-3">
      <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5 sm:mt-1" />
      <p className="text-[13px] sm:text-sm lg:text-base text-slate-200 leading-snug sm:leading-relaxed">
        {point}
      </p>
    </motion.div>
  );
}

function StickyStep({
  step,
  idx,
}: {
  step: StepItem;
  idx: number;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 80px", "end end"],
  });

  // Image : zoom 1.12 -> 1 et parallax léger translateY -3% -> 3%
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  // Barre de progression verticale #00A887
  const barScaleY = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  // Révélations progressives des textes (opacity -> 1, y -> 0)
  // 1) Numéro géant en filigrane + badge durée
  const badgeOpacity = useTransform(scrollYProgress, [0.0, 0.10], [0.2, 1]);
  const badgeY = useTransform(scrollYProgress, [0.0, 0.10], [18, 0]);

  // 2) Titre
  const titleOpacity = useTransform(scrollYProgress, [0.04, 0.16], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.04, 0.16], [24, 0]);

  // 3) Benefit
  const benefitOpacity = useTransform(scrollYProgress, [0.16, 0.28], [0, 1]);
  const benefitY = useTransform(scrollYProgress, [0.16, 0.28], [24, 0]);

  const isReversed = idx === 1;

  return (
    <div ref={stepRef} className="relative h-[185svh] md:h-[200svh]">
      <div className="sticky top-16 md:top-20 h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] flex items-center py-3 sm:py-6">
        <article className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Colonne Image */}
          <div
            className={`md:col-span-6 ${
              isReversed ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="relative h-44 sm:h-56 md:h-auto md:aspect-[4/3] lg:aspect-[16/11] w-full rounded-2xl border border-[#1f2f44] shadow-2xl overflow-hidden bg-[#0e2038]">
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="absolute -inset-y-[4%] inset-x-0"
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
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
                <motion.div
                  style={{ scaleY: barScaleY }}
                  className="w-full h-full bg-[#00A887] origin-top"
                />
              </div>

              {/* Numéro géant en filigrane + badge durée (p ≈ 0.08) */}
              <motion.div
                style={{ opacity: badgeOpacity, y: badgeY }}
                className="relative flex flex-wrap items-center gap-3 sm:gap-4 mb-1.5 sm:mb-3"
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
              </motion.div>

              {/* Titre (p ≈ 0.18) */}
              <motion.h3
                style={{ opacity: titleOpacity, y: titleY }}
                className="text-xl sm:text-2xl lg:text-4xl font-black font-heading text-white uppercase tracking-tight mb-1.5 sm:mb-3"
              >
                Étape {idx + 1} · {step.title}
              </motion.h3>

              {/* Benefit (p ≈ 0.30) */}
              <motion.p
                style={{ opacity: benefitOpacity, y: benefitY }}
                className="text-sm sm:text-base lg:text-lg text-[#00A887] font-semibold mb-3 sm:mb-6 leading-snug"
              >
                {step.benefit}
              </motion.p>

              {/* Points details révélés un par un (0.42, 0.56, 0.70) */}
              <div className="space-y-2.5 sm:space-y-3.5 border-t border-[#1f2f44] pt-3 sm:pt-5">
                {step.details.map((point, pIdx) => (
                  <StickyDetailPoint
                    key={pIdx}
                    point={point}
                    index={pIdx}
                    progress={scrollYProgress}
                  />
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

      {/* Liste des 3 étapes : animation sticky cinématique sur mobile ET desktop */}
      <div className={reducedMotion ? "space-y-6 mb-10" : "mb-12"}>
        {steps.map((step, idx) =>
          reducedMotion ? (
            <StaticReducedMotionStepCard key={step.number} step={step} idx={idx} />
          ) : (
            <StickyStep key={step.number} step={step} idx={idx} />
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
