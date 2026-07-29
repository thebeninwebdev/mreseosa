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

export default function ResumeViewer() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="group flex min-h-14 w-full items-center rounded-sm border border-white/50 px-7 text-sm text-white transition hover:border-white hover:bg-white/5 active:scale-[0.98] sm:min-h-16"
    >
      <span className="flex w-full items-center justify-between">
        <span>View Resume</span>
        <span className="transition-transform group-hover:translate-x-1">
          <ResumeIcon />
        </span>
      </span>
    </a>
  );
}
