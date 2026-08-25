/** Boots the validated server, waits, prints which events fired, exits. */
import { writeFileSync } from 'node:fs';
import { startValidatedServer } from './server';

async function main(): Promise<void> {
    const {recorder} = await startValidatedServer();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const report = recorder.report();
    console.info('SEEN', report.totals.seen, 'PASSED', report.totals.passed, 'FAILED', report.totals.failed);
    for(const [name, record] of Object.entries(report.events)){
        if(0 < record.seen){
            console.info((record.failures.length ? 'FAIL ' : 'ok   ')+name+' x'+record.seen);
            for(const failure of record.failures.slice(0, 2)){
                console.info('     ', failure.message, JSON.stringify(failure.issues ?? '').slice(0, 200));
            }
        }
    }
    writeFileSync(__dirname+'/../harness-report-boot.json', JSON.stringify(report, null, 2));
    process.exit(0);
}

main().catch((error) => { console.error(error); process.exit(1); });
