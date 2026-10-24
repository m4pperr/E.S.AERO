import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyBottomMobileCta from "@/components/StickyBottomMobileCta";

/*
 * Structure de la landing page E.S.AERO :
 *   1. Hero        → Accroche, badges officiels CSS et CTA direct
 *   2. Formation   → Présentation "Faites de votre passion un métier" + Avion + Piliers
 *   3. Programme   → Le cursus en 3 étapes (Théorie, Pratique, Coaching)
 *   4. Formulaire  → Rappel gratuit en 1 clic + contact direct WhatsApp
 *   5. Footer      → Coordonnées et mentions légales
 */

const gridBg =
  "absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none";

const layeredCard =
  "-mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)]";

export default function Home() {
  return (
    <div className="bg-[#08111e] relative text-[#f4f7f9] selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Navigation fixe avec smooth scroll */}
      <Navbar />

      <main>
        {/* SECTION 1 – HERO SCROLL ANIMATION */}
        <section className="relative z-10 w-full min-h-screen bg-[#08111e]">
          <HeroSection />
        </section>

        {/* SECTION 2 – INTRODUCTION (Passerelle vers les airs / Métier PNC) */}
        <section
          id="formation"
          className={`relative z-20 bg-[#0e2038] py-8 sm:py-14 scroll-mt-20 ${layeredCard}`}
        >
          <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
          <div className="relative z-10">
            <IntroSection />
          </div>
        </section>

        {/* SECTION 3 – PROGRAMME (3 étapes officiel : Théorie, Pratique, Coaching) */}
        <section
          id="programme"
          className={`relative z-30 bg-[#0b1524] py-8 sm:py-14 scroll-mt-20 ${layeredCard}`}
        >
          <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
          <div className="relative z-10">
            <ProgrammeSection />
          </div>
        </section>

        {/* SECTION 4 – CALLBACK FORMULAIRE (Point de conversion principal) */}
        <section
          id="rappel"
          className={`relative z-40 bg-[#0e2038] py-8 sm:py-14 scroll-mt-20 ${layeredCard}`}
        >
          <div className={`${gridBg} rounded-t-2xl sm:rounded-t-3xl`} />
          <div className="relative z-10">
            <CallbackFormSection />
          </div>
        </section>

        {/* SECTION 5 – CONTACT & FOOTER */}
        <section
          id="contact"
          className={`relative z-50 bg-[#08111e] scroll-mt-20 ${layeredCard}`}
        >
          <ContactSection />
        </section>
      </main>

      {/* Boutons d'action flottants & CTA mobile persistant */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
