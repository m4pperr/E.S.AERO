"use client";

import React from "react";
import {
  BookOpen,
  PlaneTakeoff,
  Briefcase,
  Clock,
  CheckCircle2,
  FileCheck,
  Calendar,
  Layers,
  ArrowRight
} from "@/components/Icons";

export default function TrainingSection() {
  const scrollToForm = () => {
    const el = document.getElementById("rappel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const card1Program = [
    "Formation à la lutte contre le feu et la fumée.",
    "Formation à la survie adaptée aux zones d'opérations.",
    "Instructions concernant les premiers secours.",
    "Formation à la survie et à l'hygiène appropriée.",
    "Discipline et responsabilités.",
    "Effets physiologiques en vol.",
    "Gestion des passagers.",
    "Communication.",
  ];

  const card2Program = [
    "Formation à la lutte contre le feu et la fumée.",
    "Formation à la survie adaptée aux zones d'opérations.",
    "Entraînement à la survie en milieu aquatique.",
    "Instructions concernant les premiers secours.",
    "Formation à la survie et à l'hygiène appropriée.",
    "Discipline et responsabilités.",
    "Gestion des passagers.",
    "Communication.",
  ];

  const card3Benefits = [
    "Préparation aux entretiens.",
    "Accompagnement au processus de recrutement.",
    "Préparation à la présentation professionnelle.",
    "Conseils pour intégrer le secteur aéronautique.",
  ];

  return (
    <section id="programme" className="py-20 lg:py-28 bg-[#F5F7FA] relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#079DE3] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Cursus Officiel & Homologué</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F36] tracking-tight leading-tight mb-4">
            UNE FORMATION COMPLÈTE EN{" "}
            <span className="text-[#079DE3]">3 ÉTAPES</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Un programme structuré pas à pas pour acquérir les compétences réglementaires, maîtriser les gestes de sécurité d&apos;urgence et maximiser vos chances d&apos;embauche en compagnie aérienne.
          </p>
        </div>

        {/* 3 Columns Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* ================= CARD 1 – THÉORIE ================= */}
          <div className="flex flex-col bg-white rounded-2xl border-2 border-slate-200/80 hover:border-[#079DE3] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Top Step Banner */}
            <div className="bg-[#0B1F36] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#079DE3]/20 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-[#079DE3] text-white text-xs font-bold tracking-widest uppercase">
                  Étape 01
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#079DE3] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-[#079DE3]" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-white mb-2">
                FORMATION THÉORIQUE
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
                <Clock className="w-4 h-4 text-[#079DE3]" />
                <span>Durée : 3 semaines – 114 heures</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  Une formation théorique dispensée dans notre centre, avec des entraînements aux QCM et des examens blancs pour vous préparer à l&apos;examen national du CSS.
                </p>

                {/* Program Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F36] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#079DE3]" />
                    Programme d&apos;enseignement :
                  </h4>
                  <ul className="space-y-2.5">
                    {card1Program.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#079DE3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Examen Box */}
              <div className="mt-4 p-4 rounded-xl bg-[#EBF7FD] border border-[#079DE3]/30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F36] uppercase tracking-wide mb-1.5">
                  <FileCheck className="w-4 h-4 text-[#079DE3]" />
                  <span>Examen National CSS Théorique</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Préparation à l&apos;examen national du CSS théorique : examen écrit de type QCM d&apos;une durée de 1h30, comprenant 1 heure consacrée à la sécurité et 30 minutes aux premiers secours.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CARD 2 – PRATIQUE ================= */}
          <div className="flex flex-col bg-white rounded-2xl border-2 border-[#079DE3]/50 hover:border-[#079DE3] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative group">
            {/* Recommended/Core Tag */}
            <div className="bg-gradient-to-r from-[#079DE3] to-[#0585c2] p-6 text-white relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-[#0B1F36] text-white text-xs font-bold tracking-widest uppercase">
                  Étape 02
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <PlaneTakeoff className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-white mb-2">
                FORMATION PRATIQUE
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 border border-white/25 text-white text-xs font-semibold">
                <Calendar className="w-4 h-4 text-white" />
                <span>Durée : 7 journées – 49 heures</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  Après réception des résultats des stagiaires communiqués par la DACM et l&apos;obtention de la partie théorique, la formation pratique débute selon les dates de disponibilité de la DACM.
                </p>

                {/* Program Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F36] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#079DE3]" />
                    Entraînements pratiques & sécurité :
                  </h4>
                  <ul className="space-y-2.5">
                    {card2Program.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#079DE3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Note / Pratique Badge */}
              <div className="mt-4 p-4 rounded-xl bg-[#F5F7FA] border border-slate-200">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Mises en situation réelles cabine, exercices feux et fumées, manipulation des équipements d&apos;évacuation et gestes de survie aquatique.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CARD 3 – COACHING RECRUTEMENT ================= */}
          <div className="flex flex-col bg-white rounded-2xl border-2 border-slate-200/80 hover:border-[#079DE3] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Top Step Banner */}
            <div className="bg-[#0B1F36] p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#079DE3]/20 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-[#079DE3] text-white text-xs font-bold tracking-widest uppercase">
                  Étape 03
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#079DE3] group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-[#079DE3]" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-white mb-2">
                COACHING RECRUTEMENT
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
                <Clock className="w-4 h-4 text-[#079DE3]" />
                <span>Durée : 5 jours</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  Un accompagnement dédié à la préparation au processus de recrutement des compagnies aériennes nationales et internationales.
                </p>

                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F36] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#079DE3]" />
                    Points clés de l&apos;accompagnement :
                  </h4>
                  <ul className="space-y-3">
                    {card3Benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#079DE3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recruitment focus card */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#0B1F36]/5 to-[#079DE3]/10 border border-[#079DE3]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B1F36]">Objectif Carrière</span>
                  <span className="text-[11px] text-[#079DE3] font-bold">Compagnies Aériennes</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Optimisation de votre dossier, simulations d&apos;entretiens individuels et d&apos;épreuves de groupe.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA for section 3 */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#0B1F36] hover:bg-[#132D4B] text-white text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>Commencer votre inscription à la prochaine session</span>
            <ArrowRight className="w-4 h-4 text-[#079DE3]" />
          </button>
        </div>
      </div>
    </section>
  );
}
