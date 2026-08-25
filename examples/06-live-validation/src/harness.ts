/**
 * The E2E harness.
 *
 * Boots the validated server IN THIS PROCESS (so the event recorder observes the
 * real emits), then drives it from the outside exactly as clients would: headless
 * Colyseus sessions playing the game, HTTP requests against the admin panel. Every
 * event payload and every server message is validated live; the run fails if
 * anything a schema covers arrives in a shape the schema rejects.
 *
 * Nothing is ever emitted artificially. Where an event only fires on an error
 * path, the harness commits the error for real (a bad login, an invalid room, a
 * misconfigured initial state edited through the real admin CRUD).
 *
 * Phases (HARNESS_PHASE): main (default) runs every gameplay/admin stage;
 * prepare-broken-initial-state breaks players/initialState/room_id via the admin;
 * broken-initial-state boots against it, registers a player for real
 * (reldens.playerSceneUnavailable), then restores the config via the admin.
 *
 * Reports accumulate across phases in harness-report.json unless HARNESS_FRESH=1.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { RELDENS_EVENT_PAYLOAD_INFO } from '@reldens-tutorials/schemas';
import { startValidatedServer } from './server';
import { DriverSession, MessageRecorder, sleep } from './driver';
import { runAdminStage, saveConfigRow, setInitialStateRoomId } from './stages/admin';
import { runGameplayStages, type GameplayResult } from './stages/gameplay';
import { runLoginErrorStages } from './stages/login-errors';
import { runGuestStages } from './stages/guest';
import { runTeamsClansStages } from './stages/teams-clans';
import { runCombatStages } from './stages/combat';

const SERVER_URL = 'ws://localhost:8086';
const HTTP_URL = 'http://localhost:8086';
const REPORT_PATH = __dirname+'/../harness-report.json';
const PHASE = process.env.HARNESS_PHASE || 'main';

/** Classify an event by where its emit sites live: server, browser client, or standalone CMS. */
function zoneOf(name: string): 'server' | 'client' | 'cms' {
    const sites = RELDENS_EVENT_PAYLOAD_INFO[name]?.sites ?? [];
    if(sites.some((site) => !site.startsWith('reldens:'))){
        return 'cms';
    }
    return sites.every((site) => site.includes('/client/')) ? 'client' : 'server';
}

function zoneBreakdown(merged: Record<string, {seen: number; failed: number}>): Record<string, {seen: number; total: number; failed: number}> {
    const zones = {
        server: {seen: 0, total: 0, failed: 0},
        client: {seen: 0, total: 0, failed: 0},
        cms: {seen: 0, total: 0, failed: 0}
    };
    for(const [name, record] of Object.entries(merged)){
        const zone = zones[zoneOf(name)];
        zone.total++;
        if(0 < record.seen){ zone.seen++; }
        if(0 < record.failed){ zone.failed++; }
    }
    return zones;
}

interface StoredRecord {seen: number; passed: number; failed: number; failures: unknown[]}

function mergeEventRecords(
    previous: Record<string, StoredRecord>,
    current: Record<string, {seen: number; passed?: number; validated?: number; failed?: number; failures: unknown[]}>
): Record<string, StoredRecord> {
    const merged: Record<string, StoredRecord> = {...previous};
    for(const [name, record] of Object.entries(current)){
        const passed = record.passed ?? record.validated ?? 0;
        const failed = record.failed ?? record.failures.length;
        const existing = merged[name] ?? {seen: 0, passed: 0, failed: 0, failures: []};
        merged[name] = {
            seen: existing.seen + record.seen,
            passed: existing.passed + passed,
            failed: existing.failed + failed,
            failures: [...existing.failures, ...record.failures].slice(0, 5)
        };
    }
    return merged;
}

async function main(): Promise<void> {
    console.info('[harness] phase:', PHASE, '- booting validated server...');
    const running = await startValidatedServer();
    const messages = new MessageRecorder();

    const failures: string[] = [];
    const stage = async (name: string, run: () => Promise<unknown>): Promise<unknown> => {
        console.info('[harness] stage:', name);
        try {
            return await run();
        } catch (error) {
            console.error('[harness] stage FAILED:', name, error);
            failures.push(name+': '+String(error));
            return null;
        }
    };

    if('browser' === PHASE){
        // keep the real server up while a browser plays the client; the injected
        // recorder POSTs client-zone events to /harness/browser-report as they fire.
        // The run ends when the harness-stop file appears or the timeout elapses.
        const stopFile = __dirname+'/../.harness-browser-stop';
        console.info('[harness] browser phase: server up, waiting for browser play...');
        const until = Date.now() + 600000;
        while(Date.now() < until && !existsSync(stopFile)){
            await sleep(1000);
        }
        if(existsSync(stopFile)){
            try { require('node:fs').unlinkSync(stopFile); } catch { /* fine */ }
        }
    } else if('prepare-broken-initial-state' === PHASE){
        // boot healthy, then break the config through the admin so the NEXT boot
        // (phase broken-initial-state) reads the broken value
        await stage('break-initial-state', () => setInitialStateRoomId(HTTP_URL, 9999));
    } else if('broken-initial-state' === PHASE){
        // the config row was broken by the main phase; committing a registration now
        // hits the real playerSceneUnavailable path, then the admin restores the row
        await stage('broken-initial-state', async () => {
            const run = String(Date.now()).slice(-6);
            const victim = new DriverSession({
                serverUrl: SERVER_URL, recorder: messages,
                username: 'broken'+run, password: 'broken-pass-1', email: 'broken'+run+'@example.com',
                isNewUser: true, playerName: 'Broken'+run
            });
            try {
                await victim.connect();
                throw new Error('player creation succeeded against a broken initial state');
            } catch (error) {
                if(String(error).includes('succeeded against')){
                    throw error;
                }
            }
            await victim.disconnect();
        });
        await stage('restore-initial-state', () => setInitialStateRoomId(HTTP_URL, 4));
    } else {
        const gameplay = await stage(
            'gameplay', () => runGameplayStages({serverUrl: SERVER_URL, messages, running})) as GameplayResult | null;
        if(gameplay){
            await stage('login-errors', () => runLoginErrorStages({
                serverUrl: SERVER_URL, messages, run: gameplay.run, knownUser: gameplay.knownUser
            }));
            await stage('guest', () => runGuestStages({
                serverUrl: SERVER_URL, messages, run: gameplay.run
            }));
            await stage('teams-clans', () => runTeamsClansStages({
                serverUrl: SERVER_URL, messages, run: gameplay.run
            }));
            await stage('combat', () => runCombatStages({
                serverUrl: SERVER_URL, messages, run: gameplay.run,
                seenCount: (name) => running.recorder.records.get(name)?.seen ?? 0
            }));
            await stage('admin', () => runAdminStage({
                httpUrl: HTTP_URL,
                localeUserId: gameplay.knownUser.userId || undefined,
                throwawayUserId: gameplay.secondUserId || undefined
            }));
            // the admin stage just gave the account a users_locale row; a fresh login
            // now runs the locale enricher for real (reldens.afterEnrichPlayerWithLocale)
            await stage('locale-enriched-login', async () => {
                const localized = new DriverSession({
                    serverUrl: SERVER_URL, recorder: messages,
                    username: gameplay.knownUser.username, password: gameplay.knownUser.password
                });
                await localized.connect();
                await sleep(500);
                await localized.disconnect();
            });
            // player death drops are a 20% roll; raise it to 100 through the admin so
            // the NEXT boot's combat stage gets a guaranteed drop broadcast
            await stage('tune-drop-percent', () => saveConfigRow(HTTP_URL, 329, 'players/drop/percent', '100'));
        }
    }

    await sleep(2000);
    const eventReport = running.recorder.report();
    const messageReport = messages.report();

    // merge with previous phases unless a fresh accumulation was requested
    let previousEvents: Record<string, StoredRecord> = {};
    let previousMessages: Record<string, StoredRecord> = {};
    let previousStageFailures: string[] = [];
    if('1' !== process.env.HARNESS_FRESH && existsSync(REPORT_PATH)){
        try {
            const previous = JSON.parse(readFileSync(REPORT_PATH, 'utf8'));
            previousEvents = previous.mergedEvents ?? {};
            previousMessages = previous.mergedMessages ?? {};
            previousStageFailures = previous.summary?.stageFailures ?? [];
        } catch { /* corrupted previous report: start clean */ }
    }
    // the browser recorder holds client-zone events reported by the real browser
    const browserReport = running.browserRecorder.report();
    const withBrowser = mergeEventRecords(previousEvents, eventReport.events as never);
    const mergedEvents = mergeEventRecords(withBrowser, browserReport.events as never);
    const mergedMessages = mergeEventRecords(previousMessages, messageReport as never);

    const tracked = Object.keys(eventReport.events).length;
    const seen = Object.values(mergedEvents).filter((record) => 0 < record.seen).length;
    const failedEvents = Object.entries(mergedEvents).filter(([, record]) => 0 < record.failed);
    const messageFailures = Object.entries(mergedMessages).filter(([, record]) => 0 < record.failed);
    const unseenEvents = Object.entries(mergedEvents)
        .filter(([, record]) => 0 === record.seen)
        .map(([name]) => name)
        .sort();
    const stageFailures = [...previousStageFailures, ...failures.map((failure) => PHASE+'/'+failure)];

    const summary = {
        finishedAt: new Date().toISOString(),
        phase: PHASE,
        stageFailures,
        events: {
            tracked,
            seen,
            passed: Object.values(mergedEvents).reduce((sum, record) => sum + record.passed, 0),
            failed: Object.values(mergedEvents).reduce((sum, record) => sum + record.failed, 0)
        },
        eventFailures: Object.fromEntries(failedEvents.map(([name, record]) => [name, record.failures])),
        messages: {
            actsSeen: Object.keys(mergedMessages).length,
            validated: Object.values(mergedMessages).reduce((sum, record) => sum + record.passed, 0),
            failures: Object.fromEntries(messageFailures.map(([name, record]) => [name, record.failures]))
        },
        zones: zoneBreakdown(mergedEvents),
        unseenEvents,
        browserReports: running.browserReports.length
    };

    writeFileSync(REPORT_PATH, JSON.stringify({
        summary,
        mergedEvents,
        mergedMessages,
        lastPhase: {events: eventReport, messages: messageReport},
        browserReports: running.browserReports
    }, null, 2));

    const z = summary.zones;
    console.info('[harness] events seen:', seen, '/', tracked, '| failed events:', failedEvents.length);
    console.info('[harness] by zone  server:', z.server.seen+'/'+z.server.total,
        '| client:', z.client.seen+'/'+z.client.total, '| cms:', z.cms.seen+'/'+z.cms.total);
    console.info('[harness] message acts seen:', summary.messages.actsSeen, '| failures:', messageFailures.length);
    console.info('[harness] unseen events:', unseenEvents.length);
    if(failures.length || failedEvents.length || messageFailures.length){
        console.error('[harness] FAILURES', JSON.stringify({
            stageFailures: failures,
            eventFailures: summary.eventFailures
        }).slice(0, 3000));
        process.exit(1);
    }
    process.exit(0);
}

main().catch((error) => { console.error(error); process.exit(1); });
