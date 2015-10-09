---
layout: page
title: Segmented Control
---

A segmented control is a horizontal control made of multiple segments, each segment functioning as a discrete button. Segment text gets truncated when too long to fit into the width of the segment.

## Default
Contrasts evenly with other form elements

{% example html %}
<div class="SegmentedControl">
  <button class="SegmentedControl-segment SegmentedControl-segment--selected">Selected</button>
  <button class="SegmentedControl-segment">Unselected</button>
  <button class="SegmentedControl-segment">Unselected</button>
</div>
{% endexample %}


## Low-contrast variant
To be used when the control is disabled

{% example html %}
<div class="SegmentedControl SegmentedControl--contrastLow">
  <button class="SegmentedControl-segment SegmentedControl-segment--selected">Selected</button>
  <button class="SegmentedControl-segment">Unselected</button>
  <button class="SegmentedControl-segment">Unselected</button>
</div>
{% endexample %}


## High-contrast variant
To be used against a base colour background (like the NavBar)

{% example html %}
<div class="SegmentedControl SegmentedControl--contrastHigh">
  <button class="SegmentedControl-segment SegmentedControl-segment--selected">Selected</button>
  <button class="SegmentedControl-segment">Unselected</button>
  <button class="SegmentedControl-segment">Unselected</button>
</div>
{% endexample %}
