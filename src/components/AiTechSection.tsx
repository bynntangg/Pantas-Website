/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Cpu, BrainCircuit, Sparkles, BarChart3, Fingerprint, TrendingUp, ShieldAlert, FileText, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import aiClassifier from "../assets/images/ai_classifier_1781896704472.jpg";

export default function AiTechSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 0,
      title: "AI Surplus Prediction",
      badge: "Deep Forecasting",
      description: "Applies contextual machine learning to weather models, historical hotel check-ins, local tourism surges, and day-of-week sales to estimate exact kitchen demand, preventing bulk over-purchasing.",
      interfaceLabel: "NEURAL CORE PREDICTION",
      value1: "92.4% Accuracy",
      value2: "-30% Ingredient Cost",
      chartHeight: "h-20",
      accent: "text-brand-primary border-brand-primary/20 bg-brand-primary/10",
      glowColor: "glow-green"
    },
    {
      id: 1,
      title: "AI Impact Tracker",
      badge: "Eco-Metrics Core",
      description: "Generates instant calculations of methane emission mitigations, groundwater preservation indices, and nutrient rescue stats based on food types (bakery, meat, vegetables) rescued or recycled.",
      interfaceLabel: "CLIMATE EQUATIONS MATRIX",
      value1: "2.3x Methane Prevented",
      value2: "ISO 14064 Compliant",
      chartHeight: "h-20",
      accent: "text-amber-400 border-amber-400/20 bg-amber-400/10",
      glowColor: "glow-amber"
    },
    {
      id: 2,
      title: "Automated ESG Reporting",
      badge: "Corporate Governance",
      description: "Transforms circular metrics directly into board-ready climate disclosure documentation, formatted dynamically to fit international reporting frameworks such as GRI, SASB, and TCFD.",
      interfaceLabel: "ESG STANDARDS MATRIX",
      value1: "GRI 306 Aligned",
      value2: "Audit-Trail Verified",
      chartHeight: "h-20",
      accent: "text-brand-emerald border-brand-emerald/20 bg-[#10B981]/10",
      glowColor: "glow-emerald"
    }
  ];

  return (
    <section id="ai-tech" className="relative py-24 bg-[#070A11] overflow-hidden">
      {/* High-tech glow spots to feel like a premium Linear/Vercel screen */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CBD5E1] text-xs font-mono uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
            <span>PANTAS AI Core Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            Powered by Artificial Intelligence
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            Eliminating guesswork. PANTAS wraps sophisticated predictive algorithms and localized demographic regressions into elegant, simple corporate sustainability indicators.
          </p>
        </div>

        {/* Feature Cards Grid (3 Cards with unique high-fidelity visualizers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between h-full bg-[#0B0F19]/80 backdrop-blur-md ${
                activeFeature === feature.id
                  ? `border-white/25 scale-[1.02] shadow-2xl ${feature.glowColor}`
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full ${feature.accent}`}>
                    {feature.badge}
                  </span>
                  
                  {feature.id === 0 && <BrainCircuit className="w-5 h-5 text-brand-primary" />}
                  {feature.id === 1 && <Zap className="w-5 h-5 text-amber-400" />}
                  {feature.id === 2 && <FileText className="w-5 h-5 text-brand-emerald" />}
                </div>

                <h3 className="text-xl font-display font-extrabold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed font-sans mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Feature Specific Graphic Interface Box */}
              <div>
                <div className="p-4 bg-[#070A11] border border-white/5 rounded-xl space-y-3">
                  <span className="block text-[8px] font-mono text-[#475569]">{feature.interfaceLabel} :</span>
                  
                  {feature.id === 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-[#94A3B8]">
                        <span>Prediction Weight</span>
                        <span className="text-brand-primary font-bold">98.4% Confidence</span>
                      </div>
                      <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-primary h-full w-[94%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] pt-1">
                        <span>Learning Epoch</span>
                        <span className="text-white">Run #4,204</span>
                      </div>
                    </div>
                  )}

                  {feature.id === 1 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-amber-400">
                        <span>Rescued Bakery Solids</span>
                        <span className="font-bold">+184Kg</span>
                      </div>
                      <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[65%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-brand-emerald">
                        <span>Rescued Meats</span>
                        <span className="font-bold">+92Kg</span>
                      </div>
                      <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-emerald h-full w-[82%]" />
                      </div>
                    </div>
                  )}

                  {feature.id === 2 && (
                    <div className="space-y-1 text-[9px] font-mono text-[#94A3B8]">
                      <div className="flex items-center gap-1.5 text-brand-emerald">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                        <span>GRI-306-3 Waste Generated: PASSED</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                        <span>Carbon intensity indicator logged</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>SEC Climate disclosure format: OK</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[#64748B]">VERIFIED PERFORMANCE:</span>
                  <span className="text-white font-bold">{feature.value1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big visual promo: AI Neural Core logic mapping */}
        <div className="mt-12 rounded-3xl bg-[#090D16] border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-square bg-slate-950">
              <img
                src={aiClassifier}
                alt="PANTAS AI Neural food scanner classifier"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-transparent flex flex-col justify-end p-4">
                <span className="text-[9px] font-mono text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded border border-brand-emerald/20 w-fit font-bold uppercase">
                  AI SCANNER ACTIVE
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="relative p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-extrabold text-white">Continuous Federated Learning Neural Grid</h4>
                  <p className="text-sm text-[#94A3B8] mt-2 font-sans">
                    Our scanner aggregates intelligence from across our regional and wider HOREKA partner networks to continuously sharpen food surplus optimization models. It safeguards commercial privacy and kitchen secret recipes while compiling highly accurate regional consumption trends.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-6 text-[10px] font-mono text-[#64748B]">
                  <div>MODEL PARADIGM: <span className="text-white font-medium">Federated Weight Shifts</span></div>
                  <div>ACCURACY THRESHOLD: <span className="text-[#10B981] font-bold">98.4%</span></div>
                </div>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-emerald text-brand-navy text-xs font-mono font-bold whitespace-nowrap transition-all uppercase group"
                >
                  <span>Learn AI Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
