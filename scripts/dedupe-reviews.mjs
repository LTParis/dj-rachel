import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const append = args.includes("--append");
const [inputFile, outputFile = "src/data/reviews.json"] = args.filter((arg) => arg !== "--append");

if (!inputFile) {
	throw new Error("Usage: node scripts/dedupe-reviews.mjs <source.json> [output.json] [--append]");
}

const sourceRecords = JSON.parse(await readFile(resolve(inputFile), "utf8"));

if (!Array.isArray(sourceRecords)) {
	throw new TypeError("The review export must contain a JSON array.");
}

const normalize = (value) =>
	String(value ?? "")
		.normalize("NFKC")
		.toLocaleLowerCase("en")
		.replace(/[^\p{L}\p{N}]+/gu, " ")
		.trim();

const nonemptyRecords = sourceRecords.filter(
	(record) => typeof record.text === "string" && record.text.trim().length > 0,
);
const groups = new Map();

for (const record of nonemptyRecords) {
	const key = normalize(record.text);
	const group = groups.get(key) ?? [];
	group.push(record);
	groups.set(key, group);
}

const sourceCounts = {};
for (const record of nonemptyRecords) {
	sourceCounts[record.source] = (sourceCounts[record.source] ?? 0) + 1;
}

const reviews = [...groups.values()]
	.map((group) => {
		const records = group.sort((a, b) => {
			if (a.source === b.source) return String(b.date ?? "").localeCompare(String(a.date ?? ""));
			return a.source === "Google" ? -1 : b.source === "Google" ? 1 : 0;
		});
		const reviewers = [...new Map(
			records
				.filter((record) => typeof record.reviewer === "string" && record.reviewer.trim())
				.map((record) => [normalize(record.reviewer), record.reviewer.trim()]),
		).values()];
		const sources = records.map((record) => ({
			id: record.id,
			platform: record.source,
			reviewer: typeof record.reviewer === "string" && record.reviewer.trim() ? record.reviewer.trim() : null,
			date: typeof record.date === "string" && record.date ? record.date : null,
			dateIsExact: record.date_is_exact === true,
			rating: Number.isInteger(record.rating) ? record.rating : null,
			recommendation: typeof record.recommends === "boolean" ? record.recommends : null,
		}));
		const latestDate = sources
			.map((source) => source.date)
			.filter((date) => date !== null)
			.sort()
			.at(-1) ?? null;

		return {
			id: `rachel-review-${Math.min(...records.map((record) => Number(record.id)).filter(Number.isFinite))}`,
			text: records[0].text.trim(),
			reviewer: reviewers.length === 1 ? reviewers[0] : null,
			sources,
			date: latestDate,
		};
	})
	.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

const output = {
	meta: {
		inputRecords: sourceRecords.length,
		includedUniqueReviews: reviews.length,
		excludedEmptyRecords: sourceRecords.length - nonemptyRecords.length,
		mergedDuplicateRecords: nonemptyRecords.length - reviews.length,
		sourceRecords: sourceCounts,
	},
	reviews,
};

if (append) {
	// New reviews can be imported without the original full export. Preserve every
	// existing review and its source metadata, including historical empty counts.
	const previous = JSON.parse(await readFile(resolve(outputFile), "utf8"));
	const existingSources = new Set(previous.reviews.flatMap((review) =>
		review.sources.map((source) => source.id),
	));
	const existingTexts = new Set(previous.reviews.map((review) => normalize(review.text)));
	for (const review of output.reviews) {
		const sourceIds = review.sources.map((source) => source.id);
		if (existingTexts.has(normalize(review.text)) || new Set(sourceIds).size !== sourceIds.length ||
			sourceIds.some((id) => existingSources.has(id))) {
			throw new Error("This review or source ID is already imported. Use the full source export to consolidate duplicate sources.");
		}
		for (const id of sourceIds) existingSources.add(id);
	}
	output.reviews = [...previous.reviews, ...output.reviews]
		.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
	output.meta.inputRecords += previous.meta.inputRecords;
	output.meta.includedUniqueReviews = output.reviews.length;
	output.meta.excludedEmptyRecords += previous.meta.excludedEmptyRecords;
	output.meta.mergedDuplicateRecords += previous.meta.mergedDuplicateRecords;
	for (const [source, count] of Object.entries(previous.meta.sourceRecords)) {
		output.meta.sourceRecords[source] = (output.meta.sourceRecords[source] ?? 0) + count;
	}
}

await writeFile(resolve(outputFile), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(output.meta, null, 2));
