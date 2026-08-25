# Type Alias: SetAudioPayload

```ts
type SetAudioPayload = {
  audioManager: AudioManager;
  categoryKey: string;
  enabled: boolean;
};
```

`reldens.setAudio`
- Zone: client
- Dispatch: emit (awaited)
- Payload: one object with keys `audioManager, categoryKey, enabled`
- Emitted at: lib/audio/client/manager.js:L80

## Properties

### audioManager

```ts
audioManager: AudioManager;
```

***

### categoryKey

```ts
categoryKey: string;
```

***

### enabled

```ts
enabled: boolean;
```
