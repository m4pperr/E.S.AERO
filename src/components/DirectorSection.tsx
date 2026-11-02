"use client";

import React from "react";
import Image from "next/image";
import { Phone, Quote } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

export default function DirectorSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-[1300px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Photo portrait authentique (empilée au-dessus sur mobile, aucun lien) */}
        <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#1f2f44] shadow-2xl bg-[#08111e]">
            <Image
              src="/images/directeur.webp"
              alt="M. Moudar Lyes, directeur d'E.S.AERO"
              fill
              sizes="(max-width: 1024px) 90vw, 35vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08111e]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0e2038]/90 backdrop-blur-md border border-[#1f2f44] text-center">
              <p className="font-bold text-white text-sm">M. Moudar Lyes</p>
              <p className="text-xs text-[#00A887] font-mono">Directeur d&apos;E.S.AERO · Ancien steward en Europe</p>
            </div>
          </div>
        </div>

        {/* Contenu textuel, biographie et citation */}
        <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col justify-center">
          {/* Surtitre */}
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] mb-3 block">
            Le mot du directeur
          </span>

          {/* Titre */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight tracking-tight uppercase mb-6 text-white">
            IL A VÉCU LE MÉTIER.{" "}
            <span className="text-[#00A887] block mt-1">IL VOUS LE TRANSMET.</span>
          </h2>

          {/* Texte de présentation */}
          <p className="text-[17px] text-slate-300 leading-[1.6] max-w-[640px] mb-6">
            M. Moudar Lyes, directeur d&apos;E.S.AERO, a été steward en Europe. Il connaît le métier
            de l&apos;intérieur : l&apos;exigence, la rigueur, le quotidien en vol. En fondant l&apos;école,
            il a voulu faire évoluer la formation en Algérie vers les standards européens.
            Aujourd&apos;hui, il forme la nouvelle génération de navigants.
          </p>

          {/* Citation mise en valeur */}
          <div className="relative p-5 sm:p-7 rounded-2xl bg-[#0e2038] border-l-4 border-[#00A887] border-y border-r border-[#1f2f44] mb-8 shadow-lg">
            <Quote className="w-8 h-8 text-[#00A887]/20 absolute top-4 right-4" />
            <blockquote className="text-base sm:text-lg text-white font-serif italic leading-relaxed mb-3">
              « J&apos;ai vécu ce métier en Europe. Je veux que chaque élève soit formé avec la même exigence, et prêt le jour où il monte à bord. »
            </blockquote>
            <cite className="not-italic text-xs sm:text-sm font-bold text-[#00A887] font-mono block">
              — M. Moudar Lyes, directeur d&apos;E.S.AERO
            </cite>
          </div>

          {/* CTA */}
          <div>
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              data-cta="cta_director_call"
              className="btn-primary"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Poser mes questions à l&apos;équipe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
