import type { Metadata } from "next";
import { Header, Footer, WorkSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Patkar Infotech",
  description:
    "Explore software projects, client deliveries, and architectural concepts built around business requirements by Patkar Infotech.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
