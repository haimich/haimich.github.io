# haimich.github.io

My personal site: https://haimich.github.io

A static [Astro](https://astro.build) site. Every page is plain HTML, so people, crawlers and AI agents all see the same content. There is also an [`/llms.txt`](https://haimich.github.io/llms.txt), generated from the same data as the page.

## Working on it

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm verify   # type check, build, HTML validation, internal link check
```

- Content lives in `src/data/site.ts`.
- Coding agents: read [AGENTS.md](AGENTS.md) first.
- Every PR runs `pnpm verify` in CI. A push to `main` deploys to GitHub Pages.

`cup/` is an old static food blog. It is copied into the build unchanged.
