# 5-STAR.AI — Google Reviews & Replies Management System

> **5-STAR.AI powered Google Reviews and Replies.**  
> Ethical, high-conversion reputation management that invites genuine Google reviews, catches private feedback before public venting, and drafts authentic replies in seconds.

---

## 🌟 Overview

**5-STAR.AI** is a modern reputation platform designed for local businesses, multi-location brands, and marketing agencies. It provides an automated, compliant system to turn everyday customer satisfaction into verified 5-star Google reviews while giving customers 100% control over their words.

Unlike deceptive gating tools or spam generators, 5-STAR.AI operates with complete policy transparency: customers always choose what to say and whether to publish publicly on Google or submit private resolution feedback.

---

## ✨ Key Features

- **Interactive Review & Reply Simulator**:
  - Live customer-facing prompt builder for positive review inspiration.
  - One-click thoughtful reply assistant for business owners.
  - Full customer editability & text sovereignty.
- **Agency & Multi-Location Management**:
  - Centralized dashboard for review velocity, average ratings, and pending replies.
  - Multi-tenant brand switcher and sub-account provisioning.
- **Smart Feedback Routing**:
  - Delighted customers are guided smoothly to leave authentic reviews on Google.
  - Constructive/critical experiences are redirected to an internal, private feedback channel for immediate customer recovery.
- **Editorial Brand Experience**:
  - Responsive dark-mode interface styled with Tailwind CSS v4.
  - Fully responsive typography and lockups supporting mobile, tablet, and desktop viewports.
- **Guided 7-Day Trial Onboarding**:
  - Step-by-step interactive consultation and trial request flow.
  - No credit card required.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) SDK for generative intelligence
- **Fonts**: *Newsreader* & *Plus Jakarta Sans*

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20+ recommended)
- `npm`, `pnpm`, or `bun`

### Installation

1. Clone or open the repository:
   ```bash
   git clone <repository-url>
   cd 5-star-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env.local` if custom keys are needed:
   ```bash
   cp .env.example .env.local
   ```
   - `GEMINI_API_KEY`: API key for generative review/reply drafting capabilities.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Runs the Vite dev server on port 3000 |
| **Build** | `npm run build` | Compiles and bundles production assets into `dist/` |
| **Preview** | `npm run preview` | Previews the production build locally |
| **Lint / Typecheck** | `npm run lint` | Runs `tsc --noEmit` to validate all TypeScript code |
| **Clean** | `npm run clean` | Cleans up the `dist` directory |

---

## 📁 Project Structure

```text
├── index.html                   # HTML entry point with meta tags & Google fonts
├── metadata.json                # Project capabilities & permissions manifest
├── package.json                 # Dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite build configuration
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Main layout, view switching & state management
│   ├── index.css                # Tailwind CSS v4 entry point & theme tokens
│   └── components/
│       ├── BrandLogo.tsx        # 5-STAR.AI icon, wordmark & Google logo components
│       ├── Header.tsx           # Sticky top navigation & mobile drawer
│       ├── Hero.tsx             # Marquee hero with responsive branding & CTAs
│       ├── ReviewGeneratorDemo.tsx # Interactive review & reply simulation tool
│       ├── ProductPreview.tsx   # Dashboard preview & feature breakdown
│       ├── HowItWorks.tsx       # 3-step operational workflow
│       ├── Features.tsx         # Enterprise & agency feature grid
│       ├── PricingSection.tsx   # Transparent tier pricing & FAQ preview
│       ├── FAQSection.tsx       # Frequently asked questions & compliance details
│       ├── TrialModal.tsx       # 7-day trial request modal dialog
│       ├── TrialRequestSection.tsx # Bottom conversion card
│       ├── PolicyModal.tsx      # Google compliance & terms disclosure modal
│       └── Footer.tsx           # Footer with links, copyright & disclosures
```

---

## 🛡️ Compliance & Ethics

5-STAR.AI strictly adheres to Google Business Profile and Federal Trade Commission (FTC) guidelines:
- **No Review Gating**: Customers are never prevented from leaving public feedback.
- **Customer Control**: AI generates draft suggestions; the customer maintains complete ownership of what they post.
- **Genuine Experiences**: We do not purchase, incentivize, or fake reviews.
