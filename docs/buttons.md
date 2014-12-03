---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

### Default buttons

Use the standard—yet classy—`.button` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility.

{% example html %}
<button class="button" type="button">Button button</button>
<a class="button" href="#" role="button">Link button</a>
{% endexample %}

You can find them in two sizes: regular `.button` and the samller `.minibutton`.

{% example html %}
<button class="button" type="button">Button</button>
<button class="minibutton" type="button">Minibutton</button>
{% endexample %}

### Primary

Primary buttons are green and are used to indicate the *primary* action on a page. When you need your shit to stand out, rock the `.button.primary`. You can use it on both button sizes—just add `.primary`.

{% example html %}
<button class="button primary" type="button">Primary button</button>
<button class="minibutton primary" type="button">Primary minibutton</button>
{% endexample %}

### Danger

Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.danger` to either button size.

{% example html %}
<button class="button danger" type="button">Danger button</button>
<button class="minibutton danger" type="button">Danger minibutton</button>
{% endexample %}

### Outline

Outline buttons are downplay an action as they appear like boxy links. They're slightly different than normal buttons though—you don't add `.button-outline`, you replace `.button` with it.

{% example html %}
<button class="button-outline" type="button">Outline button</button>
{% endexample %}

### Block buttons

Make any button full-width by adding `.button-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`, and centers the button text.

{% example html %}
<p><button class="button button-block" type="button">Block button</button></p>
<p><button class="minibutton button-block" type="button">Block minibutton</button></p>
{% endexample %}

### With counts

You can easily append a count to a **minibutton**. Add the `.with-count` class to the `.minibutton` and then add the `.social-count` after the button.

**Be sure to clear the float added by the additional class.**

{% example html %}
<div class="clearfix">
  <a class="minibutton with-count" href="#" role="button">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="#">6</a>
</div>
{% endexample %}

### Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.button-group` and the buttons will be rounded and spaced automatically.

Button groups work with any `.button`, `.minibutton`, and `.button-outline`.

{% example html %}
<div class="button-group">
  <button class="button" type="button">Button</button>
  <button class="button" type="button">Button</button>
  <button class="button" type="button">Button</button>
</div>

<div class="button-group">
  <button class="button-outline" type="button">Button</button>
  <button class="button-outline" type="button">Button</button>
  <button class="button-outline" type="button">Button</button>
</div>

<div class="button-group">
  <button class="minibutton" type="button">Button</button>
  <button class="minibutton" type="button">Button</button>
  <button class="minibutton" type="button">Button</button>
</div>
{% endexample %}

### Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

{% example html %}
<span class="hidden-text-expander">
  <a href="#">&hellip;</a>
</span>
{% endexample %}

You can also make the expander appear inline by adding `.inline`.
