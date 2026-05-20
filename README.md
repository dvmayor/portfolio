# David Reuel Villamayor — Portfolio

[![Live](https://img.shields.io/badge/Live-my--portfolio--three--xi--48.vercel.app-brightgreen?style=flat-square)](https://my-portfolio-three-xi-48.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

Personal portfolio for David Reuel Villamayor, Engineering Manager and Tech Lead based in Sydney, AU.

**[→ View live site](https://my-portfolio-three-xi-48.vercel.app)**

---

## Features

- Two-column layout: sticky sidebar nav + scrollable main content
- Dark / light mode with no flash on load (localStorage + inline script)
- Scroll-driven entrance animations via Framer Motion
- Collapsible work history with expandable key initiative drill-downs
- Certifications grid with direct verify links
- Contact form via Resend API
- CV download
- Fully responsive (mobile + desktop)

## Tech

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Resend

## Run locally

```bash
npm install
npm run dev
```

Create a `.env.local` with your Resend key for the contact form:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## License

MIT
