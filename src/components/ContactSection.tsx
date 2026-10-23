"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "@/components/Icons";

/**
 * Footer allégé : le gros bloc "Appeler" et les 4 cartes contact doublaient
 * les panneaux latéraux du formulaire de rappel juste au-dessus.
 */
export default function ContactSection() {
  return (
    <footer className="pt-8 pb-24 md:pb-10 px-2 sm:px-4 max-w-[1500px] mx-auto text-[#f4f7f9]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#1f2f44] text-xs font-mono text-slate-400">
        {/* Brand */}
        <div className="md:col-span-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center shrink-0">
            <Image src="/images/logo.png" alt="E.S.AERO" width={36} height={36} className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-bold text-white font-sans">E.S.AERO</p>
            <p className="mt-0.5">École Supérieure de l&apos;Aéronautique</p>
            <p className="mt-2 leading-relaxed">
              Préparation au CSS : théorie, pratique DACM et coaching recrutement.
            </p>
          </div>
        </div>

        {/* Navigation (ancres gérées par Lenis) */}
        <nav className="md:col-span-4 space-y-2" aria-label="Navigation pied de page">
          <strong className="block text-white uppercase tracking-wider">Navigation</strong>
          <div className="flex flex-col gap-1.5 pt-1">
            <a href="#programme" className="m-link w-fit">Programme en 3 étapes</a>
            <a href="#rappel" className="m-link w-fit">Demande de rappel</a>
          </div>
        </nav>

        {/* Contact rapide */}
        <div className="md:col-span-4 space-y-2">
          <strong className="block text-white uppercase tracking-wider">Contact direct</strong>
          <div className="flex flex-col gap-2 pt-1">
            <a href="tel:+33189000000" className="flex items-center gap-2 text-[#00A887] hover:text-white transition-colors w-fit">
              <Phone className="w-3.5 h-3.5" />
              <span>[NUMÉRO À AJOUTER]</span>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00A887] hover:text-white transition-colors w-fit"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <span className="font-heading font-black text-[clamp(48px,11vw,150px)] leading-[0.8] tracking-tighter uppercase select-none">
          <span className="text-[#234990]">E.S.</span>
          <span className="text-[#00A887]">AERO</span>
        </span>
        <p className="text-[11px] font-mono text-slate-500">
          © 2026 E.S.AERO – Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
