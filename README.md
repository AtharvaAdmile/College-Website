 # 🎓 ASC College Website

A modern, responsive college website for **Arts, Science & Commerce (ASC) College**, built with React and Tailwind CSS. The site showcases academic departments, faculty profiles, campus life, and provides an admission inquiry system — all wrapped in a clean, professional design.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-grey)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Components](#-components)
- [Data Layer](#-data-layer)
- [Scripts](#-scripts)
- [License](#-license)

---

## ✨ Features

- **Responsive Design** — Fully mobile-friendly with a collapsible hamburger navigation
- **6 Core Pages** — Home, About, Departments, Department Detail, Faculty, and Contact
- **Dynamic Routing** — Client-side routing with React Router v7 (including parameterized routes for individual departments)
- **Reusable UI Kit** — Modular components like Card, Button, Input, Accordion, Modal, and SectionTitle
- **Admission Inquiry Form** — Complete form with field-level validation, error states, and success feedback
- **Data-Driven Content** — All departments, faculty, FAQs, testimonials, and facilities are driven by JSON data files
- **Image-Rich** — Hero backgrounds, faculty portraits, gallery images, and campus photography
- **Interactive Elements** — Hover effects, image zoom transitions, FAQ accordion, and animated timeline
- **SEO-Friendly** — Semantic HTML structure with proper heading hierarchy

---

## 🛠 Tech Stack

| Layer       | Technology                                                    |
| ----------- | ------------------------------------------------------------- |
| Framework   | [React 19](https://react.dev/)                                |
| Build Tool  | [Vite 8](https://vite.dev/)                                   |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| Routing     | [React Router DOM 7](https://reactrouter.com/)                |
| Linting     | [ESLint 10](https://eslint.org/) with React Hooks & Refresh plugins |
| Language    | JavaScript (JSX)                                              |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd college-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
college-website/
├── public/                     # Static assets served as-is
│   ├── favicon.svg
│   ├── icons.svg
│   └── *.png                   # Faculty portrait images
│
├── src/
│   ├── assets/                 # Imported assets (bundled by Vite)
│   │   ├── hero-bg.png         # Hero section background
│   │   ├── about-students.png  # About section image
│   │   ├── gallery-*.png       # Gallery images
│   │   └── *.png               # Faculty photos
│   │
│   ├── components/
│   │   ├── common/             # App-wide shared components
│   │   │   ├── Navbar.jsx      # Sticky nav with mobile hamburger menu
│   │   │   └── Footer.jsx      # Site-wide footer with links & contact
│   │   │
│   │   ├── layout/
│   │   │   └── PageLayout.jsx  # Wrapper component for page content
│   │   │
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── Accordion.jsx   # Expandable FAQ accordion
│   │       ├── Button.jsx      # Button with variant support
│   │       ├── Card.jsx        # Flexible card (image, badge, footer)
│   │       ├── Input.jsx       # Form input with label & error state
│   │       ├── Loader.jsx      # Loading spinner
│   │       ├── Modal.jsx       # Overlay modal dialog
│   │       └── SectionTitle.jsx# Section heading with alignment
│   │
│   ├── data/                   # Static JSON data files
│   │   ├── departments.json    # 6 departments (CS, Physics, etc.)
│   │   ├── faculty.json        # 8 faculty members with profiles
│   │   ├── facilities.json     # Campus facility descriptions
│   │   ├── faq.json            # 5 frequently asked questions
│   │   ├── highlights.json     # Stats (students, faculty, courses)
│   │   └── testimonials.json   # Student testimonials
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx            # Landing page with hero, previews, stats
│   │   ├── About.jsx           # College story, vision, timeline
│   │   ├── Departments.jsx     # Department listing
│   │   ├── DepartmentDetail.jsx# Individual department view
│   │   ├── Faculty.jsx         # Faculty directory
│   │   └── Contact.jsx         # Admission form & FAQ
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx       # All route definitions
│   │
│   ├── styles/                 # (Reserved for additional stylesheets)
│   ├── App.jsx                 # Root component (Router + Layout)
│   ├── App.css                 # Legacy / supplementary styles
│   ├── index.css               # Tailwind imports & theme config
│   └── main.jsx                # React DOM entry point
│
├── index.html                  # HTML shell
├── vite.config.js              # Vite + React + Tailwind plugin config
├── eslint.config.js            # ESLint configuration
├── package.json
└── package-lock.json
```

---

## 📄 Pages

### Home (`/`)
The main landing page featuring:
- **Hero Banner** — Full-width background image with gradient overlay, CTA buttons
- **About Preview** — Brief introduction with campus photo
- **Featured Departments** — Top 3 department cards with "Learn More" links
- **Highlights Stats** — Key numbers (5000+ students, 250+ faculty, 45+ courses, 38+ years)
- **Testimonials** — Student quotes in a 3-column grid
- **Gallery** — Campus and event photography with hover zoom effects

### About (`/about`)
- **College Introduction** — Founding story with campus building photo
- **Vision & Mission** — Side-by-side cards
- **Principal's Message** — Quote with portrait photo
- **Timeline** — Color-coded milestones from 1985 to 2023
- **Campus Facilities** — Grid of facility cards (library, labs, sports, etc.)

### Departments (`/departments`)
- Filterable listing of all 6 departments (Computer Science, Physics, Chemistry, Mathematics, Commerce, English Literature)
- Each card shows the department name, category badge, description, and a link to its detail page

### Department Detail (`/departments/:id`)
- Dynamic route showing detailed information for a single department
- Pulled from `departments.json` based on the URL parameter

### Faculty (`/faculty`)
- Directory of 8 faculty members across all departments
- Each profile shows photo, name, department, qualification, email, and LinkedIn link

### Contact (`/contact`)
- **Admission Inquiry Form** — Fields for name, email, phone, course selection, address, and message with real-time validation
- **Contact Information** — Address, phone, email, and map placeholder
- **FAQ Section** — 5 expandable questions using the Accordion component

---

## 🧩 Components

### Common
| Component | Description |
|-----------|-------------|
| `Navbar`  | Sticky top navigation with desktop links and mobile hamburger toggle. Auto-closes on route change. |
| `Footer`  | Three-column footer with about blurb, quick links, and contact info. |

### Layout
| Component     | Description |
|---------------|-------------|
| `PageLayout`  | Simple wrapper that renders `children` — used by all pages for consistent structure. |

### UI Primitives
| Component      | Props / Features |
|----------------|------------------|
| `Button`       | `label`, `variant` (secondary, outline), `onClick`, `disabled`, `type` |
| `Card`         | `title`, `description`, `badge`, `footer`, `image`, `onClick`, `children` |
| `Input`        | `label`, `name`, `type` (text, email, textarea), `error`, `required`, `onBlur` |
| `Accordion`    | Accepts an `items` array of `{ question, answer }` objects |
| `Modal`        | Overlay dialog with backdrop click-to-close |
| `SectionTitle` | `title`, `align` — renders a styled `<h2>` heading |
| `Loader`       | Simple loading spinner |

---

## 📊 Data Layer

All content is stored as static JSON files in `src/data/`:

| File                | Records | Description |
|---------------------|---------|-------------|
| `departments.json`  | 6       | Department id, name, category, description, duration, faculty count |
| `faculty.json`      | 8       | Faculty id, name, department, qualification, email, photo, LinkedIn |
| `facilities.json`   | varies  | Campus facility title and description |
| `faq.json`          | 5       | Question and answer pairs |
| `highlights.json`   | 1       | Aggregate stats (students, faculty, courses, years) |
| `testimonials.json` | varies  | Student name, course, year, quote, photo |

> **Tip:** To add a new department or faculty member, simply add a new object to the corresponding JSON file — no code changes needed.

---

## 📜 Scripts

| Command            | Description                                |
|--------------------|--------------------------------------------|
| `npm run dev`      | Start Vite dev server with hot reload      |
| `npm run build`    | Create optimized production build          |
| `npm run preview`  | Preview the production build locally       |
| `npm run lint`     | Run ESLint across the project              |

---

## 🗺 Route Map

| Path                  | Page Component     | Description                  |
|-----------------------|--------------------|------------------------------|
| `/`                   | `Home`             | Landing page                 |
| `/about`              | `About`            | College info & history       |
| `/departments`        | `Departments`      | All departments listing      |
| `/departments/:id`    | `DepartmentDetail` | Single department detail     |
| `/faculty`            | `Faculty`           | Faculty directory            |
| `/contact`            | `Contact`          | Admissions & inquiries       |

---

## 📝 License

This project is **private** and not currently published under an open-source license.
