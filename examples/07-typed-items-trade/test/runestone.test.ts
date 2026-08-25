/**
 * The extended schema types and validates the custom item.
 *
 * Shows the difference the extension makes: the base schema waves the runestone
 * through (its catchall accepts unknown keys), while the extended schema enforces
 * `element` and `power`.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { itemDataSchema } from '@reldens-community/items-types';
import { runestoneSchema } from '../optional-validation/runestone-schema';
import { runestoneModel } from '../src/runestone';

test('extended schema accepts a valid runestone', () => {
    assert.equal(runestoneSchema.safeParse(runestoneModel).success, true);
});

test('extended schema rejects a bad element', () => {
    const bad = { ...runestoneModel, element: 'plasma' };
    assert.equal(runestoneSchema.safeParse(bad).success, false);
});

test('extended schema requires power', () => {
    const { power, ...noPower } = runestoneModel;
    assert.equal(runestoneSchema.safeParse(noPower).success, false);
});

test('base schema alone does NOT catch the bad element', () => {
    // The catchall lets the extra fields through untouched - which is why you extend.
    const bad = { ...runestoneModel, element: 'plasma' };
    assert.equal(itemDataSchema.safeParse(bad).success, true);
});
