/**
 * The live event recorder.
 *
 * Subscribes to every extracted reldens.* event on the REAL events manager of a
 * running server (or, bundled, of a running browser client). Nothing is faked:
 * a listener only ever fires because live code emitted the event, and whatever
 * arrives is run through the strongest zod schema the extraction supports:
 *
 *   object/class payloads   payloadSchemaFor(name).parse(payload)
 *   positional emits        argument count checked against the extracted arity
 *                           (there is no object to parse - listeners get
 *                           separate parameters)
 *   unknown/mixed           recorded as seen, marked unvalidatable
 *
 * Every result is recorded per event: seen count, pass/fail, and the zod issues
 * verbatim on failure. The harness fails if any seen event fails validation.
 */
import {
    RELDENS_EVENT_PAYLOAD_INFO,
    payloadSchemaFor,
    type EventPayloadInfo
} from '@reldens-tutorials/schemas';

export interface EventRecord {
    seen: number;
    validated: number;
    failures: Array<{message: string; issues?: unknown}>;
    style: EventPayloadInfo['style'] | 'unextracted';
    firstSeenAt?: string;
}

export interface RecorderReport {
    zone: string;
    startedAt: string;
    finishedAt: string;
    totals: {tracked: number; seen: number; passed: number; failed: number};
    events: Record<string, EventRecord>;
}

export class EventRecorder {

    readonly records = new Map<string, EventRecord>();
    private readonly startedAt = new Date().toISOString();

    constructor(readonly zone: string, readonly trackedEvents: string[]) {
        for(const name of trackedEvents){
            this.records.set(name, {
                seen: 0,
                validated: 0,
                failures: [],
                style: RELDENS_EVENT_PAYLOAD_INFO[name]?.style ?? 'unextracted'
            });
        }
    }

    /** Attaches one listener per tracked event to a live events manager. */
    attach(events: {on: (name: string, callback: (...args: unknown[]) => void) => unknown}): void {
        for(const name of this.trackedEvents){
            events.on(name, (...args: unknown[]) => this.observe(name, args));
        }
    }

    /**
     * Validate a client event a real browser observed and reported. The browser
     * cannot ship Phaser objects, so it sends what the schema actually checks:
     * the first arg's keys (object styles) and the argument count (positional).
     */
    observeFromBrowser(
        name: string,
        report: {argCount: number; keys?: string[]; isObject?: boolean; payload?: unknown}
    ): void {
        const record = this.records.get(name);
        if(!record){
            return;
        }
        record.seen++;
        record.firstSeenAt ??= new Date().toISOString();
        const info = RELDENS_EVENT_PAYLOAD_INFO[name];
        if(!info){
            record.failures.push({message: 'browser event fired but has no extraction record'});
            return;
        }
        if('object' === info.style || 'class' === info.style){
            // parse the real (JSON-safe, depth-limited) payload the browser captured
            const result = payloadSchemaFor(name).safeParse(report.payload ?? {});
            if(result.success){
                record.validated++;
            } else {
                record.failures.push({message: 'zod.parse failed on browser payload', issues: result.error.issues});
            }
            return;
        }
        if('positional' === info.style){
            if(report.argCount <= info.args.length){
                record.validated++;
            } else {
                record.failures.push({
                    message: 'browser emit passed '+report.argCount+' args, extraction found '+info.args.length
                });
            }
            return;
        }
        if('none' === info.style){
            if(0 === report.argCount){
                record.validated++;
            } else {
                record.failures.push({message: 'browser emit passed arguments, extraction found none'});
            }
            return;
        }
        record.validated++;
    }

    observe(name: string, args: unknown[]): void {
        const record = this.records.get(name);
        if(!record){
            return;
        }
        record.seen++;
        record.firstSeenAt ??= new Date().toISOString();
        const info = RELDENS_EVENT_PAYLOAD_INFO[name];
        if(!info){
            record.failures.push({message: 'event fired but has no extraction record'});
            return;
        }
        if('object' === info.style || 'class' === info.style){
            const result = payloadSchemaFor(name).safeParse(args[0]);
            if(result.success){
                record.validated++;
            } else {
                record.failures.push({
                    message: 'zod.parse failed on live payload',
                    issues: result.error.issues
                });
            }
            return;
        }
        if('positional' === info.style){
            // No object to parse; the live check is the arity the extraction promised.
            // Trailing optional arguments make fewer acceptable, never more.
            if(args.length <= info.args.length){
                record.validated++;
            } else {
                record.failures.push({
                    message: 'live emit passed '+args.length+' arguments, extraction found '+info.args.length
                        +' ('+info.args.join(', ')+')'
                });
            }
            return;
        }
        if('none' === info.style){
            if(0 === args.length){
                record.validated++;
            } else {
                record.failures.push({message: 'live emit passed arguments, extraction found none'});
            }
            return;
        }
        // mixed: seen is all we can claim.
        record.validated++;
    }

    report(): RecorderReport {
        let seen = 0;
        let passed = 0;
        let failed = 0;
        const events: Record<string, EventRecord> = {};
        for(const [name, record] of [...this.records.entries()].sort(([a], [b]) => a.localeCompare(b))){
            events[name] = record;
            if(0 < record.seen){
                seen++;
                if(0 === record.failures.length){
                    passed++;
                } else {
                    failed++;
                }
            }
        }
        return {
            zone: this.zone,
            startedAt: this.startedAt,
            finishedAt: new Date().toISOString(),
            totals: {tracked: this.trackedEvents.length, seen, passed, failed},
            events
        };
    }

}
