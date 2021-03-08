---
layout: post
title: Enabling custom domain for SaaS application on Heroku
permalink: enabling-custom-domain-for-saas-application-on-heroku
date: '2017-01-24 23:40:29'
tags:
- saas
- heroku
- dns
- custom-domain
- cname
---

If you are running a SaaS application on Heroku you might notice that it's difficult enabling the users of the SaaS application to bring their own custom domain using a DNS `CNAME`. When the request comes into Heroku the platform will return the "No such application" error. The Heroku support team suggests adding a custom domain to the Heroku dashboard for each SaaS user. I could see this getting out of hand so I decided to implement a proxy server to fix the issue.

Firstly you will want to add your own wildcard custom domain to your Heroku application and also create a `CNAME` with your DNS provider. 

Adding your `CNAME` with your DNS provider to point to Heroku:

**Hostname**: *.mydomain.com   
**Path**: my_heroku_app_name.herokuapp.com

Adding your domain to the Heroku dashboard:

**Domain Name**: *.mydomain.com    
**DNS Target**: my_heroku_app_name.herokuapp.com

You will then want to setup your proxy server. I spun up a new [Digital Ocean](https://m.do.co/c/d248e1e45937) droplet and setup Nginx to proxy the requests.

The Nginx config would look like this:

```
server {
    listen 80 default_server;

    server_name proxy.mydomain.com;

    location / {
        proxy_set_header    Host $host;
        proxy_set_header    X-Real-IP $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header    Host $host-customdomain.mydomain.com;
        proxy_redirect      off;
        proxy_pass          http://my_heroku_app_name.herokuapp.com;
    }
}
```

Basically what is happening is your Nginx server is adding the `Host` header and proxing the request onto Heroku. The Heroku router will then read the `Host` header and determine which application to select. It's then that your application will need to determine the domain in the request and serve the correct SaaS user.

You will then need to setup an `A` DNS record with your DNS provider to point to the new proxy server:

**Hostname**: proxy.mydomain.com   
**Path**: 192.168.0.1 (This IP is your [Digital Ocean](https://m.do.co/c/d248e1e45937) droplet IP)

You will then want your users of your SaaS application who are wanting a custom domain to point their DNS to `proxy.mydomain.com`.

Your Saas application will then need to get the `Host` header, remove -`customdomain.mydomain.com` and determine who the customer of your SaaS application is.