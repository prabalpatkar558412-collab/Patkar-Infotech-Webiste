import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";
import "../components/extras.css";
import { SiteIntro } from "@/components/site-intro";

export const metadata: Metadata = {
  title: "Patkar Infotech | Website & App Development Company",
  description: "Patkar Infotech builds custom websites, mobile apps and business software tailored to your requirements.",
  icons: { icon: "/favicon.png" },
  openGraph: { title: "Patkar Infotech | Website & App Development Company", description: "Websites, apps and software built around your business.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteIntro />{children}</body></html>;
}
