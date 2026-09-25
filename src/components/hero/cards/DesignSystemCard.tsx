"use client";

import React from "react";

export function DesignSystemCard() {
  const swatchColors = [
    "var(--color-brand)",
    "#FAF7F2",
    "#24272C",
    "var(--color-coral)",
  ];

  return (
    <div className="md:col-span-4 z-20" data-hero>
      <div
        className="theme-base p-4 sm:p-5 backdrop-blur-md border border-theme-border rounded-3xl soft-card-shadow max-w-[320px] hover:-translate-y-1"
        style={{
          transition:
            "transform 0.2s ease, background-color 0.45s cubic-bezier(0.4,0,0.2,1), border-color 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="theme-base bg-surface border border-theme-border rounded-2xl p-4">
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-tint text-brand font-semibold text-[11px] uppercase tracking-wider">
              Design System
            </span>
            <span className="text-theme-muted text-[11px] font-medium">
              Tokens &amp; UI
            </span>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-theme-secondary font-medium">
              <span>Tokens</span>
              <span className="text-[11px] text-theme-muted">
                Typography · Spacing · Color
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5">
                {swatchColors.map((c, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full ring-2 ring-white/60 shadow-sm inline-block border border-theme-border-subtle"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="theme-base flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-subtle text-theme-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Tokens Active</span>
              </div>
            </div>
            <div className="theme-base w-full h-1.5 rounded-full overflow-hidden mt-1 bg-subtle">
              <div className="bg-brand h-full w-2/3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
