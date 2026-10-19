import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";
import "../components/extras.css";
import { SiteIntro } from "@/components/site-intro";
import { SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patkar Infotech | Website, App & Software Development Company",
    template: "%s | Patkar Infotech",
  },
  description: "Patkar Infotech builds custom websites, mobile apps, web applications and business software for startups and businesses in India and worldwide. Discuss your project with our team.",
  alternates: { canonical: `${SITE_URL}/` },
  icons: { icon: "/WhatsApp_Image_2026-10-19_at_2.23.42_AM-removebg-preview.png" },
  openGraph: { title: "Patkar Infotech | Website, App & Software Development Company", description: "Patkar Infotech builds custom websites, mobile apps, web applications and business software for startups and businesses in India and worldwide. Discuss your project with our team.", type: "website", url: SITE_URL, siteName: "Patkar Infotech", images: [{ url: "/WhatsApp_Image_2026-10-19_at_2.23.42_AM-removebg-preview.png", alt: "Patkar Infotech" }] },
  twitter: { card: "summary_large_image", title: "Patkar Infotech | Website, App & Software Development Company", description: "Patkar Infotech builds custom websites, mobile apps, web applications and business software for startups and businesses in India and worldwide. Discuss your project with our team.", images: ["/WhatsApp_Image_2026-10-19_at_2.23.42_AM-removebg-preview.png"] },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Patkar Infotech",
  url: SITE_URL,
  logo: `${SITE_URL}/WhatsApp_Image_2026-10-19_at_2.23.42_AM-removebg-preview.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneFormatted,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    addressCountry: "IN",
  },
  sameAs: [siteConfig.social.instagram],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Patkar Infotech",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Patkar Infotech", url: SITE_URL },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, "\\u003c") }} /><SiteIntro />{children}</body></html>;
}
