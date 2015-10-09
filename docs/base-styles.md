---
layout: page
title: Base styles
---

These are the base rules upon which everything in Origin is built.

## HTML5 doctype

Origin makes use of certain HTML elements and CSS properties that **require** the use of the HTML5 doctype. Include it at the beginning of all your views/pages.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Box-sizing

We reset `box-sizing` to `border-box` for every element in Origin. This allows us to more easily assign widths to elements that also have `padding` and `border`s.

## Built on Normalize

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices.

[**View the source `_base.scss` for more information**](https://github.com/fac/origin/blob/master/assets/scss/local/base/_base.scss)
