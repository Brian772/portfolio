"use client";

import { useEffect, useState } from "react";
import { TabType } from "../types";
import { RectAreaLightUniformsLib } from "three/examples/jsm/Addons.js";

export function useScrollSpy(sectionIds: TabType[]) {
  const [activeId, setActiveId] = useState<TabType>(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let maxId: string | null = null;
        let maxRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        if (maxId) setActiveId(maxId as TabType);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);
  
  return activeId;
}
