---
layout: post
title: Convert HTML or a Website to an image file (C#)
date: '2013-03-08 09:34:00'
tags:
- html
- c
- image
- net
- capture
---

I was looking around for hours looking for the ability to create an image from some HTML I'd scraped from a Website. Note: This solution also works for Websites which are publicly accessible to don't require authentication.

It essentially dynamically sets up a WebBrowser control, loads a URL (waits for it to be completely loaded) and takes an image of the rendered HTML. The solution below creates an image which is the full size of the rendered HTML. You can add padding to the image by adding pixels to the `wb.Width` and `wb.Height` values.

It's quite simple really. Here is the function to render the HTML:

```
    public Bitmap GenerateScreenshot(string url)
    {
        // Load the webpage into a WebBrowser control
        WebBrowser wb = new WebBrowser();
        wb.ScrollBarsEnabled = false;
        wb.ScriptErrorsSuppressed = true;
        wb.Navigate(url);

        // waits for the page to be completely loaded
        while (wb.ReadyState != WebBrowserReadyState.Complete) { Application.DoEvents(); }

        // Take Screenshot of the web pages full width + some padding
        wb.Width = wb.Document.Body.ScrollRectangle.Height;
        // Take Screenshot of the web pages full height
        wb.Height = wb.Document.Body.ScrollRectangle.Height;

        // Get a Bitmap representation of the webpage as it's rendered in the WebBrowser control
        Bitmap bitmap = new Bitmap(wb.Width, wb.Height);
        wb.DrawToBitmap(bitmap, new System.Drawing.Rectangle(0, 0, wb.Width, wb.Height));
        wb.Dispose();

        return bitmap;
    }
```

You can call it by:
```
Bitmap thumbnail = GenerateScreenshot("www.google.com");  thumbnail.Save("C:\image file.bmp", ImageFormat.Bmp);
```

Notes:  You can also use `C:\test.html` rather than `www.google.com` and you can change the output file by adjusting the `ImageFormat` value. 

That's it.