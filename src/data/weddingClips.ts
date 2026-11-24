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
export const weddingClips: WeddingClip[] = [
	{ src: "/wedding-testimonial-03.mp4", title: "Allie & Scott", width: 720, height: 900, poster: "/wedding-testimonial-03.jpg" },
	{ src: "/wedding-testimonial-02.mp4", title: "Jill & Jason", width: 720, height: 900, poster: "/wedding-testimonial-02.jpg" },
	{ src: "/wedding-testimonial-01.mp4", title: "Krista & Harold", width: 720, height: 900, poster: "/wedding-testimonial-01.jpg" },
	{ src: "/wedding-testimonial-04.mp4", title: "Taylor & Dom", width: 720, height: 900, poster: "/wedding-testimonial-04.jpg" },
	{ src: "/wedding-testimonial-05.mp4", title: "Becky & Zack", width: 720, height: 900, poster: "/wedding-testimonial-05.jpg" },
	{ src: "/wedding-testimonial-06.mp4", title: "Laura & Charlie", width: 720, height: 900, poster: "/wedding-testimonial-06.jpg" },
];
