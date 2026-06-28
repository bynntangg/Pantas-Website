/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Leaf, Menu, X, ChevronRight, BarChart3, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoSymbol from "../assets/logo_symbol.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Crisis Focus", href: "#crisis" },
    { name: "Ecosystem Hub", href: "#ecosystem" },
    { name: "AI Core Engine", href: "#ai-tech" },
    { name: "ESG Dashboard", href: "#esg-dashboard" },
    { name: "Circular Flow", href: "#circular-flow" },
    { name: "Financial Impact", href: "#business-impact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-emerald/40 group-hover:bg-[#10B981]/5 transition-all duration-300">
              <img 
                src={logoSymbol} 
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300" 
                alt="PANTAS Logo Symbol" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-xl bg-brand-emerald/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-wider text-white">
                PANTAS
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#94A3B8]">
                ZERO WASTE FOOD
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 text-xs text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#business-impact"
              className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-200 font-medium"
            >
              Investor Pitch
            </a>
            <a
              href="#cta"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-brand-primary/30 rounded-full overflow-hidden transition-all duration-300 group"
            >
              <span className="relative z-10">Request Slide Deck</span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-primary group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0F172A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 layout-container">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <a
                  href="#business-impact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-center font-medium text-white/80"
                >
                  Investor Pitch
                </a>
                <a
                  href="#cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 text-center text-sm font-semibold text-brand-navy bg-brand-primary hover:bg-brand-emerald rounded-lg transition-colors"
                >
                  Request Slide Deck
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
