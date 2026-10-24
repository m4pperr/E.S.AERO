"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Plane } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";

// Enregistrement des plugins officiels GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLButtonElement>(null);

  const scrollTo = useScrollToSection();
  const scrollToForm = () => scrollTo("rappel");
  const scrollToFormation = () => scrollTo("formation");

  // Animation de défilement 3D cinématique (GSAP ScrollTrigger + matchMedia)
  useGSAP(
    () => {
      if (!containerRef.current || !gridRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
            reduceMotion: boolean;
          };

          // 1. Mode accessibilité : transition douce sans rotation 3D
          if (reduceMotion) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + window.innerHeight,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(
              gridRef.current,
              {
                scale: 0.92,
                autoAlpha: 0.6,
                ease: "none",
              },
              0
            ).to(
              hintRef.current,
              {
                autoAlpha: 0,
                ease: "none",
              },
              0
            );
            return;
          }

          // 2. Mode Desktop : Expérience 3D Spatial Deck avec profondeur multicouche
          if (isDesktop) {
            gsap.set(gridRef.current, {
              transformPerspective: 1400,
              transformStyle: "preserve-3d",
              transformOrigin: "center 28%",
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + window.innerHeight,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                scrub: 1, // Amorti cinétique fluide (compétence gsap-scrolltrigger)
                invalidateOnRefresh: true,
              },
            });

            // Bascule 3D de la carte principale vers l'arrière
            tl.to(
              gridRef.current,
              {
                scale: 0.88,
                rotationX: 8.5, // Inclinaison 3D vers l'arrière
                rotationZ: -2, // Légère rotation éditoriale
                y: 18,
                ease: "none",
              },
              0
            );

            // Voile d'ombrage de profondeur progressif
            if (overlayRef.current) {
              tl.to(
                overlayRef.current,
                {
                  opacity: 0.42,
                  ease: "none",
                },
                0
              );
            }

            // Parallaxe multi-plan sur la photo de l'équipage
            if (photoCardRef.current) {
              tl.to(
                photoCardRef.current,
                {
                  yPercent: -12,
                  scale: 1.04,
                  rotationZ: 1.2,
                  ease: "none",
                },
                0
              );
            }

            // Dérive spatiale du logo E.S.AERO en arrière-plan
            if (emblemRef.current) {
              tl.to(
                emblemRef.current,
                {
                  scale: 1.28,
                  yPercent: -24,
                  opacity: 0.22,
                  ease: "none",
                },
                0
              );
            }

            // Parallaxe subtile sur le bloc texte
            if (contentRef.current) {
              tl.to(
                contentRef.current,
                {
                  yPercent: -4,
                  ease: "none",
                },
                0
              );
            }

            // Disparition discrète du hint de scroll dès le début du défilement
            if (hintRef.current) {
              tl.to(
                hintRef.current,
                {
                  autoAlpha: 0,
                  y: -12,
                  duration: 0.2,
                  ease: "power1.out",
                },
                0
              );
            }
          } else {
            // 3. Mode Mobile : Échelle 2D optimisée pour les écrans tactiles
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + window.innerHeight,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(
              gridRef.current,
              {
                scale: 0.92,
                rotationZ: -1,
                y: 12,
                ease: "none",
              },
              0
            );

            if (overlayRef.current) {
              tl.to(
                overlayRef.current,
                {
                  opacity: 0.35,
                  ease: "none",
                },
                0
              );
            }

            if (hintRef.current) {
              tl.to(
                hintRef.current,
                {
                  autoAlpha: 0,
                  duration: 0.2,
                  ease: "none",
                },
                0
              );
            }
          }
        },
        containerRef
      );

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-[#08111e] flex flex-col justify-center overflow-hidden z-10"
    >
      <section className="h-full w-full flex flex-col justify-center px-2.5 sm:px-6 max-w-[1500px] mx-auto pt-16 sm:pt-20 pb-8 sm:pb-12">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 items-stretch h-full max-h-[700px] will-change-transform"
          >
            {/* Cell A: Main Bold Title Panel (Royal Cobalt #234990) */}
            <div
              ref={heroCardRef}
              className="col-span-1 md:col-span-8 bg-[#234990] text-white p-5 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(35,73,144,0.3)] rounded-2xl md:rounded-xl border border-white/10"
            >
              {/* Voile d'ombrage progressif en profondeur lors du tilt 3D */}
              <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#050b14] pointer-events-none opacity-0 z-10 transition-opacity rounded-2xl md:rounded-xl"
              />

              {/* Logo emblème discret en filigrane avec parallaxe */}
              <div
                ref={emblemRef}
                className="absolute -right-10 -bottom-10 w-72 h-72 opacity-10 pointer-events-none will-change-transform z-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo E.S.AERO"
                  width={288}
                  height={288}
                  className="object-contain"
                />
              </div>

              <div ref={contentRef} className="relative z-10 will-change-transform">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00A887] bg-[#08111e]/50 backdrop-blur-sm px-3.5 py-1.5 w-fit border border-[#00A887]/30">
                  <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
                  <span>École Supérieure de l&apos;Aéronautique • Formation PNC</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-heading leading-[0.92] tracking-tight uppercase my-3 sm:my-4">
                  VOTRE AVENIR DANS L&apos;AÉRONAUTIQUE{" "}
                  <span className="text-[#00A887] block mt-1">COMMENCE ICI.</span>
                </h1>

                <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                  <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Certification CSS</span>
                  <span className="text-[#00A887]">•</span>
                  <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Théorie 114h</span>
                  <span className="text-[#00A887]">•</span>
                  <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Pratique 49h</span>
                  <span className="text-[#00A887]">•</span>
                  <span className="bg-[#08111e]/40 px-3 py-1.5 border border-white/10">Coaching 5j</span>
                </div>
              </div>

              {/* Boutons d'action CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 relative z-10">
                <button
                  onClick={scrollToForm}
                  className="m-btn text-xs font-black shadow-lg shadow-[#00A887]/30 cursor-pointer"
                >
                  <span>JE SOUHAITE ÊTRE RAPPELÉ</span>
                </button>
                <a
                  href="tel:+33189000000"
                  className="m-btn-dark text-xs font-black uppercase tracking-wider"
                >
                  APPELER MAINTENANT
                </a>
              </div>

              {/* Micro hint invitant au scroll, animé avec GSAP */}
              <button
                ref={hintRef}
                onClick={scrollToFormation}
                className="pt-2 sm:pt-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-300/80 hover:text-white transition-colors cursor-pointer w-fit text-left relative z-10 will-change-transform"
              >
                <svg
                  className="w-3.5 h-3.5 animate-bounce text-[#00A887]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7-7 7-7-7" />
                </svg>
                <span>Faites défiler pour explorer la formation 👇</span>
              </button>
            </div>

            {/* Cell B: Portrait Photo Panel (Desktop) avec parallaxe */}
            <div
              ref={photoCardRef}
              className="hidden md:flex md:col-span-4 bg-[#0e2038] border border-[#1f2f44] flex-col justify-between overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.7)] rounded-xl will-change-transform"
            >
              <div className="relative flex-1 w-full min-h-[300px] bg-[#08111e] overflow-hidden">
                <Image
                  src="/images/cabin-crew.jpg"
                  alt="Équipage navigant commercial en uniforme"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="35vw"
                  quality={90}
                />
              </div>
              <div className="bg-[#00A887] text-[#08111e] px-4 py-3 text-xs font-bold tracking-wider uppercase font-mono flex items-center justify-between">
                <span>Équipage E.S.AERO · En vol</span>
                <Plane className="w-3.5 h-3.5 text-[#08111e]" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
