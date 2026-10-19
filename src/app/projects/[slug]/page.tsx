import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Header, Footer } from "@/components/site";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { BreadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import "./case.css";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? pageMetadata(project.title, project.summary, `/projects/${project.slug}`) : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="case-study-page">
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Our Work", path: "/work" }, { name: project.title, path: `/projects/${project.slug}` }]} />
        {/* Back Link */}
        <div className="page-wrap case-back-bar">
          <Link href="/#work" className="case-back-link">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </div>

        <article className="page-wrap case-article">
          {/* Header */}
          <div className="case-header">
            <div className="case-badge-row">
              <span className="case-cat-pill">{project.category}</span>
              <span
                className={`case-badge ${
                  project.isClientWork ? "badge-client" : "badge-demo"
                }`}
              >
                {project.statusBadge}
              </span>
            </div>

            <h1 className="case-main-title">{project.title}</h1>
            <p className="case-hero-summary">{project.summary}</p>

            {project.liveUrl && (
              <div className="case-live-action">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-blue"
                >
                  Visit Live Client Website <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>

          {/* Visual Showcase */}
          <div className="case-visual-frame">
            <Image
              src={project.previewImage}
              alt={`${project.title}: ${project.shortDescription}`}
              width={960}
              height={500}
              className="case-preview-img"
              priority
            />
          </div>

          {/* Transparency Disclaimer */}
          {project.isClientWork ? (
            <div className="case-verified-notice">
              <ShieldCheck size={18} className="text-sky-600 flex-shrink-0" />
              <p>
                <strong>Verified Client Delivery:</strong> This project was commissioned by and
                developed for <strong>{project.clientOrBrand}</strong>. All live links lead to
                the active production deployment.
              </p>
            </div>
          ) : (
            <div className="case-demo-notice">
              <p>
                <strong>Demonstration Concept:</strong> This project was engineered by Patkar
                Infotech to demonstrate domain architecture and UI capability for{" "}
                <strong>{project.category}</strong>. It is clearly labeled as a concept prototype
                and is not represented as past client delivery.
              </p>
            </div>
          )}

          {/* Case Narrative Grid */}
          <div className="case-narrative-sections">
            <section className="narrative-block">
              <span className="block-step">01 / THE OBJECTIVE</span>
              <h2>Requirements &amp; Operational Challenge</h2>
              <p>{project.problem}</p>
            </section>

            <section className="narrative-block">
              <span className="block-step">02 / THE ARCHITECTURE</span>
              <h2>Engineering Solution &amp; User Flow</h2>
              <p>{project.solution}</p>
            </section>

            <section className="narrative-block">
              <span className="block-step">03 / PRODUCT CAPABILITIES</span>
              <h2>Core Implemented Features</h2>
              <ul className="case-features-list">
                {project.keyFeatures.map((feat) => (
                  <li key={feat}>
                    <CheckCircle2 size={15} className="text-sky-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="narrative-block">
              <span className="block-step">04 / TECHNOLOGY STACK</span>
              <h2>Frameworks &amp; Tools</h2>
              <div className="case-tech-pills">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Conversion Box */}
          <div className="case-bottom-cta">
            <div>
              <small>HAVE A SIMILAR REQUIREMENT?</small>
              <h3>Let’s build a custom solution for your business.</h3>
              <p>
                From requirements gathering to live deployment, we turn your business workflows
                into working software.
              </p>
            </div>
            <Link className="button button-blue button-lg" href="/#contact">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
