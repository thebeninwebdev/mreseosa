import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://mreseosa.space";
const isVercelDeployment = process.env.VERCEL === "1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Eseosa Osayi | Full-Stack Web Developer",
    template: "%s | Eseosa Osayi",
  },

  description:
    "Portfolio of Eseosa Osayi, a Nigerian full-stack developer building production-ready Next.js products and AI-powered web applications.",

  keywords: [
    "Eseosa Osayi",
    "Mr Eseosa",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "MongoDB",
    "Node.js",
    "Frontend Developer",
    "Portfolio",
    "Nigeria",
  ],

  authors: [{ name: "Eseosa Osayi" }],
  creator: "Eseosa Osayi",
  publisher: "Eseosa Osayi",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Eseosa Osayi Portfolio",
    title: "Eseosa Osayi | Full-Stack Web Developer",
    description:
      "Building high-performance, scalable and thoughtfully designed web applications with Next.js, TypeScript and modern web technologies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eseosa Osayi | Full-Stack Web Developer",
    description:
      "Building modern web applications with Next.js, React, TypeScript and Node.js.",
  },

  alternates: {
    canonical: siteUrl,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        {isVercelDeployment && <Analytics />}
      </body>
    </html>
  );
}
