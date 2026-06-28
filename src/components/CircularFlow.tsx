/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowRightLeft, Hotel, Leaf, RefreshCw, ShoppingCart, ShieldAlert, Cpu, Sprout, Landmark } from "lucide-react";
import { motion } from "motion/react";
import maggotFarm from "../assets/images/maggot_farm_1781896719611.jpg";

export default function CircularFlow() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const flowNodes = [
    {
      id: "horeka",
      title: "HOREKA Partners",
      subtitle: "Surplus Generators",
      description: "Hotels, upscale restaurants, and luxury bakeries generate excess meals daily that would traditionally be discarded, forming the intake root.",
      benefit: "Saves raw ingredients budgets & cuts municipal waste bills.",
      icon: <Hotel className="w-5 h-5 text-brand-primary" />
    },
    {
      id: "pantas",
      title: "PANTAS Hub",
      subtitle: "AI Redistribution Router",
      description: "Our proprietary platform scans coordinates and quality to direct foods either to Flash Consumer Sale, charity donation, or agricultural upcycling plants.",
      benefit: "Coordinates distribution routes inside Solo Raya in 12 seconds.",
      icon: <Cpu className="w-5 h-5 text-brand-emerald" />
    },
    {
      id: "consumers",
      title: "Consumers / waste",
      subtitle: "Triage Outputs",
      description: "High-grade food is routed to consumers at 70% discount or given to NGOs, while inedible scraps are immediately isolated for organic conversion.",
      benefit: "Affordable nutrition access for hundreds of families.",
      icon: <ShoppingCart className="w-5 h-5 text-amber-500" />
    },
    {
      id: "maggot",
      title: "BSF Maggot Farms",
      subtitle: "Invertebrate Triage",
      description: "Wet food waste feeds millions of Black Soldier Fly (BSF) larvae, which process organic tissues into proteins with extreme speed.",
      benefit: "Mitigates methane and breeds protein-dense livestock feed.",
      icon: <RefreshCw className="w-5 h-5 text-brand-primary" />
    },
    {
      id: "compost",
      title: "Organic Compost",
      subtitle: "Nutrient Recovery",
      description: "Bio-processed frass and carbon leftovers are structured into rich fertilizers, avoiding synthetic chemical runoffs.",
      benefit: "Returns healthy minerals back to Indonesian land deposits.",
      icon: <Sprout className="w-5 h-5 text-brand-emerald" />
    },
    {
      id: "agriculture",
      title: "Local Agriculture",
      subtitle: "Food Supply Loop",
      description: "Farms utilize organic compost and feed to grow vegetables, fruits, poultry, and fish at lower costs, closing the loop completely.",
      benefit: "Produces top-grade local crops representing 100% circular raw input.",
      icon: <Landmark className="w-5 h-5 text-amber-500" />
    }
  ];

  return (
    <section id="circular-flow" className="relative py-24 bg-[#070A11] overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono tracking-widest text-[#22C55E] bg-brand-primary/10 px-3.5 py-1 rounded-full uppercase">
            Biological CLOSED loop
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            The Complete Circular Ecosystem Flow
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base leading-relaxed">
            PANTAS closes physical nutrient loops. Inedible materials aren't wasted; they are converted into compost and proteins, which nourish new food crops inside Solo Raya.
          </p>
        </div>

        {/* Large Infographic: Connected path of the biological loop */}
        <div className="relative mb-16 bg-[#0B0F19]/60 p-6 sm:p-10 border border-white/5 rounded-3xl backdrop-blur-xl">
          
          {/* Loop Diagram Mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            
            {flowNodes.map((node, i) => {
              const isHovered = hoveredNode === node.id;
              return (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                    isHovered
                      ? "bg-white/[0.04] border-brand-primary shadow-lg scale-[1.02] glow-green"
                      : "bg-[#090D16] border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Step indicators */}
                  <span className="absolute top-4 right-4 text-xs font-mono text-[#475569]">
                    STAGE 0{i + 1}
                  </span>

                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl relative">
                      {node.icon}
                      {isHovered && (
                        <span className="absolute inset-0 rounded-xl bg-brand-primary/20 animate-ping" />
                      )}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-[#64748B] tracking-wider">
                        {node.subtitle}
                      </span>
                      <h4 className="block text-base font-bold text-white mt-0.5">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mt-4 mb-4">
                    {node.description}
                  </p>

                  <div className={`mt-4 pt-4 border-t border-white/5 text-[11px] transition-colors ${
                    isHovered ? "text-brand-primary" : "text-[#64748B]"
                  }`}>
                    <strong>Value output:</strong> {node.benefit}
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Graphical connecting arrows under the grids */}
          <div className="mt-8 text-center text-xs text-[#475569] font-mono uppercase flex justify-center items-center gap-3 flex-wrap">
            <span>HOREKA</span>
            <span>&rarr;</span>
            <span>PANTAS AI HUB</span>
            <span>&rarr;</span>
            <span>Flash Resale</span>
            <span>&rarr;</span>
            <span>Charity</span>
            <span>&rarr;</span>
            <span>Maggots</span>
            <span>&rarr;</span>
            <span>Compost</span>
            <span>&rarr;</span>
            <span>Bio-Farms</span>
          </div>

        </div>

        {/* Real Biological Recycling Facility Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center bg-[#090D16] p-6 sm:p-8 rounded-3xl border border-white/5">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-[#070A11] shadow-xl group">
            <img
              src={maggotFarm}
              alt="Central Java Black Soldier Fly composting and organic protein facility"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent flex flex-col justify-end p-4">
              <span className="text-[10px] font-mono text-brand-emerald bg-brand-emerald/15 px-2.5 py-1 rounded-full border border-brand-emerald/10 w-fit uppercase font-bold">
                BSF BIOCONVERSION LAB • SOLO RAYA
              </span>
            </div>
          </div>
          <div className="space-y-4 text-left">
            <span className="text-xs font-mono text-brand-emerald tracking-widest uppercase">Organic Protein Processing</span>
            <h3 className="text-xl font-display font-extrabold text-white">High-Speed Larval Digestion Infrastructure</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
              Maggots process wet scraps 12x faster than traditional compost systems, preventing methane pocket heat clusters and generating dense organic fertilizer and raw protein meals in fully circular cycles.
            </p>
            <ul className="text-xs font-mono text-[#cbd5e1] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                <span>Conversion index: 1 Ton Scraps &rarr; 140kg Feed Meal</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                <span>Water resource usage: 92% less than soy base feeds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                <span>Methane prevention: Fully certified by Regional Climate labs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing summary stats */}
        <div className="p-4 bg-brand-emerald/10 border border-brand-emerald/15 rounded-2xl text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <ArrowRightLeft className="w-5 h-5 text-brand-emerald" />
            <span className="text-sm font-medium text-white/95">
              Every loop reduces local organic residue decay by up to <strong>98%</strong>.
            </span>
          </div>
          <span className="text-xs text-brand-emerald font-mono bg-brand-emerald/10 px-3 py-1.5 rounded-lg border border-brand-emerald/20 font-semibold uppercase">
            verified biorecovery cycle
          </span>
        </div>

      </div>
    </section>
  );
}
