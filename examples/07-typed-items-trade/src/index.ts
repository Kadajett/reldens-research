/**
 * Entry point: run the trade demo.
 *
 * `npm start` runs this. It uses @reldens/items-system only; the optional zod
 * verification of the catalog lives in ../optional-validation and ../test.
 */
import { runTradeDemo } from './trade-demo';

runTradeDemo().catch((error) => {
    console.error(error);
    process.exit(1);
});
