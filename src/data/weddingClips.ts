export interface WeddingClip {
	src: string;
	title: string;
	width: number;
	height: number;
	poster?: string;
	captions?: string;
}

// Add Rachel-approved clips from public/ here. The first clip appears first.
export const weddingClips: WeddingClip[] = [];
