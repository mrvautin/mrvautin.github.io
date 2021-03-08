---
layout: post
title: 'authorStats : Get your NPM package download statistics in an easy to read
  command line table'
date: '2016-05-06 10:37:13'
tags:
- nodejs
- npm
- statistics
- package
- authorstats
- cli
- javascript
---

`authorStats` fetches your daily/weekly/monthly download stats for all your authored NPM packages and outputs a nice table right in your command line.

### Installation

It's best to install the package globally:

```
npm install author-stats -g
```

### Usage

```
authorStats <npm username>
```

Where `<npm username>` is the username on the NPM website. My profile is: `https://www.npmjs.com/~mrvautin` and username is `mrvautin`.

A nice command line table with the daily, weekly and monthly download numbers of all your packages will be output to your terminal.

Note: If you have a lot of packages you will need to be patient while `authorStats` fetches the data.

![authorStats](https://raw.githubusercontent.com/mrvautin/mrvautin.github.io/master/images/authorStats/exampleoutput.png "authorStats output")