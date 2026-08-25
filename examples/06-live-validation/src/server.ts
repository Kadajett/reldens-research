/**
 * The live server under validation.
 *
 * A REAL Reldens server: real database, real Colyseus rooms, real feature
 * plugins. The only additions are (1) the event recorder attached to the shared
 * events manager before boot, so every server-side emit is observed and
 * zod.parsed as it happens, and (2) a /harness/* endpoint pair so the browser
 * client can report its own recorder's results back.
 *
 * The config itself goes through ServerManagerConfigSchema and process.env
 * through ReldensEnvSchema - the harness starts by validating the inputs the
 * platform never checks.
 */
import { ServerManager } from 'reldens/server';
import {
    RELDENS_EVENT_PAYLOAD_INFO,
    ReldensEnvSchema,
    ServerManagerConfigSchema
} from '@reldens-tutorials/schemas';
import { EventRecorder, type RecorderReport } from './validation/recorder';
import { resolveReldensModulePath } from './reldens-module-path';

export interface RunningServer {
    appServer: InstanceType<typeof ServerManager>;
    recorder: EventRecorder;
    browserRecorder: EventRecorder;
    browserReports: RecorderReport[];
    browserMessageReports: Array<Record<string, unknown>>;
}

/** The client-zone event names the browser recorder is expected to cover. */
export function clientSideEvents(): string[] {
    return Object.entries(RELDENS_EVENT_PAYLOAD_INFO)
        .filter(([, info]) => info.sites.every((site) => site.includes('/client/')))
        .map(([name]) => name);
}

/** Events whose emit sites live in server-side code (lib server folders, root managers, cms). */
export function serverSideEvents(): string[] {
    return Object.entries(RELDENS_EVENT_PAYLOAD_INFO)
        .filter(([, info]) => info.sites.some((site) =>
            !site.includes('/client/') || site.includes('@reldens/cms')))
        .map(([name]) => name);
}

export async function startValidatedServer(): Promise<RunningServer> {
    ReldensEnvSchema.parse(process.env);

    // the installed theme's real custom classes (Healer, WeaponsMaster, QuestNpc)
    // wired through the documented customPlugin hook
    const { ServerPlugin } = require(__dirname+'/../theme/plugins/server-plugin.js');

    /**
     * Fault injection through the same plugin API a real project uses: a listener
     * that fails during loginSuccess for one reserved username prefix. emitSync
     * applies listeners without a catch (@reldens/utils events-manager.js:322), so
     * the throw lands in login()'s own catch and reldens itself emits
     * reldens.loginError with its real payload. Nothing is emitted artificially.
     */
    class HarnessServerPlugin extends ServerPlugin {
        setup(props: {events: {on: (name: string, callback: (...args: unknown[]) => void) => unknown}}) {
            super.setup(props);
            props.events.on('reldens.loginSuccess', (...args: unknown[]) => {
                const user = args[1] as {username?: string} | undefined;
                if(String(user?.username ?? '').startsWith('faulty-login-')){
                    throw new Error('harness: simulated third-party login integration failure');
                }
            });
        }
    }

    const config = ServerManagerConfigSchema.parse({
        projectRoot: __dirname+'/..',
        projectThemeName: 'default',
        reldensModulePath: resolveReldensModulePath(),
        jsSourceMaps: false,
        cssSourceMaps: false,
        customPlugin: HarnessServerPlugin
    });

    // Track EVERY extracted event on the server manager. Client-only events simply
    // never fire here; the browser recorder covers those and the harness merges.
    const recorder = new EventRecorder('server', Object.keys(RELDENS_EVENT_PAYLOAD_INFO));
    // The browser recorder validates the client-zone events a real browser reports,
    // running the SAME payloadSchemaFor().parse against the keys/arity it observed.
    const browserRecorder = new EventRecorder('browser', clientSideEvents());
    const appServer = new ServerManager(config);
    recorder.attach(appServer.events);

    const browserReports: RecorderReport[] = [];
    const browserMessageReports: Array<Record<string, unknown>> = [];

    await appServer.createServers();

    // The express app exists after createServers; register the harness endpoints the
    // browser-side recorder posts to.
    // reldens registers bodyParser.json() on the app, so the body is already parsed
    // and the request stream is consumed: read req.body, not the raw stream.
    const handleReport = (parsed: any, res: any): void => {
        try {
            if('client-events' === parsed.kind){
                for(const [name, report] of Object.entries<any>(parsed.records ?? {})){
                    for(let i = 0; i < (report.seen ?? 0); i++){
                        browserRecorder.observeFromBrowser(name, report);
                    }
                }
            } else if('events' === parsed.kind){
                browserReports.push(parsed.report);
            } else {
                browserMessageReports.push(parsed);
            }
            res.json({ok: true});
        } catch (error) {
            res.status(400).json({ok: false, error: String(error)});
        }
    };
    appServer.app.post('/harness/browser-report', (req: any, res: any) => {
        if(req.body && 'object' === typeof req.body && Object.keys(req.body).length){
            handleReport(req.body, res);
            return;
        }
        let body = '';
        req.on('data', (chunk: Buffer) => body += chunk);
        req.on('end', () => handleReport(JSON.parse(body || '{}'), res));
    });
    appServer.app.get('/harness/ping', (_req: any, res: any) => res.json({ok: true}));

    await appServer.start();
    return {appServer, recorder, browserRecorder, browserReports, browserMessageReports};
}
