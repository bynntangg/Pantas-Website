/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CrisisSection from "./components/CrisisSection";
import StakeholdersSection from "./components/StakeholdersSection";
import HowItWorks from "./components/HowItWorks";
import AiTechSection from "./components/AiTechSection";
import EsgDashboard from "./components/EsgDashboard";
import CircularFlow from "./components/CircularFlow";
import MarketValidation from "./components/MarketValidation";
import BusinessImpact from "./components/BusinessImpact";
import SdgSection from "./components/SdgSection";
import FutureVision from "./components/FutureVision";
import FooterCTA from "./components/FooterCTA";
import Section3D from "./components/Section3D";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 antialiased selection:bg-brand-primary selection:text-brand-navy">
      {/* Premium Backlight Ambient elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent pointer-events-none" />

      {/* Global Navigation */}
      <Navbar />

      {/* Section Blocks Layout */}
      <main className="relative flex flex-col gap-0">
        {/* Hero Section has its own custom entry animation */}
        <HeroSection />

        <Section3D id="crisis">
          <CrisisSection />
        </Section3D>

        <Section3D id="partners">
          <StakeholdersSection />
        </Section3D>

        <Section3D id="how-it-works">
          <HowItWorks />
        </Section3D>

        <Section3D id="ai-tech">
          <AiTechSection />
        </Section3D>

        <Section3D id="impact">
          <EsgDashboard />
        </Section3D>

        <Section3D id="circularity">
          <CircularFlow />
        </Section3D>

        <Section3D id="validation">
          <MarketValidation />
        </Section3D>

        <Section3D id="business-impact">
          <BusinessImpact />
        </Section3D>

        <Section3D id="sdg">
          <SdgSection />
        </Section3D>

        <Section3D id="roadmap">
          <FutureVision />
        </Section3D>

        <Section3D id="cta">
          <FooterCTA />
        </Section3D>
      </main>
    </div>
  );
}
