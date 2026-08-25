/**
 * Login and registration error paths.
 *
 * Every event here only fires when a request genuinely fails, so the stage
 * commits each failure for real: bad passwords, duplicate emails, overlong
 * values the database rejects, malformed room selections. Sources cited per
 * trigger are from reldens lib/game/server/login-manager.js.
 */
import { Client } from 'colyseus.js';
import { RELDENS_CONSTANTS } from '@reldens-tutorials/schemas';
import { DriverSession, MessageRecorder, sleep } from '../driver';

const Game = RELDENS_CONSTANTS.GameConst;

export interface LoginErrorsContext {
    serverUrl: string;
    messages: MessageRecorder;
    run: string;
    /** an existing, currently OFFLINE account (created by the gameplay stage) */
    knownUser: {username: string; password: string; email: string; playerName: string};
}

/** joinOrCreate that is EXPECTED to be rejected by the server; returns the error. */
async function expectJoinRejected(serverUrl: string, options: Record<string, unknown>, label: string): Promise<void> {
    const client = new Client(serverUrl);
    try {
        const room = await client.joinOrCreate(String(Game['ROOM_GAME']), options);
        await room.leave(true);
        throw new Error(label+': the server accepted a login that must fail');
    } catch (error) {
        if(String(error).includes('must fail')){
            throw error;
        }
        // rejection is the success condition here
    }
}

export async function runLoginErrorStages(ctx: LoginErrorsContext): Promise<void> {
    const {serverUrl, messages, run, knownUser} = ctx;

    // reldens.invalidData: username missing entirely (login-manager.js:289)
    await expectJoinRejected(serverUrl, {password: 'whatever'}, 'invalidData');

    // reldens.loginInvalidParams: unknown user without isNewUser (login-manager.js:307)
    await expectJoinRejected(
        serverUrl, {username: 'nobody'+run, password: 'nope', isNewUser: false}, 'loginInvalidParams');

    // reldens.registrationInvalidParams: new username but an email that already exists (login-manager.js:313)
    await expectJoinRejected(
        serverUrl,
        {username: 'fresh'+run, password: 'fresh-pass-1', email: knownUser.email, isNewUser: true},
        'registrationInvalidParams'
    );

    // reldens.guestLoginInvalidParams: guest+isNewUser against an existing username (login-manager.js:295)
    await expectJoinRejected(
        serverUrl,
        {username: knownUser.username, password: 'anything', isGuest: true, isNewUser: true},
        'guestLoginInvalidParams'
    );

    // reldens.loginInvalidPassword: right user, wrong password (login-manager.js:380)
    await expectJoinRejected(
        serverUrl, {username: knownUser.username, password: 'wrong-password-1'}, 'loginInvalidPassword');

    // reldens.loginInvalidRole: guest flag on an offline non-guest account;
    // isValidGuestLogin (login-manager.js:405) requires the account to be active
    await expectJoinRejected(
        serverUrl,
        {username: knownUser.username, password: knownUser.password, isGuest: true, isNewUser: false},
        'loginInvalidRole'
    );

    // reldens.loginError: register the reserved faulty-login user (registration
    // skips loginSuccess), then log in; the harness plugin listener throws inside
    // login()'s try (see HarnessServerPlugin in server.ts) and reldens emits
    // loginError from its own catch (login-manager.js:395)
    const faulty = new Client(serverUrl);
    const faultyRoom = await faulty.joinOrCreate(String(Game['ROOM_GAME']), {
        username: 'faulty-login-'+run, password: 'faulty-pass-1',
        email: 'faulty'+run+'@example.com', isNewUser: true
    });
    await faultyRoom.leave(true);
    await sleep(500);
    await expectJoinRejected(
        serverUrl, {username: 'faulty-login-'+run, password: 'faulty-pass-1'}, 'loginError');

    // reldens.createNewUserError: DB insert failure through the real registration
    // path; usernames are varchar(255) so 300 chars throws in the driver (login-manager.js:521)
    await expectJoinRejected(
        serverUrl,
        {username: 'x'.repeat(300)+run, password: 'pass-1', email: 'long'+run+'@example.com', isNewUser: true},
        'createNewUserError'
    );

    // reldens.register: register() reached with a falsy isNewUser: unknown guest
    // usernames skip the isNewUser checks (login-manager.js:300-303 -> 501)
    await expectJoinRejected(
        serverUrl,
        {username: 'guest-reg'+run, password: 'pass-1', isGuest: true, isNewUser: false},
        'register'
    );

    // reldens.processForgotPassword: the real forgot-password branch (login-manager.js:282,679).
    // The mailer is enabled with an unusable key, the send fails, the event still fires.
    await expectJoinRejected(serverUrl, {forgot: 1, email: knownUser.email}, 'processForgotPassword');

    // --- player creation error paths (need an established game room) -----------
    const client = new Client(serverUrl);
    const gameRoom = await client.joinOrCreate(String(Game['ROOM_GAME']), {
        username: 'newplayer'+run,
        password: 'newplayer-pass-1',
        email: 'newplayer'+run+'@example.com',
        isNewUser: true
    });
    const inbox: any[] = [];
    gameRoom.onMessage('*', (...args: unknown[]) => {
        const message = 1 < args.length ? args[1] : args[0];
        inbox.push(message);
        messages.observe(message);
    });
    const waitResult = async (label: string): Promise<any> => {
        const startedAt = Date.now();
        while(Date.now() - startedAt < 8000){
            const found = inbox.find((m) => m?.act === Game['CREATE_PLAYER_RESULT']);
            if(found){
                inbox.length = 0;
                return found;
            }
            await sleep(100);
        }
        throw new Error('timed out waiting for CREATE_PLAYER_RESULT ('+label+')');
    };
    const createPlayer = (name: string, selectedScene = '') => gameRoom.send('*', {
        act: Game['CREATE_PLAYER'],
        formData: {'new-player-name': name, selectedScene}
    });

    // reldens.playerNewName: below client/players/name/minimumLength (login-manager.js:536)
    createPlayer('ab');
    let result = await waitResult('short name');
    if(!result.error){ throw new Error('short player name was accepted'); }

    // reldens.playerNewNameUnavailable: a name that already exists (login-manager.js:557)
    createPlayer(knownUser.playerName);
    result = await waitResult('duplicate name');
    if(!result.error){ throw new Error('duplicate player name was accepted'); }

    // reldens.createNewPlayerCriticalError: players.name is varchar(255), 300 chars
    // passes the availability check and throws on insert (login-manager.js:572)
    createPlayer('P'.repeat(300)+run);
    result = await waitResult('overlong name');
    if(!result.error){ throw new Error('overlong player name was accepted'); }

    await gameRoom.leave(true);

    // --- reldens.disconnectLoggedBefore: a second login for an account that is
    // actively playing invalidates the first session (rooms/server/scene.js:175) ---
    const first = new DriverSession({
        serverUrl, recorder: messages,
        username: knownUser.username, password: knownUser.password
    });
    await first.connect();
    await first.joinScene();
    await sleep(500);
    const second = new DriverSession({
        serverUrl, recorder: messages,
        username: knownUser.username, password: knownUser.password
    });
    await second.connect();
    await second.joinScene();
    await sleep(1000);
    await second.disconnect();
    await first.disconnect();
    await sleep(500);
}
