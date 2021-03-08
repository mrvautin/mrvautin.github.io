---
layout: post
title: Ghost - You are recommended to have at least 150 MB of memory available
permalink: ghost-you-are-recommended-to-have-at-least-150-mb-of-memory-available
date: '2019-06-10 01:25:32'
tags:
- ghost-tag
---

Sometimes running Ghost on lower powered server like a [Digital Ocean $5 droplet](https://m.do.co/c/cd185d01653f) can cause the Ghost CLI to complain about lack of memory: `Message: You are recommended to have at least 150 MB of memory available for smooth operation. It looks like you have ~87 MB available.`

<figure class="kg-card kg-image-card"><img src="{{site.base_url}}/content/images/2019/06/image.png" class="kg-image"></figure>

Adding the `--no-mem-check` quickly bypasses this error and gets you on your way.

Command: `ghost update --no-mem-check`

