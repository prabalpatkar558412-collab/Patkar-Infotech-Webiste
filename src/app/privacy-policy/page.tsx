import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/config";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Patkar Infotech",
  description: "How Patkar Infotech handles project inquiries and technical communications.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="legal-page-wrapper">
        <div className="page-wrap legal-container">
          <div className="legal-back-bar">
            <Link href="/" className="case-back-link">
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <article className="legal-content-card">
            <div className="legal-header">
              <div className="section-eyebrow">
                <span className="eyebrow-accent-bar" />
                <span>LEGAL &amp; PRIVACY</span>
              </div>
              <h1>Privacy Policy</h1>
              <p className="legal-effective">Last updated: October 2026 &middot; Patkar Infotech</p>
            </div>

            <section className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>
                When you submit a project inquiry through our website, we collect your name,
                business or company name, email address, phone number, project type, estimated
                budget, and requirements description.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Purpose of Collection</h2>
              <p>
                The information you provide is strictly used to evaluate your software
                requirements, prepare project scoping documents, and contact you via phone,
                email, or WhatsApp to discuss technical engagement. We do not sell, rent, or trade
                client information to third-party marketing brokers.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Data Confidentiality &amp; Project NDAs</h2>
              <p>
                We treat all proprietary product ideas, technical concepts, and business logic
                shared with Patkar Infotech as confidential. Mutual Non-Disclosure Agreements
                (NDAs) are available upon request prior to detailed requirement disclosures.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. WhatsApp &amp; Direct Communication</h2>
              <p>
                If you choose to contact us via WhatsApp or direct phone call, communication is
                governed by end-to-end encryption protocols and standard telecommunication
                standards.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Contact for Privacy Inquiries</h2>
              <p>
                If you have questions regarding data retention or wish to request the removal of
                an inquiry from our records, please contact us at:
              </p>
              <div className="legal-contact-box">
                <p>
                  <strong>Patkar Infotech</strong>
                </p>
                <p>Location: {siteConfig.addressFormatted}</p>
                <p>
                  Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
                <p>Phone: {siteConfig.phoneFormatted}</p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
