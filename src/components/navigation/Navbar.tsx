"use client";

import React from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { TabType } from "../types";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const { isDarkMode, toggleTheme, themeButtonRef } = useTheme();

  const navItems: TabType[] = ["work", "process", "about"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3.5 px-4 sm:px-8">
      <div className="theme-base max-w-[1540px] mx-auto backdrop-blur-md border border-theme-border rounded-full px-5 py-2.5 flex items-center justify-between soft-shadow bg-nav text-theme-heading">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight hover:text-brand transition-colors flex items-center gap-1.5"
          >
            <span>Brian Ardhisswara</span>
          </a>
        </div>

        {/* Center Nav Tabs */}
        <nav className="theme-base hidden md:flex items-center gap-1.5 p-1 rounded-full border border-theme-border-subtle bg-nav-inner">
          {navItems.map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`theme-base px-5 py-1.5 rounded-full text-sm font-medium capitalize ${
                activeTab === tab
                  ? "bg-active-pill text-theme-heading shadow-sm"
                  : "text-theme-secondary hover:text-theme-heading"
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        {/* Right Nav Options */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Theme Toggle Button */}
          <button
            ref={themeButtonRef}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            type="button"
            className="theme-base w-9 h-9 rounded-full flex items-center justify-center border border-theme-border bg-surface text-theme-secondary hover:text-brand hover:border-brand/40 overflow-hidden soft-shadow active:scale-90 cursor-pointer"
            style={{
              transition:
                "background-color 0.45s cubic-bezier(0.4,0,0.2,1), border-color 0.45s cubic-bezier(0.4,0,0.2,1), color 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.12s ease",
            }}
          >
            {isDarkMode ? (
              <Moon size={18} className="text-yellow-400" />
            ) : (
              <Sun size={18} />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 sm:px-5 py-2 rounded-full bg-brand hover:bg-brand-hover text-white font-medium text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
