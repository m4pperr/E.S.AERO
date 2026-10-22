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
    <div className="bg-[#08111e] relative selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* SECTION 1 – HERO SECTION (Sticky Base Layer) */}
      <section className="sticky top-0 z-10 w-full min-h-screen bg-[#08111e] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 pt-16 pb-8">
          <HeroSection />
        </div>
      </section>

      {/* SECTION 2 – INTRODUCTION (Sticky Stacking Card 1) */}
      <section className="sticky top-0 z-20 w-full min-h-screen bg-[#0e2038] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f22_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f22_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 py-12">
          <IntroSection />
        </div>
      </section>

      {/* SECTION 3 – PRESENTATION EN 3 ÉTAPES (Stacking Card 2 with internal sticky step cards) */}
      <section className="relative z-30 w-full bg-[#08111e] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f22_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f22_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10">
          <TimelineBlock01 />
        </div>
      </section>

      {/* SECTION 4 – WHY CHOOSE E.S.AERO? (Sticky Stacking Card 3) */}
      <section className="sticky top-0 z-40 w-full min-h-screen bg-[#0b1524] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f22_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f22_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 py-12">
          <WhyChooseSection />
        </div>
      </section>

      {/* SECTION 5 – CALL TO ACTION BANNER (Sticky Stacking Card 4) */}
      <section className="sticky top-0 z-45 w-full min-h-screen bg-[#08111e] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 py-12">
          <CtaBannerSection />
        </div>
      </section>

      {/* SECTION 6 – CALLBACK FORM (Sticky Stacking Card 5) */}
      <section className="sticky top-0 z-50 w-full min-h-screen bg-[#0b1524] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f22_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f22_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10 py-12">
          <CallbackFormSection />
        </div>
      </section>

      {/* SECTION 7 – CONTACT & FOOTER (Final Stacking Card 6) */}
      <section className="relative z-55 w-full bg-[#08111e] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-[#1f2f44] shadow-[0_-25px_60px_rgba(0,0,0,0.95)] pt-12 pb-16 overflow-hidden">
        <div className="relative z-10">
          <ContactSection />
        </div>
      </section>

      {/* Conversion Floating & Mobile Sticky CTAs */}
      <FloatingWhatsApp />
      <StickyBottomMobileCta />
    </div>
  );
}
