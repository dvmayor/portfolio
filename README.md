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
- `src/data/writing.ts` — blog posts / articles (set to `[]` to hide the section)

Drop project screenshots into `public/images/projects/` and update the `image` paths in `projects.ts`.

Add your resume PDF at `public/resume.pdf`.

---

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js and uses the `vercel.json` config included here.

---

## Color palette

| Role | Hex |
|---|---|
| Page background | `#dedede` |
| Card surface | `#d4d4d4` |
| Headings | `#000000` |
| Body copy | `#595959` |
| Muted / dates | `#a3a3a3` |
| **Accent** | `#fc3d03` |
| Borders | `#bfbfbf` |

Font: [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
