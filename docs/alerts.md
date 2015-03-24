---
layout: page
title: Alerts
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

{% example html %}
<div class="flash">
  Flash message goes here.
</div>
{% endexample %}

You can put multiple paragraphs of text in a flash message—the last paragraph's bottom `margin` will be automatically override.

{% example html %}
<div class="flash">
  <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</div>
{% endexample %}

Should the need arise, you can quickly space out your flash message from surrounding content with a `.flash-messages` wrapper. *Note the extra top and bottom margin in the example below.*

{% example html %}
<div class="flash-messages">
  <div class="flash">
    Flash message goes here.
  </div>
</div>
{% endexample %}

## Variations

Add `.flash-warn` or `.flash-error` to the flash message to make it yellow or red, respectively.

{% example html %}
<div class="flash flash-warn">
  Flash message goes here.
</div>
{% endexample %}

{% example html %}
<div class="flash flash-error">
  Flash message goes here.
</div>
{% endexample %}

## Add an icon

Add an icon to the left of the flash message to give it some funky fresh attention. Just add your Octicon and Primer does the magic.

{% example html %}
<div class="flash">
  <span class="octicon octicon-alert"></span>
  Flash message with an icon goes here.
</div>
{% endexample %}

## Sizing

Sometimes you need to display a site-wide banner or global notification, and it's not as important as a standard notification. Use the modifier class `.flash-sm` to shorten your notification vertically.

{% example html %}
<div class="flash flash-sm">
  Flash message goes here.
</div>
{% endexample %}

## Dismiss a flash

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

{% example html %}
<div class="flash">
  <span class="octicon octicon-x flash-close js-flash-close"></span>
  Dismissable flash message goes here.
</div>
{% endexample %}

## Adding other actions to flashes

If you need a descriptive action on your flash message, just add a button with `.btn`.

{% example html %}
<div class="flash">
  Actionable flash message goes here.
  <button class="btn">Click this</button>
</div>
{% endexample %}

On small flashes, just make sure to use a `.btn-sm`:

{% example html %}
<div class="flash flash-sm">
  Small, actionable flash message goes here.
  <button class="btn btn-sm">Click this</button>
</div>
{% endexample %}
