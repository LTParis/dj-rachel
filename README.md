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
- [WEDDING-VIDEOS.md](./WEDDING-VIDEOS.md) explains how to add short clips to the Wedding page's video area.
- The Corporate sizzle-reel area uses `src/data/corporateReel.ts`; upload an approved video/poster to `public/` and set that configuration to replace its coming-soon panel.
- Rachel's supplied logo is used in the shared header and footer at `public/dj-rachel-logo.svg`.
- `src/data/reviews.json` contains the deduplicated Google and Facebook review export. The source export is not committed; regenerate with `npm run reviews:import -- /path/to/dj-rachel-reviews.json`.
- To add a source file containing only newly verified reviews, use `npm run reviews:import -- /path/to/new-reviews.json --append`. Assign unused numeric source IDs. This preserves existing reviews and import counts, and rejects an already imported text or source ID before writing.
- `/reviews/` displays the sourced reviews and `/reviews.json` serves their machine-readable data. Reviewer names, source ratings, and recommendations are kept per source; owner replies are excluded.
- Typography follows the concept: Archivo for headings/navigation and Roboto Slab for body copy. Both are served locally from `@fontsource` packages.

## Heading style

Use sentence case for visible headings, including article titles and service cards. Preserve proper names and acronyms such as DJ, MC, IT, and R&D. Sentence-style marketing headings and action steps end with a period; questions end with a question mark. Short category labels, article titles, and article section labels do not need an added period. Keep capitalization in the source text; do not force headings into lowercase with CSS.

## Safe handoff

Rachel's plain-language getting-started guide is in [FOR-RACHEL.md](./FOR-RACHEL.md). She has her own GitHub account (`Lynch022`) with write access; never share passwords, recovery codes, or access tokens. She edits through ChatGPT Codex, which reads [AGENTS.md](./AGENTS.md): Codex works on a branch and opens a pull request; Rachel (or Lou) checks the Cloudflare preview link on the pull request and comments `makeitso`, which builds and merges it ([workflow](./.github/workflows/makeitso.yml), limited to `Lynch022` and `LTParis`), and `main` deploys to https://djrachellynch.com.

The site is hosted on Cloudflare Workers (static assets only; Worker `dj-rachel`, configured in [wrangler.jsonc](./wrangler.jsonc)) and served at https://djrachellynch.com, with `www` redirecting to the bare domain. Cloudflare builds and deploys every push to `main`, and builds a preview for every other branch and pull request. The GitHub repository is public, so nothing secret belongs in it. Keep private information out of the site. The draft banner, `noindex`, and the crawler-blocking `robots.txt` stay in place until Rachel approves the content for launch.

## SEO and launch status

The canonical site URL is configured as `https://djrachellynch.com`. The site includes page-specific titles/descriptions, canonical/Open Graph/Twitter metadata, organization/website JSON-LD, an XML sitemap, and `/llms.txt`.

While this is a draft, pages emit `noindex, nofollow` and `/robots.txt` blocks crawlers. Before the approved public launch, change the robots response to allow crawling and advertise the sitemap, then remove the `noindex` meta tag. Review cards and source metadata are visible and machine-readable, but review/aggregate-rating schema is intentionally omitted: first-party testimonials on the reviewed business's own site are self-serving review markup and should not be presented as Google review snippets.
