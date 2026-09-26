"use client";

import React, { useLayoutEffect, useRef, useEffect, useMemo, useState } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: TabType[] = useMemo(
    () => ["home", "about", "process", "work", "contact"],
    [],
  );

  const navRefs = useRef<Partial<Record<TabType, HTMLAnchorElement>>>({});
  const indicatorRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const spyActiveTab = useScrollSpy(navItems);

  useEffect(() => {
    if (!isClickScrolling.current) {
      setActiveTab(spyActiveTab);
    }
  }, [spyActiveTab, setActiveTab]);

  useLayoutEffect(() => {
    const moveIndicator = () => {
      const activeEl = navRefs.current[activeTab];
      if (activeEl && indicatorRef.current) {
        gsap.to(indicatorRef.current, {
          x: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          duration: 0.45,
          ease: "power3.out",
        });
      }
    };

    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [activeTab]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  function handleNavClick(e: React.MouseEvent, tab: TabType) {
    e.preventDefault();
    setActiveTab(tab);
    setIsMenuOpen(false);

    isClickScrolling.current = true;
    const target = document.getElementById(tab);

    if (target && lenis) {
      lenis.scrollTo(target, {
        offset: -90,
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
    <header className="fixed top-0 left-0 w-full z-50 py-3 px-3 sm:py-3.5 sm:px-6 lg:px-8">
      <div className="theme-base max-w-[1540px] mx-auto backdrop-blur-md border border-theme-border rounded-3xl lg:rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 soft-shadow bg-nav text-theme-heading">
        <div className="flex items-center min-w-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-base sm:text-lg lg:text-xl font-bold tracking-tight hover:text-brand transition-colors truncate"
          >
            <span className="sm:hidden">Brian</span>
            <span className="hidden sm:inline">Brian Ardhisswara</span>
          </a>
        </div>

        <nav className="theme-base relative hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-theme-border-subtle bg-nav-inner">
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
              className={`relative z-10 theme-base px-4 xl:px-5 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-theme-heading"
                  : "text-theme-secondary hover:text-theme-heading"
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
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
            className="hidden sm:inline-flex items-center gap-1 px-4 lg:px-5 py-2 rounded-full bg-brand hover:bg-brand-hover text-white font-medium text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="theme-base lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-theme-border bg-surface text-theme-heading hover:text-brand hover:border-brand/40 soft-shadow active:scale-90 cursor-pointer"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="theme-base lg:hidden max-w-[1540px] mx-auto mt-2 rounded-3xl border border-theme-border bg-nav backdrop-blur-md soft-shadow p-3">
          <nav className="flex flex-col gap-1">
            {navItems.map((tab) => (
              <a
                key={tab}
                href={`#${tab}`}
                aria-current={activeTab === tab ? "page" : undefined}
                onClick={(e) => handleNavClick(e, tab)}
                className={`theme-base px-4 py-3 rounded-2xl text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "bg-active-pill text-theme-heading"
                    : "text-theme-secondary hover:text-theme-heading hover:bg-subtle"
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="sm:hidden mt-2 inline-flex w-full items-center justify-center gap-1 px-4 py-3 rounded-2xl bg-brand hover:bg-brand-hover text-white font-medium text-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
