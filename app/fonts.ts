import { Cormorant_Garamond } from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

// Avoid a second font download and parse on performance-constrained devices.
export const bodyFont = { className: "body-font" } as const;
