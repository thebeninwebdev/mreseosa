import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mreseosa.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Eseosa Osayi | Full-Stack Web Developer",
    template: "%s | Eseosa Osayi",
  },

  description:
    "Portfolio of Eseosa Osayi, a Nigerian Full-Stack Web Developer specializing in Next.js, TypeScript, React, Node.js and MongoDB. Explore projects, experience and modern web applications.",

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eseosa Osayi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eseosa Osayi | Full-Stack Web Developer",
    description:
      "Building modern web applications with Next.js, React, TypeScript and Node.js.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
      <Analytics/>
      </body>
    </html>
  );
}
