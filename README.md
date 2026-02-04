# RimbaPixel Portfolio

A modern, bilingual (Arabic/English) portfolio website built with Astro and Tailwind CSS, featuring graphic design and motion graphics projects.

## 🌟 Features

- **5 Pages**: Home, Graphic Design, Motion Graphics, About, Contact
- **RTL/LTR Support**: Default Arabic (RTL) with English (EN) toggle
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Tajawal Font**: Professional Arabic typography
- **3D Effects**: Lightweight card hover animations and transitions
- **Scroll Reveals**: Smooth animations on scroll (respects prefers-reduced-motion)
- **Decap CMS**: Content management at `/admin` with collections for projects, motion graphics, about page, and settings
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site**: Fast, SEO-friendly static generation

## 📁 Project Structure

```
├── public/
│   ├── admin/              # Decap CMS configuration
│   │   ├── config.yml     # CMS collections and fields
│   │   └── index.html     # CMS entry point
│   ├── uploads/           # Media uploads directory
│   └── favicon.svg        # Site favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navigation.astro   # Nav with theme/lang toggles
│   │   ├── Footer.astro       # Site footer
│   │   ├── ProjectCard.astro  # Graphic design project card
│   │   └── VideoCard.astro    # Motion graphics video card
│   ├── content/           # Content files
│   │   ├── projects/      # Graphic design projects (CMS)
│   │   ├── motion/        # Motion graphics projects (CMS)
│   │   ├── about.json     # About page content (CMS)
│   │   └── settings.json  # Site settings (CMS)
│   ├── layouts/
│   │   └── Layout.astro   # Base layout with RTL/LTR support
│   ├── pages/             # Page routes
│   │   ├── index.astro           # Homepage
│   │   ├── graphic-design.astro  # Projects gallery
│   │   ├── motion-graphics.astro # Videos gallery
│   │   ├── about.astro           # About page
│   │   └── contact.astro         # Contact form
│   └── styles/
│       └── global.css     # Global styles and animations
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Content Management

Access the CMS at `/admin` after deployment to:
- Add/edit graphic design projects
- Add/edit motion graphics videos
- Update about page content
- Configure site settings

### Seed Content

The site includes seed content:
- **6 Graphic Design Projects**: Brand identity, poster, UI design, logo, packaging, brochure
- **3 Motion Graphics Videos**: Promotional, educational, YouTube intro
- **About Page**: Company info, services, and benefits
- **Contact Page**: Form and contact details

### Video Links

Motion graphics entries use external video links (e.g., YouTube) with poster images for thumbnails.

## 🌍 Internationalization

### Language Toggle
- Default: Arabic (RTL)
- Toggle: English (LTR)
- Stored in localStorage

### Adding Translations

Each page component includes data attributes for both languages:
```astro
<span data-text-ar>النص العربي</span>
<span data-text-en class="hidden">English Text</span>
```

## 🎭 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper labeling for screen readers
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚢 Deployment

The site is configured for GitHub Pages deployment via GitHub Actions.

### Workflow
The `.github/workflows/static.yml` workflow:
1. Installs dependencies
2. Builds the Astro site
3. Deploys to GitHub Pages

### Manual Deployment

```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## 🛠 Technologies

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Decap CMS](https://decapcms.org)** - Git-based CMS
- **[Tajawal](https://fonts.google.com/specimen/Tajawal)** - Google Font for Arabic

## 📝 License

This project is licensed under the terms specified in the LICENSE file.

---

Built with ❤️ by RimbaPixel