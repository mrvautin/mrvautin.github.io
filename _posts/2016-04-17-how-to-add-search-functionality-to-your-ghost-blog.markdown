---
layout: post
title: How to add search functionality to your Ghost blog
permalink: how-to-add-search-functionality-to-your-ghost-blog
date: '2016-04-17 00:34:38'
tags:
- blog
- ghost-tag
- search
- lunr
- ghosthunter
- ghost-api
- javascript
---

Adding search to your Ghost blog is relatively simple but requires a small amount of skill to edit your theme files. You can see how search works on the homepage of this [blog](https://mrvautin.com).

First of all, you need to turn on the Ghost Public API (which by default is turned off). You will want to jump into your Ghost admin `www.myblog.com/ghost`, select `Labs` from the menu, scroll to the bottom and check the box `Public API`. 

Now this is turned on, our code will be able to interact with the API to index and search posts. 

We are going to use the following Github repository by [Windyo](https://github.com/Windyo) here: [https://github.com/Windyo/ghostHunter/](https://github.com/Windyo/ghostHunter/) this is a Fork of the popular [ghostHunter](https://github.com/jamalneufeld/ghostHunter) module but has been updated to use the Ghost API, rather than using and hacking RSS feeds. `Ghosthunter` uses the extremely powerful [Lunr](https://github.com/olivernn/lunr.js) library to index your posts and provide the best, weighted keyword search results.

You will need to download the file `jquery.ghostHunter.min.js` from the Github repository and add it to your theme: `/content/themes/mytheme/assets/js/`.

You will then need to add a reference to that file in: `/content/themes/mytheme/default.hbs`

{% highlight javascript %}
{% raw %}
 <script type="text/javascript" src="{{asset "js/jquery.ghostHunter.min.js"}}"></script>
 {% endraw %}
{% endhighlight %}

**Note: Add it at the bottom of the file after the jQuery reference** 

Once you have done that you can start adding the search box to your page(s).

You will need some javascript which calls the Ghosthunter module to display the results of the search. You will need to add the following code to your `/content/themes/mytheme/assets/js/index.js` file. 

**There are various options on the Ghosthunter module. I've decided to display results as they are typed and have set the `onKeyUp` to `true` and have chosen to hide the number of results by setting `displaySearchInfo` to false. Check the [Github repository](https://github.com/Windyo/ghostHunter/) for more options.**

{% highlight javascript %}
$(".search-results").addClass("results-hide");
$("#search-field").ghostHunter({
    results: "#search-results",
    onKeyUp: true,
    displaySearchInfo: false,
    result_template : "<a href='{{link}}'><li class='list-group-item'>{{title}}</li></a>",
    before: function(){ 
        $(".search-results").removeClass("results-hide");
    }
}); 
{% endhighlight %}

**Note: My theme is using Twitter Bootstrap so you will see references to `list-group-item` etc which you can remove and add your own CSS styling.**

Next thing you need to do is add some simple CSS to your `/content/themes/mytheme/assets/js/screen.css` to format the search and results box.

{% highlight css %}
.search-box{
    margin-bottom: 10px;
}

.search-results {
    position:absolute;
    z-index: 1000;
}

.search-button{
    background-color: #1B95E0;
    color: white;
}

.results-hide{
    display: none;
}
{% endhighlight %}

**Note: You can edit styling as you wish.**

Lastly you will need to add the search box to your template file: `/content/themes/mytheme/index.hbs`. You can also add this to your `post.hbs` view too if you wish.

{% highlight html %}
<div class="row">
    <div class="search-box col-xs-12 col-sm-12 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
        <div class="input-group">
            <input type="text" id="search-field" class="form-control input-lg" placeholder="Search for...">
            <span class="input-group-btn">
                <button class="btn btn-default search-button btn-lg" type="button">Search!</button>
            </span>               
        </div>
    </div>
</div>
<section class="search-results col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2" >    
        <ul id="search-results" class="search-results col-md-12" class="list-group"></ul>
</section>
{% endhighlight %}

Please let me know in the comments what you think.