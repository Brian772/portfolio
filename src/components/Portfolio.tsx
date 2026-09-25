"use client";

import React, { useState } from "react";
import {
  Sun,
  Moon,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Search,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<"work" | "process" | "about">("work");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#EEF1FF] selection:text-[#4F6BFF] transition-colors duration-300 ${
        isDarkMode ? "bg-[#18191B] text-[#EDEDED]" : "bg-[#FAF7F2] text-[#24272C]"
      }`}
      style={{ fontFamily: "'Varela Round', sans-serif" }}
    >
      {/* Custom Styles for Ambient Glow & Patterns */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

        .soft-shadow {
          box-shadow: 0 10px 30px -5px rgba(36, 39, 44, 0.05),
            0 4px 12px -2px rgba(36, 39, 44, 0.02);
        }
        .soft-card-shadow {
          box-shadow: 0 16px 36px -8px rgba(79, 107, 255, 0.07),
            0 4px 16px -2px rgba(36, 39, 44, 0.03);
        }
        .micro-dot-bg {
          background-image: radial-gradient(
            rgba(79, 107, 255, 0.09) 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Soft Floating Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 py-3.5 px-4 sm:px-8">
        <div
          className={`max-w-[1540px] mx-auto backdrop-blur-md border rounded-full px-5 py-2.5 flex items-center justify-between soft-shadow transition-all duration-300 ${
            isDarkMode
              ? "bg-[#202227]/90 border-white/10 text-white"
              : "bg-white/90 border-[#EBE5DF] text-[#24272C]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-lg sm:text-xl font-bold tracking-tight hover:text-[#4F6BFF] transition-colors flex items-center gap-1.5"
            >
              <span>Brian Ardhisswara</span>
              <span className="w-2 h-2 rounded-full bg-[#4F6BFF] inline-block animate-pulse" />
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1.5 p-1 rounded-full border ${
              isDarkMode
                ? "bg-[#282B32]/70 border-white/10"
                : "bg-[#F6F2EB]/70 border-[#EBE5DF]/70"
            }`}
          >
            <a
              href="#work"
              onClick={() => setActiveTab("work")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "work"
                  ? isDarkMode
                    ? "bg-[#333741] text-white shadow-sm"
                    : "bg-white text-[#24272C] shadow-sm"
                  : isDarkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-[#6C727D] hover:text-[#24272C]"
              }`}
            >
              Work
            </a>
            <a
              href="#process"
              onClick={() => setActiveTab("process")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "process"
                  ? isDarkMode
                    ? "bg-[#333741] text-white shadow-sm"
                    : "bg-white text-[#24272C] shadow-sm"
                  : isDarkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-[#6C727D] hover:text-[#24272C]"
              }`}
            >
              Process
            </a>
            <a
              href="#about"
              onClick={() => setActiveTab("about")}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "about"
                  ? isDarkMode
                    ? "bg-[#333741] text-white shadow-sm"
                    : "bg-white text-[#24272C] shadow-sm"
                  : isDarkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-[#6C727D] hover:text-[#24272C]"
              }`}
            >
              About
            </a>
          </nav>

          {/* Right Quick Badges & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${
                isDarkMode
                  ? "bg-[#282B32] border-white/10 text-zinc-300"
                  : "bg-[#F6F2EB] border-[#EBE5DF] text-[#6C727D]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] animate-pulse" />
              <span>UI/UX &amp; Frontend</span>
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Ambient Mode"
              type="button"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all soft-shadow ${
                isDarkMode
                  ? "bg-[#282B32] border-white/15 text-yellow-400 hover:border-[#4F6BFF]/50"
                  : "bg-white border-[#EBE5DF] text-[#6C727D] hover:text-[#4F6BFF] hover:border-[#4F6BFF]/40"
              }`}
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 sm:px-5 py-2 rounded-full bg-[#4F6BFF] hover:bg-[#415CE0] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Viewport Canvas */}
      <main className="w-full pt-28 sm:pt-32 pb-24 min-h-screen relative overflow-hidden">
        {/* Subtle Ambient Blurred Shapes & Grid */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 micro-dot-bg opacity-70" />
          <div
            className={`absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full blur-3xl transition-opacity duration-500 ${
              isDarkMode ? "bg-[#4F6BFF]/15" : "bg-[#EEF1FF]/60"
            }`}
          />
          <div
            className={`absolute top-1/3 -right-20 w-[440px] h-[440px] rounded-full blur-3xl transition-opacity duration-500 ${
              isDarkMode ? "bg-[#F2785C]/10" : "bg-[#FFEAE2]/50"
            }`}
          />
          <div
            className={`absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full blur-2xl ${
              isDarkMode ? "bg-white/5" : "bg-[#F3EFE9]"
            }`}
          />
        </div>

        <div className="relative w-full max-w-[1540px] mx-auto px-4 sm:px-8 md:px-12 z-10 flex flex-col gap-14 sm:gap-20">
          {/* Top Hero Section */}
          <div className="relative w-full flex flex-col pt-4 sm:pt-6">
            {/* Monumental Typography Layer with Integrated Interactive UI Artifacts */}
            <div className="relative w-full">
              {/* Background Editorial Typography */}
              <div className="select-none">
                <h1
                  className={`text-[52px] sm:text-[84px] md:text-[116px] lg:text-[138px] font-bold tracking-tight leading-[0.92] ${
                    isDarkMode ? "text-white" : "text-[#24272C]"
                  }`}
                >
                  Brian Ardhisswara
                </h1>
              </div>

              {/* Overlapping Middle Row: Floating Micro UI Artifacts */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4 sm:my-6 items-center">
                {/* Fragment A: Design System Micro-card */}
                <div className="md:col-span-4 z-20">
                  <div
                    className={`p-4 sm:p-5 backdrop-blur-md border rounded-3xl soft-card-shadow max-w-[320px] transition-all hover:-translate-y-1 ${
                      isDarkMode
                        ? "bg-[#202227]/95 border-white/10"
                        : "bg-white/95 border-[#EBE5DF]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EEF1FF] text-[#4F6BFF] font-semibold text-[11px] uppercase tracking-wider">
                        Design System
                      </span>
                      <span className="text-[#989EA8] text-[11px] font-medium">
                        Tokens &amp; UI
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-[#6C727D] font-medium">
                        <span>Tokens</span>
                        <span className="text-[11px] text-[#989EA8]">
                          Typography · Spacing · Color
                        </span>
                      </div>

                      {/* Micro Color Swatches & Toggle */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-4 h-4 rounded-full bg-[#4F6BFF] ring-2 ring-white shadow-sm inline-block"
                            title="Primary Blue"
                          />
                          <span
                            className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#EBE5DF] ring-2 ring-white shadow-sm inline-block"
                            title="Cream Base"
                          />
                          <span
                            className="w-4 h-4 rounded-full bg-[#24272C] ring-2 ring-white shadow-sm inline-block"
                            title="Charcoal Surface"
                          />
                          <span
                            className="w-4 h-4 rounded-full bg-[#F2785C] ring-2 ring-white shadow-sm inline-block"
                            title="Warm Accent"
                          />
                        </div>
                        <div
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300"
                              : "bg-[#F3EFE9] text-[#6C727D]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          <span>Tokens Active</span>
                        </div>
                      </div>

                      {/* Tactile micro slider bar */}
                      <div
                        className={`w-full h-1.5 rounded-full overflow-hidden mt-1 ${
                          isDarkMode ? "bg-zinc-800" : "bg-[#F3EFE9]"
                        }`}
                      >
                        <div className="bg-[#4F6BFF] h-full w-2/3 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fragment B: Currently Exploring Pills */}
                <div className="md:col-span-4 z-20 flex justify-start md:justify-center">
                  <div
                    className={`p-4 sm:p-5 backdrop-blur-md border rounded-3xl soft-shadow w-full max-w-[320px] ${
                      isDarkMode
                        ? "bg-[#202227]/95 border-white/10"
                        : "bg-white/95 border-[#EBE5DF]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[11px] uppercase tracking-wider text-[#989EA8] font-semibold">
                        Currently Exploring
                      </span>
                      <Sparkles className="text-[#4F6BFF] w-4 h-4" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Interface Design",
                        "Motion",
                        "Design Systems",
                        "Frontend",
                      ].map((item) => (
                        <span
                          key={item}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors cursor-default ${
                            isDarkMode
                              ? "bg-zinc-800 text-zinc-300 hover:bg-[#4F6BFF] hover:text-white"
                              : "bg-[#F3EFE9] text-[#24272C] hover:bg-[#EEF1FF] hover:text-[#4F6BFF]"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fragment C: Sleek Process Step Badge */}
                <div className="md:col-span-4 z-20 flex justify-start md:justify-end">
                  <div
                    className={`p-4 sm:p-5 backdrop-blur-md border rounded-3xl soft-card-shadow max-w-[320px] w-full ${
                      isDarkMode
                        ? "bg-[#202227]/95 border-white/10"
                        : "bg-white/95 border-[#EBE5DF]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2.5">
                      <span className="text-[11px] uppercase tracking-wider text-[#4F6BFF] font-semibold">
                        My Process
                      </span>
                      <span className="text-[11px] text-[#989EA8]">
                        Linear Flow
                      </span>
                    </div>

                    {/* Horizontal step chain */}
                    <div className="flex items-center justify-between gap-1 text-[11px] font-medium pt-1">
                      <span
                        className={`px-2 py-1 rounded-lg font-semibold ${
                          isDarkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-[#F3EFE9] text-[#24272C]"
                        }`}
                      >
                        01 Discover
                      </span>
                      <span className="text-[#989EA8]">→</span>
                      <span
                        className={`px-2 py-1 rounded-lg font-semibold ${
                          isDarkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-[#F3EFE9] text-[#24272C]"
                        }`}
                      >
                        02 Define
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-1 text-[11px] font-medium pt-1.5">
                      <span
                        className={`px-2 py-1 rounded-lg font-semibold ${
                          isDarkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-[#F3EFE9] text-[#24272C]"
                        }`}
                      >
                        03 Design
                      </span>
                      <span className="text-[#989EA8]">→</span>
                      <span className="px-2 py-1 rounded-lg bg-[#4F6BFF] text-white font-semibold shadow-sm">
                        04 Build
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monumental Second Line Display */}
              <div className="select-none">
                <h2 className="text-[44px] sm:text-[76px] md:text-[104px] lg:text-[124px] font-bold tracking-tight text-[#4F6BFF] leading-[0.94]">
                  DEVELOPER
                </h2>
              </div>
            </div>

            {/* Supporting Statement below Heading */}
            <div className="mt-4 sm:mt-6 max-w-2xl">
              <p
                className={`text-base sm:text-lg md:text-xl leading-relaxed font-normal ${
                  isDarkMode ? "text-zinc-300" : "text-[#6C727D]"
                }`}
              >
                I enjoy turning ideas into interfaces that feel simple,
                intentional, and useful — from early concepts and visual systems
                to functional web experiences.
              </p>
            </div>

            {/* Editorial Manifesto & Tactile CTAs */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-8 sm:pt-10 border-t mt-8 ${
                isDarkMode ? "border-white/10" : "border-[#EBE5DF]/80"
              }`}
            >
              {/* Manifesto */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#4F6BFF] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#EEF1FF]">
                    Manifesto
                  </span>
                  <div
                    className={`h-px flex-1 ${
                      isDarkMode ? "bg-white/10" : "bg-[#EBE5DF]"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? "text-zinc-300" : "text-[#6C727D]"
                  }`}
                >
                  I enjoy exploring the space between design and development —
                  creating interfaces that not only look good, but also make
                  sense to use.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="lg:col-span-4 flex flex-wrap sm:flex-row items-center gap-3">
                <a
                  href="#work"
                  id="primary-cta"
                  className="group inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-[#4F6BFF] hover:bg-[#415CE0] text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm font-semibold tracking-wide"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href="#process"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border transition-all soft-shadow text-sm font-medium hover:-translate-y-0.5 ${
                    isDarkMode
                      ? "bg-[#202227] border-white/15 text-white hover:bg-zinc-800"
                      : "bg-white border-[#EBE5DF] text-[#24272C] hover:bg-[#EDE7DF]"
                  }`}
                >
                  <span>About My Process</span>
                  <ArrowRight size={17} className="text-[#4F6BFF]" />
                </a>
              </div>

              {/* Understated Metadata */}
              <div
                className={`lg:col-span-3 flex sm:flex-row lg:flex-col justify-between lg:items-end gap-3.5 text-xs p-4 rounded-3xl border ${
                  isDarkMode
                    ? "bg-[#202227]/80 border-white/10"
                    : "bg-white/80 border-[#EBE5DF]"
                }`}
              >
                <div className="flex flex-col lg:items-end">
                  <span className="text-[#989EA8] font-medium text-[11px] uppercase tracking-wider">
                    Core Craft
                  </span>
                  <span className="font-semibold mt-0.5 text-xs text-right">
                    UI/UX · Frontend · Product · Interaction
                  </span>
                </div>
                <div className="flex flex-col lg:items-end">
                  <span className="text-[#989EA8] font-medium text-[11px] uppercase tracking-wider">
                    Perspective
                  </span>
                  <span className="font-semibold mt-0.5 text-xs">
                    Curious · Intentional · Experimental
                  </span>
                </div>
                <div className="flex flex-col lg:items-end">
                  <span className="text-[#989EA8] font-medium text-[11px] uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-[#4F6BFF] font-semibold mt-0.5 text-xs">
                    Tokyo &amp; Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Selected Work Intro & First Project Preview (ORBII Case Study) */}
          <section className="w-full pt-8 sm:pt-12 pb-6" id="work">
            {/* Section Header */}
            <div
              className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-8 border-b ${
                isDarkMode ? "border-white/10" : "border-[#EBE5DF]"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#4F6BFF]" />
                  <span className="text-xs uppercase tracking-widest text-[#4F6BFF] font-semibold">
                    Selected Work
                  </span>
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-[#24272C]"
                  }`}
                >
                  Projects where design meets development.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6C727D] max-w-xs font-normal">
                Crafting modular component architectures and digital experiences
                with clarity.
              </p>
            </div>

            {/* Featured Project Card: ORBII */}
            <div
              className={`mt-8 border rounded-3xl sm:rounded-4xl p-6 sm:p-10 soft-card-shadow transition-all hover:border-[#4F6BFF]/40 group ${
                isDarkMode
                  ? "bg-[#202227] border-white/10"
                  : "bg-white border-[#EBE5DF]"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Case Study Info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#EEF1FF] text-[#4F6BFF] font-semibold text-xs uppercase tracking-wider">
                        UI/UX
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider ${
                          isDarkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-[#F3EFE9] text-[#6C727D]"
                        }`}
                      >
                        Product Design
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider ${
                          isDarkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-[#F3EFE9] text-[#6C727D]"
                        }`}
                      >
                        Frontend Development
                      </span>
                    </div>

                    <h4
                      className={`text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-[#4F6BFF] transition-colors ${
                        isDarkMode ? "text-white" : "text-[#24272C]"
                      }`}
                    >
                      ORBII — Hobby Club Platform
                    </h4>

                    <p className="mt-4 text-sm sm:text-base text-[#6C727D] leading-relaxed">
                      A community-centered platform designed to help passionate
                      individuals find, organize, and grow localized hobby
                      collectives. Built from initial wireframes and interactive
                      prototypes to a production-ready design system.
                    </p>
                  </div>

                  {/* Project Highlights / Micro Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div
                      className={`p-3.5 rounded-2xl border ${
                        isDarkMode
                          ? "bg-zinc-800/60 border-white/10"
                          : "bg-[#F3EFE9] border-[#EBE5DF]/70"
                      }`}
                    >
                      <div className="text-[11px] text-[#989EA8] font-medium uppercase">
                        Outcome
                      </div>
                      <div
                        className={`text-xs font-bold mt-0.5 ${
                          isDarkMode ? "text-white" : "text-[#24272C]"
                        }`}
                      >
                        Modular Design System
                      </div>
                    </div>
                    <div
                      className={`p-3.5 rounded-2xl border ${
                        isDarkMode
                          ? "bg-zinc-800/60 border-white/10"
                          : "bg-[#F3EFE9] border-[#EBE5DF]/70"
                      }`}
                    >
                      <div className="text-[11px] text-[#989EA8] font-medium uppercase">
                        Role
                      </div>
                      <div
                        className={`text-xs font-bold mt-0.5 ${
                          isDarkMode ? "text-white" : "text-[#24272C]"
                        }`}
                      >
                        End-to-End Product UI
                      </div>
                    </div>
                  </div>

                  {/* View Case Study Link */}
                  <div className="pt-2">
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#4F6BFF] hover:text-white transition-all ${
                        isDarkMode
                          ? "bg-white text-black"
                          : "bg-[#24272C] text-white"
                      }`}
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right: Tactile UI Preview Card Mockup */}
                <div className="lg:col-span-7">
                  <div
                    className={`border rounded-3xl p-5 sm:p-7 soft-shadow overflow-hidden relative ${
                      isDarkMode
                        ? "bg-[#18191B] border-white/10"
                        : "bg-[#FAF7F2] border-[#EBE5DF]"
                    }`}
                  >
                    {/* Mini App Window Header */}
                    <div
                      className={`flex items-center justify-between pb-4 border-b mb-5 ${
                        isDarkMode ? "border-white/10" : "border-[#EBE5DF]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#E57373]/80" />
                        <div className="w-3 h-3 rounded-full bg-[#FFB74D]/80" />
                        <div className="w-3 h-3 rounded-full bg-[#81C784]/80" />
                        <span className="text-xs text-[#989EA8] font-mono ml-2">
                          orbii.club/explore
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                            isDarkMode
                              ? "bg-zinc-800 border-white/10 text-zinc-300"
                              : "bg-white border-[#EBE5DF] text-[#6C727D]"
                          }`}
                        >
                          v2.4 Prototype
                        </span>
                      </div>
                    </div>

                    {/* Mini Dashboard Grid UI Component */}
                    <div className="space-y-4">
                      {/* Search & Filters */}
                      <div
                        className={`flex items-center justify-between gap-3 p-3 rounded-2xl border ${
                          isDarkMode
                            ? "bg-[#202227] border-white/10"
                            : "bg-white border-[#EBE5DF]"
                        }`}
                      >
                        <div className="flex items-center gap-2 text-xs text-[#989EA8] flex-1">
                          <Search size={16} className="text-[#4F6BFF]" />
                          <span className="truncate">
                            Search clubs: Pottery, analog synths, bouldering...
                          </span>
                        </div>
                        <button
                          type="button"
                          className="px-3 py-1 rounded-xl bg-[#4F6BFF] text-white text-[11px] font-medium cursor-pointer hover:bg-[#415CE0] transition-colors"
                        >
                          Filter
                        </button>
                      </div>

                      {/* Community Discovery Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Sub-card 1 */}
                        <div
                          className={`p-4 rounded-2xl border soft-shadow hover:border-[#4F6BFF]/40 transition-colors ${
                            isDarkMode
                              ? "bg-[#202227] border-white/10"
                              : "bg-white border-[#EBE5DF]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="px-2 py-0.5 rounded-full bg-[#FFEAE2] text-[#F2785C] font-bold text-[10px]">
                              CRAFTS
                            </span>
                            <span className="text-[11px] text-[#989EA8]">
                              42 Members
                            </span>
                          </div>
                          <h5
                            className={`text-sm font-bold ${
                              isDarkMode ? "text-white" : "text-[#24272C]"
                            }`}
                          >
                            Tokyo Ceramic Circle
                          </h5>
                          <p className="text-xs text-[#6C727D] mt-1">
                            Bi-weekly studio glaze sessions &amp; kiln firing
                            meetups.
                          </p>
                          <div
                            className={`flex items-center justify-between mt-4 pt-3 border-t text-xs ${
                              isDarkMode
                                ? "border-white/10"
                                : "border-[#EBE5DF]/60"
                            }`}
                          >
                            <span className="text-[11px] text-[#4F6BFF] font-semibold">
                              Nakameguro
                            </span>
                            <button
                              type="button"
                              className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors hover:bg-[#4F6BFF] hover:text-white ${
                                isDarkMode
                                  ? "bg-zinc-800 text-zinc-200"
                                  : "bg-[#F3EFE9] text-[#24272C]"
                              }`}
                            >
                              Join Club
                            </button>
                          </div>
                        </div>

                        {/* Sub-card 2 */}
                        <div
                          className={`p-4 rounded-2xl border soft-shadow hover:border-[#4F6BFF]/40 transition-colors ${
                            isDarkMode
                              ? "bg-[#202227] border-white/10"
                              : "bg-white border-[#EBE5DF]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="px-2 py-0.5 rounded-full bg-[#EEF1FF] text-[#4F6BFF] font-bold text-[10px]">
                              SOUND
                            </span>
                            <span className="text-[11px] text-[#989EA8]">
                              18 Members
                            </span>
                          </div>
                          <h5
                            className={`text-sm font-bold ${
                              isDarkMode ? "text-white" : "text-[#24272C]"
                            }`}
                          >
                            Modular Synth Lab
                          </h5>
                          <p className="text-xs text-[#6C727D] mt-1">
                            Patch sharing, Eurorack routing, and ambient jam
                            sessions.
                          </p>
                          <div
                            className={`flex items-center justify-between mt-4 pt-3 border-t text-xs ${
                              isDarkMode
                                ? "border-white/10"
                                : "border-[#EBE5DF]/60"
                            }`}
                          >
                            <span className="text-[11px] text-[#4F6BFF] font-semibold">
                              Shibuya
                            </span>
                            <button
                              type="button"
                              className={`px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors hover:bg-[#4F6BFF] hover:text-white ${
                                isDarkMode
                                  ? "bg-zinc-800 text-zinc-200"
                                  : "bg-[#F3EFE9] text-[#24272C]"
                              }`}
                            >
                              Join Club
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Sleek Activity Stream Snippet */}
                      <div
                        className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${
                          isDarkMode
                            ? "bg-[#202227]/90 border-white/10 text-zinc-300"
                            : "bg-white/90 border-[#EBE5DF] text-[#6C727D]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-[#4F6BFF] flex items-center justify-center text-white text-[10px] font-bold">
                            O
                          </div>
                          <span>
                            New workshop scheduled:{" "}
                            <strong
                              className={isDarkMode ? "text-white" : "text-[#24272C]"}
                            >
                              “Intro to Slip Casting”
                            </strong>
                          </span>
                        </div>
                        <span className="text-[#989EA8] text-[11px]">
                          Today, 18:30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Editorial Precision Divider Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-2 pb-6 text-xs text-[#989EA8] font-medium gap-3 sm:gap-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4DDD5]" />
              <span className={isDarkMode ? "text-zinc-400" : "text-[#6C727D]"}>
                Brian Ardhisswara · 2025
              </span>
            </div>
            <div
              className={`hidden sm:block h-px flex-1 mx-4 ${
                isDarkMode ? "bg-white/10" : "bg-[#EBE5DF]"
              }`}
            />
            <div
              className={`flex items-center gap-5 font-medium ${
                isDarkMode ? "text-zinc-300" : "text-[#6C727D]"
              }`}
            >
              <a
                href="#"
                className="hover:text-[#4F6BFF] transition-colors flex items-center gap-0.5"
              >
                <span>GitHub</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="#"
                className="hover:text-[#4F6BFF] transition-colors flex items-center gap-0.5"
              >
                <span>Read.cv</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="#"
                className="hover:text-[#4F6BFF] transition-colors flex items-center gap-0.5"
              >
                <span>Dribbble</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="#"
                className="hover:text-[#4F6BFF] transition-colors flex items-center gap-0.5"
              >
                <span>Twitter</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Soft Fixed Bottom Bar */}
      <footer
        className={`fixed bottom-0 left-0 w-full z-40 backdrop-blur-md border-t transition-colors duration-300 ${
          isDarkMode
            ? "bg-[#202227]/85 border-white/10 text-zinc-300"
            : "bg-white/85 border-[#EBE5DF] text-[#6C727D]"
        }`}
      >
        <div className="h-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-[#989EA8]">
              Design + Code Harmony
            </span>
            <span
              className={`hidden md:inline border-l pl-3 ${
                isDarkMode
                  ? "border-white/15 text-white"
                  : "border-[#EBE5DF] text-[#24272C]"
              }`}
            >
              Tokyo &amp; Remote
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#4F6BFF]">
            <ArrowDown size={15} className="animate-bounce" />
            <span className="font-semibold tracking-wider text-[11px] uppercase">
              Scroll to explore · 01 / 03
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {["UI/UX", "Frontend", "Product Design", "Interaction"].map(
              (label, i) => (
                <React.Fragment key={label}>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      isDarkMode
                        ? "bg-zinc-800 text-zinc-300"
                        : "bg-[#F3EFE9] text-[#6C727D]"
                    }`}
                  >
                    {label}
                  </span>
                  {i < 3 && <span className="text-[#989EA8] text-[10px]">//</span>}
                </React.Fragment>
              )
            )}
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF] ml-1" />
          </div>
        </div>
      </footer>
    </div>
  );
}
