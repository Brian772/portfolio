export function ProcessSection() {
  return (
    <section
      className="w-full pt-8 sm:pt-12 pb-6"
      id="process"
      aria-labelledby="process-heading"
    >
      <div data-reveal-group>
        <div
          data-reveal
          className="flex flex-col sm:flex-row sm:items-end mb-8 justify-between gap-3 sm:gap-6"
        >
          <div className="flex flex-col gap-0.5 items-start">
            <span className="text-theme-muted font-medium text-xs uppercase tracking-wider">
              Capabilities
            </span>
            <h2
              id="process-heading"
              className="theme-base font-semibold mt-0.5 text-base text-theme-heading"
            >
              What I do
            </h2>
          </div>
          <p className="theme-base max-w-xs text-sm sm:text-base text-theme-secondary">
            Merging aesthetic intuition with structural logic across three main
            dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
          <article
            data-reveal
            className="group flex flex-col gap-1 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300"
          >
            <header>
              <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
                01. UI/UX
              </span>
            </header>
            <div className="flex flex-col gap-3 mt-6">
              <h3 className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Intuitive Interfaces
              </h3>
              <p className="theme-base text-sm sm:text-base text-theme-secondary mt-1">
                Designing clear, intuitive, and enjoyable digital experiences
                with meticulous attention to spatial rhythm and typography.
              </p>
            </div>

            <footer className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Wireframing • Design Systems • Wire-flows
              </span>
            </footer>
          </article>

          <article
            data-reveal
            className="group flex flex-col gap-1 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300"
          >
            <header>
              <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
                02. Frontend
              </span>
            </header>
            <div className="flex flex-col gap-3 items-stretch h-full mt-6">
              <h3 className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Responsive Code
              </h3>
              <p className="theme-base text-sm sm:text-base text-theme-secondary mt-1">
                Turning visual concepts into responsive, functional, and
                accessible interfaces that behave reliably on any screen.
              </p>
            </div>

            <footer className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Tailwind • Modern JS • Adaptive Layouts
              </span>
            </footer>
          </article>

          <article
            data-reveal
            className="group flex flex-col gap-1 p-4 sm:p-5 rounded-2xl border border-theme-border bg-surface soft-shadow hover:-translate-y-2 transition-transform duration-300 md:col-span-2 xl:col-span-1"
          >
            <header>
              <span className="text-theme-muted font-medium text-sm uppercase tracking-wider rounded-full px-2 py-1 w-max group-hover:text-brand group-hover:font-bold group-hover:bg-theme-border-subtle transition-colors duration-300">
                03. Development
              </span>
            </header>
            <div className="flex flex-col gap-3 mt-6">
              <h3 className="theme-base font-semibold mt-2 text-base text-theme-heading">
                Modern Web Stacks
              </h3>
              <p className="theme-base text-sm sm:text-base text-theme-secondary mt-1">
                Exploring modern web technologies and building real-world
                projects with practical backend logic and modular components.
              </p>
            </div>

            <footer className="flex flex-col mt-6">
              <span className="theme-base mt-2 text-sm text-theme-heading">
                Laravel • Full-stack Basics • Git Workflows
              </span>
            </footer>
          </article>
        </div>
      </div>

      <div
        data-reveal-group
        className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-14 sm:mt-20 lg:mt-24"
      >
        <div
          data-reveal
          className="flex flex-col gap-2 w-full lg:max-w-[32%] shrink-0"
        >
          <span className="theme-base text-base text-brand uppercase tracking-wider">
            Evolution
          </span>
          <span className="theme-base text-sm text-theme-secondary">
            My journey
          </span>
          <p className="theme-base text-sm sm:text-base text-theme-secondary">
            From the initial excitement of writing basic HTML tags to
            constructing comprehensive, user-centered interface components.
          </p>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-4 sm:gap-6 w-full min-w-0"
        >
          <article
            className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-4 sm:p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300"
          >
            <header className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <time className="theme-base text-sm px-0 sm:px-4 py-2 text-theme-secondary" dateTime="2024">
                2024
              </time>
              <h3 className="theme-base text-base text-theme-heading font-semibold">
                Started exploring web development
              </h3>
            </header>
            <p className="theme-base text-sm sm:text-base text-theme-secondary">
              Fundamentals & Discovery
            </p>
          </article>
          <article
            className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-4 sm:p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300"
          >
            <header className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <time className="theme-base text-sm px-0 sm:px-4 py-2 text-theme-secondary" dateTime="2025">
                2025
              </time>
              <h3 className="theme-base text-base text-theme-heading font-semibold">
                Built personal projects & learned Laravel
              </h3>
            </header>
            <p className="theme-base text-sm sm:text-base text-theme-secondary">
              Full-stack Prototypes
            </p>
          </article>
          <article
            className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-4 sm:p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300"
          >
            <header className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <time className="theme-base text-sm px-0 sm:px-4 py-2 text-theme-secondary" dateTime="2026">
                2026
              </time>
              <h3 className="theme-base text-base text-theme-heading font-semibold">
                Focused on UI/UX & interaction design
              </h3>
            </header>
            <p className="theme-base text-sm sm:text-base text-theme-secondary">
              Design System Foundations
            </p>
          </article>
          <article
            className="group flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 rounded-2xl border border-theme-border bg-surface p-4 sm:p-6 soft-shadow hover:-translate-y-1 transition-transform duration-300"
          >
            <header className="flex flex-col lg:items-center gap-2 lg:flex-row lg:gap-6">
              <span className="theme-base w-max text-sm font-bold uppercase px-4 rounded-full bg-theme-border-subtle text-brand py-2" aria-label="Current status">
                Now
              </span>
              <h3 className="theme-base text-base text-theme-heading font-semibold">
                Motion, design systems, and creative dev
              </h3>
            </header>
            <p className="theme-base text-sm sm:text-base text-theme-secondary">
              Active Growth
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
