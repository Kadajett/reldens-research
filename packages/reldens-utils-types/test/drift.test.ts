/**
 * Drift detection for @reldens/utils. Asserts the exports and the Logger level vocabulary
 * still match the installed package, and that the SchemaValidator rule schema accepts a
 * real schema the package's own SchemaValidator validates against.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import { LOG_LEVELS, schemaRuleSchema, validatorSchemaSchema } from '../src/index';

const require = createRequire(import.meta.url);
const pkg = require('@reldens/utils');
const pkgJson = require('@reldens/utils/package.json') as { version: string };
const PINNED = '0.54.0';

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){ console.log(`note: installed @reldens/utils is ${pkgJson.version}, verified against ${PINNED}`); }
    assert.ok(pkgJson.version);
});

test('every documented export still exists', () => {
    const expected = ['EventsManager', 'EventsManagerSingleton', 'ErrorManager', 'InteractionArea',
        'PageRangeProvider', 'ValidatorInterface', 'SchemaValidator', 'EnvVar', 'Logger', 'sc'];
    const missing = expected.filter((n) => !(n in pkg));
    assert.equal(missing.length, 0, 'missing: ' + missing.join(', '));
});

test('Logger levels match the installed Logger', () => {
    assert.deepEqual(LOG_LEVELS, pkg.Logger.logLevels);
});

test('the rule schema accepts a schema the real SchemaValidator uses, and it validates', () => {
    const schema = {
        name: { type: 'string', required: true, min: 1 },
        age: { type: 'int', min: 0 },
        tags: { type: 'array', valuesType: 'string' },
    };
    assert.ok(validatorSchemaSchema.safeParse(schema).success);
    assert.ok(schemaRuleSchema.safeParse({ type: 'string', required: true }).success);
    assert.ok(!schemaRuleSchema.safeParse({ required: true }).success, 'type is required');
    // the real validator accepts a conforming object under this schema
    const validator = new pkg.SchemaValidator(schema);
    assert.equal(validator.validate({ name: 'a', age: 3, tags: ['x'] }), true);
});
