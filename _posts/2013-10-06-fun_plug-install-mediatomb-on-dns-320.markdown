---
layout: post
title: fun_plug install Mediatomb on dns-320
permalink: fun_plug-install-mediatomb-on-dns-320
date: '2013-10-06 22:00:00'
tags:
- fun_plug
- mediatomb
- dns-320
- optware
---

Mediatomb is apparently pre-installed.. It doesn't seem to be on my NAS.

The easiest way to install Mediatomb is via Optware.

To install Optware you simply need to run:

    # wget http://wolf-u.li/u/233-O/ffp/start/optware.sh
    # chmod a+x /ffp/start/optware.sh
    # /ffp/start/optware.sh start

You can then install Mediatomb by running:

    # /opt/bin/ipkg install mediatomb

Then copy the Mediatomb startup script to "start":
    
    # cp /opt/etc/init.d/mediatomb /ffp/start/mediatomb.sh

Then set the correct permissions on the "mediatomb.sh file:

    # chmod a+x /ffp/start/mediatomb.sh

You need to change one of the Mediatomb configs to allow autostart:
    
    # vi /opt/etc/default/mediatomb

Ensure *MT_ENABLE=true*

You can now start Mediatomb by:

    # sh /ffp/start/mediatomb.sh start

You can now browse Mediatomb via the Web Interface:

    http://localhost:4915