/**
 * Drift detection for @reldens/server-utils. Asserts the exports still exist and the config
 * schemas accept representative config objects.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import { uploaderFactoryPropsSchema, appServerConfigSchema, encryptorConfigSchema } from '../src/index';

const require = createRequire(import.meta.url);
const pkg = require('@reldens/server-utils');
const pkgJson = require('@reldens/server-utils/package.json') as { version: string };
const PINNED = '0.46.0';

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){ console.log(`note: installed @reldens/server-utils is ${pkgJson.version}, verified against ${PINNED}`); }
    assert.ok(pkgJson.version);
});

test('every documented export still exists', () => {
    const expected = ['FileHandler', 'AppServerFactory', 'UploaderFactory', 'Encryptor',
        'Http2CdnServer', 'ServerDefaultConfigurations', 'ServerFactoryUtils'];
    const missing = expected.filter((n) => !(n in pkg));
    assert.equal(missing.length, 0, 'missing: ' + missing.join(', '));
});

test('config schemas accept representative configs', () => {
    assert.ok(appServerConfigSchema.safeParse({ port: 8080, useHttps: false, useCors: true, corsOrigin: '*' }).success);
    assert.ok(uploaderFactoryPropsSchema.safeParse({ maxFileSize: 1024, fileLimit: 3, mimeTypes: { image: ['image/png'] } }).success);
    assert.ok(encryptorConfigSchema.safeParse({ iterations: 100000, algorithm: 'aes-256-gcm' }).success);
});

test('ServerDefaultConfigurations exposes mimeTypes/cacheConfig as documented', () => {
    assert.equal(typeof pkg.ServerDefaultConfigurations.mimeTypes, 'object');
    assert.equal(typeof pkg.ServerDefaultConfigurations.cacheConfig, 'object');
});
