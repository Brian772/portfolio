"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsapPlugins } from "../motion/registerGsap";

export function usePageAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    registerGsapPlugins();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal], [data-reveal-group]", { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
          const targets = items.length ? items : [group];

          gsap.fromTo(
            targets,
            { y: 48, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.95,
              stagger: items.length ? 0.1 : 0,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                gsap.set(targets, { clearProps: "transform" });
              },
              scrollTrigger: {
                trigger: group,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax-img]").forEach((img) => {
          gsap.to(img, {
            yPercent: -14,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement ?? img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        });
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timeout = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timeout);
      ctx.revert();
    };
  }, [rootRef]);
}
