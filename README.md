# Orbeetal.com

Marketing website for [Orbeetal](https://orbeetal.com) — built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Environment Variables

Create `.env.local` in the project root:

```env
BACKEND_API_URL=https://your-laravel-api.example.com
ORBEETAL_SITE_SECRET=your-shared-secret
```

- `BACKEND_API_URL` — Laravel backend base URL (used by `/api/cv-submit` proxy)
- `ORBEETAL_SITE_SECRET` — Shared secret sent as `X-Submit-Secret` header to the backend

## Site Configuration

Edit [`data/siteConfig.js`](data/siteConfig.js):

- `activeHero` — Homepage hero section: `"hero"` | `"idea-contest"` | `"cv-submit"`
- `showTopBanner` — Show/hide the top announcement banner

## Project Structure

```
app/              Routes, metadata, API routes (OG images, CV submit proxy)
components/       UI primitives, layout, page sections
  ui/             Button, Card, Toast, form inputs
  sections/       Homepage and page content sections
data/             Static content (services, team, events, navigation)
lib/              Utilities (cn, icons, scroll helpers)
hooks/            Custom React hooks
```

## Backend Integration

CV submissions are proxied through `app/api/cv-submit/route.js` to the Laravel API at `POST /api/cv-submit`, keeping the site secret server-side.

## Deploy

Standard Next.js deployment (e.g. Vercel, Node server via `npm run build && npm run start`). Ensure environment variables are set in the hosting platform.
