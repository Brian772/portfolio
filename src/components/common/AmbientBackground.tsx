"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { registerGsapPlugins } from "../motion/registerGsap";

export function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const orbs = gsap.utils.toArray<HTMLElement>("[data-orb]");
        orbs.forEach((orb, index) => {
          const distance = 160 + index * 90;
          gsap.to(orb, {
            y: index % 2 === 0 ? distance : -distance * 0.7,
            x: index === 1 ? 80 : -40,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.4,
            },
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div className="absolute inset-0 micro-dot-bg" />

      <div
        data-orb
        className="theme-base absolute -top-24 left-1/4 w-130 h-130 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-1)" }}
      />
      <div
        data-orb
        className="theme-base absolute top-1/3 -right-20 w-110 h-110 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-2)" }}
      />
      <div
        data-orb
        className="theme-base absolute bottom-10 left-10 w-105 h-105 rounded-full blur-2xl"
        style={{ backgroundColor: "var(--ambient-circle-3)" }}
      />
    </div>
  );
}
