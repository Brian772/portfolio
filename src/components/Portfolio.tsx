"use client";

import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LenisProvider } from "./hooks/useLenis";
import { ThemeOverlay } from "./common/ThemeOverlay";
import { AmbientBackground } from "./common/AmbientBackground";
import { Navbar } from "./navigation/Navbar";
import { HeroSection } from "./hero/HeroSection";
import { SelectedWorkSection } from "./work/SelectedWorkSection";
import { SocialDivider } from "./footer/SocialDivider";
import { AboutSection } from "./about/AboutSection";
import { BottomFooter } from "./footer/BottomFooter";
import { TabType } from "./types";
import { CustomScrollbar } from "./common/CustonScroll";


function PortfolioContent() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const { isDarkMode } = useTheme();

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
      <main className="w-full pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Ambient Gradient Glows and Micro-Dot Grid */}
        <AmbientBackground />

        {/* Structured Sections */}
        <div className="relative w-full max-w-[1540px] mx-auto px-4 sm:px-8 md:px-12 z-10 flex flex-col gap-14 sm:gap-20">
          <HeroSection />
          <AboutSection />
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
