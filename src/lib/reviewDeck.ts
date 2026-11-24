export interface ReviewDeckState {
	version: 1;
	catalog: string[];
	remaining: string[];
}

function shuffle(ids: readonly string[], random: () => number): string[] {
	const order = [...ids];
	for (let i = order.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[order[i], order[j]] = [order[j], order[i]];
	}
	return order;
}

function isUniqueStringArray(value: unknown): value is string[] {
	return Array.isArray(value) && value.every((id) => typeof id === "string") && new Set(value).size === value.length;
}

function isDeckState(value: unknown): value is ReviewDeckState {
	if (!value || typeof value !== "object") return false;
	const { version, catalog, remaining } = value as Partial<ReviewDeckState>;
	return version === 1 && isUniqueStringArray(catalog) && isUniqueStringArray(remaining) && remaining.every((id) => catalog.includes(id));
}

export function createReviewDeck(ids: readonly string[], saved: unknown = null, random = Math.random): ReviewDeckState {
	const catalog = [...new Set(ids)];
	if (!isDeckState(saved)) return { version: 1, catalog, remaining: shuffle(catalog, random) };

	const available = new Set(catalog);
	const previous = new Set(saved.catalog);
	const added = catalog.filter((id) => !previous.has(id));
	return {
		version: 1,
		catalog,
		// Prioritize new reviews while retaining the unread queue from earlier visits.
		remaining: [...shuffle(added, random), ...saved.remaining.filter((id) => available.has(id))],
	};
}

export function takeReviewBatch(state: ReviewDeckState, size = 6, random = Math.random): string[] {
	const count = Math.min(Math.max(0, Math.trunc(size)), state.catalog.length);
	const batch: string[] = [];
	while (batch.length < count) {
		if (state.remaining.length === 0) {
			const order = shuffle(state.catalog, random);
			// A batch can cross rounds. Keep it unique without skipping anyone in the next round.
			const selected = new Set(batch);
			state.remaining = [...order.filter((id) => !selected.has(id)), ...order.filter((id) => selected.has(id))];
		}
		batch.push(state.remaining.shift()!);
	}
	return batch;
}
