# DJ Rachel site

An Astro-based draft for DJ Rachel Entertainment, based on the shared “The Headliner” concept. This is a working preview, not a finished or published business site. Copy, facts, photos, booking details, and links still need Rachel's approval.

## Run the site

Install Node.js 22.23.4 or newer, then from this folder run:

```sh
npm install
npm run dev
```

Open the local address printed by Astro (usually `http://localhost:4321`). To check the production build:

```sh
npm run build
npm run preview
```

## Project map

- `src/pages/` contains the Home, Weddings, Corporate, Private Events, and About pages.
- `src/components/` contains shared page sections.
- `src/data/` contains the shared navigation and event-page copy.
- `src/styles/global.css` contains the color, typography, and responsive layout rules.
- `public/` is for approved photos, video posters, and other static assets.
- Typography follows the concept: Archivo for headings/navigation and Roboto Slab for body copy. Both are served locally from `@fontsource` packages.

## Safe handoff

Rachel's plain-language getting-started guide is in [FOR-RACHEL.md](./FOR-RACHEL.md). Invite her to the private GitHub repository by her own GitHub account; never share passwords, recovery codes, or access tokens. Choose an AI editing workflow together—Claude and ChatGPT integrations can differ by plan and may be read-only.

Vercel is the proposed temporary preview host, but it is not connected yet. A preview deployment may be publicly viewable even while the GitHub repository is private. Keep private information out of the site, review Vercel's preview-access settings, and do not connect the custom domain or publish as the production site until Rachel approves the content and the preview.
