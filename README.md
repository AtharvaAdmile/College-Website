# Arts, Science & Commerce College Website

A fully responsive, modern web application for a College, built as part of a React Internship Assessment. It features a premium design, complete routing, dynamic search/filter capabilities, and reusable UI components.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (`useState`, `useEffect`, `useMemo`)
- **Data**: Static JSON files

## 🚀 Setup & Run Instructions

```bash
# Clone the repository (if applicable)
# git clone <repo-url>

# Navigate to the project directory
cd college-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## ✅ Completed Features

- **Project Structure**: Organized by components (`common`, `layout`, `ui`), `pages`, `data`, `routes`, etc.
- **Reusable UI Components**: Custom `Button`, `Input`, `Card`, `SectionTitle`, `Accordion`, `Modal`, and `Loader` built without external UI libraries.
- **Responsive Layout**: Mobile-first design with a responsive Navbar (hamburger menu) and Footer.
- **Home Page**: Hero banner, animated stats, department previews, testimonials, and gallery.
- **About Page**: College history timeline, interactive facilities grid, and vision/mission sections.
- **Departments Page**: Real-time search and category filtering for courses.
- **Faculty Page**: Real-time search and department filtering for faculty members.
- **Contact/Admissions Page**: Comprehensive form with inline validation (on blur & submit) and simulated success state.
- **Premium Design**: Used subtle gradients, glassmorphism effects, shadows, and refined typography for a high-quality look.

## 🌟 Bonus Features Implemented

- **Department Details Page (`/departments/:id`)**: Individual dynamic pages showing detailed program overview and the specific faculty members teaching in that department.
- **FAQ Accordion**: Fully functional interactive accordion on the Contact page.
- **Embedded Map**: Simulated map view on the Contact page for campus location.

## 📝 Assumptions Made

- Assumed user wanted a highly polished UI, so I implemented custom animations (e.g., counting stats, hover states, mobile menu transitions).
- Used placeholder images from Unsplash and Pravatar for visual completeness.
- Simulated API submissions on the Contact form with a timeout.

## 🚧 Known Limitations / Pending Items

- No actual backend is connected; data is read-only from JSON files.
- The map on the Contact page is a generic iframe (can be replaced with a real Google Maps embed).
