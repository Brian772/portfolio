"use client";

import React from "react";
import { SocialLink } from "../types";

export function SocialDivider() {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Read.cv", url: "https://read.cv" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-2 pb-6 text-xs font-medium gap-3 sm:gap-0">
      {/* Brand & Year */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
        <span className="theme-base text-theme-secondary">
          Brian Ardhisswara · 2025
        </span>
      </div>

      {/* Center Line */}
      <div className="theme-base hidden sm:block h-px flex-1 mx-4 bg-theme-border" />

      {/* External Links */}
      <div className="theme-base flex items-center gap-5 font-medium text-theme-secondary">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand flex items-center gap-0.5 transition-colors"
          >
            <span>{s.name}</span>
            <span className="text-[10px]">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
