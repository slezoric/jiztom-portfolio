# Project Architecture & Setup Guide

## 1. Tech Stack Overview

This project is a modern Single Page Application (SPA) built with the following technologies:

### Core Frameworks
- **Runtime/Bundler**: [Vite](https://vitejs.dev/) (v5) - Fast frontend tooling.
- **Frontend Library**: [React](https://react.dev/) (v18) - Component-based UI.
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.5) - Static typing.

### Styling & UI
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) (v3.4) - Utility-first CSS.
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (based on `@radix-ui` primitives) - Accessible, functional component library.
- **Icons**: [Lucide React](https://lucide.dev/) - Consistent icon pack.
- **Animations**: `tailwindcss-animate` plugin.

### State & Data
- **Routing**: `react-router-dom` (v6) - Client-side routing.
- **Data Fetching**: `@tanstack/react-query` (v5) - Async state management.
- **Forms**: `react-hook-form` + `zod` schema validation.
- **Date Handling**: `date-fns`.

### Graphics & 3D
- **Three.js**: Included via `three` and `@types/three`.

## 2. Project Structure

```
├── public/              # Static assets (images, favicon, _redirects)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Shadcn UI primitives (Button, Card, etc.)
│   │   └── ...          # Feature-specific components
│   ├── config/          # Configuration files (portfolio-config.ts, etc.)
│   ├── pages/           # Route components (Views)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities (utils.ts, etc.)
│   ├── main.tsx         # Application entry point
│   ├── App.tsx          # Root component & Routing setup
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML Entry point
├── package.json         # Dependencies & Scripts
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 3. Configuration Highlights

- **Path Aliases**: configured in `vite.config.ts` and `tsconfig.json`.
  - `@/` maps to `./src/`
  - Example: `import { Button } from "@/components/ui/button"`

- **Routing**:
  - Validated by `public/_redirects` for Cloudflare Pages (Handle SPA routing).
  - Main router logic typically located in `src/App.tsx`.

- **Build System**:
  - `npm run dev`: Starts local development server on port 8080.
  - `npm run build`: Type-checks and builds for production (output to `dist`).
  - `npm run preview`: Preview the production build locally.

## 4. Deployment

### Cloudflare Pages
This project is configured for Cloudflare Pages.
- **Build Output Directory**: `dist`
- **Build Command**: `npm run build`
- **Routing**: `public/_redirects` ensures all requests reference `index.html` (SPA Fallback).

## 5. Development Guidelines

- **New Components**: Add shadcn components via CLI or manually in `src/components/ui`.
- **Linting**: ESLint receives configuration from `eslint.config.js`. Run `npm run lint` to check code quality.
