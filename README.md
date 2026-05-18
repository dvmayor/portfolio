# [YOUR_NAME] — Portfolio

Personal portfolio site built with Next.js App Router, Tailwind CSS v4, and Framer Motion.
Layout inspired by [brittanychiang.com](https://brittanychiang.com). Color theme from [alejandro-gomez.vercel.app](https://alejandro-gomez.vercel.app).

---

## Run locally

```bash
npm install
npm run dev -- --port 3001
```

Open [http://localhost:3001](http://localhost:3001).

---

## Fill in your content (find-replace guide)

Do a project-wide find-and-replace for each placeholder below:

| Placeholder | Replace with |
|---|---|
| `[YOUR_NAME]` | Your full name |
| `[YOUR_TITLE]` | Your job title (e.g. "Senior Software Engineer") |
| `[YOUR_TAGLINE]` | One-liner (e.g. "I build fast, scalable systems.") |
| `[YOUR_CITY]` | Your city |
| `[YOUR_DOMAIN]` | Your domain (e.g. "janedoe") |
| `[YOUR_GITHUB]` | Your GitHub username |
| `[YOUR_LINKEDIN]` | Your LinkedIn handle |
| `[YOUR_TWITTER]` | Your Twitter/X handle |
| `[YOUR_EMAIL]` | Your email address |
| `[YOUR_BIO_PARAGRAPH_1]` | First bio paragraph |
| `[YOUR_BIO_PARAGRAPH_2]` | Second bio paragraph (with company links) |
| `[YOUR_BIO_PARAGRAPH_3]` | Third bio paragraph |

Then edit the structured data files directly:

- `src/data/experience.ts` — work history
- `src/data/projects.ts` — featured + other projects

Drop project screenshots into `public/images/projects/` and update the `image` paths in `projects.ts`.

Add your resume PDF at `public/resume.pdf`.

---

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js and uses the `vercel.json` config included here.

---

## Color system

The site uses a dark/light token system defined in `src/app/globals.css`.

Dark mode (default `:root`) uses a deep navy base (`#1e2336`) with a salmon accent (`rgb(255,162,139)`). Light mode overrides are applied via `html[data-theme="light"]` — set by a localStorage-backed theme toggle with an anti-FOUC inline script in `layout.tsx`.

Semantic tag colors are split into three variants: outcome (teal), award (green), and tech (indigo/purple). Each variant has its own `--color-tag-*-bg`, `--color-tag-*-border`, and `--color-*` tokens for both modes.

Font: [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
