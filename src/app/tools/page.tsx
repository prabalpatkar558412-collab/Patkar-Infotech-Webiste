import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, TechPill } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Tools & Technologies", "Explore the technologies Patkar Infotech uses to build websites, mobile apps, and custom business software.", "/tools");

const technologyGroups = [
  { title: "Websites & Web Applications", description: "Responsive interfaces built for your customers and the way they browse.", technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "Mobile Applications", description: "Connected mobile experiences for Android and iOS, with a shared product foundation.", technologies: ["React Native", "TypeScript", "REST APIs"] },
  { title: "Backend & Business Logic", description: "APIs, integrations and workflows that connect your product and business systems.", technologies: ["Node.js", "Python", "PHP", "Java", "REST APIs"] },
  { title: "Data & Authentication", description: "Structured data and access controls chosen around your product requirements.", technologies: ["PostgreSQL", "Supabase", "Firebase"] },
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Tools & Technologies", path: "/tools" }]} />
        <section className="section tools-section">
          <div className="page-wrap">
            <header className="section-header">
              <p className="section-eyebrow">OUR TECHNOLOGY STACK</p>
              <h1 className="section-title">Practical Tools. Dependable Products.</h1>
              <p className="section-subtitle">We choose a technology stack around your users, your workflows and the support your product will need as it grows.</p>
            </header>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <article className="technology-group" key={group.title}>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                  <ul className="technology-group-list" aria-label={`${group.title} technologies`}>
                    {group.technologies.map((name) => <li key={name}><TechPill name={name} /></li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="tools-contact">
              <h2>Let’s Choose the Right Approach for Your Project</h2>
              <p>Share your requirements and we’ll discuss the platform, scope and development approach with you.</p>
              <Link href="/contact" className="button button-blue">Discuss Your Project</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
