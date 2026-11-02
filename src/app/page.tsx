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
import StickyBottomMobileCta from "@/components/StickyBottomMobileCta";
import ScrollStack, { StackItem } from "@/components/ScrollStack";

/*
 * Structure de la landing page E.S.AERO (Brief v2) :
 *   1. Hero               → Promesse et différence, pastilles officielles, CTA
 *   2. Chiffres           → Du concret tout de suite (grille 2x2 mobile)
 *   3. Le Directeur       → Crédibilité M. Moudar Lyes, citation et portrait réel
 *   4. Parcours 3 étapes  → Accordéon (Théorie, Pratique simulateur, Vol réel 60 h)
 *   5. Pourquoi E.S.AERO  → 4 cartes différenciantes
 *   6. Preuves            → Carrousel horizontal scroll-snap (format 9:16)
 *   7. Pour qui ?         → 3 profils cibles + encadré Conditions d'admission
 *   8. Urgence honnête    → Bandeau places limitées (sans faux compte à rebours)
 *   9. Appel & Formulaire → 3 options (Appel, WhatsApp, Formulaire avec validation algérienne & UTM)
 *   10. Footer            → Mentions légales, horaires, coordonnées
 *
 * Défilement ScrollStack avec fonds alternés #0b0a0a / #141212.
 */

const card =
  "rounded-t-2xl sm:rounded-t-3xl border-t border-white/10 shadow-[0_-12px_28px_rgba(0,0,0,0.7)]";

export default function Home() {
  return (
    <div className="bg-[#0b0a0a] relative text-[#F5F2EC] selection:bg-[#F5A623] selection:text-[#0b0a0a]">
      {/* Header sticky officiel : Logo à gauche, bouton Appeler (40 px) à droite, aucun menu */}
      <Navbar />

      <main className="relative">
        <ScrollStack>
          {/* SECTION 1 – HERO */}
          <StackItem id="hero" className="w-full bg-[#0b0a0a]">
            <HeroSection />
          </StackItem>

          {/* SECTION 2 – CHIFFRES */}
          <StackItem id="chiffres" className={`bg-[#141212] ${card}`}>
            <StatsSection />
          </StackItem>

          {/* SECTION 3 – LE DIRECTEUR */}
          <StackItem id="directeur" className={`bg-[#0b0a0a] ${card}`}>
            <DirectorSection />
          </StackItem>

          {/* SECTION 4 – PARCOURS EN 3 ÉTAPES (ACCORDÉON) */}
          <StackItem id="programme" className={`bg-[#141212] ${card}`}>
            <StepsAccordionSection />
          </StackItem>

          {/* SECTION 5 – POURQUOI E.S.AERO */}
          <StackItem id="pourquoi" className={`bg-[#0b0a0a] ${card}`}>
            <WhyChooseSection />
          </StackItem>

          {/* SECTION 6 – PREUVES & TÉMOIGNAGES */}
          <StackItem id="preuves" className={`bg-[#141212] ${card}`}>
            <TestimonialsSection />
          </StackItem>

          {/* SECTION 7 – POUR QUI ? & CONDITIONS D'ADMISSION */}
          <StackItem id="pour-qui" className={`bg-[#0b0a0a] ${card}`}>
            <TargetAudienceSection />
          </StackItem>

          {/* SECTION 8 – URGENCE HONNÊTE */}
          <StackItem id="urgence" className={`bg-[#141212] ${card}`}>
            <UrgencySection />
          </StackItem>

          {/* SECTION 9 – APPEL FINAL & FORMULAIRE + FOOTER */}
          <StackItem id="rappel" className={`bg-[#0b0a0a] ${card}`}>
            <CallbackFormSection />
            <FooterSection />
          </StackItem>
        </ScrollStack>
      </main>

      {/* Action flottante desktop & barre fixe mobile intelligente */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
