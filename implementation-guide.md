# The Miss Addie Education Fund (MAEF) — Web Implementation Guide

This guide is designed for an autonomous coding agent to implement the foundational React application step by step. Use the task checkboxes `[ ]` / `[x]` to track progress and ensure clean handoff between agents.

---

## 1. Project Overview & Architecture Principles

* **Objective:** Fast, lightweight, accessible web portal for The Miss Addie Education Fund.


* **Tech Stack:** React (TypeScript) + Vite + Tailwind CSS + Lucide Icons + React Router (`react-router-dom`).
* **Data Strategy:** Zero backend / Zero API dependency on initial load. All text and leadership details must live in a central static file (`src/data/fundContent.json`) so future edits do not require touching JSX layout components.
* **Visual Aesthetic:** Clean minimalist typography, high contrast, warm neutral backgrounds (`stone-50` / `zinc-50`), rich forest green / deep emerald accents (`emerald-900`, `emerald-700`), generous white space, and responsive image containers with placeholders.

---

## 2. Implementation Checklist & Phase Tracking

### Phase 1: Environment & Project Scaffolding

* [ ] **1.1 Initialize Project:** Scaffold a new React + TypeScript project using Vite:
```bash
npm create vite@latest miss-addie-fund -- --template react-ts
cd miss-addie-fund

```


* [ ] **1.2 Install Core Dependencies:**
```bash
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```


* [ ] **1.3 Configure Tailwind CSS:** Update `tailwind.config.js` to include standard paths:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f9f5",
          100: "#e1f2e8",
          500: "#227248",
          700: "#175234",
          800: "#13422a",
          900: "#0c281a",
        },
      },
    },
  },
  plugins: [],
};

```


* [ ] **1.4 Setup Directory Structure:**
```text
src/
├── assets/
│   └── images/               # Local static images / logos
├── components/
│   ├── Navbar.tsx            # Responsive navigation header
│   ├── Footer.tsx            # Simple community footer
│   ├── ImagePlaceholder.tsx  # Fallback/aspect-ratio box for photos
│   └── SectionHeader.tsx     # Standard typography header component
├── data/
│   └── fundContent.json      # Single source of truth for site copy
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── About.tsx             # History, Miss Addie legacy, H.E.A.T.
│   ├── Principles.tsx        # 6 core operating principles
│   ├── Administrators.tsx    # Leadership & advisory committee grid
│   └── Eligibility.tsx       # Requirements, process, and application steps
├── App.tsx                   # BrowserRouter & layout wrapper
└── main.tsx

```



---

### Phase 2: Static Data Architecture (`src/data/fundContent.json`)

* [ ] **2.1 Populate Static Content Store:** Create `src/data/fundContent.json` containing the official text extracted from the fund guidelines:


```json
{
  "fundName": "The Miss Addie Education Fund",
  "tagline": "A Moore Town sustainable education framework for community – by community",
  "vision": "Empower young people in Moore Town and the upper Rio Grande Valley to access and complete quality education and skills training, supported by community-led funding and mentorship to enable beneficiaries to meaningfully contribute to community and nation building.",
  "mission": "To support young people in building brighter futures through learning, guidance, and community support.",
  "launchInfo": {
    "date": "March 29, 2026",
    "occasion": "Memorial service of Viola Minott (Miss Addie)",
    "initiative": "Bringing the H.E.A.T. (Health, Education, Agriculture, and Tourism) to Portland"
  },
  "keyPrinciples": [
    {
      "title": "Dignity over charity",
      "description": "Fostering respect, self-determination, and mutual elevation rather than transactional hand-outs."
    },
    {
      "title": "Equity over competition",
      "description": "Prioritizing support based on unique personal and household barriers over purely academic contest."
    },
    {
      "title": "Mentorship is just as important as money",
      "description": "Pairing every financial disbursement with active role-model engagement and personal guidance."
    },
    {
      "title": "Community ownership",
      "description": "Rooted in the leadership, traditions, and direct participation of the Rio Grande Valley community."
    },
    {
      "title": "Transparency and accountability",
      "description": "Clear governance, published outcomes, and open stewardship of all community contributions."
    },
    {
      "title": "Learning and adaptation",
      "description": "Continually evolving the framework through learner feedback and reflection."
    }
  ],
  "administrators": [
    {
      "name": "Roma Robinson",
      "role": "Co-Chair & Account Manager",
      "category": "Executive Committee"
    },
    {
      "name": "Steve Wright",
      "role": "Co-Chair & Mentorship Lead",
      "category": "Executive Committee"
    },
    {
      "name": "Kianna Kilburn",
      "role": "Secretary",
      "category": "Executive Committee"
    },
    {
      "name": "Nathaniel Minott",
      "role": "Advisor",
      "category": "Advisory Board"
    },
    {
      "name": "Wilton Stevens",
      "role": "Advisor",
      "category": "Advisory Board"
    },
    {
      "name": "Erva-Jean Stevens-Murphy",
      "role": "Advisor",
      "category": "Advisory Board"
    }
  ],
  "coverage": {
    "academic": [
      "Tuition and registration fees",
      "Books and stationeries",
      "Transportation (where required)",
      "Exam fees or certification costs"
    ],
    "mentorship": [
      "One-to-one or small group mentoring",
      "Academic guidance and tracking",
      "Life skills and leadership development",
      "Career exposure and role-model engagement"
    ]
  }
}

```



---

### Phase 3: Shared UI & Photo Placeholder Components

* [ ] **3.1 Navigation (`src/components/Navbar.tsx`):**
* Clean brand title linking to `/`.


* Clean links: *About Us*, *Key Principles*, *Fund Administrators*, *Eligibility & Apply*.


* Mobile-responsive hamburger drawer using Lucide icons (`Menu`, `X`).


* [ ] **3.2 Footer (`src/components/Footer.tsx`):**
* Tagline: *"A Moore Town sustainable education framework for community – by community"*.


* Quick links and tribute notice: *"In honor of Viola Minott (Miss Addie)"*.




* [ ] **3.3 Image Placeholder Helper (`src/components/ImagePlaceholder.tsx`):**
* Provides uniform aspect ratios (`aspect-video`, `aspect-square`, `aspect-[4/3]`) with subtle background shades, a centered photo icon, and customizable caption/dimensions so future photos can be dropped in seamlessly.


```tsx
interface Props {
  aspectRatio?: string;
  caption?: string;
  className?: string;
}

export const ImagePlaceholder = ({ 
  aspectRatio = "aspect-video", 
  caption = "Photo placeholder", 
  className = "" 
}: Props) => (
  <div className={`w-full ${aspectRatio} bg-stone-100 border border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center text-stone-400 p-4 text-center ${className}`}>
    <svg className="w-8 h-8 mb-2 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <span className="text-xs font-medium uppercase tracking-wider text-stone-500">{caption}</span>
  </div>
);

```



---

### Phase 4: Page Construction

* [ ] **4.1 Landing Page (`src/pages/Home.tsx`):**
* **Hero Section:** Clean typographical hero with large title, primary tagline, and dual CTA buttons (`View Eligibility`, `Read Our Story`).


* **Photo Area:** Insert an `aspect-[21/9]` or `aspect-video` placeholder for a landscape shot of Moore Town / Rio Grande Valley.


* **Core Vision & Mission Cards:** Highlighting community empowerment, skills training, and guidance.


* **Principle Teaser Grid:** 3 summary cards teasing the core pillars.




* [ ] **4.2 About Us (`src/pages/About.tsx`):**
* **Memorial Tribute Section:** Detailed narrative about Miss Addie (Viola Minott), her devotion to Moore Town, and her legacy of kindness and encouragement.


* **Portrait Placeholder:** `aspect-[4/5]` portrait placeholder slot for Miss Addie’s memorial photo.


* **The Launch & H.E.A.T. Foundation:** Details regarding the March 29, 2026 launch at her memorial service and alignment with the Health, Education, Agriculture, and Tourism (H.E.A.T.) initiative.


* **Scope of Coverage:** Two-column grid outlining direct Academic Support vs. Mentorship Support.




* [ ] **4.3 Key Principles (`src/pages/Principles.tsx`):**
* Minimalist numbered layout (1 through 6) rendering each principle from `fundContent.json`:


1. *Dignity over charity*

2. *Equity over competition*

3. *Mentorship is just as important as money*

4. *Community ownership*

5. *Transparency and accountability*

6. *Learning and adaptation*



* Space for a community photo banner (`aspect-[16/7]`).


* [ ] **4.4 Fund Administrators (`src/pages/Administrators.tsx`):**
* Grid layout dividing Executive Officers and Advisory Board.


* Administrator cards displaying:
* Dedicated circular avatar / photo placeholder (`w-24 h-24 rounded-full`).
* Name.


* Role title (Co-Chair, Secretary, Advisor).


* Responsibilities badge (e.g., Mentorship Lead, Account Manager).






* [ ] **4.5 Eligibility & Steps to Apply (`src/pages/Eligibility.tsx`):**
* **Eligibility Checklist:**
* Geographic qualification: Moore Town or upper Rio Grande Valley resident.


* Approved pathways: Secondary school, Vocational, College/University, Accredited short-course skills training.




* **Submission Requirements:**
* Written Statement of Need (explaining purpose and how applicant will pay it forward).


* Household Context self-declaration.


* 1 Community Reference Letter (teacher, faith leader, youth worker, or community elder evaluating character and commitment).


* Mentorship commitment agreement.




* **Four-Step Visual Timeline:**
1. Submission of Statement & Context


2. Administrator Review & Verification


3. Conversation / Interview


4. Formal Acceptance & Learner Agreement Signing




* **Learner Agreement & Cancellation Terms:** Clear summary of the agreement terms and conditions for support continuation.





---

### Phase 5: Handoff Verification & Antigravity Readiness

* [ ] **5.1 Zero Build Errors:** Ensure `npm run build` runs with zero TypeScript or Tailwind compilation errors.
* [ ] **5.2 Routing Integrity:** Verify all links between the 5 pages resolve cleanly with no broken internal routes.
* [ ] **5.3 Mobile & Responsive Check:** Verify navbar collapse and responsive grid columns across screen sizes (mobile, tablet, desktop).
* [ ] **5.4 Image Slot Tagging:** Ensure every `ImagePlaceholder` has a descriptive label (e.g., `"Moore Town Valley Landscape"`, `"Miss Addie Memorial Portrait"`, `"Administrator - Roma Robinson"`) so the next agent or designer can replace them with actual media assets without guessing.
