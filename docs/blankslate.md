---
layout: page
title: Blankslate
---

Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Basic example

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

{% example html %}
<div class="blankslate">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

## With Octicons

When it helps the message, include `.mega-octicon`s as the first elements in the blank slate. Be sure to use relevant icons.

{% example html %}
<div class="blankslate">
  <span class="mega-octicon octicon-git-commit"></span>
  <span class="mega-octicon octicon-tag"></span>
  <span class="mega-octicon octicon-git-branch"></span>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

## Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Fixed width

Narrows the blankslate container to not occupy the entire available width.

{% example html %}
<div class="blankslate has-fixed-width">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### Capped

Removes the `border-radius` on the top corners.

{% example html %}
<div class="blankslate capped">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### Spacious

Significantly increases the vertical padding.

{% example html %}
<div class="blankslate spacious">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### No background

Removes the `background-color` and `border`.

{% example html %}
<div class="blankslate clean-background">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}
