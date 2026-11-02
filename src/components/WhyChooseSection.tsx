"use client";

import React from "react";
import { Plane, Award, Users, ShieldCheck } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

const cards = [
  {
    icon: ShieldCheck,
    title: "Aux standards européens",
    description: "Un programme inspiré des normes européennes, pas de pratiques dépassées.",
  },
  {
    icon: Users,
    title: "Des formateurs d'expérience",
    description: "D'anciens responsables de formation PNC en compagnie européenne : ils savent ce que le métier exige.",
  },
  {
    icon: Award,
    title: "Une école pionnière depuis 2015",
    description: "Nous formons des navigants en Algérie depuis plus de dix ans.",
  },
  {
    icon: Plane,
    title: "60 h de vol réel",
    description: "Vous ne restez pas en salle : vous validez votre apprentissage à bord, en conditions réelles.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5A623] mb-3 block">
          Ce que personne ne copie
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-[#F5F2EC]">
          POURQUOI CHOISIR <span className="text-[#F5A623]">E.S.AERO ?</span>
        </h2>
      </div>

      {/* 4 cartes en grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
        {cards.map((c, idx) => {
          const IconComp = c.icon;
          return (
            <div
              key={idx}
              className="bg-[#141212] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#F5A623]/40 transition-colors shadow-lg group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/20 flex items-center justify-center text-[#F5A623] mb-5 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white uppercase tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F5F2EC]/80 leading-relaxed font-normal">
                  {c.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href={SITE_CONFIG.phonePrimary.tel}
          data-cta="cta_why_call"
          className="btn-primary"
        >
          <span>Voir si l&apos;école vous correspond</span>
        </a>
      </div>
    </section>
  );
}
