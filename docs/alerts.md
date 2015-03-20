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

## With icon

Add an icon to the left of the flash message to give it some funky fresh attention. Just add `.flash-with-icon` and your Octicon.

{% example html %}
<div class="flash flash-with-icon">
  <span class="octicon octicon-alert"></span>
  Flash message with an icon goes here.
</div>
{% endexample %}

## Dismiss

Add a JavaScript enabled (via Crema) dismiss (close) icon on the right of any flash message.

{% example html %}
<div class="flash">
  <span class="octicon octicon-x flash-close js-flash-close"></span>
  Dismissable flash message goes here.
</div>
{% endexample %}
