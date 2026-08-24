/**
 * The client entry point, in TypeScript.
 *
 * Parcel bundles the client starting from the theme's HTML files, following the
 * <script> tags it finds. Reldens' parcel config already routes .ts through
 * @parcel/transformer-js, so pointing index.html at this file is all it takes -
 * no separate compile step, and no tsc output to keep in sync.
 *
 * This file is the source of truth. `npm run theme:sync` copies it into
 * theme/tutorial/, which is generated and gitignored.
 */
/// <reference types="@reldens-tutorials/types" />

import { GameManager } from 'reldens/client';
import { ClientPlugin } from '../../src/client/plugin';

// Logger settings have to be set on window before the game manager is imported at
// runtime; with a bundler the import above is hoisted, so read them here and let
// the URL decide the level for a debugging session.
const urlParams = new URLSearchParams(window.location.search);
(window as any).RELDENS_LOG_LEVEL = urlParams.get('logLevel') ?? 7;

const reldens = new GameManager();

// Point these at another host when the static client is served separately from the
// game server. Left empty, both are derived from the page's own URL.
// reldens.gameServerUrl = 'wss://localhost:8083';
// reldens.appServerUrl = 'https://localhost:8083';

reldens.setupCustomClientPlugin('tutorial', ClientPlugin);

window.addEventListener('DOMContentLoaded', () => {
    reldens.clientStart();
});

// TODO: your client-side wiring. A few events worth starting from:
//   reldens.events.on('reldens.startGameAfter', () => {})
//   reldens.events.on('reldens.activateRoom', (room) => { room.onMessage('*', ...) })
//   reldens.events.on('reldens.beforeCreateUiScene', (props) => {})

// Handy while developing; not required, the app can stay fully encapsulated.
(window as any).reldens = reldens;
