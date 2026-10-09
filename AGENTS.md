# AGENTS.md

Guidance for coding agents (and humans) working on this repository.

## What this is
The personal site of Michael Müller, served at https://haimich.github.io. It is a static Astro site: every page is plain HTML at build time, with no client-side framework.

## Layout
- `src/data/site.ts`: **all content** (texts, projects, talks, links). Change content here, not in the templates.
- `src/pages/index.astro`: the home page template and its styles.
- `src/pages/llms.txt.ts`: generates `/llms.txt` from the same data. Keep both in sync by editing only `site.ts`.
- `src/layouts/Base.astro`: `<head>`, SEO, JSON-LD and the colour tokens (light and dark).
- `public/`: static files copied as-is. `cup/` is a legacy static blog that the deploy workflow copies into `dist/cup`. **Never edit `cup/`.**

## Commands
- `pnpm install`: install dependencies (pnpm only).
- `pnpm dev`: local server on http://localhost:4321.
- `pnpm verify`: type check, build, HTML validation and internal link check. **Run it before every PR. CI runs the same command.**

## Rules
- **No confidential information.** Do not add internal numbers, internal product names, customer names or anything else from current or past employers that is not public. Describe the pattern, not the internals.
- No new runtime JavaScript unless the change clearly needs it. The site must stay readable without JavaScript.
- No new dependencies without a clear reason in the PR description. Pin exact versions.
- Keep the page accessible: alt text on images, visible focus, sufficient contrast in both colour schemes.
- Fill in the PR template, including the evidence section.

## What needs a human
- Any change to wording about the author's current employer, career or achievements.
- Anything in `.github/workflows/` (deploy permissions).
