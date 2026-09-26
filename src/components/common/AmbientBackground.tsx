"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Micro-dot grid background texture */}
      <div className="absolute inset-0 micro-dot-bg" />

      {/* Ambient glowing orbs */}
      <div
        className="theme-base absolute -top-24 left-1/4 w-130 h-130 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-1)" }}
      />
      <div
        className="theme-base absolute top-1/3 -right-20 w-110 h-110 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--ambient-circle-2)" }}
      />
      <div
        className="theme-base absolute bottom-10 left-10 w-105 h-105 rounded-full blur-2xl"
        style={{ backgroundColor: "var(--ambient-circle-3)" }}
      />
    </div>
  );
}
