/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Wheat, HeartHandshake, RefreshCw, Globe, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SDGItem } from "../types";

export default function SdgSection() {
  const [hoveredSdg, setHoveredSdg] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sdgItems: SDGItem[] = [
    {
      number: 2,
      title: "Zero Hunger",
      description: "End hunger, achieve food security, improve nutrition parameters, and promote resilient agriculture.",
      pantasContribution: "Redirects fully edible food surplus from high-end kitchens to local families, shelters, and food distribution banks across Central Java.",
      color: "border-red-500/30 text-red-400 bg-red-500/5",
      borderColor: "group-hover:border-red-500/50",
      bgGlow: "rgba(239, 68, 68, 0.12)"
    },
    {
      number: 8,
      title: "Decent Work & Growth",
      description: "Promote sustained, inclusive, and sustainable economic growth with productive full employment prospects.",
      pantasContribution: "Empowers waste processors and maggot farm operators by providing continuous, free, highly sorted organic fuel stocks, boosting local margins.",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5",
      borderColor: "group-hover:border-amber-500/50",
      bgGlow: "rgba(245, 158, 11, 0.12)"
    },
    {
      number: 12,
      title: "Responsible Consumption",
      description: "Ensure sustainable consumption, resource efficiency, and biological circular production patterns.",
      pantasContribution: "Establishes a digital platform that coordinates food waste reduction, ensuring no edible ingredient unnecessarily lands in municipal waste facilities.",
      color: "border-emerald-500/30 text-brand-emerald bg-brand-emerald/5",
      borderColor: "group-hover:border-[#10B981]/50",
      bgGlow: "rgba(16, 185, 129, 0.12)"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Take urgent macro-actions to combat climate change, greenhouse emissions, and local atmospheric heat factors.",
      pantasContribution: "Diverts rotting wet organic dump decay directly, which shuts off high-volume greenhouse gas emissions at landfill beds.",
      color: "border-blue-500/30 text-blue-400 bg-blue-500/5",
      borderColor: "group-hover:border-blue-500/50",
      bgGlow: "rgba(59, 130, 246, 0.12)"
    }
  ];

  return (
    <section id="sdg" className="relative py-24 bg-[#090D16] overflow-hidden border-t border-b border-white/5">
      {/* Decorative gradient glow spots */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title details */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#10B981] font-semibold bg-[#10B981]/10 px-3.5 py-1 rounded-full uppercase">
            Global Agenda Alignment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Sustainable Development Goals Core Alignment
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            PANTAS maps its operations to the United Nations 2030 Global Agenda, ensuring every diverted food transaction generates validated progress indices.
          </p>
        </div>

        {/* 4-Card SDGs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgItems.map((item) => {
            const isHovered = hoveredSdg === item.number;
            return (
              <motion.div
                key={item.number}
                onMouseEnter={() => setHoveredSdg(item.number)}
                onMouseLeave={() => setHoveredSdg(null)}
                whileHover={
                  isMobile
                    ? { scale: 1.02 }
                    : { 
                        scale: 1.04, 
                        rotateY: 10, 
                        rotateX: -5,
                        z: 20
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${item.color} ${item.borderColor}`}
                style={{
                  boxShadow: isHovered ? `0 10px 40px ${item.bgGlow}` : "none",
                  transformStyle: isMobile ? "flat" : "preserve-3d",
                  transformPerspective: isMobile ? undefined : 1000
                }}
              >
                <div>
                  {/* Card top banner with large badge */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-white text-base">
                      {item.number}
                    </div>
                    <span className="text-[9px] font-mono uppercase bg-white/5 px-2.5 py-1 rounded-full text-[#94A3B8]">
                      UN SDG #{item.number}
                    </span>
                  </div>

                  {/* Icon representation */}
                  <div className="mb-4">
                    {item.number === 2 && <Wheat className="w-6 h-6 text-red-400" />}
                    {item.number === 8 && <HeartHandshake className="w-6 h-6 text-amber-400" />}
                    {item.number === 12 && <RefreshCw className="w-6 h-6 text-brand-emerald" />}
                    {item.number === 13 && <Globe className="w-6 h-6 text-blue-400" />}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 text-left">
                  <span className="block text-[8px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    PANTAS CLIMATE CONTRIBUTION :
                  </span>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                    {item.pantasContribution}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
