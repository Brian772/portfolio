"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";
import { ClubItem } from "../types";

export function OrbiiProjectCard() {
  const clubCards: ClubItem[] = [
    {
      tag: "CRAFTS",
      tagBg: "bg-coral-tint text-coral",
      members: "42",
      name: "Tokyo Ceramic Circle",
      desc: "Bi-weekly studio glaze sessions & kiln firing meetups.",
      location: "Nakameguro",
    },
    {
      tag: "SOUND",
      tagBg: "bg-brand-tint text-brand",
      members: "18",
      name: "Modular Synth Lab",
      desc: "Patch sharing, Eurorack routing, and ambient jam sessions.",
      location: "Shibuya",
    },
  ];

  return (
    <div className="theme-base mt-8 border border-theme-border rounded-3xl sm:rounded-[2rem] p-4 sm:p-8 lg:p-10 soft-card-shadow hover:border-brand/40 group bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Project Overview */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-tint text-brand font-semibold text-xs uppercase tracking-wider">
                UI/UX
              </span>
              {["Product Design", "Frontend Development"].map((tag) => (
                <span
                  key={tag}
                  className="theme-base px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider bg-subtle text-theme-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="theme-base text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-brand text-theme-heading transition-colors">
              ORBII — Hobby Club Platform
            </h4>
            <p className="mt-4 text-sm sm:text-base text-theme-secondary leading-relaxed">
              A community-centered platform designed to help passionate
              individuals find, organize, and grow localized hobby collectives.
              Built from initial wireframes and interactive prototypes to a
              production-ready design system.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              ["Outcome", "Modular Design System"],
              ["Role", "End-to-End Product UI"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="theme-base p-3.5 rounded-2xl border border-theme-border-subtle bg-subtle"
              >
                <div className="text-[11px] text-theme-muted font-medium uppercase">
                  {k}
                </div>
                <div className="theme-base text-xs font-bold mt-0.5 text-theme-heading">
                  {v}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#"
              className="theme-base inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-active-pill text-theme-heading hover:bg-brand hover:text-white border border-theme-border transition-colors"
            >
              <span>View Case Study</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Right Column: Mock Browser Preview */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-theme-border-subtle bg-subtle">
          <img src="/images/orbii-project.png" alt="Orbii Project" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
