export interface CompanyConfig {
  name: string;
  tagline: string;
  brandMessage: string;
  subheadline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  city: string;
  state: string;
  country: string;
  addressFormatted: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  social: {
    instagram: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: CompanyConfig = {
  name: "Patkar Infotech",
  tagline: "Solutions That Empower",
  brandMessage: "We build websites, apps and software around your business.",
  subheadline:
    "From business websites and mobile applications to custom software systems, we help turn your ideas into practical digital products built around your requirements.",
  phone: "7723821518",
  phoneFormatted: "+91 77238 21518",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "infotechpatkar@gmail.com",
  city: "Jabalpur",
  state: "Madhya Pradesh",
  country: "India",
  addressFormatted: "Jabalpur, Madhya Pradesh, India",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917723821518",
  whatsappDefaultMessage:
    "Hello Patkar Infotech team, I would like to discuss a software development project for my business.",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/guru3695495/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/",
  },
  navigation: [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/#work" },
    { label: "About Us", href: "/#about" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],
};
