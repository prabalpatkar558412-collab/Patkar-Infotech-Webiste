import type { Metadata } from "next";
import { Header, Footer, AboutSection, WhyPatkarSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("About Us", "Learn about Patkar Infotech's practical approach to building websites, apps and software around business requirements.", "/about");

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
        <h1 className="sr-only">About Patkar Infotech</h1>
        <AboutSection />
        <WhyPatkarSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
