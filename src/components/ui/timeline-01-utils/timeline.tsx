"use client";

import React from "react";
import {
  Clock,
  CheckCircle2,
  FileCheck,
  PlaneTakeoff,
  BookOpen,
  Briefcase,
  LucideIcon
} from "@/components/Icons";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  stepNumber?: string;
  image?: string;
  program?: string[];
  examNote?: string;
  highlight?: string;
  icon?: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative divide-y divide-slate-200 w-full", className)}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="w-full py-12 md:py-16 px-6 md:px-10 lg:px-14 group hover:bg-slate-50/60 transition-colors"
          >
            {/* Header: Step Number & Duration Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {item.stepNumber && (
                <span className="px-3.5 py-1 rounded-md bg-[#0B1F36] text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                  {item.stepNumber}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#079DE3] px-3.5 py-1 rounded-full bg-[#079DE3]/10 border border-[#079DE3]/20">
                <Clock className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>

            {/* Main Content: 2 Balanced Responsive Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
              {/* Left Column (col-span-6): Title, Description & Photography */}
              <div className="lg:col-span-6 space-y-5 w-full min-w-0">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-[#079DE3]/15 text-[#079DE3] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F36] tracking-tight group-hover:text-[#079DE3] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Photography */}
                {item.image && (
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F36]/70 via-transparent to-transparent opacity-60" />
                    {item.highlight && (
                      <div className="absolute bottom-3 left-3 right-3 bg-[#0B1F36]/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-semibold border border-white/20">
                        {item.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column (col-span-6): Program details & Exam Card */}
              <div className="lg:col-span-6 space-y-5 w-full min-w-0">
                {/* Program checklist card */}
                {item.program && item.program.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F36] mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#079DE3]" />
                      <span>Programme d&apos;enseignement :</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.program.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#079DE3] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Exam note box */}
                {item.examNote && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#EBF7FD] border border-[#079DE3]/30 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#079DE3]/40 text-[#079DE3] flex items-center justify-center shrink-0 shadow-sm">
                      <FileCheck className="w-5 h-5 text-[#079DE3]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wide text-[#0B1F36] mb-1">
                        Validation & Examen
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {item.examNote}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
