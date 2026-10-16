import type { Metadata } from "next";
import { Header, Footer, AboutSection, WhyPatkarSection, ContactSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "About Us | Patkar Infotech",
  description:
    "Learn how Patkar Infotech works with businesses, founders and entrepreneurs to turn ideas into practical digital products.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <WhyPatkarSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
