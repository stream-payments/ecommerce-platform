const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
    features: store.features,
    reactStrictMode: true,
    images: {
        domains: ["ec2-54-157-79-121.compute-1.amazonaws.com", "https://streampay.shop/images", "localhost"],
    },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))