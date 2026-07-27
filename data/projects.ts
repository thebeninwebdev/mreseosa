export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  duration: string;
  website?: string;
  repository?: string;
  coverImage: string;
  technologies: string[];
  challenge: string;
  solution: string;
  contributions: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "sbp-hotel",
    number: "01",
    title: "SBP Hotel",
    category: "Luxury hotel website",
    summary:
      "A premium hotel website with an elegant booking experience, responsive design and modern user experience.",
    description:
      "Designed and developed the official website for SBP Hotel, creating a luxury digital experience that showcases the hotel's rooms, amenities and reservation process while maintaining strong performance across devices.",
    role: "Full-Stack Web Developer",
    year: "2025",
    duration: "Ongoing",
    website: "https://sbphotel.com",
    coverImage: "/projects/sbp-hotel.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Vercel",
    ],
    challenge:
      "The hotel required a premium online presence that reflected its brand while providing visitors with an intuitive reservation experience across desktop and mobile devices.",
    solution:
      "I developed a fully responsive website featuring a modern booking interface, elegant UI, optimized performance and scalable architecture using Next.js.",
    contributions: [
      "Designed and developed the complete website.",
      "Built responsive layouts for desktop and mobile.",
      "Implemented booking and reservation workflows.",
      "Optimized SEO and performance.",
      "Managed deployment and ongoing maintenance.",
    ],
    results: [
      "Delivered a premium digital presence for the hotel.",
      "Improved customer experience across all devices.",
      "Created a scalable platform for future expansion.",
    ],
  },
  {
    slug: "ese-fabrics",
    number: "02",
    title: "Ese Fabrics",
    category: "E-commerce platform",
    summary:
      "A modern e-commerce platform for browsing, purchasing and managing premium fashion products.",
    description:
      "Built a complete online shopping platform with secure payments, inventory management, product variations and an administrative dashboard.",
    role: "Full-Stack Web Developer",
    year: "2025",
    duration: "8 weeks",
    website: "https://esefabrics.vercel.app",
    coverImage: "/projects/ese-fabrics.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Paystack",
      "Cloudinary",
    ],
    challenge:
      "The business needed a scalable online store capable of managing products, inventory, customer orders and secure online payments.",
    solution:
      "I developed a modern storefront alongside a powerful admin dashboard supporting product management, secure checkout and cloud-based media management.",
    contributions: [
      "Developed the customer storefront.",
      "Built the administrative dashboard.",
      "Integrated Paystack payments.",
      "Implemented product variations and inventory management.",
      "Integrated Cloudinary for media uploads.",
    ],
    results: [
      "Delivered a production-ready e-commerce platform.",
      "Simplified inventory and order management.",
      "Created a fast and responsive shopping experience.",
    ],
  },
  {
    slug: "winners-foundation-school",
    number: "03",
    title: "Winners Foundation School",
    category: "School website",
    summary:
      "A modern school website designed to improve communication, admissions and the institution's online presence.",
    description:
      "Designed and developed the official website for Winners Foundation School, providing prospective parents and students with an engaging experience while making school information easily accessible.",
    role: "Part-Time Web Developer",
    year: "2022",
    duration: "Ongoing",
    website: "https://winnersfoundationschools.com",
    coverImage: "/projects/winners-foundation-school.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    challenge:
      "The school required a modern website that reflected its brand while making admissions, school information and communication more accessible.",
    solution:
      "I built a responsive website with modern UI, improved navigation and a scalable content structure to support future growth.",
    contributions: [
      "Designed and developed the complete website.",
      "Built responsive layouts across all screen sizes.",
      "Created admissions and school information pages.",
      "Optimized performance and SEO.",
      "Provide ongoing maintenance and feature updates.",
    ],
    results: [
      "Established a professional online presence.",
      "Improved accessibility for parents and prospective students.",
      "Created a maintainable platform for future enhancements.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
