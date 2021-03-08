---
layout: post
title: Adding Facebook Open Graph Metadata to your website
permalink: adding-facebook-open-graph-metadata-to-your-website
date: '2014-12-31 21:44:00'
tags:
- facebook
- open-graph
- seo
- social
- meta
---

It is a good idea for the sake of SEO to ensure your website has all the necessary Meta tags. This ensures the search engines and other services can crawl or interact with your website in an efficient manner.

Some of the Meta tags you will want to set are called [Open Graph](http://ogp.me/) Metadata. When someone shares a link to your website on Facebook, you are telling Facebook what title, description, image etc you want to show in a persons feed. This means when someone shares a status with a URL to your website, Facebook will look at the URL and pull all the Open Graph Metadata in order to show the title, description, and images etc. 

All Metadata should be found within the `<head>` tag of your HTML document. The basic code of a Metadata is:

    <meta property="property_value" content="content_value"/>

Where `property_value` is the actual Metadata we want to set and `content_value` is the actual value you would like.

A list of Open Graph properties can be found here: [http://ogp.me/](http://ogp.me/)

The main ones you want to concentrate on are:

#### Property: og:url

The URL of the object being embedded into Facebook. This URL needs to be unique as it is used to collate Likes and shares on the object. The URL shouldn't include any session variables or GET parameters. 

**Example:**

    <meta property="og:url" content="http://mrvautin.com/Adding-Facebook-Open-Graph-Metadata-to-your-website"/>

#### Property: og:title

The title, headline or name of the object/article. This is shown when the URL/object is embedded into Facebook.

**Example:**

    <meta property="og:title" content="Adding Facebook Open Graph Metadata to your website"/>

#### Property: og:description

A two sentence description/summary of the article/URL. 

**Example:**

    <meta property="og:description" content="A short two sentence description of the article."/>

#### Property: og:image

Here you can include a link to an image you want to show when a URL to your website is shared. Facebook recommends an image at least 600x315 pixels but recommends using a larger image and letting them scale it accordingly. They recommend using an image with a 1.91:1 aspect ratio to avoid cropping. Note: images cannot exceed 5MB in size.

**Example:**

    <meta property="og:image" content="http://mrvautin.com/path_to_image.png"/>

#### Property: og:type

This is the type of URL being shared. Facebook outlines a long list of [og:type](https://developers.facebook.com/docs/reference/opengraph/) options but for a general website/blog you will want to use `article`.

**Example:**

    <meta property="og:type"   content="article" />

#### Full example
    <html>
    <head>
    <meta property="og:url" content="http://mrvautin.com/Adding-Facebook-Open-Graph-Metadata-to-your-website"/>
    <meta property="og:title" content="Adding Facebook Open Graph Metadata to your website"/>
    <meta property="og:description" content="Adding Facebook Open Graph Metadata to your website"/>
    <meta property="og:image" content="http://mrvautin.com/path_to_image.png"/>
    <meta property="og:type" content="article" />
    </head>
    <body>
          Content
    </body>
    </html>
