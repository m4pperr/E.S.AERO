"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  PlaneTakeoff,
  Briefcase,
  Clock,
  CheckCircle2,
  FileCheck,
  Layers,
  ArrowRight
} from "@/components/Icons";

export default function TimelineBlock01() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scrollToForm = () => {
    const el = document.getElementById("rappel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      step: "01",
      panelColor: "bg-[#234990] text-white",
      captionBg: "bg-[#08111e] text-white",
      title: "FORMATION THÉORIQUE",
      duration: "3 semaines – 114 heures",
      icon: BookOpen,
      image: "/images/hero-aircraft.jpg",
      imageCaption: "Aérodynamique, Sécurité & Météo · Centre E.S.AERO",
      description:
        "Une formation théorique dispensée dans notre centre, avec des entraînements aux QCM et des examens blancs pour vous préparer à l'examen national du CSS.",
      program: [
        "Formation à la lutte contre le feu et la fumée.",
        "Formation à la survie adaptée aux zones d'opérations.",
        "Instructions concernant les premiers secours.",
        "Formation à la survie et à l'hygiène appropriée.",
        "Discipline et responsabilités.",
        "Effets physiologiques en vol.",
        "Gestion des passagers.",
        "Communication.",
      ],
      exam: "Préparation à l'examen national du CSS théorique : examen écrit de type QCM d'une durée de 1h30 (1h sécurité + 30 min secourisme).",
    },
    {
      step: "02",
      panelColor: "bg-[#00A887] text-[#08111e]",
      captionBg: "bg-[#08111e] text-white",
      title: "FORMATION PRATIQUE",
      duration: "7 journées – 49 heures",
      icon: PlaneTakeoff,
      image: "/images/safety-training.jpg",
      imageCaption: "Simulateur Cabine · Évacuation & Feux Réels",
      description:
        "Après réception des résultats communiqués par la DACM et l'obtention de la théorie, la formation pratique débute selon les créneaux officiels.",
      program: [
        "Formation à la lutte contre le feu et la fumée.",
        "Formation à la survie adaptée aux zones d'opérations.",
        "Entraînement à la survie en milieu aquatique.",
        "Instructions concernant les premiers secours.",
        "Formation à la survie et à l'hygiène appropriée.",
        "Discipline et responsabilités.",
        "Gestion des passagers.",
        "Communication.",
      ],
      exam: "Épreuves pratiques officielles de la DACM : exercices réels feux, fumées, mise à l'eau et équipements d'urgence cabine.",
    },
    {
      step: "03",
      panelColor: "bg-[#0e2038] border border-[#1f2f44] text-[#f4f7f9]",
      captionBg: "bg-[#08111e] text-white",
      title: "COACHING RECRUTEMENT",
      duration: "5 jours",
      icon: Briefcase,
      image: "/images/cabin-crew.jpg",
      imageCaption: "Insertion Professionnelle · Compagnies Aériennes",
      description:
        "Un accompagnement dédié à la préparation au processus de recrutement des compagnies aériennes nationales et internationales.",
      program: [
        "Préparation aux entretiens d'embauche.",
        "Accompagnement au processus de recrutement.",
        "Préparation à la présentation professionnelle.",
        "Conseils pour intégrer le secteur aéronautique.",
      ],
      exam: "Mises en situation d'entretiens réels, perfectionnement de l'élocution et optimisation du dossier de candidature compagnies.",
    },
  ];

  // Pinned Horizontal Scroll logic on Desktop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setProgress(rawProgress);

      if (window.innerWidth >= 768) {
        const maxTranslate = trackRef.current.scrollWidth - window.innerWidth + 80;
        if (maxTranslate > 0) {
          trackRef.current.style.transform = `translate3d(-${rawProgress * maxTranslate}px, 0, 0)`;
        }
      } else {
        trackRef.current.style.transform = "none";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeStepIdx = Math.min(Math.floor(progress * steps.length), steps.length - 1);

  return (
    <section id="programme" ref={containerRef} className="relative md:h-[320vh] bg-[#08111e]">
      {/* Sticky Viewport Container on Desktop (Height 100vh) / Fluid on Mobile */}
      <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col justify-between overflow-hidden py-4 sm:py-6">
        
        {/* Header Panel */}
        <div className="max-w-[1500px] w-full mx-auto px-3 sm:px-6 mb-4">
          <div className="bg-[#1d3d78] text-white p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#2a4e94] shadow-xl">
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00A887]">
                <Layers className="w-3.5 h-3.5 text-[#00A887]" />
                <span>Cursus Officiel Aéronautique · Défilement Horizontal</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading uppercase leading-[0.95] tracking-tight">
                LE PARCOURS EN <span className="text-[#00A887]">3 ÉTAPES</span>
              </h2>
            </div>

            {/* Step Indicators and Progress */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs font-bold uppercase">
                {steps.map((s, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 transition-colors border ${
                      activeStepIdx === idx
                        ? "bg-[#00A887] text-[#08111e] border-[#00A887]"
                        : "bg-[#08111e]/40 text-slate-300 border-white/10"
                    }`}
                  >
                    {s.step} {idx === 0 ? "Théorie" : idx === 1 ? "Pratique" : "Coaching"}
                  </span>
                ))}
              </div>

              <button
                onClick={scrollToForm}
                className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/20 whitespace-nowrap"
              >
                S&apos;inscrire à la session
              </button>
            </div>
          </div>

          {/* Progress bar line on desktop */}
          <div className="hidden md:block w-full h-1 bg-white/10 overflow-hidden mt-1">
            <div
              className="h-full bg-[#00A887] transition-all duration-150 ease-out"
              style={{ width: `${Math.max(progress * 100, 5)}%` }}
            />
          </div>
        </div>

        {/* Horizontal Sliding Track on Desktop / Swipeable Snap Row on Mobile */}
        <div className="w-full overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory px-3 sm:px-6 flex-1 flex items-center">
          <div
            ref={trackRef}
            className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-stretch will-change-transform pb-4 md:pb-0"
          >
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`w-[90vw] md:w-[80vw] lg:w-[75vw] max-w-[1100px] shrink-0 snap-center ${item.panelColor} p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl flex flex-col justify-between border border-[#1f2f44]/80 transition-transform duration-300`}
                >
                  {/* Top Bar with Number, Title, Duration */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-current/20">
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-black text-4xl sm:text-5xl leading-none opacity-40">
                        {item.step}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#08111e] text-[#00A887] flex items-center justify-center shrink-0 rounded">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#08111e] text-[#f4f7f9] text-xs font-mono font-bold uppercase tracking-wider border border-white/10 rounded">
                      <Clock className="w-3.5 h-3.5 text-[#00A887]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* 2-Column Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Description & Photo */}
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                        {item.description}
                      </p>

                      <div className="overflow-hidden border border-black/20 rounded shadow-md">
                        <div className="relative w-full aspect-[16/9] bg-[#08111e]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 90vw, 35vw"
                          />
                        </div>
                        <div className={`${item.captionBg} px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider flex items-center justify-between`}>
                          <span className="truncate">{item.imageCaption}</span>
                          <span className="text-[#00A887] font-bold shrink-0 ml-2">E.S.AERO</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Program points & Exam Box */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-[#08111e]/15 p-4 sm:p-6 border border-current/15 rounded">
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-current" />
                          <span>Programme officiel :</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                          {item.program.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80 text-[#00A887]" />
                              <span className="leading-snug">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#08111e] text-[#f4f7f9] p-4 border-l-4 border-[#00A887] rounded-r">
                        <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00A887] mb-1">
                          <FileCheck className="w-3.5 h-3.5" />
                          <span>Examen & Validation Officielle</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          {item.exam}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom status */}
                  <div className="mt-4 pt-3 border-t border-current/15 flex items-center justify-between text-xs font-mono uppercase tracking-wider opacity-80">
                    <span>Étape {item.step} sur 03</span>
                    <span className="flex items-center gap-1 text-[#00A887] font-bold">
                      {idx < 2 ? "Étape suivante ➔" : "Cursus complet ✓"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Hint Strip on Desktop */}
        <div className="hidden md:flex items-center justify-between max-w-[1500px] w-full mx-auto px-3 sm:px-6 text-xs font-mono text-slate-400 pt-2">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
            <span>Faites défiler vers le bas pour faire glisser les étapes horizontalement</span>
          </span>
          <span className="text-[#00A887] font-bold">
            Progression : {Math.round(progress * 100)}%
          </span>
        </div>

      </div>
    </section>
  );
}
