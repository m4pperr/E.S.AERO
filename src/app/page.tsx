import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DirectorSection from "@/components/DirectorSection";
import StepsAccordionSection from "@/components/StepsAccordionSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import UrgencySection from "@/components/UrgencySection";
import CallbackFormSection from "@/components/CallbackFormSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollStack, { StackItem } from "@/components/ScrollStack";

/*
 * Structure de la landing page E.S.AERO (Brief v2) :
 *   1. Hero + Chiffres    → Promesse, pastilles officielles, CTA + 4 chiffres clés (2x2 mobile)
 *   2. Le Directeur       → Crédibilité M. Moudar Lyes, citation et portrait réel
 *   3. Parcours 3 étapes  → Accordéon (Théorie, Pratique simulateur, Vol réel 60 h)
 *   4. Pourquoi E.S.AERO  → 4 cartes différenciantes
 *   5. Preuves            → Carrousel horizontal scroll-snap (format 9:16)
 *   6. Pour qui + Urgence → 3 profils cibles + Conditions d'admission + Bandeau places limitées
 *   7. Appel & Formulaire → 3 options (Appel, WhatsApp, Formulaire) + Footer
 *
 * Les sections courtes (Chiffres, Urgence) sont regroupées avec leur section adjacente
 * pour garantir des cartes ScrollStack de hauteur homogène sur mobile (In-App Browser).
 */

const gridBg =
  "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none";

const card =
  "rounded-t-2xl sm:rounded-t-3xl border-t border-[#1f2f44] shadow-[0_-12px_28px_rgba(0,0,0,0.55)]";

export default function Home() {
  return (
    <div className="bg-[#08111e] relative text-[#f4f7f9] selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Header sticky officiel : Logo à gauche, bouton Appeler (40 px) à droite, aucun menu */}
      <Navbar />

      <main className="relative">
        <ScrollStack>
          {/* CARTE 1 – HERO & CHIFFRES CLÉS */}
          <StackItem id="hero" className="w-full bg-[#08111e]">
            <HeroSection />
            <div id="chiffres" />
            <StatsSection />
          </StackItem>

          {/* CARTE 2 – LE DIRECTEUR */}
          <StackItem id="directeur" className={`bg-[#0e2038] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <DirectorSection />
            </div>
          </StackItem>

          {/* CARTE 3 – PARCOURS EN 3 ÉTAPES (ACCORDÉON) */}
          <StackItem id="programme" className={`bg-[#0b1524] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <StepsAccordionSection />
            </div>
          </StackItem>

          {/* CARTE 4 – POURQUOI E.S.AERO */}
          <StackItem id="pourquoi" className={`bg-[#0e2038] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <WhyChooseSection />
            </div>
          </StackItem>

          {/* CARTE 5 – PREUVES & TÉMOIGNAGES */}
          <StackItem id="preuves" className={`bg-[#0b1524] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <TestimonialsSection />
            </div>
          </StackItem>

          {/* CARTE 6 – POUR QUI ?, CONDITIONS D'ADMISSION & URGENCE HONNÊTE */}
          <StackItem id="pour-qui" className={`bg-[#0e2038] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <TargetAudienceSection />
              <div id="urgence" />
              <UrgencySection />
            </div>
          </StackItem>

          {/* CARTE 7 – APPEL FINAL, FORMULAIRE & FOOTER */}
          <StackItem id="rappel" className={`bg-[#08111e] ${card}`}>
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <CallbackFormSection />
              <FooterSection />
            </div>
          </StackItem>
        </ScrollStack>
      </main>

      {/* Bouton d'action flottant */}
      <FloatingWhatsApp />
    </div>
  );
}
