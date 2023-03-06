const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
    case 'production':
        ENV_FILE_NAME = '.env.production';
        break;
    case 'staging':
        ENV_FILE_NAME = '.env.staging';
        break;
    case 'test':
        ENV_FILE_NAME = '.env.test';
        break;
    case 'development':
    default:
        ENV_FILE_NAME = '.env';
        break;
}

try {
    dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming StreamPay from backend
const BACKEND_CORS = process.env.BACKEND_CORS || "https://api.streampay.shop";

// CORS when consuming StreamPay from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "https://admin.streampay.shop";

// CORS to avoid issues when consuming StreamPay from a client
const STORE_CORS = process.env.STORE_CORS || "https://streampay.shop";

// Database URL (here we use a local database called streampay-development)
const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://gwnzkxajdhwoyg:e83ee4aea94dab9a3f2a9d9c34b9346c50ec1a45cae91c2531553caa981333e7@ec2-52-73-155-171.compute-1.amazonaws.com:5432/ddu16n5o9ub8qp";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "rediss://default:5VsELnsTHx7LGv1OKKNSTpSyYOiaS5eD1Xur02ulSNgElEOq0GLLmwh4FQTfaSyq@3mbmhw.stackhero-network.com:6380";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// StreamPay keys
const STREAMPAY_API_KEY = process.env.STREAMPAY_API_KEY || "";
const STREAMPAY_WEBHOOK_SECRET = process.env.STREAMPAY_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
    // ...
    {
        resolve: `medusa-plugin-meilisearch`,
        options: {
            // config object passed when creating an instance
            // of the MeiliSearch client
            config: {
                host: process.env.MEILISEARCH_HOST,
                apiKey: process.env.MEILISEARCH_API_KEY,
            },
            settings: {
                // index name
                products: {
                    // MeiliSearch's setting options to be set on a particular index
                    searchableAttributes: ["title", "description", "variant_sku"],
                    displayedAttributes: [
                        "title",
                        "description",
                        "variant_sku",
                        "thumbnail",
                        "handle",
                    ],
                },
            },
        },
    },
]

module.exports = {
    projectConfig: {
        redis_url: REDIS_URL,
        database_url: DATABASE_URL,
        database_type: "postgres",
        store_cors: STORE_CORS,
        admin_cors: ADMIN_CORS,
        database_extra: process.env.NODE_ENV !== "development" ? { ssl: { rejectUnauthorized: false } } : {},
    },
    plugins,
}
