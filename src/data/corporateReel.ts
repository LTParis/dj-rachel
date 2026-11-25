interface CorporateReel {
	src: string;
	poster?: string;
	width: number;
	height: number;
}

// Rachel-approved Corporate reel, cropped to remove the CapCut watermark.
export const corporateReel: CorporateReel | null = {
	src: "/corporate-sizzle-reel.mp4",
	poster: "/corporate-sizzle-reel-poster.jpg",
	width: 720,
	height: 900,
};
