interface CorporateReel {
	src: string;
	poster?: string;
	width: number;
	height: number;
}

// Set this to Rachel's approved corporate reel when supplied.
// Use public/ assets, for example { src: "/corporate-reel.mp4", poster: "/corporate-reel.jpg", width: 1080, height: 1920 }.
export const corporateReel: CorporateReel | null = null;
