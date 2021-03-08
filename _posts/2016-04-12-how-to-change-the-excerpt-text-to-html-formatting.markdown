---
layout: post
title: How to change the post excerpt of your Ghost theme to HTML
permalink: how-to-change-the-excerpt-text-to-html-formatting
date: '2016-04-12 00:50:52'
tags:
- theme
- ghost-tag
- excerpt
- html
---

The Casper theme by default has an excerpt with all HTML tags / formatting removed. You can change this in your theme by editing the `/content/themes/mytheme/partials/loop.hbs` file of your theme.

In the `loop.hbs` file you will see:

{% highlight handlebars %}
{% raw %}
{{excerpt words="26"}}
{% endraw %}
{% endhighlight %}

You will need to change the word `excerpt` to `content`. The new code will be:

{% highlight handlebars %}
{% raw %}
{{content words="26"}}
{% endraw %}
{% endhighlight %}

If you are wanting to change the length (amount of words) of the excerpt please see [here](https://mrvautin.com/how-to-change-the-excerpt-length-in-your-ghost-theme/).