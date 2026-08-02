import Image from "next/image";
import Link from "next/link";
import { bodyFont, headingFont } from "./fonts";
import Works from "./components/Works";
import PortfolioMenu from "./components/MobileMenu";
import PortfolioSections from "./components/PortfolioSections";
import BackToTop from "./components/BackToTop";
import ResumeViewer from "./components/ResumeViewer";

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

const trustSignals = [
  { label: "4+ Years", detail: "Experience" },
  { label: "GMT+1", detail: "West Africa Time" },
  { label: "Open to Remote", detail: "Worldwide" },
];

export default function HomePage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#090909] text-white`}>
      <PortfolioMenu />

      <section
        id="home"
        className="relative isolate overflow-hidden border-b border-white/10 bg-[#090909] px-4 pb-14 pt-20 sm:px-8 sm:pt-24 lg:min-h-dvh lg:px-10 lg:pb-5 lg:pt-32 xl:px-16"
      >
        <div className="relative mx-auto flex w-full max-w-[90rem] flex-col lg:min-h-[calc(100dvh-9.5rem)]">
          <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
            <div className="relative z-10 flex flex-col lg:pb-12">
              <div className="flex items-center gap-4 lg:hidden">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-[#c7a66d]/30 bg-neutral-800">
                  <Image
                    src="/profile.webp"
                    alt="Eseosa Osayi"
                    fill
                    sizes="64px"
                    quality={65}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[1.35rem] font-medium tracking-tight">Eseosa Osayi</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.04em] text-white/55">
                    Full-Stack Engineer · Remote
                  </p>
                </div>
              </div>

              <p className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[#c7a66d] lg:block lg:text-sm">
                Full-Stack Engineer <span className="px-1 text-[#8d724e]">•</span> Remote
              </p>

              <h1
                className={`${headingFont.className} mt-6 max-w-[52rem] text-[clamp(2.25rem,11.5vw,4.6rem)] font-medium leading-[0.91] tracking-[-0.045em] text-[#f4f2ee] lg:mt-5 lg:text-[clamp(3.7rem,5.5vw,5.4rem)]`}
              >
                <span className="whitespace-nowrap">Next.js Developer</span>
                <br />
                focused on
                <br />
                <span className="text-[#a98f69]">AI-powered products.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:mt-5 lg:text-[1.05rem]">
                Building production-grade software with Next.js,
                <br className="hidden sm:block" /> Node.js and AI integrations.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 lg:mt-6">
                {trustSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-black/40 px-2 text-center text-[0.65rem] text-white/75 min-[390px]:px-3 min-[390px]:text-xs sm:min-h-14 sm:px-5 sm:text-sm"
                    title={signal.detail}
                  >
                    <span>{signal.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 space-y-3 sm:grid sm:max-w-[39rem] sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:mt-6">
                <Link
                  href="#projects"
                  prefetch={false}
                  className="group flex min-h-14 w-full items-center rounded-sm bg-[#f4f2ee] px-7 text-sm font-medium text-black transition hover:bg-white active:scale-[0.98] sm:min-h-16"
                >
                  <span className="flex w-full items-center justify-between">
                    <span>View my work</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
                <ResumeViewer />
              </div>
            </div>

            <div className="relative hidden h-[min(66dvh,38rem)] min-h-[30rem] self-center lg:block">
              <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden">
                <Image
                  src="/profile.webp"
                  alt="Eseosa Osayi"
                  fill
                  sizes="(min-width: 1440px) 580px, 42vw"
                  quality={65}
                  fetchPriority="high"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Works />
      <PortfolioSections />
      <BackToTop />
    </main>
  );
}
