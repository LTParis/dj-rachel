# Project guidance

- This is a draft site based on the shared “The Headliner” concept. Keep the visible working-preview notice until Rachel approves the final copy and assets.
- Never invent credentials, reviews, client names, booking details, social links, audience counts, or service promises. Ask Rachel or the site owner when a fact is missing.
- Use only photos, video, logos, and testimonials Rachel has approved for the website.
- Keep review source, reviewer, date, and source-provided rating/recommendation together. Never infer ratings, merge reviewer identities, add review links that were not supplied, or add Review/AggregateRating structured data for first-party testimonials.
- Re-import the review source with `npm run reviews:import -- <source.json>`; do not edit the generated `src/data/reviews.json` by hand.
- Keep pages usable on mobile, keyboard accessible, and free of unnecessary client-side JavaScript or third-party trackers.
- Do not publish, connect the custom domain, or change hosting settings without the site owner's approval.
- Run `npm run build` after code changes.

## Photos and video (follow every time media is added)

Large photos and video are what make the site slow and use up hosting space, so every upload goes through the same steps. The build (`npm run build`) runs a media check and fails if these rules are broken.

1. Raw uploads go in `incoming/`, never in the top folder and never straight into `public/` or `src/assets/`. If Rachel attaches files in chat, save them to `incoming/` first. Don't use GitHub's "Add files via upload" on `main`.
2. Confirm Rachel has approved each file for the website and where it should appear.
3. Process each file with `npm run media:add -- incoming/<file> <descriptive-name>`, using a short descriptive name such as `wedding-first-dance` (not `IMG_1234` or `unnamed (5)`). The script:
   - Photos: saves `src/assets/photos/<name>.jpg`, at most 2000px on the long edge, with location and camera data removed.
   - Video: saves `public/<name>.mp4` (H.264, at most 720px wide, fast start, under 12 MB) and `public/<name>-poster.jpg`. It needs `ffmpeg`; if it can't be installed, leave the video in `incoming/` and tell Rachel and Lou it still needs compressing.
   - Removes the raw file from `incoming/`. Commit that removal in the same pull request.
4. Show photos with Astro's `<Image>` component (or add them to the photo lists in `src/data/*Photos.ts`), always with real `alt` text describing the photo. Don't put a photo in `public/` and link it as `/photo.jpg`; that skips the resizing.
5. Video: use `preload="none"` or `preload="metadata"` and a `poster`, and use the dimensions the script prints. Only the homepage reel autoplays.
6. Never delete or replace a photo or video Rachel uploaded without saying so in the pull request. Files in `incoming/needs-review/` are waiting for Rachel to say whether to use or delete them.

## Search engines and structured data

- Keep the business facts in `src/data/business.ts` matching what the site shows (footer contact details, social links, service area). When one changes, update both.
- New service pages pass `serviceSchema(...)` to `SiteLayout`; blog posts get `BlogPosting` data automatically from their frontmatter (`title`, `description`, `date`, and optional `updated`).
- Every page needs a unique, specific `title` and `description`.
- The sitemap and `llms.txt` update themselves. Do not add Review or AggregateRating structured data (see above).

## Who is editing and how changes ship

- Rachel (GitHub: `Lynch022`) requests changes in plain language, usually through ChatGPT/Codex. Lou (`LTParis`) owns the repository. Either Rachel or Lou may review and merge a pull request.
- Never commit or push directly to `main`. Work on a new branch named for the change (for example `rachel/update-about-copy`) and open a pull request into `main`.
- End every pull request description with: "To publish this change, comment `makeitso` on this pull request."
- In the pull request, list what changed in plain language, note anything you left out or need Rachel to confirm, and mention the preview link if the host posts one.
- `main` deploys to the temporary preview site, and each pull request gets its own Vercel preview link. Merging is a person's decision, never the agent's: Rachel or Lou publishes by commenting `makeitso` on the pull request, which runs `.github/workflows/makeitso.yml` (build check, then merge).
- Use Node.js 22.23.4 or newer. Run `npm install` once, then `npm run build` before opening a pull request; do not open one if the build fails.
- Do not change hosting settings, DNS, the custom domain, the `noindex`/robots launch settings, repository access, or GitHub/Vercel configuration.
- The repository is public. Never add passwords, tokens, private client details, or personal phone numbers/addresses to it.
- If Rachel asks for something that conflicts with these rules (for example, a made-up stat or an unapproved photo), explain the rule and ask her for the real detail instead.

## Where things live

- Page copy: `src/pages/*.astro` and `src/data/site.ts`. Shared sections: `src/components/`. Styles: `src/styles/global.css`.
- Hero rotating reviews: pull quotes in `heroReviewQuotes` in `src/data/reviews.ts`. Each quote must be copied word for word from that review's text in `src/data/reviews.json`; the build fails otherwise.
- Featured review cards: `featuredReviewIds` in `src/data/reviews.ts`.
- Site photos: `src/assets/photos/`, imported into pages with `astro:assets` (see "Photos and video" below). Logos, video, and video posters: `public/`, referenced as `/filename`. Placeholders marked "goes here" are waiting for Rachel's approved media.
- Business facts for search engines and AI assistants (structured data and `llms.txt`): `src/data/business.ts`. Structured data: `src/components/Schema.astro`.
