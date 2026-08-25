/**
 * The item catalog is verified with the @reldens-community/items-types zod schemas.
 *
 * This is where "we use our zod types to verify" happens as a repeatable check.
 * The game code stays zod-free; the test asserts the same plain catalog the game
 * ships is a shape the schemas (and therefore the engine) accept.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { itemDataSchema, ITEM_TYPES } from '@reldens-community/items-types';
import { itemsCatalog } from '../src/items-catalog';

test('every catalog entry passes itemDataSchema', () => {
    for (const entry of itemsCatalog) {
        const result = itemDataSchema.safeParse(entry);
        assert.equal(result.success, true, `Invalid entry: ${JSON.stringify(entry)}`);
    }
});

test('catalog uses real ItemsConst type ids', () => {
    const validTypes: number[] = Object.values(ITEM_TYPES);
    for (const entry of itemsCatalog) {
        assert.ok(validTypes.includes(entry.type), `Unknown type ${entry.type} for "${entry.key}"`);
    }
});

test('a bad catalog entry is rejected', () => {
    const bad = { id: 9, key: 'broken', type: 999 };
    assert.equal(itemDataSchema.safeParse(bad).success, false);
});
