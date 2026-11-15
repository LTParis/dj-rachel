# Project guidance

- This is a draft site based on the shared “The Headliner” concept. Keep the visible working-preview notice until Rachel approves the final copy and assets.
- Never invent credentials, reviews, client names, booking details, social links, audience counts, or service promises. Ask Rachel or the site owner when a fact is missing.
- Use only photos, video, logos, and testimonials Rachel has approved for the website.
- Keep review source, reviewer, date, and source-provided rating/recommendation together. Never infer ratings, merge reviewer identities, add review links that were not supplied, or add Review/AggregateRating structured data for first-party testimonials.
- Re-import the review source with `npm run reviews:import -- <source.json>`; do not edit the generated `src/data/reviews.json` by hand.
- Keep pages usable on mobile, keyboard accessible, and free of unnecessary client-side JavaScript or third-party trackers.
- Do not publish, connect the custom domain, or change hosting settings without the site owner's approval.
- Run `npm run build` after code changes.

## Who is editing and how changes ship

- Rachel (GitHub: `Lynch022`) requests changes in plain language, usually through ChatGPT/Codex. Lou (`LTParis`) owns the repository. Either Rachel or Lou may review and merge a pull request.
- Never commit or push directly to `main`. Work on a new branch named for the change (for example `rachel/update-about-copy`) and open a pull request into `main`.
- In the pull request, list what changed in plain language, note anything you left out or need Rachel to confirm, and mention the preview link if the host posts one.
- `main` deploys to the temporary preview site, and each pull request gets its own Vercel preview link. Merging is a person's decision (Rachel or Lou), never the agent's.
- Use Node.js 22.23.4 or newer. Run `npm install` once, then `npm run build` before opening a pull request; do not open one if the build fails.
- Do not change hosting settings, DNS, the custom domain, the `noindex`/robots launch settings, repository access, or GitHub/Vercel configuration.
- The repository is public. Never add passwords, tokens, private client details, or personal phone numbers/addresses to it.
- If Rachel asks for something that conflicts with these rules (for example, a made-up stat or an unapproved photo), explain the rule and ask her for the real detail instead.

## Where things live

- Page copy: `src/pages/*.astro` and `src/data/site.ts`. Shared sections: `src/components/`. Styles: `src/styles/global.css`.
- Hero rotating reviews: pull quotes in `heroReviewQuotes` in `src/data/reviews.ts`. Each quote must be copied word for word from that review's text in `src/data/reviews.json`; the build fails otherwise.
- Featured review cards: `featuredReviewIds` in `src/data/reviews.ts`.
- Approved images and video: add them to `public/` and reference them as `/filename.jpg`. Placeholders marked "goes here" are waiting for Rachel's approved media.
