/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Landmark, TrendingUp, Calendar, Coins, ArrowRight, ShieldCheck, Scale, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function BusinessImpact() {
  const [foodBudget, setFoodBudget] = useState(5000); // in USD

  // Core baseline stats representing enterprise feasibility study
  const initialInvestment = 1800; // USD Setup
  const baseBudget = 5000; // USD Monthly Procurement
  const BaseMonthlyNetProfit = 760; // USD Monthly Savings Profit
  const basePaybackDays = 112;
  const baseRoi = 27.31; // %

  // Calculate dynamic outputs based on slider input
  const multiplier = foodBudget / baseBudget;
  const simulatedMonthlySavings = Math.round(foodBudget * 0.152); // average food ingredients recovery rate
  const simulatedNetProfit = Math.round(BaseMonthlyNetProfit * multiplier);
  const simulatedRoi = +(baseRoi * (0.8 + multiplier * 0.2)).toFixed(2);
  const simulatedPaybackDays = Math.round(basePaybackDays / (0.7 + multiplier * 0.3));

  return (
    <section id="business-impact" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Absolute glow bulbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-brand-emerald/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#F59E0B] font-semibold bg-amber-500/10 px-3.5 py-1 rounded-full uppercase">
            Financial Feasibility Study
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Investor-Grade Financial Metrics
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            Robust unit economics model backed by audited regional trial pilots. PANTAS delivers swift amortization margins while creating positive climate indices.
          </p>
        </div>

        {/* Triple standard Investor KPIs cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">CAPITAL EXPENDITURE</span>
            <div className="flex items-baseline gap-1 mt-4 mb-1">
              <span className="text-2xl font-mono font-bold text-white">${initialInvestment.toLocaleString()}</span>
            </div>
            <span className="text-xs text-[#94A3B8]">Initial Setup & Platform Integration</span>
            <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-lg border border-white/10">
              <Coins className="w-4 h-4 text-[#64748B]" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">INTERNAL RATE OF RETURN (IRR)</span>
            <div className="flex items-baseline gap-1 mt-4 mb-1">
              <span className="text-2xl font-mono font-bold text-[#22C55E]">27.31%</span>
            </div>
            <span className="text-xs text-brand-primary font-semibold">Pre-Tax Investment Return</span>
            <div className="absolute top-4 right-4 bg-brand-primary/10 p-2 rounded-lg border border-brand-primary/20">
              <TrendingUp className="w-4 h-4 text-brand-primary" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">PAYBACK PHASE</span>
            <div className="flex items-baseline gap-1 mt-4 mb-1">
              <span className="text-2xl font-mono font-bold text-white">112 Days</span>
            </div>
            <span className="text-xs text-[#94A3B8]">Amortization Period</span>
            <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-[#64748B]" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#090D16]/60 border border-white/5 relative overflow-hidden">
            <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">EST. MONTHLY NET PROFIT</span>
            <div className="flex items-baseline gap-1 mt-4 mb-1">
              <span className="text-2xl font-mono font-bold text-brand-emerald">${BaseMonthlyNetProfit.toLocaleString()}</span>
            </div>
            <span className="text-xs text-[#94A3B8]">Based on regional pilot site data</span>
            <div className="absolute top-4 right-4 bg-brand-emerald/10 p-2 rounded-lg border border-brand-emerald/20">
              <Landmark className="w-4 h-4 text-brand-emerald" />
            </div>
          </div>

        </div>

        {/* Interactive ROI Calculator Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#090D16]/40 border border-white/5 rounded-3xl backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/20 text-[#F59E0B] text-[10px] font-mono font-bold w-fit uppercase">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Ecosytem Calculator Simulation</span>
              </div>
              <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
                Simulate Your Financial Safeguards
              </h3>
              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-sans">
                Slide the budget control below to enter your restaurant or hotel's actual monthly food procurement expense, and watch simulated efficiency gains reflect in real-time.
              </p>

              {/* Slider element */}
              <div className="p-4 bg-[#070A11] rounded-2xl border border-white/5 my-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-white/90">Est. Monthly Food Procurement Budget:</span>
                  <span className="text-sm font-mono text-[#F59E0B] font-extrabold">${foodBudget.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={foodBudget}
                  onChange={(e) => setFoodBudget(Number(e.target.value))}
                  className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between text-[9px] text-[#475569] font-mono mt-1 pt-1 border-t border-white/5">
                  <span>Small Cafe ($1,000)</span>
                  <span>Average ($7,500)</span>
                  <span>Grand Hotel ($15,000)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-brand-primary bg-brand-primary/5 p-3 rounded-xl border border-brand-primary/10 mt-6">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Yield prediction safe parameters: Based on food price index levels verified by local government disclosures.</span>
            </div>
          </div>

          {/* Simulated Financial Outputs */}
          <div className="lg:col-span-7 bg-[#090D16]/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-sans font-extrabold text-white mb-6 border-b border-white/5 pb-3">Simulated Sustainability Returns Metrics</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-brand-navy border border-white/5 rounded-2xl relative">
                  <span className="block text-[8px] font-mono text-[#64748B] uppercase tracking-wider">EST. RECOVERED CASH VALUE / MO</span>
                  <span className="block text-xl font-mono font-bold text-[#F59E0B] mt-2">${simulatedMonthlySavings.toLocaleString()}</span>
                  <span className="block text-[10px] text-[#94A3B8] mt-1">Cash recovered from unserved food items flash-sales</span>
                </div>

                <div className="p-4 bg-brand-navy border border-white/5 rounded-2xl relative">
                  <span className="block text-[8px] font-mono text-[#64748B] uppercase tracking-wider">PROJECTED EXTRA NET PROFIT / MO</span>
                  <span className="block text-xl font-mono font-bold text-brand-primary mt-2">${simulatedNetProfit.toLocaleString()}</span>
                  <span className="block text-[10px] text-[#94A3B8] mt-1">Margin increase from direct digital supply chain savings</span>
                </div>

                <div className="p-4 bg-brand-navy border border-white/5 rounded-2xl relative">
                  <span className="block text-[8px] font-mono text-[#64748B] uppercase tracking-wider">ADJUSTED INVESTMENT PAYBACK SPEED</span>
                  <span className="block text-xl font-mono font-bold text-white mt-2">~ {simulatedPaybackDays} Days</span>
                  <span className="block text-[10px] text-[#94A3B8] mt-1">Platform initial license cost fully recovered</span>
                </div>

                <div className="p-4 bg-brand-navy border border-white/5 rounded-2xl relative">
                  <span className="block text-[8px] font-mono text-[#64748B] uppercase tracking-wider">SIMULATED CORE ACCOUNT IRR</span>
                  <span className="block text-xl font-mono font-bold text-brand-emerald mt-2">{simulatedRoi}% ROI</span>
                  <span className="block text-[10px] text-[#94A3B8] mt-1">Compound efficiency dividend return factor</span>
                </div>
              </div>
            </div>

            {/* Custom comparative visual graph */}
            <div className="mt-8 pt-4 border-t border-white/5 space-y-2">
              <span className="block text-[9px] font-mono text-[#64748B] uppercase tracking-wider">COMPARE: ANNUAL EXTRA PROFITS ($) :</span>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#94A3B8] w-20 shrink-0">Unoptimized:</span>
                  <div className="w-full bg-white/5 h-4 rounded-lg overflow-hidden">
                    <div className="bg-red-500/20 h-full w-[15%] rounded-lg flex items-center pl-2">
                      <span className="text-[8px] font-mono font-bold text-red-400">$0 Gains</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-brand-primary w-20 shrink-0 font-bold">PANTAS Plan:</span>
                  <div className="w-full bg-white/5 h-4 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-primary to-brand-emerald h-full rounded-lg flex items-center pr-2 pl-2 shadow" style={{ width: `${Math.min(25 + (simulatedNetProfit / 50), 100)}%`, transition: 'width 0.4s ease-out' }}>
                      <span className="text-[8px] font-mono font-bold text-brand-navy">${(simulatedNetProfit * 12).toLocaleString()} Profit / Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
