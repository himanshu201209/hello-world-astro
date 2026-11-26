# hello-world-astro

Monorepo for micro1 Webflow Cloud applications.

## Structure

```text
hello-world-astro/
├── research/   # Astro Research app (existing project)
├── blog/       # Astro Blog app (Webflow Cloud mount: /blog)
└── README.md
```

## Research

The Research Astro app lives in `research/` and can be installed, developed, and built independently from that folder.

```bash
cd research
npm install
npm run dev
npm run build
```

## Blog

The Blog Astro app lives in `blog/` and can be installed, developed, and built independently from that folder.

```bash
cd blog
npm install
npm run dev
npm run build
```

## Notes

- The Git repository root remains at `hello-world-astro/` (no nested `.git` folders).
- Each app keeps its own `package.json`, dependencies, and tooling.
