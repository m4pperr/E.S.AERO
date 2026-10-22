import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TimelineBlock01 from "@/components/ui/timeline-01";
import WhyChooseSection from "@/components/WhyChooseSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyBottomMobileCta from "@/components/StickyBottomMobileCta";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#08111e]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* SECTION 1 – HERO SECTION */}
      <HeroSection />

      {/* SECTION 2 – INTRODUCTION */}
      <IntroSection />

      {/* SECTION 3 – PRESENTATION OF THE TRAINING (STORYTIME EN 3 ÉTAPES AVEC IMAGES) */}
      <TimelineBlock01 />

      {/* SECTION 4 – WHY CHOOSE E.S.AERO? */}
      <WhyChooseSection />

      {/* SECTION 5 – CALL TO ACTION BANNER */}
      <CtaBannerSection />

      {/* SECTION 6 – CALLBACK FORM (HIGH CONVERSION) */}
      <CallbackFormSection />

      {/* SECTION 7 – FINAL CONTACT SECTION & FOOTER */}
      <ContactSection />

      {/* Conversion Floating & Mobile Sticky CTAs */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </main>
  );
}
