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
    <div className="min-h-screen flex flex-col bg-[#08111e] relative selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* SECTION 1 – HERO SECTION (Base Layer) */}
      <section className="relative z-10 w-full bg-[#08111e]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* SECTION 2 – INTRODUCTION (Stacking Card 1 with Smooth Radial Grid) */}
      <section className="relative z-20 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#0b1524] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 pt-4 sm:pt-6">
          <IntroSection />
        </div>
      </section>

      {/* SECTION 3 – PRESENTATION EN 3 ÉTAPES (Stacking Card 2) */}
      <section className="relative z-30 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 pt-4 sm:pt-6">
          <TimelineBlock01 />
        </div>
      </section>

      {/* SECTION 4 – WHY CHOOSE E.S.AERO? (Stacking Card 3) */}
      <section className="relative z-40 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#0b1524] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 pt-4 sm:pt-6">
          <WhyChooseSection />
        </div>
      </section>

      {/* SECTION 5 – CALL TO ACTION BANNER (Stacking Card 4) */}
      <section className="relative z-45 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="relative z-10 pt-4 sm:pt-6">
          <CtaBannerSection />
        </div>
      </section>

      {/* SECTION 6 – CALLBACK FORM (Stacking Card 5) */}
      <section className="relative z-50 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#0b1524] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 pt-4 sm:pt-6">
          <CallbackFormSection />
        </div>
      </section>

      {/* SECTION 7 – CONTACT & FOOTER (Stacking Card 6) */}
      <section className="relative z-55 -mt-6 sm:-mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="relative z-10 pt-4 sm:pt-6">
          <ContactSection />
        </div>
      </section>

      {/* Conversion Floating & Mobile Sticky CTAs */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
