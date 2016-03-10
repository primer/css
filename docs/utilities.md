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

## Background colors

Fill in an element with background colors.

{% example html %}
<span class="d-inline-block p-3 bg-white">.bg-white</span>
<span class="d-inline-block p-3 bg-gray-dark text-white">.bg-gray-dark</span>
<span class="d-inline-block p-3 bg-blue">.bg-blue</span>
<span class="d-inline-block p-3 bg-blue-light">.bg-blue-light</span>
<span class="d-inline-block p-3 bg-gray">.bg-gray</span>
<span class="d-inline-block p-3 bg-gray-light">.bg-gray-light</span>
<span class="d-inline-block p-3 bg-green">.bg-green</span>
<span class="d-inline-block p-3 bg-red">.bg-red</span>
{% endexample %}

## Text color

Change the `color` of elements with a class.

{% example html %}
<span class="text-blue">.text-blue</span>
<span class="text-red">.text-red</span>
<span class="text-gray-light">.text-gray-light</span>
<span class="text-gray">.text-gray</span>
<span class="text-gray-dark">.text-gray-dark</span>
<span class="text-green">.text-green</span>
<span class="text-orange">.text-orange</span>
<span class="text-purple">.text-purple</span>
<span class="text-white bg-gray-dark">.text-white</span>
<span class="text-inherit">.text-inherit</span>
{% endexample %}

## Link colors

The default link color is blue, but there are a couple of other options to use for deemphasized links. On `:hover` all links will turn blue.

{% example html %}
<p>Here is some example text. <a class="link-blue" href="#">And a .link-blue</a></p>
<p>Here is some example text. <a class="link-gray" href="#">And a .link-gray</a></p>
<p>Here is some example text. <a class="link-gray-dark" href="#">And a .link-gray-dark</a></p>
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

## Margin

You have the option to set margin sizes from `0-5`. You also have the optional direction using `t,r,b,l,x,y`.

{% example html %}
<div class="d-inline-block border p-2 mr-0">.mr-0</div>
<div class="d-inline-block border p-2 mr-1">.mr-1</div>
<div class="d-inline-block border p-2 mr-2">.mr-2</div>
<div class="d-inline-block border p-2 mr-3">.mr-3</div>
<div class="d-inline-block border p-2 mr-4">.mr-4</div>
<div class="d-inline-block border p-2 mr-5">.mr-5</div>
<div class="d-inline-block border p-2 mx-2">.mx-5</div>
<div class="d-inline-block border p-2 my-2">.my-5</div>
<div class="d-inline-block border p-2 m-2">.m-2</div>
{% endexample %}

## Padding

You have the option to set padding sizes from `0-5`. You also have the optional direction using `t,b,x,y`.

{% example html %}
<div class="d-inline-block border pt-0">.pt-0</div>
<div class="d-inline-block border pt-1">.pt-1</div>
<div class="d-inline-block border pt-2">.pt-2</div>
<div class="d-inline-block border pt-3">.pt-3</div>
<div class="d-inline-block border pt-4">.pt-4</div>
<div class="d-inline-block border pt-5">.pt-5</div>
<div class="d-inline-block border p-3">.p-3</div>
<div class="d-inline-block border px-3">.px-3</div>
<div class="d-inline-block border py-3">.py-3</div>
{% endexample %}

## Positioning

We include classes for setting positioning as well as setting the `top-0, right-0, bottom-0, left-0` to zero. Your options for positioning are `position-static, position-absolute, position-relative, position-fixed`.

{% example html %}
<div class="p-3 border position-relative">
  .position-relative
  <div class="border position-absolute right-0 top-0 p-1">.position-absolute.right-0.top-0</div>
</div>
{% endexample %}

## Display

You can set your display with these utilities.

{% example html %}
<span class="border text-center d-block p-2">.d-block</span>
<span class="border text-center d-inline p-2">.d-inline</span>
<span class="border text-center d-inline-block p-2">.d-inline-block</span>
<span class="border text-center d-none p-2">.d-none</span>
{% endexample %}

## Borders

With these border utilities you can set common borders.

{% example html %}
<div class="border p-3 mb-3">.border</div>
<div class="border-top p-3 mb-3">.border-top</div>
<div class="border-right p-3 mb-3">.border-right</div>
<div class="border-bottom p-3 mb-3">.border-bottom</div>
<div class="border-left p-3 mb-3">.border-left</div>
{% endexample %}

## Border colors

Add these classes with `.border` and you'll have some common border colors.

{% example html %}
<div class="border p-3 mb-3 border-blue">.border-blue</div>
<div class="border p-3 mb-3 border-gray-light">.border-gray-light</div>
<div class="border p-3 mb-3 border-gray-dark">.border-gray-dark</div>
{% endexample %}

## No borders

To remove a border from one side you can use `-0` postfix.

{% example html %}
<div class="border border-0 p-3 mb-3">.border-0</div>
<div class="border border-top-0 p-3 mb-3">.border-top-0</div>
<div class="border border-right-0 p-3 mb-3">.border-right-0</div>
<div class="border border-bottom-0 p-3 mb-3">.border-bottom-0</div>
<div class="border border-left-0 p-3 mb-3">.border-left-0</div>
{% endexample %}
