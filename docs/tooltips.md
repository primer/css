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

Remember, `aria-label` and tooltip classes must go directly on `<button>` and `<a>` elements. Tooltip classes also conflict with Octicon classes, and as such, must go on a parent element instead of the icon.

{% example html %}
<span class="tooltipped tooltipped-n" aria-label="This is the tooltip.">
  Text with a tooltip
</span>
{% endexample %}
