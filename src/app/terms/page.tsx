import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/lib/config";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Patkar Infotech",
  description: "Terms and conditions governing the use of Patkar Infotech website and services.",
};

export default function Terms() {
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
                <span>LEGAL &amp; AGREEMENTS</span>
              </div>
              <h1>Terms &amp; Conditions</h1>
              <p className="legal-effective">Last updated: October 2026 &middot; Patkar Infotech</p>
            </div>

            <section className="legal-section">
              <h2>1. Informational Scope</h2>
              <p>
                The content provided on this website is intended to inform prospective clients of
                the software development, web engineering, mobile application, and IT solutions
                offered by Patkar Infotech.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Project Agreements &amp; Scope of Work</h2>
              <p>
                Submission of a project inquiry through this website does not constitute a binding
                commercial contract or service commitment. Formal engineering projects commence
                only after both parties execute a designated Software Development Service
                Agreement detailing technical scope, milestones, warranties, and payment terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Portfolio &amp; Demonstration Projects</h2>
              <p>
                Projects presented on this website are categorized accurately. Client projects
                reflect actual delivered solutions. Demonstration projects reflect real
                architectural prototypes created by Patkar Infotech to showcase technical
                capabilities across various industries without violating client confidentiality.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Intellectual Property</h2>
              <p>
                All trademarks, brand marks, and site designs are property of Patkar Infotech. For
                contracted client software, intellectual property transfer terms are governed by
                the specific Software Development Service Agreement signed prior to project kick-off.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Jurisdiction</h2>
              <p>
                These terms are governed in accordance with the laws of India, with primary
                jurisdiction residing in Jabalpur, Madhya Pradesh, India.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact Details</h2>
              <p>For questions regarding terms or legal documentation, contact:</p>
              <div className="legal-contact-box">
                <p>
                  <strong>Patkar Infotech</strong>
                </p>
                <p>Headquarters: {siteConfig.addressFormatted}</p>
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
