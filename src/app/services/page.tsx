import type { Metadata } from "next";
import { Header, Footer, ServicesSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Services | Patkar Infotech",
  description:
    "Explore Patkar Infotech website, mobile app, custom software, admin panel, e-commerce, and business system development services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
