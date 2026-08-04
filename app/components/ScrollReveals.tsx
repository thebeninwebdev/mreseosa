"use client";

import { useEffect } from "react";
import { animate, inView } from "motion";

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
    const revealed = new WeakSet<HTMLElement>();

    targets.forEach((target) => {
      const isWork = target.matches("#projects [data-work-reveal]");
      target.style.opacity = "0";
      target.style.transform = isWork
        ? "translateY(32px) scale(0.99)"
        : "translateY(24px)";
    });

    const stopObserving = inView(
      targets,
      (target) => {
        const element = target as HTMLElement;
        if (revealed.has(element)) return;
        revealed.add(element);

        const controls = animate(
          element,
          { opacity: 1, transform: "translateY(0px) scale(1)" },
          { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        );

        controls.then(() => {
          element.style.removeProperty("opacity");
          element.style.removeProperty("transform");
        });
      },
      { amount: 0.15, margin: "0px 0px -8% 0px" },
    );

    return () => {
      stopObserving();
      targets.forEach((target) => {
        target.style.removeProperty("opacity");
        target.style.removeProperty("transform");
      });
    };
  }, []);

  return null;
}
