import type { Metadata } from "next";
import { Header, Footer, ProcessSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Our Software Development Process", "See the eight stages Patkar Infotech uses to plan, design, build, test and launch digital products.", "/process");

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Process", path: "/process" }]} />
        <h1 className="sr-only">Patkar Infotech Software Development Process</h1>
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
