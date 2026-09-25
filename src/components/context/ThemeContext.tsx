"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  themeButtonRef: React.RefObject<HTMLButtonElement | null>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeButtonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  const toggleTheme = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const btn = themeButtonRef.current;
    const overlay = overlayRef.current;
    if (!btn || !overlay) {
      setIsDarkMode((prev) => !prev);
      isAnimating.current = false;
      return;
    }

    const next = !isDarkMode;

    // Ripple origin: center of the theme toggle button
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius =
      Math.ceil(
        Math.hypot(
          Math.max(cx, window.innerWidth - cx),
          Math.max(cy, window.innerHeight - cy)
        )
      ) * 2.2;

    // Overlay matches the target theme canvas color
    overlay.style.backgroundColor = next ? "#18191B" : "#FAF7F2";
    overlay.style.clipPath = `circle(0px at ${cx}px ${cy}px)`;
    overlay.style.display = "block";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "none";

    // Phase 1: expand circular ripple to cover viewport
    gsap.to(overlay, {
      clipPath: `circle(${radius}px at ${cx}px ${cy}px)`,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        // Phase 2: synchronous commit of state update
        flushSync(() => {
          setIsDarkMode(next);
          if (next) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        });

        // Phase 3: smooth fade out to reveal the already updated DOM
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            overlay.style.display = "none";
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "none";
            isAnimating.current = false;
          },
        });
      },
    });
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        themeButtonRef,
        overlayRef,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
