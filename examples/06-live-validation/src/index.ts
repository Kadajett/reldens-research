/**
 * Example 06 - plain server start (no harness): boots the validated server and
 * prints a coverage line every 30s. `npm run harness` runs the full E2E instead.
 */
import { startValidatedServer } from './server';

startValidatedServer().then(({recorder}) => {
    console.info('[example-06] validated server up on :8086');
    setInterval(() => {
        const report = recorder.report();
        console.info('[example-06] events seen:', report.totals.seen, 'passed:', report.totals.passed, 'failed:', report.totals.failed);
    }, 30000);
}).catch((error: unknown) => {
    console.error('[example-06] failed to start', error);
    process.exit(1);
});
