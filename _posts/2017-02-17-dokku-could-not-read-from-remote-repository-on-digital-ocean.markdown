---
layout: post
title: Dokku - Could not read from remote repository on digital ocean
permalink: dokku-could-not-read-from-remote-repository-on-digital-ocean
date: '2017-02-17 08:44:11'
tags:
- dokku
- digital-ocean
---

Firing up a digital ocean droplet with one-click dokku should be easy right? Yeah well if you get this error it's due to your SSH keys not being added correctly either when setting up the droplet or if you did it yourself.

You simply need to run:

`cat ~/.ssh/id_rsa.pub | ssh root@droplet_ip_address "sudo sshcommand acl-add dokku laptop"`

