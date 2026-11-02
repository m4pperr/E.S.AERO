"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/config";
import { ArrowRight, Phone } from "@/components/Icons";

const stats = [
  {
    value: "2015",
    label: "Première école en Algérie de formation PNC",
  },
  {
    value: "114 h",
    label: "de théorie",
  },
  {
    value: "49 h",
    label: "de pratique sur simulateur",
  },
  {
    value: "60 h",
    label: "de vol réel en compagnie aérienne",
  },
];

export default function StatsSection() {
  return (
    <section className="pt-4 pb-12 sm:pb-16 px-3 sm:px-6 max-w-[1400px] mx-auto w-full">
      {/* Grille 2x2 sur mobile, 4 colonnes sur grand écran */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#0e2038] border border-[#1f2f44] rounded-2xl p-4 sm:p-7 flex flex-col justify-center items-center text-center hover:border-[#00A887]/50 transition-colors shadow-lg"
          >
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#00A887] tracking-tight leading-none mb-2">
              {s.value}
            </span>
            <p className="text-xs sm:text-base text-slate-300 font-medium max-w-[280px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA lien centré */}
      <div className="flex justify-center">
        <a
          href={SITE_CONFIG.phonePrimary.tel}
          data-cta="cta_stats_call"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00A887] hover:text-white transition-colors group p-2"
        >
          <Phone className="w-4 h-4" />
          <span>Une question ? Appelez-nous</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
