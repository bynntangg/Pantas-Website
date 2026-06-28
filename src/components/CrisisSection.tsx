/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AlertCircle, ArrowDownIcon, RefreshCw, Landmark, Activity, Layers } from "lucide-react";
import { motion } from "motion/react";
import chefSurplus from "../assets/images/chef_surplus_1781896686438.jpg";

export default function CrisisSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      id: 1,
      title: "23–48 Million Tons",
      subtitle: "Food Loss & Waste Every Year",
      description: "Indonesia is the second largest food waste contributor in the world. This represents roughly 330kg of nutrition discarded per user cap every single year.",
      percentage: "60%",
      type: "organic waste",
      metricGlow: "rgba(239, 68, 68, 0.15)",
      accentText: "text-red-400",
      icon: <AlertCircle className="w-5 h-5 text-red-400" />
    },
    {
      id: 2,
      title: "$35 Billion (IDR 551T)",
      subtitle: "Annual Economic Loss",
      description: "Roughly 7.29% of the national GDP is thrown into landfills, directly compromising food supply chains and local climate objectives.",
      percentage: "7.29% GDP",
      type: "financial impact",
      metricGlow: "rgba(245, 158, 11, 0.15)",
      accentText: "text-amber-400",
      icon: <Landmark className="w-5 h-5 text-amber-400" />
    },
    {
      id: 3,
      title: "Thousands of HOREKA",
      subtitle: "Lack Integrated Waste Systems",
      description: "High-end kitchens operate without automated foresight, routing valuable surplus dishes directly to municipal pits where they generate toxic methane gas.",
      percentage: "94% hotels",
      type: "logistic gap",
      metricGlow: "rgba(34, 197, 94, 0.15)",
      accentText: "text-brand-primary",
      icon: <Layers className="w-5 h-5 text-brand-primary" />
    }
  ];

  return (
    <section id="crisis" className="relative py-24 bg-[#090D16] overflow-hidden border-t border-b border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content styling */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono tracking-widest text-[#EF4444] font-semibold bg-red-500/10 px-3.5 py-1 rounded-full uppercase">
            The National Food Waste Crisis
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            An Unsustainable Leakage in the Food Ecology
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            Every year millions of tons of edible food decays in land deposits, while poverty lingers. PANTAS intervenes directly at high-volume outlets to close the loop.
          </p>
        </div>

        {/* Triple Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(stat.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative p-6 rounded-2xl glass-panel group transition-all duration-300 hover:border-white/25 flex flex-col justify-between"
              style={{
                boxShadow: hoveredCard === stat.id ? `0 10px 40px ${stat.metricGlow}` : "none"
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {stat.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase bg-white/5 px-2.5 py-1 rounded-full ${stat.accentText}`}>
                    {stat.type}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-2">
                  {stat.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#CBD5E1] uppercase tracking-wider mb-4">
                  {stat.subtitle}
                </h4>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#475569]">CRITICAL RATING</span>
                <span className={`text-xs font-mono font-bold ${stat.accentText}`}>
                  {stat.percentage}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Simulator: Food Waste Gradual Transformation */}
        <div className="glass-panel-light rounded-3xl p-6 sm:p-10 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-brand-emerald bg-brand-emerald/10 px-3 py-1 rounded-full font-semibold">
                BIOLOGICAL CLOSED RECOVERY Loop
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight leading-snug">
                PANTAS Alchemist: Turning Landfill Deposits into Sustainable Capital
              </h3>

              {/* Real Food Rescue Action Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] shadow-lg group bg-[#070A11]">
                <img
                  src={chefSurplus}
                  alt="Professional culinary chefs packaging edible fresh food surplus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/30 to-transparent p-3.5 text-xs font-mono text-[#E2E8F0]">
                  <span className="text-brand-primary">SURPLUS RETRIEVAL</span> • 100% Chef-Grade Quality Captured
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed">
                By capturing food waste before decomposition begins, we separate edible dishes for fast consumer resale or donate them, while routing true leftovers to specialized farms. Let trash become black gold.
              </p>
              
              <div className="flex flex-col gap-2.5 text-xs text-[#94A3B8] pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                  <span>Unmanaged Food waste emits CH₄ (Methane) </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                  <span>PANTAS optimizes distribution for organic output</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Interactive transformation pipeline */}
              <div className="relative bg-[#070A11]/60 rounded-2xl border border-white/5 p-4 sm:p-6 overflow-hidden flex flex-col justify-between">
                
                <div className="flex justify-between items-center text-[10px] font-mono text-[#64748B] mb-8 border-b border-white/5 pb-3">
                  <span>INPUT: COMPROMISED FOOD STOCKS</span>
                  <span>TRANSFORMATION PROCESS</span>
                  <span>OUTPUT: GREEN CAPITAL</span>
                </div>

                {/* Animated graphic mapping food waste conversion */}
                <div className="grid grid-cols-3 gap-4 relative items-center justify-items-center text-center">
                  
                  {/* Stage 1: Waste Input */}
                  <div className="space-y-3 z-10 w-full p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                    <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 mx-auto">
                      <span className="font-mono text-xs text-red-400 font-bold">RAW</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white">Leftover Stocks</span>
                      <span className="block text-[10px] text-[#94A3B8] mt-1 font-mono">Anaerobic Acid</span>
                    </div>
                  </div>

                  {/* Intersect / Converter Portal */}
                  <div className="relative flex flex-col items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 border-2 border-brand-primary flex items-center justify-center glow-green animate-spin-slow">
                      <RefreshCw className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="text-[9px] font-mono text-brand-primary tracking-wider mt-2 bg-brand-primary/10 px-2 py-0.5 rounded uppercase">
                      AI GRID FILTER
                    </span>
                    
                    {/* SVG Connector arrows to show directional flow */}
                    <div className="absolute w-[180%] h-1 bg-gradient-to-r from-red-500 via-brand-primary to-brand-emerald top-1/2 -z-10 -translate-y-1/2">
                      <div className="w-3 h-3 bg-white rounded-full animate-ping mx-auto" />
                    </div>
                  </div>

                  {/* Stage 3: Valuable output */}
                  <div className="space-y-3 z-10 w-full p-3 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                    <div className="w-9 h-9 rounded-full bg-brand-emerald/15 flex items-center justify-center border border-brand-primary/20 mx-auto">
                      <span className="font-mono text-xs text-brand-primary font-bold">ECO</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white">Maggot Feed & Gas</span>
                      <span className="block text-[10px] text-brand-emerald mt-1 font-mono">GRI Compliant</span>
                    </div>
                  </div>

                </div>

                <div className="mt-8 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-xs text-[#94A3B8] font-sans">
                    🌱 <strong>Circular Impact:</strong> Each active ton recycled yields <strong>140kg of high-nitrogen insect meal</strong> and reduces <strong>1.9 Tons of CO₂ equivalent</strong>.
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
