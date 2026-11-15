import type { APIRoute } from "astro";

const content = `User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
	new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
