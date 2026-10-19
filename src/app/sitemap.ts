import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
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
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
