---
layout: page
title: Button
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Default buttons

When using a `<button>` element, always specify a `type`. When using a `<a>` element, always add `role="button"` for accessibility.

{% example html %}
<button class="Button" type="button">Button button</button>
<a class="Button" href="#" role="button">Link button</a>
{% endexample %}

You can find them in three sizes: standard `.Button`, `.Button--large`, and `.Button--small`.

{% example html %}
<button class="Button" type="button">Button</button>
<button class="Button Button--large" type="button">Large button</button>
<button class="Button Button--small" type="button">Small button</button>
{% endexample %}


## Primary

Primary buttons are used to indicate the **one** primary action on a view/page. Small buttons can also be given primary styling; remember to list the classes in alphabetical order.

{% example html %}
<button class="Button Button--primary" type="button">Primary button</button>
<button class="Button Button--primary Button--large" type="button">Large primary button</button>
<button class="Button Button--primary Button--small" type="button">Small primary button</button>
{% endexample %}


## Negative

Negative buttons have red label text on `:hover`, `:active`, and `:focus` states. They help reiterate that the intended action can have negative consequences (e.g. disabling or cancelling something).

{% example html %}
<button class="Button Button--negative" type="button">Negative button</button>
<button class="Button Button--negative Button--large" type="button">Large negative button</button>
<button class="Button Button--negative Button--small" type="button">Small negative button</button>
{% endexample %}


## Danger

Danger buttons always have red label text. They help reiterate that the intended action is potentially dangerous (e.g. deleting something).

{% example html %}
<button class="Button Button--danger" type="button">Danger button</button>
<button class="Button Button--danger Button--large" type="button">Large danger button</button>
<button class="Button Button--danger Button--small" type="button">Small danger button</button>
{% endexample %}


## Neutral

Neutral buttons have gray label text. They’re useful when a button shouldn’t command as much attention as normal.

{% example html %}
<button class="Button Button--neutral" type="button">Neutral button</button>
<button class="Button Button--neutral Button--large" type="button">Large neutral button</button>
<button class="Button Button--neutral Button--small" type="button">Small neutral button</button>
{% endexample %}


## Outline

Outline buttons reduce the overall emphasis of a button in an interace, while still retaining the same functionality.

{% example html %}
<button class="Button Button--outline" type="button">Outline button</button>
<button class="Button Button--outline Button--large" type="button">Large outline button</button>
<button class="Button Button--outline Button--small" type="button">Small outline button</button>
{% endexample %}


## Disabled state

Disable `<button>` elements with the `.is-disabled` class and boolean `disabled` attribute. `<a>` elements only need the `.is-disabled` class. The `.is-disabled` is really a utility class, so should be placed after any other component-specific `.Button` classes.

{% example html %}
<button class="Button is-disabled" type="button" disabled>Disabled button</button>
<a class="Button is-disabled" href="#" role="button">Disabled button</a>
{% endexample %}


## Block buttons

Make any button assume the full-width of it’s parent.

{% example html %}
<p><button class="Button Button--block" type="button">Block button</button></p>
<p><button class="Button Button--block Button--large" type="button">Large block button</button></p>
<p><button class="Button Button--block Button--small" type="button">Small block button</button></p>
{% endexample %}


## Button groups

Group buttons by wrapping them in a `.ButtonGroup`.

{% example html %}
<div class="ButtonGroup">
  <button class="Button" type="button">Button</button>
  <button class="Button" type="button">Button</button>
  <button class="Button" type="button">Button</button>
</div>

<div class="ButtonGroup">
  <button class="Button Button--outline" type="button">Button</button>
  <button class="Button Button--outline" type="button">Button</button>
  <button class="Button Button--outline" type="button">Button</button>
</div>
{% endexample %}

{% example html %}
<div class="ButtonGroup">
  <button class="Button" type="button">Button</button>
  <button class="Button" type="button">Button</button>
</div>

<button class="Button Button--primary" type="button">Button</button>
{% endexample %}


## Different fonts

Buttons can be set using different fonts, if required.

{% example html %}
<button class="Button" type="button">Default button</button>
<button class="Button Button--legacy" type="button">Helvetica button</button>
<button class="Button Button--editorial" type="button">Effra button</button>
{% endexample %}


## Multiple labels

Buttons can have multiple labels. Secondary labels can be useful to lead into primary labels when the button represents a major action.

{% example html %}
<button class="Button Button--large" type="button">
  <span class="Button-label Button-label--secondary">
    Button secondary label
  </span>
  <span class="Button-label Button-label--primary">
    Button primary label
  </span>
</button>

<button class="Button Button--large Button--primary" type="button">
  <span class="Button-label Button-label--secondary">
    Button secondary label
  </span>
  <span class="Button-label Button-label--primary">
    Button primary label
  </span>
</button>
{% endexample %}
