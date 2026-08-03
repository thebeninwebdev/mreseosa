"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { bodyFont, headingFont } from "@/app/fonts";

const menuLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact me", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/thebeninwebdev",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/eseosa-osayi",
  },
  {
    label: "Email",
    href: "mailto:osayieseosa836@gmail.com",
  },
];

export default function PortfolioMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  function closeMenu() {
    setIsOpen(false);
  }

  // Handle body scroll lock + Escape key
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      // Always show header when near the top
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Don't hide the header while the full menu is open
      if (isOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scroll down → hide
      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
      }
      // Scroll up → show
      else if (currentScrollY < lastScrollY.current - 4) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Minimal menu trigger */}
      <header
        className={`${bodyFont.className} site-header-enter fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-[#090909]/95 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:left-7 lg:right-7 lg:top-5 lg:rounded-xl lg:border ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative mx-auto flex h-12 w-full max-w-[90rem] items-center justify-center px-4 lg:h-[4.5rem] lg:px-8">
          <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Desktop navigation">
            {menuLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                className="relative flex items-center px-6 text-sm text-white/60 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="portfolio-navigation"
            className="
              font-sans font-medium
              text-[13px] tracking-[0.2em]
              text-[#C8C8C8]
              uppercase
              hover:text-white
              transition-colors duration-300
              w-full h-full
              relative
              lg:hidden
            "
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="portfolio-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-0 z-50 h-dvh overflow-x-hidden bg-[#090909] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          isOpen
            ? "translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
      >
        <div
          className={`${bodyFont.className} mx-auto flex h-full w-full max-w-7xl flex-col px-4 pb-5 pt-16 min-[360px]:px-6 min-[360px]:pb-6 min-[360px]:pt-20 sm:px-12 sm:pb-8 lg:px-20`}
        >
          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="flex flex-1 items-center"
          >
            <ul className="w-full">
              {menuLinks.map((item, index) => (
                <li
                  key={item.label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    prefetch={false}
                    onClick={closeMenu}
                    className="group flex min-w-0 items-center justify-between gap-3 py-4 min-[360px]:py-5 sm:py-6"
                  >
                    <span
                      className={`${headingFont.className} min-w-0 text-[clamp(2.25rem,14vw,3rem)] leading-none tracking-[-0.04em] text-[#f5f5f2] transition-transform duration-300 group-hover:translate-x-3 sm:text-6xl`}
                    >
                      {item.label}
                    </span>

                    <span className="shrink-0 text-xs tabular-nums text-white/50">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu footer */}
          <footer className="border-t border-white/10 pt-6">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.22em] text-white/50">
              Find me online
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {socialLinks.map((social) => {
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="text-sm text-white/65 transition hover:text-[#B7A98A]"
                  >
                    {social.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[0.6rem] uppercase tracking-[0.1em] text-white/50 min-[360px]:mt-7 min-[360px]:text-[0.65rem] min-[360px]:tracking-[0.16em]">
              <span>Eseosa Osayi</span>
              <span>Full-Stack Engineer</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
