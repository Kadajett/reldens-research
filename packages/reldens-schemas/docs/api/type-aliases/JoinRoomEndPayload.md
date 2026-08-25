# Type Alias: JoinRoomEndPayload

```ts
type JoinRoomEndPayload = {
  client: unknown;
  isGuest: unknown;
  loggedPlayer: unknown;
  options: unknown;
  roomScene: unknown;
  userModel: unknown;
};
```

`reldens.joinRoomEnd`
Payload of reldens.joinRoomEnd - one of the platform's three dedicated payload classes. Properties verified by the emit-site extractor (note roomScene, not room).
[EXTRACTED] lib/rooms/server/scene.js:L156 - emit('reldens.joinRoomEnd', new JoinedSceneRoomEvent(...)); lib/rooms/server/events/joined-scene-room-event.js:L1 - constructor assigns roomScene/client/options/userModel/loggedPlayer/isGuest

- Zone: server
- Dispatch: emit (awaited)
- Payload: a `JoinedSceneRoomEvent` instance with properties `client, isGuest, loggedPlayer, options, roomScene, userModel`
- Emitted at: lib/rooms/server/scene.js:L156

## Properties

### client

```ts
client: unknown;
```

***

### isGuest

```ts
isGuest: unknown;
```

***

### loggedPlayer

```ts
loggedPlayer: unknown;
```

***

### options

```ts
options: unknown;
```

***

### roomScene

```ts
roomScene: unknown;
```

***

### userModel

```ts
userModel: unknown;
```
