import type { Metadata } from "next";
import { Footer, Header, TechnologiesSection } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Tools & Technologies",
  description:
    "Explore the technologies Patkar Infotech uses to build websites, mobile apps, and custom software.",
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main>
        <TechnologiesSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
