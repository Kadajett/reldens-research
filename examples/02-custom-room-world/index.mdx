# 02 - Custom rooms and world logic

Replacing `RoomScene` for one room, and hooking the physics world without
replacing anything.

App port **8082**, MySQL **3308**, database **reldens_tut_02**. Setup:
[docs/05-running.md](../../docs/05-running.md).

## Files

| File | What is in it |
|---|---|
| `src/rooms/tutorial-room.ts` | a `RoomScene` subclass with the lifecycle mapped out |
| `src/world/world-hooks.ts` | the same behaviour via events, no subclass |
| `src/plugin.ts` | registers the room class under `roomsClass` |

## Wiring the room class up

Registering the class is only half of it. Reldens picks a custom room class by
reading the **`roomClassPath` column on the `rooms` row**, so open the admin
panel (`/reldens-admin/` → Rooms → your room) and set that field to
`TutorialRoom`, matching `TUTORIAL_ROOM_CLASS_PATH` in `src/plugin.ts`.

A room whose `roomClassPath` names a class that is not registered is **skipped**
with `Custom room class not found` and never loads. A room with an empty
`roomClassPath` uses the stock `RoomScene`.

## What to write here

- Room-scoped state: a timer, a counter, a scheduled spawn.
- Something on join and leave. Note the asymmetry: anything that needs the player
  still in room state has to run *before* `super.onLeave`, because that call is
  what removes them.
- Compare the two approaches. `reldens.createRoomAfter` gets you the room
  instance without subclassing; prefer it when you are adding behaviour rather
  than changing it, because it composes with other plugins and a subclass does
  not.

## Things worth knowing before you start

`super.onCreate` is what builds the p2 world, loads the room's objects from the
database and sets up the collision manager. Nothing on `this` is meaningful
before it has run.

Colyseus cleans up its own listeners on dispose. Timers and intervals you started
are yours to clear.
