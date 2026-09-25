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
    <div className="theme-base mt-8 border border-theme-border rounded-3xl sm:rounded-4xl p-6 sm:p-10 soft-card-shadow hover:border-brand/40 group bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
            <h4 className="theme-base text-3xl sm:text-4xl font-bold tracking-tight group-hover:text-brand text-theme-heading transition-colors">
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
          <div className="theme-base border border-theme-border rounded-3xl p-5 sm:p-7 soft-shadow overflow-hidden relative bg-canvas">
            {/* Window Chrome Header */}
            <div className="theme-base flex items-center justify-between pb-4 border-b border-theme-border mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E57373]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FFB74D]/80" />
                <div className="w-3 h-3 rounded-full bg-[#81C784]/80" />
                <span className="text-xs text-theme-muted font-mono ml-2">
                  orbii.club/explore
                </span>
              </div>
              <span className="theme-base px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-theme-border bg-surface text-theme-secondary">
                v2.4 Prototype
              </span>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="theme-base flex items-center justify-between gap-3 p-3 rounded-2xl border border-theme-border bg-surface">
                <div className="flex items-center gap-2 text-xs text-theme-muted flex-1">
                  <Search size={16} className="text-brand" />
                  <span className="truncate">
                    Search clubs: Pottery, analog synths, bouldering...
                  </span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1 rounded-xl bg-brand text-white text-[11px] font-medium hover:bg-brand-hover transition-colors"
                >
                  Filter
                </button>
              </div>

              {/* Club Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {clubCards.map((club) => (
                  <div
                    key={club.name}
                    className="theme-base p-4 rounded-2xl border border-theme-border bg-surface soft-shadow hover:border-brand/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${club.tagBg}`}
                      >
                        {club.tag}
                      </span>
                      <span className="text-[11px] text-theme-muted">
                        {club.members} Members
                      </span>
                    </div>
                    <h5 className="theme-base text-sm font-bold text-theme-heading">
                      {club.name}
                    </h5>
                    <p className="text-xs text-theme-secondary mt-1">
                      {club.desc}
                    </p>
                    <div className="theme-base flex items-center justify-between mt-4 pt-3 border-t border-theme-border-subtle text-xs">
                      <span className="text-[11px] text-brand font-semibold">
                        {club.location}
                      </span>
                      <button
                        type="button"
                        className="theme-base px-2.5 py-1 rounded-full text-[10px] font-medium bg-subtle text-theme-heading hover:bg-brand hover:text-white transition-colors"
                      >
                        Join Club
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notification Pill */}
              <div className="theme-base p-3 rounded-2xl border border-theme-border bg-surface text-theme-secondary flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white text-[10px] font-bold">
                    O
                  </div>
                  <span>
                    New workshop scheduled:{" "}
                    <strong className="text-theme-heading">
                      &ldquo;Intro to Slip Casting&rdquo;
                    </strong>
                  </span>
                </div>
                <span className="text-theme-muted text-[11px]">Today, 18:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
