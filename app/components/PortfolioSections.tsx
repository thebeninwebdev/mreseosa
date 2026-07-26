import Link from "next/link";
import { bodyFont, headingFont } from "@/app/fonts";

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
};

type TechnologyGroup = {
  title: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    period: "2023 — Present",
    role: "Founder & Product Engineer",
    company: "SwiftDU",
    description:
      "Leading the development of a campus logistics platform that connects students with taskers for errands and deliveries.",
    achievements: [
      "Built the platform with Next.js, TypeScript, Node.js and MongoDB.",
      "Implemented real-time task updates with Socket.IO.",
      "Integrated payments, notifications and role-based dashboards.",
    ],
  },
  {
    period: "2021 — Present",
    role: "Independent Full-Stack Engineer",
    company: "Freelance & Contract",
    description:
      "Designing and developing production-ready digital products for businesses, organisations and independent founders.",
    achievements: [
      "Built e-commerce platforms, dashboards and business applications.",
      "Integrated payments, authentication, cloud storage and external APIs.",
      "Worked directly with clients from planning through production deployment.",
    ],
  },
];

const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO"],
  },
  {
    title: "Product & AI",
    technologies: [
      "AI Integrations",
      "OpenAI API",
      "Authentication",
      "Payment Systems",
      "Real-time Systems",
    ],
  },
  {
    title: "Infrastructure",
    technologies: [
      "Vercel",
      "Cloudinary",
      "GitHub Actions",
      "Render",
      "Cloudflare",
    ],
  },
];

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.16 1.19A10.9 10.9 0 0 1 12 6.04c.98 0 1.95.13 2.87.39 2.19-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.78 1.07.78 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5.25 3.5A2.25 2.25 0 1 1 .75 3.5a2.25 2.25 0 0 1 4.5 0ZM1.13 8h3.74v12H1.13V8Zm6.1 0h3.58v1.64h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.74V20h-3.73v-5.82c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08V20H7.23V8Z" />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B7A98A]">
        {eyebrow}
      </p>

      <h2
        className={`${headingFont.className} mt-4 text-[3rem] font-medium leading-[0.95] tracking-[-0.045em] text-[#f5f5f2] sm:text-6xl lg:text-7xl`}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </header>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className={`${bodyFont.className} border-t border-white/10 bg-[#090909] px-4 py-24 text-white sm:px-8 sm:py-32`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader eyebrow="About me" title="Engineering with purpose." />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          <div>
            <p
              className={`${headingFont.className} max-w-3xl text-[2rem] font-medium leading-[1.15] tracking-[-0.035em] text-[#f5f5f2] sm:text-4xl lg:text-5xl`}
            >
              I build products and integrate AI where it creates{" "}
              <span className="text-[#B7A98A]">real value</span>—not where it
              simply follows trends.
            </p>

            <div className="mt-10 max-w-2xl space-y-6 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              <p>
                I&apos;m a Full-Stack Engineer with over five years of
                professional experience building production-ready software.
              </p>

              <p>
                I specialise in Next.js, React, Node.js and modern backend
                systems. My work includes e-commerce platforms, real-time
                logistics products, desktop applications and AI integrations.
              </p>

              <p>
                I care about creating software that is dependable, easy to use
                and capable of solving meaningful business problems.
              </p>
            </div>
          </div>

          <aside className="h-fit border-t border-white/10 lg:border-l lg:border-t-0 lg:pl-10">
            <p className="pt-8 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white/35 lg:pt-0">
              Current focus
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {[
                "Product engineering",
                "Next.js applications",
                "AI integrations",
                "Scalable web systems",
              ].map((focus, index) => (
                <div
                  key={focus}
                  className="flex items-center justify-between py-5"
                >
                  <span className="text-sm text-white/70">{focus}</span>

                  <span className="text-xs text-[#B7A98A]">0{index + 1}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-sm border border-white/10 bg-white/[0.025] p-5">
                <p
                  className={`${headingFont.className} text-3xl text-[#f5f5f2]`}
                >
                  5+
                </p>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  Years of professional experience
                </p>
              </div>

              <div className="rounded-sm border border-white/10 bg-white/[0.025] p-5">
                <p
                  className={`${headingFont.className} text-3xl text-[#f5f5f2]`}
                >
                  GMT+1
                </p>

                <p className="mt-2 text-xs leading-5 text-white/45">
                  Available for international teams
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`${bodyFont.className} border-t border-white/10 bg-[#090909] px-4 py-24 text-white sm:px-8 sm:py-32`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="How I got here."
          description="A selection of the roles and projects that have shaped how I design, build and deliver software."
        />

        <div className="mt-14">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="grid gap-6 border-t border-white/10 py-10 first:border-t-white/20 sm:py-12 lg:grid-cols-[0.35fr_0.65fr]"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#B7A98A]">
                  {experience.period}
                </p>

                <p className="mt-3 text-xs text-white/30">0{index + 1}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h3
                    className={`${headingFont.className} text-[2rem] font-medium leading-none tracking-[-0.03em] text-[#f5f5f2] sm:text-4xl`}
                  >
                    {experience.role}
                  </h3>

                  <p className="mt-3 text-sm text-white/45">
                    {experience.company}
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                    {experience.description}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-4 text-sm leading-6 text-white/50"
                      >
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[#B7A98A]" />

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="group inline-flex items-center gap-5 text-sm text-white/65 transition hover:text-[#B7A98A]"
          >
            <span>View complete resume</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className={`${bodyFont.className} border-t border-white/10 bg-[#090909] px-4 py-24 text-white sm:px-8 sm:py-32`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Technologies"
          title="Tools I work with."
          description="A focused technology stack for building reliable products across web, backend, AI and infrastructure."
        />

        <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map((group, index) => (
            <article
              key={group.title}
              className="min-h-72 border-b border-r border-white/10 p-6 transition duration-300 hover:bg-white/[0.025] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#B7A98A]">
                  {group.title}
                </p>

                <span className="text-xs text-white/20">0{index + 1}</span>
              </div>

              <ul className="mt-10 space-y-4">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="h-px w-3 bg-white/20" />
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`${bodyFont.className} border-t border-white/10 bg-[#090909] px-4 pb-10 pt-24 text-white sm:px-8 sm:pt-32`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-sm border border-white/10 bg-white/[0.02] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B7A98A]">
            Contact me
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2
                className={`${headingFont.className} max-w-4xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.05em] text-[#f5f5f2] sm:text-7xl lg:text-[6rem]`}
              >
                Let&apos;s build something{" "}
                <span className="text-[#B7A98A]">meaningful.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                I&apos;m available for full-time remote opportunities, contracts
                and selected freelance projects.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full-time remote",
                  "Contract work",
                  "Freelance",
                  "GMT+1",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-14 items-center rounded-sm border border-white/10 bg-white/[0.025] px-4 text-xs text-white/55"
                  >
                    <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B7A98A]" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="mailto:hello@mreseosa.com"
                className="group mt-6 flex min-h-16 w-full items-center justify-between rounded-sm bg-[#f5f5f2] px-6 text-sm font-medium text-black transition hover:bg-white active:scale-[0.99]"
              >
                <span>Send me an email</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <EmailIcon />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-3">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-20 items-center justify-between border-b border-r border-white/10 px-6 text-sm text-white/55 transition hover:bg-white/[0.025] hover:text-white"
            >
              <span className="flex items-center gap-3">
                <GithubIcon />
                GitHub
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-20 items-center justify-between border-b border-r border-white/10 px-6 text-sm text-white/55 transition hover:bg-white/[0.025] hover:text-white"
            >
              <span className="flex items-center gap-3">
                <LinkedinIcon />
                LinkedIn
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>

            <Link
              href="mailto:hello@mreseosa.com"
              className="group flex min-h-20 items-center justify-between border-b border-r border-white/10 px-6 text-sm text-white/55 transition hover:bg-white/[0.025] hover:text-white"
            >
              <span className="flex items-center gap-3">
                <EmailIcon />
                Email
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>

        <footer className="flex flex-col gap-5 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eseosa Osayi</p>

          <div className="flex items-center gap-6">
            <Link href="#home" className="transition hover:text-white/65">
              Back to top
            </Link>

            <p>Built with Next.js</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default function PortfolioSections() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ContactSection />
    </>
  );
}
