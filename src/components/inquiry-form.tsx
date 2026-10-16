"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  Building,
  User,
  Layers,
  IndianRupee,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L.1 24l6.27-1.64a11.94 11.94 0 0 0 5.7 1.45h.01c6.57 0 11.91-5.34 11.92-11.91a11.85 11.85 0 0 0-3.48-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.72.98.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88Z"
      />
      <path
        fill="currentColor"
        d="M17.5 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.46-2.39-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

interface FormDataState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  description?: string;
  general?: string;
}

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    inquiryId: string;
    timestamp: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please provide your full name (at least 2 characters).";
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone or WhatsApp number.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select the type of product you want to build.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      newErrors.description =
        "Please provide a short description of your project (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData({
          inquiryId: result.inquiryId,
          timestamp: result.timestamp,
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({
            general:
              result.message ||
              "Could not complete online submission. Please try sending directly via WhatsApp.",
          });
        }
      }
    } catch {
      setErrors({
        general:
          "Network connectivity issue. You can instantly send your inquiry details via WhatsApp below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build prefilled WhatsApp message
  const constructWhatsAppMessage = () => {
    const lines = [
      `*New Project Inquiry for Patkar Infotech*`,
      `*Name:* ${formData.name || "Client"}`,
      formData.company ? `*Company:* ${formData.company}` : "",
      `*Phone:* ${formData.phone || "Not specified"}`,
      `*Email:* ${formData.email || "Not specified"}`,
      `*Project Type:* ${formData.projectType || "General Inquiry"}`,
      formData.budget ? `*Budget:* ${formData.budget}` : "",
      `*Requirements:* ${formData.description || "Looking to discuss project details"}`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  };

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${constructWhatsAppMessage()}`;

  return (
    <div className="inquiry-card-wrapper" id="inquiry">
      {submittedData ? (
        <div className="inquiry-success-panel" role="status">
          <div className="success-icon-badge">
            <CheckCircle2 size={36} className="text-emerald-600" />
          </div>
          <h3>Inquiry Received Successfully</h3>
          <p className="success-lead">
            Thank you, <strong>{formData.name}</strong>. Your project inquiry has been
            registered with reference ID:
          </p>
          <div className="reference-code-box">
            <span>Reference ID:</span>
            <strong>{submittedData.inquiryId}</strong>
          </div>
          <p className="success-meta">
            Our technical team will review your requirements and get in touch via{" "}
            <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to discuss
            the project scope and development approach.
          </p>

          <div className="success-actions">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-whatsapp"
            >
              <WhatsAppIcon /> Fast-Track on WhatsApp
            </a>
            <button
              type="button"
              className="button button-outline"
              onClick={() => {
                setSubmittedData(null);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  projectType: "",
                  budget: "",
                  description: "",
                });
              }}
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <div className="form-alert-banner alert-error" role="alert">
              <AlertCircle size={16} />
              <span>{errors.general}</span>
            </div>
          )}

          <div className="form-grid-2">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <User size={15} className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Vikram Chaudhary"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? "has-error" : ""}`}
                  autoComplete="name"
                  required
                />
              </div>
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            {/* Business / Company Name */}
            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Business or Company Name
              </label>
              <div className="input-with-icon">
                <Building size={15} className="input-icon" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g. Chaudhary Enterprises"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  autoComplete="organization"
                />
              </div>
            </div>
          </div>

          <div className="form-grid-2">
            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <Mail size={15} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? "has-error" : ""}`}
                  autoComplete="email"
                  required
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number / WhatsApp <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <Phone size={15} className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? "has-error" : ""}`}
                  autoComplete="tel"
                  required
                />
              </div>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-grid-2">
            {/* Project Type */}
            <div className="form-group">
              <label htmlFor="projectType" className="form-label">
                Project Type <span className="req">*</span>
              </label>
              <div className="input-with-icon">
                <Layers size={15} className="input-icon" />
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`form-select ${errors.projectType ? "has-error" : ""}`}
                  required
                >
                  <option value="" disabled>
                    Select project type...
                  </option>
                  <option value="Website">Website Development</option>
                  <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                  <option value="Custom Software">Custom Software Development</option>
                  <option value="E-commerce">E-commerce Development</option>
                  <option value="Admin Panel">Admin Panel and Dashboards</option>
                  <option value="Business Management System">Business Management System / ERP</option>
                  <option value="Other">Other Specialized Solution</option>
                </select>
              </div>
              {errors.projectType && (
                <span className="field-error">{errors.projectType}</span>
              )}
            </div>

            {/* Estimated Budget */}
            <div className="form-group">
              <label htmlFor="budget" className="form-label">
                Estimated Budget (Optional)
              </label>
              <div className="input-with-icon">
                <IndianRupee size={15} className="input-icon" />
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Flexible / To be discussed</option>
                  <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Small / MVP)</option>
                  <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Standard)</option>
                  <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000 (Comprehensive)</option>
                  <option value="₹2,50,000+">₹2,50,000+ (Full Enterprise Suite)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Project Description <span className="req">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Tell us what you want to achieve, key features required, and any target timelines..."
              value={formData.description}
              onChange={handleChange}
              className={`form-textarea ${errors.description ? "has-error" : ""}`}
              required
            />
            {errors.description && (
              <span className="field-error">{errors.description}</span>
            )}
          </div>

          {/* Submit Row */}
          <div className="form-submit-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button button-blue button-submit"
            >
              {isSubmitting ? "Submitting..." : "Submit Project Inquiry"}
              <ArrowRight size={16} />
            </button>

            <span className="or-divider">or</span>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button button-whatsapp-secondary"
              title="Chat directly with our engineering team on WhatsApp"
            >
              <WhatsAppIcon /> Direct WhatsApp Inquiry
            </a>
          </div>

          <div className="form-footer-notice">
            <HelpCircle size={13} className="text-slate-400" />
            <span>
              We review every requirement carefully before proposing scope and costs. No spam or aggressive follow-ups.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
