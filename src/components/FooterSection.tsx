"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "@/components/Icons";
import { SITE_CONFIG } from "@/lib/config";

export default function FooterSection() {
  return (
    <footer className="pt-12 pb-24 md:pb-12 px-4 sm:px-6 max-w-[1400px] mx-auto text-[#f4f7f9] border-t border-[#1f2f44]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1f2f44] text-xs text-slate-300">
        {/* Identité & Logo */}
        <div className="md:col-span-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-[#00A887]/20">
              <Image
                src="/images/logo.png"
                alt="Logo officiel E.S.AERO"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-black font-heading text-white tracking-tight">
                E.S.<span className="text-[#00A887]">AERO</span>
              </p>
              <p className="text-[11px] uppercase tracking-wider text-[#00A887] font-mono">
                École Supérieure de l&apos;Aéronautique
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
            Première école en Algérie de formation PNC. Formation certifiante CSS, théorie, pratique sur simulateur et 60 h de vol réel en compagnie aérienne.
          </p>
        </div>

        {/* Coordonnées & Campus */}
        <div className="md:col-span-5 space-y-2.5">
          <strong className="block text-white uppercase tracking-wider font-mono text-xs mb-3">
            Campus & Coordonnées
          </strong>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5" />
            <span>{SITE_CONFIG.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#00A887] shrink-0" />
            <span>Horaires : {SITE_CONFIG.hours.days}, {SITE_CONFIG.hours.time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#00A887] shrink-0" />
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white underline underline-offset-2">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Téléphone & Réseaux officiels */}
        <div className="md:col-span-3 space-y-3">
          <strong className="block text-white uppercase tracking-wider font-mono text-xs mb-3">
            Contactez l&apos;école
          </strong>
          <div className="space-y-1.5 font-mono text-xs">
            <a
              href={SITE_CONFIG.phonePrimary.tel}
              className="flex items-center gap-2 text-[#00A887] hover:text-white transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.phonePrimary.display}</span>
            </a>
          </div>

          <div className="pt-2">
            <strong className="block text-white uppercase tracking-wider font-mono text-[11px] mb-2">
              Réseaux de l&apos;école
            </strong>
            <div className="flex items-center gap-3 text-xs">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A887] transition-colors"
              >
                Instagram
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A887] transition-colors"
              >
                Facebook
              </a>
              <span className="text-white/20">•</span>
              <a
                href={SITE_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A887] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Mentions légales */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
        <p>© 2026 E.S.AERO – École Supérieure de l&apos;Aéronautique.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
