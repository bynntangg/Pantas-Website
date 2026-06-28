/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Compass, Calendar, ChevronRight, Map, Cpu, Zap, Star } from "lucide-react";
import { motion } from "motion/react";
import { RoadmapMilestone } from "../types";

export default function FutureVision() {
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);

  const milestones: RoadmapMilestone[] = [
    {
      year: "2026",
      location: "Solo Raya Regional Pilot",
      target: "50+ HOREKA Partners",
      focus: "Establish core IoT and AI forecasting algorithms. Bind Grand Hyatt and top Solo cafes. Connect colomadu and karanganyar maggot farmers.",
      status: "current"
    },
    {
      year: "2027",
      location: "Central Java Rollout",
      target: "250+ outlets in Semarang & Solo",
      focus: "Deepen integration with regional food distribution banks. Standardize automated ESG disclosure XML schemas with municipal taxation models.",
      status: "upcoming"
    },
    {
      year: "2028",
      location: "Java Island Scale",
      target: "1,200+ Hotels & chains",
      focus: "Integrate nationwide food rescue logistics with specialized logistics networks. Launch instant-discount consumer alerts across Jakarta and Surabaya.",
      status: "upcoming"
    },
    {
      year: "2030",
      location: "Nationwide Circular Expansion",
      target: "Dominant Indonesian Circular Network",
      focus: "Position PANTAS as the unified carbon offset framework for HOREKA organic wastes, preventing 1.2M tons of greenhouse gas emissions annually.",
      status: "upcoming"
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background glowing lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-emerald/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono tracking-widest text-brand-primary font-semibold bg-brand-primary/10 px-3.5 py-1 rounded-full uppercase">
            Evolutionary Roadmap
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Building Indonesia's Largest AI circular Food Ecosystem
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed font-sans">
            A structured, capital-efficient trajectory designed to transform local pilot experiments into unified nationwide sustainability frameworks.
          </p>
        </div>

        {/* Milestones timeline layout */}
        <div className="relative border-l border-white/5 space-y-12 pl-6 sm:pl-10 max-w-4xl mx-auto">
          
          {/* Vertical glowing path background overlay */}
          <div className="absolute top-0 bottom-0 left-[24px] sm:left-[40px] w-0.5 bg-gradient-to-b from-brand-primary to-brand-emerald opacity-20 pointer-events-none" />

          {milestones.map((item) => {
            const isHovered = hoveredMilestone === item.year;
            return (
              <motion.div
                key={item.year}
                onMouseEnter={() => setHoveredMilestone(item.year)}
                onMouseLeave={() => setHoveredMilestone(null)}
                className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
              >
                
                {/* Milestone Node Badge Indicator */}
                <div className={`absolute top-0 -left-[30px] sm:-left-[46px] w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all bg-[#0B0F19] z-10 ${
                  item.status === 'current'
                    ? "border-brand-primary scale-110 shadow-lg shadow-brand-primary/20"
                    : "border-white/10 group-hover:border-white/30"
                }`}>
                  {item.status === 'current' ? (
                    <span className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  )}
                </div>

                {/* Alternating Card layout */}
                <div className="flex-1">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 bg-[#090D16]/80 backdrop-blur-md ${
                    isHovered
                      ? "border-white/25 scale-[1.01] shadow-xl glow-green"
                      : "border-white/5 hover:border-white/10"
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                      
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-mono font-extrabold text-brand-primary">
                          {item.year}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="text-sm font-sans font-extrabold text-white">
                          {item.location}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono tracking-wider text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 p-1 px-2.5 rounded-full uppercase">
                        {item.target}
                      </span>

                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans mb-4">
                      {item.focus}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#64748B]">
                      <span>STAGE PARADIGM:</span>
                      <span className="text-white font-semibold">ESG reporting & Forecasting alignment</span>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
