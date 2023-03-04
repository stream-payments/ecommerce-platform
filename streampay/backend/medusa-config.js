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

// CORS when consuming StreamPay from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "https://streampay-shop-admin.netlify.app";

// CORS to avoid issues when consuming StreamPay from a client
const STORE_CORS = process.env.STORE_CORS || "https://streampay.shop";

// Database URL (here we use a local database called streampay-development)
const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://qmnsghzwlurqgn:a4e6019b1198a05582bc4cc030429ba5c90225dab0b2411866c43b2b9222f74f@ec2-54-157-79-121.compute-1.amazonaws.com:5432/d5q617bhbn34hl";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://https://dashboard.stackhero.io/account/organizations/org-amlw5v/stacks/stk-q7lfyr/services/";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    // Uncomment to add Stripe support.
    // You can create a Stripe account via: https://stripe.com
    // {
    //   resolve: `medusa-payment-stripe`,
    //   options: {
    //     api_key: STRIPE_API_KEY,
    //     webhook_secret: STRIPE_WEBHOOK_SECRET,
    //   },
    // },
];

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