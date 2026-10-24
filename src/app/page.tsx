import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyBottomMobileCta from "@/components/StickyBottomMobileCta";
import ScrollStack, { StackItem } from "@/components/ScrollStack";

/*
 * Structure de la landing page E.S.AERO :
 *   1. Hero        → Accroche, badges officiels CSS et CTA direct
 *   2. Formation   → Présentation "Faites de votre passion un métier" + Avion + Piliers
 *   3. Programme   → Le cursus en 3 étapes (Théorie, Pratique, Coaching)
 *   4. Formulaire  → Rappel gratuit en 1 clic + contact direct WhatsApp
 *   5. Footer      → Coordonnées et mentions légales
 *
 * Toutes les sections passent par <ScrollStack> : chaque section se range sous
 * la suivante en rétrécissant / pivotant légèrement (effet "hero scroll animation").
 */

const gridBg =
  "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none";

const card =
  "rounded-t-2xl sm:rounded-t-3xl border-t border-[#1f2f44] shadow-[0_-12px_28px_rgba(0,0,0,0.55)]";

export default function Home() {
  return (
    <div className="bg-[#08111e] relative text-[#f4f7f9] selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Navigation fixe avec smooth scroll */}
      <Navbar />

      <main className="relative">
        <ScrollStack>
          {/* SECTION 1 – HERO */}
          <StackItem className="w-full bg-[#08111e]">
            <HeroSection />
          </StackItem>

          {/* SECTION 2 – INTRODUCTION (Passerelle vers les airs / Métier PNC) */}
          <StackItem
            id="formation"
            className={`bg-[#0e2038] py-8 sm:py-14 ${card}`}
          >
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <IntroSection />
            </div>
          </StackItem>

          {/* SECTION 3 – PROGRAMME (3 étapes officiel : Théorie, Pratique, Coaching) */}
          <StackItem
            id="programme"
            className={`bg-[#0b1524] py-8 sm:py-14 ${card}`}
          >
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <ProgrammeSection />
            </div>
          </StackItem>

          {/* SECTION 4 – CALLBACK FORMULAIRE (Point de conversion principal) */}
          <StackItem
            id="rappel"
            className={`bg-[#0e2038] py-8 sm:py-14 ${card}`}
          >
            <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
            <div className="relative z-10">
              <CallbackFormSection />
            </div>
          </StackItem>

          {/* SECTION 5 – CONTACT & FOOTER */}
          <StackItem id="contact" className={`bg-[#08111e] ${card}`}>
            <ContactSection />
          </StackItem>
        </ScrollStack>
      </main>

      {/* Boutons d'action flottants & CTA mobile persistant */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
