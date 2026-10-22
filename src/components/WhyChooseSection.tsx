"use client";

import { Compass, Layers, FileText, Shield, UserCheck } from "@/components/Icons";

export default function WhyChooseSection() {
  const blocks = [
    {
      number: "01",
      panelBg: "bg-[#234990] text-white",
      title: "FORMATION STRUCTURÉE",
      description: "Un parcours organisé combinant théorie, pratique et coaching.",
      icon: Layers,
    },
    {
      number: "02",
      panelBg: "bg-[#00A887] text-[#08111e]",
      title: "PRÉPARATION AU CSS",
      description: "Des entraînements et examens blancs pour vous préparer à l'examen théorique.",
      icon: FileText,
    },
    {
      number: "03",
      panelBg: "bg-[#1d3d78] text-white",
      title: "APPRENTISSAGE PRATIQUE",
      description: "Une formation pratique adaptée aux exigences du métier.",
      icon: Shield,
    },
    {
      number: "04",
      panelBg: "bg-[#0e2038] border border-[#1f2f44] text-white",
      title: "ACCOMPAGNEMENT PROFESSIONNEL",
      description: "Un coaching dédié à votre préparation au recrutement des compagnies aériennes.",
      icon: UserCheck,
    },
  ];

  return (
    <section id="pourquoi-nous" className="py-4 px-2 sm:px-4 max-w-[1500px] mx-auto bg-[#08111e]">
      {/* Header Panel */}
      <div className="bg-[#0e2038] border border-[#1f2f44] text-white p-6 sm:p-10 lg:p-12 mb-2 sm:mb-3.5 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00A887] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Nos Engagements Pédagogiques</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading uppercase leading-[0.95] tracking-tight">
            POURQUOI CHOISIR <span className="text-[#00A887]">E.S.AERO ?</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-md font-normal leading-relaxed">
          Une école d&apos;aéronautique à taille humaine qui met l&apos;accent sur la rigueur opérationnelle, la préparation concrète et le soutien de chaque futur navigant.
        </p>
      </div>

      {/* 4 Architectural Benefit Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
        {blocks.map((block, idx) => {
          const Icon = block.icon;
          return (
            <div
              key={idx}
              className={`${block.panelBg} p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group transition-transform duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-6xl leading-none opacity-40">
                    {block.number}
                  </span>
                  <div className="w-10 h-10 bg-[#08111e] text-[#00A887] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-heading uppercase tracking-tight mb-3">
                  {block.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-normal">
                  {block.description}
                </p>
              </div>

              <div className="pt-6 border-t border-current/20 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                <span>E.S.AERO</span>
                <span>Formation PNC</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
