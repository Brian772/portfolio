import { MetaItem } from "../types";

export function AboutSection() {
  return (
    <div className="w-full pt-8 sm:pt-12 pb-6" id="about">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">
            About Me
          </span>
        </div>
        <h3 className="theme-base text-2xl sm:text-3xl font-bold tracking-tight text-theme-heading">
          Desaigning interface with coriusity, building with purpose.
        </h3>
        <p className="theme-base max-w-3xl text-base mt-4 sm:text-lg text-theme-secondary">
          A student and interface enthusiast rooted in Malang, Indonesia.
          Dedicated to transforming abstract curiosities into warm, intuitive,
          and technically refined web experiences.
        </p>
      </div>

      <div className="theme-base flex flex-col items-center justify-between md:flex-row mt-8">
        <div className="order-1 max-w-1/3 aspect-9/11 rounded-2xl relative overflow-visible flex-1 bg-theme-border-subtle">
          <img
            src="/images/about-me.jpg"
            alt="Brian Ardhisswara"
            className="w-full h-full object-cover"
          />
          <div className="absolute p-4 rounded-full -bottom-6 -right-6 border border-theme-border bg-surface soft-shadow">
            <div className="flex flex-col gap-1">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                UI/UX & Frontend
              </span>
            </div>
          </div>
        </div>

        <div className="order-2 flex flex-col max-w-1/2 gap-6">
          <h3 className="theme-base text-lg sm:text-xl font-bold tracking-tight text-theme-heading">
            Hi, I’m Brian.
          </h3>
          <p className="theme-base text-base sm:text-lg text-justify text-theme-secondary">
            I am a digital product designer and frontend student navigating the
            convergence of thoughtful aesthetics and robust software
            architecture. My core fascination is crafting software that feels
            effortless, humane, and deeply intentional.
          </p>
          <p className="theme-base text-base sm:text-lg text-justify text-theme-secondary">
            Based in Malang, I look at interfaces through both lenses: the
            graphic sensibility of visual rhythm, typography, and negative
            space, coupled with the precision of component design and semantic
            web code.
          </p>

          <div className="theme-base mt-8 grid grid-cols-3 gap-4 w-full items-center justify-start flex-wrap">
            <div className="flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                Location
              </span>
              <span className="theme-base font-semibold mt-0.5 text-xs text-theme-heading">
                Malang, Indonesia
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                Focus
              </span>
              <span className="theme-base font-semibold mt-0.5 text-xs text-theme-heading">
                UI/UX & Frontend
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                Current Role
              </span>
              <span className="theme-base font-semibold mt-0.5 text-xs text-theme-heading">
                Student
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-base mt-24 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-0.5 items-start justify-items-start">
            <span className="text-theme-muted font-medium text-xs uppercase tracking-wider">
              Cappabilities
            </span>
            <span className="theme-base font-semibold mt-0.5 text-base text-theme-heading">
              What i do
            </span>
          </div>
          <div>
            <p className="theme-base max-w-xs text-sm sm:text-base text-justify text-theme-secondary">
              Merging aesthetic intuition with structural logic across three
              main dimensions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="group flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
              01. UI/UX
            </span>
            <div className="flex flex-col gap-3 mt-6">
              <span className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Intuitive Interfaces
              </span>
              <p className="theme-base text-base text-theme-secondary mt-1">
                Designing clear, intuitive, and enjoyable digital experiences
                with meticulous attention to spatial rhythm and typography.
              </p>
            </div>

            <div className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Wireframing • Design Systems • Wire-flows
              </span>
            </div>
          </div>

          <div className="group flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
              02. Frontend
            </span>
            <div className="flex flex-col gap-3 items-stretch h-full mt-6">
              <span className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Responsive Code
              </span>
              <p className="theme-base text-base text-theme-secondary mt-1">
                Turning visual concepts into responsive, functional, and
                accessible interfaces that behave reliably on any screen.
              </p>
            </div>

            <div className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Tailwind • Modern JS • Adaptive Layouts
              </span>
            </div>
          </div>

          <div className="group flex flex-col gap-1 p-4 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300">
            <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
              03. Development
            </span>
            <div className="flex flex-col gap-3 mt-6">
              <span className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Modern Web Stacks
              </span>
              <p className="theme-base text-base text-theme-secondary mt-1">
                Exploring modern web technologies and building real-world
                projects with practical backend logic and modular components.
              </p>
            </div>

            <div className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Laravel • Full-stack Basics • Git Workflows
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-42">
        <div className="flex flex-col gap-2 w-full lg:max-w-1/3">
          <span className="theme-base text-base text-brand uppercase tracking-wider">
            Evolution
          </span>
          <span className="theme-base text-sm text-theme-secondary">
            My journey
          </span>
          <p className="theme-base text-base text-theme-secondary">
            From the initial excitement of writing basic HTML tags to
            constructing comprehensive, user-centered interface components.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <span className="theme-base text-sm px-4 py-2 text-theme-secondary">
                2024
              </span>
              <span className="theme-base text-base text-theme-heading font-semibold">
                Started exploring web development
              </span>
            </div>
            <p className="theme-base text-base text-theme-secondary">
              Fundamentals & Discovery
            </p>
          </div>
          <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <span className="theme-base text-sm px-4 py-2 text-theme-secondary">
                2025
              </span>
              <span className="theme-base text-base text-theme-heading font-semibold">
                Built personal projects & learned Laravel
              </span>
            </div>
            <p className="theme-base text-base text-theme-secondary">
              Full-stack Prototypes
            </p>
          </div>
          <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <span className="theme-base text-sm px-4 py-2 text-theme-secondary">
                2026
              </span>
              <span className="theme-base text-base text-theme-heading font-semibold">
                Focused on UI/UX & interaction design
              </span>
            </div>
            <p className="theme-base text-base text-theme-secondary">
              Design System Foundations
            </p>
          </div>
          <div className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <span className="theme-base w-max text-sm font-bold uppercase px-4 rounded-full bg-theme-border-subtle text-brand py-2">
                Now
              </span>
              <span className="theme-base text-base text-theme-heading font-semibold">
                Motion, design systems, and creative dev
              </span>
            </div>
            <p className="theme-base text-base text-theme-secondary">
              Active Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
