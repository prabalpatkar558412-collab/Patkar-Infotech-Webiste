import type { Metadata } from "next";
import { Header, Footer, ServicesSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Website, App and Software Development Services", "Explore website development, web applications, mobile apps, admin dashboards and custom business software services from Patkar Infotech.", "/services");

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
        <h1 className="sr-only">Website, App and Custom Software Development Services</h1>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
