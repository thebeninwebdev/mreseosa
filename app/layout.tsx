import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { siteDescription, siteTitle, siteUrl } from "@/data/site";
const isVercelDeployment = process.env.VERCEL === "1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Eseosa Osayi",
  },

  description: siteDescription,

  authors: [{ name: "Eseosa Osayi", url: siteUrl }],
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
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
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
