---
title: Prototyping
path: tools/prototyping
---

You're welcome to use whatever prototyping tool suits your needs, however we've set up some options that will help you get started quickly.

The power of prototyping in code is that you can create clickable mocks that can be shared via a URL. This can be useful for exploring designs and interactions or for user research sessions. Prototypes can be throw-away, or part of your process for building out new features since you can work with the same CSS we use in production.

## Simple HTML prototype with Primer CSS

Copy the code below and paste it in a HTML file. The CDN link is always linked to the most up to date version of Primer CSS and includes all of the modules in the core, product, and marketing packages.

This method requires no dev environment set up and is useful for when you want to create simple prototypes using Primer CSS.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://unpkg.com/@primer/css@^16.0.0/dist/primer.css" />
  </head>
  <body></body>
</html>
```

## Jekyll prototyping with GitHub CSS and JavaScript

The [Jekyll](http://jekyllrb.com) based prototyping tool pulls in all of GitHub's CSS, which includes all the Primer CSS modules as well as custom CSS modules. It includes GitHub JavaScript and octicons too.

This tool is useful for when you want to build a more complex prototype with multiple pages, interactions and flows, or need to work with GitHub CSS. You can take advantage of everything you get with [Jekyll](http://jekyllrb.com/docs/home/), such as layout templates, includes, and collections.

The [prototype](https://ghe.io/github/prototype) tool lives on our enterprise install. All you need to do is fork the repository to your account and [follow the instructions](https://ghe.io/github/prototype#basics) for publishing.

Having the repository on our enterprise install has the added benefit of making the mocks password protected, but they don't have to be. If you want to publish something publicly you can change configuration and publish to github.com.
