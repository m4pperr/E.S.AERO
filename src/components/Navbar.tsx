"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "@/components/Icons";
import { useScrollToSection } from "@/lib/useScrollToSection";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = useScrollToSection();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[#08111e]/95 backdrop-blur-md border-[#1f2f44] py-2.5 shadow-2xl"
          : "bg-[#08111e] border-transparent py-3.5"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official E.S.AERO Badge */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (lenis) lenis.scrollTo(0, { duration: 1.2 });
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3.5 group text-[#f4f7f9] focus:outline-none"
            aria-label="E.S.AERO Accueil"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-md shadow-[#00A887]/20 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo officiel E.S.AERO"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-tight font-heading leading-none text-white">
                E.S.<span className="text-[#00A887]">AERO</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00A887] font-semibold mt-0.5">
                École Supérieure de l&apos;Aéronautique
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#f4f7f9]">
            <button
              onClick={() => scrollToSection("formation")}
              className="m-link py-1 cursor-pointer"
            >
              La Formation
            </button>
            <button
              onClick={() => scrollToSection("programme")}
              className="m-link py-1 cursor-pointer"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection("rappel")}
              className="m-link py-1 cursor-pointer"
            >
              Inscription
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="m-link py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+33189000000"
              className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#00A887] hover:text-white transition-colors"
              title="Appeler l'école"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A887]" />
              <span>[NUMÉRO À AJOUTER]</span>
            </a>

            <button
              onClick={() => scrollToSection("rappel")}
              className="m-btn text-xs font-black"
            >
              <span>ÊTRE RAPPELÉ</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection("rappel")}
              className="px-3 py-1.5 bg-[#00A887] text-[#08111e] text-xs font-black uppercase tracking-wider"
            >
              Rappel
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4f7f9] hover:bg-[#1f2f44] focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Logo Color Palette Panels */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-3 border-t border-[#1f2f44] grid gap-2 animate-fadeIn">
            <button
              onClick={() => scrollToSection("formation")}
              className="text-left py-3 px-4 bg-[#0e2038] text-white font-bold text-sm uppercase tracking-wider border border-[#1f2f44]"
            >
              La Formation
            </button>
            <button
              onClick={() => scrollToSection("programme")}
              className="text-left py-3 px-4 bg-[#234990] text-white font-bold text-sm uppercase tracking-wider"
            >
              Programme en 3 étapes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-3 px-4 bg-[#1f2f44] text-white font-bold text-sm uppercase tracking-wider"
            >
              Contact
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+33189000000"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#1f2f44] text-[#00A887] text-xs font-mono font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#00A887]" />
                <span>Appeler : [NUMÉRO À AJOUTER]</span>
              </a>
              <button
                onClick={() => scrollToSection("rappel")}
                className="py-3.5 px-4 bg-[#00A887] text-[#08111e] text-xs font-black uppercase tracking-wider"
              >
                Demander à être rappelé
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
