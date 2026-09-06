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
  slug: "make-a-child-smile-initiative",
  number: "02",
  title: "Make A Child Smile Initiative",
  category: "Nonprofit website",
  summary:
    "A donation-focused nonprofit website helping provide school uniforms to children while supporting local tailors in their communities.",
  description:
    "Designed and developed the digital platform for Make A Child Smile Initiative (MACSI), transforming its mission into an engaging online experience that communicates impact, builds donor trust and guides supporters toward funding school uniforms for children in need.",
  role: "Web Designer & Developer",
  year: "2026",
  duration: "Ongoing",
  website: "https://macsi.vercel.app",
  coverImage: "/projects/macsi.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  challenge:
    "MACSI needed more than a basic charity website. The platform had to communicate an emotional mission with credibility, explain exactly how donations create impact and make it easy for supporters to take action without introducing a complex payment system.",
  solution:
    "I designed and developed a story-driven, responsive website that combines strong visual storytelling, impact statistics, campaign information, local-tailor stories and clear donation calls to action. I also created a streamlined WhatsApp donation journey that lets supporters choose how many uniforms they want to fund and continue directly with the MACSI team.",
  contributions: [
    "Designed and developed the complete website experience.",
    "Created a visual design system around dignity, education and community impact.",
    "Built an interactive donation journey with predefined uniform funding amounts.",
    "Integrated WhatsApp-based donation calls to action across key sections of the website.",
    "Developed animated impact counters, carousels, testimonials and scroll-based interactions.",
    "Built responsive and accessible layouts across desktop and mobile devices.",
    "Structured the website around MACSI's mission, impact, campaigns, transparency and donation process.",
    "Optimized the site for performance, accessibility and search visibility.",
  ],
  results: [
    "Established a professional digital presence for the initiative.",
    "Created a clear donation journey around the ₦4,500 cost of providing one school uniform.",
    "Made MACSI's impact of 100+ children supported and 12+ schools reached clearly visible to potential donors.",
    "Connected the initiative's support for children with its additional economic impact on local tailors.",
    "Created a scalable platform for future campaigns, impact stories, photographs and fundraising initiatives.",
  ],
},
  {
    slug: "ese-fabrics",
    number: "03",
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
  
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
