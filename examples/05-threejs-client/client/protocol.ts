/**
 * The Reldens wire protocol, as far as a renderer needs it.
 *
 * Reldens abbreviates every message key ('mp', 'rski.Bc', 'alu'), and the
 * abbreviations are spread across constants files per feature module. This is the
 * subset a client has to know, with the source of each one noted so you can go
 * read the emit site rather than trust this file.
 *
 * Verified against reldens 4.0.0-beta.39.8. The same table, expanded to cover
 * trade, teams, inventory and skills, is what drives the AgentArena headless
 * client - see ~/Dev/agentArena/services/mcp-gateway/src/reldens/protocol.js.
 */

export const ReldensProtocol = Object.freeze({
    /** The lobby room every client joins first. It authenticates and hands back the game config. */
    ROOM_GAME: 'room_game',
    /** The global/private chat feature room. Scene chat rides the scene room instead. */
    ROOM_CHAT: 'chat',

    // --- messages the client sends -----------------------------------------
    /** Ask the server to create a player for this account: {act, formData:{'new-player-name', selectedScene}}. */
    CREATE_PLAYER: 'cp',
    /** Start walking. Sent bare, without an `act`: room.send('*', {dir: 'up'}). */
    // (no key - see DIRECTIONS below)
    /** Stop walking: {act: 'stop'}. */
    STOP: 'stop',
    /** Click-to-move: {act: 'mp', x, y, column, row}. The server runs the pathfinder. */
    POINTER: 'mp',
    /** Ask for a stats refresh: {act: 'ps'}. */
    PLAYER_STATS: 'ps',
    /** Tell the room the client finished loading the scene: {act: 'cj'}. */
    CLIENT_JOINED: 'cj',
    /** Send a chat line: {act: 'c', m: 'text'}. A leading # is global, @ is private. */
    CHAT: 'c',
    /** Use a skill or attack: {act: 'action', type, target: {id, type}}. */
    ACTION: 'action',

    // --- messages the server sends -----------------------------------------
    /** Login succeeded. Carries gameConfig and, for a returning account, the player. */
    START_GAME: 's',
    /** Result of CREATE_PLAYER: {player} or {error, message}. */
    CREATE_PLAYER_RESULT: 'cps',
    /** Health changed, for a player or an enemy: {act:'alu', oT, oK, ...}. */
    LIFEBAR_UPDATE: 'alu',
    /** A hit landed. @reldens/skills server/sender.js sendSkillAttackApplyDamage(). */
    APPLY_DAMAGE: 'rski.Ad',
    /** A delayed skill is about to fire: carries skillKey and the delay in extraData.sd. */
    SKILL_BEFORE_CAST: 'rski.Bc',
    /** A combatant died. actions/constants.js BATTLE_ENDED. */
    BATTLE_ENDED: 'bend',

    // --- shared field names -------------------------------------------------
    /** Target/owner discriminators on combat messages. */
    TYPE_PLAYER: 'pj',
    TYPE_OBJECT: 'obj',
    OWNER_TYPE: 'oT',
    OWNER_KEY: 'oK',
    TARGET_TYPE: 'tT',
    TARGET_KEY: 'tK',
    SIDE_PLAYER: 'p',
    SIDE_OBJECT: 'o',
    SIDE_ENEMY: 'e'
});

export const Directions = Object.freeze({
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
});

export type Direction = typeof Directions[keyof typeof Directions];

/**
 * What the room's synchronised state looks like from the client side.
 *
 * `players` is a MapSchema keyed by session id, `bodies` a MapSchema of every
 * other moving body in the room. `sceneData` is the room's static data as a JSON
 * string - tilemap, layers, change points, object positions - sent once on join.
 *
 * These are structural types, not the real Colyseus schema classes. Colyseus
 * hands you live proxies; treat these as a description of the fields you read.
 */
export interface PlayerState {
    x: number;
    y: number;
    dir: Direction | string;
    scene: string;
    mov: boolean;
    [key: string]: unknown;
}

export interface PlayerSchema {
    sessionId: string;
    player_id: number;
    playerName: string;
    state: PlayerState;
    [key: string]: unknown;
}

export interface BodyState {
    x: number;
    y: number;
    dir: string;
    mov: boolean;
    [key: string]: unknown;
}

export interface RoomState {
    sceneData: string;
    players: Map<string, PlayerSchema> & {[key: string]: any};
    bodies: Map<string, BodyState> & {[key: string]: any};
    [key: string]: unknown;
}

/** Credentials for the lobby room. `isNewUser: true` registers instead of logging in. */
export interface LoginOptions {
    username: string;
    password: string;
    isNewUser?: boolean;
    email?: string;
    [key: string]: unknown;
}
