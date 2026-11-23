export interface WeddingClip {
	src: string;
	title: string;
	width: number;
	height: number;
	poster?: string;
	captions?: string;
}

// Add up to six Rachel-approved testimonial clips from public/ here, in display order.
// Supply a poster for each clickable thumbnail; unfilled slots show “Video coming soon.”
export const weddingClips: WeddingClip[] = [];
