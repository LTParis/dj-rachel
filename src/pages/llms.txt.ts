import type { APIRoute } from "astro";
import { reviewData } from "../data/reviews";

const SITE = "https://djrachellynch.com";

const content = `# DJ Rachel Entertainment

> DJ Rachel Entertainment is the event-DJ brand of DJ Rachel, serving weddings, corporate events, and private celebrations. The website is a draft and is not open for bookings yet.

## Main pages

- [Home](${SITE}/): DJ Rachel Entertainment overview
- [Weddings](${SITE}/weddings/): wedding DJ and MC information
- [Corporate events](${SITE}/corporate/): corporate and brand event information
- [Private events](${SITE}/private-events/): private celebration information
- [About Rachel](${SITE}/about/): About page
- [Reviews](${SITE}/reviews/): ${reviewData.meta.includedUniqueReviews} deduplicated review texts with source attribution
- [Review data](${SITE}/reviews.json): machine-readable review records and source metadata

## Review data notes

- Reviews are transcribed from the owner-provided Google and Facebook export.
- Empty records are excluded and exact cross-platform duplicate texts are merged.
- Source, reviewer attribution, source date, Google star rating, and Facebook recommendation are retained separately.
- The export contains ${reviewData.meta.includedUniqueReviews} unique review texts. It is not independently verified by this site.
- No review aggregate rating is published as structured data.
`;

export const GET: APIRoute = () =>
	new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
