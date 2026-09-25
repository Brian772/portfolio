"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

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
      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 100 50">
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
      <svg className="w-5 h-5 rounded" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="14" fill="#F7DF1E" />
        <path
          d="M60.6 74.4c1.8 3 4.2 5.2 8.4 5.2 4.2 0 6.8-2 6.8-7.8V35h11.2v36.8c0 11.8-6.8 17.2-17.6 17.2-9.4 0-14.8-4.8-17.8-11.4l9-3.2zm-28.8-.4c2.4 4 5.8 7 11.4 7 5.6 0 9-3 9-7.2 0-5-4.2-7-11.4-10.2-10.4-4.6-15-9.8-15-19.6 0-10.4 8.2-17.8 20.8-17.8 8.6 0 14.8 3.4 18.6 10.6l-9 5.8c-2-3.4-4.4-4.8-9.4-4.8-4.4 0-7.2 2.6-7.2 6 0 4.2 3 6 9.4 8.8 11.4 5 17 9.8 17 21 0 12.2-9.6 18.8-22.4 18.8-11.6 0-19.2-5.4-23.2-13.6l10.4-5.6z"
          fill="#000"
        />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    color: "#F05032",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.5-.5-1.4-.5-1.9 0L8.9 4.7l2.8 2.8c.6-.2 1.3 0 1.8.4.5.5.7 1.2.5 1.8l2.7 2.7c.6-.2 1.3 0 1.8.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.7-1.3-.4-1.9l-2.6-2.6c-.3.1-.7.1-1 0-.3-.1-.7-.3-.9-.6-.6-.6-.7-1.4-.4-2.1L7.9 5.7 2.4 11.2c-.5.5-.5 1.4 0 1.9l8.5 8.5c.5.5 1.4.5 1.9 0l8.8-8.8c.5-.5.5-1.3 0-1.9z" />
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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Seamless continuous infinite scroll with GSAP
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  // Duplicate items for seamless continuous looping
  const duplicatedList = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full my-6 sm:my-8 z-20" data-hero>
      {/* Label and Badge */}
      <div className="flex items-center justify-start mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">
            Tech Stack &amp; Tools
          </span>
        </div>
      </div>

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
              className="theme-base group flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-theme-border bg-surface soft-shadow hover:border-brand/50 hover:scale-[1.03] transition-all cursor-pointer"
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
