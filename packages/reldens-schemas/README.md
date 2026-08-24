# @reldens-tutorials/schemas

Zod schemas for the Reldens public API, generated from and verified against the
installed package.

## The claim, and the proof

Reldens validates almost nothing. The `ServerManager` config, the `customClasses`
tree, event names, env vars, wire messages - all are read optimistically, and a
mistake in any of them is a silent no-op or a failure minutes later somewhere else.
This package is the validation layer the platform does not have, with one rule:
**no shape is guessed**.

Every schema field carries the `file:line` in the reldens source it was read from,
tagged the way [graphify](https://github.com/Graphify-Labs/graphify) tags graph
edges:

- `EXTRACTED` - the shape is a literal in the source. A required field is required
  because a specific line throws without it.
- `INFERRED` - derived from how the value is used across call sites. Marked as
  such, never silently.

Shapes that could not be established either way are `z.unknown()` with a note.

`npm test` re-checks all of it against the **installed** package: constants are
re-required and compared leaf by leaf, emit sites are re-read at their recorded
lines, demonstrated exports are re-resolved. Upgrade reldens and the failures name
exactly what moved.

## Pipeline

```
node_modules/reldens
  -> graphify extract --code-only          tree-sitter AST graph (6.5k nodes, 10k edges, all EXTRACTED)
  -> research/scripts/build-api-inventory.mjs     every module.exports.*, methods, inheritance
  -> research/scripts/build-api-surface.mjs       customClasses buckets, env vars, config paths, events
  -> research/scripts/dump-runtime-constants.mjs  real constant values via require()
  -> research/scripts/extract-event-payloads.mjs  payload shape of every emit site (231 events)
  -> research/scripts/extract-server-messages.mjs every send/broadcast literal, keyed by wire act
  -> scripts/generate.ts                   src/generated/*.ts
  -> src/*.ts                              the hand-written schemas
  -> test/*.test.ts                        the proof
```

After upgrading reldens:

```bash
node research/scripts/build-api-inventory.mjs
node research/scripts/build-api-surface.mjs
node research/scripts/dump-runtime-constants.mjs
node research/scripts/extract-event-payloads.mjs
node research/scripts/extract-server-messages.mjs
npm run generate --workspace @reldens-tutorials/schemas
npm test --workspace @reldens-tutorials/schemas   # review what changed
```

## What's here

| Module | Covers |
|---|---|
| `server-manager` | `new ServerManager(config)` - the 5 read keys plus customPlugin/customClasses |
| `custom-classes` | all 11 customClasses buckets the platform reads (docs mention 2) |
| `plugins` | the 4 distinct plugin setup() signatures, strict where the payload really is minimal |
| `events` | 287 event names with emit provenance (sync/async, origin, site); verified payloads for 4 |
| `protocol` | wire messages built from the live constants module, not typed literals |
| `env` | all 85 RELDENS_* vars with who-reads-what provenance |
| `room-state` | the synchronised state a client observes |
| `demo-plugins` | the tutorial plugin definition schema, with platform-rule refinements |
| `event-payload-schemas` | key-level schemas for all 145 object/class payload events; positional events documented, never faked |
| `server-message-schemas` | schemas for all 22 server-to-client message acts, plus AnyServerMessageSchema |

## The demo plugin schema

Each tutorial example declares its plugin as data and validates it at boot:

```ts
export const pluginDefinition = validateDemoPlugin({
    name: 'custom-room-world-demo',
    kind: 'custom-server',
    listensTo: [{event: 'reldens.beforeInitializeManagers', purpose: 'register the room class'}],
    registers: [{bucket: 'server/customClasses/roomsClass', key: 'TutorialRoom', classRef: TutorialRoom, describedAs: '...'}]
});
```

The refinement rules encode extracted platform behaviour:

1. `roomsClass` registration without a `reldens.beforeInitializeManagers` listener is
   rejected - RoomsManager reads the bucket right after that event
   (`lib/rooms/server/manager.js:137`), and a late registration is a room skipped
   with "Custom room class not found".
2. Client bucket registration requires `reldens.beforeJoinGame`
   (`lib/objects/client/plugin.js:541`).
3. A listener marked `slow` on an `emitSync` event is rejected - 42 events fire
   inside the caller's tick.
4. Unknown event names are typos unless `allowCustomEvents` is set.
5. Server plugins cannot fill client buckets and vice versa; keyed buckets demand a
   key; the single-class bucket refuses one.
