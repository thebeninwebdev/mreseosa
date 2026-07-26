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
    slug: "swiftdu",
    number: "01",
    title: "SwiftDU",
    category: "Campus logistics platform",
    summary:
      "A real-time logistics platform connecting university students with trusted taskers for errands and deliveries.",
    description:
      "SwiftDU was designed to simplify everyday campus errands such as food delivery, printing, shopping and water delivery.",
    role: "Founder and Full-Stack Engineer",
    year: "2026",
    duration: "Ongoing",
    website: "https://swiftdu.org",
    coverImage: "/projects/swiftdu.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
      "Flutterwave",
    ],
    challenge:
      "Students needed a reliable way to request everyday errands while taskers needed a clear system for discovering, accepting and completing available jobs.",
    solution:
      "I built a role-based platform with real-time task updates, payment verification, tasker training modes, order tracking and administrative controls.",
    contributions: [
      "Designed the application architecture and database models.",
      "Built user, tasker and administrative dashboards.",
      "Implemented real-time order updates using Socket.IO.",
      "Integrated payments and payment verification.",
      "Built tasker training and verification workflows.",
    ],
    results: [
      "Created a complete system for coordinating campus logistics.",
      "Reduced manual communication between students and taskers.",
      "Enabled real-time visibility into task status and fulfilment.",
    ],
  },
  {
    slug: "ese-fabrics",
    number: "02",
    title: "Ese Fabrics",
    category: "E-commerce platform",
    summary:
      "A modern e-commerce platform for browsing, purchasing and managing premium fabrics.",
    description:
      "Ese Fabrics combines a refined shopping experience with secure payments, product variation management and an administrative dashboard.",
    role: "Full-Stack Engineer",
    year: "2026",
    duration: "8 weeks",
    website: "https://ese-fabrics.vercel.app",
    coverImage: "/projects/ese-fabrics.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Paystack",
      "Cloudinary",
    ],
    challenge:
      "The business needed a polished online storefront capable of managing products, variants, inventory, payments and customer orders.",
    solution:
      "I created a responsive storefront and administrative system with product variations, cart management, secure checkout and cloud-based image storage.",
    contributions: [
      "Built the customer-facing storefront.",
      "Designed product and variation data models.",
      "Integrated Paystack payments.",
      "Created the inventory and order management dashboard.",
      "Implemented Cloudinary image management.",
    ],
    results: [
      "Delivered a complete digital storefront.",
      "Simplified inventory and order management.",
      "Created a responsive shopping experience across devices.",
    ],
  },
  {
    slug: "hotel-manager-pro",
    number: "03",
    title: "Hotel Manager Pro",
    category: "Desktop hotel management system",
    summary:
      "A desktop application for managing bookings, rooms, guests and hotel operations.",
    description:
      "Hotel Manager Pro provides hotel staff with a focused desktop interface for managing daily operations and synchronising business data.",
    role: "Full-Stack and Desktop Engineer",
    year: "2026",
    duration: "Ongoing",
    coverImage: "/projects/hotel-manager.png",
    technologies: ["Electron", "TypeScript", "SQLite", "PowerSync", "MongoDB"],
    challenge:
      "Hotels need software that remains reliable during unstable internet connections while still synchronising data between devices.",
    solution:
      "I developed an offline-first desktop application using Electron and SQLite, with PowerSync handling synchronisation with the cloud database.",
    contributions: [
      "Designed the offline-first application architecture.",
      "Built booking, room and guest management features.",
      "Created the local SQLite database.",
      "Implemented cloud synchronisation.",
      "Designed the operational dashboard.",
    ],
    results: [
      "Enabled core hotel operations without continuous internet access.",
      "Created a unified view of bookings, guests and room availability.",
      "Prepared the system for multi-device synchronisation.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}