"use client";

import React, { useState } from "react";
import {
  Layers,
  Smartphone,
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Code2,
  Check,
  Clock,
  ArrowRight,
  Sparkles,
  Calculator,
} from "lucide-react";

interface OptionType {
  id: string;
  label: string;
  category: string;
}

const productTypes = [
  { id: "website", label: "Business Website", icon: Globe, baseWeeks: "2–3 weeks" },
  { id: "mobile", label: "Mobile Application", icon: Smartphone, baseWeeks: "4–6 weeks" },
  { id: "custom", label: "Custom Software", icon: Code2, baseWeeks: "4–8 weeks" },
  { id: "admin", label: "Admin Panel / Dashboard", icon: LayoutDashboard, baseWeeks: "3–5 weeks" },
  { id: "ecommerce", label: "E-Commerce Store", icon: ShoppingBag, baseWeeks: "3–6 weeks" },
  { id: "erp", label: "Business ERP / Operations", icon: Layers, baseWeeks: "6–10 weeks" },
];

const featureOptions = [
  { id: "auth", label: "User Accounts & Role Permissions" },
  { id: "payment", label: "Payment Gateway (UPI, Cards, Netbanking)" },
  { id: "admin", label: "Dedicated Super-Admin Control Panel" },
  { id: "whatsapp", label: "WhatsApp & SMS Notifications" },
  { id: "analytics", label: "Operational Reports & KPI Exports" },
  { id: "tracking", label: "Realtime Live Status / GPS Tracking" },
  { id: "offline", label: "Offline Mode & Local Data Caching" },
  { id: "multivendor", label: "Multi-branch / Multi-vendor Support" },
];

export function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "admin",
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType = productTypes.find((t) => t.id === selectedType) || productTypes[0];

  const calculateTimeline = () => {
    const baseWeeks = parseInt(currentType.baseWeeks.split("–")[0], 10) || 2;
    const additional = Math.floor(selectedFeatures.length / 3);
    const min = baseWeeks + additional;
    const max = min + 2;
    return `${min}–${max} Weeks`;
  };

  const handleApplyToForm = () => {
    const inquirySection = document.getElementById("contact");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="estimator-container">
      <div className="estimator-header">
        <div className="estimator-badge">
          <Calculator size={13} className="text-sky-600" />
          <span>INTERACTIVE SCOPE PLANNER</span>
        </div>
        <h3>Plan Your Project Scope in 30 Seconds</h3>
        <p>
          Select what you want to build and the core features you need. See an estimated
          development timeline and apply it directly to your project inquiry.
        </p>
      </div>

      {/* Step 1: Platform Selection */}
      <div className="estimator-step">
        <span className="step-label">1. Choose Product Type</span>
        <div className="type-buttons-grid">
          {productTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                className={`type-btn ${isSelected ? "is-selected" : ""}`}
                onClick={() => setSelectedType(type.id)}
              >
                <Icon size={18} className={isSelected ? "text-sky-600" : "text-slate-500"} />
                <span className="type-btn-label">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Feature Selection */}
      <div className="estimator-step">
        <span className="step-label">2. Select Key Capabilities</span>
        <div className="features-checkbox-grid">
          {featureOptions.map((feat) => {
            const isChecked = selectedFeatures.includes(feat.id);
            return (
              <button
                key={feat.id}
                type="button"
                className={`feature-chip ${isChecked ? "is-checked" : ""}`}
                onClick={() => toggleFeature(feat.id)}
              >
                <span className={`check-circle ${isChecked ? "checked" : ""}`}>
                  {isChecked && <Check size={11} strokeWidth={3} />}
                </span>
                <span className="feature-text">{feat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Card */}
      <div className="estimator-summary-card">
        <div className="summary-left">
          <small>ESTIMATED DEVELOPMENT TIMELINE</small>
          <div className="timeline-highlight">
            <Clock size={20} className="text-sky-600" />
            <strong>{calculateTimeline()}</strong>
          </div>
          <p className="summary-sub">
            Includes requirement validation, UI screens, backend APIs, testing, and deployment setup.
          </p>
        </div>

        <div className="summary-right">
          <button
            type="button"
            className="button button-blue button-apply-estimate"
            onClick={handleApplyToForm}
          >
            Apply to Project Inquiry <ArrowRight size={15} />
          </button>
          <span className="summary-note">No obligation · Discuss scope with our engineers</span>
        </div>
      </div>
    </div>
  );
}
