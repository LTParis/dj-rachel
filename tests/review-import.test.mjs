import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const script = fileURLToPath(new URL("../scripts/dedupe-reviews.mjs", import.meta.url));

function fixture(t) {
	const dir = mkdtempSync(join(tmpdir(), "rachel-review-import-"));
	t.after(() => rmSync(dir, { recursive: true, force: true }));
	const input = join(dir, "source.json"), output = join(dir, "reviews.json");
	const run = (records, append = false) => {
		writeFileSync(input, JSON.stringify(records));
		return spawnSync(process.execPath, [script, input, output, ...(append ? ["--append"] : [])], { encoding: "utf8" });
	};
	const original = [
		{ id: 1, source: "Google", reviewer: "Test reviewer", text: "A great celebration.", date: "2025-05-01", date_is_exact: true, rating: 5 },
		{ id: 2, source: "Facebook", reviewer: "Test account", text: "A great celebration.", date: "2025-05-02", date_is_exact: true, recommends: true },
		{ id: 3, source: "Google", text: "" },
	];
	assert.equal(run(original).status, 0);
	return { run, output, before: JSON.parse(readFileSync(output, "utf8")) };
}

test("appending a review preserves existing text, identities, provenance and import counts", (t) => {
	const { run, output, before } = fixture(t);
	const result = run([{ id: 4, source: "Google", reviewer: "New test reviewer", text: "Wonderful music.", date: "2026-05-01", date_is_exact: true, rating: 4 }], true);
	assert.equal(result.status, 0, result.stderr);
	const after = JSON.parse(readFileSync(output, "utf8"));
	assert.deepEqual(after.reviews.find((review) => review.id === before.reviews[0].id), before.reviews[0]);
	assert.deepEqual(after.reviews[0].sources[0], { id: 4, platform: "Google", reviewer: "New test reviewer", date: "2026-05-01", dateIsExact: true, rating: 4, recommendation: null });
	assert.deepEqual(after.meta, { inputRecords: 4, includedUniqueReviews: 2, excludedEmptyRecords: 1, mergedDuplicateRecords: 1, sourceRecords: { Google: 2, Facebook: 1 } });
});

for (const [label, record] of [
	["duplicate normalized text", { id: 4, source: "Facebook", text: "A GREAT celebration!" }],
	["reused source ID", { id: 1, source: "Google", text: "Different text." }],
	["source ID reused across platforms", { id: 1, source: "Facebook", text: "Different text." }],
]) {
	test(`appending rejects ${label} without changing the existing output`, (t) => {
		const { run, output } = fixture(t);
		const before = readFileSync(output, "utf8");
		const result = run([record], true);
		assert.notEqual(result.status, 0);
		assert.match(result.stderr, /already imported/);
		assert.equal(readFileSync(output, "utf8"), before);
	});
}
