---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default buttons

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

{% example html %}
<button class="btn" type="button">Button button</button>
<a class="btn" href="#" role="button">Link button</a>
{% endexample %}

You can find them in two sizes: the default `.btn` and the smaller `.btn-sm`.

{% example html %}
<button class="btn" type="button">Button</button>
<button class="btn btn-sm" type="button">Small button</button>
{% endexample %}

## Primary

Primary buttons are green and are used to indicate the *primary* action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

{% example html %}
<button class="btn btn-primary" type="button">Primary button</button>
<button class="btn btn-sm btn-primary" type="button">Small primary button</button>
{% endexample %}

## Danger

Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.btn-danger`.

{% example html %}
<button class="btn btn-danger" type="button">Danger button</button>
<button class="btn btn-sm btn-danger" type="button">Small danger button</button>
{% endexample %}

## Outline

Outline buttons downplay an action as they appear like boxy links. Just add `.btn-outline` and go.

{% example html %}
<button class="btn btn-outline" type="button">Outline button</button>
<button class="btn btn-sm btn-outline" type="button">Outline button</button>
{% endexample %}

## Disabled state

Disable `<button>` elements with the boolean `disabled` attribute and `<a>` elements with the `.disabled` class.

{% example html %}
<button class="btn" type="button" disabled>Disabled button</button>
<a class="btn disabled" href="#" role="button">Disabled button</a>
{% endexample %}

Similar styles are applied to primary, danger, and outline buttons:

{% example html %}
<button class="btn btn-primary" type="button" disabled>Disabled button</button>
<a class="btn btn-primary disabled" href="#" role="button">Disabled button</a>
{% endexample %}

{% example html %}
<button class="btn btn-danger" type="button" disabled>Disabled button</button>
<a class="btn btn-danger disabled" href="#" role="button">Disabled button</a>
{% endexample %}

{% example html %}
<button class="btn btn-outline" type="button" disabled>Disabled button</button>
<a class="btn btn-outline disabled" href="#" role="button">Disabled button</a>
{% endexample %}

## Block buttons

Make any button full-width by adding `.btn-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`, and centers the button text.

{% example html %}
<p><button class="btn btn-block" type="button">Block button</button></p>
<p><button class="btn btn-sm btn-block" type="button">Small block button</button></p>
{% endexample %}

## With counts

You can easily append a count to a **small button**. Add the `.with-count` class to the `.btn-sm` and then add the `.social-count` after the button.

**Be sure to clear the float added by the additional class.**

{% example html %}
<div class="clearfix">
  <a class="btn btn-sm btn-with-count" href="#" role="button">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="#">6</a>
</div>
{% endexample %}

You can also use the [counter](../utilities/#counter) component within buttons:

{% example html %}
<button class="btn" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-primary" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-danger" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-outline" type="button">
  Button
  <span class="counter">12</span>
</button>
{% endexample %}

## Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.btn-group` and the buttons will be rounded and spaced automatically.

{% example html %}
<div class="btn-group">
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
</div>
{% endexample %}

Add `.button_to` to `<form>`s within `.btn-group`s for proper spacing and rounded corners.

**Heads up!** This class name is inconsistent and will change in the next major version.

{% example html %}
<div class="btn-group">
  <form class="button_to">
    <button class="btn" type="button">Button in a form</button>
  </form>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>
{% endexample %}

## Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

{% example html %}
<span class="hidden-text-expander">
  <a href="#">&hellip;</a>
</span>
{% endexample %}

You can also make the expander appear inline by adding `.inline`.
