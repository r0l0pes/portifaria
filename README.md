# Rodrigo Lopes Portfolio

Modern, responsive portfolio website for Rodrigo Lopes - Senior Product Manager specializing in AI Strategy, Data-Driven Innovation, and emerging technologies.

## Features

- 🎨 Modern, bold design with dark mode support
- 📱 Fully responsive (mobile-first)
- ⚡ Built with React 19 + Vite 6
- 🎯 SEO optimized with Open Graph tags
- 📊 Interactive case studies with data visualizations
- 📝 Blog/writings section
- 🌐 CDN-based dependencies for fast loading

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

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
```

The build output will be in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## Deploy to Vercel

### Option 1: Automatic Deploys (Recommended)

1. Push your code to GitHub.
2. Connect your repository to Vercel via the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will auto-detect settings from `vercel.json`.

### Option 2: Deploy via Vercel CLI

```bash
npx vercel --prod
```

## Project Structure

```
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── vercel.json          # Vercel deployment config
├── src/                 # Source code
└── public/              # Static assets
```

## Technology Stack

- **Framework:** React 19.2.3
- **Build Tool:** Vite 6.2.0
- **Language:** TypeScript 5.8.2
- **Styling:** Tailwind CSS (CDN)
- **Charts:** Recharts 3.6.0
- **Icons:** Lucide React 0.562.0

## Configuration

### Customizing Content

All portfolio content is located in `constants.ts`:
- `HERO_DATA` - Personal info, tagline, contact details
- `EXPERIENCE` - Work experience timeline
- `CASE_STUDIES` - Project case studies
- `BLOG_POSTS` - Writing/blog posts

### Customizing Styles

The design uses a custom color palette defined in `index.html`:
- Yellow: `#FFFF00`
- Cyan: `#00CCFF`
- Blue: `#4466FF`

## License

© 2026 Rodrigo Lopes. All rights reserved.
