"use client";

import React from "react";
import { OrbiiProjectCard } from "./OrbiiProjectCard";

export function SelectedWorkSection() {
  return (
    <section className="w-full pt-8 sm:pt-12 pb-6" id="work">
      {/* Section Header */}
      <div className="theme-base flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-8 border-b border-theme-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs uppercase tracking-widest text-brand font-semibold">
              Selected Work
            </span>
          </div>
          <h3 className="theme-base text-2xl sm:text-3xl font-bold tracking-tight text-theme-heading">
            Projects where design meets development.
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-theme-secondary max-w-xs font-normal">
          Crafting modular component architectures and digital experiences with
          clarity.
        </p>
      </div>

      {/* Project Card */}
      <OrbiiProjectCard />
    </section>
  );
}
