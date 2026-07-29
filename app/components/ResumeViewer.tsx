"use client";

import { useEffect, useState } from "react";

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
        d="M9 11H15M9 15H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group flex min-h-14 w-full items-center rounded-sm border border-white/50 px-7 text-sm text-white transition hover:border-white hover:bg-white/5 active:scale-[0.98] sm:min-h-16"
        aria-haspopup="dialog"
      >
        <span className="flex w-full items-center justify-between">
          <span>View Resume</span>
          <span className="transition-transform group-hover:translate-x-1">
            <ResumeIcon />
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            className="flex h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-sm border border-white/15 bg-[#111]"
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div>
                <h2 id="resume-title" className="text-sm font-medium text-white">
                  Eseosa Osayi — Resume
                </h2>
                <p className="mt-0.5 hidden text-xs text-white/45 sm:block">
                  Preview the resume, then download a copy if you need one.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden rounded-sm border border-white/20 px-3 py-2 text-xs text-white/75 transition hover:border-white/50 hover:text-white sm:inline-flex"
                >
                  Open full screen
                </a>
                <a
                  href="/resume.pdf"
                  download="Eseosa-Osayi-Resume.pdf"
                  className="rounded-sm bg-white px-3 py-2 text-xs font-medium text-black transition hover:bg-neutral-200"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
                  aria-label="Close resume preview"
                  autoFocus
                >
                  <CloseIcon />
                </button>
              </div>
            </header>

            <iframe
              src="/resume.pdf#view=FitH"
              title="Eseosa Osayi resume preview"
              className="min-h-0 flex-1 bg-white"
            />

            <div className="border-t border-white/10 p-3 text-center sm:hidden">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/65 underline underline-offset-4"
              >
                Open the resume full screen
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
