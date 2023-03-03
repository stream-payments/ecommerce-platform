# StreamPay Webshop, Medusajs + turborepo

This is an official starter for [e-Commerce Platform](https://commerce.streamprotocol.org) using [Turborepo](https://turbo.build/repo).


## Required backend services

- [Railway](https://railway.app) - for hosting the server, Postgres and Redis.
- [Digital Ocean](https://digitalocean.com) - for storing images in a bucket.
- [Sendgrid](https://sendgrid.com) - for sending emails.
- [Stripe](https://stripe.com) - for payments.

## Required frontend services

- [Vercel](https://vercel.com) - for hosting the admin.
- [Netlify](https://netlify.com) - for hosting the frontend.

## Optional services

- [Algolia](https://algolia.com) - for search.
- [Meilisearch](https://meilisearch.com) - for search.
- [Sentry](https://sentry.io) - for error tracking.
- [Google Analytics](https://analytics.google.com) - for analytics.

## Optional CMS

- [Sanity](https://sanity.io) - for managing content (with build in studio).
- [Prismic](https://prismic.io) - for managing content.
- [Contentful](https://contentful.com) - for managing content.

## How to run locally
1. Clone the repository
2. Install dependencies in the root folder (because of the monorepo)
```yarn install```
3. Start the local development server
```yarn dev```

## Railway setup

![Railway setup](./railway-infra.png)
