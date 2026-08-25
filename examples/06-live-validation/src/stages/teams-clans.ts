/**
 * Teams and clans, driven entirely over the wire.
 *
 * Wire acts from lib/teams/constants.js: team invite 'tm.inv', accept/reject
 * 'tm.acp' value '1'/'2', leave 'tm.lev'; clan create 'cln.new' (name under
 * 'cln.nam'), invite 'cln.inv', accept/reject 'cln.acp', leave 'cln.lev'.
 * Routing in lib/teams/server/team-message-actions.js and clan-message-actions.js.
 */
import { DriverSession, MessageRecorder, sleep } from '../driver';

export interface TeamsClansContext {
    serverUrl: string;
    messages: MessageRecorder;
    run: string;
}

export async function runTeamsClansStages(ctx: TeamsClansContext): Promise<void> {
    const {serverUrl, messages, run} = ctx;

    const alice = new DriverSession({
        serverUrl, recorder: messages,
        username: 'teamalice'+run, password: 'team-pass-1', email: 'teamalice'+run+'@example.com',
        isNewUser: true, playerName: 'TeamAlice'+run
    });
    await alice.connect();
    await alice.joinScene();
    const bob = new DriverSession({
        serverUrl, recorder: messages,
        username: 'teambob'+run, password: 'team-pass-1', email: 'teambob'+run+'@example.com',
        isNewUser: true, playerName: 'TeamBob'+run
    });
    await bob.connect();
    await bob.joinScene();
    await sleep(800);
    const alicePid = alice.playerId();
    const bobPid = bob.playerId();

    // --- teams ----------------------------------------------------------------
    // invite -> reject (reldens.tryTeamStart, reldens.teamJoinInviteRejected)
    alice.send({act: 'tm.inv', id: bobPid});
    await bob.waitFor(bob.sceneMessages, (m) => 'tm.inv' === m?.act, 8000, 'team invite (1)');
    bob.send({act: 'tm.acp', value: '2', id: alicePid});
    await sleep(800);

    // invite -> accept (beforeTeamCreate, beforeTeamJoin, beforeTeamUpdatePlayers, afterPlayerJoinedTeam)
    bob.sceneMessages.length = 0;
    alice.send({act: 'tm.inv', id: bobPid});
    await bob.waitFor(bob.sceneMessages, (m) => 'tm.inv' === m?.act, 8000, 'team invite (2)');
    bob.send({act: 'tm.acp', value: '1', id: alicePid});
    await bob.waitFor(bob.sceneMessages, (m) => 'tm.upd' === m?.act, 8000, 'team update');

    // leave: a two-player team dissolves entirely
    // (teamLeave, teamLeaveBeforeSendUpdate, afterTeamLeave, beforeTeamDisband)
    bob.send({act: 'tm.lev', id: alicePid});
    await sleep(1200);

    // --- clans ----------------------------------------------------------------
    // create (clan-create.js; name travels under 'cln.nam')
    alice.send({act: 'cln.new', 'cln.nam': 'HarnessClan'+run});
    const created = await alice.waitFor(
        alice.sceneMessages, (m) => 'cln.new' === m?.act && m?.id, 8000, 'clan created');

    // invite -> reject (tryClanStart, clanJoinInviteRejected)
    bob.sceneMessages.length = 0;
    alice.send({act: 'cln.inv', id: bobPid});
    await bob.waitFor(bob.sceneMessages, (m) => 'cln.inv' === m?.act, 8000, 'clan invite (1)');
    const clanId = created.id;
    bob.send({act: 'cln.acp', value: '2', id: clanId});
    await sleep(800);

    // invite -> accept (beforeClanJoin, beforeClanUpdatePlayers, afterPlayerJoinedClan)
    bob.sceneMessages.length = 0;
    alice.send({act: 'cln.inv', id: bobPid});
    await bob.waitFor(bob.sceneMessages, (m) => 'cln.inv' === m?.act, 8000, 'clan invite (2)');
    bob.send({act: 'cln.acp', value: '1', id: clanId});
    await bob.waitFor(bob.sceneMessages, (m) => 'cln.upd' === m?.act, 8000, 'clan update');

    // disconnect while in the clan (clanDisconnectBeforeSendUpdate, clanDisconnectAfterSendUpdate)
    await bob.disconnect();
    await sleep(1500);

    // reconnect: membership is restored from storage (beforeEnrichPlayerWithClanUpdate)
    const bobBack = new DriverSession({
        serverUrl, recorder: messages,
        username: 'teambob'+run, password: 'team-pass-1'
    });
    await bobBack.connect();
    await bobBack.joinScene();
    await sleep(1000);

    // leave as a non-owner member (clanLeave, clanLeaveBeforeSendUpdate, clanLeaveAfterSendUpdate)
    bobBack.send({act: 'cln.lev', id: clanId});
    await sleep(1200);

    // owner leaves last: the clan disbands (beforeClanDisband)
    alice.send({act: 'cln.lev', id: clanId});
    await sleep(1200);

    await bobBack.disconnect();
    await alice.disconnect();
    await sleep(500);
}
