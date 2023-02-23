const plugins = [
  // ...
  {
    resolve: `medusa-payment-streampay`,
    options: {
      api_key: process.env.STREAM_PAY_API_KEY,
      webhook_secret: process.env.STREAM_PAY_WEBHOOK_SECRET,
    },
  },
]