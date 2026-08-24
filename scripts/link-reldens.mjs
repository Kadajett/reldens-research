/**
 * npm workspaces hoists `reldens` to the repo-root node_modules, but the
 * Reldens CLI (bin/commander.js) and ThemeManager both default their
 * `reldensModulePath` to `<cwd>/node_modules/reldens`. Without a local link,
 * `npx reldens buildClient` and friends fail when run from an example folder.
 *
 * This runs on root postinstall (after npm has finished pruning) and drops a
 * symlink into every workspace that depends on reldens.
 */
import { createRequire } from 'node:module';
import { dirname, join, relative } from 'node:path';
import { readdirSync, readFileSync, existsSync, lstatSync, mkdirSync, rmSync, symlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(new URL('.', import.meta.url)));
const require = createRequire(join(repoRoot, 'noop.js'));

let reldensRoot;
try {
    reldensRoot = dirname(require.resolve('reldens/package.json'));
} catch {
    console.log('[link-reldens] reldens is not installed yet, nothing to link.');
    process.exit(0);
}

const workspaceDirs = [];
for(const group of ['examples', 'packages']){
    const groupPath = join(repoRoot, group);
    if(!existsSync(groupPath)){
        continue;
    }
    for(const entry of readdirSync(groupPath, {withFileTypes: true})){
        if(entry.isDirectory() && existsSync(join(groupPath, entry.name, 'package.json'))){
            workspaceDirs.push(join(groupPath, entry.name));
        }
    }
}

for(const workspaceDir of workspaceDirs){
    const pkg = JSON.parse(readFileSync(join(workspaceDir, 'package.json'), 'utf8'));
    const dependsOnReldens = Boolean(pkg.dependencies?.reldens || pkg.devDependencies?.reldens);
    if(!dependsOnReldens){
        continue;
    }
    const target = join(workspaceDir, 'node_modules', 'reldens');
    if(existsSync(target) && lstatSync(target).isSymbolicLink()){
        continue;
    }
    if(existsSync(target)){
        // A real directory means npm installed its own copy, leave it alone.
        continue;
    }
    mkdirSync(dirname(target), {recursive: true});
    rmSync(target, {force: true});
    symlinkSync(reldensRoot, target, 'junction');
    console.log('[link-reldens] linked '+relative(repoRoot, target));
}
