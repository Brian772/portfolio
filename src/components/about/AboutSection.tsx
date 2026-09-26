export function AboutSection() {
  return (
    <div className="w-full pt-8 sm:pt-12 pb-6" id="about">
      <div data-reveal-group>
        <div data-reveal>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs uppercase tracking-widest text-brand font-semibold">
              About Me
            </span>
          </div>
          <h3 className="theme-base text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-theme-heading">
            Desaigning interface with coriusity, building with purpose.
          </h3>
          <p className="theme-base max-w-3xl text-sm sm:text-base mt-4 md:text-lg text-theme-secondary">
            A student and interface enthusiast rooted in Malang, Indonesia.
            Dedicated to transforming abstract curiosities into warm, intuitive,
            and technically refined web experiences.
          </p>
        </div>
      </div>

      <div
        data-reveal-group
        className="theme-base flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-8 lg:gap-12 mt-8"
      >
        <div
          data-reveal
          className="w-full max-w-sm md:max-w-none md:w-[42%] lg:w-[34%] aspect-9/11 rounded-2xl relative overflow-hidden shrink-0 bg-theme-border-subtle"
        >
          <img
            data-parallax-img
            src="/images/about-me.jpg"
            alt="Brian Ardhisswara"
            className="w-full h-full object-cover will-change-transform scale-110 origin-top"
          />
          <div className="absolute p-3 sm:p-4 rounded-full bottom-3 right-3 sm:bottom-4 sm:right-4 border border-theme-border bg-surface soft-shadow">
            <div className="flex flex-col gap-1">
              <span className="text-theme-muted font-medium text-[11px] uppercase tracking-wider">
                UI/UX & Frontend
              </span>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="flex flex-col w-full md:w-[54%] lg:flex-1 min-w-0 gap-4 sm:gap-6"
        >
          <h3 className="theme-base text-lg sm:text-xl font-bold tracking-tight text-theme-heading">
            Hi, I’m Brian.
          </h3>
          <p className="theme-base text-sm sm:text-base md:text-lg text-left sm:text-justify text-theme-secondary">
            I am a digital product designer and frontend student navigating the
            convergence of thoughtful aesthetics and robust software
            architecture. My core fascination is crafting software that feels
            effortless, humane, and deeply intentional.
          </p>
          <p className="theme-base text-sm sm:text-base md:text-lg text-left sm:text-justify text-theme-secondary">
            Based in Malang, I look at interfaces through both lenses: the
            graphic sensibility of visual rhythm, typography, and negative
            space, coupled with the precision of component design and semantic
            web code.
          </p>

          <div className="theme-base mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
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
    </div>
  );
}
