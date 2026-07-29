import Image from "next/image";
import Link from "next/link";
import { bodyFont, headingFont } from "@/app/fonts";

type ProjectCategory = "Web Apps" | "Desktop" | "AI";

type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl: string
};

const projects: Project[] = [
  {
    number: "01",
    title: "SBP Hotel",
    description:
      "Luxury hotel website with a premium booking experience, responsive design and elegant user interface.",
    image: "/projects/sbp-hotel.png",
    href: "/projects/sbp-hotel",
    category: "Web Apps",
    liveUrl: "https://sbphotel.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    number: "02",
    title: "Ese Fabrics",
    description:
      "Modern e-commerce platform with secure payments, inventory management and a seamless shopping experience.",
    image: "/projects/ese-fabrics.png",
    href: "/projects/ese-fabrics",
    category: "Web Apps",
    liveUrl: "https://esefabrics.vercel.app",
    technologies: ["Next.js", "Paystack", "Tailwind CSS", "Cloudinary"],
  },
  {
    number: "03",
    title: "Winners Foundation School",
    description:
      "Modern school website focused on admissions, communication and an engaging experience for parents and students.",
    image: "/projects/winners-school.png",
    href: "/projects/winners-foundation-school",
    category: "Web Apps",
    liveUrl: "https://winnersfoundationschools.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
];
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12H19M14 7L19 12L14 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 2C12.6 7.4 16.6 11.4 22 12C16.6 12.6 12.6 16.6 12 22C11.4 16.6 7.4 12.6 2 12C7.4 11.4 11.4 7.4 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ProjectCard({ project }: { project: Project }) {
  const visibleTechnologies = project.technologies.slice(0, 3);

  return (
    <article className="group overflow-hidden rounded-sm border border-white/10 bg-white/[0.015] transition duration-500 hover:-translate-y-1 hover:border-white/20">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        {/* Content */}
        <div className="order-2 flex flex-col px-6 py-7 sm:px-8 sm:py-9 lg:order-1 lg:min-h-[390px] lg:px-10 lg:py-10">
          <div className="flex items-start justify-between">
            <span className="text-sm font-medium tracking-[0.14em] text-[#B7A98A]">
              {project.number}
            </span>

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-[#B7A98A] hover:bg-[#B7A98A]/10 hover:text-[#B7A98A]"
              >
                <ExternalLinkIcon />
              </Link>
            )}
          </div>

          <h3
            className={`${headingFont.className} mt-6 text-[2.4rem] font-medium leading-none tracking-[-0.035em] text-[#f5f5f2] sm:text-5xl`}
          >
            {project.title}
          </h3>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.7rem] text-white/60"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 lg:mt-auto lg:pt-10">
            <Link
              href={project.href}
              prefetch={false}
              className="inline-flex items-center gap-7 border-b border-[#B7A98A]/50 pb-2 text-sm text-white transition hover:border-[#B7A98A] hover:text-[#B7A98A]"
            >
              <span>View case study</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <Link
          href={project.href}
          prefetch={false}
          aria-label={`View ${project.title} case study`}
          className="order-1 block overflow-hidden border-b border-white/10 lg:order-2 lg:border-b-0 lg:border-l"
        >
          <div className="relative aspect-[16/10] h-full min-h-[240px] overflow-hidden bg-neutral-950 sm:min-h-[320px] lg:aspect-auto lg:min-h-[390px]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 4rem), (max-width: 1440px) 55vw, 740px"
              quality={60}
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </Link>
      </div>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }


export default function Works() {

  return (
    <section
      id="projects"
      className={`${bodyFont.className} bg-[#090909] px-4 py-24 text-white sm:px-8 sm:py-32`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="max-w-2xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-[#B7A98A]">
            My work
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            A selection of products I&apos;ve designed and built with a focus on
            performance, usability and real-world impact.
          </p>
        </header>

        <div className="mt-12 space-y-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-7 sm:px-9 sm:py-9">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-1 shrink-0 text-[#B7A98A]">
                <SparkleIcon />
              </span>

              <div>
                <h3
                  className={`${headingFont.className} text-3xl font-medium tracking-[-0.025em] text-[#f5f5f2] sm:text-4xl`}
                >
                  Have a project in mind?
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  Let&apos;s build something impactful together.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="group flex min-h-14 w-full items-center justify-between rounded-sm border border-[#B7A98A]/60 px-6 text-sm text-white transition hover:border-[#B7A98A] hover:bg-[#B7A98A]/5 sm:w-56"
            >
              <span>Contact me</span>

              <span className="text-[#B7A98A] transition-transform group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
