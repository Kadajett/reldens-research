# Reldens Research

Tutorials, examples and notes for [Reldens](https://github.com/damian-pastorini/reldens),
an MMORPG platform built on Colyseus, Phaser and Node.

Five example projects, each a complete Reldens installation scaffolded in
TypeScript with the interesting parts left as stubs to write, plus a schema
package carrying a Zod schema and a typed payload for every one of the
platform's 231 events.

**Read the docs:** https://kadajett.mintlify.site

## Contents

- `docs/` — architecture, the event model, the room protocol, running it
- `examples/01-05` — the tutorials (each folder's `index.mdx` is the write-up)
- `packages/reldens-schemas` — Zod schemas + typed payloads for every event
- `packages/reldens-types` — ambient TypeScript declarations for reldens

## Quick start

```bash
npm install                        # once, at the root
cd examples/01-server-plugin-events
npm run db:up                      # MySQL 8.4 in docker
npm run build && npm start
# open http://localhost:8081 and run the web installer
```

Full setup, ports and per-database details are in the docs under **Running**.
