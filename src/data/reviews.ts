import reviewsData from "./reviews.json";

export interface ReviewSource {
	id: number;
	platform: "Google" | "Facebook";
	reviewer: string | null;
	date: string | null;
	dateIsExact: boolean;
	rating: number | null;
	recommendation: boolean | null;
}

export interface Review {
	id: string;
	text: string;
	reviewer: string | null;
	sources: ReviewSource[];
	date: string | null;
}

export interface ReviewData {
	meta: {
		inputRecords: number;
		includedUniqueReviews: number;
		excludedEmptyRecords: number;
		mergedDuplicateRecords: number;
		sourceRecords: Record<string, number>;
	};
	reviews: Review[];
}

export const reviewData = reviewsData as ReviewData;
export const featuredReviewIds = ["rachel-review-5", "rachel-review-10", "rachel-review-6"];

// Short pull quotes for the rotating card over the hero sizzle reel.
// Each quote must appear word-for-word in that review's imported text;
// HeroReviews.astro fails the build if it does not.
export const heroReviewQuotes = [
	{ id: "rachel-review-2", quote: "DJ Rachel saved the day. We had the best wedding EVER!!" },
	{ id: "rachel-review-5", quote: "She made the entire event seamless, on-track, and completely stress-free." },
	{ id: "rachel-review-24", quote: "Enter DJ Rachel - she absolutely understood the assignment." },
	{ id: "rachel-review-7", quote: "We recommend DJ Rachel to all of our couples and for good reason" },
	{ id: "rachel-review-39", quote: "She powered through a storm/lost power and still made our day perfect!" },
];

export function reviewExcerpt(text: string, limit: number): string {
	if (text.length <= limit) return text;

	const excerpt = text.slice(0, limit);
	const lastSpace = excerpt.lastIndexOf(" ");
	return `${excerpt.slice(0, lastSpace > 0 ? lastSpace : limit).trimEnd()}…`;
}

export function formatReviewDate(date: string | null, exact: boolean): string | null {
	if (!date) return null;
	if (exact && /^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
	const year = date.match(/^\d{4}/)?.[0];
	return year ?? null;
}
