// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const site = "https://djrachellynch.com";

// Last git commit date of the source file behind a URL, so search engines can tell which
// pages changed. Returns undefined when unknown (for example in a shallow clone).
function lastModified(pathname) {
	const base = pathname.replace(/^\/|\/$/g, "");
	const candidates = base
		? [`src/pages/${base}.astro`, `src/pages/${base}.md`, `src/pages/${base}/index.astro`]
		: ["src/pages/index.astro"];
	const file = candidates.find((candidate) => existsSync(candidate));
	if (!file) return undefined;
	try {
		const date = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim();
		return date || undefined;
	} catch {
		return undefined;
	}
}

export default defineConfig({
	site,
	trailingSlash: "always",
	integrations: [
		sitemap({
			// Individual gallery photo pages are near-duplicates; the Weddings page links to the gallery.
			filter: (page) => !new URL(page).pathname.startsWith("/weddings/gallery/"),
			serialize(item) {
				const lastmod = lastModified(new URL(item.url).pathname);
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
	],
});
