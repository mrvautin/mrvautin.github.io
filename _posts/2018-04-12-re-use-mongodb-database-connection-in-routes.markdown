---
layout: post
title: Nodejs - Re-use MongoDB database connection in routes
permalink: re-use-mongodb-database-connection-in-routes
date: '2018-04-12 20:55:22'
tags:
- nodejs
- javascript
- expressjs
- mongodb
---

Quite often when you are writing an application you will need access to one or more database connections. Maybe MongoDB for data storage and Redis for cache. You will need to re-use that database connection throughout your application. I'm going to go through a simple way of re-using the connection in modules, Express routes etc.


## Creating the helper

Firstly you will want to create your `db.js` file which will export some handy database related functions.

File: `db.js`

{% highlight javascript %}
    const mongoClient = require('mongodb').MongoClient;
    const mongoDbUrl = 'mongodb://127.0.0.1:27017';
    let mongodb;

    function connect(callback){
        mongoClient.connect(mongoDbUrl, (err, db) => {
            mongodb = db;
            callback();
        });
    }
    function get(){
        return mongodb;
    }

    function close(){
        mongodb.close();
    }

    module.exports = {
        connect,
        get,
        close
    };
{% endhighlight %}

After creating this file you can simply `require` it and you now have few functions at our disposal. `connect`, `get`, `close`. 


## Connecting

File: `app.js`

You will then want to call `connect()` before your application starts and the server starts listening. Eg:

{% highlight javascript %}
    db.connect(() => {
        app.listen(process.env.PORT || 5555, function (){
            console.log(`Listening`);
        });
    });
{% endhighlight %}

Now you have access to your database connection anywhere in your application by simply requiring the `db.js` file and using the `get()` function. 

## Using the connection

File: `users.js` (routes file for example)

{% highlight javascript %}
const db = require('./db');

router.get('/users', (req, res) => {
	db.get().collection('users').find({}).toArray()
	.then((users) => {
            console.log('Users', users);
        });
});
{% endhighlight %}

It just makes everything much cleaner and easy to handle this way. I hope this helped you in some way.