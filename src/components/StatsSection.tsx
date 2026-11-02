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
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* Grille 2x2 (mobile et desktop) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-10">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#141212] border border-white/10 rounded-2xl p-4 sm:p-7 flex flex-col justify-center items-center text-center hover:border-[#F5A623]/40 transition-colors shadow-lg"
          >
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-[#F5A623] tracking-tight leading-none mb-2">
              {s.value}
            </span>
            <p className="text-xs sm:text-base text-[#F5F2EC]/85 font-medium max-w-[280px]">
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
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F5A623] hover:text-[#e69818] transition-colors group p-2"
        >
          <Phone className="w-4 h-4" />
          <span>Une question ? Appelez-nous</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

