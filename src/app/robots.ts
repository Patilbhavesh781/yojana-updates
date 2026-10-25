import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/", // Crucial for Google AdSense crawler bot!
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

