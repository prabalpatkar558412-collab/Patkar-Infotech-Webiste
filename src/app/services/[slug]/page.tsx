import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ArrowLeft, ShieldCheck, Cpu } from "lucide-react";
import { Header, Footer } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";
import "./service.css";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

const relatedServiceSlugs: Record<string, string[]> = {
  "website-development": ["ui-ux-design", "ecommerce-development", "api-backend-development"],
  "mobile-app-development": ["api-backend-development", "admin-panel-development", "custom-software-development"],
  "custom-software-development": ["business-management-systems", "admin-panel-development", "api-backend-development"],
  "admin-panel-development": ["business-management-systems", "custom-software-development", "api-backend-development"],
  "ecommerce-development": ["website-development", "admin-panel-development", "api-backend-development"],
  "business-management-systems": ["admin-panel-development", "custom-software-development", "maintenance-support"],
  "ui-ux-design": ["website-development", "mobile-app-development", "ecommerce-development"],
  "api-backend-development": ["custom-software-development", "mobile-app-development", "cloud-devops"],
  "cloud-devops": ["api-backend-development", "maintenance-support", "custom-software-development"],
  "maintenance-support": ["cloud-devops", "custom-software-development", "api-backend-development"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? pageMetadata(service.title, service.summary, `/services/${service.slug}`) : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="service-page">
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.summary, provider: { "@type": "Organization", name: "Patkar Infotech", url: SITE_URL }, url: `${SITE_URL}/services/${service.slug}` }).replace(/</g, "\\u003c") }} />
        {/* Back navigation */}
        <div className="page-wrap service-back-wrap">
          <Link href="/services" className="service-back-link">
            <ArrowLeft size={14} /> Back to All Services
          </Link>
        </div>

        {/* Hero */}
        <section className="service-page-hero">
          <div className="page-wrap">
            <div className="service-hero-content">
              <p className="eyebrow">
                <span /> PATKAR INFOTECH &middot; {service.category.toUpperCase()}
              </p>
              <h1>{service.headline}</h1>
              <p className="service-lead-summary">{service.summary}</p>
              <div className="service-hero-actions">
                <Link className="button button-blue" href="/#contact">
                  Discuss Your Project <ArrowRight size={16} />
                </Link>
                <Link className="button button-outline" href="/#work">
                  View Relevant Projects
                </Link>
              </div>
              <div className="service-hero-tech-stack">
                <small>Technologies typically used:</small>
                <div className="tech-badge-row">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detail content */}
        <section className="service-page-content">
          <div className="page-wrap">
            <div className="service-detail-intro">
              <p className="eyebrow">
                <span /> A PRACTICAL APPROACH
              </p>
              <h2>Built around the way your business works.</h2>
              <p>{service.description}</p>
            </div>

            <div className="service-detail-columns">
              <article className="service-detail-card">
                <div className="card-header-bar">
                  <span className="card-step-tag">01 / ARCHITECTURE &amp; PROCESS</span>
                  <h3>Thought through from the start.</h3>
                </div>
                <ul className="service-points-list">
                  {service.points.map((point) => (
                    <li key={point}>
                      <Check size={16} className="text-sky-600 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="service-detail-card">
                <div className="card-header-bar">
                  <span className="card-step-tag">02 / COMMON DELIVERABLES</span>
                  <h3>Solutions for real requirements.</h3>
                </div>
                <ul className="service-points-list">
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <Check size={16} className="text-sky-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <section className="service-related-links" aria-labelledby="related-services-title">
              <h2 id="related-services-title">Related services</h2>
              <div>
                {relatedServiceSlugs[service.slug]
                  ?.map((slug) => services.find((item) => item.slug === slug))
                  .filter((item): item is (typeof services)[number] => Boolean(item))
                  .map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`}>
                      {item.title}
                    </Link>
                  ))}
              </div>
            </section>

            {/* Bottom Callout */}
            <section className="service-contact-panel">
              <div className="panel-text">
                <p className="eyebrow">
                  <span /> NEXT STEPS
                </p>
                <h2>Have a {service.shortTitle.toLowerCase()} project in mind?</h2>
                <p>
                  Tell us what you need. We’ll examine the requirements and help you plan a
                  sensible, high-performance solution.
                </p>
              </div>
              <Link className="button button-blue button-lg" href="/#contact">
                Start a Conversation <ArrowUpRight size={16} />
              </Link>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
