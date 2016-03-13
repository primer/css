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

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

{% example html %}
<div class="blankslate">
  <span class="mega-octicon octicon-git-commit blankslate-icon"></span>
  <span class="mega-octicon octicon-tag blankslate-icon"></span>
  <span class="mega-octicon octicon-git-branch blankslate-icon"></span>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

## Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Fixed width

Narrows the blankslate container to not occupy the entire available width.

{% example html %}
<div class="blankslate blankslate-fixed-width">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### Capped

Removes the `border-radius` on the top corners.

{% example html %}
<div class="blankslate blankslate-capped">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### Spacious

Significantly increases the vertical padding.

{% example html %}
<div class="blankslate blankslate-spacious">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### Large

Increases the size of the text in the blankslate

{% example html %}
<div class="blankslate blankslate-large">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}

### No background

Removes the `background-color` and `border`.

{% example html %}
<div class="blankslate blankslate-clean-background">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
{% endexample %}
