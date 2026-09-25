"use client";

import React from "react";

export function ProcessCard() {
  return (
    <div
      className="md:col-span-4 z-20 flex justify-start md:justify-end"
      data-hero
    >
      <div className="theme-base p-4 sm:p-5 backdrop-blur-md border border-theme-border rounded-3xl soft-card-shadow max-w-[320px] w-full bg-surface">
        <div className="flex items-center justify-between text-xs mb-2.5">
          <span className="text-[11px] uppercase tracking-wider text-brand font-semibold">
            My Process
          </span>
          <span className="text-[11px] text-theme-muted">Linear Flow</span>
        </div>
        <div className="flex items-center justify-between gap-1 text-[11px] font-medium pt-1">
          <span className="theme-base px-2 py-1 rounded-lg font-semibold bg-subtle text-theme-heading">
            01 Discover
          </span>
          <span className="text-theme-muted">→</span>
          <span className="theme-base px-2 py-1 rounded-lg font-semibold bg-subtle text-theme-heading">
            02 Define
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 text-[11px] font-medium pt-1.5">
          <span className="theme-base px-2 py-1 rounded-lg font-semibold bg-subtle text-theme-heading">
            03 Design
          </span>
          <span className="text-theme-muted">→</span>
          <span className="px-2 py-1 rounded-lg bg-brand text-white font-semibold shadow-sm">
            04 Build
          </span>
        </div>
      </div>
    </div>
  );
}
