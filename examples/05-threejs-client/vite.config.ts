import { defineConfig } from 'vite';

/**
 * The Three.js client is a normal Vite app. It never imports the reldens package:
 * it talks to the world over colyseus.js and nothing else, which is what keeps
 * the non-forking extension pattern honest.
 *
 * `/assets` is proxied so tilesets and sprites can be pulled straight from the
 * running Reldens server rather than duplicated here.
 */
export default defineConfig({
    root: 'client',
    server: {
        port: 5173,
        proxy: {
            '/assets': {
                target: 'http://localhost:8085',
                changeOrigin: true
            }
        }
    },
    build: {
        outDir: '../build-client',
        emptyOutDir: true
    }
});
