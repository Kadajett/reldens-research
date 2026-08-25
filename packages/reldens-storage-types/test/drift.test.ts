/**
 * Drift detection for @reldens/storage. Asserts the exports and the driver-key map still
 * match the installed package, and that the config/entity schemas accept the shapes the
 * package's own samples/tests use.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import { STORAGE_DRIVERS, storageDriverSchema } from '../src/constants';
import { baseDataServerConfigSchema, objectionDataServerConfigSchema, prismaSchemaGeneratorConfigSchema } from '../src/config';
import { entityPropertyDefSchema, propertiesConfigSchema } from '../src/entity';

const require = createRequire(import.meta.url);
const pkg = require('@reldens/storage');
const pkgJson = require('@reldens/storage/package.json') as { version: string };
const PINNED = '0.91.0';

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){
        console.log(`note: installed @reldens/storage is ${pkgJson.version}, verified against ${PINNED}`);
    }
    assert.ok(pkgJson.version);
});

test('every documented export still exists', () => {
    const expected = ['BaseDataServer', 'BaseDriver', 'DriversMap', 'DriversClassMap',
        'ObjectionJsDataServer', 'ObjectionJsDriver', 'MikroOrmDataServer', 'MikroOrmDriver',
        'MikroOrmCore', 'PrismaDataServer', 'PrismaDriver', 'PrismaSchemaGenerator',
        'PrismaClientLoader', 'EntitiesGenerator', 'EntityProperties', 'TypeMapper', 'MySQLTablesProvider'];
    const missing = expected.filter((n) => !(n in pkg));
    assert.equal(missing.length, 0, 'missing: ' + missing.join(', '));
});

test('driver keys match DriversMap', () => {
    const keys = Object.keys(pkg.DriversMap).sort();
    assert.deepEqual(keys, ['mikro-orm', 'objection-js', 'prisma']);
    assert.ok(storageDriverSchema.safeParse(STORAGE_DRIVERS.PRISMA).success);
    assert.deepEqual(Object.values(STORAGE_DRIVERS).sort(), keys);
});

test('config schemas accept the package\'s canonical sample config', () => {
    // samples/objection.js + test-helpers.js canonical DB config
    const objection = {
        client: 'mysql',
        config: { host: 'localhost', port: 3306, user: 'u', password: 'p', database: 'db' },
        rawEntities: {},
    };
    assert.ok(baseDataServerConfigSchema.safeParse(objection).success);
    assert.ok(objectionDataServerConfigSchema.safeParse(objection).success);
    // objection + mysql2 accepts extra mysql2 keys in config (loose passes them)
    assert.ok(baseDataServerConfigSchema.safeParse({
        client: 'mysql2', config: { user: 'u', database: 'db', charset: 'utf8', ssl: {}, connectionLimit: 10 },
    }).success);
    // prisma schema generator config
    assert.ok(prismaSchemaGeneratorConfigSchema.safeParse({
        config: { user: 'u', password: 'p', host: 'localhost', port: 3306, database: 'db' },
        client: 'mysql', generateBinaryTargets: ['native'],
    }).success);
});

test('entity property + properties config accept fixture-shaped definitions', () => {
    const idProp = { isId: true, type: 'number', isRequired: true, dbType: 'int' };
    const refProp = { type: 'reference', reference: 'categories', alias: 'related_category', dbType: 'int' };
    const enumProp = { type: undefined, availableValues: [{ value: 1, label: 'A' }, { value: 2, label: 'B' }], dbType: 'enum' };
    assert.ok(entityPropertyDefSchema.safeParse(idProp).success);
    assert.ok(entityPropertyDefSchema.safeParse(refProp).success);
    assert.ok(entityPropertyDefSchema.safeParse(enumProp).success);
    assert.ok(propertiesConfigSchema.safeParse({
        showProperties: ['id', 'name'], editProperties: ['name'], listProperties: ['id', 'name'],
        filterProperties: ['id', 'name'], titleProperty: 'name',
        properties: { id: idProp, category_id: refProp },
        customExtra: true,
    }).success);
});
