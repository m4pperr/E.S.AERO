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

/*
 * Structure de la landing page E.S.AERO (Brief v2) :
 *   1. Hero               → Promesse, pastilles officielles, CTA
 *   2. Chiffres           → 4 chiffres clés (2x2 mobile)
 *   3. Le Directeur       → Crédibilité M. Moudar Lyes, citation et portrait réel
 *   4. Parcours 3 étapes  → Accordéon (Théorie, Pratique simulateur, Vol réel 60 h)
 *   5. Pourquoi E.S.AERO  → 4 cartes différenciantes
 *   6. Preuves            → Carrousel horizontal scroll-snap (format 9:16)
 *   7. Pour qui ?         → 3 profils cibles + Conditions d'admission
 *   8. Urgence honnête    → Bandeau places limitées
 *   9. Appel & Formulaire → 3 options (Appel, WhatsApp, Formulaire) + Footer
 *
 * Défilement fluide naturel géré par Lenis (SmoothScrollProvider).
 */

const gridBg =
  "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none";

const sectionDivider = "relative border-t border-[#1f2f44]";

export default function Home() {
  return (
    <div className="bg-[#08111e] relative text-[#f4f7f9] selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Header sticky officiel : Logo à gauche, bouton Appeler (40 px) à droite, aucun menu */}
      <Navbar />

      <main className="relative">
        {/* SECTION 1 & 2 – HERO & CHIFFRES CLÉS */}
        <div id="hero" className="w-full bg-[#08111e]">
          <HeroSection />
          <div id="chiffres" />
          <StatsSection />
        </div>

        {/* SECTION 3 – LE DIRECTEUR */}
        <div id="directeur" className={`bg-[#0e2038] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <DirectorSection />
          </div>
        </div>

        {/* SECTION 4 – PARCOURS EN 3 ÉTAPES (ACCORDÉON) */}
        <div id="programme" className={`bg-[#0b1524] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <StepsAccordionSection />
          </div>
        </div>

        {/* SECTION 5 – POURQUOI E.S.AERO */}
        <div id="pourquoi" className={`bg-[#0e2038] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <WhyChooseSection />
          </div>
        </div>

        {/* SECTION 6 – PREUVES & TÉMOIGNAGES */}
        <div id="preuves" className={`bg-[#0b1524] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <TestimonialsSection />
          </div>
        </div>

        {/* SECTION 7 & 8 – POUR QUI ?, CONDITIONS D'ADMISSION & URGENCE HONNÊTE */}
        <div id="pour-qui" className={`bg-[#0e2038] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <TargetAudienceSection />
            <div id="urgence" />
            <UrgencySection />
          </div>
        </div>

        {/* SECTION 9 – APPEL FINAL, FORMULAIRE & FOOTER */}
        <div id="rappel" className={`bg-[#08111e] ${sectionDivider}`}>
          <div className={gridBg} />
          <div className="relative z-10">
            <CallbackFormSection />
            <FooterSection />
          </div>
        </div>
      </main>

      {/* Bouton d'action flottant */}
      <FloatingWhatsApp />
    </div>
  );
}
