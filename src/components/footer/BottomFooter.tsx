"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export function BottomFooter() {
  const skillTags = ["UI/UX", "Frontend", "Product Design", "Interaction"];

  return (
    <footer className="theme-base fixed bottom-0 left-0 w-full z-40 backdrop-blur-md border-t border-theme-border bg-nav text-theme-secondary">
      <div className="h-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 flex items-center justify-between text-xs font-medium">
        {/* Left: Design Harmony & Location */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-theme-muted">
            Design + Code Harmony
          </span>
          <span className="theme-base hidden md:inline border-l border-theme-border pl-3 text-theme-heading">
            Tokyo &amp; Remote
          </span>
        </div>

        {/* Center: Scroll prompt */}
        <div className="flex items-center gap-1.5 text-brand">
          <ArrowDown size={15} className="animate-bounce" />
          <span className="font-semibold tracking-wider text-[11px] uppercase">
            Scroll to explore · 01 / 03
          </span>
        </div>

        {/* Right: Skill list */}
        <div className="hidden sm:flex items-center gap-1.5">
          {skillTags.map((label, i) => (
            <React.Fragment key={label}>
              <span className="theme-base px-2 py-0.5 rounded-full text-[10px] font-medium bg-subtle text-theme-secondary">
                {label}
              </span>
              {i < skillTags.length - 1 && (
                <span className="text-theme-muted text-[10px]">//</span>
              )}
            </React.Fragment>
          ))}
          <span className="w-1.5 h-1.5 rounded-full bg-brand ml-1" />
        </div>
      </div>
    </footer>
  );
}
