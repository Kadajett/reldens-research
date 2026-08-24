# Reldens research

Tutorials, examples and notes for [Reldens](https://github.com/damian-pastorini/reldens),
an MMORPG platform built on Colyseus, Phaser and Node.

Five example projects, each a complete Reldens installation scaffolded in
TypeScript, each with the interesting parts left as stubs to write.

## Layout

```
reldens-source/            upstream clone, reference only (gitignored)
packages/reldens-types/    hand-written .d.ts for the untyped reldens packages
examples/                  the five tutorials
docs/                      notes taken while reading the source
```

npm workspaces, so `reldens` and its ~750 transitive packages (Parcel, Phaser,
Firebase, Colyseus) install **once** at the root and are shared. Each example
still has its own `package.json`, `tsconfig.json` and `docker-compose.yml`, and
can be lifted out into a standalone repo unchanged.

## The examples

| | What it covers |
|---|---|
| [01 server plugin & events](examples/01-server-plugin-events) | booting `ServerManager` from TS, the plugin contract, ~200 lifecycle events |
| [02 custom room & world](examples/02-custom-room-world) | subclassing `RoomScene`, room lifecycle, the p2 world, and the event-based alternative |
| [03 client plugin & Phaser](examples/03-client-plugin-phaser) | a TypeScript client entry bundled by Parcel, `ClientPlugin`, custom render classes |
| [04 NPCs, items & skills](examples/04-npcs-items-skills) | `NpcObject` dialog logic, `@reldens/items-system`, `@reldens/modifiers`, `@reldens/skills` |
| [05 Three.js client](examples/05-threejs-client) | the AgentArena pattern: stock server, a non-Phaser client speaking the room protocol |

## Getting started

```bash
npm install                        # once, at the root
cd examples/01-server-plugin-events
npm run db:up                      # MySQL 8.4 in docker
npm run build && npm start
# open http://localhost:8081 and run the web installer
```

Full setup, ports and per-database details: [docs/05-running.md](docs/05-running.md).

## Docs

| | |
|---|---|
| [01 architecture](docs/01-architecture.md) | how the platform is put together, and where the seams are |
| [02 events](docs/02-events.md) | the extension model, plus every `reldens.*` event name |
| [03 typescript](docs/03-typescript.md) | working against an untyped CommonJS platform |
| [04 room protocol](docs/04-room-protocol.md) | the wire protocol, for writing your own client |
| [05 running](docs/05-running.md) | setup, ports, CLI, rebuilding, regenerating entities |

## Root scripts

```bash
npm run typecheck      # every workspace
npm run build          # every workspace
npm run link:reldens   # re-create the per-example reldens symlinks
```

## Notes on this repo

- `reldens-source/` is a shallow clone of upstream, kept for grepping. It is
  gitignored and not a workspace.
- Anything Reldens generates inside an example (`theme/`, `dist/`, `.env`,
  `install.lock`, `generated-entities/`) is gitignored. The web installer also
  overwrites each example's `.gitignore`, which is why those are ignored too.
- `packages/reldens-types` is deliberately loose: every declared class has an
  index signature, so a missing member never blocks you. Tighten declarations as
  you learn the real shapes.
