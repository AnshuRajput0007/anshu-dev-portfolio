# AR.dev — Anshu Rajput's Developer Portfolio

A dark, premium developer portfolio for **Anshu Rajput** (Frontend
Developer, B.Tech CSE @ RKGIT, Class of 2027) with a playful
Minion-inspired accent theme: a single goggle-lens motif used
throughout (custom cursor, project card frames, the mascot in the
contact section), an animated mascot, a 3D floating goggle in the
hero, typing animations, glassmorphism inputs, and motion built with
Framer Motion + GSAP.

Content (bio, skills, projects, leadership experience, contact info)
was pulled from your existing portfolio at
`anshu-rajput-portfolio.netlify.app` and rebuilt into this design.

Built with **React 19 + Vite, Tailwind CSS, Framer Motion, GSAP, and
Three.js (via react-three-fiber)**.

## 1. Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## 2. What's already filled in vs. what's left

**Already real, pulled from your old site (and your live deploy):**
- Name, tagline, bio, degree/university/grad year (`src/components/Hero.jsx`, `src/components/About.jsx`)
- Skills (`src/data/skills.js`)
- All 3 projects — Portfolio Website (linked to your live site), Rezumefy, Dashboard UI (`src/data/projects.js`)
- Leadership experience — Technical Lead & Promotional Head (`src/data/experience.js`, new **Experience** section)
- Email, phone, and LinkedIn (`src/components/Contact.jsx`)
- Site URL across SEO tags, canonical link, sitemap, and JSON-LD — set to `anshu-dev-portfolio.netlify.app`

**Still placeholders — fill these in when you have them:**

| What | Where | Note |
|---|---|---|
| GitHub profile/repo links | `src/data/projects.js` (`codeUrl`), `src/components/Contact.jsx` | Your old site didn't list a GitHub link — add yours and I'll wire up the icon (a `GithubMark` component already exists in `src/components/BrandIcon.jsx`, just unused right now) |
| Live + code links for Dashboard UI | `src/data/projects.js` | Marked `"#"` for now |
| Resume file | drop a `resume.pdf` into `public/` | The hero's Resume button already links to `/resume.pdf` |

## 3. Wire up the contact form

The form's submit handler (`src/components/Contact.jsx`) currently
**simulates** sending a message so the UI works immediately out of the
box. To actually deliver messages to `rajputanshu0007@gmail.com`, pick one:

- **Formspree** — create a form at formspree.io, then `fetch()` your
  form's endpoint with the form data instead of the `setTimeout`.
- **EmailJS** — `npm install @emailjs/browser`, then call
  `emailjs.send(...)` in the handler.
- **Your own API route** — if you deploy somewhere with serverless
  functions (Vercel/Netlify), add a function and `fetch()` it.

## 4. Performance & accessibility notes

- The 3D hero scene (`GoggleScene.jsx`) is lazy-loaded (`React.lazy`),
  so it doesn't block the initial page render — the heavy Three.js
  chunk only loads after the main bundle, in parallel.
- GSAP/ScrollTrigger are dynamically imported only when the About
  section's stat counters mount.
- All decorative motion (mascot blink/float, particles, cursor)
  respects `prefers-reduced-motion`.
- The custom cursor only activates on fine pointers (`pointer: fine`),
  so touch devices keep their native cursor/tap behavior.
- Keyboard focus is visible everywhere (`:focus-visible` outlines) and
  there's a skip-to-content link for screen reader / keyboard users.
- No raster photography is used anywhere except the generated
  `og-image.png` (only loaded by social platforms, not by the page
  itself), keeping the actual page weight small.

Run a Lighthouse pass after you deploy (Chrome DevTools → Lighthouse,
or `npx unlighthouse --site <your-url>`) — scores depend a lot on
hosting (use Vercel/Netlify/Cloudflare Pages, not a slow shared host).

## 5. Deploying

This is a static Vite build, so any static host works:

```bash
npm run build
```

Then deploy the `dist/` folder to **Vercel**, **Netlify**, or
**Cloudflare Pages** (all have a free tier and a one-command/one-click
flow from a GitHub repo). The site is already configured for
`anshu-dev-portfolio.netlify.app` — if you ever move to a custom
domain, update that URL across `index.html`, `public/sitemap.xml`, and
`public/robots.txt`.

## 6. Project structure

```
src/
  components/      All UI sections + the reusable bits (mascot, cursor,
                    particles, 3D scene, project card, etc.)
  data/            Editable content: skills.js, projects.js, experience.js
  hooks/           useTypingEffect.js (the typewriter hook)
public/
  favicon.svg      Goggle-mark favicon
  og-image.png     Social share preview image (your name + title)
  robots.txt, sitemap.xml
scripts/
  generate-og-image.py   Regenerate og-image.png after editing copy
```

## 7. Design notes

The Minion reference is kept to a *motif*, not a costume: one signature
goggle-lens shape recurs as the custom cursor ring and the project
card border treatment, while the actual mascot character is small,
original artwork (not a reproduction of any studio's character
design) used as an accent in both the hero and the contact section.
Color system: void black background, signature yellow (`#FFD23F`), a
denim blue for contrast/glow (`#2E4374`), and a cream/silver pair for
text — defined as named tokens in `tailwind.config.js`.
