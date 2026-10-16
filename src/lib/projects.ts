export interface ProjectItem {
  slug: string;
  title: string;
  clientOrBrand: string;
  isClientWork: boolean;
  statusBadge: string;
  category: string;
  categorySlug:
    | "healthcare"
    | "travel-booking"
    | "business-management"
    | "document-tools"
    | "ecommerce"
    | "delivery-services";
  shortDescription: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  previewImage: string;
  accentColor: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "careon24-healthcare-platform",
    title: "CareOn24 Home Healthcare Platform",
    clientOrBrand: "CareOn24 Healthcare",
    isClientWork: true,
    statusBadge: "Client Project · Live Website",
    category: "Healthcare Websites",
    categorySlug: "healthcare",
    shortDescription:
      "A responsive healthcare service platform connecting families with in-home nursing, attendants, and medical equipment rentals.",
    summary:
      "CareOn24 required a clean, credible web presence that simplifies patient care booking, clarifies multi-tier clinical services, and provides rapid emergency contact paths across mobile and desktop.",
    problem:
      "Patients and elderly care seekers found medical service providers opaque and confusing to navigate online during urgent situations.",
    solution:
      "Engineered a streamlined, empathetic web experience with intuitive categorization of nursing, attendant, physiotherapy, and equipment services, backed by instant WhatsApp and phone booking flows.",
    keyFeatures: [
      "Categorized home healthcare service directory",
      "One-click direct patient dispatch & inquiry triggers",
      "Medical equipment rental & purchase catalogue",
      "Fully responsive mobile and tablet touch architecture",
      "SEO-optimized layout for local healthcare search queries",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://www.careon24.com/",
    previewImage: "/images/projects/careon24-responsive.svg",
    accentColor: "#0284c7",
  },
  {
    slug: "westernghats-travel-booking",
    title: "Western Ghats Trails & Stay Platform",
    clientOrBrand: "RoamWest Eco-Travel",
    isClientWork: false,
    statusBadge: "Demonstration Project · Interactive Concept",
    category: "Travel and Booking Platforms",
    categorySlug: "travel-booking",
    shortDescription:
      "An experiential travel portal featuring custom regional trail itineraries, verified eco-homestay listings, and booking request flows.",
    summary:
      "A demonstration concept exploring high-aesthetic booking journeys for regional eco-tourism operators, featuring date-range filters, curated trails, and transparent pricing breakdowns.",
    problem:
      "Independent boutique travel companies struggle with rigid third-party booking aggregators that levy high commissions and obscure regional experiences.",
    solution:
      "Created a bespoke booking portal featuring visual destination exploration, instant availability calendars, and direct traveler-to-host inquiry coordination.",
    keyFeatures: [
      "Visual destination guides with elevation & difficulty meters",
      "Date-picker reservation flow with real-time room slots",
      "Curated itinerary builder for multi-day trekking journeys",
      "Integrated inquiry pipeline with automatic quote calculation",
      "Mobile-optimized photo galleries and local traveler guides",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    previewImage: "/images/services/business-websites.svg",
    accentColor: "#0879c9",
  },
  {
    slug: "pulseops-business-management-erp",
    title: "PulseOps Dairy & Logistics Management ERP",
    clientOrBrand: "PulseOps",
    isClientWork: false,
    statusBadge: "Demonstration Project · System Architecture",
    category: "Business Management Software",
    categorySlug: "business-management",
    shortDescription:
      "A purpose-built operational management system for milk collection routes, producer payouts, vehicle tracking, and inventory ledgers.",
    summary:
      "A comprehensive ERP concept modeled after real dairy and agro-logistics client requirements, consolidating weigh-bridge records, fat/SNF calculations, and automated farmer settlement sheets.",
    problem:
      "Manual record-keeping in rural collection centers caused invoice discrepancies, delayed farmer payouts, and lack of route-level visibility.",
    solution:
      "Designed a central business software suite with role-aware admin consoles, offline-capable collection entry, and auto-generated weekly remittance summaries.",
    keyFeatures: [
      "Daily procurement ledger with automated formula calculations",
      "Farmer identity directory with bank payment exports",
      "Multi-vehicle route tracking and fuel reconciliation",
      "Granular role-based permissions (Operator, Supervisor, Auditor)",
      "Instant PDF generation for statement ledgers and receipts",
    ],
    techStack: ["PostgreSQL", "Node.js", "React", "TypeScript", "REST APIs"],
    previewImage: "/images/services/business-systems.svg",
    accentColor: "#102f70",
  },
  {
    slug: "docuflow-document-pdf-tools",
    title: "DocuFlow Utility & PDF Processing Suite",
    clientOrBrand: "DocuFlow Engine",
    isClientWork: false,
    statusBadge: "Demonstration Project · Web Tool Suite",
    category: "Document and PDF Tools",
    categorySlug: "document-tools",
    shortDescription:
      "A high-speed browser-based document workbench for converting images to PDF, merging contracts, and extracting structured records.",
    summary:
      "A demonstration utility suite built to solve everyday document management headaches for legal, accounting, and administrative teams needing fast client-side file transformations.",
    problem:
      "Employees frequently rely on ad-heavy, privacy-invasive online PDF sites that upload sensitive customer documents to untrusted remote servers.",
    solution:
      "Built a secure client-side document processing tool that handles image-to-PDF conversion, page re-ordering, watermarking, and compression right in the browser sandbox.",
    keyFeatures: [
      "Drag-and-drop batch image-to-PDF compilation",
      "Interactive page-level reordering and page deletion preview",
      "Client-side processing protecting file privacy",
      "Fast PDF compression without visual artifacting",
      "Configurable export presets (Print, Web, Archive)",
    ],
    techStack: ["React", "TypeScript", "Canvas API", "WebAssembly", "Node.js"],
    previewImage: "/images/services/custom-software.svg",
    accentColor: "#059669",
  },
  {
    slug: "aurastore-ecommerce-platform",
    title: "Aura Living Direct-to-Consumer Storefront",
    clientOrBrand: "Aura Living",
    isClientWork: false,
    statusBadge: "Demonstration Project · E-commerce Architecture",
    category: "E-commerce Platforms",
    categorySlug: "ecommerce",
    shortDescription:
      "A modern lifestyle and goods storefront with instant cart drawer, SKU variant selection, and unified order management backend.",
    summary:
      "A modern e-commerce platform concept showcasing clean product storytelling, instant cart interactions, coupon engines, and a unified merchant order management backend.",
    problem:
      "Bloated standard store templates suffer from sluggish mobile load times and poor checkout completion rates.",
    solution:
      "Developed a headless shopping architecture with sub-second page transitions, dynamic inventory alerts, and an uncluttered 2-step checkout flow.",
    keyFeatures: [
      "Instant slide-out shopping cart with free-shipping milestone progress",
      "Color and size variant selector with dynamic stock validation",
      "Integrated discount code and coupon validator",
      "Merchant order fulfillment dashboard with status tags",
      "Support for UPI, Netbanking, Credit Cards, and COD options",
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    previewImage: "/images/services/e-commerce.svg",
    accentColor: "#d97706",
  },
  {
    slug: "quickserve-delivery-rider-platform",
    title: "QuickServe Hyperlocal Delivery & Rider System",
    clientOrBrand: "QuickServe Logistics",
    isClientWork: false,
    statusBadge: "Demonstration Project · Mobile & Dispatch Concept",
    category: "Delivery and Service Applications",
    categorySlug: "delivery-services",
    shortDescription:
      "A dual mobile application suite for hyperlocal ordering, merchant order acceptance, and live rider GPS dispatch.",
    summary:
      "A mobile-centric concept illustrating end-to-end delivery mechanics: from consumer cart checkout to automated rider assignment and live route tracking.",
    problem:
      "Local delivery businesses face communication breakdowns between store managers, freelance delivery riders, and expecting customers.",
    solution:
      "Engineered an integrated solution featuring customer tracking screens, a driver acceptance app with turn-by-turn routing, and an admin live-dispatch board.",
    keyFeatures: [
      "Customer order tracking with realistic milestone progression",
      "Rider app interface with single-tap accept/reject and earnings tab",
      "OTP verification for pickup and doorstep handoff security",
      "Super-admin operations map with active order status cards",
      "Automated push notifications for order status changes",
    ],
    techStack: ["React Native", "Firebase", "Node.js", "REST APIs"],
    previewImage: "/images/services/admin-panels.svg",
    accentColor: "#7c3aed",
  },
];
