import { Monitor, ShoppingCart, PanelsTopLeft, Search, Settings, Gauge } from "lucide-react";


const services = [
  { title: "Website Development", description: "Fast, secure and SEO-friendly websites tailored to your business goals.", icon: Monitor },
  { title: "E-Commerce Solutions", description: "Complete online store setup with secure payment gateway integration.", icon: ShoppingCart },
  { title: "UI/UX Design", description: "Modern, user-friendly designs that put your customers first.", icon: PanelsTopLeft },
  { title: "SEO Friendly", description: "Search-ready websites that help customers discover your business.", icon: Search },
  { title: "Website Maintenance", description: "Ongoing support and maintenance to keep your website updated.", icon: Settings },
  { title: "Speed Optimization", description: "Optimized websites for faster loading and smooth performance.", icon: Gauge },
];

export function WorkServices() {
  return (
    <section className="work-capabilities-section" aria-label="Website services and capabilities">
      <ul className="work-capabilities-grid">
        {services.map(({ title, description, icon: Icon }) => (
          <li className="work-capabilities-card" key={title}>
            <Icon className="work-capabilities-icon" size={42} strokeWidth={1.6} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
