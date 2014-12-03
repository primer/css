---
layout: page
title: Utilities
---

There are a handful of utilities in Primer for quick behaviors, floats, colors, alignment, and more.

### Truncation

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

### Counter

Add a number or unread indicator to navs and more with a counter.

{% example html %}
<span class="counter">9</span>
{% endexample %}

### Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="left">.left</code>
  <code class="right">.right</code>
</div>
{% endexample %}

### Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
{% endexample %}

### Text color

Change the `color` of elements with a class.

{% example html %}
<p class="text-open">Green/open text</p>
<p class="text-closed">Red/closed text</p>
<p class="text-merged">Merged text</p>
<p class="text-pending">Pending text</p>
{% endexample %}

`.text-closed` and `.text-failure` are the same, as well as `.text-open` and `.text-success`.
