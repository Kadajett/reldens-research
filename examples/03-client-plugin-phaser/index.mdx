# 03 - Client plugin and Phaser UI

The client half: a TypeScript entry bundled by Parcel, a `ClientPlugin`, and
custom render classes for objects.

App port **8083**, MySQL **3309**, database **reldens_tut_03**. Setup:
[docs/05-running.md](../../docs/05-running.md), plus one extra step below.

## Extra setup step

This example serves `theme/tutorial` rather than `theme/default`, because its
client entry is TypeScript. Generate that folder before the first start:

```bash
npm run theme:sync
```

That copies the platform's default theme out of `node_modules`, drops its stock
`index.js`, copies `theme-overrides/tutorial/` on top, and repoints the
`<script>` tag in every theme HTML file at `./index.ts`.

`theme/` is generated and gitignored. **The checked-in client source is
`theme-overrides/tutorial/index.ts` and `src/client/`** - edit those, then re-run
`theme:sync` and `npx reldens buildClient tutorial`.

## Files

| File | What is in it |
|---|---|
| `theme-overrides/tutorial/index.ts` | the client entry point |
| `src/client/plugin.ts` | the `ClientPlugin`, custom class registration |
| `src/client/objects/tutorial-npc.ts` | an `AnimationEngine` subclass |
| `scripts/sync-theme.mjs` | builds `theme/tutorial` from default + overrides |
| `tsconfig.client.json` | DOM types for the client tree |

## What to write here

- Give an object a distinct look by client key. The key is the object's
  `client_key`, which is also its sprite folder name under `assets/`.
- Add to the Phaser scene on `reldens.afterSceneDynamicCreate`.
- Touch the DOM UI around the canvas on `reldens.afterInitEngineAndStartGame` -
  Reldens renders chat, inventory and stat bars as HTML, not canvas.
- Read raw room messages with `reldens.events.on('reldens.activateRoom', room => room.onMessage('*', ...))`.

## Things worth knowing before you start

Client custom classes must be registered on `reldens.beforeJoinGame`. The scene
preloader reads `config.client.customClasses.objects` right after the join.

Parcel handles `.ts` with no configuration on your side - the mapping is already
in `reldens/lib/bundlers/drivers/parcel-config.json`. There is no tsc step for
client code; `npm run typecheck:client` only checks it.

Colyseus 0.16 delivers state asynchronously. If a callback needs
`room.state.bodies`, wait for `room.onStateChange.once(...)` instead of returning
early - returning early is why "objects never appear" and it is the single most
common Reldens client bug.
