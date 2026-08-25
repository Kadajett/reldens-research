# 05 - A Three.js client over the Reldens room protocol

The AgentArena pattern: leave the server exactly as it ships, and attach a
different client to it. AgentArena attaches a headless one driven by MCP tools;
this attaches a Three.js renderer. Neither forks the platform, and both are just
programs that speak the room protocol.

App port **8085**, MySQL **3311**, database **reldens_tut_05**. Setup:
[docs/05-running.md](../../docs/05-running.md).

## Two processes

```bash
npm run db:up
npm run build && npm start     # Reldens: game, installer, admin, Phaser client :8085
npm run dev:client             # Vite: the Three.js client                      :5173
```

The stock Phaser client keeps working on :8085 the whole time. Register an
account there first, then log in on :5173 with the same credentials - the world
does not know or care which renderer is attached.

## Files

| File | What is in it |
|---|---|
| `client/protocol.ts` | the wire protocol: message keys, state shape, with sources cited |
| `client/session.ts` | the login → lobby → player → scene join sequence |
| `client/world-view.ts` | the Three.js scene, tile-to-world projection, interpolation |
| `client/input.ts` | keyboard intent, sent to the server |
| `client/main.ts` | wires the four together |
| `src/` | the Reldens server, unchanged except for an empty plugin |

## What to write here

- **Build the ground.** `state.sceneData` is Tiled JSON: `layers[].data` is a
  flat array of tile ids in row-major order, and the tileset images are served by
  the Reldens server (Vite proxies `/assets` to it). A textured plane per layer
  is the cheap version; an `InstancedMesh` per tile id is the one that scales.
- **Bind the room state.** `world-view.ts#bindRoomState` is the stub that matters
  most: attach to the `players` and `bodies` MapSchemas and create/move/remove
  meshes.
- **Make movement feel right.** The naive lerp in `step()` is smooth but lags.
  Look at what `reldens/lib/prediction/` does; the server broadcasts on its tick
  and the client is expected to fill the gaps.
- **Render combat.** `alu`, `rski.Ad`, `rski.Bc` and `bend` are plain messages,
  not state.

## Things worth knowing before you start

Read [docs/04-room-protocol.md](../../docs/04-room-protocol.md) first. Three
things in there will otherwise cost you an afternoon each:

1. **Keep the lobby room joined.** It holds the session open.
2. **Attach onJoin-burst listeners on the line after the scene join await.**
   Inventory and the full skill list are pushed once, immediately, and never
   again.
3. **The server decides the scene.** Read it off `player.state.scene`; a client
   cannot ask to be placed somewhere else.

Positions arrive in pixels within the tilemap. Divide by `tilewidth`/`tileheight`
for tile coordinates, and pick your own mapping to 3D - the server has no opinion
about the third dimension, so anything you want there (elevation, models per
object type) has to be added server-side in `src/plugin.ts`.
