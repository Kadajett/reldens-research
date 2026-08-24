/**
 * Example 02 - custom room scenes and world logic.
 *
 * Same boot as example 01. What is different is in src/rooms and src/world.
 */
import { ServerManager } from 'reldens/server';
import { ServerPlugin } from './plugin';
import { pluginDefinition } from './plugin-definition';

console.info('[example-02] plugin definition validated:', pluginDefinition.name);
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
    console.info('[example-02] server up');
}

main().catch((error: unknown) => {
    console.error('[example-02] failed to start', error);
    process.exit(1);
});
