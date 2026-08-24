/**
 * Example 05 - a Three.js client over the Reldens room protocol.
 *
 * Two processes:
 *   npm start        the Reldens server (game + web installer + admin), port 8085
 *   npm run dev:client   the Vite dev server for the Three.js client, port 5173
 *
 * The stock Phaser client is still served on 8085 and still works. The Three.js
 * client is a second, independent front end for the same world.
 */
import { ServerManager } from 'reldens/server';
import { ServerPlugin } from './plugin';
import { resolveReldensModulePath } from './reldens-module-path';

const appServer = new ServerManager({
    projectRoot: __dirname + '/..',
    projectThemeName: 'default',
    reldensModulePath: resolveReldensModulePath(),
    jsSourceMaps: '1' === process.env['RELDENS_JS_SOURCEMAPS'],
    cssSourceMaps: '1' === process.env['RELDENS_CSS_SOURCEMAPS'],
    customPlugin: ServerPlugin
});

async function main(): Promise<void> {
    await appServer.createServers();
    await appServer.start();
    console.info('[example-05] server up');
}

main().catch((error: unknown) => {
    console.error('[example-05] failed to start', error);
    process.exit(1);
});
