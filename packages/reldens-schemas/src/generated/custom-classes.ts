/**
 * GENERATED - do not edit by hand.
 *
 * The complete customClasses registry: every path Reldens looks a user-supplied class
 * up under at runtime. "keyedByRuntimeValue" means the bucket is followed by a key that
 * comes from the database (an object class key, a room's roomClassPath), so the schema
 * accepts any string there.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export const CUSTOM_CLASS_BUCKETS = [
    "client/customClasses/inventory/groups",
    "client/customClasses/inventory/items",
    "client/customClasses/message/listeners",
    "client/customClasses/objects",
    "server/customClasses/inventory/groups",
    "server/customClasses/inventory/items",
    "server/customClasses/objects",
    "server/customClasses/roomsClass",
    "server/customClasses/sceneDataProcessor",
    "server/customClasses/skills/classPath",
    "server/customClasses/skills/skillsList"
] as const;

export type CustomClassBucket = typeof CUSTOM_CLASS_BUCKETS[number];

export interface CustomClassBucketProvenance {
    side: 'server' | 'client';
    /** The bucket is a prefix; the final segment is a runtime key from the database. */
    keyedByRuntimeValue: boolean;
    /** file:Lnnn of the lookup. */
    site: string;
    lookupSiteCount: number;
}

export const CUSTOM_CLASS_BUCKET_PROVENANCE: Record<CustomClassBucket, CustomClassBucketProvenance> = {
    "client/customClasses/inventory/groups": {
        "side": "client",
        "keyedByRuntimeValue": false,
        "site": "lib/inventory/client/plugin.js:L234",
        "lookupSiteCount": 1
    },
    "client/customClasses/inventory/items": {
        "side": "client",
        "keyedByRuntimeValue": false,
        "site": "lib/inventory/client/plugin.js:L230",
        "lookupSiteCount": 1
    },
    "client/customClasses/message/listeners": {
        "side": "client",
        "keyedByRuntimeValue": false,
        "site": "lib/game/client/room-events.js:L383",
        "lookupSiteCount": 1
    },
    "client/customClasses/objects": {
        "side": "client",
        "keyedByRuntimeValue": true,
        "site": "lib/objects/client/plugin.js:L541",
        "lookupSiteCount": 1
    },
    "server/customClasses/inventory/groups": {
        "side": "server",
        "keyedByRuntimeValue": false,
        "site": "lib/inventory/server/group-hot-plug-callbacks.js:L60",
        "lookupSiteCount": 4
    },
    "server/customClasses/inventory/items": {
        "side": "server",
        "keyedByRuntimeValue": false,
        "site": "lib/inventory/server/subscribers/server-subscriber.js:L38",
        "lookupSiteCount": 3
    },
    "server/customClasses/objects": {
        "side": "server",
        "keyedByRuntimeValue": true,
        "site": "lib/objects/server/manager.js:L101",
        "lookupSiteCount": 1
    },
    "server/customClasses/roomsClass": {
        "side": "server",
        "keyedByRuntimeValue": true,
        "site": "lib/rooms/server/manager.js:L137",
        "lookupSiteCount": 1
    },
    "server/customClasses/sceneDataProcessor": {
        "side": "server",
        "keyedByRuntimeValue": false,
        "site": "lib/rooms/server/scene-data-filter.js:L71",
        "lookupSiteCount": 1
    },
    "server/customClasses/skills/classPath": {
        "side": "server",
        "keyedByRuntimeValue": false,
        "site": "lib/actions/server/data-loader.js:L89",
        "lookupSiteCount": 1
    },
    "server/customClasses/skills/skillsList": {
        "side": "server",
        "keyedByRuntimeValue": false,
        "site": "lib/actions/server/data-loader.js:L62",
        "lookupSiteCount": 1
    }
};
