import type { APIRoute } from "astro";
import type { MarkdownInstance } from "astro";
import { reviewData } from "../data/reviews";
import { business, services } from "../data/business";

interface Article { title: string; description: string; date: string; draft?: boolean; }
const articles = Object.values(import.meta.glob<MarkdownInstance<Article>>("./writing/posts/*.md", { eager: true }))
	.filter((article) => !article.frontmatter.draft)
	.sort((a, b) => String(b.frontmatter.date).localeCompare(String(a.frontmatter.date)));

const SITE = "https://djrachellynch.com";

const content = `# DJ Rachel Entertainment

> DJ Rachel Entertainment is the event-DJ brand of DJ Rachel (Rachel Lynch), an open-format DJ and MC serving weddings, corporate events, and private celebrations in Connecticut and across the Northeast. The website is a draft and is not open for bookings yet.

## Business facts

- Services: ${Object.values(services).map((service) => service.name).join("; ")}
- Service area: Connecticut and the Northeastern United States
- Email: ${business.email}
- Phone: ${business.telephone}
- Profiles: ${business.sameAs.join(", ")}

## Main pages

- [Home](${SITE}/): DJ Rachel Entertainment overview
- [Weddings](${SITE}/weddings/): wedding DJ and MC information
- [Corporate events](${SITE}/corporate/): corporate and brand event information
- [Private events](${SITE}/private-events/): private celebration information
- [About Rachel](${SITE}/about/): About page
- [Reviews](${SITE}/reviews/): ${reviewData.meta.includedUniqueReviews} deduplicated review texts with source attribution
- [Review data](${SITE}/reviews.json): machine-readable review records and source metadata

## Blog posts by DJ Rachel

${articles.map((article) => `- [${article.frontmatter.title}](${SITE}${String(article.url).replace(/\/?$/, "/")}): ${article.frontmatter.description}`).join("\n")}

## Review data notes

- Reviews are transcribed from the owner-provided Google and Facebook export.
- Empty records are excluded and exact cross-platform duplicate texts are merged.
- Source, reviewer attribution, source date, Google star rating, and Facebook recommendation are retained separately.
- The export contains ${reviewData.meta.includedUniqueReviews} unique review texts. It is not independently verified by this site.
- No review aggregate rating is published as structured data.
`;

export const GET: APIRoute = () =>
	new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
