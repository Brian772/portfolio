"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { registerGsapPlugins } from "../motion/registerGsap";

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: "React",
    category: "Library",
    color: "#61DAFB",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Laravel",
    category: "Framework",
    color: "#61DAFB",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 264"
      >
        <path
          d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z"
          fill="#FF2D20"
        />
      </svg>
    ),
  },
  {
    name: "PHP",
    category: "Language",
    color: "#61DAFB",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -1 100 50"
      >
        <path
          fill="#6C78AF"
          d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    color: "#38BDF8",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX & Systems",
    color: "#F24E1E",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
        <path
          d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Language",
    color: "#F7DF1E",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="2500"
        viewBox="0 0 1052 1052"
      >
        <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
        <path
          d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
          fill="#323330"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    color: "#F05032",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 256"
      >
        <path
          d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
          fill="#DE4C36"
        />
      </svg>
    ),
  },
  {
    name: "HTML5 & CSS3",
    category: "Core Web",
    color: "#E34F26",
    icon: (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 452 520"
      >
        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
        <path
          fill="#ecedee"
          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
        />
        <path
          fill="#fff"
          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
      </svg>
    ),
  },
];

export function TechStackMarquee() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    registerGsapPlugins();
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!wrapper || !container || !track) return;

    // Fade transition when the marquee enters/exits the screen + seamless infinite scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 92%",
            end: "bottom 8%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      tweenRef.current = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!tweenRef.current) return;
    gsap.to(tweenRef.current, {
      timeScale: 0.2,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!tweenRef.current) return;
    gsap.to(tweenRef.current, {
      timeScale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // Duplicate items for seamless continuous looping
  const duplicatedList = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      ref={wrapperRef}
      className="relative w-full my-6 sm:my-8 z-20"
      data-hero
    >
      {/* Infinite Scroll Container */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full overflow-hidden py-2"
      >
        {/* Soft edge fade masks matching the canvas background */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--bg-canvas), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--bg-canvas), transparent)",
          }}
        />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-3.5 w-max select-none will-change-transform"
        >
          {duplicatedList.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="theme-base group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-theme-border bg-surface soft-shadow hover:border-brand/50 hover:scale-[1.03] transition-all cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-subtle border border-theme-border-subtle group-hover:bg-brand-tint transition-colors shrink-0">
                {tech.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left pr-1">
                <span className="text-xs sm:text-sm font-bold text-theme-heading group-hover:text-brand transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] text-theme-muted font-medium uppercase tracking-wider whitespace-nowrap">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
