export interface ProcessStep {
  number: string;
  key: string;
  title: string;
  headline: string;
  summary: string;
  deliverables: string[];
  illustrationId: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    key: "discuss",
    title: "DISCUSS",
    headline: "Understand the business idea, requirements and goals.",
    summary:
      "We begin with a thorough conversation about what you are aiming to build, who will use it, and what operational problem it solves. No technical jargon—just clear alignment on your business needs.",
    deliverables: ["Requirement Notes", "Target User Persona", "Initial Project Scope"],
    illustrationId: "discuss",
  },
  {
    number: "02",
    key: "plan",
    title: "PLAN",
    headline: "Define features, scope, priorities and milestones.",
    summary:
      "We break down the project into clear phases, feature lists, and timeline milestones. You know exactly what is included in Version 1.0, what comes later, and how the budget is allocated.",
    deliverables: ["Feature Specification", "Architecture Plan", "Milestone Roadmap"],
    illustrationId: "plan",
  },
  {
    number: "03",
    key: "design",
    title: "DESIGN",
    headline: "Create the user interface, screens and user journey.",
    summary:
      "We design intuitive, clutter-free wireframes and interactive screen layouts. Every button, menu, and flow is planned so users and internal staff can navigate without friction.",
    deliverables: ["Wireframe Blueprints", "High-Fidelity UI Screens", "Interactive Prototypes"],
    illustrationId: "design",
  },
  {
    number: "04",
    key: "develop",
    title: "DEVELOP",
    headline: "Build the frontend, backend, database and admin system.",
    summary:
      "Our engineering team writes clean, modular, and maintainable code for the user-facing app or website, connects secure database structures, and develops the administrative control panel.",
    deliverables: ["Frontend Interfaces", "Secure API Backend", "Admin Control Console"],
    illustrationId: "develop",
  },
  {
    number: "05",
    key: "test",
    title: "TEST",
    headline: "Check functionality, usability and device compatibility.",
    summary:
      "Before any deployment, we thoroughly test user flows across real desktop browsers, Android devices, and iOS screens. We check edge cases, form validations, and database integrity.",
    deliverables: ["Cross-Device Verification", "Bug Rectification Log", "Performance Audit"],
    illustrationId: "test",
  },
  {
    number: "06",
    key: "launch",
    title: "LAUNCH",
    headline: "Deploy the approved product and prepare it for use.",
    summary:
      "We configure your production servers, link domain names, install SSL certificates, configure cloud services, and release the live web application or submit mobile apps to stores.",
    deliverables: ["Production Cloud Server", "Live Domain & SSL Setup", "Store Submission"],
    illustrationId: "launch",
  },
  {
    number: "07",
    key: "support",
    title: "SUPPORT",
    headline: "Provide agreed post-launch support and bug fixes.",
    summary:
      "A successful launch is only the start. We stand behind our work with warranty bug fixes, server monitoring, and technical support as your first real users begin interacting with the software.",
    deliverables: ["Bug-Fix Warranty", "System Health Monitoring", "Staff Handover Guide"],
    illustrationId: "support",
  },
  {
    number: "08",
    key: "grow",
    title: "GROW",
    headline: "Plan future improvements and additional features as the business evolves.",
    summary:
      "As your business expands and user feedback rolls in, we help plan subsequent iterations: additional payment methods, advanced reporting, automated pipelines, and new customer features.",
    deliverables: ["Feature Roadmap v2.0", "Performance Optimization", "Scale Consultation"],
    illustrationId: "grow",
  },
];
