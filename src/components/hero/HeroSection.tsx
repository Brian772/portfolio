"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TechStackMarquee } from "./TechStackMarquee";
import { registerGsapPlugins } from "../motion/registerGsap";
import TechText from "../reactbits/TechText";

const TEXT =
  "I enjoy turning ideas into interfaces that feel simple, intentional, and useful from early concepts and visual systems to functional web experiences.";
const ROLES = ["UI/UX Enthusiast", "Frontend Developer"];
const TYPE_SPEED = 0.04; // seconds per character
const PAUSE_DURATION = 3; // seconds

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const enthusiastRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    registerGsapPlugins();

    // Cleanup reference for role animation (needs to be accessible in cleanup)
    let roleAnimationCtx: gsap.Context | null = null;

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

      // Initialize the looping role animation
      if (enthusiastRef.current) {
        const target = enthusiastRef.current;
        target.textContent = "";
        animateRolesLoop(target);
      }

      const mm = gsap.matchMedia();

      function animateRolesLoop(target: HTMLParagraphElement) {
        roleAnimationCtx = gsap.context(() => {
          // `state.count` tracks how many characters are currently visible.
          // Animating this number drives a real typewriter effect for both
          // typing in AND deleting, letter by letter.
          const state = { count: 0 };
          const timeline = gsap.timeline({ repeat: -1 });

          // Small delay before the first role starts typing
          timeline.to({}, { duration: 0.4 });

          ROLES.forEach((role, index) => {
            const typeDuration = role.length * TYPE_SPEED;

            // Type in — reveal one character at a time
            timeline.to(state, {
              count: role.length,
              duration: typeDuration,
              ease: "none",
              onUpdate: () => {
                target.textContent = role.slice(0, Math.round(state.count));
              },
            });

            // Hold the full role on screen
            timeline.to({}, { duration: PAUSE_DURATION });

            // Type out — remove one character at a time
            timeline.to(state, {
              count: 0,
              duration: typeDuration,
              ease: "none",
              onUpdate: () => {
                target.textContent = role.slice(0, Math.round(state.count));
              },
            });

            // Brief pause before the next role (skip after the last one)
            if (index < ROLES.length - 1) {
              timeline.to({}, { duration: 0.5 });
            }
          });
        }, target);
      }

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const layers: Array<[string, number, number]> = [
            ["[data-parallax='title']", 150, 0.07],
            ["[data-parallax='role']", 200, 0.12],
            ["[data-parallax='copy']", 110, 0.04],
            ["[data-parallax='marquee']", 240, 0],
          ];

          layers.forEach(([selector, y, scaleDelta]) => {
            const el = heroRef.current?.querySelector(selector);
            if (!el) return;

            gsap.to(el, {
              y,
              scale: scaleDelta ? 1 - scaleDelta : 1,
              transformOrigin: "left top",
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        },
      );

      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          const layers: Array<[string, number]> = [
            ["[data-parallax='title']", 70],
            ["[data-parallax='role']", 100],
            ["[data-parallax='marquee']", 110],
          ];

          layers.forEach(([selector, y]) => {
            const el = heroRef.current?.querySelector(selector);
            if (!el) return;

            gsap.to(el, {
              y,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          });
        },
      );
    }, heroRef);

    return () => {
      ctx.revert();
      roleAnimationCtx?.revert();
      gsap.matchMedia().revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[calc(100svh-8rem)] sm:min-h-[calc(100svh-9rem)] lg:min-h-[calc(100svh-10rem)] flex flex-col justify-center text-left py-6 sm:py-8 will-change-transform"
      id="home"
    >
      <div className="relative w-full min-w-0" data-parallax="title">
        {/* Name / Main Heading — accessible heading for SEO & screen readers */}
        <h1 id="hero-heading" className="sr-only">
          Brian Ardhisswara
        </h1>
        {/* Interactive wordmark (React Bits TechText) */}
        <div
          className="select-none relative w-full h-[clamp(4rem,16vw,13rem)] text-theme-heading"
          data-hero
        >
          {/* TechText memberi inset 5% untuk align="left"; geser balik agar
              huruf pertama rata persis dengan role & statement (flush left). */}
          <TechText
            text="Brian Ardhisswara"
            fontWeight={700}
            fontSize={150}
            letterSpacing={-0.03}
            align="left"
            accentColor="#ff5a36"
            reveal="letter"
            dashLength={3}
            dashGap={2}
            specks={24}
            intro="assemble"
            introDuration={1.3}
            strokeWidth={1.5}
            style={{ transform: "translateX(-5%)" }}
          />
        </div>
      </div>

      <div className="relative w-full min-w-0" data-parallax="role">
        {/* Role Subheading */}
        <div className="select-none relative mt-1 sm:mt-0" data-hero>
          <h2
            id="hero-role"
            className="text-[clamp(1rem,3.5vw,3.25rem)] uppercase font-bold tracking-tight text-brand leading-[1.05] sm:leading-[0.94] invisible"
            aria-hidden="true"
          >
            {ROLES[0]}
          </h2>
          <h2
            ref={enthusiastRef}
            className="absolute inset-0 text-[clamp(1rem,3.5vw,3.25rem)] uppercase font-bold tracking-tight text-brand leading-[1.05] sm:leading-[0.94]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Supporting statement */}
      <div className="relative mt-4 sm:mt-6 max-w-2xl" data-parallax="copy">
        <div className="relative" data-hero>
          <p
            id="hero-description"
            aria-hidden="true"
            className="theme-base text-sm sm:text-lg md:text-xl leading-relaxed font-normal text-theme-secondary"
          >
            I enjoy turning ideas into interfaces that feel simple, intentional, and useful from early concepts and visual systems to functional web experiences.
          </p>
        </div>
      </div>

      {/* Mastered Tech Stack - GSAP Infinite Scroll */}
      <div
        data-parallax="marquee"
        aria-label="Technology stack showcase"
        className="w-full mt-16 sm:mt-20 lg:mt-28"
      >
        <TechStackMarquee />
      </div>
    </section>
  );
}
