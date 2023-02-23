# Overview

StreamPay e-Commerce Platform is composed of three different components: the headless server, the storefront, and the admin dashboard based of Medusa online store.
e-Commerce Platform provides the necessary tools and resources to set up the three components separately. This ensures that developers have full freedom to choose their tech stack, as they can choose any framework for the storefront and admin dashboard.

When you run the create-medusa-app command, you’ll install a StreamPay server, a admin dashboard, and optionally a storefront at the same time.

## Architecture

StreamPay is composed of three components: The StreamPay´s e-commerce platform server, the admin dashboard, and the storefront.


## StreamPay e-Commerce Platform's Architecture

#### Server
The StreamPay server is a headless backend built on Node.js. This is the main component that holds all the logic and data of the store. Your admin dashboard and storefront interact with the backend to retrieve, create, and modify data through REST APIs.

Your server will include all functionalities related to your store’s checkout workflow. That includes cart management, shipping and payment providers, user management, and more. It also allows you to configure your store including your store’s region, tax rules, discounts, gift cards, and more.

#### Admin Dashboard

The admin dashboard is accessible by store operators. Store operators can use the admin dashboard to view, create, and modify data such as orders and products.

e-Commerce platform provides a beautiful admin dashboard that you can use right off the bat. StreamPay's admin dashboard provides a lot of functionalities to manage your store including Order management, Product management, User management, and more.

You can also create your own admin dashboard by utilizing the Admin REST APIs.

#### Storefront

Your customers use the Storefront to view products and make orders. StreamPay platform provides two storefronts, one built with Next.js and one with Gatsby. You are also free to create your own storefront using the Storefront REST APIs.

##### Features:
- Orders, Exchanges, and Returns: Aside from the standard order management that comes with ecommerce platforms, StreamPay also provides an easy and automated way to manage swaps, returns, and claims.
- Customers and Customer Groups: Manage Customers and assign them to customer groups.
- Products and Collections: Add products with extensive customization settings and sort them into collections.
- Region: Configure and manage multiple regions and currencies all from one platform.
- Plugins: Easily integrate fulfillment providers, payment providers, notification services, and many other custom tools and third-party services.
- PriceList and Discounts: Advanced pricing for products with conditions based on the amount in the cart or promotions and discounts.
- Taxes: Advanced tax configurations specific to multiple regions, with the capability of specifying taxes for specific products.
- Sales Channels: Create multiple sales channels and control which sales channels products are available in.
- Bulk Import: Bulk import strategies for different entities including products and price lists.
- Bulk Export: Bulk export strategies for different entities including products and orders.
- Complete Customization Capabilities: Aside from all the features that StreamPay platform provides, it is completely customizable providing capabilities to create custom endpoints, services, subscribers, batch job strategies, and much more!

##### Development

- Web3 payments features
- Cryptocurrencies
- EUROe, EURC, USDC stablecoin support
- Stream Payments Gateway and bridge
- 

