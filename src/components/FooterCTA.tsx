/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Leaf, Download, UserPlus, ShieldAlert, Sparkles, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoSymbol from "../assets/logo_symbol.svg";

export default function FooterCTA() {
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerType, setPartnerType] = useState<"horeka" | "processor">("horeka");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!partnerEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setPartnerEmail("");
    }, 4000);
  };

  return (
    <section id="cta" className="relative py-28 bg-[#070A11] overflow-hidden border-t border-white/5">
      {/* Background vector highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-[350px] h-[350px] bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Earth Illustrator */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px]">
            {/* Spinning Orbit Ring backdrops */}
            <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-spin-slow" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-brand-primary/10 border-dashed animate-spin" style={{ animationDuration: '40s' }} />
            
            {/* Ambient rotating glowing Earth panel */}
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#15803D] border-2 border-brand-primary/40 flex items-center justify-center shadow-[0_0_80px_rgba(34,197,94,0.15)] overflow-hidden group">
              <div className="absolute inset-x-0 top-0 bottom-1/2 bg-white/5 pointer-events-none" />
              
              {/* Continent silhouette maps */}
              <div className="text-center z-10 relative flex flex-col items-center">
                <img 
                  src={logoSymbol} 
                  className="w-20 h-20 object-contain mx-auto animate-pulse" 
                  alt="PANTAS logo" 
                  referrerPolicy="no-referrer"
                />
                <span className="block text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase mt-4">
                  indonesian circular core
                </span>
                <span className="block text-xs font-bold text-white uppercase mt-1">
                  100% nutrient recovery
                </span>
              </div>

              {/* Glowing overlay light */}
              <div className="absolute inset-0 bg-[#22C55E]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Orbiting particles: Leaf, Carbon metrics, Compost */}
            <div className="absolute top-6 left-1/4 p-2 bg-[#0B0F19] border border-white/10 rounded-xl flex items-center gap-2 shadow-2xl hover:translate-y-1 transition-transform">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
              <span className="text-[9px] font-mono text-white">CO₂: 54,134 Kg</span>
            </div>

            <div className="absolute bottom-6 right-1/4 p-2 bg-[#0B0F19] border border-white/10 rounded-xl flex items-center gap-2 shadow-2xl hover:-translate-y-1 transition-transform">
              <span className="w-2 h-0.5 bg-brand-accent inline-block" />
              <span className="text-[9px] font-mono text-white">BSF Maggot Stream</span>
            </div>
          </div>

          {/* Right Column: CTA Copy form inputs and buttons */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-primary font-semibold bg-brand-primary/10 px-3.5 py-1 rounded-full uppercase">
                Final Pitch Agenda
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                PANTAS (Pangan Tanpa Sisa)
              </h2>
              <p className="mt-4 text-brand-accent text-lg font-mono font-medium leading-relaxed uppercase">
                "Save Food. Create Value. Build Sustainability."
              </p>
              <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed">
                Connect your luxury HOREKA outlet, grocery chain, or organic treatment facility directly with Solo Raya's flagship circular recovery framework. Secure your pilot position.
              </p>
            </div>

            {/* CTA Interaction Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => { setPartnerType("horeka"); setSubmitted(false); }}
                className={`flex-1 p-3.5 rounded-xl border font-sans font-bold text-xs uppercase transition-all tracking-wider ${
                  partnerType === "horeka"
                    ? "bg-brand-primary text-brand-navy border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-white/5 text-white border-white/5 hover:border-white/10"
                }`}
              >
                Join as HOREKA Partner
              </button>
              
              <button
                onClick={() => { setPartnerType("processor"); setSubmitted(false); }}
                className={`flex-1 p-3.5 rounded-xl border font-sans font-bold text-xs uppercase transition-all tracking-wider ${
                  partnerType === "processor"
                    ? "bg-brand-primary text-brand-navy border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-white/5 text-white border-white/5 hover:border-white/10"
                }`}
              >
                Become Waste Processor
              </button>
            </div>

            {/* Form submit input card */}
            <div className="p-6 bg-[#0B0F19]/60 border border-white/5 rounded-2xl relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <span className="block text-[10px] font-mono text-[#64748B] uppercase">
                      ENTER BUSINESS CORRESPONDENCE EMAIL :
                    </span>
                    
                    <div className="flex flex-col sm:flex-row items-stretch gap-3">
                      <input
                        type="email"
                        required
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="director@grand-hotel.com"
                        className="flex-1 bg-[#070A11] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                      />
                      <button
                        type="submit"
                        className="p-3 px-6 bg-[#15803D] hover:bg-brand-primary text-white hover:text-brand-navy font-bold text-xs uppercase rounded-xl transition-colors font-sans flex items-center justify-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Request Pilot Deck</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="block text-[9px] font-mono text-[#475569] uppercase">
                      🔒 Secured. Your data is processed compliant with GDPR guidelines.
                    </span>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-3 py-6"
                  >
                    <CheckCircle className="w-10 h-10 text-brand-emerald mx-auto mb-3" />
                    <h4 className="text-sm font-sans font-extrabold text-white">Pilot Application Sent successfully!</h4>
                    <span className="block text-xs text-[#94A3B8] mt-2 font-sans">
                      Our Solo Raya regional lead will send corresponding business slide briefs over within 1 business day.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Download proposal Action bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white/[0.01] border border-white/5 p-4 rounded-xl gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-brand-primary/10 rounded-lg border border-brand-primary/20 text-brand-primary">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white">Executive Pitch Deck Summary</span>
                  <span className="block text-[10px] text-[#64748B] font-mono uppercase mt-0.5">PDF (2.8 MB) • 12 SLIDES</span>
                </div>
              </div>
              <a
                href="#business-impact"
                className="w-full sm:w-auto text-center px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold uppercase rounded-xl text-white hover:border-white/20 transition-all block"
              >
                Download Proposal
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Actual Corporate Footer subbars */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xs text-[#475569] font-mono tracking-widest uppercase">
            © 2026 PANTAS AI Platform. All rights reserved.
          </span>
          <span className="block text-[10px] text-[#475569] font-mono uppercase mt-1">
            Developed in cooperation with Solo Local Environment Agency & Carbon offset standard organizations.
          </span>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-[#64748B]">
          <a href="#hero" className="hover:text-white transition-colors">BACK TO TOP</a>
          <span>•</span>
          <a href="#sdg" className="hover:text-white transition-colors">UN SDG</a>
          <span>•</span>
          <a href="#ai-tech" className="hover:text-white transition-colors">AI CLASSIFIER</a>
        </div>
      </footer>
    </section>
  );
}
