"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("experience");

    if (!trigger) return;

    const handleScroll = () => {
      const rect = trigger.getBoundingClientRect();

      // Show once the top of the experience section
      // has reached the top of the viewport.
      setVisible(rect.top <= 0);
    };

    handleScroll(); // Initial check

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-6 z-50
        flex h-12 w-12 items-center justify-center
        border border-white/10
        bg-[#090909]
        text-white/60
        transition-all duration-500
        hover:border-[#B7A98A]
        hover:text-[#B7A98A]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ArrowUpIcon />
    </button>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 18V6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 11L12 6L17 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
