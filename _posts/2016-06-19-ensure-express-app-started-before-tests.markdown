---
layout: post
title: Ensure Express App has started before running Mocha/Supertest tests
permalink: ensure-express-app-started-before-tests
date: '2016-06-19 05:12:19'
tags:
- nodejs
- expressjs
- javascript
- mocha
- supertest
- test
---

Seems simple enough but when running tests, I ran into a problem where Mocha/Supertest was not waiting for my Express App to fully start running tests.

The relatively easy way to overcome this is to use an event emitter in your Express app and wait for that to complete before starting your tests. This doesn't appear to be documented anywhere obvious. 

You will need to setup the event emitter in your Express app which is the final step before assuming the app has started and is ready. In my case, I had made the DB connection etc and now the call to `app.listen` was my final event. 

Here is an example:

```
app.listen(app_port, app_host, function () {
    console.log('App has started');
    app.emit("appStarted");
});
```

The specific line is:

```
app.emit("appStarted");
```

This creates an event which we can wait on called `appStarted` (this can be changed to whatever you want).

Next we need to wait for this event in our Mocha/Supertest tests (`test.js`).

First we will `require` our Express app. Note: `app` is my main Express file, some people use `server.js` and this value would then become `require('../server')`:

```
app = require('../app');
```

We then need to create a Supertest agent using our Express instance:

```
var request = require("supertest");
var agent = request.agent(app);
```

Then we wait for our Express event using `before()`:

```
before(function (done) {
    app.on("adminMongoStarted", function(){
        done();
    });
});
```

Then we can kick off all our tests. A full test example:

```
var request = require("supertest");
var assert = require('chai').assert;

app = require('../app');
var agent = request.agent(app);

before(function (done) {
    app.on("appStarted", function(){
        done();
    });
});

describe("Add config",function(){
    it("Add a new connection",function(done){
        agent
            .post("/add_config")
            .expect(200)
            .expect("Config successfully added", done);
    });
});
```