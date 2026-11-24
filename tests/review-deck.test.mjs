import test from "node:test";
import assert from "node:assert/strict";
import { createReviewDeck, takeReviewBatch } from "../src/lib/reviewDeck.ts";

const ids = (count) => Array.from({ length: count }, (_, i) => `review-${i + 1}`);
function random(seed = 42) {
	return () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32);
}

test("all 108 reviews appear once in batches of six before a new round", () => {
	const catalog = ids(108), rng = random(), deck = createReviewDeck(catalog, null, rng);
	for (let round = 0; round < 2; round++) {
		const seen = [];
		for (let batch = 0; batch < 18; batch++) {
			const next = takeReviewBatch(deck, 6, rng);
			assert.equal(next.length, 6);
			assert.equal(new Set(next).size, 6);
			seen.push(...next);
		}
		assert.equal(new Set(seen).size, 108);
		assert.deepEqual(new Set(seen), new Set(catalog));
		assert.notDeepEqual(seen, catalog);
	}
});

test("saved progress continues without repeats after a reload", () => {
	const catalog = ids(108), rng = random();
	const first = createReviewDeck(catalog, null, rng);
	const seen = takeReviewBatch(first, 6, rng);
	const restored = createReviewDeck(catalog, JSON.parse(JSON.stringify(first)), rng);
	while (restored.remaining.length) seen.push(...takeReviewBatch(restored, 6, rng));
	assert.equal(seen.length, 108);
	assert.equal(new Set(seen).size, 108);
});

test("batches stay full and unique when a round ends partway through a batch", () => {
	const catalog = ids(8), rng = random(), deck = createReviewDeck(catalog, null, rng), seen = [];
	for (let i = 0; i < 4; i++) {
		const batch = takeReviewBatch(deck, 6, rng);
		assert.equal(batch.length, 6);
		assert.equal(new Set(batch).size, 6);
		seen.push(...batch);
	}
	for (let i = 0; i < 3; i++) assert.deepEqual(new Set(seen.slice(i * 8, i * 8 + 8)), new Set(catalog));
});

test("new reviews join the unread queue and removed reviews are discarded", () => {
	const original = ids(8), rng = random(), deck = createReviewDeck(original, null, rng);
	const seen = takeReviewBatch(deck, 6, rng);
	const updated = createReviewDeck(ids(10), JSON.parse(JSON.stringify(deck)), rng);
	const batch = takeReviewBatch(updated, 6, rng);
	assert.deepEqual(new Set(batch.slice(0, 2)), new Set(["review-9", "review-10"]));
	assert.equal(new Set([...seen, ...batch].slice(0, 10)).size, 10);
	const reduced = createReviewDeck(ids(3), updated, rng);
	assert.ok([...reduced.catalog, ...reduced.remaining].every((id) => ids(3).includes(id)));
});

test("invalid saved state starts a fresh valid deck", () => {
	for (const bad of [null, {}, { version: 2 }, { version: 1, catalog: ids(8), remaining: ["unknown"] }, { version: 1, catalog: ids(8), remaining: ["review-1", "review-1"] }]) {
		const deck = createReviewDeck(ids(8), bad, random());
		assert.equal(deck.remaining.length, 8);
		assert.equal(new Set(takeReviewBatch(deck)).size, 6);
	}
});

test("small or empty collections never duplicate reviews inside a batch", () => {
	const deck = createReviewDeck(ids(3), null, random());
	for (let i = 0; i < 3; i++) assert.deepEqual(new Set(takeReviewBatch(deck)), new Set(ids(3)));
	assert.deepEqual(takeReviewBatch(createReviewDeck([])), []);
});
