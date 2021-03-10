---
layout: post
title: How to setup HTTPS on your Ghost blog and avoid redirect loop
permalink: how-to-setup-https-on-your-ghost-blog-without-redirect-loop
date: '2016-04-15 00:05:00'
tags:
- ghost-tag
- https
- ssl
- apache
- nginx
- config
- redirect
- loop
---

If you are wanting to setup your Ghost blog URL to be `HTTPS` (SSL), you will need to ensure your Web Server is sending the correct Headers to Ghost. Failing to do so can cause your Blog to go into a endless redirect loop and fail to work.

The production section of your Ghost `config.js` will look something like this:

{%highlight javascript %}
production: {
	url: 'https://mrvautin.com',
	mail: {},
	database: {}
}

{% endhighlight %}

Depending on your web server the setting is slightly different. We are going to cover off `Apache` and `Nginx` as they are most popular.

##### For Nginx

A simple `Nginx` config would look like:

{%highlight nginx %}
server {
	listen 443 ssl;
	server_name mrvautin.com www.mrvautin.com;
	# SSL STUFF

	location / {
		proxy_set_header        X-Real-IP $remote_addr;
		proxy_set_header        Host    $http_host;
		proxy_pass              http://127.0.0.1:2368;
		proxy_set_header        X-Forwarded-Proto $scheme;
	}
}
{% endhighlight %}

The important line above is:

`proxy_set_header        X-Forwarded-Proto $scheme;`

This line ensures the Header which Ghost reads has the correct protocol set.

##### For Apache

A simple `Apache` virtual host config would look like:

{%highlight xml %}
<VirtualHost *:443>
    RequestHeader set X-Forwarded-Proto "https"
    ProxyPreserveHost On
    ServerName mrvautin.com

    SSLEngine On
    SSLCertificateFile /etc/apache2/ssl/server.crt
    SSLCertificateKeyFile /etc/apache2/ssl/server.key

    <Location/>
        SSLRequireSSL
    </Location>

    ProxyPass / http://127.0.0.1:2368
    ProxyPassReverse / http://127.0.0.1:2368
</VirtualHost>
{% endhighlight %}

The important line above is:

`RequestHeader set X-Forwarded-Proto "https"`

This line ensures the Header which Ghost reads has the correct protocol set.



