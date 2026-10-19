# Patkar Infotech — Premium Company Website

Modern, high-performance company website for **Patkar Infotech**, a software development company that builds custom websites, mobile applications, and business software for clients in India and internationally.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Company Identity & Brand Architecture

- **Company Name:** Patkar Infotech
- **Tagline:** Solutions That Empower
- **Brand Message:** *"We build websites, apps and software around your business."*
- **Headquarters:** Jabalpur, Madhya Pradesh, India
- **Contact:** +91 77238 21518 / info@patkarinfotech.com
- **Verified Client Work:** CareOn24 Home Healthcare Platform (`https://www.careon24.com/`)

---

## 2. Key Features & Sections

1. **Sticky Navigation Bar:**
   - Official Patkar Infotech emblem and typography lockup.
   - Smooth-scrolling links to Home, Services, Our Work, About Us, Our Process, and Contact.
   - Prominent "Start a Project" button and accessible mobile drawer menu.

2. **Hero Section:**
   - High-impact headline: *"Your Business Idea. Our Technology. Built to Work."*
   - Compact capability indicator: *Websites &middot; Mobile Apps &middot; Custom Software &middot; Admin Panels*.
   - **Interactive Multi-Device Showcase:** High-fidelity, real-looking previews for Web Platforms, Native Mobile Applications, and Admin Consoles with real readable data.

3. **Core Services (Editorial Grid):**
   - Website Development
   - Mobile App Development
   - Custom Software Development
   - Admin Panels and Dashboards
   - E-commerce Development
   - Business Management Systems
   - Deep-dive dynamic routes for every service at `/services/[slug]`.

4. **Portfolio & Case Studies:**
   - Filterable showcase across Healthcare, Travel & Booking, Business Management, Document Tools, E-commerce, and Delivery Services.
   - Verified client delivery badge for CareOn24 alongside clearly labeled demonstration architecture projects.
   - Dedicated case study pages at `/projects/[slug]`.

5. **About Patkar Infotech:**
   - Pragmatic, business-first development philosophy.
   - 5 core principles: Requirement-focused development, Clear project communication, Custom-built solutions, Frontend/backend/admin systems, and Testing & deployment support.
   - Architectural stack visual diagram.

6. **Why Patkar Infotech?:**
   - 4-pillar practical engineering value proposition.

7. **Development Process:**
   - Proven 8-step methodology: **01 Discuss, 02 Plan, 03 Design, 04 Develop, 05 Test, 06 Launch, 07 Support, 08 Grow**.
   - 8 bespoke, unified vector illustrations in Patkar blue and white visual styling.

8. **Technology Stack:**
   - Minimalist grid highlighting React, Next.js, TypeScript, React Native, Node.js, PostgreSQL, Supabase, Firebase, and REST APIs.

9. **Project Inquiry System:**
   - Validated inquiry form capturing Full Name, Company, Email, Phone, Project Type, Estimated Budget, and Description.
   - Integrated API backend at `/api/inquiry` saving to persistent storage.
   - Instant WhatsApp prefilled inquiry handover.

10. **WhatsApp Integration:**
    - Floating quick-contact widget with tooltip and prefilled inquiry message.
    - Centralized number configuration in `src/lib/config.ts`.

11. **Legal Pages:**
    - Full Privacy Policy (`/privacy-policy`) and Terms & Conditions (`/terms`).

---

## 3. Project Structure

```
├── public/                     # Static assets, logos, and svg previews
│   ├── brand-symbol.png        # Official Patkar emblem
│   ├── brand-wordmark.png      # Official typography wordmark
│   ├── patkar-infotech-logo.png# Combined company logo
│   └── images/                 # Project & service illustrations
├── src/
│   ├── app/
│   │   ├── api/inquiry/        # Project inquiry API route
│   │   ├── services/           # Services directory & dynamic slug pages
│   │   ├── projects/           # Case study dynamic slug pages
│   │   ├── work/               # Dedicated portfolio page
│   │   ├── about/              # Dedicated about page
│   │   ├── process/            # Dedicated process page
│   │   ├── contact/            # Dedicated contact page
│   │   ├── privacy-policy/     # Privacy Policy
│   │   ├── terms/              # Terms & Conditions
│   │   ├── globals.css         # Main stylesheet
│   │   ├── layout.tsx          # Root layout & SEO metadata
│   │   ├── page.tsx            # Main homepage
│   │   ├── robots.ts           # Search engine robots.txt generator
│   │   └── sitemap.ts          # Search engine XML sitemap generator
│   ├── components/
│   │   ├── brand-logo.tsx      # Responsive logo lockup
│   │   ├── hero-showcase.tsx   # Interactive product showcase
│   │   ├── inquiry-form.tsx    # Validated project inquiry form
│   │   ├── process-illustrations.tsx # 8 custom vector process illustrations
│   │   ├── site.tsx            # Main modular page sections
│   │   └── whatsapp-button.tsx # Floating WhatsApp contact button
│   └── lib/
│       ├── config.ts           # Centralized site & company configuration
│       ├── services.ts         # Service definitions & deliverables
│       ├── projects.ts         # Portfolio projects dataset
│       └── process.ts          # 8-step process dataset
```

---

## 4. Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+

### Installation
```bash
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local` and configure your settings:
```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain URL | `https://www.patkarinfotech.com` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Official inquiries email | `info@patkarinfotech.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code | `917723821518` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Official Instagram link | `https://www.instagram.com/guru3695495/` |

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
npm run start
```
