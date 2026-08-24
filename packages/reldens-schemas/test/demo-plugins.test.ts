/**
 * The demo-plugin definition rules.
 *
 * Each rule encodes a real Reldens behaviour with a file:line source; each test here
 * shows the rule firing on the mistake it exists to catch, and staying quiet on the
 * correct version.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DemoPluginDefinitionSchema, validateDemoPlugin } from '../src/demo-plugins';
import { RELDENS_EVENT_PROVENANCE } from '../src/generated/events';

class FakeRoom {}
class FakeNpc {}

const base = {
    name: 'demo',
    kind: 'custom-server' as const,
    summary: 'test plugin'
};

test('a correct server plugin definition passes', () => {
    const parsed = DemoPluginDefinitionSchema.safeParse({
        ...base,
        listensTo: [
            {event: 'reldens.beforeInitializeManagers', purpose: 'register classes'},
            {event: 'reldens.serverConfigFeaturesReady', purpose: 'log readiness'}
        ],
        registers: [
            {bucket: 'server/customClasses/roomsClass', key: 'TutorialRoom', classRef: FakeRoom, describedAs: 'room'},
            {bucket: 'server/customClasses/objects', key: 'npc_2', classRef: FakeNpc, describedAs: 'npc'}
        ]
    });
    assert.ok(parsed.success, JSON.stringify(parsed.error?.issues, null, 2));
});

test('a typo in an event name is rejected, with the silent-failure explanation', () => {
    const parsed = DemoPluginDefinitionSchema.safeParse({
        ...base,
        listensTo: [{event: 'reldens.serverConfigFeautresReady', purpose: 'typo'}]
    });
    assert.ok(!parsed.success);
    assert.match(parsed.error!.issues[0]!.message, /never fires and never errors/);
});

test('allowCustomEvents permits game-defined names', () => {
    const parsed = DemoPluginDefinitionSchema.safeParse({
        ...base,
        allowCustomEvents: true,
        listensTo: [{event: 'myGame.customThing', purpose: 'game event'}]
    });
    assert.ok(parsed.success);
});

test('registering a room class without the beforeInitializeManagers hook is rejected', () => {
    // This is the mistake that produces "Custom room class not found" at boot.
    const parsed = DemoPluginDefinitionSchema.safeParse({
        ...base,
        listensTo: [{event: 'reldens.serverReady', purpose: 'too late'}],
        registers: [
            {bucket: 'server/customClasses/roomsClass', key: 'TutorialRoom', classRef: FakeRoom, describedAs: 'room'}
        ]
    });
    assert.ok(!parsed.success);
    assert.match(JSON.stringify(parsed.error!.issues), /beforeInitializeManagers/);
    assert.match(JSON.stringify(parsed.error!.issues), /manager\.js:137/);
});

test('a server plugin cannot fill a client bucket, and vice versa', () => {
    const serverIntoClient = DemoPluginDefinitionSchema.safeParse({
        ...base,
        registers: [{bucket: 'client/customClasses/objects', key: 'people_town_1', classRef: FakeNpc, describedAs: 'x'}]
    });
    assert.ok(!serverIntoClient.success);

    const clientIntoServer = DemoPluginDefinitionSchema.safeParse({
        ...base,
        kind: 'custom-client',
        registers: [{bucket: 'server/customClasses/objects', key: 'npc_2', classRef: FakeNpc, describedAs: 'x'}]
    });
    assert.ok(!clientIntoServer.success);
});

test('client object registration requires the beforeJoinGame hook', () => {
    const missing = DemoPluginDefinitionSchema.safeParse({
        ...base,
        kind: 'custom-client',
        registers: [{bucket: 'client/customClasses/objects', key: 'people_town_1', classRef: FakeNpc, describedAs: 'x'}]
    });
    assert.ok(!missing.success);

    const present = DemoPluginDefinitionSchema.safeParse({
        ...base,
        kind: 'custom-client',
        listensTo: [{event: 'reldens.beforeJoinGame', purpose: 'register render classes'}],
        registers: [{bucket: 'client/customClasses/objects', key: 'people_town_1', classRef: FakeNpc, describedAs: 'x'}]
    });
    assert.ok(present.success, JSON.stringify(present.error?.issues, null, 2));
});

test('a slow listener on an emitSync event is rejected', () => {
    // Find a real sync event from the extracted provenance rather than hardcoding one.
    const syncEvent = Object.entries(RELDENS_EVENT_PROVENANCE).find(([, p]) => p.sync)?.[0];
    assert.ok(syncEvent, 'expected at least one emitSync event in the extraction');

    const parsed = DemoPluginDefinitionSchema.safeParse({
        ...base,
        kind: 'custom-client',
        listensTo: [{event: syncEvent, purpose: 'heavy work', slow: true}]
    });
    assert.ok(!parsed.success);
    assert.match(parsed.error!.issues[0]!.message, /emitSync/);
});

test('keyed buckets demand a key; the single-class bucket refuses one', () => {
    const missingKey = DemoPluginDefinitionSchema.safeParse({
        ...base,
        listensTo: [{event: 'reldens.beforeInitializeManagers', purpose: 'register'}],
        registers: [{bucket: 'server/customClasses/objects', classRef: FakeNpc, describedAs: 'x'}]
    });
    assert.ok(!missingKey.success);

    const extraKey = DemoPluginDefinitionSchema.safeParse({
        ...base,
        listensTo: [{event: 'reldens.beforeInitializeManagers', purpose: 'register'}],
        registers: [{bucket: 'server/customClasses/sceneDataProcessor', key: 'nope', classRef: FakeRoom, describedAs: 'x'}]
    });
    assert.ok(!extraKey.success);
});

test('validateDemoPlugin throws a readable aggregate error', () => {
    assert.throws(
        () => validateDemoPlugin({name: 'broken', kind: 'custom-server', summary: 'x', listensTo: [{event: 'reldens.nope', purpose: 'y'}]}),
        /Invalid demo plugin definition "broken"[\s\S]*reldens\.nope/
    );
});
