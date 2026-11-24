export const PROJECT_TYPES = [
  "Website", "Mobile Application", "Custom Software", "E-commerce",
  "Admin Panel", "Business Management System", "Other",
] as const;

export const INQUIRY_LIMITS = {
  name: 100, company: 150, email: 254, phone: 32,
  projectType: 50, budget: 100, description: 2000,
} as const;

export type InquiryField = keyof typeof INQUIRY_LIMITS;
export type InquiryData = Record<InquiryField, string>;
export type InquiryErrors = Partial<Record<InquiryField | "general", string>>;

export const EMPTY_INQUIRY: InquiryData = {
  name: "", company: "", email: "", phone: "", projectType: "", budget: "", description: "",
};

export function validateInquiry(input: unknown): { data: InquiryData; errors: InquiryErrors } {
  const data = { ...EMPTY_INQUIRY };
  const errors: InquiryErrors = {};
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { data, errors: { general: "Please provide your project details as a JSON object." } };
  }
  const values = input as Record<string, unknown>;
  for (const field of Object.keys(INQUIRY_LIMITS) as InquiryField[]) {
    const value = values[field];
    if (value !== undefined && typeof value !== "string") {
      errors[field] = "Please enter text in this field.";
      continue;
    }
    data[field] = typeof value === "string" ? value.trim() : "";
    if (data[field].length > INQUIRY_LIMITS[field]) {
      errors[field] = `Please use ${INQUIRY_LIMITS[field]} characters or fewer.`;
    }
  }
  if (!errors.name && data.name.length < 2) errors.name = "Please enter your full name (at least 2 characters).";
  if (!errors.company && !data.company) errors.company = "Please enter your business or company name.";
  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  const digits = data.phone.replace(/\D/g, "");
  if (!errors.phone && (!/^[+\d\s().-]+$/.test(data.phone) || digits.length < 10 || digits.length > 15)) {
    errors.phone = "Please enter a valid phone number with 10–15 digits.";
  }
  if (!errors.projectType && !PROJECT_TYPES.some((type) => type === data.projectType)) {
    errors.projectType = "Please select a project type from the list.";
  }
  if (!errors.description && data.description.length < 10) {
    errors.description = "Please describe your project in at least 10 characters.";
  }
  return { data, errors };
}

export function inquiryMessage(data: InquiryData) {
  return [
    "New Project Inquiry | Patkar Infotech", "",
    "Hello Patkar Infotech team,", "I would like to discuss a project. Here are my details:", "",
    `Full Name: ${data.name}`, `Business / Company: ${data.company}`,
    `Phone / WhatsApp: ${data.phone}`, `Email: ${data.email}`, "",
    `Project Type: ${data.projectType}`,
    ...(data.budget ? [`Estimated Budget: ${data.budget}`] : []), "",
    "Project Requirements:", data.description, "",
    "Please let me know the next steps, estimated timeline and quotation.", "Thank you!",
  ].join("\n");
}

export function inquiryLinks(data: InquiryData, whatsappNumber: string, email: string) {
  const message = encodeURIComponent(inquiryMessage(data));
  return {
    whatsappUrl: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${message}`,
    emailUrl: `mailto:${email}?subject=${encodeURIComponent(`Project Inquiry: ${data.projectType}`)}&body=${message}`,
  };
}
