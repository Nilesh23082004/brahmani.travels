import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { services, locations, routes, cars, blogPosts } from "@/lib/seo-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-07T00:00:00.000Z");

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/cars`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/booking`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // 10 Service Landing Pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 15 Location Landing Pages
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 24 Route Landing Pages
  const routeRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}/routes/${r.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  // 9 Car Model Pages
  const carRoutes: MetadataRoute.Sitemap = cars.map((c) => ({
    url: `${SITE_URL}/cars/${c.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 10 Blog Guides
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...routeRoutes,
    ...carRoutes,
    ...blogRoutes,
  ];
}
