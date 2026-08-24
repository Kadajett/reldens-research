# How Reldens is put together

Notes taken while reading `reldens@4.0.0-beta.39.8`. Everything here is checkable
against `reldens-source/` (the upstream clone) or `node_modules/reldens/`.

## The two halves

| | Server | Client |
|---|---|---|
| Entry | `reldens/server` → `lib/game/server/manager.js` (`ServerManager`) | `reldens/client` → `lib/game/client/game-manager.js` (`GameManager`) |
| Runtime | Node + Colyseus 0.16 rooms | Phaser 3 in the browser |
| Transport | Colyseus WebSockets | `colyseus.js` |
| Built by | nothing, it is plain CJS | Parcel, entered from the theme's HTML files |

The server is authoritative. It runs a p2 physics world per room, resolves
movement and collisions on its own tick, and broadcasts state. The client renders
what it is told and sends intents. Anything a client "decides" is a rendering
decision, never a game-state one.

## Feature modules

`lib/` is split by feature, and each feature is split again into `client/` and
`server/`:

```
lib/<feature>/
  client/        Phaser scenes, UI, rendering
  server/        Colyseus rooms, game logic
  constants.js   the wire keys both halves agree on
```

The 23 features are: actions, admin, ads, audio, bundlers, chat, config,
features, firebase, game, import, inventory, objects, prediction, respawn,
rewards, rooms, scores, snippets, teams, users, world.

Which of them are switched on is a row in the `features` table, not a code
change.

## Configuration comes from the database

This is the part that surprises people coming from a config-file engine. Rooms,
objects, NPC dialog, items, skills, stats, drop tables, respawn areas and the
feature list are all rows. The admin panel edits them. With `RELDENS_HOT_PLUG=1`
most changes apply without a restart.

Three layers, in increasing priority:

1. the `config` table, keyed by path (`server/rooms/disposeTimeout`) and scoped
2. `RELDENS_*` environment variables in `.env`
3. `customClasses`, passed in code, which replaces an implementation outright

Practical consequence: **most "how do I add a monster" questions are answered in
the admin panel, not in an editor.** Code is for behaviour the data cannot
express.

## Extension points, in the order you will reach for them

1. **Events.** `EventsManagerSingleton` from `@reldens/utils`, shared by both
   halves. Roughly 200 `reldens.*` events; see `docs/02-events.md`.
2. **Custom classes.** Register a class under
   `server/customClasses/objects/<class key>` or
   `server/customClasses/roomsClass/<roomClassPath>` and Reldens instantiates
   yours instead of its own. Client side, the same idea lives at
   `config.client.customClasses.objects`.
3. **A plugin.** A class with a `setup({events})` method, passed as
   `customPlugin`. This is just a tidy home for the two above.
4. **A feature module.** A row in `features` plus a folder in `lib/`. This is the
   fork-shaped option; you rarely need it.

## Storage

`dataServer.getEntity('stats')` returns a `BaseDriver` from `@reldens/storage`,
**not** a model class. The driver is the same regardless of which ORM is
underneath:

```js
const statsRepository = this.dataServer.getEntity('stats');
await statsRepository.create({key: 'hp', label: 'Health Points'});
await statsRepository.loadOneBy('key', 'hp');
await statsRepository.updateById(1, {label: 'HP'});
```

Three drivers ship: `prisma` (the current default), `objection-js` (Knex), and
`mikro-orm`. Set `RELDENS_STORAGE_DRIVER`. Entities under `generated-entities/`
are generated from the live schema and are read-only; regenerate them with
`reldens generateEntities --override` after a migration.

## Installation is a web wizard

A project with no `install.lock` serves the installer instead of the game. It
collects the database credentials, runs the schema and sample-data SQL, generates
entities, writes `.env`, `.gitignore`, `knexfile.js` and `install.lock`, then
starts the server for real. Delete `install.lock` to run it again.

The installer overwrites the project's `.gitignore` with its own template. In
this repo the per-example `.gitignore` is itself gitignored for that reason.

## Two timing traps

**Colyseus 0.16 state is asynchronous.** Room state can be empty when a client's
message handler first runs. Never bail out on a missing collection; wait for it:

```js
if(!room.state?.bodies){
    room.onStateChange.once(() => this.setAddBodyCallback(room, gameManager));
    return false;
}
```

**Messages sent from inside a room's `onJoin` arrive in one burst** immediately
after the join promise resolves. Inventory and skill lists are pushed exactly
once, from there. Attach those listeners on the line after the `await`, before
any other `await`, or you miss them permanently.
