import { MetadataRoute } from "next";
import { getAllSchemes, getAllNews } from "@/lib/schemeService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yojanaupdates.com";
  const schemes = await getAllSchemes();
  const news = await getAllNews();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/schemes`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tools/eligibility`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const schemeRoutes: MetadataRoute.Sitemap = schemes.map((scheme) => ({
    url: `${siteUrl}/schemes/${scheme.slug}`,
    lastModified: new Date(scheme.updatedAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${siteUrl}/news/${item.slug}`,
    lastModified: new Date(item.publishedAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...schemeRoutes, ...newsRoutes];
}

