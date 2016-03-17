---
layout: page
title: Tooltips
---

Add tooltips built entirely in CSS to nearly any element. Just add a few classes and an `aria-label` attribute.

In addition, you'll want to specify a direction:

- `.tooltipped-n`
- `.tooltipped-ne`
- `.tooltipped-e`
- `.tooltipped-se`
- `.tooltipped-s`
- `.tooltipped-sw`
- `.tooltipped-w`
- `.tooltipped-nw`

Tooltip classes will conflict with Octicon classes, and as such, must go on a parent element instead of the icon.

{% example html %}
<span class="tooltipped tooltipped-n border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North
</span>
<span class="tooltipped tooltipped-ne border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North East
</span>
<span class="tooltipped tooltipped-e border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip East
</span>
<span class="tooltipped tooltipped-se border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South East
</span>
<span class="tooltipped tooltipped-s border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South
</span>
<span class="tooltipped tooltipped-sw border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South West
</span>
<span class="tooltipped tooltipped-w border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip West
</span>
<span class="tooltipped tooltipped-nw border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North West
</span>
{% endexample %}

### Tooltips No Delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a modifier class you can use to override this. `.tooltipped-no-delay`

{% example html %}
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>
{% endexample %}
