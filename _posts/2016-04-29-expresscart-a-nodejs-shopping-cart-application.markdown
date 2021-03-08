---
layout: post
title: 'expressCart : A Nodejs Shopping Cart application'
date: '2016-04-29 05:19:49'
tags:
- nodejs
- express
- lunr
- shopping
- cart
- ecommerce
- paypal
- javascript
---

expressCart is a Shopping Cart built with [Nodejs](https://nodejs.org/) and [ExpressJS](http://expressjs.com/). The application has [PayPal](https://paypal.com) Express Checkout, [Stripe](https://stripe.com) checkout and Authorise.Net built-in. expressCart uses [MongoDB](https://www.mongodb.com/) database backend.

The application is designed to be easy to use and install and based on search for simplicity rather than nested categories. Simply search for what you want and select from the results. expressCart uses powerful [lunr.js](http://lunrjs.com) to index the products and enable the best search results.

**Website**: [https://expresscart.markmoffat.com/](https://expresscart.markmoffat.com/)

**Demo**: [https://expresscart-demo.markmoffat.com](https://demo.expresscart.markmoffat.com)

### Features

- **Payments**: expressCart has built in [PayPal](https://paypal.com) Express Checkout or [Stripe](https://stripe.com) checkout.
- **Search**: expressCart is a search based Shopping Cart backed by [Lunr.js](https://github.com/olivernn/lunr.js/) indexing to create the best possible results on searches. 
- **Backend**: expressCart uses [MongoDB](https://www.mongodb.com/) for a database.
- **Design**: expressCart has a simple flat and responsive design. 
- **Responsive**: expressCart is built using Bootstrap, allowing it to be responsive and work on all devices.
- **Themes**: expressCart allows for custom themes to style the cart exactly how you like it.

### Screenshots

Homepage:
![Homepage](/content/images/2020/01/expressCart-homepage.png)

Admin manage settings:
![Admin manage settings](/content/images/2020/03/expressCart-admin-settings.png)

Popout cart:
![Popout cart](/content/images/2020/01/expressCart-popout-cart.png)

Dashboard:
![Dashboard](/content/images/2020/03/expressCart-admin-dashboard.png)


### Running in production

Using [PM2](https://github.com/Unitech/pm2) is the easiest and best option for running production websites.
See the [PM2](https://github.com/Unitech/pm2) for more information or a short guide here: [https://mrvautin.com/running-nodejs-applications-in-production-forever-vs-supervisord-vs-pm2/](/running-nodejs-applications-in-production-forever-vs-supervisord-vs-pm2/).
