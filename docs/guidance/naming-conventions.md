---
layout: page
title: Naming conventions
---

## Components

{% highlight scss %}
.ComponentName {}
{% endhighlight %}

Upper camel case syntax because they’re the heroes of the show.


## Layout components

{% highlight scss %}
.l-ComponentName {}
{% endhighlight %}

Given a specific `l-` namespacing to differentiate them from normal components.


## Utilities

{% highlight scss %}
@include background-color {}
{% endhighlight %}

Follows regular CSS syntax, as that’s all the simple property/value nature of utilities are manipulating.


## Variables
Match the naming convention of utilities or components when creating global variables:

{% highlight css %}
$padding--action: $spacing--5;
{% endhighlight %}
