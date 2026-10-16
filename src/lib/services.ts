export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  headline: string;
  summary: string;
  description: string;
  points: string[];
  deliverables: string[];
  techStack: string[];
  iconName: string;
  visualPreview: string;
}

export const services: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    category: "Web Engineering",
    headline: "Fast, responsive business websites that turn visitors into clients.",
    summary:
      "Business websites, company websites, landing pages, portals and custom web applications built for speed, clarity and reliability.",
    description:
      "Your website is the digital front door to your business. We plan information architecture, develop lightning-fast frontends, and implement responsive designs that clearly present your offerings and make it seamless for clients to inquire.",
    points: [
      "Responsive design calibrated across desktop, tablet, and mobile devices",
      "Fast page loads with clean modern markup and optimized assets",
      "High-converting landing pages, company profiles, and service portals",
      "Search-engine-friendly structure and semantic HTML markup",
      "Seamless inquiry flows, contact forms, and WhatsApp integrations",
    ],
    deliverables: [
      "Company and Corporate Websites",
      "High-Conversion Landing Pages",
      "Client and Customer Portals",
      "Custom Web Applications",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    iconName: "Globe",
    visualPreview: "/images/services/business-websites.svg",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    category: "App Engineering",
    headline: "Native-quality mobile applications built around your users.",
    summary:
      "Android and iOS applications designed around your users and business requirements with smooth performance and dependable offline capability.",
    description:
      "Whether you need an on-demand service app, a rider/captain booking tool, or a consumer marketplace, we architect mobile apps with intuitive workflows, push notifications, and reliable API backends.",
    points: [
      "Cross-platform iOS and Android builds with shared business logic",
      "Frictionless user onboarding, OTP authentication, and profile flows",
      "Real-time location, maps integration, and status tracking",
      "Offline caching and resilient background data synchronization",
      "Direct integration with secure payment gateways and cloud notifications",
    ],
    deliverables: [
      "Android & iOS Consumer Apps",
      "Field Agent & Delivery Rider Apps",
      "On-Demand Booking Solutions",
      "Internal Team Mobile Tools",
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "REST APIs", "Node.js"],
    iconName: "Smartphone",
    visualPreview: "/images/services/mobile-applications.svg",
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "Software Engineering",
    headline: "Purpose-built software designed for your exact business logic.",
    summary:
      "Purpose-built software for business operations, workflows and specialized requirements that off-the-shelf tools cannot handle.",
    description:
      "When standard SaaS products force you to compromise your workflow, custom software gives you absolute control. We model your exact domain entities, approval chains, and automated tasks into clean, scalable software.",
    points: [
      "Detailed requirement analysis matching your operational realities",
      "Modular system architecture designed to scale with your volume",
      "Role-based security, audit trails, and multi-tenant structures",
      "Custom business rules, calculated ledgers, and automated pipelines",
      "Full source code ownership with documentation for your team",
    ],
    deliverables: [
      "Bespoke Business Applications",
      "Automated Processing Pipelines",
      "Specialized Industry Calculators & Tools",
      "Database & System Migration Tools",
    ],
    techStack: ["Node.js", "PostgreSQL", "Next.js", "Supabase", "TypeScript"],
    iconName: "Code2",
    visualPreview: "/images/services/custom-software.svg",
  },
  {
    id: "admin-panel-development",
    slug: "admin-panel-development",
    title: "Admin Panels and Dashboards",
    shortTitle: "Admin Panels",
    category: "Internal Tooling",
    headline: "Centralized control centers to manage orders, data, and users.",
    summary:
      "Centralized systems for managing products, users, orders, content and business operations with clear visual summaries.",
    description:
      "An effective business needs transparency. We build robust admin dashboards that give managers instant insight into daily metrics, customer support queues, order fulfillment statuses, and role-based permissions.",
    points: [
      "Comprehensive metric overviews, charts, and activity feeds",
      "Granular permission controls for staff, managers, and super-admins",
      "Data tables with instant search, multi-column filters, and bulk exports",
      "Real-time order statuses, payment reconciliations, and dispute resolution",
      "Clean UI designed for fast daily operations without cognitive fatigue",
    ],
    deliverables: [
      "Super-Admin Operations Consoles",
      "Customer Support & Dispatch Panels",
      "Inventory & Catalogue Managers",
      "Financial Settlement Dashboards",
    ],
    techStack: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    iconName: "LayoutDashboard",
    visualPreview: "/images/services/admin-panels.svg",
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    category: "Commerce Solutions",
    headline: "High-performance online stores engineered for smooth checkouts.",
    summary:
      "Online stores with product management, shopping carts, checkout and order management designed to convert visitors.",
    description:
      "Selling online requires flawless product discovery, swift cart interactions, and dependable payment processing. We build modern e-commerce storefronts and backends tailored to direct-to-consumer and B2B merchants.",
    points: [
      "Structured product catalogs with variant pricing, stock, and attributes",
      "Fast instant-search, faceted categories, and mobile-first product cards",
      "Streamlined multi-step checkout with address validation and tax rules",
      "Secure integration with payment gateways (UPI, Cards, Netbanking)",
      "Automated order confirmation, invoice generation, and courier tracking",
    ],
    deliverables: [
      "Direct-to-Consumer (D2C) Stores",
      "Multi-Category Online Marketplaces",
      "Wholesale & B2B Ordering Portals",
      "Order Fulfillment & Tracking Modules",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    iconName: "ShoppingBag",
    visualPreview: "/images/services/e-commerce.svg",
  },
  {
    id: "business-management-systems",
    slug: "business-management-systems",
    title: "Business Management Systems",
    shortTitle: "ERP & Systems",
    category: "Enterprise Systems",
    headline: "Unified platforms for organizing records, teams, and operations.",
    summary:
      "Custom platforms for managing business processes, records and operational workflows across your entire organization.",
    description:
      "Stop juggling disconnected spreadsheets, chat logs, and manual paperwork. We develop unified ERP and business management platforms that connect procurement, scheduling, payroll, customer records, and branch reporting.",
    points: [
      "End-to-end record centralization replacing fragile spreadsheets",
      "Automated workflow routing for purchase orders, leaves, and approvals",
      "Departmental data syncing across inventory, accounts, and operations",
      "Comprehensive reporting on daily turnaround and operational bottlenecks",
      "Scalable database architecture built to grow with company expansion",
    ],
    deliverables: [
      "Custom Mini-ERP Platforms",
      "Dairy, Logistics & Supply Chain Software",
      "Staff Attendance & Workflow Trackers",
      "Client Billing & Invoicing Systems",
    ],
    techStack: ["PostgreSQL", "Node.js", "React", "Next.js", "REST APIs"],
    iconName: "Layers",
    visualPreview: "/images/services/business-systems.svg",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    category: "Product Design",
    headline: "Clear, thoughtful interfaces that make digital products easy to use.",
    summary: "User research, wireframes and polished interface design for websites, apps and business platforms.",
    description: "We turn business goals and user needs into clear, consistent product experiences, from early flows and wireframes through production-ready interface designs.",
    points: ["User journeys and task flows", "Responsive web and mobile interface design", "Reusable design systems and component libraries", "Interactive prototypes for early feedback", "Developer-ready specifications and handoff"],
    deliverables: ["Product UX and User Flows", "Web & Mobile UI Design", "Interactive Prototypes", "Design Systems"],
    techStack: ["Figma", "Design Systems", "Prototyping"],
    iconName: "Sparkles",
    visualPreview: "/images/services/business-websites.svg",
  },
  {
    id: "api-backend-development",
    slug: "api-backend-development",
    title: "API & Backend Development",
    shortTitle: "APIs & Backend",
    category: "Backend Engineering",
    headline: "Reliable backends and integrations for connected products.",
    summary: "Secure APIs, databases and third-party integrations that keep websites and apps running smoothly.",
    description: "We build dependable backend systems with clear APIs, secure access controls and integrations that connect your product to the tools your business already uses.",
    points: ["REST API design and implementation", "Database modeling and optimization", "Authentication and role-based access", "Payment, messaging and business tool integrations", "Monitoring, documentation and maintainable code"],
    deliverables: ["REST APIs & Integrations", "Database Design", "Authentication Systems", "Payment & Notification Workflows"],
    techStack: ["Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    iconName: "Database",
    visualPreview: "/images/services/custom-software.svg",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    category: "Cloud Engineering",
    headline: "Secure, dependable infrastructure that can grow with your product.",
    summary: "Cloud setup, deployment automation and performance monitoring for reliable releases.",
    description: "We prepare and operate production infrastructure so your team can release confidently, monitor performance and scale services as demand grows.",
    points: ["Cloud architecture and environment setup", "Automated build and deployment pipelines", "Application and database monitoring", "Backups, access controls and recovery planning", "Performance and infrastructure cost reviews"],
    deliverables: ["Cloud Hosting Setup", "CI/CD Pipelines", "Monitoring & Alerts", "Backup & Recovery Planning"],
    techStack: ["AWS", "Docker", "CI/CD", "Linux"],
    iconName: "Server",
    visualPreview: "/images/services/admin-panels.svg",
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortTitle: "Maintenance",
    category: "Product Support",
    headline: "Ongoing technical care to keep your digital product healthy.",
    summary: "Updates, issue fixes and performance improvements for websites, apps and business software.",
    description: "We help teams keep their software secure and dependable with planned updates, issue resolution and practical improvements based on real usage.",
    points: ["Dependency and security updates", "Bug investigation and resolution", "Performance and reliability improvements", "Routine backups and health checks", "Technical guidance as requirements change"],
    deliverables: ["Planned Maintenance", "Bug Fixes & Troubleshooting", "Security Updates", "Performance Reviews"],
    techStack: ["Monitoring", "Security", "Performance"],
    iconName: "ShieldCheck",
    visualPreview: "/images/services/business-systems.svg",
  },
];
