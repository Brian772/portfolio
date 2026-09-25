"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";

export function ThemeOverlay() {
  const { overlayRef } = useTheme();
  return <div id="theme-overlay" ref={overlayRef} />;
}
