---
layout: simple
title: FAQ
---

Frequently asked questions about Origin.

{:toc}

## What’s the difference between CSS utilities and components?

Utilities do one thing and one thing only. One property, one value. Components comprise of multiple properties and perform a specific interactive function for the user.

Note that utilities can do one thing and one thing only, _no matter what_. There are two ways to do so. The first is to use `!important` within a mixin, like so:

{% highlight scss %}
@include font-family(default, !important);
{% endhighlight %}

The second is to use utility _classes_ in HTML, like so:

{% highlight html %}
<p class="u-font-family--default">
  Charlie Murphy
</p>
{% endhighlight %}

 These classes can be generated in your output CSS file by setting one or more variables in [`_utility-settings.scss`](https://github.com/fac/origin/blob/master/assets/scss/local/utilities/_utility-settings.scss) to `true`. **Setting these to `true` will add weight to your output CSS, so be careful.** Utility classes should only ever generally be used as exceptions; components should always know about their modifiers and states.


## Why the weird syntax?

Clarity. When looking at markup, the difference between a component, a layout component, and a utility is clear.

* `ComponentNames` are clearly identified by their upper camel case syntax
* `l-LayoutComponents` have a specific namesspacing to signal that they’re for layout only
* `u-utility-classes` follow the syntax conventions of regular CSS, as that’s what they manipulate

See [naming conventions]({{ site.baseurl }}/guidance/naming-conventions) for more details.


## When should I create components?

Generally: as soon as possible. It’s never too early to think about creating a component, as doing so is the best way to check whether there’s already an existing component that does some (or all) of what’s needed.

Part of the point of the differing syntax (see above) is to help you decide what kind of component you’re building.
