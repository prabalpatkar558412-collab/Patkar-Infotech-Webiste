import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://patkarinfotech.com";
  const root = siteUrl.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/process",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const projectRoutes = projects.map(({ slug }) => `/projects/${slug}`);
  const serviceRoutes = services.map(({ slug }) => `/services/${slug}`);

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes].map((path) => ({
    url: `${root}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
