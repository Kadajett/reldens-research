# Class: ItemsServer

Server-side wrapper grouping an [ItemsManager](ItemsManager.md) (`manager`) with a `Sender`
(`client`). Most work is done through `server.manager`.

## Constructors

### Constructor

```ts
new ItemsServer(props): ItemsServer;
```

#### Parameters

##### props

###### owner?

`any` = `zInstance`

###### client?

`any` = `...`

#### Returns

`ItemsServer`

## Properties

### manager

```ts
readonly manager: ItemsManager;
```

## Methods

### createClient()

```ts
createClient(props): unknown;
```

Create the Sender from `props.client`; false if errored or no client.

#### Parameters

##### props

`object`

#### Returns

`unknown`
