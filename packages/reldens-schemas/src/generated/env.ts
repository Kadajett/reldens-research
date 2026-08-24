/**
 * GENERATED - do not edit by hand.
 *
 * Every RELDENS_* environment variable read by reldens or one of its @reldens/* siblings,
 * plus the ones the installer writes into .env. "readBy" is empty for variables that only
 * appear in the .env template.
 *
 * Source: reldens@4.0.0-beta.39.8
 * Regenerate: npm run generate --workspace @reldens-tutorials/schemas
 */

export const RELDENS_ENV_VARS = [
    "RELDENS_ADMIN_ROUTE_PATH",
    "RELDENS_ADMIN_SECRET",
    "RELDENS_ALLOW_BUILD_CLIENT",
    "RELDENS_ALLOW_BUILD_CSS",
    "RELDENS_ALLOW_RUN_BUNDLER",
    "RELDENS_APP_HOST",
    "RELDENS_APP_PORT",
    "RELDENS_CORS_HEADERS",
    "RELDENS_CORS_METHODS",
    "RELDENS_CORS_ORIGIN",
    "RELDENS_CREATE_CONFIG_FILE",
    "RELDENS_CSS_SOURCEMAPS",
    "RELDENS_DB_CLIENT",
    "RELDENS_DB_HOST",
    "RELDENS_DB_LIMIT",
    "RELDENS_DB_NAME",
    "RELDENS_DB_PASSWORD",
    "RELDENS_DB_POOL_MAX",
    "RELDENS_DB_POOL_MIN",
    "RELDENS_DB_PORT",
    "RELDENS_DB_URL",
    "RELDENS_DB_URL_OPTIONS",
    "RELDENS_DB_USER",
    "RELDENS_DEBUG_QUERIES",
    "RELDENS_DEFAULT_DOMAIN",
    "RELDENS_DEFAULT_ENCODING",
    "RELDENS_DOMAIN_CDN_MAPPING",
    "RELDENS_DOMAIN_MAPPING",
    "RELDENS_DOMAIN_PUBLIC_URL_MAPPING",
    "RELDENS_ENABLE_TRACE_FOR",
    "RELDENS_EXPRESS_HTTPS_CERT",
    "RELDENS_EXPRESS_HTTPS_CHAIN",
    "RELDENS_EXPRESS_HTTPS_PASSPHRASE",
    "RELDENS_EXPRESS_HTTPS_PRIVATE_KEY",
    "RELDENS_EXPRESS_JSON_LIMIT",
    "RELDENS_EXPRESS_RATE_LIMIT_APPLY_KEY_GENERATOR",
    "RELDENS_EXPRESS_RATE_LIMIT_MAX_REQUESTS",
    "RELDENS_EXPRESS_RATE_LIMIT_MS",
    "RELDENS_EXPRESS_SERVE_HOME",
    "RELDENS_EXPRESS_SERVE_STATICS",
    "RELDENS_EXPRESS_TRUSTED_PROXY",
    "RELDENS_EXPRESS_URLENCODED_LIMIT",
    "RELDENS_EXPRESS_USE_HTTPS",
    "RELDENS_FIREBASE_API_KEY",
    "RELDENS_FIREBASE_APP_ID",
    "RELDENS_FIREBASE_AUTH_DOMAIN",
    "RELDENS_FIREBASE_DATABASE_URL",
    "RELDENS_FIREBASE_ENABLE",
    "RELDENS_FIREBASE_MEASUREMENTID",
    "RELDENS_FIREBASE_MESSAGING_SENDER_ID",
    "RELDENS_FIREBASE_PROJECT_ID",
    "RELDENS_FIREBASE_STORAGE_BUCKET",
    "RELDENS_FORCE_COPY_ASSETS_ON_BUNDLE",
    "RELDENS_FORCE_RESET_DIST_ON_BUNDLE",
    "RELDENS_GLOBAL_RATE_LIMIT",
    "RELDENS_GUESTS_EMAIL_DOMAIN",
    "RELDENS_HOST",
    "RELDENS_HOT_PLUG",
    "RELDENS_INSTALLATION_TYPE",
    "RELDENS_JS_SOURCEMAPS",
    "RELDENS_LOG_LEVEL",
    "RELDENS_MAILER_ENABLE",
    "RELDENS_MAILER_FORGOT_PASSWORD_LIMIT",
    "RELDENS_MAILER_FROM",
    "RELDENS_MAILER_HOST",
    "RELDENS_MAILER_PASS",
    "RELDENS_MAILER_PORT",
    "RELDENS_MAILER_SERVICE",
    "RELDENS_MAILER_USER",
    "RELDENS_MONITOR",
    "RELDENS_MONITOR_AUTH",
    "RELDENS_MONITOR_PASS",
    "RELDENS_MONITOR_USER",
    "RELDENS_PING_INTERVAL",
    "RELDENS_PING_MAX_RETRIES",
    "RELDENS_PORT",
    "RELDENS_PUBLIC_URL",
    "RELDENS_SITE_KEY_MAPPING",
    "RELDENS_STORAGE_DRIVER",
    "RELDENS_TOO_MANY_REQUESTS_MESSAGE",
    "RELDENS_USE_CORS",
    "RELDENS_USE_EXPRESS_JSON",
    "RELDENS_USE_HELMET",
    "RELDENS_USE_URLENCODED",
    "RELDENS_USE_XSS_PROTECTION"
] as const;

export type ReldensEnvVar = typeof RELDENS_ENV_VARS[number];

export const RELDENS_ENV_PROVENANCE: Record<ReldensEnvVar, {inInstallTemplate: boolean; readBy: string[]}> = {
    "RELDENS_ADMIN_ROUTE_PATH": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_ADMIN_SECRET": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_ALLOW_BUILD_CLIENT": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_ALLOW_BUILD_CSS": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_ALLOW_RUN_BUNDLER": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_APP_HOST": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "@reldens/server-utils",
            "reldens"
        ]
    },
    "RELDENS_APP_PORT": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_CORS_HEADERS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_CORS_METHODS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_CORS_ORIGIN": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_CREATE_CONFIG_FILE": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_CSS_SOURCEMAPS": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_CLIENT": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DB_HOST": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DB_LIMIT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_NAME": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DB_PASSWORD": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DB_POOL_MAX": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_POOL_MIN": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_PORT": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DB_URL": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_URL_OPTIONS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DB_USER": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_DEBUG_QUERIES": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DEFAULT_DOMAIN": {
        "inInstallTemplate": false,
        "readBy": [
            "@reldens/cms"
        ]
    },
    "RELDENS_DEFAULT_ENCODING": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_DOMAIN_CDN_MAPPING": {
        "inInstallTemplate": false,
        "readBy": [
            "@reldens/cms"
        ]
    },
    "RELDENS_DOMAIN_MAPPING": {
        "inInstallTemplate": false,
        "readBy": [
            "@reldens/cms"
        ]
    },
    "RELDENS_DOMAIN_PUBLIC_URL_MAPPING": {
        "inInstallTemplate": false,
        "readBy": [
            "@reldens/cms"
        ]
    },
    "RELDENS_ENABLE_TRACE_FOR": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_HTTPS_CERT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_HTTPS_CHAIN": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_HTTPS_PASSPHRASE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_HTTPS_PRIVATE_KEY": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_JSON_LIMIT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_RATE_LIMIT_APPLY_KEY_GENERATOR": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_RATE_LIMIT_MAX_REQUESTS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_RATE_LIMIT_MS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_SERVE_HOME": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_SERVE_STATICS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_TRUSTED_PROXY": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_URLENCODED_LIMIT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_EXPRESS_USE_HTTPS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_API_KEY": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_APP_ID": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_AUTH_DOMAIN": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_DATABASE_URL": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_ENABLE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_MEASUREMENTID": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_MESSAGING_SENDER_ID": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_PROJECT_ID": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FIREBASE_STORAGE_BUCKET": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FORCE_COPY_ASSETS_ON_BUNDLE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_FORCE_RESET_DIST_ON_BUNDLE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_GLOBAL_RATE_LIMIT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_GUESTS_EMAIL_DOMAIN": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_HOST": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_HOT_PLUG": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_INSTALLATION_TYPE": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_JS_SOURCEMAPS": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_LOG_LEVEL": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_ENABLE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_FORGOT_PASSWORD_LIMIT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_FROM": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_HOST": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_PASS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_PORT": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_SERVICE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MAILER_USER": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MONITOR": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MONITOR_AUTH": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MONITOR_PASS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_MONITOR_USER": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_PING_INTERVAL": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_PING_MAX_RETRIES": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_PORT": {
        "inInstallTemplate": false,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_PUBLIC_URL": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "@reldens/server-utils",
            "reldens"
        ]
    },
    "RELDENS_SITE_KEY_MAPPING": {
        "inInstallTemplate": false,
        "readBy": [
            "@reldens/cms"
        ]
    },
    "RELDENS_STORAGE_DRIVER": {
        "inInstallTemplate": true,
        "readBy": [
            "@reldens/cms",
            "reldens"
        ]
    },
    "RELDENS_TOO_MANY_REQUESTS_MESSAGE": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_USE_CORS": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_USE_EXPRESS_JSON": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_USE_HELMET": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_USE_URLENCODED": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    },
    "RELDENS_USE_XSS_PROTECTION": {
        "inInstallTemplate": true,
        "readBy": [
            "reldens"
        ]
    }
};
