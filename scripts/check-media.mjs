// Runs before every build. Fails the build when photos or video would make the site
// slow or bloat the repository, and explains how to fix it. See "Photos and video" in AGENTS.md.
import { readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const MB = 1024 * 1024;
const IMAGE = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".heic", ".heif", ".avif", ".tif", ".tiff"]);
const VIDEO = new Set([".mp4", ".mov", ".m4v", ".webm", ".avi"]);
const isMedia = (file) => IMAGE.has(extname(file).toLowerCase()) || VIDEO.has(extname(file).toLowerCase());

function walk(dir) {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});
}

const problems = [];
const size = (file) => statSync(file).size;

for (const file of readdirSync(".").filter(isMedia)) {
	problems.push(`${file} is in the top folder. Move Rachel's raw uploads to incoming/, then process them with npm run media:add.`);
}

for (const file of walk("public")) {
	const ext = extname(file).toLowerCase();
	if (VIDEO.has(ext) && (ext !== ".mp4" || size(file) > 12 * MB)) {
		problems.push(`${file} (${(size(file) / MB).toFixed(1)} MB) must be a compressed MP4 under 12 MB. Run npm run media:add on the original.`);
	}
	if (IMAGE.has(ext) && size(file) > 600 * 1024) {
		problems.push(`${file} (${(size(file) / MB).toFixed(1)} MB) is too large for public/. Site photos belong in src/assets/photos/ via npm run media:add.`);
	}
}

for (const file of walk("src/assets")) {
	if (IMAGE.has(extname(file).toLowerCase()) && size(file) > 2.5 * MB) {
		problems.push(`${file} (${(size(file) / MB).toFixed(1)} MB) is too large. Run npm run media:add on the original.`);
	}
}

if (problems.length) {
	console.error("\nMedia check failed (see \"Photos and video\" in AGENTS.md):\n");
	for (const problem of problems) console.error(`  - ${problem}`);
	console.error("");
	process.exit(1);
}
console.log("Media check passed.");
