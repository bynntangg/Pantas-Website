/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowRight, Leaf, ShieldAlert, Sparkles, TrendingUp, Cpu, BatteryCharging } from "lucide-react";
import { motion } from "motion/react";
import logoSymbol from "../assets/logo_symbol.svg";
import heroIllustration from "../assets/images/hero_illustration_1781896670537.jpg";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"predict" | "distribution" | "esg">("predict");
  const [hotelRoomDemand, setHotelRoomDemand] = useState(82);

  // Stats ticking
  const [tonsRescued, setTonsRescued] = useState(3842.1);
  const [co2Saved, setCo2Saved] = useState(15368.4);
  const [esgScoreAverage, setEsgScoreAverage] = useState(94.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTonsRescued((prev) => +(prev + 0.02).toFixed(2));
      setCo2Saved((prev) => +(prev + 0.08).toFixed(2));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Absolute high-tech vector grids and lights */}
      <div className="absolute inset-0 bg-[#0B0F19]" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-emerald/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Diagonal grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copys & Core Proposal */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Custom Brand Logo Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3.5 mb-6"
            >
              <img 
                src={logoSymbol} 
                className="w-14 h-14 object-contain" 
                alt="PANTAS Emblem" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-widest text-white leading-tight">PANTAS</span>
                <span className="text-[10px] font-mono tracking-widest text-brand-emerald font-extrabold uppercase">Zero Waste Food</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>LAUNCHING SPECIAL INVESTOR STAGE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-none mb-6"
            >
              PANTAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-emerald to-brand-accent">
                Zero Waste Food
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#94A3B8] text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-sans"
            >
              AI-powered Circular Economy platform transforming food surplus into economic, social, and environmental value through intelligent redistribution, organic waste recovery, and automated ESG reporting.
            </motion.p>

            {/* CTA Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-emerald text-brand-navy font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Demo Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium text-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-[0.98]"
              >
                <span>Explore Circular Impact</span>
              </a>
            </motion.div>

            {/* Minimalist Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 py-6 border-t border-white/5 max-w-sm"
            >
              <div>
                <span className="block font-mono text-[10px] tracking-wider text-[#64748B]">STAGE</span>
                <span className="block font-semibold text-white/90 text-sm">Pre-Seed</span>
              </div>
              <div className="border-l border-white/5 pl-4">
                <span className="block font-mono text-[10px] tracking-wider text-[#64748B]">SDG ALIGNED</span>
                <span className="block font-semibold text-[#10B981] text-sm">2, 8, 12, 13</span>
              </div>
              <div className="border-l border-white/5 pl-4">
                <span className="block font-mono text-[10px] tracking-wider text-[#64748B]">TARGET</span>
                <span className="block font-semibold text-brand-accent text-sm">HOREKA</span>
              </div>
            </motion.div>

            {/* Ecosystem Illustration Preview */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0F19]/60 aspect-video group max-w-sm shadow-xl"
            >
              <img
                src={heroIllustration}
                alt="PANTAS Smart Circular Ecosystem Concept Illustration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/20 to-transparent flex flex-col justify-end p-3.5">
                <span className="text-[9px] font-mono text-brand-primary tracking-widest uppercase">PHYSICAL CIRCULAR LOOP MAPPING</span>
                <span className="text-[11px] text-white/90 font-sans mt-0.5 leading-normal">Interconnecting kitchen grids, food banks, and biological upcycling hubs.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity SaaS interactive system display */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full rounded-2xl border border-white/10 bg-[#0B0F19]/40 backdrop-blur-xl p-4 sm:p-6 glow-green"
            >
              {/* Top Dashboard Rail bar mimicking actual SaaS platform */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-[#475569] sm:inline hidden">https://dashboard.pantas.ai/overview</span>
                </div>
                {/* Tabs Selector for Interactive dashboard pages */}
                <div className="flex items-center bg-white/5 rounded-lg p-0.5 border border-white/5">
                  <button
                    onClick={() => setActiveTab("predict")}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      activeTab === "predict"
                        ? "bg-brand-primary text-brand-navy shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    AI Forecast
                  </button>
                  <button
                    onClick={() => setActiveTab("distribution")}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      activeTab === "distribution"
                        ? "bg-brand-primary text-brand-navy shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Smart Grid
                  </button>
                  <button
                    onClick={() => setActiveTab("esg")}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      activeTab === "esg"
                        ? "bg-brand-primary text-brand-navy shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    ESG Core
                  </button>
                </div>
              </div>

              {/* Ticking live counters - Stripe status layout */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="block text-[9px] font-mono tracking-wider text-[#64748B]">RESCUED SOLID (KG)</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-brand-primary">
                    {tonsRescued.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="block text-[9px] font-mono tracking-wider text-[#64748B]">CO₂ OFFSET (KG)</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-brand-emerald">
                    {co2Saved.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="block text-[9px] font-mono tracking-wider text-[#64748B]">ESG GROUP SCORE</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-brand-accent">
                    {esgScoreAverage.toFixed(1)} <span className="text-[10px] text-white/50">/100</span>
                  </span>
                </div>
              </div>

              {/* Sub-panels representing live SaaS pages */}
              <div className="min-h-[280px]">
                {activeTab === "predict" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-mono tracking-wider text-white">AI Surplus Forecasting Models</h4>
                        <span className="text-[10px] text-[#64748B]">Predictive inventory planning powered by local HOREKA trends.</span>
                      </div>
                      <div className="bg-[#10B981]/10 px-2 py-0.5 rounded text-[10px] text-brand-emerald border border-brand-emerald/10 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse inline-block" /> Live
                      </div>
                    </div>

                    {/* Interactive Slider simulating HOREKA variable demand */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-white/90">Simulated Hotel Room Bookings / Café Traffic</span>
                        <span className="text-xs font-mono text-brand-primary font-bold">{hotelRoomDemand}% Capacity</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={hotelRoomDemand}
                        onChange={(e) => setHotelRoomDemand(Number(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                      />
                      <div className="flex justify-between text-[9px] text-[#475569] font-mono mt-1">
                        <span>Low Season (20%)</span>
                        <span>Average (60%)</span>
                        <span>High Peak (100%)</span>
                      </div>
                    </div>

                    {/* Graphical area of forecast optimization */}
                    <div className="relative h-28 bg-[#0B0F19]/80 border border-white/5 rounded-xl p-2.5 flex items-end overflow-hidden">
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none" />
                      
                      <div className="z-10 absolute top-2 left-3 flex gap-3 text-[10px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-0.5 bg-[#EF4444] inline-block" />
                          <span className="text-[#94A3B8]">Est. Unoptimized Overproduction ({(hotelRoomDemand * 0.4 + 12).toFixed(0)} kg)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-0.5 bg-brand-primary inline-block" />
                          <span className="text-brand-primary">PANTAS Plan Target ({(hotelRoomDemand * 0.22 + 4).toFixed(0)} kg)</span>
                        </div>
                      </div>

                      {/* Mock Chart Paths */}
                      <svg className="w-full h-full absolute inset-0 text-white/15 pointer-events-none">
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="100%" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                        <line x1="0" y1="60" x2="100%" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                        <line x1="0" y1="100" x2="100%" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />

                        {/* Unoptimized Line */}
                        <path
                          d={`M 0,${100 - hotelRoomDemand * 0.4} Q 100,${90 - hotelRoomDemand * 0.6} 200,${110 - hotelRoomDemand * 0.5} T 400,${80 - hotelRoomDemand * 0.65} T 800,${115 - hotelRoomDemand * 0.7}`}
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="2"
                        />
                        {/* Optimized Line */}
                        <path
                          d={`M 0,${110 - hotelRoomDemand * 0.2} Q 100,${115 - hotelRoomDemand * 0.3} 200,${112 - hotelRoomDemand * 0.24} T 400,${118 - hotelRoomDemand * 0.32} T 800,${120 - hotelRoomDemand * 0.35}`}
                          fill="none"
                          stroke="#22C55E"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-brand-emerald justify-center bg-brand-emerald/5 p-2 rounded-lg border border-brand-emerald/10">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Forecast active: Waste minimized by {(35 + (hotelRoomDemand * 0.25)).toFixed(1)}% through instant smart pricing suggestion.</span>
                    </div>
                  </div>
                )}

                {activeTab === "distribution" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-mono tracking-wider text-white">Grid Smart Routing</h4>
                        <span className="text-[10px] text-[#64748B]">Real-time circular flow from HOREKA partners to matching processors.</span>
                      </div>
                      <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-mono px-2 py-0.5 rounded border border-brand-primary/20">
                        12 Active Hubs
                      </span>
                    </div>

                    {/* Highly-styled SVG diagram showing physical circular pipeline */}
                    <div className="relative h-44 bg-[#0B0F19]/90 border border-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg className="w-full h-full absolute inset-0">
                        {/* Node lines with animation pulses */}
                        <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5">
                          <line x1="20%" y1="50%" x2="50%" y2="50%" />
                          <line x1="50%" y1="50%" x2="80%" y2="25%" />
                          <line x1="50%" y1="50%" x2="80%" y2="75%" />
                        </g>

                        {/* Animated pulses travelling along the pipelines */}
                        <circle r="3" fill="#22C55E">
                          <animateMotion dur="4s" repeatCount="indefinite" path="M 120,88 L 300,88" />
                        </circle>
                        <circle r="3" fill="#F59E0B">
                          <animateMotion dur="3s" repeatCount="indefinite" path="M 300,88 L 480,44" />
                        </circle>
                        <circle r="3" fill="#10B981">
                          <animateMotion dur="5s" repeatCount="indefinite" path="M 300,88 L 480,132" />
                        </circle>

                        {/* Central Hub */}
                        <circle cx="50%" cy="50%" r="22" fill="#0F172A" stroke="#22C55E" strokeWidth="2" />
                        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="bold">
                          PANTAS AI
                        </text>

                        {/* Outer partners */}
                        <circle cx="20%" cy="50%" r="16" fill="#152B1E" stroke="#10B981" strokeWidth="1.5" />
                        <text x="20%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="8">
                          HOREKA
                        </text>

                        <circle cx="80%" cy="25%" r="16" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                        <text x="80%" y="27%" dominantBaseline="middle" textAnchor="middle" fill="#94A3B8" fontSize="8">
                          Consumer
                        </text>

                        <circle cx="80%" cy="75%" r="16" fill="#1F241F" stroke="#10B981" strokeWidth="1.5" />
                        <text x="80%" y="77%" dominantBaseline="middle" textAnchor="middle" fill="#94A3B8" fontSize="8">
                          Organic
                        </text>
                      </svg>

                      {/* Small visual card badges absolute positioning */}
                      <div className="absolute top-2 left-2 bg-[#22C55E]/15 border border-[#22C55E]/20 px-2 py-0.5 rounded text-[8px] font-mono whitespace-nowrap text-brand-primary">
                        HOREKA: Grand Premier Hotel &rarr; Surplus Alert
                      </div>
                      <div className="absolute bottom-2 right-2 bg-[#F59E0B]/15 border border-[#F59E0B]/20 px-2 py-0.5 rounded text-[8px] font-mono whitespace-nowrap text-[#F59E0B]">
                        Distributor: Eco Upcycling Hub
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "esg" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-mono tracking-wider text-white">Carbon Credit & ESG Ledger</h4>
                        <span className="text-[10px] text-[#64748B]">Audited blockchain-ready reporting compliant with GRI Standards.</span>
                      </div>
                      <ShieldAlert className="w-4 h-4 text-[#F59E0B]" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono text-[#94A3B8]">Methane Reduced</span>
                        <div className="flex justify-between items-end">
                          <span className="text-lg font-mono font-bold text-[#F59E0B]">412.3 Kg</span>
                          <span className="text-[9px] text-[#10B981] font-mono mb-0.5">+14.2% MoM</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#F59E0B] h-full w-[72%]" />
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono text-[#94A3B8]">Water Footprint Saved</span>
                        <div className="flex justify-between items-end">
                          <span className="text-lg font-mono font-bold text-brand-emerald">12,680 L</span>
                          <span className="text-[9px] text-brand-emerald font-mono mb-0.5">Verified</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-brand-emerald h-full w-[88%]" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0F172A] border border-white/5 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="block text-[8px] font-mono text-[#475569]">AUTOMATED AUDITED CERTIFICATE</span>
                        <span className="text-[10px] text-white/90 font-medium">GRI Food Waste Disclosure Standard alignment</span>
                      </div>
                      <button className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-[9px] font-mono rounded border border-white/10 transition-colors text-white">
                        Export XML
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Glowing overlay floating badges in behind / surrounding the laptop card */}
            <div className="absolute -top-6 -right-6 p-3 bg-[#111827]/90 border border-white/10 rounded-xl flex items-center gap-2 shadow-xl blur-[0.2px] hover:translate-y-1 transition-transform">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
              <div className="text-right">
                <span className="block text-[9px] font-mono text-[#64748B]">SAVED TODAY</span>
                <span className="block text-xs font-bold text-white leading-none">1,482 Meals</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-3 bg-[#111827]/90 border border-white/10 rounded-xl flex items-center gap-2.5 shadow-xl hover:-translate-y-1 transition-transform">
              <TrendingUp className="w-4 h-4 text-brand-emerald" />
              <div className="text-left">
                <span className="block text-[9px] font-mono text-[#64748B]">COMMU. VALUE</span>
                <span className="block text-xs font-bold text-brand-emerald leading-none">$6,200+ Saved</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
