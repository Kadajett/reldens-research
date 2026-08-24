/**
 * Example 01 - booting a Reldens server from TypeScript and hooking its events.
 *
 * First run: with no `install.lock` in this folder the server serves the web
 * installer instead of the game. Point a browser at it, fill in the database
 * details from docker-compose.yml, and it writes `.env`, creates the schema,
 * generates entities and restarts into the game. See README.md.
 */
import { ServerManager } from 'reldens/server';
import { ServerManagerConfigSchema } from '@reldens-tutorials/schemas';
import { ServerPlugin } from './plugin';
import { pluginDefinition } from './plugin-definition';
import { resolveReldensModulePath } from './reldens-module-path';

console.info('[example-01] plugin definition validated:', pluginDefinition.name);

// The config is validated before Reldens sees it. Reldens itself never checks this
// object - a bad reldensModulePath, for example, surfaces minutes later as a Parcel
// error - so the schema turns those into immediate, located failures.
const config = ServerManagerConfigSchema.parse({
    projectRoot: __dirname + '/..',
    projectThemeName: 'default',
    reldensModulePath: resolveReldensModulePath(),
    jsSourceMaps: '1' === process.env['RELDENS_JS_SOURCEMAPS'],
    cssSourceMaps: '1' === process.env['RELDENS_CSS_SOURCEMAPS'],
    customPlugin: ServerPlugin
});

const appServer = new ServerManager(config);

// Uncomment to have every event log its listeners as it fires. Set it to a comma
// separated list of event keys to narrow it down; 'all' is extremely noisy.
// appServer.events.debug = 'all';

// Listeners can also be attached from out here, without a plugin. A plugin is the
// right home for anything that ships as a unit; this is the right home for
// one-off wiring that belongs to this particular deployment.
appServer.events.on('reldens.serverConfigFeaturesReady', () => {
    console.info('[example-01] features ready');
});

// TODO: your deployment-level wiring goes here.

async function main(): Promise<void> {
    await appServer.createServers();
    await appServer.start();
    console.info('[example-01] server up');
}

main().catch((error: unknown) => {
    console.error('[example-01] failed to start', error);
    process.exit(1);
});
