---
layout: post
title: Building a reliable and scalable Node.JS SaaS application
date: '2017-01-22 03:50:10'
tags:
- nodejs
- express
- scalable
- reliable
- saas
- application
---

The SaaS app we built is an FAQ/Knowledge base and support ticketing platform called ezyFAQ - [www.ezyfaq.com](https://www.ezyfaq.com)

Having built many Node.Js projects, this would be our first venture into building a scalable SaaS app. After our initial investigation on where we should start, we couldn't find much advice on where to start and things to look out for. We found vague articles on various projects built many years ago but nothing using modern tech, in particular Node.JS.

We are intending this article to be helpful to anyone wanting to build a SaaS app using Node.Js. 

## Hosting

Up until this project we built our apps on self managed Digital Ocean VM's. This was fine in isolation but we found it difficult to find any information on scaling and load balancing to grow with the app user base.

We decided to go with a dedicated Node.Js host (Heroku) which used the Dyno type approach. This seemed like the best approach to easily scale as the customer base and load grows.

## Database

Generally our database of choice to pair with Node.JS is MongoDB. After trying and considering various other databases, we decided to stick with MongoDB. 

Hosting MongoDB yourself is easy enough but we wanted something more reliable with load balancing/redundancy, scaling and backups. There are various options from MongoDB Atlas, Compose.io, mLab etc. After some consideration, we went with mLab for easy of use, scalability and best price. 

## Application structure

This is where we spent most of our time trying to figure out the best approach. There are two parts to the app: the front and backend. The frontend is the part of the app which would see all the public traffic. Each customer of our app would have their own FAQ with a subdomain (and optional custom domain) which would see significant traffic. The backend is the management side for our customers where they would manage settings, content, style and more. The backend would receive minimal traffic in comparison to the public facing frontend and so would have much less of a need to scale. 

Instead of creating one big app we decided to split them out and run on seperate Heroku plans. This way we can scale the frontend easily whilst leaving the backend as it. It also means we can easily do maintenance, add features etc without affecting the public facing side of the app.

## Conclusion

We learnt a lot. First of all, we learn't that making a standalone app into a SaaS is not as easy as it sounds. There are many different aspects which need to be considered and worked through. We found that scalability and being flexible was the key to our success and this is where we spent most of our time. We also found that doing everything and managing everything is not the always the best thing. Leave the server and DB hosting to a dedicated company to manage it for you. As a startup, you can't possibly be professional and perfect at everything. You can always bring services back in house as you grow and your available skill set grows too.

We would love to hear feedback from others who have faced similar hurdles getting their SaaS app off the ground and how they dealt with them.