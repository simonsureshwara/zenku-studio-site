# Zenku Studio Site

Premium Next.js Website für **Zenku Studio** (deutsch) mit Fokus auf Conversion, Performance und technischem SEO.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI (FAQ Accordion)
- next/font (Inter + Playfair Display)
- Lenis (smooth scroll)
- next-themes (Light/Dark Mode)

## Setup

```bash
npm install
npm run dev
```

Öffnen: `http://localhost:3000`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## SEO Features

- Metadata API je Route (Title, Description, Canonical, OG/Twitter)
- JSON-LD: Organization, WebSite/SearchAction, Service, Product/Offer, Breadcrumbs, CreativeWork
- `app/sitemap.ts`
- `app/robots.ts`

## Deployment (Vercel)

1. Repository auf GitHub pushen
2. In Vercel importieren
3. Build Command: `npm run build`
4. Output: standard Next.js

Empfohlene ENV später ergänzen (z. B. Analytics IDs) über Vercel Project Settings.
