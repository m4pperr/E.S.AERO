import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SmoothScroll from "@/components/ui/smooth-scroll";
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
    <div className="min-h-screen flex flex-col bg-[#08111e]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* SECTION 1 – HERO SECTION */}
      <HeroSection />

      {/* SECTION 2 – SMOOTH SCROLL LENIS SHOWCASE */}
      <div id="smooth-scroll-section" className="relative w-full z-10">
        <SmoothScroll />
      </div>

      {/* SECTION 3 – INTRODUCTION */}
      <IntroSection />

      {/* SECTION 4 – PRESENTATION OF THE TRAINING (STORYTIME EN 3 ÉTAPES AVEC IMAGES) */}
      <TimelineBlock01 />

      {/* SECTION 5 – WHY CHOOSE E.S.AERO? */}
      <WhyChooseSection />

      {/* SECTION 6 – CALL TO ACTION BANNER */}
      <CtaBannerSection />

      {/* SECTION 7 – CALLBACK FORM (HIGH CONVERSION) */}
      <CallbackFormSection />

      {/* SECTION 8 – FINAL CONTACT SECTION & FOOTER */}
      <ContactSection />

      {/* Conversion Floating & Mobile Sticky CTAs */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
