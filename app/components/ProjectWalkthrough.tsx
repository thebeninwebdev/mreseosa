export default function ProjectWalkthrough({ steps }: { steps: string[] }) {
  return (
    <div className="flex h-full min-h-[240px] flex-col justify-center bg-[#11110f] p-7 sm:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-[#B7A98A]">
        Workflow summary
      </p>
      <ol className="mt-7 space-y-6">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 text-sm leading-7 text-white/70">
            <span className="text-[#B7A98A]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
