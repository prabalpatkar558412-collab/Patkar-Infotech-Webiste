"use client";

import { useEffect, useRef } from "react";
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
  const viewport = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeAt = useRef(0);
  useEffect(() => {
    const node = viewport.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let previous = 0;
    let position = node.scrollLeft;
    const animate = (now: number) => {
      const elapsed = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      if (!paused.current && now > resumeAt.current) {
        const loopWidth = node.scrollWidth / 2;
        position += elapsed * .035;
        if (loopWidth > 0 && position >= loopWidth) position -= loopWidth;
        node.scrollLeft = position;
      } else position = node.scrollLeft;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <section className="work-capabilities-section" aria-label="Website services and capabilities">
      <div ref={viewport} className="work-capabilities-viewport" tabIndex={0} role="region" aria-label="Scrolling services. Hover or focus to pause; swipe to browse." onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }} onFocus={() => { paused.current = true; }} onBlur={() => { paused.current = false; }} onTouchStart={() => { paused.current = true; }} onTouchEnd={() => { paused.current = false; resumeAt.current = performance.now() + 2500; }}>
      <div className="work-capabilities-track">
      {[false, true].map((duplicate) => (
      <ul className="work-capabilities-grid" key={String(duplicate)} aria-hidden={duplicate || undefined}>
        {services.map(({ title, description, icon: Icon }) => (
          <li className="work-capabilities-card" key={title}>
            <Icon className="work-capabilities-icon" size={42} strokeWidth={1.6} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      ))}
      </div>
      </div>
    </section>
  );
}
