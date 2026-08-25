/**
 * Resolves the value TYPE of each object-payload key from the emit-site expression
 * recorded in research/event-payloads.json, by reading the reldens source:
 *   this            -> the class that owns the emitting method
 *   this.foo        -> the class assigned in `this.foo = new X(...)`
 *   new X(...)      -> X
 *   'a' / 1 / true  -> string / number / boolean
 * Anything it cannot establish stays null (rendered as unknown), so nothing is guessed.
 */
const { readFileSync, readdirSync, statSync } = require('node:fs');
const { join } = require('node:path');

const repoRoot = join(__dirname, '..', '..', '..');
const reldensRoot = join(repoRoot, 'node_modules', 'reldens');
const payloads = require(join(repoRoot, 'research', 'event-payloads.json'));

// Global fallback: an identifier reldens documents with exactly ONE concrete class
// across its whole source resolves to that class (Object/vague forms are ignored;
// any conflicting concrete type makes it ambiguous and it is dropped).
function buildGlobalParams(){
    const seen = {};
    const paramRe = /@param\s+\{([^}]+)\}\s+(\w+)/g;
    function walk(dir){
        for(const entry of readdirSync(dir)){
            const full = join(dir, entry);
            const st = statSync(full);
            if(st.isDirectory()){ walk(full); continue; }
            if(!entry.endsWith('.js')){ continue; }
            const text = readFileSync(full, 'utf8');
            let m;
            while((m = paramRe.exec(text))){
                const t = usefulType(m[1]); if(!t){ continue; }
                (seen[m[2]] ??= new Set()).add(t);
            }
        }
    }
    try { walk(join(reldensRoot, 'lib')); } catch { /* fine */ }
    const map = {};
    for(const [name, types] of Object.entries(seen)){ if(1 === types.size){ map[name] = [...types][0]; } }
    return map;
}
let globalParams = null;

const fileCache = new Map();
function readReldens(file){
    if(fileCache.has(file)){ return fileCache.get(file); }
    let text = '';
    try { text = readFileSync(join(reldensRoot, file), 'utf8'); } catch { /* missing */ }
    const lines = text.split('\n');
    // property -> class, from `this.prop = new Class(`
    const propTypes = {};
    let m;
    const propRe = /this\.(\w+)\s*=\s*new\s+([A-Z]\w+)/g;
    while((m = propRe.exec(text))){ propTypes[m[1]] = m[2]; }
    // local const/let -> class, from `const name = new Class(`
    const localTypes = {};
    const localRe = /(?:const|let|var)\s+(\w+)\s*=\s*new\s+([A-Z]\w+)/g;
    while((m = localRe.exec(text))){ if(!(m[1] in localTypes)){ localTypes[m[1]] = m[2]; } }
    // class declarations with their starting line, to find the one enclosing an emit
    const classes = [];
    const classRe = /^\s*class\s+(\w+)/gm;
    while((m = classRe.exec(text))){ classes.push({name: m[1], line: text.slice(0, m.index).split('\n').length}); }
    // methods with the @param types declared in the JSDoc block right above them, so
    // a bare identifier passed into an event can resolve to its documented type
    const methods = [];
    const blockRe = /\/\*\*([\s\S]*?)\*\//g;
    while((m = blockRe.exec(text))){
        const after = text.slice(m.index + m[0].length);
        const decl = after.match(/^\s*(?:async\s+)?(\w+)\s*\(/);
        if(!decl){ continue; }
        const params = {};
        let p;
        const paramRe = /@param\s+\{([^}]+)\}\s+(\w+)/g;
        while((p = paramRe.exec(m[1]))){ params[p[2]] = p[1].trim(); }
        methods.push({line: text.slice(0, m.index).split('\n').length, params});
    }
    // file-level @param types: within one file an identifier names one type. Keep the
    // most specific (a concrete class beats Object); ambiguous names are dropped.
    const fileParams = {};
    const ambiguous = new Set();
    const anyParamRe = /@param\s+\{([^}]+)\}\s+(\w+)/g;
    while((m = anyParamRe.exec(text))){
        const t = usefulType(m[1]); const name = m[2];
        if(!t){ continue; }
        if(name in fileParams && fileParams[name] !== t){ ambiguous.add(name); }
        else { fileParams[name] = t; }
    }
    for(const n of ambiguous){ delete fileParams[n]; }
    const info = {lines, propTypes, localTypes, classes, methods, fileParams};
    fileCache.set(file, info);
    return info;
}

// a JSDoc type worth showing: a concrete class or primitive, not Object/*/any
function usefulType(t){
    if(!t){ return null; }
    const c = t.replace(/\[\]$/, '').trim();
    if(/^(Object|object|\*|any|mixed|\{)/.test(c) || !/^[A-Za-z]/.test(c)){ return null; }
    return t.trim();
}

function paramsAtLine(info, line){
    let params = {};
    for(const meth of info.methods){ if(meth.line <= line){ params = meth.params; } }
    return params;
}

function classAtLine(info, line){
    let name = null;
    for(const c of info.classes){ if(c.line <= line){ name = c.name; } }
    return name ?? (1 === info.classes.length ? info.classes[0].name : null);
}

// resolve one value expression to a type name (or null if not establishable)
function resolveExpr(expr, info, line){
    const e = String(expr || '').trim();
    if('this' === e){ return classAtLine(info, line); }
    let m = e.match(/^new\s+([A-Z]\w+)/);
    if(m){ return m[1]; }
    m = e.match(/^this\.(\w+)$/);
    if(m){ return info.propTypes[m[1]] ?? null; }
    if(/^['"`]/.test(e)){ return 'string'; }
    if(/^-?\d/.test(e)){ return 'number'; }
    if('true' === e || 'false' === e){ return 'boolean'; }
    if('null' === e){ return 'null'; }
    if(/^\[/.test(e)){ return 'unknown[]'; }
    m = e.match(/^(\w+)$/);
    if(m){
        globalParams ??= buildGlobalParams();
        return info.localTypes[m[1]] ?? usefulType(paramsAtLine(info, line)[m[1]]) ?? info.fileParams[m[1]] ?? globalParams[m[1]] ?? null;
    }
    return null;
}

// event name -> { key -> {type, expr} } for object-literal payloads
function resolvePayloadTypes(){
    const out = {};
    for(const [name, sites] of Object.entries(payloads.events)){
        const site = (sites || []).find((s) => 'object-literal' === s.style && Array.isArray(s.keys));
        if(!site){ continue; }
        const info = readReldens(site.file);
        const keys = {};
        for(const k of site.keys){
            if(k.computed || !k.key){ continue; }
            keys[k.key] = {type: resolveExpr(k.valueExpr, info, site.line), expr: (k.valueExpr || '').trim()};
        }
        out[name] = keys;
    }
    return out;
}

module.exports = { resolvePayloadTypes };

if(require.main === module){
    const r = resolvePayloadTypes();
    let total = 0, resolved = 0;
    const classes = new Set();
    for(const keys of Object.values(r)){
        for(const {type} of Object.values(keys)){
            total++;
            if(type){ resolved++; if(/^[A-Z]/.test(type)){ classes.add(type); } }
        }
    }
    console.log('events with object payloads:', Object.keys(r).length);
    console.log('keys total:', total, 'resolved:', resolved, '('+Math.round(100 * resolved / total)+'%)');
    console.log('distinct class types:', classes.size);
    console.log('sample:', JSON.stringify(r['reldens.serverConfigFeaturesReady']));
}
