"use client";

import React from "react";
import { SocialLink } from "../types";

export function SocialDivider() {
  const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/brianardhisswara" },
    { name: "Read.cv", url: "https://read.cv/brianardhisswara" },
    { name: "Dribbble", url: "https://dribbble.com/brianardhisswara" },
    { name: "Twitter", url: "https://twitter.com/brianardhisswara" },
  ];

  return (
    <div
      className="w-full flex flex-col sm:flex-row items-center justify-between pt-2 pb-6 text-xs font-medium gap-3 sm:gap-0"
      id="contact"
      data-reveal-group
      role="contentinfo"
      aria-label="Contact and social links"
    >
      {/* Brand & Year */}
      <div data-reveal className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
        <span className="theme-base text-theme-secondary">
          Brian Ardhisswara · 2025
        </span>
      </div>

      {/* Center Line */}
      <div className="theme-base hidden sm:block h-px flex-1 mx-4 bg-theme-border" aria-hidden="true" />

      {/* External Links */}
      <nav
        data-reveal
        className="theme-base flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-5 font-medium text-theme-secondary"
        aria-label="Social media profiles"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-5 list-none m-0 p-0">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="hover:text-brand flex items-center gap-0.5 transition-colors"
                aria-label={`Visit ${s.name} profile`}
              >
                <span>{s.name}</span>
                <span className="text-[10px]" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
