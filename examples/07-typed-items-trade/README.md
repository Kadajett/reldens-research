# 07 - Typed Items Trade

Add items to two inventories and run a trade with `@reldens/items-system`, then verify
the item catalog against the `@reldens-community/items-types` zod schemas.

The point of this example: **the game code never depends on the types package.** Validation
is an opt-in layer you can add or remove without touching the app.

## What it does

`src/` builds an inventory for two players, trades a sword for 50 gold through
`ExchangePlatform`, then builds a custom item type (`Runestone`) to show how you extend the
engine and the schema together:

```
Before trade:
  Alice: iron_sword x1
  Bob:   gold x100
After trade:
  Alice: gold x50
  Bob:   gold x50, iron_sword x1

Custom item type:
  built a Runestone -> Fire Rune (fire +5)
  element: fire power: 5
```

## The two layers

**The app (copyable, zod-free).** Everything in `src/` imports `@reldens/items-system` only.
`src/items-catalog.ts` is plain data; `src/trade-demo.ts` is the add-and-trade flow. Copy these
into any project that has `@reldens/items-system` and they run as-is. No zod, no types package
at runtime.

**The verification (opt-in).** `optional-validation/` and `test/` import
`@reldens-community/items-types` and check the same plain catalog against `itemDataSchema`. The
app never imports them. Delete the folder and the game still runs; keep it and you catch a
malformed catalog before it reaches the engine.

`import type { ItemData }` gives you editor types with no runtime cost. `itemDataSchema.parse`
is the runtime check. Both are additive, so users choose their level of strictness.

**Extending both.** `src/runestone.ts` subclasses an item class to add a type the engine does
not ship; `optional-validation/runestone-schema.ts` extends `itemDataSchema` so the new fields
are typed and validated. The schema is small enough to copy into your app and own outright,
shadcn-style, if you would rather not depend on the package at all.

## Scripts

```bash
npm start      # run the trade demo (uses @reldens/items-system only)
npm run verify # optional: zod-check the catalog with @reldens-community/items-types
npm test       # the same check as a repeatable test
npm run typecheck
```

## Links

- Engine: [`@reldens/items-system`](https://github.com/damian-pastorini/reldens-items) (`damian-pastorini/reldens-items`)
- Platform: [Reldens](https://github.com/damian-pastorini/reldens)
- This examples repo: [`Kadajett/reldens-research`](https://github.com/Kadajett/reldens-research)
