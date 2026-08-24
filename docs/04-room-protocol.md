# The room protocol

What a client sends and receives, for anyone writing one that is not the Phaser
client that ships with the platform. Verified against `reldens@4.0.0-beta.39.8`;
the wider version of this table (trade, teams, inventory, professions) is the one
driving the AgentArena headless client at
`~/Dev/agentArena/services/mcp-gateway/src/reldens/protocol.js`.

Reldens abbreviates every key and spreads the constants across per-feature
`constants.js` files. Message envelopes are `{act: '<key>', ...}` sent to the
wildcard channel: `room.send('*', message)`.

## Connecting

```
1. joinOrCreate('room_game', {username, password, isNewUser})
2. wait for {act: 's'}                    START_GAME: gameConfig, maybe player
3. no player? send {act: 'cp', formData: {'new-player-name', selectedScene}}
   wait for {act: 'cps'}                  CREATE_PLAYER_RESULT
4. sceneName = player.state.scene         the server decides, not the client
5. joinOrCreate(sceneName, {...login, selectedPlayer: player.id, selectedScene})
6. optionally joinOrCreate('chat', {...login, selectedPlayer: player.id})
```

Keep the lobby room joined. It is what holds the session open.

Attach any listener for onJoin-time pushes (inventory, class path) on the line
immediately after step 5's `await`. Colyseus holds those messages until the join
is acknowledged and then delivers them all at once, a heartbeat later.

`joinOrCreate(sceneName, …)` and not `join`: scene changes are driven by the
server when a player walks onto a change point.

## Client to server

| Message | Meaning |
|---|---|
| `{dir: 'up'\|'down'\|'left'\|'right'}` | start walking. Note: no `act` key |
| `{act: 'stop'}` | stop |
| `{act: 'mp', x, y, column, row}` | click to move; the server pathfinds |
| `{act: 'ps'}` | send me my stats |
| `{act: 'cj'}` | the client finished loading the scene |
| `{act: 'c', m: 'text'}` | chat. Leading `#` global, `@` private |
| `{act: 'action', type, target: {id, type}}` | use a skill or attack |

A direction only takes effect on a tick where the body's sideways velocity is
zero. Walking through a doorway usually needs a `stop` first, and a retry or two
is normal rather than a failure.

## Server to client

| Message | Meaning |
|---|---|
| `{act: 's'}` | START_GAME: game config, and the player if the account has one |
| `{act: 'cps'}` | CREATE_PLAYER_RESULT: `{player}` or `{error, message}` |
| `{act: 'alu', oT, oK, ...}` | LIFEBAR_UPDATE: health changed, player or enemy |
| `{act: 'rski.Ad'}` | APPLY_DAMAGE: a hit landed, with both ends in extraData |
| `{act: 'rski.Bc'}` | SKILL_BEFORE_CAST: a delayed skill; `extraData.sd` is the delay |
| `{act: 'rski.ICpe'}` | class path ready: the **whole** skill list, sent once on join |
| `{act: 'rski.Lu'}` | LEVEL_UP: only the skills granted at the new level. A delta |
| `{act: 'bend'}` | BATTLE_ENDED: a combatant died |

`rski.Lu` is a delta, not a replacement. Treating it as a full list erases
everything the character already knew down to what it just learned.

### Discriminator fields

`oT`/`oK` name the owner, `tT`/`tK` the target. Their values: `'p'` player,
`'o'` object, `'e'` enemy. The lifebar path spells an enemy `'o'`; the skills
path spells the same thing `'e'`. Accept both.

Object targets on `action` messages are keyed by `objectIndex`
(`layer_name + tile_index`), not by the object's database row id.

## Room state

Synchronised through Colyseus schema (`lib/rooms/server/state.js`):

| Field | What it is |
|---|---|
| `sceneData` | the room's static data as a JSON string, sent once: tilemap, layers, change points, object positions |
| `players` | `MapSchema` keyed by session id. Each has `state.x`, `state.y`, `state.dir`, `state.scene`, `state.mov` |
| `bodies` | `MapSchema` of every other moving body in the room |

Positions are in pixels within the tilemap. Divide by the map's `tilewidth` /
`tileheight` for tile coordinates.

State arrives asynchronously. `room.state.players` can be undefined when your
first callback runs - wait for `room.onStateChange.once(...)` rather than
returning early.
