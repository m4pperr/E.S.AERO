"use client";

import React from "react";
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
      exam: "Préparation à l'examen national du CSS théorique : examen écrit de type QCM d'une durée de 1h30, comprenant 1 heure consacrée à la sécurité et 30 minutes aux premiers secours.",
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
        "Après réception des résultats des stagiaires communiqués par la DACM et l'obtention de la partie théorique, la formation pratique débute selon les dates de disponibilité de la DACM.",
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
      exam: "Épreuves pratiques officielles selon les créneaux de la DACM : exercices réels feux, fumées, mise à l'eau et utilisation des équipements d'urgence en cabine.",
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
        "Préparation aux entretiens.",
        "Accompagnement au processus de recrutement.",
        "Préparation à la présentation professionnelle.",
        "Conseils pour intégrer le secteur aéronautique.",
      ],
      exam: "Mises en situation d'entretiens réels, perfectionnement de la prise de parole en public et optimisation du dossier de candidature pour les sélections compagnies.",
    },
  ];

  return (
    <section id="programme" className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e]">
      {/* Section Header Panel */}
      <div className="bg-[#1d3d78] text-white p-6 sm:p-10 lg:p-14 mb-2 sm:mb-3.5 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00A887]">
            <Layers className="w-3.5 h-3.5 text-[#00A887]" />
            <span>Cursus Officiel Aéronautique</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading uppercase leading-[0.95] tracking-tight">
            UNE FORMATION COMPLÈTE EN{" "}
            <span className="text-[#00A887]">3 ÉTAPES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
            Un parcours chronologique rigoureux combinant enseignement théorique, entraînements pratiques sur simulateur cabine et coaching professionnel pour réussir votre entrée en compagnie.
          </p>
        </div>
        <div className="shrink-0">
          <button
            onClick={scrollToForm}
            className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/20"
          >
            S&apos;inscrire à la session
          </button>
        </div>
      </div>

      {/* The 3 Steps Panels */}
      <div className="space-y-2 sm:space-y-3.5">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`${item.panelColor} p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group`}
            >
              {/* Left Column: Number, Title, Duration, Description & Photography */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-5xl sm:text-7xl leading-none opacity-40">
                    {item.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#08111e] text-[#f4f7f9] text-xs font-mono font-bold uppercase tracking-wider border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#00A887]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#08111e] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#00A887]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-95">
                    {item.description}
                  </p>
                </div>

                {/* Edge-to-edge photograph with caption strip */}
                <div className="overflow-hidden border-2 border-[#08111e]/20 shadow-md">
                  <div className="relative w-full aspect-[16/10] bg-[#08111e]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className={`${item.captionBg} px-3.5 py-2 text-xs font-mono uppercase tracking-wider flex items-center justify-between`}>
                    <span>{item.imageCaption}</span>
                    <span className="text-[#00A887] font-bold">E.S.AERO</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Program Checklist & Exam Box */}
              <div className="lg:col-span-7 space-y-6 lg:pl-4">
                <div className="bg-[#08111e]/15 p-6 sm:p-8 border border-current/15">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-current" />
                    <span>Programme d&apos;enseignement :</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {item.program.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exam Note Box */}
                <div className="bg-[#08111e] text-[#f4f7f9] p-6 border-l-4 border-[#00A887]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A887] mb-2">
                    <FileCheck className="w-4 h-4" />
                    <span>Examen & Validation Officielle</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.exam}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
