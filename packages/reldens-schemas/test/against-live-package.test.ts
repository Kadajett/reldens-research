/**
 * The proof.
 *
 * Every claim the schemas make is re-checked here against the INSTALLED reldens
 * package - not against the research artifacts, which would only prove the
 * generator agrees with itself. If reldens is upgraded and anything drifts, these
 * fail with the exact constant or class that moved.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
    RELDENS_CONSTANTS,
    RELDENS_EVENT_NAMES,
    RELDENS_EVENT_PROVENANCE,
    RELDENS_EXPORTS,
    GENERATION_META,
    ServerManagerConfigSchema,
    CustomServerPluginSetupPropsSchema,
    MovementMessageSchema,
    StopMessageSchema,
    CreatePlayerMessageSchema,
    UiMessageSchema,
    CombatSideSchema,
    DirectionSchema,
    WellKnownRoomSchema,
    ACTION_KEY
} from '../src/index';


function flatten(value: Record<string, any>, prefix = '', out: Record<string, unknown> = {}) {
    for(const [key, entry] of Object.entries(value ?? {})){
        const path = prefix ? prefix+'.'+key : key;
        if(entry && 'object' === typeof entry && !Array.isArray(entry) && !(entry instanceof Set)){
            flatten(entry, path, out);
            continue;
        }
        if('function' === typeof entry){
            continue;
        }
        out[path] = entry instanceof Set ? [...entry] : entry;
    }
    return out;
}

test('package version matches what the schemas were generated from', () => {
    const installed = require('reldens/package.json').version as string;
    assert.equal(
        installed,
        GENERATION_META.reldensVersion,
        `schemas were generated from reldens@${GENERATION_META.reldensVersion} but `
            +`reldens@${installed} is installed - run \`npm run generate\` and review the diff`
    );
});

test('every constant leaf matches the live constants modules', () => {
    const modules: Record<string, string> = {
        GameConst: 'reldens/lib/game/constants',
        ActionsConst: 'reldens/lib/actions/constants',
        ObjectsConst: 'reldens/lib/objects/constants',
        ChatConst: 'reldens/lib/chat/constants',
        RoomsConst: 'reldens/lib/rooms/constants',
        UsersConst: 'reldens/lib/users/constants',
        InventoryConst: 'reldens/lib/inventory/constants',
        RewardsConst: 'reldens/lib/rewards/constants',
        TeamsConst: 'reldens/lib/teams/constants',
        ScoresConst: 'reldens/lib/scores/constants',
        AudioConst: 'reldens/lib/audio/constants',
        AdsConst: 'reldens/lib/ads/constants',
        ConfigConst: 'reldens/lib/config/constants',
        SnippetsConst: 'reldens/lib/snippets/constants',
        WorldConst: 'reldens/lib/world/constants'
    };
    for(const [groupName, importPath] of Object.entries(modules)){
        const live = flatten(require(importPath)[groupName]);
        const recorded = RELDENS_CONSTANTS[groupName as keyof typeof RELDENS_CONSTANTS];
        assert.ok(recorded, `constants group ${groupName} missing from generated set`);
        assert.deepEqual(
            recorded,
            live,
            `${groupName} drifted between the generated snapshot and the installed package`
        );
    }
});

test('the wire protocol literals are the live GameConst values', () => {
    const { GameConst } = require('reldens/lib/game/constants');
    assert.equal(ACTION_KEY, GameConst.ACTION_KEY);
    assert.deepEqual(DirectionSchema.options, [GameConst.UP, GameConst.DOWN, GameConst.LEFT, GameConst.RIGHT]);
    assert.ok(MovementMessageSchema.safeParse({dir: GameConst.UP}).success);
    assert.ok(StopMessageSchema.safeParse({[GameConst.ACTION_KEY]: GameConst.STOP}).success);
    assert.ok(CreatePlayerMessageSchema.safeParse({
        [GameConst.ACTION_KEY]: GameConst.CREATE_PLAYER,
        formData: {'new-player-name': 'Explorer'}
    }).success);
    assert.ok(UiMessageSchema.safeParse({
        [GameConst.ACTION_KEY]: GameConst.UI, id: 7, content: 'hello'
    }).success);
    assert.ok(WellKnownRoomSchema.safeParse(GameConst.ROOM_GAME).success);
});

test('combat side accepts both spellings of "enemy", per the two broadcast paths', () => {
    const { ActionsConst } = require('reldens/lib/actions/constants');
    assert.ok(CombatSideSchema.safeParse(ActionsConst.DATA_TYPE_VALUE_OBJECT).success);
    assert.ok(CombatSideSchema.safeParse(ActionsConst.DATA_TYPE_VALUE_ENEMY).success);
    assert.ok(CombatSideSchema.safeParse(ActionsConst.DATA_TYPE_VALUE_PLAYER).success);
    assert.ok(!CombatSideSchema.safeParse('x').success);
});

test('ServerManagerConfigSchema accepts the shape the platform template uses', () => {
    // The exact shape of theme/index.js.dist, the platform's own boot example.
    const { PluginInterface } = require('reldens/lib/features/plugin-interface');
    class DemoPlugin extends PluginInterface {
        setup(): boolean { return true; }
    }
    const parsed = ServerManagerConfigSchema.safeParse({
        projectRoot: '/tmp/project',
        projectThemeName: 'default',
        jsSourceMaps: false,
        cssSourceMaps: false,
        customPlugin: DemoPlugin
    });
    assert.ok(parsed.success, JSON.stringify(parsed.error?.issues));
});

test('ServerManagerConfigSchema rejects what ThemeManager would throw on', () => {
    // ThemeManager errors without projectRoot (theme-manager.js:88).
    assert.ok(!ServerManagerConfigSchema.safeParse({}).success);
    // customPlugin must be a class with setup on its prototype - a bare function is
    // what a user passes when they forget `new`-ability or pass an instance.
    assert.ok(!ServerManagerConfigSchema.safeParse({
        projectRoot: '/tmp/project',
        customPlugin: () => undefined
    }).success);
});

test('the live PluginInterface satisfies the plugin schemas', () => {
    const { PluginInterface } = require('reldens/lib/features/plugin-interface');
    const instance = new PluginInterface();
    assert.equal('function', typeof instance.setup);
    // And the custom-server setup payload really is just {events}.
    const { EventsManagerSingleton } = require('@reldens/utils');
    const parsed = CustomServerPluginSetupPropsSchema.safeParse({events: EventsManagerSingleton});
    assert.ok(parsed.success, JSON.stringify(parsed.error?.issues));
    assert.ok(!CustomServerPluginSetupPropsSchema.safeParse({
        events: EventsManagerSingleton,
        config: {}
    }).success, 'strict object must reject extra keys - the payload really is only {events}');
});

test('items/skills event names in the union match the live packages', () => {
    const ItemsEvents = require('@reldens/items-system/lib/items-events');
    const SkillsEvents = require('@reldens/skills/lib/skills-events');
    const names = new Set<string>(RELDENS_EVENT_NAMES);
    for(const value of [ItemsEvents.ADD_ITEM, ItemsEvents.EQUIP_ITEM, ItemsEvents.EXCHANGE.FINALIZED]){
        assert.ok(names.has(value), value+' missing from RELDENS_EVENT_NAMES');
    }
    for(const value of [SkillsEvents.LEVEL_UP, SkillsEvents.SKILL_BEFORE_CAST, SkillsEvents.LOADED_OWNER_SKILLS]){
        assert.ok(names.has(value), value+' missing from RELDENS_EVENT_NAMES');
    }
});

test('event emit sites exist where the provenance says they do', () => {
    // Spot-check the load-bearing ones by reading the actual file at the recorded line.
    const { readFileSync } = require('node:fs') as typeof import('node:fs');
    const { join, dirname } = require('node:path') as typeof import('node:path');
    const reldensRoot = dirname(require.resolve('reldens/package.json'));

    for(const name of [
        'reldens.beforeInitializeManagers',
        'reldens.serverConfigFeaturesReady',
        'reldens.joinRoomEnd',
        'reldens.beforeJoinGame'
    ] as const){
        const provenance = RELDENS_EVENT_PROVENANCE[name];
        assert.ok(provenance?.emitted, name+' should have an emit site');
        assert.equal('reldens', provenance.origin);
        const [file, lineRef] = provenance.site!.split(':L');
        const lines = readFileSync(join(reldensRoot, file!), 'utf8').split('\n');
        const around = lines.slice(Math.max(0, Number(lineRef) - 2), Number(lineRef) + 3).join('\n');
        assert.ok(
            around.includes(name) || around.includes('emit'),
            `${name}: ${provenance.site} no longer contains the emit`
        );
    }
});

test('the demonstrated import paths all resolve in the installed package', () => {
    const { readFileSync } = require('node:fs') as typeof import('node:fs');
    for(const entry of RELDENS_EXPORTS.filter((e) => e.demonstratedInProjectTemplate)){
        // Client-side modules (reldens/client, AnimationEngine, ...) pull in Phaser,
        // which dereferences `window` at require time, so those are verified by
        // resolving the file and checking the export statement rather than loading it.
        const isClientSide = entry.importPath.includes('/client');
        const resolved = require.resolve(entry.importPath);
        if(!isClientSide){
            const moduleExports = require(entry.importPath);
            assert.ok(
                undefined !== moduleExports[entry.name],
                entry.importPath+' no longer exports '+entry.name
            );
            if('class' === entry.kind){
                assert.equal('function', typeof moduleExports[entry.name], entry.name+' should be a class');
            }
            continue;
        }
        const text = readFileSync(resolved, 'utf8');
        assert.ok(
            text.includes('module.exports.'+entry.name),
            entry.importPath+' no longer exports '+entry.name
        );
    }
});

test('customClasses lookup sites still exist at the recorded locations', () => {
    const { readFileSync } = require('node:fs') as typeof import('node:fs');
    const { join, dirname } = require('node:path') as typeof import('node:path');
    const reldensRoot = dirname(require.resolve('reldens/package.json'));
    const checks: Array<[string, number, string]> = [
        ['lib/rooms/server/manager.js', 137, 'server/customClasses/roomsClass/'],
        ['lib/objects/server/manager.js', 101, 'server/customClasses/objects/'],
        ['lib/objects/client/plugin.js', 541, 'client/customClasses/objects/'],
        ['lib/rooms/server/scene-data-filter.js', 71, 'server/customClasses/sceneDataProcessor']
    ];
    for(const [file, line, needle] of checks){
        const lines = readFileSync(join(reldensRoot, file), 'utf8').split('\n');
        const around = lines.slice(Math.max(0, line - 3), line + 2).join('\n');
        assert.ok(around.includes(needle), `${file}:L${line} no longer reads ${needle}`);
    }
});
