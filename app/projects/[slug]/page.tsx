import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { headingFont, bodyFont } from "@/app/fonts";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Eseosa Osayi`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Eseosa Osayi`,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M19 12H5M10 7L5 12L10 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main
      className={`${bodyFont.className} min-h-screen bg-[#090909] text-white`}
    >
      <header className="border-b border-white/10">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              <ArrowLeftIcon />
            </span>

            <span>Back to projects</span>
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Case study
          </span>
        </div>
      </header>

      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B7A98A]">
            {project.number} — {project.category}
          </p>

          <h1
            className={`${headingFont.className} mt-5 max-w-5xl text-[4rem] font-medium leading-[0.9] tracking-[-0.05em] text-[#f5f5f2] sm:text-7xl lg:text-[7rem]`}
          >
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-xl sm:leading-9">
            {project.summary}
          </p>

          <div className="mt-12 grid gap-8 border-y border-white/10 py-7 sm:grid-cols-2 lg:grid-cols-4">
            <ProjectDetail label="Role" value={project.role} />
            <ProjectDetail label="Year" value={project.year} />
            <ProjectDetail label="Duration" value={project.duration} />
            <ProjectDetail label="Type" value={project.category} />
          </div>

          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-neutral-950 sm:mt-16">
            <Image
              src={project.coverImage}
              alt={`${project.title} product preview`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CaseStudySection number="01" label="Overview" title="The product">
        <p>{project.description}</p>
      </CaseStudySection>

      <CaseStudySection number="02" label="Challenge" title="The problem">
        <p>{project.challenge}</p>
      </CaseStudySection>

      <CaseStudySection number="03" label="Solution" title="The approach">
        <p>{project.solution}</p>
      </CaseStudySection>

      <CaseStudySection number="04" label="Contribution" title="What I built">
        <ul className="space-y-5">
          {project.contributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-4">
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#B7A98A]" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection number="05" label="Technology" title="Tools used">
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/65"
            >
              {technology}
            </span>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection number="06" label="Outcome" title="The result">
        <ul className="space-y-5">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-4">
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#B7A98A]" />
              <span>{result}</span>
            </li>
          ))}
        </ul>

        {project.website && (
          <Link
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex min-h-14 items-center gap-8 rounded-sm border border-white/30 px-6 text-sm text-white transition hover:border-white"
          >
            <span>Visit live product</span>

            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </Link>
        )}
      </CaseStudySection>

      <section className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#B7A98A]">
            Next project
          </p>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-6 flex items-end justify-between gap-8"
          >
            <h2
              className={`${headingFont.className} text-[3rem] leading-none tracking-[-0.04em] text-[#f5f5f2] transition group-hover:text-[#B7A98A] sm:text-6xl`}
            >
              {nextProject.title}
            </h2>

            <span className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-white/70">{value}</p>
    </div>
  );
}

function CaseStudySection({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#B7A98A]">
            {number} — {label}
          </p>

          <h2
            className={`${headingFont.className} mt-4 text-[2.75rem] leading-none tracking-[-0.04em] text-[#f5f5f2] sm:text-5xl`}
          >
            {title}
          </h2>
        </div>

        <div className="max-w-2xl text-sm leading-8 text-white/60 sm:text-base sm:leading-9">
          {children}
        </div>
      </div>
    </section>
  );
}
