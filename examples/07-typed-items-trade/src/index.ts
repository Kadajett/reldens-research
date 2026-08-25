/**
 * Entry point: run the trade demo, then the custom-item-type demo.
 *
 * `npm start` runs this. It uses @reldens/items-system only; the optional zod
 * verification lives in ../optional-validation and ../test.
 */
import { runTradeDemo } from './trade-demo';
import { runCustomTypeDemo } from './custom-type-demo';

async function main(): Promise<void> {
    await runTradeDemo();
    console.log('');
    await runCustomTypeDemo();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
