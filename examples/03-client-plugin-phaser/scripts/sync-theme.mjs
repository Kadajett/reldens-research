/**
 * Builds `theme/tutorial/` from the platform default theme plus this example's
 * overrides.
 *
 * The default theme is ~1000 asset files that live in node_modules; copying them
 * into git would drown the interesting code. So `theme/` is generated and
 * gitignored, and the only checked-in client files are the ones in
 * `theme-overrides/`, which are copied on top afterwards.
 *
 * Re-run this after editing anything in theme-overrides/, then restart the server
 * (or `npx reldens buildClient tutorial`) to re-bundle.
 */
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const exampleRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const themeName = 'tutorial';
const themePath = join(exampleRoot, 'theme', themeName);
const overridesPath = join(exampleRoot, 'theme-overrides', themeName);

console.log('[sync-theme] installing the default theme into theme/'+themeName);
mkdirSync(join(exampleRoot, 'theme'), {recursive: true});
execFileSync('npx', ['reldens', 'installDefaultTheme', themeName], {
    cwd: exampleRoot,
    stdio: 'inherit'
});

// The default theme ships its own index.js entry. This example replaces it with a
// TypeScript one, so the stock entry has to go or Parcel bundles both.
const defaultEntry = join(themePath, 'index.js');
if(existsSync(defaultEntry)){
    rmSync(defaultEntry);
}

console.log('[sync-theme] applying theme-overrides/'+themeName);
cpSync(overridesPath, themePath, {recursive: true});

// Parcel finds the client entry by following the <script> tags in the theme's HTML.
// Rather than fork the platform's index.html (which is long and changes upstream),
// repoint the one tag that matters. Parcel's config already routes .ts through the
// JS transformer, so no compile step is involved.
for(const htmlFile of readdirSync(themePath)){
    if(!htmlFile.endsWith('.html')){
        continue;
    }
    const htmlPath = join(themePath, htmlFile);
    const original = readFileSync(htmlPath, 'utf8');
    const patched = original.replace(/src="\.\/index\.js"/g, 'src="./index.ts"');
    if(patched === original){
        console.warn('[sync-theme] no ./index.js script tag found in '+htmlFile+', left as is.');
        continue;
    }
    writeFileSync(htmlPath, patched);
    console.log('[sync-theme] repointed '+htmlFile+' at index.ts');
}

console.log('[sync-theme] done. Run `npx reldens buildClient '+themeName+'` to re-bundle.');
