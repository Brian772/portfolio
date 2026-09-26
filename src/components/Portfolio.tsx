"use client";

import React, { useRef, useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LenisProvider } from "./hooks/useLenis";
import { ThemeOverlay } from "./common/ThemeOverlay";
import { AmbientBackground } from "./common/AmbientBackground";
import { Navbar } from "./navigation/Navbar";
import { HeroSection } from "./hero/HeroSection";
import { SelectedWorkSection } from "./work/SelectedWorkSection";
import { SocialDivider } from "./footer/SocialDivider";
import { AboutSection } from "./about/AboutSection";
import { ProcessSection } from "./process/ProcessSection";
import { BottomFooter } from "./footer/BottomFooter";
import { TabType } from "./types";
import { CustomScrollbar } from "./common/CustonScroll";
import { usePageAnimations } from "./hooks/usePageAnimations";


function PortfolioContent() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const { isDarkMode } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  usePageAnimations(contentRef);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-brand-tint selection:text-brand bg-canvas text-theme-primary ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* GSAP Ripple Reveal Overlay for Smooth Theme Transitions */}
      <ThemeOverlay />

      {/* Custom Scrollbar */}
      <CustomScrollbar />

      {/* Fixed Top Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="w-full pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 min-h-screen relative overflow-x-hidden">
        {/* Ambient Gradient Glows and Micro-Dot Grid */}
        <AmbientBackground />

        {/* Structured Sections */}
        <div
          ref={contentRef}
          className="relative w-full max-w-[1540px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 z-10 flex flex-col gap-12 sm:gap-16 lg:gap-20"
        >
          <HeroSection />
          <AboutSection />
          <ProcessSection />
          <SelectedWorkSection />
          <SocialDivider />
        </div>
      </main>
    </div>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <PortfolioContent />
      </LenisProvider>
    </ThemeProvider>
  );
}
