/**
 * The headless gameplay driver.
 *
 * A real Reldens client for Node: colyseus.js against the live server, walking the
 * documented join sequence and then performing real gameplay actions. Every inbound
 * server message is run through the message schemas as it arrives; every action is
 * a message the stock Phaser client could have sent. Nothing here reaches into the
 * server process.
 */
import { Client, type Room } from 'colyseus.js';
import { AnyServerMessageSchema, RELDENS_CONSTANTS, serverMessageSchemaFor } from '@reldens-tutorials/schemas';

const Game = RELDENS_CONSTANTS.GameConst;
const Objects = RELDENS_CONSTANTS.ObjectsConst;
const Actions = RELDENS_CONSTANTS.ActionsConst;

export interface MessageRecord {
    seen: number;
    validated: number;
    failures: Array<{message: string; issues?: unknown; sample?: unknown}>;
}

/** Shared across all driver sessions: which server message acts arrived, validated. */
export class MessageRecorder {

    readonly records = new Map<string, MessageRecord>();

    observe(message: unknown): void {
        if(!message || 'object' !== typeof message){
            return;
        }
        const act = String((message as {act?: unknown}).act ?? '');
        if('' === act){
            return;
        }
        let record = this.records.get(act);
        if(!record){
            record = {seen: 0, validated: 0, failures: []};
            this.records.set(act, record);
        }
        record.seen++;
        const schema = serverMessageSchemaFor(act);
        const result = (schema ?? AnyServerMessageSchema).safeParse(message);
        if(result.success){
            record.validated++;
        } else if(3 > record.failures.length){
            record.failures.push({
                message: (schema ? 'act schema' : 'AnyServerMessageSchema')+' failed',
                issues: result.error.issues,
                sample: JSON.parse(JSON.stringify(message))
            });
        }
    }

    report(): Record<string, MessageRecord> {
        return Object.fromEntries([...this.records.entries()].sort(([a], [b]) => a.localeCompare(b)));
    }

}

export interface SessionOptions {
    serverUrl: string;
    username: string;
    password: string;
    email?: string;
    isNewUser?: boolean;
    isGuest?: boolean;
    playerName?: string;
    /** Room name for the CREATE_PLAYER form (rooms/selection/allowOnRegistration). */
    selectedScene?: string;
    recorder: MessageRecorder;
}

function extractMessage(args: unknown[]): unknown {
    return 1 < args.length ? args[1] : args[0];
}

export class DriverSession {

    client!: Client;
    gameRoom!: Room;
    sceneRoom!: Room;
    chatRoom: Room | null = null;
    player: any = null;
    sceneName = '';
    sceneData: any = {};
    readonly gameMessages: any[] = [];
    readonly sceneMessages: any[] = [];
    readonly chatMessages: any[] = [];

    constructor(readonly options: SessionOptions) {}

    private track(list: any[], args: unknown[]): void {
        const message = extractMessage(args);
        list.push(message);
        this.options.recorder.observe(message);
    }

    async connect(): Promise<void> {
        this.client = new Client(this.options.serverUrl);
        const login: Record<string, unknown> = {
            username: this.options.username,
            password: this.options.password,
            email: this.options.email,
            isNewUser: this.options.isNewUser ?? false
        };
        if(this.options.isGuest){
            login.isGuest = true;
        }
        this.gameRoom = await this.client.joinOrCreate(String(Game['ROOM_GAME']), login);
        this.gameRoom.onMessage('*', (...args: unknown[]) => this.track(this.gameMessages, args));
        const start = await this.waitFor(this.gameMessages, (m) => m?.act === Game['START_GAME'], 10000, 'START_GAME');
        if(this.options.isGuest){
            // the server rewrote the guest credentials during onAuth and returns them in
            // START_GAME (lib/rooms/server/game.js:66); scene joins need the real ones.
            this.options.username = start.userName ?? this.options.username;
            this.options.password = start.guestPassword ?? this.options.password;
        }
        this.player = start.player ?? null;
        if(!this.player && this.options.playerName){
            this.gameRoom.send('*', {
                act: Game['CREATE_PLAYER'],
                formData: {'new-player-name': this.options.playerName, selectedScene: this.options.selectedScene ?? ''}
            });
            const result = await this.waitFor(
                this.gameMessages, (m) => m?.act === Game['CREATE_PLAYER_RESULT'], 10000, 'CREATE_PLAYER_RESULT');
            if(result.error || !result.player){
                throw new Error('player creation failed: '+JSON.stringify(result).slice(0, 200));
            }
            this.player = result.player;
        }
        if(!this.player){
            this.player = start.players?.[0] ?? null;
        }
        if(!this.player){
            throw new Error('no player after connect');
        }
    }

    async joinScene(sceneName?: string): Promise<void> {
        this.sceneName = sceneName ?? this.player.state.scene;
        this.sceneRoom = await this.client.joinOrCreate(this.sceneName, {
            username: this.options.username,
            password: this.options.password,
            selectedPlayer: this.player.id,
            selectedScene: this.sceneName
        });
        this.sceneRoom.onMessage('*', (...args: unknown[]) => this.track(this.sceneMessages, args));
        this.sceneRoom.send('*', {act: Game['CLIENT_JOINED']});
        this.sceneRoom.send('*', {act: Game['PLAYER_STATS']});
        await this.waitForState();
        this.sceneData = JSON.parse(this.sceneRoom.state.sceneData || '{}');
    }

    async joinChat(): Promise<void> {
        this.chatRoom = await this.client.joinOrCreate('chat', {
            username: this.options.username,
            password: this.options.password,
            selectedPlayer: this.player.id
        });
        this.chatRoom.onMessage('*', (...args: unknown[]) => this.track(this.chatMessages, args));
    }

    async waitForState(timeoutMs = 8000): Promise<void> {
        const startedAt = Date.now();
        while(Date.now() - startedAt < timeoutMs){
            if(this.sceneRoom.state?.sceneData && this.sceneRoom.state.players?.size){
                return;
            }
            await sleep(150);
        }
        throw new Error('scene state never arrived');
    }

    async waitFor(list: any[], matches: (m: any) => boolean, timeoutMs: number, label: string): Promise<any> {
        const startedAt = Date.now();
        while(Date.now() - startedAt < timeoutMs){
            const found = list.find(matches);
            if(found){
                return found;
            }
            await sleep(100);
        }
        throw new Error('timed out waiting for '+label);
    }

    myState(): any {
        return this.sceneRoom.state.players?.get(this.sceneRoom.sessionId)?.state;
    }

    /** The player_id the server synchronises on the scene state (a string, lib/users/server/player.js:145). */
    playerId(): string {
        return this.sceneRoom.state.players?.get(this.sceneRoom.sessionId)?.player_id
            ?? String(this.player?.id ?? '');
    }

    /**
     * Follow a server-driven scene change: wait for the RECONNECT push
     * (lib/rooms/server/scene.js:655) and join the room the server picked.
     */
    async followSceneChange(timeoutMs = 15000): Promise<string> {
        const reconnect = await this.waitFor(
            this.sceneMessages, (m) => m?.act === Game['RECONNECT'], timeoutMs, 'RECONNECT');
        const nextScene = reconnect.player?.state?.scene;
        if(!nextScene){
            throw new Error('RECONNECT push without player scene');
        }
        try { await this.sceneRoom.leave(true); } catch { /* server already dropped us */ }
        this.sceneMessages.length = 0;
        await this.joinScene(nextScene);
        return nextScene;
    }

    /** Latest positions of every non-player body in the room (enemies, NPCs), keyed by objectIndex. */
    bodies(): Array<{key: string; x: number; y: number}> {
        const found: Array<{key: string; x: number; y: number}> = [];
        this.sceneRoom.state.bodies?.forEach((body: any, key: string) => {
            found.push({key, x: body.x, y: body.y});
        });
        return found;
    }

    move(direction: string): void {
        this.sceneRoom.send('*', {dir: direction});
    }

    stop(): void {
        this.sceneRoom.send('*', {act: Game['STOP']});
    }

    pointer(x: number, y: number): void {
        this.sceneRoom.send('*', {act: Game['POINTER'], x, y, column: Math.floor(x / 32), row: Math.floor(y / 32)});
    }

    chat(text: string): void {
        this.sceneRoom.send('*', {act: 'c', m: text});
    }

    globalChat(text: string): void {
        this.chatRoom?.send('*', {act: 'c', m: '#'+text});
    }

    privateChat(toPlayerName: string, text: string): void {
        this.chatRoom?.send('*', {act: 'c', m: '@'+toPlayerName+' '+text});
    }

    /** NPC interactions validate `Number(this.id) === Number(data.id)`: the DB object id, not the objectIndex. */
    interact(objectId: string | number): void {
        this.sceneRoom.send('*', {act: Objects['OBJECT_INTERACTION'], id: objectId});
    }

    /** Dialog option buttons use GameConst.BUTTON_OPTION ('btn-opt'), lib/objects/server/object/type/npc-object.js:120. */
    dialogOption(objectId: string | number, value: number | string): void {
        this.sceneRoom.send('*', {act: Game['BUTTON_OPTION'], id: objectId, value});
    }

    action(type: string, targetId: string | number, targetType: string): void {
        this.sceneRoom.send('*', {act: Actions['ACTION'], type, target: {id: targetId, type: targetType}});
    }

    send(message: Record<string, unknown>): void {
        this.sceneRoom.send('*', message);
    }

    /** Interactive objects in the current scene, keyed by objectIndex. */
    interactiveObjects(): Array<{index: string; id: number; type: string; targetName?: string; x: number; y: number}> {
        const found: Array<{index: string; id: number; type: string; targetName?: string; x: number; y: number}> = [];
        for(const [index, data] of Object.entries<any>(this.sceneData.objectsAnimationsData ?? {})){
            found.push({index, id: data.id, type: data.type, targetName: data.targetName, x: data.x, y: data.y});
        }
        return found;
    }

    /** Step-walk with plain direction messages; blunter than pointer pathfinding but works into doorways. */
    async stepTowards(x: number, y: number, timeoutMs = 20000, closeEnough = 20): Promise<boolean> {
        const startedAt = Date.now();
        while(Date.now() - startedAt < timeoutMs){
            const state = this.myState();
            if(!state){
                await sleep(250);
                continue;
            }
            const dx = x - state.x;
            const dy = y - state.y;
            if(closeEnough > Math.hypot(dx, dy)){
                this.stop();
                return true;
            }
            const direction = Math.abs(dx) > Math.abs(dy)
                ? (0 < dx ? 'right' : 'left')
                : (0 < dy ? 'down' : 'up');
            this.move(direction);
            await sleep(280);
            this.stop();
            await sleep(120);
        }
        this.stop();
        return false;
    }

    async walkTo(x: number, y: number, timeoutMs = 15000): Promise<boolean> {
        this.pointer(x, y);
        const startedAt = Date.now();
        while(Date.now() - startedAt < timeoutMs){
            const state = this.myState();
            if(state && 24 > Math.hypot(state.x - x, state.y - y)){
                return true;
            }
            await sleep(250);
        }
        return false;
    }

    async disconnect(consented = true): Promise<void> {
        try { await this.chatRoom?.leave(consented); } catch { /* fine */ }
        try { await this.sceneRoom?.leave(consented); } catch { /* fine */ }
        try { await this.gameRoom?.leave(consented); } catch { /* fine */ }
    }

}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
