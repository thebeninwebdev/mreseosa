import type { MetadataRoute } from "next";

const siteUrl = "https://mreseosa.space";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl,
  };
}
