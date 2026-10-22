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
    <div className="bg-[#08111e] relative text-[#f4f7f9] selection:bg-[#00A887] selection:text-[#08111e]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* SECTION 1 – HERO SECTION */}
      <section className="relative z-10 w-full bg-[#08111e] pt-4 pb-8 sm:pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* SECTION 2 – INTRODUCTION (Layered Card Transition) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#0e2038] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)] py-8 sm:py-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />
        <div className="relative z-10">
          <IntroSection />
        </div>
      </section>

      {/* SECTION 3 – PRESENTATION EN 3 ÉTAPES (Pinned Horizontal Scroll Section) */}
      <section className="relative z-30 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />
        <div className="relative z-10">
          <TimelineBlock01 />
        </div>
      </section>

      {/* SECTION 4 – WHY CHOOSE E.S.AERO? */}
      <section className="relative z-40 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#0b1524] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)] py-8 sm:py-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />
        <div className="relative z-10">
          <WhyChooseSection />
        </div>
      </section>

      {/* SECTION 5 – CALL TO ACTION BANNER */}
      <section className="relative z-45 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)] py-8 sm:py-12">
        <div className="relative z-10">
          <CtaBannerSection />
        </div>
      </section>

      {/* SECTION 6 – CALLBACK FORM */}
      <section className="relative z-50 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#0b1524] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)] py-8 sm:py-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />
        <div className="relative z-10">
          <CallbackFormSection />
        </div>
      </section>

      {/* SECTION 7 – CONTACT & FOOTER */}
      <section className="relative z-55 -mt-6 sm:-mt-8 rounded-t-2xl sm:rounded-t-3xl bg-[#08111e] border-t border-[#1f2f44] shadow-[0_-15px_35px_rgba(0,0,0,0.75)] pt-8 pb-16">
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
