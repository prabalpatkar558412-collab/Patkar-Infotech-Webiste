import type { Metadata } from "next";
import { Header, Footer, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry | Patkar Infotech",
  description:
    "Tell Patkar Infotech about your business, your requirements and the product you have in mind. We'll discuss the scope and the right development approach.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
