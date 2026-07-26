import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Works from "./components/Works"
import PortfolioMenu from "./components/MobileMenu";
import PortfolioSections from "./components/PortfolioSections";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const bodyFont = Inter({
  subsets: ["latin"],
})

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12H19M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M8 3H14L18 7V21H6V3H8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3V7H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 15H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.16 1.19A10.9 10.9 0 0 1 12 6.04c.98 0 1.95.13 2.87.39 2.19-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.78 1.07.78 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M5.25 3.5A2.25 2.25 0 1 1 .75 3.5a2.25 2.25 0 0 1 4.5 0ZM1.13 8h3.74v12H1.13V8Zm6.1 0h3.58v1.64h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.74V20h-3.73v-5.82c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08V20H7.23V8Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.55 31.55 0 0 0 0 12a31.55 31.55 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.55 31.55 0 0 0 24 12a31.55 31.55 0 0 0-.5-5.8ZM9.55 15.6V8.4L15.82 12l-6.27 3.6Z" />
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

export default function HomePage() {
  return (
    <main
      className={`${bodyFont.className} min-h-screen bg-[#090909] text-white`}
    >
      <PortfolioMenu />
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-8 pt-20 sm:max-w-lg sm:px-8">
        {/* Identity */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-neutral-800">
            <Image
              src="/profile.webp"
              alt="Eseosa Osayi"
              fill
              priority
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-medium tracking-tight text-white">
              Eseosa Osayi
            </p>

            <p className="mt-1 text-xs text-white/50">
              Full-Stack Engineer • Remote
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-7">
          <h1
            className={`${headingFont.className} max-w-[360px] text-[2.4rem] font-medium leading-[1.1] tracking-[-0.045em] text-[#f5f5f2] sm:text-[5rem]`}
          >
            Next.js Developer
            <br />
            focused on
            <br />
            <span className="text-[#B7A98A]">AI-powered products.</span>
          </h1>

          <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
            Production-grade software's with Next.js, Node.js and AI
            integrations.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {["5+ Years", "GMT+1", "Open to Remote"].map((chip) => (
            <span
              key={chip}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80"
            >
              {chip}
            </span>
          ))}
        </div>
        {/* Calls to action */}
        <div className="mt-7 space-y-4">
          <Link
            href="#projects"
            className="group flex min-h-14 w-full items-center rounded-sm bg-white px-7 text-sm text-black transition hover:bg-neutral-200 active:scale-[0.98]"
          >
            <div className="flex w-full items-center justify-between">
              <span>View my work</span>

              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </div>
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="group flex min-h-14 w-full items-center rounded-sm border border-white/50 px-7 text-sm text-white transition hover:border-white hover:bg-white/5 active:scale-[0.98]"
          >
            <div className="flex w-full items-center justify-between">
              <span>Download Resume</span>

              <span className="transition-transform group-hover:translate-x-1">
                <ResumeIcon />
              </span>
            </div>
          </Link>
        </div>
        {/* Social links 
        <div className="mt-auto pt-12">
          <nav
            aria-label="Social links"
            className="flex items-center justify-between rounded-full border border-white/5 bg-[#242424] px-6 py-5 text-white/90 shadow-2xl"
          >
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              aria-label="GitHub"
              className="transition hover:scale-110 hover:text-white"
            >
              <GithubIcon />
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              aria-label="LinkedIn"
              className="transition hover:scale-110 hover:text-white"
            >
              <LinkedinIcon />
            </Link>

            <Link
              href="https://youtube.com/@yourusername"
              target="_blank"
              aria-label="YouTube"
              className="transition hover:scale-110 hover:text-white"
            >
              <YoutubeIcon />
            </Link>

            <Link
              href="mailto:hello@mreseosa.com"
              aria-label="Send an email"
              className="transition hover:scale-110 hover:text-white"
            >
              <EmailIcon />
            </Link>
          </nav>
        </div>*/}
      </section>
      <Works />
      <PortfolioSections/>
    </main>
  );
}
