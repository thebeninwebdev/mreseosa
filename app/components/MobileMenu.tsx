"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const bodyFont = Inter({
  subsets: ["latin"],
});

const menuLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@yourusername",
  },
  {
    label: "Email",
    href: "mailto:hello@mreseosa.com",
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
        className={`${bodyFont.className} fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-white/[0.03] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative mx-auto flex h-12 w-full max-w-7xl items-center justify-center">
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
        className={`fixed inset-0 z-50 h-dvh bg-[#090909] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`${bodyFont.className} mx-auto flex h-full w-full max-w-7xl flex-col px-8 pb-8 pt-20 sm:px-12 lg:px-20`}
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
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-5 sm:py-6"
                  >
                    <span
                      className={`${headingFont.className} text-[3rem] leading-none tracking-[-0.04em] text-[#f5f5f2] transition-transform duration-300 group-hover:translate-x-3 sm:text-6xl`}
                    >
                      {item.label}
                    </span>

                    <span className="text-xs tabular-nums text-white/35">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu footer */}
          <footer className="border-t border-white/10 pt-6">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
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

            <div className="mt-7 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.16em] text-white/25">
              <span>Eseosa Osayi</span>
              <span>Full-Stack Engineer</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
