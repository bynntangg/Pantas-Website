/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Compass, ShoppingBag, BellRing, Utensils, Sprout, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function MarketValidation() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const validations = [
    {
      id: 1,
      metric: "93%",
      title: "Interested in surplus purchase",
      description: "Direct consumer poll indicates overwhelming appetite to purchase high-grade restaurant surplus dishes at generous discounts, combining organic food values with affordability.",
      type: "Consumer Sentiment",
      accent: "text-brand-primary bg-brand-primary/10 border-brand-primary/20",
      gaugeValue: 93,
      icon: <ShoppingBag className="w-5 h-5 text-brand-primary" />
    },
    {
      id: 2,
      metric: "86%",
      title: "Want real-time notification",
      description: "Appetite for immediate alerts. Users want micro-located push notifications informing them when local bakeries or cafes upload current flash-sale stocks.",
      type: "Notification Appetite",
      accent: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      gaugeValue: 86,
      icon: <BellRing className="w-5 h-5 text-amber-500" />
    },
    {
      id: 3,
      metric: "60%",
      title: "HOREKA experience daily surplus",
      description: "Banquets, hotel buffets, and luxury dining kitchens operate with up to 60% daily baseline component excess due to guest variable turnover fluctuations.",
      type: "Supply side volume",
      accent: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20",
      gaugeValue: 60,
      icon: <Utensils className="w-5 h-5 text-brand-emerald" />
    },
    {
      id: 4,
      metric: "100%",
      title: "Processors need stable supply",
      description: "Organic upcycling facilities, compost sites, and maggot collectives report a 100% operational need for uncompromised, sorted bulk organic waste models.",
      type: "Upcycling Demand",
      accent: "text-blue-400 bg-blue-500/10 border-blue-400/20",
      gaugeValue: 100,
      icon: <Sprout className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section id="validation" className="relative py-24 bg-[#090D16] overflow-hidden border-t border-b border-white/5">
      {/* Background vector spots */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono tracking-widest text-[#EF4444] font-semibold bg-red-400/10 px-3.5 py-1 rounded-full uppercase">
            Market Validation Survey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-snug">
            Indonesia's Expanding Circular Appetite
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            Data verified from regional pilots in Solo Raya. Both supply chains and retail demographics are aligned for immediate digital surplus coordination.
          </p>
        </div>

        {/* Validation statistics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {validations.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={
                  isMobile
                    ? { scale: 1.02 }
                    : { 
                        scale: 1.04, 
                        rotateY: 8, 
                        rotateX: -4,
                        z: 15
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`p-6 rounded-2xl bg-[#0B0F19]/60 border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-white/20 bg-white/[0.04] scale-[1.02] shadow-xl"
                    : "border-white/5 hover:border-white/10"
                }`}
                style={{
                  transformStyle: isMobile ? "flat" : "preserve-3d",
                  transformPerspective: isMobile ? undefined : 1000
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-2.5 rounded-xl border ${card.accent}`}>
                      {card.icon}
                    </div>
                    <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                      {card.type}
                    </span>
                  </div>

                  {/* Circular Radial Gauge */}
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="4.5" fill="none" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke={card.id === 1 ? "#22C55E" : card.id === 2 ? "#F59E0B" : card.id === 3 ? "#10B981" : "#3B82F6"}
                        strokeWidth="4.5"
                        fill="none"
                        strokeDasharray="201"
                        strokeDashoffset={`${201 - (201 * card.gaugeValue) / 100}`}
                        style={{ transition: 'stroke-dashoffset 1s' }}
                      />
                    </svg>
                    <span className="absolute font-mono text-lg font-extrabold text-white">{card.metric}</span>
                  </div>

                  <h4 className="text-sm font-sans font-extrabold text-white text-center mb-3">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed text-center font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-center">
                  <span className="text-[9px] font-mono text-[#475569] uppercase">
                    verified demographic poll
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small organic survey metric card */}
        <div className="mt-12 p-3 rounded-xl bg-white/[0.01] border border-white/5 text-center flex items-center justify-center gap-2 text-xs text-[#94A3B8]">
          <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          <span>Over <strong>87% of hotel directors</strong> agree circular food waste reduction boosts brand reputation index with younger premium guests.</span>
        </div>

      </div>
    </section>
  );
}
