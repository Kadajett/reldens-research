/**
 * Emits a self-contained, JSDoc-annotated TypeScript module documenting every
 * Reldens event payload, built from the Zod schema metadata in build/index.js.
 * The output is the input to TypeDoc; it imports nothing so TypeDoc reads it alone.
 */
const { writeFileSync } = require('node:fs');
const { join } = require('node:path');
const S = require('../build/index.js');

const info = S.RELDENS_EVENT_PAYLOAD_INFO;
const prov = S.RELDENS_EVENT_PROVENANCE;
const handVerified = S.EVENT_PAYLOADS || {};
const zod = require('zod');
const { resolvePayloadTypes } = require('./resolve-payload-types.cjs');

// event -> key -> {type, expr}, read from the reldens emit-site expressions
const resolved = resolvePayloadTypes();
const referencedClasses = new Set();

const TS_BUILTINS = new Set(['Function', 'Array', 'Promise', 'Map', 'Set', 'Date', 'RegExp',
    'Error', 'Object', 'Boolean', 'Number', 'String', 'Symbol', 'WeakMap', 'WeakSet']);

// normalise a source-read type to a valid TS type: builtins map through, generic and
// namespaced types (Phaser.Scene) collapse to unknown since we do not model them
function normalizeType(t){
    if(!t){ return 'unknown'; }
    if(/^Array(<.*>)?$/.test(t)){ return 'unknown[]'; }
    if('function' === t){ return 'Function'; }
    const base = t.replace(/\[\]$/, '');
    if(base.includes('.') || base.includes('<')){ return 'unknown'; }
    return t;
}

// the value TYPE for one payload key: a concrete reldens class or primitive read
// from the source, or unknown when the source does not establish it
function keyType(name, key){
    const t = normalizeType(resolved[name] && resolved[name][key] && resolved[name][key].type);
    for(const cls of t.match(/[A-Z]\w+/g) || []){ if(!TS_BUILTINS.has(cls)){ referencedClasses.add(cls); } }
    return t;
}
function keyExpr(name, key){
    return (resolved[name] && resolved[name][key] && resolved[name][key].expr) || null;
}

function zoneOf(name){
    const sites = (info[name] && info[name].sites) || [];
    if(sites.some((site) => !site.startsWith('reldens:'))){ return 'cms'; }
    return sites.every((site) => site.includes('/client/')) ? 'client' : 'server';
}

function describeOf(name){
    const schema = handVerified[name];
    if(!schema){ return null; }
    const meta = zod.z.globalRegistry.get(schema);
    return (meta && meta.description) || null;
}

function pascal(name){
    return name.replace(/^reldens\./, '').replace(/(^|[^a-zA-Z0-9])([a-zA-Z0-9])/g,
        (_, __, ch) => ch.toUpperCase());
}

const RESERVED = new Set(['this', 'new', 'void', 'null', 'case', 'default', 'class', 'function']);
function safeLabel(raw, index){
    if('this' === String(raw)){ return 'self'; }
    const cleaned = String(raw).replace(/^this\./, '').replace(/[^a-zA-Z0-9_]/g, '_').replace(/^_+|_+$/g, '');
    if(!cleaned || !/^[a-zA-Z_]/.test(cleaned)){ return 'arg'+index; }
    return RESERVED.has(cleaned) ? cleaned+'_' : cleaned;
}

function payloadType(name){
    const i = info[name];
    if('object' === i.style){
        const lines = [];
        const field = (key, opt) => {
            const expr = keyExpr(name, key);
            const note = expr ? '  // '+expr : '';
            lines.push('    '+JSON.stringify(key)+(opt ? '?' : '')+': '+keyType(name, key)+';'+note);
        };
        for(const key of i.requiredKeys){ field(key, false); }
        for(const key of i.sometimesKeys){ field(key, true); }
        return lines.length ? '{\n'+lines.join('\n')+'\n}' : 'Record<string, unknown>';
    }
    if('class' === i.style){
        const lines = i.properties.map((p) => '    '+JSON.stringify(p)+': unknown;');
        return lines.length ? '{\n'+lines.join('\n')+'\n}' : 'Record<string, unknown>';
    }
    if('positional' === i.style){
        const labels = new Set();
        const parts = i.args.map((arg, idx) => {
            let label = safeLabel(arg, idx);
            while(labels.has(label)){ label = label+'_'; }
            labels.add(label);
            return label+': unknown';
        });
        return '['+parts.join(', ')+']';
    }
    if('none' === i.style){ return 'void'; }
    return 'unknown';
}

function payloadSummary(name){
    const i = info[name];
    if('object' === i.style){
        const keys = i.requiredKeys.join(', ') || '(none required)';
        const opt = i.sometimesKeys.length ? ' (sometimes: '+i.sometimesKeys.join(', ')+')' : '';
        const spread = i.hasSpreadOrComputed ? ' (site adds spread/computed keys)' : '';
        return 'one object with keys `'+keys+'`'+opt+spread;
    }
    if('class' === i.style){
        return 'a `'+i.className+'` instance with properties `'+i.properties.join(', ')+'`';
    }
    if('positional' === i.style){
        return 'positional arguments `('+i.args.join(', ')+')`';
    }
    if('none' === i.style){ return 'no payload'; }
    return 'varies by emit site';
}

function jsdoc(name){
    const p = prov[name] || {};
    const dispatch = p.sync ? 'emitSync (runs inside the caller\'s tick; keep listeners cheap)' : 'emit (awaited)';
    const sites = ((info[name] && info[name].sites) || []).map((s) => s.replace(/^[^:]+:/, '')).join(', ');
    const describe = describeOf(name);
    const lines = ['/**', ' * `'+name+'`'];
    if(describe){
        for(const dl of describe.split('\n')){ lines.push(' * '+dl); }
        lines.push(' *');
    }
    lines.push(' * - Zone: '+zoneOf(name));
    lines.push(' * - Dispatch: '+dispatch);
    lines.push(' * - Payload: '+payloadSummary(name));
    if(sites){ lines.push(' * - Emitted at: '+sites); }
    lines.push(' */');
    return lines.join('\n');
}

const names = Object.keys(info).sort();
const header = '/* GENERATED - do not edit. Source: scripts/generate-event-api.cjs\n'
    + ' * One documented payload type per Reldens event, for TypeDoc. A key\'s type is\n'
    + ' * the class or primitive read from the reldens emit site (the source expression\n'
    + ' * follows each field as a comment); unknown means the source did not establish it. */\n\n';
// generating the body populates referencedClasses via keyType()
const body = names.map((name) => jsdoc(name)+'\nexport type '+pascal(name)+'Payload = '+payloadType(name)+';\n').join('\n');
const aliasList = [...referencedClasses].sort();
const aliasBlock = aliasList.length
    ? '/**\n * Reldens runtime classes referenced by the payloads below. They are modelled as\n'
        + ' * opaque (unknown): the emit site proves the value IS one of these, but this\n'
        + ' * package does not model their internal shape.\n */\n'
        + aliasList.map((c) => 'export type '+c+' = unknown;').join('\n') + '\n\n'
    : '';
const out = join(__dirname, '..', 'docs-gen', 'event-api.ts');
writeFileSync(out, header+aliasBlock+body);
console.log('wrote', out, '-', names.length, 'events,', aliasList.length, 'referenced classes');
