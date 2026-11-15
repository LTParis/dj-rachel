import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const [inputFile, outputFile = "src/data/reviews.json"] = process.argv.slice(2);

if (!inputFile) {
	throw new Error("Usage: node scripts/dedupe-reviews.mjs <source.json> [output.json]");
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

await writeFile(resolve(outputFile), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(output.meta, null, 2));
