import type { Metadata } from "next";
import { Header, Footer, ProcessSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Development Process | Patkar Infotech",
  description:
    "See how Patkar Infotech plans, designs, builds, tests and launches digital products with our proven 8-step methodology.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
