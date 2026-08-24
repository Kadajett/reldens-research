# 04 - NPCs, items and skills

Custom object classes on the server, and the three standalone packages behind
inventory and progression.

App port **8084**, MySQL **3310**, database **reldens_tut_04**. Setup:
[docs/05-running.md](../../docs/05-running.md). Install the **sample data** - it
gives you NPCs, items and a class path to work against.

## Files

| File | What is in it |
|---|---|
| `src/objects/tutorial-npc.ts` | an `NpcObject`: what a dialog option *does* |
| `src/objects/tutorial-enemy.ts` | an `EnemyObject` |
| `src/systems/items.ts` | `@reldens/items-system` and the inventory API |
| `src/systems/skills.ts` | `@reldens/skills` and `@reldens/modifiers` |
| `src/plugin.ts` | registers both classes under `customClasses.objects` |

## Data first, code second

An NPC's title, its dialog options and its position are rows in `objects`. Items
are rows in `items_item`. Skills, levels and class paths are rows too. The admin
panel is where you create them; a subclass is only for behaviour the data cannot
express.

Registration is keyed by the **class key on the objects row** - `npc_2`, `npc_4`
and so on with the shipped sample data. Check the admin panel for the real value
rather than trusting the keys in `src/plugin.ts`.

## What to write here

- Branch on the picked option in `executeMessageActions` and do something: heal,
  hand over an item, take one away, refuse politely.
- Reply into the open dialog with `client.send('*', {act: GameConst.UI, id: this.id, content})`,
  and close it with `GameConst.CLOSE_UI_ACTION`.
- Work the inventory API on `playerSchema.inventory.manager`: `findItemByKey`,
  `increaseItemQty`, `decreaseItemQty`, `equip`, `getItems`.
- React to `reldens.battleEnded` for kill counts, quest progress or custom drops.

Working versions of the dialog patterns ship with the platform, in
`node_modules/reldens/theme/plugins/objects/server/` (a healer, a weapons master,
a quest NPC). They are the best reference for this file.

## Things worth knowing before you start

Call `super.executeMessageActions(...)` first and bail on `false` - that means the
base class already handled or rejected the message, and continuing double-handles
it.

`data.value` is an **index into `this.options`**, not the option's value. The
`'1'`, `'2'`, `'3'` strings in the shipped examples are whatever was typed into
the admin panel, not a platform convention.

Stat changes need `await room.savePlayerStats(playerSchema, client)` to persist
and to reach the client.
