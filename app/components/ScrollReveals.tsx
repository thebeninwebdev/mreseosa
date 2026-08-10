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
    const revealed = new WeakSet<HTMLElement>();
    const runningAnimations = new Set<Animation>();

    targets.forEach((target) => {
      const isWork = target.matches("#projects [data-work-reveal]");
      target.style.opacity = "0";
      target.style.transform = isWork
        ? "translateY(32px) scale(0.99)"
        : "translateY(24px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          if (revealed.has(element)) return;

          revealed.add(element);
          observer.unobserve(element);

          const initialTransform = element.matches(
            "#projects [data-work-reveal]",
          )
            ? "translateY(32px) scale(0.99)"
            : "translateY(24px) scale(1)";

          const animation = element.animate(
            [
              { opacity: 0, transform: initialTransform },
              { opacity: 1, transform: "translateY(0px) scale(1)" },
            ],
            {
              duration: 700,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "forwards",
            },
          );

          runningAnimations.add(animation);
          animation.finished
            .then(() => {
              element.style.removeProperty("opacity");
              element.style.removeProperty("transform");
              animation.cancel();
              runningAnimations.delete(animation);
            })
            .catch(() => {
              runningAnimations.delete(animation);
            });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      runningAnimations.forEach((animation) => animation.cancel());
      targets.forEach((target) => {
        target.style.removeProperty("opacity");
        target.style.removeProperty("transform");
      });
    };
  }, []);

  return null;
}
