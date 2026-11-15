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
- Rachel's supplied logo is used in the shared header and footer at `public/dj-rachel-logo.svg`.
- `src/data/reviews.json` contains the deduplicated Google and Facebook review export. The source export is not committed; regenerate with `npm run reviews:import -- /path/to/dj-rachel-reviews.json`.
- `/reviews/` displays the sourced reviews and `/reviews.json` serves their machine-readable data. Reviewer names, source ratings, and recommendations are kept per source; owner replies are excluded.
- Typography follows the concept: Archivo for headings/navigation and Roboto Slab for body copy. Both are served locally from `@fontsource` packages.

## Safe handoff

Rachel's plain-language getting-started guide is in [FOR-RACHEL.md](./FOR-RACHEL.md). She has her own GitHub account (`Lynch022`) with write access; never share passwords, recovery codes, or access tokens. She edits through ChatGPT Codex, which reads [AGENTS.md](./AGENTS.md): Codex works on a branch and opens a pull request; Rachel (or Lou) checks the Vercel preview and merges, and `main` deploys to the temporary preview site.

The temporary preview is hosted on Vercel at https://dj-rachel.vercel.app (Hobby project `lou-paris-projects/dj-rachel`); every push to `main` redeploys it. The GitHub repository is public on purpose: Vercel's Hobby plan blocks deployments of commits by collaborators on private repositories, but collaboration is free for public ones, so Rachel's own merges and pull request previews deploy. Do not make it private again without moving to Vercel Pro. Nothing secret belongs in the repository. Keep private information out of the site, review Vercel's preview-access settings, and do not connect the custom domain or publish as the production site until Rachel approves the content and the preview.

## SEO and launch status

The canonical site URL is configured as `https://djrachellynch.com`. The site includes page-specific titles/descriptions, canonical/Open Graph/Twitter metadata, organization/website JSON-LD, an XML sitemap, and `/llms.txt`.

While this is a draft, pages emit `noindex, nofollow` and `/robots.txt` blocks crawlers. Before the approved public launch, change the robots response to allow crawling and advertise the sitemap, then remove the `noindex` meta tag. Review cards and source metadata are visible and machine-readable, but review/aggregate-rating schema is intentionally omitted: first-party testimonials on the reviewed business's own site are self-serving review markup and should not be presented as Google review snippets.
