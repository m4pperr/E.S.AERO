"use client";

import React from "react";
import Image from "next/image";
import { useScrollToSection } from "@/lib/useScrollToSection";

const testimonials = [
  {
    image: "/images/cabin-crew.jpg",
    name: "Sarah M.",
    role: "Hôtesse de l'air certifiée",
    quote: "De la théorie au premier vol réel, un encadrement rigoureux et bienveillant.",
  },
  {
    image: "/images/safety-training.jpg",
    name: "Amine K.",
    role: "Steward en fonction",
    quote: "La pratique en simulateur et les 60 h de vol font toute la différence en entretien.",
  },
  {
    image: "/images/cabin-crew.jpg",
    name: "Yasmine B.",
    role: "Reconversion réussie",
    quote: "À 24 ans, j'ai osé changer de voie. E.S.AERO m'a donné toutes les clés.",
  },
  {
    image: "/images/safety-training.jpg",
    name: "Sofiane T.",
    role: "Personnel Navigant Commercial",
    quote: "Des formateurs qui connaissent le ciel et vous préparent à la réalité du terrain.",
  },
];

export default function TestimonialsSection() {
  const scrollTo = useScrollToSection();

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1300px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F5A623] mb-3 block">
          Témoignages & Réussites
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-[#F5F2EC] mb-5">
          ILS ONT CHANGÉ DE VIE.{" "}
          <span className="text-[#F5A623]">POURQUOI PAS VOUS ?</span>
        </h2>
        <p className="text-[17px] text-[#F5F2EC]/85 leading-[1.6]">
          Nous avons accompagné des adolescents, des jeunes et des adultes qui voulaient changer
          de vie : premier métier, nouveau départ, reconversion. Chacun est arrivé avec un projet
          et des questions. Chacun a fait le premier pas : un appel.
        </p>
      </div>

      {/* Carrousel horizontal (scroll-snap) de 3 à 4 captures d'écran de vidéos, format vertical 9:16 */}
      {/* Images statiques : pas de bouton lecture, pas de clic, pas de lien */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[240px] sm:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10 bg-[#141212] snap-center shadow-xl select-none"
          >
            <Image
              src={t.image}
              alt="Témoignage d'un ancien élève"
              fill
              sizes="(max-width: 640px) 240px, 280px"
              className="object-cover object-center filter brightness-90"
            />
            {/* Dégradé sombre pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0a] via-[#0b0a0a]/30 to-transparent pointer-events-none" />

            {/* Badge vidéo statique sans lecture */}
            <div className="absolute top-3 left-3 bg-[#0b0a0a]/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white">
              Retour d&apos;expérience
            </div>

            {/* Texte et profil du témoignage */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs sm:text-sm text-[#F5F2EC]/90 italic mb-2 leading-snug">
                « {t.quote} »
              </p>
              <div className="border-t border-white/15 pt-2">
                <p className="font-bold text-xs sm:text-sm text-white">{t.name}</p>
                <p className="text-[11px] text-[#F5A623] font-mono">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() => scrollTo("rappel")}
          data-cta="cta_proof_call"
          className="btn-primary cursor-pointer"
        >
          <span>Rejoindre la prochaine promotion</span>
        </button>
      </div>
    </section>
  );
}

