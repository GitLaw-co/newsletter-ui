# newsletter-ui

Email component library for GitLaw marketing newsletters. Built with React 18, TypeScript, and Tailwind CSS. Previewed in Storybook 8.

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://newsletter-ui.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[Live Storybook](https://newsletter-ui.vercel.app)

---

## Purpose

This repo is a **design system for composing GitLaw marketing emails and newsletters**. Each email is assembled from a small set of reusable components (Header, Hero, Button, etc.) inside a fixed-width 700px Wrapper. Storybook serves as both the development environment and a visual catalogue of all templates.

This is **not** an npm package — it's a standalone design system previewed via Storybook and deployed to Vercel.

## Quick Start

```bash
npm install          # Node 18+
npm run storybook    # http://localhost:6007
npm run build-storybook  # build check
```

## Components

| Component | Description |
|-----------|-------------|
| **Wrapper** | Outermost container — 700px, white, rounded, shadow |
| **Header** | Logo at top — image or text wordmark fallback |
| **Hero** | Large Georgia headline, optional yellow highlight, body, CTA |
| **Button** | CTA link styled as purple pill (`<a>` tag for email compatibility) |
| **Divider** | Horizontal rule separator |
| **SectionHeader** | Section heading in two sizes (lg/md) |
| **FeatureBlock** | Colored banner block (purple/light-purple/green) with text overlay |
| **TemplateCard** | Decorative document card (300x300, dashed border, skeleton bars) |
| **Footer** | Footer with tagline, site URL, address, unsubscribe link |

## Email Templates

Six pre-built templates under `Email/Templates/` in Storybook:

| Template | Pattern |
|----------|---------|
| **Welcome** | Header → Hero → FeatureBlock(purple) → Footer |
| **eSign Announce** | Header → Hero → FeatureBlock(light-purple) → Footer |
| **1st Contract** | Header → Hero → 2x FeatureBlock → 2x TemplateCard → Footer |
| **Trust Marks** | Header → Hero → security icons → user photos → investor logos → Footer |
| **Recommended Docs** | Header → Hero → repeated category sections → Footer |
| **Feedback** | Header → Hero (text-only) → Footer |

## Project Structure

```
src/
├── components/       # Email components (Button.tsx, Hero.tsx, …)
├── specs/            # Design tokens (colors.tokens.js, colors.ts)
├── stories/          # Storybook stories (components + templates)
├── assets/email/     # Email images (logos, photos, illustrations)
└── styles/globals.css
```

## Email Layout Constraints

- **Fixed width:** 700px (set by Wrapper)
- **No media queries** — email clients don't support them reliably
- **No CSS Grid** — flexbox only
- **Tailwind for dev/preview** — production email sending should inline styles
- **Button uses `<a>` tag** — correct for HTML emails, not `<button>`

## Deployment

Push to `main` triggers production deploy via GitHub Actions → Vercel. Push to any other branch creates a preview deploy.

## Development with Claude Code

This project is designed for AI-assisted development. See `CLAUDE.md` for full conventions, component patterns, and workflow instructions.

## License

MIT
