"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { TechStackMarquee } from "./TechStackMarquee";
import { MetaItem } from "../types";

gsap.registerPlugin(TextPlugin);

const TEXT = "I enjoy turning ideas into interfaces that feel simple, intentional, and useful from early concepts and visual systems to functional web experiences.";
const ENTHUSIAST_TEXT = "UI/UX Enthusiast";

export function HeroSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const enthusiastRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });

      if (textRef.current) {
        gsap.set(textRef.current, { text: "" });

        gsap.to(textRef.current, {
          duration: TEXT.length * 0.01,
          text: TEXT,
          ease: "none",
          delay: 1.2,
        });
      }
      
      if (enthusiastRef.current) {
        gsap.set(enthusiastRef.current, { text: "" });

        gsap.to(enthusiastRef.current, {
          duration: ENTHUSIAST_TEXT.length * 0.04,
          text: ENTHUSIAST_TEXT,
          ease: "none",
          delay: 0.4,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const metaItems: MetaItem[] = [
    { label: "Core Craft", value: "UI/UX · Frontend · Product · Interaction" },
    { label: "Perspective", value: "Curious · Intentional · Experimental" },
    { label: "Location", value: "Malang, Indonesia", highlight: true },
  ];

  return (
    <div className="relative w-full min-h-dvh flex flex-col pt-4 sm:pt-6" id="home">
      <div className="relative w-full">
        {/* Name / Main Heading */}
        <div className="select-none" data-hero>
          <h1 className="theme-base text-[52px] sm:text-[84px] md:text-[116px] lg:text-[138px] font-bold tracking-tight leading-[0.92] text-theme-heading">
            Brian Ardhisswara
          </h1>
        </div>

        {/* Role Subheading */}
        <div className="select-none relative" data-hero>
          <h2 className="text-[24px] sm:text-[66px] md:text-[74px] lg:text-[94px] uppercase font-bold tracking-tight text-brand leading-[0.94] invisible">
            {ENTHUSIAST_TEXT}
          </h2>
          <h2
            ref={enthusiastRef}
            className="absolute inset-0 text-[24px] sm:text-[66px] md:text-[74px] lg:text-[94px] uppercase font-bold tracking-tight text-brand leading-[0.94]"
          />
        </div>
      </div>

      {/* Supporting statement */}
      <div className="relativemt-4 sm:mt-6 max-w-2xl" data-hero>
        <p
          aria-hidden="true"
          className="theme-base text-base sm:text-lg md:text-xl leading-relaxed font-normal text-theme-secondary invisible"
        >
          {TEXT}
        </p>
        <p
          ref={textRef}
          className="absolute inset-0 theme-base text-base sm:text-lg md:text-xl leading-relaxed font-normal text-theme-secondary"
        />
      </div>

      {/* Mastered Tech Stack - GSAP Infinite Scroll */}
      <TechStackMarquee />

      {/* Manifesto + CTAs + Meta Info */}
      <div
        className="theme-base grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-4 sm:pt-10 border-t border-theme-border mt-6"
        data-hero
      >
        {/* Manifesto */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-brand font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-brand-tint">
              Manifesto
            </span>
            <div className="theme-base h-px flex-1 bg-theme-border" />
          </div>
          <p className="theme-base text-sm sm:text-base leading-relaxed text-theme-secondary">
            I enjoy exploring the space between design and development. Creating
            interfaces that not only look good, but also make sense to use.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="lg:col-span-4 flex flex-wrap sm:flex-row items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm font-semibold tracking-wide transition-all"
          >
            <span>Explore My Work</span>
            <ArrowUpRight
              size={17}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#process"
            className="theme-base inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-theme-border bg-surface text-theme-heading hover:bg-card-hover soft-shadow text-sm font-medium hover:-translate-y-0.5 transition-all"
          >
            <span>About My Process</span>
            <ArrowRight size={17} className="text-brand" />
          </a>
        </div>

        {/* Metadata Sidebar / Card */}
        <div className="theme-base lg:col-span-3 flex sm:flex-row lg:flex-col justify-between lg:items-end gap-3.5 text-xs p-4 rounded-3xl border border-theme-border bg-surface soft-shadow">
          {metaItems.map(({ label, value, highlight }) => (
            <div key={label} className="flex flex-col lg:items-end">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                {label}
              </span>
              <span
                className={`theme-base font-semibold mt-0.5 text-xs ${
                  highlight ? "text-brand" : "text-theme-heading"
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
