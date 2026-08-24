/**
 * Connecting to a Reldens world without the Reldens client.
 *
 * The sequence is fixed and every client goes through it, Phaser or not:
 *
 *   1. join `room_game` with {username, password, isNewUser}
 *   2. wait for a START_GAME ('s') message - it carries the game config, and the
 *      player too if this account already has one
 *   3. if there is no player, send CREATE_PLAYER and wait for CREATE_PLAYER_RESULT
 *   4. read the scene name off `player.state.scene`. The server decides where the
 *      body is; a client cannot ask to be placed somewhere else, scenes change
 *      only by walking onto a change point
 *   5. join that scene room with {…login, selectedPlayer: player.id, selectedScene}
 *   6. optionally join `chat`
 *
 * Two things go wrong if you get step 5 wrong. Messages the room sends from inside
 * its own onJoin (the full inventory, the full skill list) are delivered in one
 * burst right after the join resolves - attach those listeners on the line after
 * the await, not later, or you miss the only push there will ever be. And the
 * lobby room must stay joined: it is what keeps the session alive.
 */
import { Client, type Room } from 'colyseus.js';
import {
    LoginOptionsSchema,
    SceneJoinOptionsSchema,
    StartGameMessageSchema,
    CreatePlayerResultMessageSchema
} from '@reldens-tutorials/schemas';
import { ReldensProtocol, type LoginOptions, type RoomState } from './protocol';

export interface ReldensSession {
    client: Client;
    /** The lobby room. Keep it joined for as long as you are playing. */
    gameRoom: Room;
    /** The scene room. This is the one carrying state and movement. */
    sceneRoom: Room<RoomState>;
    player: any;
    sceneName: string;
    initialData: any;
    disconnect(): Promise<void>;
}

function waitForMessage(room: Room, matches: (message: any) => boolean, timeoutMs: number, label: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Timed out waiting for '+label));
        }, timeoutMs);
        room.onMessage('*', (_type: string | number, message: any) => {
            if(!matches(message)){
                return;
            }
            clearTimeout(timer);
            resolve(message);
        });
    });
}

export async function openSession(
    serverUrl: string,
    login: LoginOptions,
    playerName: string,
    requestedScene?: string
): Promise<ReldensSession> {
    const client = new Client(serverUrl);

    // The schemas package validates the wire shapes against the values extracted
    // from the installed reldens package, so a drifted key fails here with a zod
    // error instead of a silent server-side ignore.
    const gameRoom = await client.joinOrCreate(ReldensProtocol.ROOM_GAME, LoginOptionsSchema.parse(login));
    const initialData = StartGameMessageSchema.parse(await waitForMessage(
        gameRoom,
        (message) => ReldensProtocol.START_GAME === message?.act,
        10_000,
        'start-game data'
    )) as Record<string, any>;

    let player = initialData.player;
    if(!player){
        const pending = waitForMessage(
            gameRoom,
            (message) => ReldensProtocol.CREATE_PLAYER_RESULT === message?.act,
            10_000,
            'player-creation result'
        );
        gameRoom.send('*', {
            act: ReldensProtocol.CREATE_PLAYER,
            formData: {'new-player-name': playerName, selectedScene: requestedScene}
        });
        const result = CreatePlayerResultMessageSchema.parse(await pending) as Record<string, any>;
        if(result.error || !result.player){
            throw new Error(result.message ?? 'Reldens refused to create a player.');
        }
        player = result.player;
    }

    const sceneName = player?.state?.scene ?? requestedScene;
    if(!sceneName){
        throw new Error('No scene was selected for this player.');
    }

    const sceneRoom = await client.joinOrCreate<RoomState>(sceneName, SceneJoinOptionsSchema.parse({
        ...login,
        selectedPlayer: player.id,
        selectedScene: sceneName
    }));

    // TODO: attach anything that listens for the onJoin burst RIGHT HERE, before
    //  any further await. Inventory and class-path pushes arrive within a heartbeat.

    // Tell the room the client has finished loading, then ask for a stats snapshot.
    sceneRoom.send('*', {act: ReldensProtocol.CLIENT_JOINED});
    sceneRoom.send('*', {act: ReldensProtocol.PLAYER_STATS});

    return {
        client,
        gameRoom,
        sceneRoom,
        player,
        sceneName,
        initialData,
        async disconnect(){
            await sceneRoom.leave(true);
            await gameRoom.leave(true);
        }
    };
}
