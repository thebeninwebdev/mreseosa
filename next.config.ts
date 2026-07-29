import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind's small atomic stylesheet is faster in the initial HTML than
    // behind an extra render-blocking request.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 75],
  },
};

export default nextConfig;
