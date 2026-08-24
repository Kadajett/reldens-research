# TypeScript against an untyped CommonJS platform

Reldens ships no `.d.ts` files, and neither do `@reldens/utils`,
`@reldens/storage`, `@reldens/items-system`, `@reldens/modifiers`,
`@reldens/skills` or `@reldens/server-utils`. It is all CommonJS with JSDoc.

## What this repo does about it

`packages/reldens-types` holds hand-written ambient declarations. Each example
pulls them in with one triple-slash reference (`src/reldens-types.d.ts`):

```ts
/// <reference types="@reldens-tutorials/types" />
```

Design rules for that package, so it helps instead of fighting you:

- **Every class has an `[key: string]: any` index signature.** The real classes
  have far more members than are declared. A missing declaration must never
  block a call.
- **Declare what you learn.** When you find out what `props` is on an event,
  narrow it locally or add it to the package. Do not guess up front.
- **`declare module 'reldens/lib/*'` is the fallback**, last in the file, so any
  deep require resolves to `any` rather than erroring.

## Server code

`module: CommonJS`, compiled with `tsc` to `build/`, loaded by a three-line
`index.js` at the project root. Two reasons for the extra hop: Reldens' CLI and
ThemeManager both key off `<projectRoot>/index.js`, and `dist/` is already taken
by the bundled web client, which is why `outDir` is `build/`.

```
npm run build && npm start     compiled
npm run dev                    tsx, no build step
```

## Client code

Parcel handles `.ts` natively - `@parcel/transformer-js` is already mapped to
`*.{js,ts,tsx,…}` in `reldens/lib/bundlers/drivers/parcel-config.json`. So a
theme's `index.html` can point straight at a TypeScript entry:

```html
<script type="module" src="./index.ts"></script>
```

No compile step and no generated JS to keep in sync. Example 03 does exactly
this; `npm run theme:sync` rewrites that one script tag after copying the
platform's default theme in.

Client and server need different `lib`/`module` settings, so those examples carry
a second `tsconfig.client.json` with DOM types, and the server config excludes
`src/client`.

## The package.json fields Parcel needs

Reldens' `createApp` patches the project `package.json`; since these examples
hand-write theirs, they set the same fields:

```json
"browserslist": ["> 0.5%, last 2 versions, not dead"],
"targets": {"main": false},
"alias": {"process": false}
```

Without `targets.main: false`, Parcel tries to build a target for the `main`
entry and fails with `Got unexpected undefined` out of its TargetResolver.
`alias.process: false` is part of the polyfill setup Colyseus 0.16 needs in the
browser.

## npm workspaces and `reldensModulePath`

`ThemeManager.setupPaths` defaults `reldensModulePath` to
`<projectRoot>/node_modules/reldens`. Under workspaces, npm hoists reldens to the
repo root, so that path does not exist. Two fixes, both applied here:

- Every example passes `reldensModulePath: dirname(require.resolve('reldens/package.json'))`
  to `ServerManager`, which also keeps working if the example is later split out
  into its own repo.
- `scripts/link-reldens.mjs` (root `postinstall`) symlinks
  `examples/*/node_modules/reldens` so the `reldens` CLI, which hardcodes that
  path, works from inside an example folder.
