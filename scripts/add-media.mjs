// Turns one of Rachel's raw uploads into a web-ready file and removes the raw upload.
//
//   npm run media:add -- incoming/IMG_1234.jpg wedding-first-dance
//   npm run media:add -- incoming/reel.mov corporate-reel
//
// Photos  -> src/assets/photos/<name>.jpg  (max 2000px, quality 80, location/camera data removed).
//            Use them with astro:assets: import photo from "../assets/photos/<name>.jpg".
// Videos  -> public/<name>.mp4 (H.264, max 720px wide, sound kept, fast start)
//            plus public/<name>-poster.jpg for the poster/thumbnail. Needs ffmpeg.
import { existsSync, rmSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { extname } from "node:path";

const [input, rawName, ...flags] = process.argv.slice(2);
const keep = flags.includes("--keep");
const fail = (message) => {
	console.error(`\n${message}\n`);
	process.exit(1);
};

if (!input || !rawName) fail("Usage: npm run media:add -- <incoming/file> <descriptive-name> [--keep]");
if (!existsSync(input)) fail(`Can't find ${input}.`);

const name = rawName.toLowerCase().replace(/\.[a-z0-9]+$/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ext = extname(input).toLowerCase();
const isVideo = [".mp4", ".mov", ".m4v", ".webm", ".avi"].includes(ext);
const mb = (file) => `${(statSync(file).size / 1024 / 1024).toFixed(1)} MB`;

function ffmpegAvailable() {
	try {
		execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
		return true;
	} catch {
		return false;
	}
}

let outputs;
if (isVideo) {
	if (!ffmpegAvailable()) {
		fail(
			"ffmpeg isn't installed, so this video can't be compressed here.\n" +
				"Try installing it (for example: apt-get install -y ffmpeg or brew install ffmpeg) and run this again.\n" +
				"If that isn't possible, leave the video in incoming/ and tell Rachel and Lou it still needs compressing.",
		);
	}
	const video = `public/${name}.mp4`;
	const poster = `public/${name}-poster.jpg`;
	if (existsSync(video)) fail(`${video} already exists. Pick a different name.`);
	const hasAudio = execFileSync("ffprobe", ["-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", input], { encoding: "utf8" }).trim() !== "";
	execFileSync("ffmpeg", [
		"-y", "-v", "error", "-i", input,
		"-vf", "scale='min(720,iw)':-2,fps=30",
		"-c:v", "libx264", "-preset", "slow", "-crf", "27", "-profile:v", "high", "-pix_fmt", "yuv420p",
		...(hasAudio ? ["-c:a", "aac", "-b:a", "96k", "-ac", "2"] : ["-an"]),
		"-movflags", "+faststart", video,
	], { stdio: "inherit" });
	execFileSync("ffmpeg", ["-y", "-v", "error", "-ss", "1", "-i", video, "-frames:v", "1", "-q:v", "4", poster], { stdio: "inherit" });
	const [width, height] = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", video], { encoding: "utf8" }).trim().split(",");
	if (statSync(video).size > 12 * 1024 * 1024) {
		console.warn(`\nWarning: ${video} is ${mb(video)}, over the 12 MB build limit. Trim the clip or ask Lou to compress it further.`);
	}
	outputs = [`${video} (${mb(video)}, ${width}x${height})`, `${poster} (${mb(poster)})`];
} else {
	const { default: sharp } = await import("sharp");
	const photo = `src/assets/photos/${name}.jpg`;
	if (existsSync(photo)) fail(`${photo} already exists. Pick a different name.`);
	const info = await sharp(input)
		.rotate() // apply the phone's orientation before metadata is removed
		.resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
		.jpeg({ quality: 80, mozjpeg: true })
		.toFile(photo); // sharp drops EXIF (including GPS location) by default
	outputs = [`${photo} (${mb(photo)}, ${info.width}x${info.height})`];
}

if (!keep) rmSync(input);
console.log(`\nCreated:\n  ${outputs.join("\n  ")}${keep ? "" : `\nRemoved the raw upload ${input}.`}\n`);
