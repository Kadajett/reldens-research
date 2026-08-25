/**
 * The extraction core shared by the research scripts and the schema package's
 * drift tests. The tests import THIS file and re-run it over the installed
 * reldens package, so "the generated shapes match the package" is checked by the
 * same code that produced them, against a different tree.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Offset of the closer matching the opener at openOffset, or -1. */
export function balancedEnd(text, openOffset) {
    let depth = 0;
    let inString = null;
    for(let i = openOffset; i < text.length; i++){
        const ch = text[i];
        if(inString){
            if(ch === inString && '\\' !== text[i - 1]){
                inString = null;
            }
            continue;
        }
        if("'" === ch || '"' === ch || '`' === ch){
            inString = ch;
            continue;
        }
        if('(' === ch || '{' === ch || '[' === ch){
            depth++;
        } else if(')' === ch || '}' === ch || ']' === ch){
            depth--;
            if(0 === depth){
                return i;
            }
        }
    }
    return -1;
}

/** Splits an argument or object body on top-level commas. */
export function splitTopLevel(text) {
    const parts = [];
    let depth = 0;
    let inString = null;
    let start = 0;
    for(let i = 0; i < text.length; i++){
        const ch = text[i];
        if(inString){
            if(ch === inString && '\\' !== text[i - 1]){
                inString = null;
            }
            continue;
        }
        if("'" === ch || '"' === ch || '`' === ch){
            inString = ch;
            continue;
        }
        if('(' === ch || '{' === ch || '[' === ch){
            depth++;
        } else if(')' === ch || '}' === ch || ']' === ch){
            depth--;
        } else if(',' === ch && 0 === depth){
            parts.push(text.slice(start, i).trim());
            start = i + 1;
        }
    }
    const last = text.slice(start).trim();
    if(last){
        parts.push(last);
    }
    return parts;
}

/** Top-level keys of an object literal body (the text between its braces). */
export function objectKeys(body) {
    return splitTopLevel(body).map((entry) => {
        const spread = /^\.\.\.(.+)$/.exec(entry);
        if(spread){
            return {key: '...'+spread[1].trim().slice(0, 50), spread: true};
        }
        const match = /^(?:'([^']+)'|"([^"]+)"|\[([^\]]+)\]|([A-Za-z0-9_$]+))\s*(?::|$|\()/.exec(entry);
        if(!match){
            return {key: entry.slice(0, 40), unparsed: true};
        }
        return {
            key: match[1] ?? match[2] ?? match[3] ?? match[4],
            computed: Boolean(match[3]),
            valueExpr: entry.includes(':') ? entry.slice(entry.indexOf(':') + 1).trim().slice(0, 80) : (match[4] ?? '')
        };
    });
}

/** Properties a class assigns to `this` plus its class fields. */
export function classProperties(classSource, className) {
    const props = new Set();
    const classStart = classSource.indexOf('class '+className);
    if(-1 === classStart){
        return [];
    }
    for(const match of classSource.slice(classStart).matchAll(/this\.([A-Za-z0-9_$]+)\s*=/g)){
        props.add(match[1]);
    }
    for(const match of classSource.slice(classStart).matchAll(/^\s{4}([A-Za-z0-9_$]+)\s*=/gm)){
        props.add(match[1]);
    }
    return [...props].sort();
}

function listJsFiles(root, dirs) {
    try {
        return execFileSync('find', [...dirs, '-name', '*.js'], {cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024})
            .split('\n').filter(Boolean);
    } catch {
        return [];
    }
}

function resolveClassInstance(text, root, file, className) {
    const requireMatch = new RegExp(
        '\\{[^}]*\\b'+className+'\\b[^}]*\\}\\s*=\\s*require\\(\'([^\']+)\'\\)'
    ).exec(text);
    let classFile = null;
    let properties = [];
    if(requireMatch && requireMatch[1].startsWith('.')){
        const path = join(root, file, '..', requireMatch[1]+'.js');
        try {
            properties = classProperties(readFileSync(path, 'utf8'), className);
            classFile = path.replace(root+'/', '');
        } catch {
            classFile = requireMatch[1];
        }
    } else if(requireMatch){
        classFile = requireMatch[1];
    } else if(text.includes('class '+className)){
        classFile = file;
        properties = classProperties(text, className);
    }
    return {className, classFile, properties};
}

/**
 * Every reldens.* emit under root/dirs, classified by payload style.
 * Returns {eventName: [{origin, file, line, style, wrapped, ...detail}]}.
 */
export function extractEmitPayloads(root, dirs, origin) {
    const events = {};
    for(const file of listJsFiles(root, dirs)){
        const text = readFileSync(join(root, file), 'utf8');
        for(const match of text.matchAll(/\.(emit|emitSync|emitEvent)\(\s*'(reldens\.[a-zA-Z0-9_.]+)'/g)){
            const eventName = match[2];
            const openParen = match.index + match[0].indexOf('(');
            const closeParen = balancedEnd(text, openParen);
            if(-1 === closeParen){
                continue;
            }
            const args = splitTopLevel(text.slice(openParen + 1, closeParen)).slice(1);
            const line = text.slice(0, match.index).split('\n').length;

            let style = 'none';
            let detail = {};
            const isWrapped = 'emitEvent' === match[1];
            if(0 === args.length && isWrapped){
                // @reldens/cms emitEvent(name) with no data still delivers
                // {adminManager: this} (admin-manager.js:58) - the listener gets an
                // object, not nothing.
                style = 'object-literal';
                detail = {keys: []};
            } else if(1 === args.length && args[0].startsWith('{')){
                style = 'object-literal';
                detail = {keys: objectKeys(args[0].slice(1, -1))};
            } else if(1 === args.length && args[0].startsWith('new ')){
                style = 'class-instance';
                detail = resolveClassInstance(text, root, file, /^new\s+([A-Za-z0-9_$.]+)/.exec(args[0])[1]);
            } else if(1 === args.length && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(args[0])){
                const before = text.slice(0, match.index);
                // The NEAREST preceding declaration wins: a file can declare the same
                // local name in several methods (manager.js declares `let event = {...}`
                // four times), and resolving to the first one in the file attaches the
                // wrong payload to the later emits.
                const lastMatch = (pattern) => {
                    let found = null;
                    for(const candidate of before.matchAll(pattern)){
                        found = candidate;
                    }
                    return found;
                };
                const classDeclMatch = lastMatch(new RegExp(
                    '(?:let|const|var)\\s+'+args[0]+'\\s*=\\s*new\\s+([A-Za-z0-9_$.]+)', 'g'
                ));
                const declMatch = lastMatch(new RegExp(
                    '(?:let|const|var)\\s+'+args[0]+'\\s*=\\s*\\{', 'g'
                ));
                if(classDeclMatch && (!declMatch || classDeclMatch.index > declMatch.index)){
                    style = 'class-instance';
                    detail = {...resolveClassInstance(text, root, file, classDeclMatch[1]), resolvedFromLocal: args[0]};
                } else if(declMatch){
                    const braceOffset = declMatch.index + declMatch[0].length - 1;
                    const braceEnd = balancedEnd(text, braceOffset);
                    if(-1 !== braceEnd){
                        style = 'object-literal';
                        detail = {keys: objectKeys(text.slice(braceOffset + 1, braceEnd)), resolvedFromLocal: args[0]};
                    }
                }
                if('none' === style){
                    style = 'positional';
                    detail = {args: [args[0]]};
                }
            } else if(1 <= args.length){
                style = 'positional';
                detail = {args: args.map((argument) => argument.slice(0, 80))};
            }

            events[eventName] ??= [];
            events[eventName].push({origin, file, line, style, wrapped: isWrapped, ...detail});
        }
    }
    return events;
}

/**
 * Every client.send('*', {...}) / broadcast('*', {...}) literal under root/dirs.
 * `resolveConstant(expr)` maps 'GameConst.UI' style references to wire strings.
 * Returns {act: [{channel, file, line, actVia, keys}]}.
 */
export function extractServerMessages(root, dirs, resolveConstant) {
    const messages = {};
    for(const file of listJsFiles(root, dirs)){
        const text = readFileSync(join(root, file), 'utf8');
        for(const match of text.matchAll(/\.(send|broadcast)\(\s*'\*'\s*,\s*\{/g)){
            const braceOffset = match.index + match[0].length - 1;
            const braceEnd = balancedEnd(text, braceOffset);
            if(-1 === braceEnd){
                continue;
            }
            const entries = objectKeys(text.slice(braceOffset + 1, braceEnd));
            const line = text.slice(0, match.index).split('\n').length;
            const actEntry = entries.find((entry) =>
                'act' === entry.key || (entry.computed && /ACTION_KEY/.test(entry.key)));
            let act = null;
            let actVia = 'no act field';
            if(actEntry){
                const resolved = resolveConstant(actEntry.valueExpr || actEntry.key);
                act = resolved.value;
                actVia = resolved.via;
            }
            const bucket = act ?? '(dynamic or none)';
            messages[bucket] ??= [];
            messages[bucket].push({
                channel: match[1],
                file,
                line,
                actVia,
                keys: entries.map((entry) => ({
                    // Computed keys ([ActionsConst.DATA_OWNER_TYPE]) resolve to their
                    // wire string so schemas are keyed by what actually travels.
                    key: entry.computed ? (resolveConstant(entry.key).value ?? entry.key) : entry.key,
                    spread: entry.spread ?? false,
                    computed: entry.computed ?? false,
                    valueExpr: entry.valueExpr
                }))
            });
        }
    }
    return messages;
}

/** Builds the constant resolver from a runtime-constants.json modules map. */
export function makeConstantResolver(modules) {
    const constantValues = {};
    for(const exportsMap of Object.values(modules)){
        for(const [exportName, value] of Object.entries(exportsMap)){
            if(value && 'object' === typeof value){
                for(const [path, leaf] of Object.entries(value)){
                    constantValues[exportName+'.'+path] = leaf;
                }
            } else {
                constantValues[exportName] = value;
            }
        }
    }
    return (expression) => {
        const trimmed = String(expression).replace(/^\[|\]$/g, '').trim();
        const literal = /^'([^']*)'$/.exec(trimmed);
        if(literal){
            return {value: literal[1], via: 'literal'};
        }
        if(Object.hasOwn(constantValues, trimmed)){
            return {value: constantValues[trimmed], via: trimmed};
        }
        const parts = trimmed.split('.');
        if(1 < parts.length){
            const withoutRoot = parts.slice(1).join('.');
            for(const [path, value] of Object.entries(constantValues)){
                if(path.endsWith('.'+withoutRoot) || path === withoutRoot){
                    return {value, via: path+' (suffix match)'};
                }
            }
        }
        return {value: null, via: 'unresolved: '+trimmed.slice(0, 60)};
    };
}
