"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Micro-dot grid background texture */}
      <div className="absolute inset-0 micro-dot-bg opacity-70" />

      {/* Ambient glowing orbs */}
      <div
        className="theme-base absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-1)" }}
      />
      <div
        className="theme-base absolute top-1/3 -right-20 w-[440px] h-[440px] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-2)" }}
      />
      <div
        className="theme-base absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full blur-2xl"
        style={{ backgroundColor: "var(--ambient-circle-3)" }}
      />
    </div>
  );
}
