"use client";

import React from "react";
import Image from "next/image";
import { useScrollToSection } from "@/lib/useScrollToSection";

const testimonials = [
  {
    image: "/images/pratique-equipement.webp",
    badge: "Formation Cabine",
    name: "Démonstration Sécurité",
    role: "Maîtrise des équipements d'urgence à bord",
    quote: "On apprend chaque geste technique dans les conditions exactes des compagnies aériennes.",
  },
  {
    image: "/images/pratique-secours.webp",
    badge: "Premiers Secours",
    name: "Mise en situation réelle",
    role: "Prise en charge médicale en cabine",
    quote: "Les exercices pratiques sur simulateur nous donnent une vraie assurance pour le jour J.",
  },
  {
    image: "/images/pratique-piscine.webp",
    badge: "Survie Aquatique",
    name: "Entraînement Piscine",
    role: "Exercice officiel de mise à l'eau & sauvetage",
    quote: "Une préparation complète sur le terrain qui fait toute la différence à l'examen du CSS.",
  },
];

export default function TestimonialsSection() {
  const scrollTo = useScrollToSection();

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1300px] mx-auto w-full">
      {/* En-tête */}
      <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] mb-3 block">
          Immersion & Réussites
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase text-white mb-5">
          ILS ONT CHANGÉ DE VIE.{" "}
          <span className="text-[#00A887]">POURQUOI PAS VOUS ?</span>
        </h2>
        <p className="text-[17px] text-slate-300 leading-[1.6]">
          Nous avons accompagné des adolescents, des jeunes et des adultes qui voulaient changer
          de vie : premier métier, nouveau départ, reconversion. Chacun est arrivé avec un projet
          et des questions. Chacun a fait le premier pas : un appel.
        </p>
      </div>

      {/* Carrousel horizontal (scroll-snap) des 3 photos réelles format vertical 9:16 */}
      <div className="flex md:justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[260px] sm:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden relative border border-[#1f2f44] bg-[#0e2038] snap-center shadow-xl select-none"
          >
            <Image
              src={t.image}
              alt="Témoignage d'un ancien élève"
              fill
              sizes="(max-width: 640px) 260px, 300px"
              className="object-cover object-center"
            />
            {/* Dégradé sombre en bas uniquement pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08111e] via-[#08111e]/25 to-transparent pointer-events-none" />

            {/* Badge statique sans bouton lecture */}
            <div className="absolute top-3 left-3 bg-[#08111e]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#1f2f44] text-[10px] font-mono uppercase tracking-wider text-[#00A887] font-bold">
              {t.badge}
            </div>

            {/* Texte et légende */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs sm:text-sm text-slate-100 italic mb-2.5 leading-snug drop-shadow">
                « {t.quote} »
              </p>
              <div className="border-t border-white/15 pt-2">
                <p className="font-bold text-xs sm:text-sm text-white">{t.name}</p>
                <p className="text-[11px] text-[#00A887] font-mono">{t.role}</p>
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
