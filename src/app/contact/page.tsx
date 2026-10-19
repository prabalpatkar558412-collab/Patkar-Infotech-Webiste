import type { Metadata } from "next";
import { Header, Footer, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Contact and Project Enquiries", "Tell Patkar Infotech about your website, app or software project and discuss the requirements with our team.", "/contact");

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <h1 className="sr-only">Contact Patkar Infotech about a Project</h1>
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
