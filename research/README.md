# research/

The audit pipeline behind `@reldens-tutorials/schemas`. Raw material, not docs.

## Contents

| File | What | How |
|---|---|---|
| `graphify-out/graph.json` | AST knowledge graph of reldens-source: 6,540 nodes, 10,055 edges, every edge `EXTRACTED` (tree-sitter, no LLM) | `graphify extract reldens-source --code-only --out research` |
| `api-inventory.json` | all 422 `module.exports.*` with declaration site, inheritance, method lists (joined from the graph), and which of the 9 import paths the platform's own template demonstrates | `node research/scripts/build-api-inventory.mjs` |
| `api-surface.json` | the string-keyed contracts: 11 customClasses buckets, 4 plugin setup call sites, 85 env vars, 176 config paths, 233 event literals with emit sites (reldens + @reldens/* siblings) | `node research/scripts/build-api-surface.mjs` |
| `runtime-constants.json` | real values of every constants module, obtained by require()-ing them - catches the runtime-built values ('reldens.items.' + name) a static scan cannot see | `node research/scripts/dump-runtime-constants.mjs` |
| `event-payloads.json` | payload shape of all 231 events, per emit site: object-literal keys (145 sites, incl. `let event = {...}` locals), the 3 payload classes with their properties, positional argument lists | `node research/scripts/extract-event-payloads.mjs` |
| `server-messages.json` | every `client.send('*', {...})`/`broadcast('*', {...})` literal (39 sites, 22 resolved acts), computed keys resolved to wire strings | `node research/scripts/extract-server-messages.mjs` |

## Querying the graph

```bash
cd research/graphify-out
graphify god-nodes --top 20 --graph graph.json
graphify explain "RoomScene" --graph graph.json
graphify path "ServerManager" "RoomScene" --graph graph.json
graphify query "what connects the plugin interface to the rooms manager?" --graph graph.json
```

## Findings worth remembering

- graphify's JS extractor emits no `extends` edges for JS classes (all 18 in the
  graph come from JSON arrays in package.json). Inheritance in api-inventory.json
  comes from a grep of `class X extends Y` headers instead.
- The public surface, by evidence strength: 9 import paths demonstrated by the
  platform's own template > `PluginInterface` (29 internal subclasses) > everything
  else exported but never demonstrated.
- 8 admin events are listened for in reldens but emitted by `@reldens/cms` (through
  its `emitEvent` wrapper, admin-manager.js:58).
- Items/skills event names are built at load time; `LOADED_OWNER_SKILLS` is defined
  but emitted nowhere.
- The emit for `reldens.joinRoomEnd` wraps the event name onto its own line
  (scene.js:156-157), which breaks line-oriented greps - the surface script matches
  whole file text for this reason.
- 53 events emit a local variable (`let event = {...}; emit(name, event)`); several
  of those locals are read back after the emit, which is Reldens' abort/veto pattern
  (beforeInitializeManagers.continueProcess is one). The payload extractor resolves
  these to their literals.
- JoinedSceneRoomEvent's property is `roomScene`, not `room` - the extractor caught
  an INFERRED guess in an early schema being wrong, which is the argument for
  extraction over inference in one line.
- The scan core lives in research/scripts/lib/scan.mjs and is imported by the schema
  package's drift tests, which re-run it over the installed package - the artifacts
  here and node_modules/reldens are checked against each other by the same code.
