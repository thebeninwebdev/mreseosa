export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  year?: string;
  duration?: string;
  website?: string;
  websiteLabel?: string;
  repository?: string;
  status?: string;
  coverImage?: string;
  imageCaption?: string;
  walkthrough?: string[];
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
  category: "Student-to-student campus errand platform",
  summary:
  "Built by students for students, SwiftDU helps students get everyday errands done while creating paid opportunities for verified student taskers.",
  description:
  "SwiftDU is a student-powered platform where students support one another. A student can request food, printing, shopping or another campus errand, and a verified student tasker can accept and fulfil it. Every completed task helps one student with something they need while giving another student an opportunity to earn.",
  role: "Founder & Product Engineer",
  year: "2025",
  duration: "Independent product",
  website: "https://swiftdu.org",
  websiteLabel: "Visit SwiftDU",
  status:
    "Campus operations are paused. The results below describe SwiftDU's first month of operation.",
  coverImage: "/projects/swiftdu.png",
  imageCaption:
    "Portfolio mockup showing SwiftDU's desktop and mobile landing pages.",
  technologies: [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Socket.IO",
  ],
  challenge:
  "Students often need help with everyday campus tasks, while other students want flexible ways to earn around their studies. SwiftDU needed to bring both groups together in a way the team could manage reliably.",
  solution:
  "I built customer, tasker and admin experiences around that exchange. Students create requests, eligible student taskers accept available tasks, and both sides follow the order through fulfilment. Admin tools support tasker verification and operational oversight.",
  contributions: [
    "Built customer ordering for food, printing, shopping and other campus errands.",
    "Developed an available-orders workflow where eligible student taskers accept requests and manage the errands they take on.",
    "Built customer, tasker and admin dashboards, including tasker verification and a training mode with test orders.",
    "Implemented real-time order updates and notifications using Socket.IO.",
    "Supported direct customer-to-tasker transfers with payment confirmation and tasker settlement workflows, rather than a customer checkout that holds funds on the platform.",
  ],
  results: [
    "Reached 150 student users and 31 taskers in the first month of operations.",
    "Processed over ₦1 million in first-month order value. This is the value of orders handled, not SwiftDU's revenue or profit.",
    "Shipped a working product spanning customer requests, tasker fulfilment and administrative oversight.",
  ],
  walkthrough: [
    "A customer selects a service, provides the order details and delivery location, and submits a request.",
    "The order appears to eligible taskers; a tasker accepts it and coordinates fulfilment.",
    "The customer transfers payment directly to the tasker, with confirmation handled in the order flow.",
    "The tasker completes the errand while the customer follows its progress through order updates.",
  ],
},
  {
    slug: "carxsailor",
    number: "02",
    title: "CarXSailor",
    category: "Automotive marketplace & decision support",
    summary:
      "A car discovery and decision-support platform that helps buyers find, evaluate and compare available cars based on their budget, priorities and real-life needs.",
    description:
      "I built a vehicle discovery and decision-support platform for buyers comparing cars against their budget and everyday needs.",
    role: "Product Designer & Full-Stack Developer",
    year: "2026",
    duration: "Ongoing",
    website: "https://carxsailor.vercel.app",
    coverImage: "/projects/carxsailor.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "Resend",
    ],
    challenge:
      "Buying a car can quickly become overwhelming for people who do not understand vehicle specifications, trims or technical filters. Traditional marketplaces often expect buyers to already know the exact make, model or specifications they want, leaving less experienced buyers scrolling through large inventories without knowing which cars actually suit their needs. CarXSailor needed to make car discovery simpler while still supporting serious comparison, enquiries and marketplace management.",
    solution:
      "The current Decision Support journey first filters cars against requirements and budget, then ranks the remaining listings using weighted ratings. Buyers can inspect strengths, weaker areas and missing information before comparing cars.",
    contributions: [
      "Built vehicle discovery, detailed listings and side-by-side comparison.",
      "Developed guided decision support around budget, requirements and priorities.",
      "Built saved cars, account and enquiry workflows.",
    ],
    results: [
      "Shipped a path from vehicle discovery to ranked recommendations, comparison and enquiry.",
    ],
  },
  {
    slug: "sbp-hotel",
    number: "03",
    title: "SBP Hotel",
    category: "Hotel discovery & booking enquiries",
    summary:
      "For guests planning a stay in Benin City. I built room discovery, date-and-guest availability search, service pages and a route to booking enquiries.",
    description:
      "I built and deployed SBP Hotel’s website with room categories, rates and amenities, plus service, local-attraction, FAQ and contact pages to help guests plan a stay.",
    role: "Full-Stack Web Developer",
    year: "2025",
    duration: "October 2025 – Present",
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
      "Guests need to understand room options, check dates and find practical answers before contacting the hotel about a booking.",
    solution:
      "I organised the experience around room discovery and booking enquiries. Visitors can enter check-in and check-out dates and guest count, review room information, and use reservation and contact routes to reach the hotel.",
    contributions: [
      "Built room pages with categories, rates and amenities.",
      "Developed the availability-search interface.",
      "Built responsive services, local-attraction, FAQ and contact pages.",
      "Deployed the website and maintain its content and functionality.",
    ],
    results: [
      "Shipped sbphotel.com with room discovery, availability search and booking-enquiry routes.",
    ],
    walkthrough: [
      "Explore rooms, rates and amenities.",
      "Enter stay dates and guest count in the availability search.",
      "Review services and FAQs, then follow the reservation or contact route to enquire.",
    ],
  },
  {
    slug: "make-a-child-smile-initiative",
    number: "04",
    title: "MACSI",
    category: "Nonprofit website",
    summary:
      "For supporters of an NGO providing educational materials to underprivileged students in Nigeria. I built its website and a uniform-funding journey that continues on WhatsApp.",
    description:
      "Make A Child Smile Initiative (MACSI) supports underprivileged students in Nigeria with educational materials. The current website highlights its school-uniform campaign, including paid work for local tailors.",
    role: "Web Designer & Developer",
    year: "2026",
    duration: "Ongoing",
    website: "https://macsi.vercel.app",
    coverImage: "/projects/macsi.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenge:
      "Supporters need to understand what their contribution funds and how to contact the initiative to give, without creating an account or entering payment details on the website.",
    solution:
      "I built a donation journey that lets supporters choose one, two or five uniforms, or another amount. The selection opens a prepared WhatsApp message for the supporter to review and send; the MACSI team then guides payment. The website does not collect payment details.",
    contributions: [
      "Designed and developed the responsive NGO website.",
      "Presented the mission, uniform campaign, local tailoring and distribution process.",
      "Built donation options linked to prepared WhatsApp messages.",
      "Added giving FAQs explaining the handoff to the MACSI team.",
    ],
    results: [
      "Shipped a visible path from learning about the initiative to contacting the team about a donation.",
      "Made the current campaign’s ₦4,500 per-uniform amount and local-tailor involvement explicit.",
    ],
    walkthrough: [
      "Read about the educational mission and current uniform campaign.",
      "Choose ₦4,500, ₦9,000, ₦22,500 or another amount.",
      "Review and send the prepared WhatsApp message; continue payment arrangements with the MACSI team.",
    ],
  },
  {
    slug: "success-chemist",
    number: "05",
    title: "Success Chemist",
    website: "https://chemist-software.vercel.app",
    websiteLabel: "Visit live product",
    coverImage: "/projects/success-chemist.png",
    imageCaption: "Success Chemist brand artwork using the pill logo from the live site.",
    category: "AI-assisted medicine lookup",
    summary:
      "For pharmacy staff finding medicines and understanding their functions. I built a lookup tool using vector embeddings and semantic search to go beyond exact-name matches.",
    description:
      "Success Chemist is an AI-assisted search tool for pharmacy staff. I built the medicine lookup and indexed drug information to support searches based on meaning.",
    role: "Developer",
    technologies: ["Vector embeddings", "Semantic search"],
    challenge:
      "Exact-name matching can miss useful medicine information when staff search by a description or function instead of a precise name.",
    solution:
      "I indexed drug information with vector embeddings: numerical representations of the text’s meaning. Semantic search compares the meaning of a query with that index to retrieve relevant medicine information beyond exact word matches.",
    contributions: [
      "Built a medicine lookup for pharmacy staff.",
      "Indexed drug information with vector embeddings.",
      "Used semantic search to retrieve medicines and information about their functions.",
    ],
    results: [
      "Built an AI-assisted lookup covering medicine discovery and function information.",
    ],
    walkthrough: [
      "A staff member enters a medicine query.",
      "Semantic search compares the query’s meaning with indexed drug information.",
      "The tool returns relevant medicine information for the staff member to review.",
    ],
  },
  {
    slug: "ese-fabrics",
    number: "06",
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
      "The store needed a customer storefront alongside tools for managing products, inventory, orders and online payments.",
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
      "Shipped a storefront with product browsing, checkout and inventory-management workflows.",
    ],
  },
];

export const featuredProjects = projects.slice(0, 4);
export const moreProjects = projects.slice(4);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
