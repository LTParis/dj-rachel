import type { APIRoute } from "astro";
import { reviewData } from "../data/reviews";

export const GET: APIRoute = () =>
	new Response(JSON.stringify(reviewData), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
