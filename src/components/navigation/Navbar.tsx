"use client";

import React, { useLayoutEffect, useRef, useEffect, useMemo } from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";
import { useLenis } from "../hooks/useLenis";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { TabType } from "../types";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const { isDarkMode, toggleTheme, themeButtonRef } = useTheme();
  const lenis = useLenis();

  const navItems: TabType[] = useMemo(
    () => ["home", "about", "work", "process", "contact"],
    [],
  );

  const navRefs = useRef<Partial<Record<TabType, HTMLAnchorElement>>>({});
  const indicatorRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  // Deteksi section aktif otomatis saat scroll
  const spyActiveTab = useScrollSpy(navItems);

  useEffect(() => {
    // Jangan biarkan scroll-spy menimpa tab saat user baru saja klik navbar
    if (!isClickScrolling.current) {
      setActiveTab(spyActiveTab);
    }
  }, [spyActiveTab, setActiveTab]);

  // Animasikan posisi pill setiap activeTab berubah
  useLayoutEffect(() => {
    const activeEl = navRefs.current[activeTab];
    if (activeEl && indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        x: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  }, [activeTab]);

  function handleNavClick(e: React.MouseEvent, tab: TabType) {
    e.preventDefault();
    setActiveTab(tab);

    isClickScrolling.current = true;
    const target = document.getElementById(tab);

    if (target && lenis) {
      lenis.scrollTo(target, {
        offset: -90, // sesuaikan dengan tinggi navbar fixed
        onComplete: () => {
          isClickScrolling.current = false;
        },
      });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => (isClickScrolling.current = false), 1000);
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3.5 px-4 sm:px-8">
      <div className="theme-base max-w-[1540px] mx-auto backdrop-blur-md border border-theme-border rounded-full px-5 py-2.5 flex items-center justify-between soft-shadow bg-nav text-theme-heading">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight hover:text-brand transition-colors flex items-center gap-1.5"
          >
            <span>Brian Ardhisswara</span>
          </a>
        </div>

        {/* Center Nav Tabs */}
        <nav className="theme-base relative hidden md:flex items-center gap-1.5 p-1 rounded-full border border-theme-border-subtle bg-nav-inner">
          {/* Sliding pill indicator */}
          <div
            ref={indicatorRef}
            className="absolute top-1 left-0 h-[calc(100%-8px)] rounded-full bg-active-pill shadow-sm"
            style={{ willChange: "transform, width" }}
          />

          {navItems.map((tab) => (
            <a
              key={tab}
              ref={(el) => {
                if (el) navRefs.current[tab] = el;
              }}
              href={`#${tab}`}
              aria-current={activeTab === tab ? "page" : undefined}
              onClick={(e) => handleNavClick(e, tab)}
              className={`relative z-10 theme-base px-5 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-theme-heading"
                  : "text-theme-secondary hover:text-theme-heading"
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
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

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
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
