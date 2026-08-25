# 01 - Server plugin and events

The base pattern everything else is built on: boot `ServerManager` from
TypeScript, attach a plugin, hook the lifecycle.

App port **8081**, MySQL **3307**, database **reldens_tut_01**. Setup:
[docs/05-running.md](../../docs/05-running.md).

## Files

| File | What is in it |
|---|---|
| `src/index.ts` | boots the server, shows deployment-level event wiring |
| `src/plugin.ts` | the plugin: `setup({events})`, custom class registration |
| `src/reldens-module-path.ts` | resolves reldens under npm workspaces hoisting |
| `index.js` | three-line CJS entry Reldens expects at the project root |

## What to write here

- Pick real events and do something in them. `packages/reldens-types/events.d.ts`
  has all ~200 names; [docs/02-events.md](../../docs/02-events.md) groups the
  useful ones.
- Turn on `appServer.events.debug` for one run and read what the payloads
  actually contain, then narrow the `any` in your handler.
- Try custom authentication: `reldens.roomLoginOnAuth`, set
  `props.result.confirm = false` to deny a login.
- Try locking down the admin panel per role via `reldens.afterCreateAdminManager`
  and `serverAdmin.blackList`.

## Things worth knowing before you start

`reldens.beforeInitializeManagers` is the deadline for registering custom
classes. RoomsManager reads `server/customClasses/roomsClass/*` immediately
after it, so anything registered later is invisible.

Listeners registered in `setup` run for every room and every player. Sync events
are emitted inside the physics tick; a slow listener there slows the room down
for everyone in it.
