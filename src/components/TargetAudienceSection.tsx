"use client";

import React from "react";
import { GraduationCap, HeartHandshake, RefreshCw, CheckCircle, Phone } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

const audiences = [
  {
    icon: GraduationCap,
    title: "Vous êtes étudiant(e) ou jeune diplômé(e)",
    description:
      "Un métier, un uniforme, le monde comme terrain de jeu. Une formation courte et structurée, jusqu'aux vols réels.",
  },
  {
    icon: HeartHandshake,
    title: "Vous êtes parent",
    description:
      "Une école sérieuse, des formateurs d'expérience, un métier d'avenir. Appelez-nous avec votre enfant : on répond à toutes vos questions.",
  },
  {
    icon: RefreshCw,
    title: "Vous êtes en reconversion",
    description:
      "Vous voulez changer de vie ? Parlons de votre projet.",
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5A623] mb-3 block">
          Vous êtes au bon endroit
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-[#F5F2EC]">
          CETTE FORMATION EST FAITE <span className="text-[#F5A623]">POUR VOUS SI…</span>
        </h2>
      </div>

      {/* 3 blocs sans bouton individuel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {audiences.map((a, idx) => {
          const IconComp = a.icon;
          return (
            <div
              key={idx}
              className="bg-[#141212] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-start hover:border-[#F5A623]/40 transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-5">
                <IconComp className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white uppercase tracking-tight mb-3">
                {a.title}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2EC]/80 leading-relaxed font-normal">
                {a.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Encadré Conditions d'admission mis en valeur */}
      <div className="bg-[#141212] border-2 border-[#F5A623]/60 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5A623] block mb-2">
              Admissions
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-white uppercase tracking-tight mb-4">
              Conditions d&apos;admission
            </h3>

            <ul className="space-y-2.5 text-sm sm:text-base text-[#F5F2EC]/90">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span><strong>Âge :</strong> 19 ans et plus</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span><strong>Niveau :</strong> terminale minimum</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span><strong>Autres critères :</strong> appelez-nous pour vérifier votre éligibilité</span>
              </li>
            </ul>
          </div>

          {/* CTA primaire dans l'encadré */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              data-cta="cta_eligibility_call"
              className="btn-primary"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Vérifier mon éligibilité</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

