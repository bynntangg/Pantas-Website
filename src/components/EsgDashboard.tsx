/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Leaf, Award, Compass, Sparkles, BarChart3, TrendingUp, Calendar, ArrowUpRight, HelpCircle, FileCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function EsgDashboard() {
  const [filterType, setFilterType] = useState<"all" | "hotels" | "bakeries">("all");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Industry specific stats metrics
  const statsConfig = {
    all: {
      foodSaved: "28,492",
      foodSavedSub: "Total Kilograms RESCUED",
      co2Prevented: "54,134",
      co2SavedSub: "Kg Carbon Equivalent",
      wasteRecycled: "18,342",
      wasteRecycledSub: "Upcycled to feed/soil",
      esgScore: "94.2",
      esgRating: "Class A Elite",
      points: [50, 85, 120, 190, 240, 290]
    },
    hotels: {
      foodSaved: "19,252",
      foodSavedSub: "Hotel banquet Surplus",
      co2Prevented: "36,578",
      co2SavedSub: "Kg Carbon Equivalent",
      wasteRecycled: "11,210",
      wasteRecycledSub: "Maggot composting",
      esgScore: "96.5",
      esgRating: "Gold Medallion",
      points: [40, 65, 90, 140, 190, 210]
    },
    bakeries: {
      foodSaved: "9,240",
      foodSavedSub: "Bread & Pastries Saved",
      co2Prevented: "17,556",
      co2SavedSub: "Kg Carbon Equivalent",
      wasteRecycled: "7,132",
      wasteRecycledSub: "Retail local compost",
      esgScore: "91.8",
      esgRating: "Class B Solid",
      points: [20, 45, 60, 85, 110, 140]
    }
  };

  const currentStats = statsConfig[filterType];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <section id="esg-dashboard" className="relative py-24 bg-[#0B0F19] overflow-hidden border-t border-b border-white/5">
      {/* Background circular glow grids */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-brand-emerald/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#10B981] font-semibold bg-brand-emerald/10 px-3.5 py-1 rounded-full uppercase">
            Carbon credit ledger
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Real-Time Audit ESG Dashboard
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            PANTAS structures and tabulates environmental metrics on continuous, blockchain-logged rails, giving HOREKA boards immediately auditable reports certified against international benchmarks.
          </p>
        </div>

        {/* Industry Filter Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex gap-2">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ${
                filterType === "all" ? "bg-brand-primary text-brand-navy shadow-lg" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              All HOREKA Scope
            </button>
            <button
              onClick={() => setFilterType("hotels")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ${
                filterType === "hotels" ? "bg-brand-primary text-brand-navy shadow-lg" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Luxury Hotels
            </button>
            <button
              onClick={() => setFilterType("bakeries")}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ${
                filterType === "bakeries" ? "bg-brand-primary text-brand-navy shadow-lg" : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Bakery Cafés
            </button>
          </div>
        </div>

        {/* ESG KPIs Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Card 1: Food Saved */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">GRI 306-3: Food Rescue</span>
            <div className="flex items-baseline gap-2 mt-4 mb-1">
              <span className="text-3xl font-mono font-bold text-white tracking-tight">
                {currentStats.foodSaved}
              </span>
              <span className="text-sm text-brand-primary font-mono font-semibold">KG</span>
            </div>
            <span className="text-xs text-[#94A3B8] font-sans">{currentStats.foodSavedSub}</span>
            <div className="absolute top-4 right-4 bg-brand-primary/10 p-2 rounded-lg border border-brand-primary/20">
              <Leaf className="w-4 h-4 text-brand-primary" />
            </div>
          </motion.div>

          {/* Card 2: CO2 Prevented */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">Scope 3 GHG offsets</span>
            <div className="flex items-baseline gap-2 mt-4 mb-1">
              <span className="text-3xl font-mono font-bold text-white tracking-tight">
                {currentStats.co2Prevented}
              </span>
              <span className="text-sm text-brand-emerald font-mono font-semibold">KG CO₂e</span>
            </div>
            <span className="text-xs text-[#94A3B8] font-sans">{currentStats.co2SavedSub}</span>
            <div className="absolute top-4 right-4 bg-brand-emerald/10 p-2 rounded-lg border border-brand-emerald/20">
              <TrendingUp className="w-4 h-4 text-brand-emerald" />
            </div>
          </motion.div>

          {/* Card 3: Waste Recycled */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">Circular Upcycling Ratio</span>
            <div className="flex items-baseline gap-2 mt-4 mb-1">
              <span className="text-3xl font-mono font-bold text-white tracking-tight">
                {currentStats.wasteRecycled}
              </span>
              <span className="text-sm text-[#F59E0B] font-mono font-semibold">KG</span>
            </div>
            <span className="text-xs text-[#94A3B8] font-sans">{currentStats.wasteRecycledSub}</span>
            <div className="absolute top-4 right-4 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
              <Compass className="w-4 h-4 text-amber-500" />
            </div>
          </motion.div>

          {/* Card 4: ESG Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">Continuous ESG rating</span>
            <div className="flex items-baseline gap-2 mt-4 mb-1">
              <span className="text-3xl font-mono font-bold text-brand-primary tracking-tight">
                {currentStats.esgScore}
              </span>
              <span className="text-[11px] text-[#64748B] font-mono">/100</span>
            </div>
            <span className="text-xs text-brand-emerald font-semibold font-sans">{currentStats.esgRating} Appraised</span>
            <div className="absolute top-4 right-4 bg-brand-primary/10 p-2 rounded-lg border border-brand-primary/20">
              <Award className="w-4 h-4 text-brand-primary" />
            </div>
          </motion.div>

        </div>

        {/* Professional Custom High-Fidelity SVG Line Graph Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Main Trend Chart (Left side) */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#090D16]/40 rounded-3xl border border-white/5 relative flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/5 pb-4">
              <div>
                <h4 className="text-sm font-sans font-extrabold text-white">Carbon Equivalent Offset Trend (YTD)</h4>
                <span className="text-[11px] text-[#64748B]">Accumulated greenhouse gases prevented in metric equivalents.</span>
              </div>
              <div className="flex items-center gap-2 bg-[#070A11] p-1 border border-white/5 rounded-lg text-[10px] font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                <span className="text-white">Jan 2026 - Jun 2026</span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative h-60 w-full flex items-end">
              <svg className="w-full h-full text-white/5 relative">
                
                {/* Horizontal guide grids */}
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />

                {/* Shading fill gradient */}
                <defs>
                  <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Shaded Area spline matching variable points stats */}
                <path
                  d={`M 0,220 
                      L 0,${220 - currentStats.points[0] * 0.5} 
                      Q 100,${220 - currentStats.points[1] * 0.5} 200,${220 - currentStats.points[2] * 0.5} 
                      T 400,${220 - currentStats.points[3] * 0.5} 
                      T 600,${220 - currentStats.points[4] * 0.5} 
                      L 600,220 Z`}
                  fill="url(#area-grad)"
                />

                {/* Main Glowing Path Line representation */}
                <path
                  d={`M 0,${220 - currentStats.points[0] * 0.5} 
                      Q 100,${220 - currentStats.points[1] * 0.5} 200,${220 - currentStats.points[2] * 0.5} 
                      T 400,${220 - currentStats.points[3] * 0.5} 
                      T 600,${220 - currentStats.points[4] * 0.5}`}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3.5"
                />

                {/* Legend points */}
                {currentStats.points.slice(0, 5).map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={`${idx * 25}%`}
                    cy={`${220 - pt * 0.5}`}
                    r={hoveredPoint === idx ? "7" : "4.5"}
                    fill="#0B0F19"
                    stroke="#22C55E"
                    strokeWidth="2.5"
                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={() => setHoveredPoint(idx)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}
              </svg>

              {/* Graphical Tooltip popup */}
              <AnimatePresence>
                {hoveredPoint !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bg-brand-navy border border-[#10B981]/40 p-2 px-3 rounded-lg text-[10px] font-mono shadow-2xl z-25 text-left"
                    style={{ left: `${hoveredPoint * 23 + 2}%`, bottom: `${currentStats.points[hoveredPoint] * 0.5}px` }}
                  >
                    <span className="block text-[#64748B] uppercase">{months[hoveredPoint]} RESCUE</span>
                    <span className="block text-white font-bold">{currentStats.points[hoveredPoint]} Kg saved</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom time ticks */}
            <div className="flex justify-between text-[10px] font-mono text-[#475569] mt-3 pt-2 border-t border-white/5">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN (EST)</span>
            </div>
          </div>

          {/* Environmental breakdown list panel (Right side) */}
          <div className="lg:col-span-4 p-6 bg-[#090D16]/40 rounded-3xl border border-white/5 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-sans font-extrabold text-white mb-4">GRI-306 Audited Disclosures</h4>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-6">
                Directly map and log your ESG food waste metrics parameters perfectly consistent with GRI guidelines framework.
              </p>

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-[#070A11] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Methane factor</span>
                  <span className="text-white font-semibold">1 kg food = 1.9 kg CO₂e</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070A11] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Audited database</span>
                  <span className="text-[#10B981] font-semibold">GRI 306 Compliant</span>
                </div>
                <div className="p-3 rounded-xl bg-[#070A11] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#64748B]">Decay Prevention KPI</span>
                  <span className="text-brand-accent font-semibold">Class A Standards</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-3 rounded-xl flex items-center gap-2.5 mt-6">
              <FileCheck className="w-5 h-5 text-brand-emerald shrink-0" />
              <div>
                <span className="block text-[8px] font-mono text-[#10B981] uppercase font-bold">REGIONAL CERTIFICATE</span>
                <span className="block text-[10px] text-white/90">Validated by Solo Local Environment Agency</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
