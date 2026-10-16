"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function OrbiiProjectCard() {
  return (
    <article
      className="theme-base mt-8 border border-theme-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 soft-card-shadow hover:border-brand/40 group bg-surface"
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
              ORBII : Hobby Club Platform
            </h3>
            <p
              itemProp="description"
              className="mt-4 text-sm sm:text-base text-theme-secondary leading-relaxed"
            >
              A community-centered platform designed to help passionate
              individuals find, organize, and grow localized hobby collectives.
              Built from initial wireframes and interactive prototypes to a
              production-ready design system.
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
                className="theme-base p-3.5 rounded-xl border border-theme-border-subtle bg-subtle"
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

          <div className="pt-2 gap-4 flex flex-wrap">
            <a
              href="https://orbii.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-base inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-active-pill text-theme-heading hover:bg-brand hover:text-white border border-theme-border transition-colors"
              aria-label="View Website"
            >
              <span>View Website</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Brian772/Club-Hobi"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-base inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-active-pill text-theme-heading hover:bg-brand hover:text-white border border-theme-border transition-colors"
              aria-label="View Repository"
            >
              <span>View Repository</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Mock Browser Preview */}
        <figure className="lg:col-span-7" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-theme-border-subtle bg-subtle">
            <Image
              src="/images/orbii-project.png"
              alt="ORBII Hobby Club Platform - dashboard interface showing club discovery and management features"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="sr-only">
            ORBII project screenshot showing the hobby club platform interface
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
