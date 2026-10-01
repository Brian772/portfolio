"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";
import { ClubItem } from "../types";

export function StrideDailyProjectCard() {
  return (
    <article
      className="theme-base mt-8 border border-theme-border rounded-3xl sm:rounded-4xl p-4 sm:p-8 lg:p-10 soft-card-shadow hover:border-brand/40 group bg-surface"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Project Overview */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4" role="list" aria-label="Project categories">
              <span
                itemProp="genre"
                className="px-3 py-1 rounded-full bg-brand-tint text-brand font-semibold text-xs uppercase tracking-wider"
              >
                UI/UX
              </span>
              {["Product Design", "Frontend Development"].map((tag) => (
                <span
                  key={tag}
                  itemProp="genre"
                  className="theme-base px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider bg-subtle text-theme-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3
              itemProp="name"
              className="theme-base text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-brand text-theme-heading transition-colors"
            >
              Stride Daily : Habit Tracking & Productivity Platform
            </h3>
            <p
              itemProp="description"
              className="mt-4 text-sm sm:text-base text-theme-secondary leading-relaxed"
            >
              A habit tracking and productivity platform designed to help
              individuals build and maintain positive habits. From initial
              wireframes and interactive prototypes to a production-ready design
              system, this project emphasizes user engagement and seamless
              experience.
            </p>
          </div>

          <dl
            className="grid grid-cols-2 gap-3 pt-2"
            aria-label="Project details"
          >
            {[
              ["Outcome", "Modular Design System"],
              ["Role", "End-to-End Product UI"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="theme-base p-3.5 rounded-2xl border border-theme-border-subtle bg-subtle"
              >
                <dt className="text-[11px] text-theme-muted font-medium uppercase">
                  {k}
                </dt>
                <dd className="theme-base text-xs font-bold mt-0.5 text-theme-heading">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="pt-2 gap-4">
            <a
              href="https://stridedaily.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-base inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-active-pill text-theme-heading hover:bg-brand hover:text-white border border-theme-border transition-colors"
              aria-label="View Website"
            >
              <span>VIew Website</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Mock Browser Preview */}
        <figure className="lg:col-span-7" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <div className="relative w-full aspect-4/3 sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-theme-border-subtle bg-subtle">
            <img
              src="/images/stride-project.png"
              alt="Stride Daily Habit Tracker - mobile and desktop interface showing habit tracking dashboard and progress visualization"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <figcaption className="sr-only">
            Stride Daily project screenshot showing the habit tracking platform interface
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
