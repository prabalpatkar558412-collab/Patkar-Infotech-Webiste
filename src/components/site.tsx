"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Globe,
  Smartphone,
  Code2,
  LayoutDashboard,
  ShoppingBag,
  Layers,
  Database,
  Server,
  Zap,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Terminal,
  Award,
  Lock,
  MousePointer2,
} from "lucide-react";

import { siteConfig } from "@/lib/config";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { processSteps } from "@/lib/process";
import { BrandLogo } from "./brand-logo";
import { ProjectCard } from "./project-card";
import { HeroShowcase } from "./hero-showcase";
import { StepIllustration } from "./process-illustrations";
import { ProjectInquiryForm } from "./inquiry-form";
import { FloatingWhatsAppButton } from "./whatsapp-button";

function InstagramBrandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-brand-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB800" />
          <stop offset=".48" stopColor="#F0447A" />
          <stop offset="1" stopColor="#A832C7" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagram-brand-gradient)" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="url(#instagram-brand-gradient)" strokeWidth="2.2" />
      <circle cx="17.6" cy="6.7" r="1.2" fill="#F0447A" />
    </svg>
  );
}

function FacebookBrandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2" aria-hidden="true">
      <path d="M13.64 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56H17V3.14c-.31-.04-1.39-.14-2.64-.14-2.61 0-4.4 1.59-4.4 4.51V9.6H7v3.2h2.96V21h3.68Z" />
    </svg>
  );
}

function YouTubeBrandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <path fill="#FF0033" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z" />
      <path fill="#fff" d="m9.6 15.6 6.2-3.6-6.2-3.6v7.2Z" />
    </svg>
  );
}

// Helper for service icons
function getServiceIcon(name: string) {
  switch (name) {
    case "Globe":
      return <Globe size={22} className="text-sky-600" />;
    case "Smartphone":
      return <Smartphone size={22} className="text-sky-600" />;
    case "Code2":
      return <Code2 size={22} className="text-sky-600" />;
    case "LayoutDashboard":
      return <LayoutDashboard size={22} className="text-sky-600" />;
    case "ShoppingBag":
      return <ShoppingBag size={22} className="text-sky-600" />;
    case "Layers":
      return <Layers size={22} className="text-sky-600" />;
    case "Sparkles":
      return <Sparkles size={22} className="text-sky-600" />;
    case "Database":
      return <Database size={22} className="text-sky-600" />;
    case "Server":
      return <Server size={22} className="text-sky-600" />;
    case "ShieldCheck":
      return <ShieldCheck size={22} className="text-sky-600" />;
    default:
      return <Code2 size={22} className="text-sky-600" />;
  }
}

// -------------------------------------------------------------
// 3. NAVBAR WITH STATUS TICKER
// -------------------------------------------------------------
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Tools", href: "/#technologies", id: "technologies" },
    { label: "Our Work", href: "/work", id: "work" },
    { label: "About", href: "/about", id: "about" },
    { label: "Process", href: "/process", id: "process" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];
  const activeNav = pathname.startsWith("/services") ? "services"
    : pathname.startsWith("/work") || pathname.startsWith("/projects") ? "work"
      : pathname.startsWith("/about") ? "about"
        : pathname.startsWith("/process") ? "process"
          : pathname.startsWith("/contact") ? "contact" : "home";

  return (
    <>
      {/* Top Engineering Status Ticker */}
      <div className="top-status-ticker" role="region" aria-label="Company Status">
        <div className="page-wrap ticker-content">
          <div className="ticker-left">
            <span className="live-dot" />
            <span className="ticker-badge">DIRECT ENGINEERING STUDIO</span>
            <span className="ticker-text">
              Accepting select client projects for 2026 &middot; Jabalpur, MP &amp; International
            </span>
          </div>
          <div className="ticker-right">
            <a href={`tel:${siteConfig.phone}`} className="ticker-phone">
              <Phone size={11} /> Call: {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner page-wrap">
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className={`nav-link${activeNav === item.id ? " is-active" : ""}`} aria-current={activeNav === item.id ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="header-actions">
            <Link href="/contact" className="button button-blue button-nav-cta">
              Start a Project <ArrowRight size={14} />
            </Link>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {menuOpen && (
          <div className="mobile-nav-drawer" id="mobile-navigation">
            <nav className="mobile-nav-links">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-link${activeNav === item.id ? " is-active" : ""}`}
                  aria-current={activeNav === item.id ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-slate-400" />
                </Link>
              ))}
              <div className="mobile-drawer-cta">
                <Link
                  href="/contact"
                  className="button button-blue w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <div className="mobile-contact-snippet">
                  <p>Direct Inquiries:</p>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

// -------------------------------------------------------------
// 4. HERO SECTION
// -------------------------------------------------------------
export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="page-wrap hero-layout">
        {/* Left Column: Headlines & CTAs */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">SOFTWARE DEVELOPMENT COMPANY</span>
          </div>

          <h1 className="hero-headline">
            Websites, Apps &amp;
            <br />
            Custom Software
            <br />
            <span className="headline-accent">Built for Business.</span>
          </h1>

          <p className="hero-subparagraph">
            Patkar Infotech is a website and software development company in India. We build web
            applications, mobile apps and custom business systems for startups and growing
            companies, from the first idea to launch.
          </p>

          <div className="hero-cta-group">
            <Link href="/contact" className="button button-blue button-lg">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link href="/#work" className="button button-outline button-lg">
              Explore Our Work
            </Link>
          </div>

          <p className="hero-trust-line">
            Custom-Built Solutions <span aria-hidden="true">·</span> Dedicated Development Team
            <span aria-hidden="true">·</span> End-to-End Support
          </p>
        </div>

        {/* Right Column: Verified Client Product Showcase */}
        <div className="hero-showcase-wrapper">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// ENGINEERING COMMITMENTS & TRUST STRIP
// -------------------------------------------------------------
export function EngineeringTrustStrip() {
  const commitments = [
    {
      title: "100% Code Ownership",
      subtitle: "Full source code transfer, zero proprietary lock-in",
      icon: <Lock size={18} className="text-sky-600" />,
    },
    {
      title: "Agreed Bug-Fix Warranty",
      subtitle: "Committed post-launch support and stability coverage",
      icon: <ShieldCheck size={18} className="text-sky-600" />,
    },
    {
      title: "Direct Engineering",
      subtitle: "Direct access to technical leads without agency fluff",
      icon: <Terminal size={18} className="text-sky-600" />,
    },
    {
      title: "Future-Ready Stack",
      subtitle: "Next.js 16, React Native, Node.js & PostgreSQL",
      icon: <Layers size={18} className="text-sky-600" />,
    },
  ];

  return (
    <section className="trust-strip-section" aria-label="Engineering Standards">
      <div className="page-wrap">
        <div className="trust-grid">
          {commitments.map((item) => (
            <div key={item.title} className="trust-item">
              <div className="trust-icon-box">{item.icon}</div>
              <div className="trust-body">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 5. SERVICES SECTION (Ten-Service Grid)
// -------------------------------------------------------------
const technologyLogos = [
  { name: "TypeScript", src: "/images/technologies/typescript.svg" },
  { name: "JavaScript", src: "/images/technologies/javascript.svg" },
  { name: "Python", src: "/images/technologies/python.svg" },
  { name: "PHP", src: "/images/technologies/php.svg" },
  { name: "Java", src: "/images/technologies/java.svg" },
  { name: "Go", src: "/images/technologies/go.svg" },
  { name: "C#", src: "/images/technologies/csharp.svg" },
  { name: "C++", src: "/images/technologies/cpp.svg" },
];

function TechnologyLogoScroller() {
  return (
    <div className="technology-logo-strip">
      <h3 className="technology-logo-heading">Tools We Use to Make Your App or Website</h3>
      <div className="technology-logo-viewport" role="region" aria-label="Technology logos">
        <div className="technology-logo-track">
          {[false, true].map((isDuplicate) => (
            <div
              className="technology-logo-group"
              key={isDuplicate ? "duplicate" : "original"}
              aria-hidden={isDuplicate}
            >
              {technologyLogos.map((technology) => (
                <span className="technology-logo-item" key={technology.name}>
                  <Image src={technology.src} alt="" width={28} height={28} />
                  <span>{technology.name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechPillIcon({ name }: { name: string }) {
  const localIcons: Record<string, string> = {
    JavaScript: "/images/technologies/javascript.svg",
    TypeScript: "/images/technologies/typescript.svg",
    Python: "/images/technologies/python.svg",
    PHP: "/images/technologies/php.svg",
    Java: "/images/technologies/java.svg",
    Go: "/images/technologies/go.svg",
    "C#": "/images/technologies/csharp.svg",
    "C++": "/images/technologies/cpp.svg",
  };
  if (localIcons[name]) {
    return <img className="tech-pill-icon" src={localIcons[name]} alt="" aria-hidden="true" />;
  }
  if (name === "React" || name === "React Native") {
    return (
      <svg className="tech-pill-icon react-tech-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" />
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }
  if (name === "Node.js") return <Server className="tech-pill-icon node-tech-icon" aria-hidden="true" />;
  if (name === "PostgreSQL" || name === "Supabase") return <Database className="tech-pill-icon postgres-tech-icon" aria-hidden="true" />;
  if (name === "Tailwind CSS" || name === "Design Systems") return <Layers className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Firebase" || name === "Performance") return <Zap className="tech-pill-icon firebase-tech-icon" aria-hidden="true" />;
  if (name === "REST APIs") return <Globe className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "AWS") return <Server className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Linux" || name === "CI/CD") return <Terminal className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Monitoring") return <Clock className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Security") return <ShieldCheck className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Prototyping") return <MousePointer2 className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
  if (name === "Next.js") {
    return <span className="tech-pill-icon nextjs-tech-icon" aria-hidden="true">N</span>;
  }
  if (name === "Figma") {
    return (
      <svg className="tech-pill-icon figma-tech-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#f24e1e" d="M8 2h4v6H8a3 3 0 1 1 0-6Z" />
        <path fill="#ff7262" d="M12 2h4a3 3 0 1 1 0 6h-4V2Z" />
        <path fill="#a259ff" d="M8 8h4v6H8a3 3 0 1 1 0-6Z" />
        <circle cx="15" cy="11" r="3" fill="#1abcfe" />
        <path fill="#0acf83" d="M8 14h4v3a3 3 0 1 1-4-2.83V14Z" />
      </svg>
    );
  }
  return <Code2 className="tech-pill-icon generic-tech-icon" aria-hidden="true" />;
}

function TechPill({ name }: { name: string }) {
  return <span className="tech-pill"><TechPillIcon name={name} />{name}</span>;
}

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="page-wrap">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-title">Technology Built Around Your Business.</h2>
          <p className="section-subtitle">
            Every business has different requirements. We build digital solutions based on what
            you need to achieve.
          </p>
        </div>

        <div className="services-ten-grid">
          {services.map((item, idx) => (
            <article key={item.id} className="service-standard-card">
              <div className="standard-card-header">
                <div className="service-icon-box">{getServiceIcon(item.iconName)}</div>
                <span className="service-index-number">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <span className="service-category-tag">{item.category}</span>
              <h3 className="standard-card-title">{item.title}</h3>
              <p className="standard-card-summary">{item.summary}</p>
              <div className="standard-card-deliverables">
                <ul>
                  {item.deliverables.slice(0, 2).map((deliverable) => (
                    <li key={deliverable}>
                      <Check size={13} className="text-sky-600 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer-action">
                <div className="tech-pills-row">
                  {item.techStack.slice(0, 2).map((tech) => (
                    <TechPill key={tech} name={tech} />
                  ))}
                </div>
                <Link href={`/services/${item.slug}`} className="service-detail-link">
                  <span>Details</span> <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <TechnologyLogoScroller />
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 6. OUR PROJECTS
// -------------------------------------------------------------
export function WorkSection() {
  const [activeProjectType, setActiveProjectType] = useState<"website" | "app">("website");
  const portfolioProjects = projects.filter((project) => project.projectType);
  const websiteProjects = portfolioProjects.filter((project) => project.projectType === "website");
  const appProjects = portfolioProjects.filter((project) => project.projectType === "app");
  const visibleProjects = activeProjectType === "website" ? websiteProjects : appProjects;

  return (
    <section className="section work-section" id="work">
      <div className="page-wrap">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>OUR WORK</span>
          </div>
          <h2 className="section-title">Projects Built for Real Businesses</h2>
          <p className="section-subtitle">
            Explore the websites, applications, and digital platforms we've built to solve real
            business challenges.
          </p>
        </div>

        <div className="project-type-tabs" role="tablist" aria-label="Project type">
          <button
            type="button"
            id="website-projects-tab"
            role="tab"
            aria-selected={activeProjectType === "website"}
            aria-controls="project-type-grid"
            className={`project-type-tab ${activeProjectType === "website" ? "is-active" : ""}`}
            onClick={() => setActiveProjectType("website")}
          >
            Website Projects
          </button>
          <button
            type="button"
            id="app-projects-tab"
            role="tab"
            aria-selected={activeProjectType === "app"}
            aria-controls="project-type-grid"
            className={`project-type-tab ${activeProjectType === "app" ? "is-active" : ""}`}
            onClick={() => setActiveProjectType("app")}
          >
            App Projects
          </button>
        </div>

        <div
          id="project-type-grid"
          className="projects-grid"
          role="tabpanel"
          aria-labelledby={activeProjectType === "website" ? "website-projects-tab" : "app-projects-tab"}
        >
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>

        {/* Credibility Note */}
        <div className="work-transparency-note">
          <p>
            <strong>Note on Portfolio:</strong> CareOn24 is an active, live client healthcare
            website. Demonstration projects reflect real architectural prototypes developed by
            Patkar Infotech to illustrate domain capabilities without disclosing confidential
            client agreements.
          </p>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// HOW WE WORK MARQUEE
// -------------------------------------------------------------
export function PartnershipMarquee() {
  const principles = [
    {
      label: "BUSINESS FIRST",
      title: "Understand before building.",
      text: "We start with your goals and workflows, then shape the right digital solution around them.",
    },
    {
      label: "FULL OWNERSHIP",
      title: "Your product stays yours.",
      text: "Get the source code and a clear handover, with no proprietary platform lock-in.",
    },
    {
      label: "DIRECT ENGINEERING",
      title: "Talk to the people building it.",
      text: "Work directly with the technical team through planning, development and delivery.",
    },
    {
      label: "CLEAR DELIVERY",
      title: "Know what happens next.",
      text: "Agreed milestones and regular updates keep your project understandable from start to launch.",
    },
    {
      label: "AFTER LAUNCH",
      title: "Support beyond go-live.",
      text: "We help with deployment, stability and the improvements your product needs as it grows.",
    },
    {
      label: "BUILT TO ADAPT",
      title: "Designed around your workflow.",
      text: "Purpose-built websites, apps and software fit the way your business actually operates.",
    },
  ];

  const cards = (copy: string) => (
    <div className="approach-marquee-group" key={copy}>
      {principles.map((item) => (
        <article className="approach-marquee-card" key={item.label}>
          <div className="approach-card-topline">
            <span className="approach-card-spark" aria-hidden="true">✦</span>
            <span>{item.label}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="approach-card-footer">
            <span className="approach-card-check"><CheckCircle2 size={15} /></span>
            <span>THE PATKAR APPROACH</span>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="approach-marquee-section" aria-labelledby="approach-marquee-title">
      <div className="approach-marquee-heading">
        <span className="approach-marquee-eyebrow">BUILT ON A BETTER PARTNERSHIP</span>
        <h2 id="approach-marquee-title">Good work comes from working well together.</h2>
        <p>Clear communication, thoughtful engineering and support that continues after launch.</p>
      </div>
      <div className="approach-marquee-viewport">
        <div className="approach-marquee-track">
          {cards("primary")}
          <div className="approach-marquee-group" aria-hidden="true">
            {principles.map((item) => (
              <article className="approach-marquee-card" key={item.label}>
                <div className="approach-card-topline">
                  <span className="approach-card-spark">✦</span>
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="approach-card-footer">
                  <span className="approach-card-check"><CheckCircle2 size={15} /></span>
                  <span>THE PATKAR APPROACH</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 7. ABOUT PATKAR INFOTECH
// -------------------------------------------------------------
export function AboutSection() {
  const principles = [
    {
      title: "Requirement-focused development",
      description:
        "We never build features for the sake of it. We investigate your actual business workflow, customer journeys, and operational bottlenecks before writing a single line of code.",
    },
    {
      title: "Clear project communication",
      description:
        "Direct updates, agreed deliverables, and predictable timelines. You always have a clear line to technical leadership without intermediate agency bureaucracy.",
    },
    {
      title: "Custom-built solutions",
      description:
        "Every business has unique strengths. We build tailored software models that conform to your business rules rather than forcing you into rigid templates.",
    },
    {
      title: "Frontend, backend and admin systems",
      description:
        "Complete product development under one roof. We architect customer mobile and web screens, rock-solid server APIs, secure databases, and super-admin control consoles.",
    },
    {
      title: "Testing and deployment support",
      description:
        "From rigorous multi-device verification to production cloud hosting and post-launch bug warranty, we guide your software from first concept to live stability.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="page-wrap">
        <div className="about-split-layout">
          {/* Left Column: Story & Principles */}
          <div className="about-content">
            <div className="section-eyebrow">
              <span className="eyebrow-accent-bar" />
              <span>ABOUT PATKAR INFOTECH</span>
            </div>
            <h2 className="section-title">
              Good Software Starts with Understanding the Business.
            </h2>
            <p className="about-lead">
              Patkar Infotech works with businesses, founders and entrepreneurs to transform
              ideas into digital products. We focus on understanding the requirements, planning
              the right solution and developing websites, applications and software systems that
              serve real business needs.
            </p>

            <div className="about-principles-list">
              {principles.map((p, idx) => (
                <div key={p.title} className="principle-item">
                  <div className="principle-number">0{idx + 1}</div>
                  <div className="principle-body">
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Engineering Graphic */}
          <div className="about-visual-panel">
            <div className="architecture-blueprint-card">
              <div className="blueprint-header">
                <span className="blueprint-dot" />
                <span>PATKAR INFOTECH ARCHITECTURE STACK</span>
              </div>

              <div className="blueprint-layers">
                <div className="blueprint-layer layer-presentation">
                  <div className="layer-tag">PRESENTATION LAYER</div>
                  <h5>Responsive Web &amp; Mobile UI</h5>
                  <p>Next.js 16 &middot; React Native &middot; Modern Tailwind CSS</p>
                </div>

                <div className="blueprint-connector">&darr; RESTful APIs &amp; WebSockets &darr;</div>

                <div className="blueprint-layer layer-logic">
                  <div className="layer-tag">BUSINESS LOGIC &amp; SERVICES</div>
                  <h5>Secure Backend Services &amp; Admin Consoles</h5>
                  <p>Node.js &middot; TypeScript &middot; Custom Workflow Engines</p>
                </div>

                <div className="blueprint-connector">&darr; Managed Queries &amp; Security &darr;</div>

                <div className="blueprint-layer layer-data">
                  <div className="layer-tag">DATA INFRASTRUCTURE</div>
                  <h5>Robust Storage &amp; Auth Pipelines</h5>
                  <p>PostgreSQL &middot; Supabase &middot; Firebase &middot; Cloud Backups</p>
                </div>
              </div>

              <div className="blueprint-footer">
                <div className="footer-stat">
                  <small>Source Code</small>
                  <strong>100% Client Owned</strong>
                </div>
                <div className="footer-stat">
                  <small>Warranty</small>
                  <strong>Agreed Bug-Fix Support</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 8. WHY PATKAR INFOTECH? (4 Pillars + Comparison Table)
// -------------------------------------------------------------
export function WhyPatkarSection() {
  const reasons = [
    {
      title: "Built Around Your Requirements",
      description:
        "Features and workflows are planned according to the actual project scope. We do not inflate projects with unnecessary bloat or force features you will never use.",
      icon: <Layers size={22} className="text-sky-600" />,
    },
    {
      title: "Complete Product Development",
      description:
        "Web interfaces, mobile applications, backend systems and admin panels. You work with a unified engineering partner across your entire digital stack.",
      icon: <Code2 size={22} className="text-sky-600" />,
    },
    {
      title: "Clear Communication",
      description:
        "Defined requirements, milestones and regular project updates. You have direct clarity on what is in progress, what is delivered, and what comes next.",
      icon: <CheckCircle2 size={22} className="text-sky-600" />,
    },
    {
      title: "Designed for Future Growth",
      description:
        "A practical foundation that can be extended as business requirements evolve. Clean data models, modular code, and scalable database schemas.",
      icon: <Zap size={22} className="text-sky-600" />,
    },
  ];

  return (
    <section className="section why-section">
      <div className="page-wrap">
        <div className="section-header why-section-header">
          <div className="section-eyebrow why-section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>WHY PATKAR INFOTECH</span>
            <span className="eyebrow-accent-bar" />
          </div>
          <h2 className="section-title">Technology that works for your business.</h2>
          <p className="section-subtitle">
            Thoughtful engineering, clear ownership and dependable support, from the first plan
            through launch and beyond.
          </p>
        </div>

        <div className="why-proof-stats" aria-label="Patkar Infotech facts">
          <div className="why-proof-stat">
            <strong>10</strong>
            <span>Digital services<br />to support your goals</span>
          </div>
          <div className="why-proof-stat">
            <strong>1</strong>
            <span>Active client platform<br />featured in our work</span>
          </div>
          <div className="why-proof-stat">
            <strong>100%</strong>
            <span>Client source-code<br />ownership</span>
          </div>
          <div className="why-proof-stat">
            <strong>3</strong>
            <span>Core disciplines<br />web, apps &amp; software</span>
          </div>
        </div>

        <div className="why-cards-grid">
          {reasons.map((item, idx) => (
            <div key={item.title} className="why-card">
              <div className="why-card-header">
                <div className="why-icon-box">{item.icon}</div>
                <span className="why-index">0{idx + 1}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Patkar Difference Comparison Table */}
        <div className="comparison-table-wrapper">
          <div className="comparison-table-header">
            <h4>The Patkar Infotech Difference</h4>
            <p>Why business owners and founders choose our pragmatic engineering approach:</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-row comparison-head">
              <span className="col-factor">Evaluation Factor</span>
              <span className="col-patkar">Patkar Infotech</span>
              <span className="col-others">Generic Freelancer</span>
              <span className="col-others">Traditional Agency</span>
            </div>
            <div className="comparison-row">
              <span className="col-factor">Development Scope</span>
              <span className="col-patkar font-bold text-sky-700" data-label="Patkar Infotech">✓ Tailored to exact business logic</span>
              <span className="col-others col-freelancer" data-label="Generic Freelancer">✕ Pre-made script reselling</span>
              <span className="col-others col-agency" data-label="Traditional Agency">✕ Bloated upsells &amp; delays</span>
            </div>
            <div className="comparison-row">
              <span className="col-factor">Code Ownership</span>
              <span className="col-patkar font-bold text-sky-700" data-label="Patkar Infotech">✓ 100% Owned by Client</span>
              <span className="col-others col-freelancer" data-label="Generic Freelancer">✕ Unclear repository access</span>
              <span className="col-others col-agency" data-label="Traditional Agency">✕ High licensing lock-in</span>
            </div>
            <div className="comparison-row">
              <span className="col-factor">Communication</span>
              <span className="col-patkar font-bold text-sky-700" data-label="Patkar Infotech">✓ Direct technical lead access</span>
              <span className="col-others col-freelancer" data-label="Generic Freelancer">✕ Unpredictable availability</span>
              <span className="col-others col-agency" data-label="Traditional Agency">✕ Filtered by non-technical reps</span>
            </div>
            <div className="comparison-row">
              <span className="col-factor">Post-Launch Warranty</span>
              <span className="col-patkar font-bold text-sky-700" data-label="Patkar Infotech">✓ Agreed bug-fix &amp; stability warranty</span>
              <span className="col-others col-freelancer" data-label="Generic Freelancer">✕ Vanishes after final payment</span>
              <span className="col-others col-agency" data-label="Traditional Agency">✕ Expensive hourly retainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 9. DEVELOPMENT PROCESS (Interactive Stepper & Stage)
// -------------------------------------------------------------
export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  const selectProcessStep = (index: number) => {
    setActiveStepIndex(index);

    const detailPanel = document.getElementById("process-step-detail");
    if (detailPanel) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      detailPanel.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="section process-section" id="process">
      <div className="page-wrap">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="section-title">From Your First Idea to a Working Product</h2>
          <p className="section-subtitle">
            A clear, collaborative development process that keeps you informed from planning and
            design to launch and ongoing support.
          </p>
          <p className="process-journey-note">
            <strong>8 steps</strong><span aria-hidden="true">·</span> One clear development journey
          </p>
        </div>

        <div className="process-flow-diagram" role="group" aria-label="Eight steps in our development process">
          {processSteps.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              data-step={idx + 1}
              aria-pressed={activeStepIndex === idx}
              aria-controls="process-step-detail"
              className={`process-flow-node ${activeStepIndex === idx ? "is-active" : ""}`}
              onClick={() => selectProcessStep(idx)}
            >
              <span className="flow-node-top"><span className="flow-node-number">{step.number}</span></span>
              <span className="flow-node-art"><StepIllustration id={step.illustrationId} /></span>
              <strong>{step.title}</strong>
              <span className="flow-node-description">{step.headline}</span>
            </button>
          ))}
        </div>

        {/* Featured Step Spotlight Stage */}
        <div className="process-spotlight-card" id="process-step-detail" aria-live="polite">
          <div className="spotlight-content-side">
            <div key={activeStep.key} className="process-step-copy">
              <div className="spotlight-tag-row">
                <span className="spotlight-phase">STEP {activeStep.number} &middot; {activeStep.title}</span>
              </div>
              <h3 className="spotlight-headline">{activeStep.headline}</h3>
              <p className="spotlight-summary">{activeStep.summary}</p>

              <div className="spotlight-deliverables-box">
                <small>KEY DELIVERABLES IN THIS STAGE:</small>
                <div className="deliverable-pills-row">
                  {activeStep.deliverables.map((item) => (
                    <span key={item} className="stage-pill">
                      <Check size={12} className="text-sky-600" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="spotlight-visual-side">
            <StepIllustration
              key={activeStep.key}
              id={activeStep.illustrationId}
              className="w-full h-auto process-step-visual"
            />
            <div key={`${activeStep.key}-number`} className="spotlight-number-corner process-step-enter">
              STEP {activeStep.number}
            </div>
          </div>

          <nav className="spotlight-controls" aria-label="Development process steps">
            <button
              type="button"
              className="button button-outline button-sm"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            >
              &larr; Previous Step
            </button>
            <span className="step-counter-text" aria-live="polite">
              Step {activeStepIndex + 1} of {processSteps.length}
            </span>
            <button
              type="button"
              className="button button-blue button-sm"
              disabled={activeStepIndex === processSteps.length - 1}
              onClick={() =>
                setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))
              }
            >
              Next Step &rarr;
            </button>
          </nav>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 10. TECHNOLOGIES
// -------------------------------------------------------------
export function TechnologiesSection() {
  const techCategories = [
    {
      category: "Frontend & Web",
      items: [
        { name: "React", description: "Interactive components & reactive state" },
        { name: "Next.js", description: "SSR, SSG, server components & edge APIs" },
        { name: "TypeScript", description: "Strict type safety preventing runtime bugs" },
      ],
    },
    {
      category: "Mobile Apps",
      items: [
        { name: "React Native", description: "Cross-platform native iOS & Android applications" },
        { name: "Firebase", description: "Push notifications & instant auth flows" },
        { name: "REST APIs", description: "Synchronized backend communication" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", description: "High-throughput asynchronous API microservices" },
        { name: "PostgreSQL", description: "ACID-compliant relational database storage" },
        { name: "Supabase", description: "Scalable Postgres with realtime subscriptions" },
      ],
    },
  ];

  return (
    <section className="section tech-section" id="technologies">
      <div className="page-wrap">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>TECHNOLOGIES</span>
          </div>
          <h2 className="section-title">Tools We Use to Build.</h2>
          <p className="section-subtitle">
            Technologies selected for stability, security, maintainability, and long-term
            developer ecosystem support.
          </p>
        </div>

        <div className="tech-categorized-grid">
          {techCategories.map((group) => (
            <div key={group.category} className="tech-group-card">
              <div className="group-header">
                <span className="group-indicator-dot" />
                <h3>{group.category}</h3>
              </div>
              <div className="group-items-list">
                {group.items.map((tech) => (
                  <div key={tech.name} className="tech-row-item">
                    <strong className="tech-name">{tech.name}</strong>
                    <span className="tech-role">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-disclaimer">
          <p>
            We choose the technology stack based on specific project requirements, scalability
            goals, and hosting preferences—not trend speculation.
          </p>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 11. PROJECT INQUIRY SECTION
// -------------------------------------------------------------
export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="page-wrap contact-split-grid">
        {/* Left Column: Heading and verified contact details */}
        <div className="contact-info-panel">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>PROJECT INQUIRY</span>
          </div>
          <h2 className="section-title">Have an Idea You Want to Build?</h2>
          <p className="contact-supporting-text">
            Tell us about your business, your requirements and the product you have in mind.
            We’ll discuss the scope and the right development approach.
          </p>

          <div className="contact-points-list">
            <div className="contact-point-item">
              <div className="contact-icon-box">
                <Phone size={18} className="text-sky-600" />
              </div>
              <div>
                <small>Phone &amp; WhatsApp</small>
                <strong>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
                </strong>
              </div>
            </div>

            <div className="contact-point-item">
              <div className="contact-icon-box">
                <Mail size={18} className="text-sky-600" />
              </div>
              <div>
                <small>Direct Email</small>
                <strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </strong>
              </div>
            </div>

            <div className="contact-point-item">
              <div className="contact-icon-box">
                <MapPin size={18} className="text-sky-600" />
              </div>
              <div>
                <small>Operational Headquarters</small>
                <strong>{siteConfig.addressFormatted}</strong>
              </div>
            </div>
          </div>

          <div className="contact-guarantee-card">
            <h4>What happens after you submit?</h4>
            <ol>
              <li>We analyze your stated features and operational goals.</li>
              <li>We schedule a brief discussion to clarify technical unknowns.</li>
              <li>We prepare a clear quotation with milestones and timeline breakdown.</li>
            </ol>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="contact-form-panel">
          <ProjectInquiryForm />
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 13. FOOTER
// -------------------------------------------------------------
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <BrandLogo invert={true} />
            <p className="footer-brand-desc">
              Websites, mobile apps and custom software built around your business.
            </p>
            <div className="footer-contact-summary">
              <p>
                <strong>Headquarters:</strong> {siteConfig.addressFormatted}
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong>{" "}
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>
            {(siteConfig.social.instagram || siteConfig.social.facebook || siteConfig.social.youtube) && (
              <div className="footer-social-row" role="group" aria-label="Social media links">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn social-icon-btn"
                    aria-label="Patkar Infotech on Instagram: @guru3695495"
                    title="Instagram"
                  >
                    <InstagramBrandIcon />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn social-icon-btn"
                    aria-label="Patkar Infotech on Facebook"
                    title="Facebook"
                  >
                    <FacebookBrandIcon />
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn social-icon-btn"
                    aria-label="Patkar Infotech on YouTube"
                    title="YouTube"
                  >
                    <YouTubeBrandIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#work">Our Work</Link>
              </li>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/#process">Our Process</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Core Services</h4>
            <ul>
              <li>
                <Link href="/services/website-development">Website Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services/custom-software-development">Custom Software</Link>
              </li>
              <li>
                <Link href="/services/admin-panel-development">Admin Panels &amp; Dashboards</Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development">E-commerce Development</Link>
              </li>
              <li>
                <Link href="/services/business-management-systems">
                  Business Management Systems
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Company &amp; Legal</h4>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/contact">Start a Project</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>&copy; {new Date().getFullYear()} Patkar Infotech. All rights reserved.</span>
          <div className="footer-legal-links">
            <Link href="/privacy-policy">Privacy</Link>
            <span className="dot-divider">&middot;</span>
            <Link href="/terms">Terms</Link>
            <span className="dot-divider">&middot;</span>
            <a href="#home">Back to top &uarr;</a>
          </div>
        </div>

        <div className="footer-watermark" aria-hidden="true">
          PATKAR INFOTECH
        </div>
      </div>
    </footer>
  );
}

// -------------------------------------------------------------
// MAIN HOME PAGE EXPORT
// -------------------------------------------------------------
export default function Site() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EngineeringTrustStrip />
        <ServicesSection />
        <PartnershipMarquee />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
