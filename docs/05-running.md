# Running an example

Every example is a complete Reldens installation. They use different ports and
different databases so several can run at once.

| Example | App port | MySQL port | Database |
|---|---|---|---|
| 01 server plugin & events | 8081 | 3307 | `reldens_tut_01` |
| 02 custom room & world | 8082 | 3308 | `reldens_tut_02` |
| 03 client plugin & Phaser | 8083 | 3309 | `reldens_tut_03` |
| 04 NPCs, items & skills | 8084 | 3310 | `reldens_tut_04` |
| 05 Three.js client | 8085 | 3311 | `reldens_tut_05` |

## First run

```bash
cd examples/01-server-plugin-events
npm run db:up          # MySQL 8.4 in docker, user/password reldens/reldens
npm run build
npm start
```

With no `install.lock` the server serves the web installer instead of the game.
Open `http://localhost:8081` and fill in:

- **storage driver**: `prisma` (the default) or `objection-js`
- **database client**: `mysql`
- **host** `localhost`, **port** from the table above
- **database / user / password**: from the table above, `reldens` / `reldens`
- tick **basic configuration** and **sample data** unless you want an empty world
- **app port**: the port from the table above

The installer creates the schema, generates entities, writes `.env` and
`install.lock`, and restarts into the game. Register an account through the
client to play.

To start over: `npm run db:reset && rm -f install.lock .env`.

## Admin panel

`http://localhost:<app port>/reldens-admin/`. Create an admin user with:

```bash
npx reldens createAdmin --user=admin --pass=admin --email=you@example.com
```

Most of what a Reldens game *is* lives in here: rooms, objects, NPC dialog,
items, skills, stats, drops, respawn areas.

## Day-to-day

```bash
npm run dev          # tsx, restarts on change, no build step
npm run typecheck    # tsc --noEmit
npm run build        # tsc to build/
npm start            # node index.js -> build/index.js
```

Example 03 also has `npm run theme:sync` (regenerate `theme/tutorial` from the
platform default plus `theme-overrides/`) and `npm run typecheck:client`.

Example 05 also has `npm run dev:client` (the Vite/Three.js front end on :5173)
and `npm run typecheck:client`.

## Rebuilding the web client

The server bundles the client on start when `RELDENS_ALLOW_RUN_BUNDLER=1`, which
the installer sets in `.env`. To force it:

```bash
npx reldens buildClient <theme name>    # JS
npx reldens buildCss <theme name>       # SCSS
npx reldens buildSkeleton               # both
npx reldens fullRebuild                 # copy everything from node_modules, then both
```

Three environment variables gate this, which matters on a production box that
should not be running Parcel: `RELDENS_ALLOW_RUN_BUNDLER` (default 0, controls
the automatic build on start), `RELDENS_ALLOW_BUILD_CLIENT` and
`RELDENS_ALLOW_BUILD_CSS` (both default 1).

## After a schema change

```bash
npx reldens generateEntities --override
```

For Prisma there is an extra step first:

```bash
npx reldens-storage-prisma --host=localhost --port=<port> --user=reldens \
    --password=reldens --database=<db> --clientOutputPath=./client
npx reldens-storage generateEntities --user=reldens --pass=reldens \
    --database=<db> --driver=prisma
```
