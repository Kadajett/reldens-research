/**
 * Drift detection for @reldens/items-system.
 *
 * These schemas are hand-written against a pinned version of the package. This test
 * loads the REAL installed package and asserts the things the schemas encode still hold:
 * the exports exist, the constant/event vocabularies match value-for-value, and the
 * schemas still accept the package's own fixtures. When the upstream package changes in
 * a way that matters, one of these fails and names exactly what drifted - the signal to
 * update the schemas and bump `verifiedAgainst`.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';

import {
    ITEM_TYPES, TRADE_ACTIONS, QTY_OPERATIONS, SEND_BEHAVIORS, ACTIONS,
} from '../src/constants';
import { ITEMS_EVENTS } from '../src/events';
import { itemDataSchema } from '../src/item';
import { exchangeRequirementSchema, exchangeRewardSchema } from '../src/exchange';
import { itemsManagerPropsSchema } from '../src/manager';

const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('@reldens/items-system');
const pkgJson = require('@reldens/items-system/package.json') as { version: string };
const C = pkg.ItemsConst as Record<string, unknown>;
const E = pkg.ItemsEvents as Record<string, unknown>;

const PINNED = '0.49.0';

test('pinned version note (informational)', () => {
    if(pkgJson.version !== PINNED){
        // Not a failure by itself - a bump is expected to be reviewed with the other checks.
        console.log(`note: installed @reldens/items-system is ${pkgJson.version}, schemas verified against ${PINNED}`);
    }
    assert.ok(pkgJson.version);
});

test('every documented export still exists on the package', () => {
    const expected = [
        'ItemsServer', 'ItemsManager', 'Inventory', 'ItemGroup', 'ItemBase', 'ItemEquipment',
        'ItemUsable', 'ItemSingle', 'ItemSingleEquipment', 'ItemSingleUsable', 'ModelEntity',
        'ItemsConst', 'ItemsEvents', 'Receiver', 'ItemsDataGenerator', 'GroupsDataGenerator',
        'ExchangePlatform', 'ExchangeRequirement', 'RequirementsCollection', 'RequirementsProcessor',
        'ExchangeReward', 'RewardsCollection', 'RewardsProcessor', 'ItemsError',
    ];
    const missing = expected.filter((name) => !(name in pkg));
    assert.equal(missing.length, 0, 'exports removed/renamed upstream: ' + missing.join(', '));
});

test('item type ids match ItemsConst.TYPES', () => {
    assert.deepEqual(ITEM_TYPES, C.TYPES);
});

test('trade actions match ItemsConst.TRADE_ACTIONS', () => {
    assert.deepEqual(TRADE_ACTIONS, C.TRADE_ACTIONS);
});

test('quantity operations match ItemsConst SET/INCREASE/DECREASE', () => {
    assert.deepEqual(QTY_OPERATIONS, { SET: C.SET, INCREASE: C.INCREASE, DECREASE: C.DECREASE });
});

test('send behaviors match ItemsConst.BEHAVIOR_*', () => {
    assert.deepEqual(SEND_BEHAVIORS, {
        SEND: C.BEHAVIOR_SEND, BROADCAST: C.BEHAVIOR_BROADCAST, BOTH: C.BEHAVIOR_BOTH,
    });
});

test('action codes match ItemsConst.ACTION_*', () => {
    assert.deepEqual(ACTIONS, {
        ADD: C.ACTION_ADD, REMOVE: C.ACTION_REMOVE, MODIFY_QTY: C.ACTION_MODIFY_QTY,
        EQUIP: C.ACTION_EQUIP, UNEQUIP: C.ACTION_UNEQUIP, MOD_APPLIED: C.ACTION_MOD_APPLIED,
        MOD_REVERTED: C.ACTION_MOD_REVERTED, EXECUTING: C.ACTION_EXECUTING,
        EXECUTED: C.ACTION_EXECUTED, MANAGER_INIT: C.ACTION_MANAGER_INIT,
        SET_ITEMS: C.ACTION_SET_ITEMS, SET_GROUPS: C.ACTION_SET_GROUPS,
    });
});

test('event names match ItemsEvents (flat + exchange)', () => {
    assert.equal(ITEMS_EVENTS.MANAGER_INIT, E.MANAGER_INIT);
    assert.equal(ITEMS_EVENTS.ADD_ITEM, E.ADD_ITEM);
    assert.equal(ITEMS_EVENTS.MODIFY_ITEM_QTY, E.MODIFY_ITEM_QTY);
    assert.equal(ITEMS_EVENTS.VALIDATE, E.VALIDATE);
    const exch = E.EXCHANGE as Record<string, unknown>;
    assert.equal(ITEMS_EVENTS.EXCHANGE.INITIALIZED, exch.INITIALIZED);
    assert.equal(ITEMS_EVENTS.EXCHANGE.FINALIZED, exch.FINALIZED);
    assert.equal(ITEMS_EVENTS.EXCHANGE.ITEM_PUSHED, exch.ITEM_PUSHED);
});

test('itemDataSchema accepts the package\'s own item fixtures', () => {
    const fixtures = require('@reldens/items-system/tests/fixtures/items/base-items').BaseItemsFixtures as Record<string, unknown>;
    for(const [name, data] of Object.entries(fixtures)){
        const r = itemDataSchema.safeParse(data);
        assert.ok(r.success, 'fixture ' + name + ' rejected: ' + (r.success ? '' : JSON.stringify(r.error.issues)));
    }
});

test('requirement/reward configs accept verified shapes (incl. numeric-string coercion)', () => {
    const req = exchangeRequirementSchema.safeParse({ requiredItemKey: 'gold', requiredQuantity: '75' });
    assert.ok(req.success && req.data.requiredQuantity === 75);
    const rew = exchangeRewardSchema.safeParse({ rewardItemKey: 'gem', rewardQuantity: '10', rewardItemIsRequired: false });
    assert.ok(rew.success && rew.data.rewardQuantity === 10);
});

test('manager props require owner and accept the minimal + full shapes', () => {
    assert.ok(itemsManagerPropsSchema.safeParse({ owner: {} }).success);
    assert.ok(!itemsManagerPropsSchema.safeParse({ ownerIdProperty: 'id' }).success, 'owner should be required');
    assert.ok(itemsManagerPropsSchema.safeParse({
        owner: { id: 1 }, ownerIdProperty: 'id', itemClasses: false, groupClasses: false,
        itemsModelData: { potion: { class: class X {}, data: { key: 'potion', qty: 1 } } },
    }).success);
});
