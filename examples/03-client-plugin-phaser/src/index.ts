/**
 * Example 03 - custom client plugin and Phaser UI.
 *
 * Note the theme name: this example serves `theme/tutorial` rather than
 * `theme/default`, because the client entry is TypeScript. Run
 * `npm run theme:sync` once before the first start to generate that folder.
 */
import { ServerManager } from 'reldens/server';
import { ServerPlugin } from './plugin';
import { resolveReldensModulePath } from './reldens-module-path';

const appServer = new ServerManager({
    projectRoot: __dirname + '/..',
    projectThemeName: 'tutorial',
    reldensModulePath: resolveReldensModulePath(),
    jsSourceMaps: '1' === process.env['RELDENS_JS_SOURCEMAPS'],
    cssSourceMaps: '1' === process.env['RELDENS_CSS_SOURCEMAPS'],
    customPlugin: ServerPlugin
});

async function main(): Promise<void> {
    await appServer.createServers();
    await appServer.start();
    console.info('[example-03] server up');
}

main().catch((error: unknown) => {
    console.error('[example-03] failed to start', error);
    process.exit(1);
});
