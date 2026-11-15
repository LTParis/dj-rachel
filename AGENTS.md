# Project guidance

- This is a draft site based on the shared “The Headliner” concept. Keep the visible working-preview notice until Rachel approves the final copy and assets.
- Never invent credentials, reviews, client names, booking details, social links, audience counts, or service promises. Ask Rachel or the site owner when a fact is missing.
- Use only photos, video, logos, and testimonials Rachel has approved for the website.
- Keep review source, reviewer, date, and source-provided rating/recommendation together. Never infer ratings, merge reviewer identities, add review links that were not supplied, or add Review/AggregateRating structured data for first-party testimonials.
- Re-import the review source with `npm run reviews:import -- <source.json>`; do not edit the generated `src/data/reviews.json` by hand.
- Keep pages usable on mobile, keyboard accessible, and free of unnecessary client-side JavaScript or third-party trackers.
- Do not publish, connect the custom domain, or change hosting settings without the site owner's approval.
- Run `npm run build` after code changes.
