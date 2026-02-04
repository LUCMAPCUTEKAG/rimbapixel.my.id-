# Dani Design Portfolio

A modern, bilingual (Arabic/English) portfolio website for Graphic Design and Motion Graphics, built with Astro, Tailwind CSS, and Decap CMS.

## Features

- 🎨 Modern 3D design with subtle animations
- 🌐 Bilingual support (Arabic RTL / English LTR)
- 🌓 Light/Dark theme
- 📱 Fully responsive
- ✏️ Content management via Decap CMS at `/admin`
- 🚀 Static site optimized for GitHub Pages
- ⚡ Built with Astro for maximum performance

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (Git-based)
- **3D Effects**: CSS 3D Transforms
- **Font**: Tajawal (Arabic & Latin)
- **Deployment**: GitHub Pages

## Getting Started

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

## Project Structure

```
/
├── public/
│   ├── admin/          # Decap CMS admin panel
│   └── uploads/        # Media uploads
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Content files (JSON)
│   │   ├── projects/   # Graphic design projects
│   │   ├── motion/     # Motion graphics works
│   │   ├── about/      # About information
│   │   └── settings/   # Site settings
│   ├── layouts/        # Layout components
│   ├── lib/            # Utilities and types
│   ├── pages/          # Page routes
│   └── styles/         # Global styles
└── package.json
```

## Content Management

Access the admin panel at `/admin` after deployment. You'll need to authenticate with GitHub to manage content.

### Collections

1. **Graphic Design Projects**: Portfolios with images and optional videos
2. **Motion Graphics**: Video-based projects with YouTube/Vimeo links
3. **About**: Personal information and highlights
4. **Settings**: Site-wide configuration and contact information

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

## Contact

- **Name**: Dani Albitar
- **Location**: Syria
- **WhatsApp**: +963997804468
- **Telegram**: @dani_albitar
- **Email**: albitardani@gmail.com

## License

See [LICENSE](LICENSE) file for details.
