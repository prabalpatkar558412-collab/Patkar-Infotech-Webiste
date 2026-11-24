"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { Building, CheckCircle2, HelpCircle, Mail, Phone, User } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { EMPTY_INQUIRY, INQUIRY_LIMITS, PROJECT_TYPES, inquiryLinks, inquiryMessage, validateInquiry, type InquiryData, type InquiryErrors, type InquiryField } from "@/lib/inquiry";

const projectLabels: Record<string, string> = {
  Website: "Website Development",
  "Mobile Application": "Mobile Application (iOS / Android)",
  "Custom Software": "Custom Software Development",
  "E-commerce": "E-commerce Development",
  "Admin Panel": "Admin Panels and Dashboards",
  "Business Management System": "Business Management System / ERP",
  Other: "Other Specialized Solution",
};

const textFields = [
  { name: "name", label: "Full Name", placeholder: "Your full name", type: "text", autoComplete: "name", Icon: User },
  { name: "company", label: "Business or Company Name", placeholder: "Your business name", type: "text", autoComplete: "organization", Icon: Building },
  { name: "email", label: "Email Address", placeholder: "name@company.com", type: "email", autoComplete: "email", Icon: Mail },
  { name: "phone", label: "Phone Number / WhatsApp", placeholder: "+91 98765 43210", type: "tel", autoComplete: "tel", Icon: Phone },
] as const;

export function ProjectInquiryForm() {
  const [formData, setFormData] = useState<InquiryData>({ ...EMPTY_INQUIRY });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [prepared, setPrepared] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  useEffect(() => {
    if (prepared) reviewRef.current?.focus();
  }, [prepared]);

  function update(field: InquiryField, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const result = validateInquiry(formData);
    setErrors(result.errors);
    if (Object.keys(result.errors).length) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return false;
    }
    setFormData(result.data);
    return true;
  }

  const links = inquiryLinks(formData, siteConfig.whatsappNumber, siteConfig.email);
  const fieldProps = (field: InquiryField) => ({
    id: `${formId}-${field}`,
    name: field,
    value: formData[field],
    maxLength: INQUIRY_LIMITS[field],
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${formId}-${field}-error` : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => update(field, event.target.value),
  });
  const fieldError = (field: InquiryField) => errors[field] ? <span id={`${formId}-${field}-error`} className="field-error">{errors[field]}</span> : null;

  return (
    <div className="inquiry-card-wrapper" id="inquiry">
      {prepared ? (
        <div className="inquiry-success-panel" ref={reviewRef} tabIndex={-1} aria-labelledby={`${formId}-review-title`}>
          <div className="success-icon-badge"><CheckCircle2 size={36} aria-hidden="true" /></div>
          <h3 id={`${formId}-review-title`}>Your Inquiry Is Ready to Send</h3>
          <p className="success-lead">Thank you, <strong>{formData.name}</strong>. Review your message, then send it to our team.</p>
          <pre className="inquiry-message-preview">{inquiryMessage(formData)}</pre>
          <p className="success-meta">Your inquiry reaches us after you press Send in WhatsApp or your email app.</p>
          <div className="success-actions">
            <a href={links.whatsappUrl} target="_blank" rel="noreferrer" className="button button-whatsapp">Open WhatsApp to Send</a>
            <a href={links.emailUrl} className="button button-outline"><Mail size={16} aria-hidden="true" /> Send by Email</a>
            <button type="button" className="button button-outline" onClick={() => {
              setPrepared(false);
              requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>("input")?.focus());
            }}>Edit Inquiry</button>
          </div>
        </div>
      ) : (
        <form className="inquiry-form" ref={formRef} noValidate onSubmit={(event) => {
          event.preventDefault();
          if (validate()) setPrepared(true);
        }}>
          <h3 className="inquiry-form-title">Tell Us About Your Project</h3>
          <p className="inquiry-form-intro">Fill in your details, review your message, and send it through WhatsApp or email. Fields marked * are required.</p>
          <div className="form-grid-2">
            {textFields.map(({ name, label, placeholder, type, autoComplete, Icon }) => (
              <div className="form-group" key={name}>
                <label htmlFor={`${formId}-${name}`} className="form-label">{label} <span className="req" aria-hidden="true">*</span></label>
                <div className="input-with-icon">
                  <Icon size={16} className="input-icon" aria-hidden="true" />
                  <input {...fieldProps(name)} type={type} placeholder={placeholder} autoComplete={autoComplete} required className={`form-input ${errors[name] ? "has-error" : ""}`} />
                </div>
                {fieldError(name)}
              </div>
            ))}
          </div>
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor={`${formId}-projectType`} className="form-label">Project Type <span className="req" aria-hidden="true">*</span></label>
              <select {...fieldProps("projectType")} required className={`form-select budget-select ${errors.projectType ? "has-error" : ""}`}>
                <option value="" disabled>Select project type…</option>
                {PROJECT_TYPES.map((type) => <option key={type} value={type}>{projectLabels[type]}</option>)}
              </select>
              {fieldError("projectType")}
            </div>
            <div className="form-group">
              <label htmlFor={`${formId}-budget`} className="form-label">Estimated Budget (Optional)</label>
              <select {...fieldProps("budget")} className="form-select budget-select">
                <option value="">Select a range…</option>
                <option value="Under ₹25,000">Under ₹25,000</option>
                <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                <option value="₹1,00,000+">₹1,00,000+</option>
                <option value="Let's discuss">Let’s discuss</option>
              </select>
              {fieldError("budget")}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor={`${formId}-description`} className="form-label">Project Description <span className="req" aria-hidden="true">*</span></label>
            <textarea {...fieldProps("description")} rows={5} placeholder="Tell us what you want to build, the key features, and your target timeline…" required className={`form-textarea ${errors.description ? "has-error" : ""}`} />
            {fieldError("description")}
            <span className="inquiry-character-count">{formData.description.length} / {INQUIRY_LIMITS.description} characters</span>
          </div>
          <div className="form-submit-row">
            <button type="submit" className="button button-blue button-submit">Review Project Inquiry</button>
            <a href={links.whatsappUrl} target="_blank" rel="noreferrer" className="button button-whatsapp-secondary" onClick={(event) => { if (!validate()) event.preventDefault(); }}>Send via WhatsApp</a>
          </div>
          <div className="form-footer-notice">
            <HelpCircle size={16} aria-hidden="true" />
            <span>Your details stay in this form until you choose to send them. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</span>
          </div>
        </form>
      )}
    </div>
  );
}
