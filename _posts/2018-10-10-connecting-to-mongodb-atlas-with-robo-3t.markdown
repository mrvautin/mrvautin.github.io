---
layout: post
title: Connecting to MongoDB Atlas with Robo 3T / Robomongo
permalink: connecting-to-mongodb-atlas-with-robo-3t
date: '2018-10-10 13:09:18'
tags:
- mongodb
- atlas
---

Sometimes you may want to do development on your database and connect via a GUI to test results. Connecting to MongoDB Atlas is very easy with Robo 3T / Robomongo, simply follow these steps.

1. Setup your first DNS in your cluster
<figure class="kg-card kg-image-card"><img src="{{site.BASE_PATH}}/content/images/2018/10/image.png" class="kg-image"></figure>

2. Fill in Database as "admin", Username/Password as per the user setup in MongoDB Atlas.

<figure class="kg-card kg-image-card"><img src="{{site.BASE_PATH}}/content/images/2018/10/image-1.png" class="kg-image"></figure>

3. Skip SSH tab

4. Click "Use SSL protocol" then select "Self-signed Certificate" from the dropdown.

<figure class="kg-card kg-image-card"><img src="{{site.BASE_PATH}}/content/images/2018/10/image-3.png" class="kg-image"></figure>

5. Click "Test" button and then "Save"and you are done!

