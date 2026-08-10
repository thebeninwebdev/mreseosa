import { Instrument_Serif } from "next/font/google";

// Keep the display face server-only so it does not enter the menu's client graph.
export const heroFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
