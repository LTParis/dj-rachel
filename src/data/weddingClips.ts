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
	{ src: "/wedding-testimonial-01.mp4", title: "Wedding testimonial 1", width: 1080, height: 1350, poster: "/wedding-testimonial-01.jpg" },
	{ src: "/wedding-testimonial-02.mp4", title: "Wedding testimonial 2", width: 1080, height: 1350, poster: "/wedding-testimonial-02.jpg" },
	{ src: "/wedding-testimonial-03.mp4", title: "Wedding testimonial 3", width: 1080, height: 1350, poster: "/wedding-testimonial-03.jpg" },
	{ src: "/wedding-testimonial-04.mp4", title: "Wedding testimonial 4", width: 1080, height: 1350, poster: "/wedding-testimonial-04.jpg" },
	{ src: "/wedding-testimonial-05.mp4", title: "Wedding testimonial 5", width: 1080, height: 1350, poster: "/wedding-testimonial-05.jpg" },
	{ src: "/wedding-testimonial-06.mp4", title: "Wedding testimonial 6", width: 1080, height: 1350, poster: "/wedding-testimonial-06.jpg" },
];
