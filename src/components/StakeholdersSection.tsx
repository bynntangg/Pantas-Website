/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Hotel, UserCheck, ShieldAlert, ChevronRight, CheckCircle2, DollarSign, Leaf, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Stakeholder } from "../types";

export default function StakeholdersSection() {
  const [selectedStakeholderId, setSelectedStakeholderId] = useState<string>("horeka");

  const stakeholders: Stakeholder[] = [
    {
      id: "horeka",
      name: "HOREKA Partners",
      role: "Hotels, Restaurants & Cafés",
      description: "Establishments facing high variable inventory, early batch decay, and unmanaged food waste operations.",
      benefitTitle: "Operational & Fiscal Uplift",
      benefits: [
        "Earn revenue on food surplus that would otherwise represent a garbage disposal cost.",
        "Utilize AI predictive models to calibrate future stocking and optimize ingredients purchase.",
        "Automated ESG reporting certificates to showcase climate commitments to boards and guests.",
        "Improve company morale by redirecting perfectly edible food to consumers and local NGOs."
      ],
      metrics: [
        { label: "Food Waste Cut", value: "up to 45%" },
        { label: "Margin Recovery", value: "Rp4-12M / mo" },
        { label: "Audit Readiness", value: "100% Automated" }
      ],
      color: "border-brand-primary text-brand-primary bg-brand-primary/10",
      accentColor: "#22C55E"
    },
    {
      id: "consumers",
      name: "Consumers & Retail",
      role: "E-commerce buyers & local customers",
      description: "Value-seeking families, students, and conscious eaters wanting nutritious meals at affordable prices.",
      benefitTitle: "High-Quality Food Accessibility",
      benefits: [
        "Access high-grade gourmet meals, breads, and produce at up to 50% - 70% discounts.",
        "Direct connection to high-end kitchens in Solo Raya through the mobile alert network.",
        "Active, direct climate contribution tracker within the personal profile.",
        "Safe food quality guarantee, items uploaded only within compliant food safety hours."
      ],
      metrics: [
        { label: "Average Discount", value: "60% - 75% Off" },
        { label: "Avg savings / user", value: "Rp450k / mo" },
        { label: "Rescue contribution", value: "Live profile badge" }
      ],
      color: "border-amber-400 text-amber-500 bg-amber-400/10",
      accentColor: "#F59E0B"
    },
    {
      id: "processors",
      name: "Waste Processors",
      role: "Maggot Farms & Organic Compost Plants",
      description: "Recycling operators needing bulk volumes of stable, uncompromised wet organic waste for biological processing.",
      benefitTitle: "Consistent, Free Biological Input",
      benefits: [
        "Eliminate raw materials procurement stress with constant streams of verified kitchen organic waste.",
        "Optimal sorting categories handled at high-end partner premises directly.",
        "Generate nutrient-dense organic compost and black soldier fly larvae (Maggots) for aquaculture markets.",
        "Participate as certified links in audited circular carbon offset programs."
      ],
      metrics: [
        { label: "Input consistency", value: "+300% volume" },
        { label: "Cost of raw inputs", value: "Rp 0 (Free supply)" },
        { label: "Sales of BSF/Compost", value: "+18% Yields" }
      ],
      color: "border-brand-emerald text-brand-emerald bg-[#10B981]/10",
      accentColor: "#10B981"
    }
  ];

  const activeStakeholder = stakeholders.find((s) => s.id === selectedStakeholderId) || stakeholders[0];

  return (
    <section id="ecosystem" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-primary font-semibold bg-brand-primary/10 px-3.5 py-1 rounded-full uppercase">
            One Platform. Three Beneficiaries.
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight animate-fade-in">
            Connecting the Circular Food System
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            PANTAS isn't just an interface; it's a multi-directional economic exchange. We link supply, purchase capability, and organic processors into a self-reinforcing value turbine.
          </p>
        </div>

        {/* Dynamic Stakeholder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stakeholder selector buttons/cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-2">
              Select Stakeholder Role
            </span>
            
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {stakeholders.map((item) => {
                const isActive = item.id === selectedStakeholderId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStakeholderId(item.id)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.04] border-white/20 shadow-md backdrop-blur-lg"
                        : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon container */}
                      <div className={`p-3 rounded-xl border ${item.color}`}>
                        {item.id === "horeka" && <Hotel className="w-5 h-5" />}
                        {item.id === "consumers" && <UserCheck className="w-5 h-5" />}
                        {item.id === "processors" && <Leaf className="w-5 h-5" />}
                      </div>

                      <div className="flex-1">
                        <span className="block text-xs font-mono text-[#64748B] uppercase">
                          {item.role}
                        </span>
                        <span className="block text-base font-bold text-white mt-0.5">
                          {item.name}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 text-[#475569] transition-transform ${
                          isActive ? "translate-x-1 text-brand-primary" : ""
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Small interactive indicator */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 mt-4">
              <span className="text-[11px] text-[#94A3B8] font-mono leading-relaxed block text-center">
                📊 Interactive Diagram: Click tabs to visualize organic food pipeline directions.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic ecosystem diagram and selected details panel */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0F19]/40 backdrop-blur-xl p-6 sm:p-8">
            
            {/* Visual SVG Ecosystem Diagram mapping connections */}
            <div className="relative h-44 bg-[#090D16] border border-white/5 rounded-xl overflow-hidden flex items-center justify-center mb-6">
              
              {/* Connected Lines Grid */}
              <svg className="absolute inset-0 w-full h-full text-white/5">
                <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#1E293B" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#1E293B" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="50%" y2="25%" stroke="#1E293B" strokeWidth="2" />

                {/* Animated colored connectors matching select category */}
                <g stroke={activeStakeholder.accentColor} strokeWidth="2" className="opacity-70">
                  {selectedStakeholderId === "horeka" && (
                    <>
                      <line x1="50%" y1="50%" x2="50%" y2="25%" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                      </line>
                    </>
                  )}
                  {selectedStakeholderId === "consumers" && (
                    <>
                      <line x1="50%" y1="50%" x2="20%" y2="70%" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                      </line>
                    </>
                  )}
                  {selectedStakeholderId === "processors" && (
                    <>
                      <line x1="50%" y1="50%" x2="80%" y2="70%" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                      </line>
                    </>
                  )}
                </g>
              </svg>

              {/* Center Node representing PANTAS Platform */}
              <div className="relative z-10 p-3 rounded-full bg-brand-primary/[0.08] border border-brand-primary/40 text-brand-primary flex flex-col items-center justify-center glow-green w-22 h-22">
                <Leaf className="w-5 h-5 text-brand-primary animate-pulse" />
                <span className="text-[10px] font-bold mt-1 uppercase text-white font-display">PANTAS</span>
              </div>

              {/* Stakeholder 1: HOREKA (Top Node) */}
              <div className={`absolute top-4 p-2 px-3 rounded-lg border flex items-center gap-1.5 transition-all duration-300 ${
                selectedStakeholderId === "horeka"
                  ? "bg-brand-primary/10 border-brand-primary text-white scale-105 shadow-xl"
                  : "bg-white/[0.02] border-white/5 text-[#94A3B8]"
              }`}>
                <Hotel className="w-4 h-4 text-brand-primary" />
                <span className="text-[10px] font-mono font-bold uppercase">Horeka Partners</span>
              </div>

              {/* Stakeholder 2: Consumers (Bottom Left Side) */}
              <div className={`absolute bottom-4 left-4 p-2 px-3 rounded-lg border flex items-center gap-1.5 transition-all duration-300 ${
                selectedStakeholderId === "consumers"
                  ? "bg-amber-500/10 border-amber-400 text-white scale-105 shadow-xl"
                  : "bg-white/[0.02] border-white/5 text-[#94A3B8]"
              }`}>
                <UserCheck className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-mono font-bold uppercase">Consumers</span>
              </div>

              {/* Stakeholder 3: Organic Processors (Bottom Right Side) */}
              <div className={`absolute bottom-4 right-4 p-2 px-3 rounded-lg border flex items-center gap-1.5 transition-all duration-300 ${
                selectedStakeholderId === "processors"
                  ? "bg-brand-emerald/10 border-brand-emerald text-white scale-105 shadow-xl"
                  : "bg-white/[0.02] border-white/5 text-[#94A3B8]"
              }`}>
                <Leaf className="w-4 h-4 text-brand-emerald" />
                <span className="text-[10px] font-mono font-bold uppercase">Waste Plants</span>
              </div>

            </div>

            {/* Stakeholder Details Pane with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStakeholder.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-mono text-brand-primary uppercase tracking-wider font-semibold">
                    {activeStakeholder.role}
                  </span>
                  <h3 className="text-xl font-display font-extrabold text-white mt-1">
                    Value Proposition for {activeStakeholder.name}
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm mt-2 leading-relaxed">
                    {activeStakeholder.description}
                  </p>
                </div>

                {/* Benefits Bullet Points */}
                <div className="space-y-2 py-2">
                  <span className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                    {activeStakeholder.benefitTitle} :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStakeholder.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span className="text-white text-xs leading-relaxed font-sans">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI metrics for select stakeholder */}
                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-2">
                    Verified Financial & Ecological Forecasts
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {activeStakeholder.metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                        <span className="block text-base sm:text-lg font-mono font-bold text-white leading-tight">
                          {metric.value}
                        </span>
                        <span className="block text-[9px] font-mono text-[#64748B] uppercase mt-1 leading-snug">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
