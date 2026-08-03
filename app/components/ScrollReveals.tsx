"use client";

import { useEffect } from "react";

export default function ScrollReveals() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sectionContent = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section:not(#home):not(#projects) > div",
      ),
    );
    const workContent = Array.from(
      document.querySelectorAll<HTMLElement>("#projects [data-work-reveal]"),
    );
    const targets = [...sectionContent, ...workContent];
    const cleanupTimers: number[] = [];

    targets.forEach((target) => target.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const finishReveal = () => {
            target.classList.remove("reveal-pending", "reveal-visible");
          };

          target.classList.add("reveal-visible");
          target.addEventListener("transitionend", finishReveal, { once: true });
          cleanupTimers.push(window.setTimeout(finishReveal, 1350));
          observer.unobserve(target);
        });
      },
      {
        // Begin near the lower quarter so the motion is underway before reading.
        rootMargin: "0px 0px -22% 0px",
        threshold: 0.01,
      },
    );

    // Give the browser a painted starting frame before transitioning to visible.
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        targets.forEach((target) => observer.observe(target));
      });
    });

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      cleanupTimers.forEach(window.clearTimeout);
    };
  }, []);

  return null;
}
