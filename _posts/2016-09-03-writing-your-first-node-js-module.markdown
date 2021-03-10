---
layout: post
title: Writing your first Node.js module
permalink: writing-your-first-node-js-module
date: '2016-09-03 01:14:52'
tags:
- npm
- nodejs
- javascript
- module
- example
- guide
- starting
---

This isn't meant to be an exhaustive guide on how to write an NPM module. This guide is meant to be a simple working example where you can see a basic working module and easily adapt this to create your own module. 

You can see the basic structure is really easy to understand. We are exposing the `multiply()` function as a public function by returning in the `module.exports`. The other function aptly named `nonPublic()` is called by the `multiply()` function but cannot be called publicly. More on this below.

You can see our `multiply()` function takes two values, multiplies them and returns a label from our `nonPublic()` function, followed by our multiplied value. Easy!


File: `multiply.js`

{% highlight javascript %}
// require any modules

module.exports = {
	multiply: function (val1, val2, callback){
        var returnedValue = val1 * val2;
		callback(null, nonPublic() + returnedValue);
	}
};

function nonPublic(){
    return 'Result: ';
}
{% endhighlight %}

---

File: `test.js`

Using our new module locally for testing is easy:

{% highlight javascript %}
var mod = require('./module');

console.log(mod.nonPublic());

mod.multiply(5, 10, function(err, result){
    console.log(result);
});
{% endhighlight %}

The first line requires our local module. **Note: the `./` value for modules located in the same directory.**

After we have required it we can go ahead and use it. First we call the `nonPublic()` function to show it doesn't work publicly (this outputs an error), then call the `multiply()` function. 

We pass in `5` and `10` to be multiplied together and we write the result to the console. 

To run our `test.js` script we simply run the following in our console and observe the output: 

`node test.js`

#### Conclusion
This is a really basic module which outlines the basic steps to get started on writing your first NPM module.

One of my **slightly (hardly)** more advanced (has options etc) modules `metaget` can be found here as further reading: [https://github.com/mrvautin/metaget](https://github.com/mrvautin/metaget)