"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Share2, Plane } from "@/components/Icons";

export default function ContactSection() {
  const scrollToForm = () => {
    const el = document.getElementById("rappel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="pt-8 pb-16 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e] text-[#f4f7f9]">
      {/* Prominent Click-to-Call Panel in Royal Blue #234990 */}
      <div className="bg-[#234990] text-white p-6 sm:p-10 lg:p-12 mb-2 sm:mb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#1f2f44]">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] block mb-2">
            Orientation Immédiate
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading uppercase text-white leading-[0.95] tracking-tight mb-2">
            VOTRE PROJET COMMENCE PAR{" "}
            <span className="text-[#00A887] block sm:inline">UN SIMPLE APPEL.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-normal leading-relaxed mt-2">
            Nos conseillers pédagogiques répondent directement à vos interrogations sur les dates de sessions, les prérequis et le déroulement des cours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
          <a
            href="tel:+33189000000"
            className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/30"
          >
            <Phone className="w-4 h-4 mr-2 text-[#08111e]" />
            <span>APPELER : [NUMÉRO À AJOUTER]</span>
          </a>
        </div>
      </div>

      {/* 4 Contact Information Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 mb-10">
        {/* School Name with Logo */}
        <div className="bg-[#0e2038] border border-[#1f2f44] p-6 flex flex-col justify-between min-h-[170px]">
          <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="E.S.AERO"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00A887] block mb-1">
              Établissement
            </span>
            <p className="text-base font-bold text-white">
              E.S.AERO
            </p>
            <p className="text-xs text-slate-300 mt-1 font-normal">
              École Supérieure de l&apos;Aéronautique
            </p>
          </div>
        </div>

        {/* WhatsApp Direct */}
        <div className="bg-[#0e2038] border border-[#1f2f44] p-6 flex flex-col justify-between min-h-[170px]">
          <div className="w-10 h-10 bg-[#08111e] text-[#00A887] flex items-center justify-center mb-4 border border-[#1f2f44]">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00A887] block mb-1">
              WhatsApp
            </span>
            <p className="text-base font-bold text-white font-mono">
              [NUMÉRO À AJOUTER]
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-link text-xs text-[#00A887] mt-1.5"
            >
              Écrire sur WhatsApp →
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="bg-[#0e2038] border border-[#1f2f44] p-6 flex flex-col justify-between min-h-[170px]">
          <div className="w-10 h-10 bg-[#08111e] text-[#00A887] flex items-center justify-center mb-4 border border-[#1f2f44]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00A887] block mb-1">
              Campus & Simulateur
            </span>
            <p className="text-base font-bold text-white">
              [ADRESSE À AJOUTER]
            </p>
            <p className="text-xs text-slate-300 mt-1 font-normal">
              Salles de cours & cabine d&apos;exercice
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-[#0e2038] border border-[#1f2f44] p-6 flex flex-col justify-between min-h-[170px]">
          <div className="w-10 h-10 bg-[#08111e] text-[#00A887] flex items-center justify-center mb-4 border border-[#1f2f44]">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00A887] block mb-1">
              Réseaux Sociaux
            </span>
            <p className="text-base font-bold text-white">
              [LIENS À AJOUTER]
            </p>
            <p className="text-xs text-slate-300 mt-1 font-normal">
              Actualités des promotions PNC
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation & Legal Notes */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-[#1f2f44] text-xs font-mono text-slate-400">
        <div className="md:col-span-4 space-y-2">
          <strong className="block text-white uppercase tracking-wider">Navigation</strong>
          <div className="flex flex-col gap-1.5 pt-1">
            <a href="#formation" className="m-link w-fit">La Formation</a>
            <a href="#programme" className="m-link w-fit">Programme en 3 Étapes</a>
            <a href="#pourquoi-nous" className="m-link w-fit">Pourquoi E.S.AERO</a>
            <a href="#rappel" className="m-link w-fit">Demande de Rappel</a>
          </div>
        </div>

        <div className="md:col-span-4 space-y-2">
          <strong className="block text-white uppercase tracking-wider">Cursus Officiel</strong>
          <p className="text-xs leading-relaxed text-slate-400">
            Préparation certifiante à l&apos;examen national du CSS (Certificat de Sécurité et Sauvetage). Formation théorique, pratique DACM et coaching de recrutement.
          </p>
        </div>

        <div className="md:col-span-4 space-y-2">
          <strong className="block text-white uppercase tracking-wider">Mentions Légales</strong>
          <p className="text-xs leading-relaxed text-slate-400">
            © 2026 E.S.AERO – École Supérieure de l&apos;Aéronautique. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Massive Signature Wordmark in Logo Colors (Blue E.S. and Teal AERO) */}
      <div className="mt-8 pt-4 overflow-hidden select-none border-t border-[#1f2f44]">
        <span className="font-heading font-black text-[clamp(64px,18vw,270px)] leading-[0.8] tracking-tighter block uppercase">
          <span className="text-[#234990]">E.S.</span>
          <span className="text-[#00A887]">AERO</span>
        </span>
      </div>
    </footer>
  );
}
