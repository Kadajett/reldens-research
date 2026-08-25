/**
 * Drift detection for @reldens/modifiers. Asserts exports and the OPS/COMPARE/TYPES/MOD_*
 * vocabularies match the installed package, and that the schemas accept valid config.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import { OPS, COMPARE, VALUE_TYPES, MOD_STATES } from '../src/constants';
import { modifierSchema, conditionSchema } from '../src/modifier';

const require = createRequire(import.meta.url);
const pkg = require('@reldens/modifiers');
const pkgJson = require('@reldens/modifiers/package.json') as { version: string };
const C = pkg.ModifierConst as Record<string, any>;
const PINNED = '0.34.0';

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){
        console.log(`note: installed @reldens/modifiers is ${pkgJson.version}, verified against ${PINNED}`);
    }
    assert.ok(pkgJson.version);
});

test('every export still exists', () => {
    const expected = ['Calculator', 'Condition', 'Modifier', 'ModifierConst', 'PropertyManager'];
    const missing = expected.filter((n) => !(n in pkg));
    assert.equal(missing.length, 0, 'missing: ' + missing.join(', '));
});

test('OPS / COMPARE / TYPES / MOD_* match ModifierConst', () => {
    assert.deepEqual(OPS, C.OPS);
    assert.deepEqual(COMPARE, C.COMPARE);
    assert.deepEqual(VALUE_TYPES, C.TYPES);
    assert.deepEqual(MOD_STATES, {
        MISSING_KEY: C.MOD_MISSING_KEY, MISSING_PROPERTY_KEY: C.MOD_MISSING_PROPERTY_KEY,
        MISSING_OPERATION: C.MOD_MISSING_OPERATION, MISSING_VALUE: C.MOD_MISSING_VALUE,
        READY: C.MOD_READY, APPLIED: C.MOD_APPLIED, REVERTED: C.MOD_REVERTED,
        UNDEFINED_TARGET: C.MOD_UNDEFINED_TARGET, INVALID_CONDITIONS: C.MOD_INVALID_CONDITIONS,
        MISSING_CONDITION_INSTANCE: C.MOD_MISSING_CONDITION_INSTANCE, MODIFIER_ERROR: C.MOD_MODIFIER_ERROR,
    });
});

test('a valid modifier reaches MOD_READY in the real package and passes the schema', () => {
    const props = { key: 'atk-up', propertyKey: 'stats/atk', operation: C.OPS.INC, value: 10 };
    assert.ok(modifierSchema.safeParse(props).success);
    const m = new pkg.Modifier(props);
    assert.equal(m.state, C.MOD_READY, 'real Modifier should be READY for the same props');
    // property_key alias is accepted
    assert.ok(modifierSchema.safeParse({ key: 'k', property_key: 'stats/def', operation: C.OPS.DEC, value: 5 }).success);
    // missing propertyKey (either spelling) is rejected
    assert.ok(!modifierSchema.safeParse({ key: 'k', operation: C.OPS.INC, value: 1 }).success);
});

test('condition requires key/propertyKey/conditional/value', () => {
    assert.ok(conditionSchema.safeParse({ key: 'lvl', propertyKey: 'stats/level', conditional: C.COMPARE.GE, value: 5 }).success);
    assert.ok(!conditionSchema.safeParse({ key: 'lvl', propertyKey: 'stats/level', value: 5 }).success, 'conditional required');
    assert.ok(!conditionSchema.safeParse({ key: 'lvl', conditional: 'ge', value: 5 }).success, 'propertyKey required');
});
