/**
 * Headless-Chrome client driver over the DevTools Protocol.
 *
 * Loads the REAL bundled Phaser client with ?harness=1 (the injected recorder
 * attaches to reldens.events), plays as a guest through the client's own API,
 * creates a player, waits for the Phaser scene, moves, opens UI panels, changes
 * scene, so the client-zone events fire for real, then POSTs the recorder's
 * aggregate to the server. Nothing is emitted artificially.
 */
import WebSocket from 'ws';

const CDP_URL = 'http://localhost:9222';
const PAGE_URL = 'http://localhost:8086/?harness=1&logLevel=1';

interface CdpMessage {id?: number; result?: any; error?: any}

class Cdp {
    private ws!: WebSocket;
    private nextId = 1;
    private pending = new Map<number, (msg: CdpMessage) => void>();

    async connect(wsUrl: string): Promise<void> {
        this.ws = new WebSocket(wsUrl);
        await new Promise<void>((resolve, reject) => {
            this.ws.once('open', resolve);
            this.ws.once('error', reject);
        });
        this.ws.on('message', (data) => {
            const msg: CdpMessage = JSON.parse(String(data));
            if(msg.id && this.pending.has(msg.id)){
                this.pending.get(msg.id)!(msg);
                this.pending.delete(msg.id);
            }
        });
    }

    private send(method: string, params: Record<string, unknown> = {}): Promise<CdpMessage> {
        const id = this.nextId++;
        return new Promise((resolve) => {
            this.pending.set(id, resolve);
            this.ws.send(JSON.stringify({id, method, params}));
        });
    }

    async evaluate<T = unknown>(expression: string): Promise<T> {
        const response = await this.send('Runtime.evaluate', {expression, awaitPromise: true, returnByValue: true});
        return response.result?.result?.value as T;
    }

    navigate(url: string): Promise<CdpMessage> {
        return this.send('Page.navigate', {url});
    }

    // TRUSTED keyboard input at the browser level, so Phaser's own input handles it
    // exactly like a real key press (synthetic DOM events are ignored as untrusted)
    key(type: 'keyDown' | 'keyUp', code: string, vk: number, key: string): Promise<CdpMessage> {
        return this.send('Input.dispatchKeyEvent', {
            type, code, key, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk
        });
    }

    close(): void {
        this.ws.close();
    }
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(cdp: Cdp, expression: string, timeoutMs: number): Promise<boolean> {
    const startedAt = Date.now();
    while(Date.now() - startedAt < timeoutMs){
        if(await cdp.evaluate<boolean>(expression)){
            return true;
        }
        await sleep(500);
    }
    return false;
}

async function main(): Promise<void> {
    const targets = await fetch(CDP_URL+'/json').then((r) => r.json()) as Array<{type: string; webSocketDebuggerUrl: string}>;
    const page = targets.find((t) => 'page' === t.type);
    if(!page){
        throw new Error('no page target');
    }
    const cdp = new Cdp();
    await cdp.connect(page.webSocketDebuggerUrl);
    await cdp.evaluate('1');

    console.info('[browser-driver] navigating...');
    await cdp.navigate(PAGE_URL);
    if(!await waitFor(cdp, `!!(window.reldens && window.reldens.events && window.reldens.events.__harnessAttached)`, 20000)){
        throw new Error('recorder never attached');
    }
    await sleep(1500);

    // log in as an existing account (HARNESS_LOGIN_USER) whose player already lives
    // in the town, so we can reach the forest door and fight; a fresh guest otherwise
    const loginUser = process.env.HARNESS_LOGIN_USER;
    const loginPass = process.env.HARNESS_LOGIN_PASS || '';
    if(loginUser){
        console.info('[browser-driver] login as', loginUser);
        await cdp.evaluate(`window.reldens.startGame({formId:'login-form',username:'${loginUser}',password:'${loginPass}'}, false)`);
    } else {
        console.info('[browser-driver] guest login...');
        const guestName = 'gp'+String(Date.now()).slice(-8);
        await cdp.evaluate(`window.reldens.startGame(
            {formId:'guest-form',username:'${guestName}',password:'${guestName}',rePassword:'${guestName}',isGuest:true}, true)`);
    }

    // an existing account shows the player selector; a fresh guest shows create.
    if(await waitFor(cdp, `!!document.querySelector('#player-selector-form:not(.hidden)')`, 8000)){
        console.info('[browser-driver] selecting existing player...');
        await cdp.evaluate(`(() => {
            const sel = document.querySelector('#player-select-element');
            if(sel && sel.options.length){ sel.selectedIndex = 0; sel.dispatchEvent(new Event('change',{bubbles:true})); }
            document.querySelector('#player-selector-form').dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
            return true;
        })()`);
    } else if(await waitFor(cdp, `!!document.querySelector('#player-create-form:not(.hidden)')`, 8000)){
        console.info('[browser-driver] creating player...');
        await cdp.evaluate(`(() => {
            const input = document.querySelector('#new-player-name');
            input.value = 'BP${String(Date.now()).slice(-6)}';
            document.querySelector('#player-create-form').dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
            return true;
        })()`);
    }

    // wait for the Phaser scene to build
    const inScene = await waitFor(cdp, `!!document.querySelector('#reldens canvas')`, 30000);
    console.info('[browser-driver] canvas present:', inScene);
    await sleep(4000);

    // short movement in each direction to spawn the player engine and animate it
    await walk(cdp, ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'], 500);

    // open every on-screen panel then close it: fires the generic openUI/closeUI hooks
    await clickAll(cdp, '#reldens [class*="-open"], #reldens [class*="box-open"], #reldens [id$="-open"]');
    await sleep(1500);
    await clickAll(cdp, '#reldens [class*="-close"], #reldens [class*="box-close"], #reldens [id$="-close"]');
    await sleep(1000);

    // chat: open, type, send, close - fires chatMessageObjectCreated
    await cdp.evaluate(`(() => {
        const open = document.querySelector('#chat-open'); if(open){ open.click(); }
        const input = document.querySelector('#chat-input');
        if(input){ input.value = 'harness hello'; input.dispatchEvent(new Event('input',{bubbles:true})); }
        const send = document.querySelector('#chat-send'); if(send){ send.click(); }
        return !!(input && send);
    })()`);
    await sleep(1500);

    // targeting: Tab-cycle targets and click the canvas to show/clear a target
    await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keydown', {key:'Tab', code:'Tab', keyCode:9, bubbles:true}))`);
    await sleep(1000);
    await cdp.evaluate(`(() => {
        const c = document.querySelector('#reldens canvas'); if(!c){ return false; }
        const rect = c.getBoundingClientRect();
        for(const [dx,dy] of [[0.5,0.4],[0.6,0.5],[0.4,0.6]]){
            const x = rect.left + rect.width*dx, y = rect.top + rect.height*dy;
            for(const type of ['pointerdown','pointerup','click']){
                c.dispatchEvent(new MouseEvent(type,{bubbles:true,clientX:x,clientY:y,button:0}));
            }
        }
        return true;
    })()`);
    await sleep(1500);
    await cdp.evaluate(`(() => { const t = document.querySelector('#close-target, .close-target'); if(t){ t.click(); } return true; })()`);
    await sleep(1500);

    // if the account loaded straight into the forest, fight there; otherwise try to
    // cross the town->forest change point first, then fight
    const room = await cdp.evaluate<string>(`(() => { try { return window.reldens.activeRoomEvents.room.name; } catch(e){ return ''; } })()`);
    console.info('[browser-driver] room:', room);
    if('reldens-forest' === room){
        await fightAndDie(cdp);
    } else {
        const changed = await changeScene(cdp);
        console.info('[browser-driver] scene changed:', changed);
        if(changed){ await fightAndDie(cdp); }
    }

    const seen = await cdp.evaluate<number>(
        `Object.entries(window.__harnessRecords||{}).filter(([,r])=>r.seen>0).length`);
    console.info('[browser-driver] client events seen so far:', seen);

    await cdp.evaluate(`window.__harnessReport()`);
    const names = await cdp.evaluate<string[]>(
        `Object.entries(window.__harnessRecords||{}).filter(([,r])=>r.seen>0).map(([n])=>n)`);
    // write to a file so buffered stdout can't hide the result
    require('node:fs').writeFileSync(__dirname+'/../.browser-driver-result.json',
        JSON.stringify({seen, count: names.length, names: names.sort()}, null, 1));
    console.info('[browser-driver] reported '+names.length+' client events');

    cdp.close();
    process.exit(0);
}

function keyCode(key: string): number {
    return ({ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, ArrowLeft: 37} as Record<string, number>)[key] ?? 0;
}

async function walk(cdp: Cdp, keys: string[], holdMs: number): Promise<void> {
    for(const key of keys){
        await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keydown', {key:'${key}', code:'${key}', keyCode:${keyCode(key)}, bubbles:true}))`);
        await sleep(holdMs);
        await cdp.evaluate(`window.dispatchEvent(new KeyboardEvent('keyup', {key:'${key}', code:'${key}', keyCode:${keyCode(key)}, bubbles:true}))`);
        await sleep(150);
    }
}

async function recSeen(cdp: Cdp, name: string): Promise<boolean> {
    return cdp.evaluate<boolean>(`!!(window.__harnessRecords && window.__harnessRecords['${name}'] && window.__harnessRecords['${name}'].seen > 0)`);
}

// send a message through the client's own active scene room (identical to what the
// player's input produces); the server relocates the player and drives the client
const ROOM = `(window.reldens.activeRoomEvents && window.reldens.activeRoomEvents.room) || window.reldens.gameRoom`;
async function roomSend(cdp: Cdp, payload: string): Promise<void> {
    await cdp.evaluate(`(() => { try { const r = ${ROOM}; if(r){ r.send('*', ${payload}); return true; } } catch(e){} return false; })()`);
}

// authoritative server position of our OWN player: the scene room's player schema
// for this client's sessionId, whose nested .state holds x/y (matches driver.myState)
async function playerPos(cdp: Cdp): Promise<{x: number; y: number} | null> {
    return cdp.evaluate<{x: number; y: number} | null>(`(() => {
        try {
            const r = ${ROOM}; const p = r.state.players.get(r.sessionId); const st = p && p.state;
            return st ? {x: st.x, y: st.y} : null;
        } catch(e){ return null; }
    })()`);
}

// pointer-pathfind to a world target (server pathfinds around obstacles)
async function pathTo(cdp: Cdp, tx: number, ty: number, tries: number): Promise<{x: number; y: number} | null> {
    await roomSend(cdp, `{act:'mp', x:${tx}, y:${ty}, column:${Math.floor(tx / 32)}, row:${Math.floor(ty / 32)}}`);
    let last: {x: number; y: number} | null = null;
    for(let i = 0; i < tries; i++){
        await sleep(400);
        last = await playerPos(cdp);
        if(last && Math.hypot(last.x - tx, last.y - ty) < 24){ return last; }
    }
    return last;
}

const KEYS: Record<string, {vk: number; code: string; key: string}> = {
    up: {vk: 38, code: 'ArrowUp', key: 'ArrowUp'},
    down: {vk: 40, code: 'ArrowDown', key: 'ArrowDown'},
    left: {vk: 37, code: 'ArrowLeft', key: 'ArrowLeft'},
    right: {vk: 39, code: 'ArrowRight', key: 'ArrowRight'}
};

// hold a real arrow key down for a while so the client walks the player, releasing
// early if the scene changes; returns whether a scene change fired
async function holdKey(cdp: Cdp, dir: keyof typeof KEYS, ms: number): Promise<boolean> {
    const k = KEYS[dir];
    await cdp.key('keyDown', k.code, k.vk, k.key);
    const until = Date.now() + ms;
    while(Date.now() < until){
        await sleep(300);
        if(await recSeen(cdp, 'reldens.startChangedScene')){ await cdp.key('keyUp', k.code, k.vk, k.key); return true; }
    }
    await cdp.key('keyUp', k.code, k.vk, k.key);
    return false;
}

// step toward a target using real held arrow keys, reading the authoritative server
// position; crosses into doorways the way a human player walks through them
async function stepTowards(cdp: Cdp, tx: number, ty: number, timeoutMs: number, closeEnough: number): Promise<boolean> {
    const startedAt = Date.now();
    while(Date.now() - startedAt < timeoutMs){
        const s = await playerPos(cdp);
        if(!s){ await sleep(200); continue; }
        if(closeEnough > Math.hypot(tx - s.x, ty - s.y)){ return true; }
        if(await recSeen(cdp, 'reldens.startChangedScene')){ return true; }
        const dir = Math.abs(tx - s.x) > Math.abs(ty - s.y)
            ? (0 < tx - s.x ? 'right' : 'left') : (0 < ty - s.y ? 'down' : 'up');
        if(await holdKey(cdp, dir, 700)){ return true; }
    }
    return false;
}

// reach a town exit and cross it with real key presses. Town has three doors; walk
// to each landing (pointer path) then hold the arrow into the change point tile.
async function changeScene(cdp: Cdp): Promise<boolean> {
    console.info('[browser-driver] start pos', JSON.stringify(await playerPos(cdp)));
    const doors = [
        {name: 'forest', ax: 592, ay: 112, into: 'up' as const, hold: 4500},
        {name: 'house-1', ax: 400, ay: 400, into: 'up' as const, hold: 4000},
        {name: 'house-2', ax: 1264, ay: 720, into: 'up' as const, hold: 4000}
    ];
    for(const door of doors){
        await pathTo(cdp, door.ax, door.ay, 14);
        console.info('[browser-driver] at', door.name, JSON.stringify(await playerPos(cdp)));
        // hold the arrow straight into the door in bursts, re-approaching if pushed off
        for(let burst = 0; burst < 4; burst++){
            if(await holdKey(cdp, door.into, door.hold)){ console.info('[browser-driver] crossed', door.name); return true; }
            const p = await playerPos(cdp);
            if(p && Math.abs(p.x - door.ax) > 40){ await pathTo(cdp, door.ax, door.ay, 8); }
        }
    }
    return false;
}

// in the forest: attack the enemy bodies the client knows about and keep moving so
// the player trades damage and eventually dies, firing playerAttack and gameOver
async function fightAndDie(cdp: Cdp): Promise<void> {
    await sleep(3000);
    const dirs: Array<keyof typeof KEYS> = ['up', 'right', 'down', 'left'];
    for(let round = 0; round < 30; round++){
        // attack every enemy body the client currently knows about
        const enemies = await cdp.evaluate<string[]>(`(() => {
            try {
                const r = ${ROOM}; const st = r && r.state; const out = [];
                if(st && st.bodies && st.bodies.forEach){ st.bodies.forEach((v,k) => { if(out.length < 12){ out.push(String(k)); } }); }
                return out;
            } catch(e){ return []; }
        })()`);
        for(const id of enemies ?? []){
            await roomSend(cdp, `{act:'action', type:'attackShort', target:{id:'${id}', type:'obj'}}`);
            await sleep(200);
            if(await recSeen(cdp, 'reldens.gameOver')){ return lingerAfterDeath(cdp); }
        }
        // roam with real keys to aggro more enemies and keep trading damage
        await holdKey(cdp, dirs[round % 4], 900);
        if(await recSeen(cdp, 'reldens.gameOver')){ return lingerAfterDeath(cdp); }
    }
}

// after death the client shows the game-over box and auto-revives; stay connected
// and keep reporting so gameOverReload and any respawn scene events are captured
async function lingerAfterDeath(cdp: Cdp): Promise<void> {
    for(let i = 0; i < 12; i++){
        await cdp.evaluate(`window.__harnessReport && window.__harnessReport()`).catch(() => undefined);
        await sleep(1500);
    }
}

async function clickAll(cdp: Cdp, selector: string): Promise<number> {
    return cdp.evaluate<number>(`(() => {
        let n = 0;
        document.querySelectorAll(${JSON.stringify(selector)}).forEach((el) => {
            try { el.click(); n++; } catch(e){}
        });
        return n;
    })()`);
}

main().catch((error) => { console.error(error); process.exit(1); });
