---
layout: page
title: Utilities
---

There are a handful of utilities in Primer for quick behaviors, floats, colors, alignment, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Truncation

`.css-truncate` will shorten text with an ellipsis. The maximum width of the truncated text can be changed by overriding the max-width of the .css-truncate-target.

{% example html %}
<span class="branch-ref css-truncate css-truncate-target">
  really-long-branch-name
</span>
{% endexample %}

You can reveal the entire string on hover with the addition of `.expandable`.

{% example html %}
<span class="css-truncate expandable">
  <span class="branch-ref css-truncate-target">this-is-a-really-long-branch-name</span>
</span>
{% endexample %}

## Counter

Add a number or unread indicator to navs and more with a counter.

{% example html %}
<span class="counter">9</span>
{% endexample %}

## Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="left">.left</code>
  <code class="right">.right</code>
</div>
{% endexample %}

## Centering content

Easily center **block level content** if it's not taking up the full width of the parent. Can be used [on grid columns](/layout/#centered) or any other elements.

{% example html %}
<nav class="menu centered">
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
{% endexample %}


## Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-center">Center aligned text.</p>
{% endexample %}

## Text color

Change the `color` of elements with a class.

{% example html %}
<p class="text-open">Green/open text</p>
<p class="text-closed">Red/closed text</p>
<p class="text-merged">Merged text</p>
<p class="text-pending">Pending text</p>
{% endexample %}

`.text-closed` and `.text-failure` are the same, as well as `.text-open` and `.text-success`.

## Muted link

When you need a hyperlink to not be `$brand-blue`, use a `.muted-link`.

{% example html %}
Here is some example text. <a class="muted-link" href="#">And a muted link.</a>
{% endexample %}

## Flex table

Flex table is a module for creating dynamically resizable elements that always sit on the same horizontal line (e.g., they never break to a new line). Using table styles in our CSS means it's cross browser friendly back to at least IE9.

Additional `margin` or `padding` may be required to properly space content.

{% example html %}
<div class="flex-table">
  <div class="flex-table-item flex-table-item-primary">
    <input class="input-block" type="text" placeholder="Long flexible input form">
  </div>
  <div class="flex-table-item">
    <button class="btn" type="button">Button</button>
  </div>
</div>
{% endexample %}

## Margins

Spacing utilities are immutable classes designed to do one thing really well as a means to reduce the frequency of highly repetitive declarations in CSS.

{% highlight scss %}
.m-a-0 { margin:        0 !important; }
.m-t-0 { margin-top:    0 !important; }
.m-r-0 { margin-right:  0 !important; }
.m-b-0 { margin-bottom: 0 !important; }
.m-l-0 { margin-left:   0 !important; }
.m-x-0 { margin-right:  0 !important; margin-left:   0 !important; }
.m-y-0 { margin-top:    0 !important; margin-bottom: 0 !important; }

.m-a { margin:        $spacer !important; }
.m-t { margin-top:    $spacer-y !important; }
.m-r { margin-right:  $spacer-x !important; }
.m-b { margin-bottom: $spacer-y !important; }
.m-l { margin-left:   $spacer-x !important; }
.m-x { margin-right:  $spacer-x !important; margin-left: $spacer-x !important; }
.m-y { margin-top:    $spacer-y !important; margin-bottom: $spacer-y !important; }
.m-x-auto { margin-right: auto !important; margin-left: auto !important; }

.m-a-md { margin:        ($spacer * 1.5) !important; }
.m-t-md { margin-top:    ($spacer-y * 1.5) !important; }
.m-r-md { margin-right:  ($spacer-y * 1.5) !important; }
.m-b-md { margin-bottom: ($spacer-y * 1.5) !important; }
.m-l-md { margin-left:   ($spacer-y * 1.5) !important; }
.m-x-md { margin-right:  ($spacer-x * 1.5) !important; margin-left:   ($spacer-x * 1.5) !important; }
.m-y-md { margin-top:    ($spacer-y * 1.5) !important; margin-bottom: ($spacer-y * 1.5) !important; }

.m-a-lg { margin:        ($spacer * 3) !important; }
.m-t-lg { margin-top:    ($spacer-y * 3) !important; }
.m-r-lg { margin-right:  ($spacer-y * 3) !important; }
.m-b-lg { margin-bottom: ($spacer-y * 3) !important; }
.m-l-lg { margin-left:   ($spacer-y * 3) !important; }
.m-x-lg { margin-right:  ($spacer-x * 3) !important; margin-left:   ($spacer-x * 3) !important; }
.m-y-lg { margin-top:    ($spacer-y * 3) !important; margin-bottom: ($spacer-y * 3) !important; }
{% endhighlight %}
