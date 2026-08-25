# 07 - Typed Items Trade

Add items to two inventories and run a trade with `@reldens/items-system`, then verify
the item catalog against the `@reldens-community/items-types` zod schemas.

The point of this example: **the game code never depends on the types package.** Validation
is an opt-in layer you can add or remove without touching the app.

## What it does

`src/` builds an inventory for two players, gives Alice a sword and Bob 100 gold, then trades
the sword for 50 gold through `ExchangePlatform`:

```
Before trade:
  Alice: iron_sword x1
  Bob:   gold x100
After trade:
  Alice: gold x50
  Bob:   gold x50, iron_sword x1
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

## Scripts

```bash
npm start      # run the trade demo (uses @reldens/items-system only)
npm run verify # optional: zod-check the catalog with @reldens-community/items-types
npm test       # the same check as a repeatable test
npm run typecheck
```
