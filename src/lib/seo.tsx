import type { Metadata } from "next";

export const SITE_URL = "https://www.patkarinfotech.com";
export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Patkar Infotech — Websites, apps and custom software built for business",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path || "/"}` },
    openGraph: {
      title: `${title} | Patkar Infotech`,
      description,
      type: "website",
      url,
      siteName: "Patkar Infotech",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Patkar Infotech`,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; path: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
