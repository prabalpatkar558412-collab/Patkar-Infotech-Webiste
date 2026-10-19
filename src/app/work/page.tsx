import type { Metadata } from "next";
import { Header, Footer, WorkSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Software Projects and Portfolio", "Explore client deliveries and clearly labeled demonstration projects built around business requirements by Patkar Infotech.", "/work");

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Our Work", path: "/work" }]} />
        <h1 className="sr-only">Patkar Infotech Projects and Portfolio</h1>
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
