"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ExploringCard() {
  const explorationTopics = [
    "Interface Design",
    "Motion",
    "Design Systems",
    "Frontend",
  ];

  return (
    <div
      className="md:col-span-4 z-20 flex justify-start md:justify-center"
      data-hero
    >
      <div className="theme-base p-4 sm:p-5 backdrop-blur-md border border-theme-border rounded-3xl soft-shadow w-full max-w-[320px] bg-surface">
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="text-[11px] uppercase tracking-wider text-theme-muted font-semibold">
            Currently Exploring
          </span>
          <Sparkles className="text-brand w-4 h-4" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {explorationTopics.map((item) => (
            <span
              key={item}
              className="theme-base px-2.5 py-1 rounded-full text-xs font-medium cursor-default bg-subtle text-theme-primary hover:bg-brand-tint hover:text-brand transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
