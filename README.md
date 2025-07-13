# Souva Website

A minimalist landing page for Souva - The Antidote to Digital Noise.

## Features

- **Modern Design**: Monochromatic dark theme with carefully chosen typography
- **Responsive Layout**: Optimized for all screen sizes
- **Smooth Animations**: Framer Motion animations for a polished user experience
- **Fast Performance**: Built with Next.js 15 and Tailwind CSS 4
- **Legal Pages**: Complete privacy policy and terms of use

## Design System

- **Font**: Urbanist (Google Fonts)
- **Background**: Deep charcoal gray (#121212)
- **Primary Text**: Off-white (#EAEAEA)
- **Secondary Text**: Softer gray (#A0A0A0)
- **Cards**: Slightly lighter background (#1C1C1C)
- **Layout**: Centered column with max-width of 3xl for focus

## Pages

- **/** - Main landing page with logo, manifesto, and showcase
- **/privacy** - Privacy policy covering all SouvaStudios applications
- **/terms** - Terms of use for all SouvaStudios applications

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Font**: Urbanist (Google Fonts)
- **Language**: TypeScript

## Project Structure

```
souva-website/
├── src/
│   └── app/
│       ├── page.tsx           # Landing page
│       ├── privacy/
│       │   └── page.tsx       # Privacy policy
│       ├── terms/
│       │   └── page.tsx       # Terms of use
│       ├── layout.tsx         # Root layout
│       └── globals.css        # Global styles
├── public/                    # Static assets
└── package.json              # Dependencies
```

## License

© 2025 Souva. All rights reserved.
