/**
 * CommonJS entry point.
 *
 * Reldens expects an `index.js` at the project root (its ThemeManager and CLI
 * both key off that path), so the real, TypeScript entry lives in src/ and this
 * file just loads what tsc produced.
 *
 *   npm run build && npm start     compiled
 *   npm run dev                    tsx, no build step
 */
require('./build/index.js');
