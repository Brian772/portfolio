"use client";

import React from "react";
import { OrbiiProjectCard } from "./OrbiiProjectCard";
import { StrideDailyProjectCard } from "./StrideDailyProjectCard";

export function SelectedWorkSection() {
  return (
    <section
      className="w-full pt-8 sm:pt-12 pb-6"
      id="work"
      data-reveal-group
      aria-labelledby="work-heading"
    >
      {/* Section Header */}
      <header
        data-reveal
        className="theme-base flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 sm:pb-8 border-b border-theme-border"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-brand font-semibold">
              Selected Work
            </span>
          </div>
          <h2
            id="work-heading"
            className="theme-base text-2xl sm:text-3xl font-bold tracking-tight text-theme-heading"
          >
            Projects where design meets development.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-theme-secondary max-w-xs font-normal">
          Crafting modular component architectures and digital experiences with
          clarity.
        </p>
      </header>

      {/* Project Card */}
      <div data-reveal>
        <OrbiiProjectCard />
        <StrideDailyProjectCard />
      </div>
    </section>
  );
}
