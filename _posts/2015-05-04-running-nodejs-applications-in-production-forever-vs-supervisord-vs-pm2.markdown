---
layout: post
title: Running Nodejs applications in production forever vs supervisord vs pm2
permalink: running-nodejs-applications-in-production-forever-vs-supervisord-vs-pm2
date: '2015-05-04 10:23:00'
tags:
- pm2
- nodejs
- forever
- supervisord
- production
---

There are a few aspects to think of when setting up a Nodejs application in production. I'm going to cover off `Process management` and `Webservers`.

### Process management

One of the aspects you need to think about is keeping your app alive. When running PHP, when your app process crashes or server restarts the application **WILL** come back online automatically. With Nodejs, if the process crashes or the server restarts the process will **NOT** start itself. This is where a process manager comes into play, luckily there are a few good ones to choose from. 

I will run through some of them and detail their pros and cons but to summarise: I like [PM2](https://github.com/Unitech/pm2) for easy setup of personal projects but I definitely recommend setting up [systemd](https://github.com/systemd/systemd) for a proper production environment. 

#### supervisord ([Link](https://github.com/Supervisor/supervisor))

**Pros**

- Mature software
- Works on many different environments

**Cons**

- Not Nodejs specific
- Harder to setup
- limited options

[SETUP GUIDE](https://blog.risingstack.com/operating-node-in-production)

#### forever ([Link](https://github.com/foreverjs/forever))

**Pros**

- Mature software (7.5k Github stars)
- Works on many different environments
- Easy to setup

**Cons**

- I found it was unreliable recovering my Nodejs apps
- Had issues with apps being auto started after a system reboot
- Limited options (at the time of writing)

[SETUP GUIDE](https://expressjs.com/en/advanced/pm.html#forever)

#### pm2: my pick for personal ([Link](https://github.com/Unitech/pm2))

**Pros**

- Mature software (12.5k Github stars)
- Can be used with an enterprise (paid) add-on service called [Keymetrics](https://keymetrics.io/)
- Works on many different environments
- Super easy to setup
- Many different options to scale apps in cluster mode etc
- Command `pm2 list` give an easy to read table of all apps

**Cons**

- A little difficult setting up as a non root user
- None that I've found so far. Rock solid.

[SETUP GUIDE](https://expressjs.com/en/advanced/pm.html#pm2)

#### SystemD: my pick for proper applications ([Link](https://github.com/systemd/systemd))

**Pros**

- Mature software
- Is the default process manager on most linux environments
- Easy to setup
- Rock solid and proven software
- Can also run and mange other processes like Databases

**Cons**

- None that I've found. Rock solid for production environments.

[SETUP GUIDE](https://expressjs.com/en/advanced/pm.html#systemd)

### Webserver

I'm not even going to suggest others, I'm a Nginx man through and through and this in my opinion is the best and only choice in running a Nodejs webserver.

Here is a short guide on setting up Nginx for your Nodejs app:

Firstly need to install Nginx. Eg: Ubuntu: `$ sudo apt-get install nginx`

You the want to create the config for your application

`$ sudo nano /etc/nginx/sites-available/myapp`

The following is a very basic config to run your application. Basically it will listen for requests to `mydomain.com` on HTTP and forward those requests to our app (running with a process manager above) on port `4444`. You will need to change that port to whatever port your app is running/listening on. 

```
server {
    listen 80;
    server_name mydomain.com;

    location / {
        proxy_pass http://localhost:4444;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

You can then save this file and test your Nginx config with:

`$ nginx -t`

All going well, you should get something like this:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

If not, check the error and adjust your config to resolve.

After a successful test, you now need to reload the new config into Nginx. You can either restart Nginx (will cause short downtime to all apps on server) or reload the config only. Best choice is to reload.

Reload: `$ service nginx reload`

Restart: `$ service nginx restart`

Thats it! You should be able to visit your app at: [http:mydomain.com](http:mydomain.com)


