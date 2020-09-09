---
title: Buttons
path: components/buttons
status: Stable
source: 'https://github.com/primer/css/tree/master/src/buttons'
bundle: buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Default button

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

```html live
<button class="btn mr-2" type="button">Button button</button>
<a class="btn" href="#url" role="button">Link button</a>
```

You can find them in two sizes: the default `.btn` and the smaller `.btn-sm`.

```html live
<button class="btn mr-2" type="button">Button</button>
<button class="btn btn-sm" type="button">Small button</button>
```

## Primary button

Primary buttons are green and are used to indicate the _primary_ action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

```html live
<button class="btn btn-primary mr-2" type="button">Primary button</button>
<button class="btn btn-sm btn-primary" type="button">Small primary button</button>
```

## Danger button

Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.btn-danger`.

```html live
<button class="btn btn-danger mr-2" type="button">Danger button</button>
<button class="btn btn-sm btn-danger" type="button">Small danger button</button>
```

## Outline button

Outline buttons downplay an action as they appear like boxy links. Just add `.btn-outline` and go.

```html live
<button class="btn btn-outline mr-2" type="button">Outline button</button>
<button class="btn btn-sm btn-outline" type="button">Outline button</button>
```

## Large button

Use `.btn-large` to increase the padding and border radius of a button. This is useful for prominent calls to action in hero sections.

[Type scale utilities](/support/typography#type-scale) can be used to alter the font-size if needed. Padding is applied in em's so that it scales proportionally with the font-size.

```html live
<button class="btn btn-large mr-2" type="button">Large button</button>
<a class="btn btn-large" href="#url" role="button">Large link button</a>
```

Use `.btn-large` with a type scale utility to transform the text to a bigger size.

```html live
<div class="f3">
  <button class="btn btn-large btn-outline-blue mr-2" type="button">Large button button</button>
  <a class="btn btn-large" href="#url" role="button">Large link button</a>
</div>
```

## Disabled state

Disable `<button>` and `<a>` elements with the `aria-disabled="true"` attribute.

```html live
<button class="btn mr-2" type="button" aria-disabled="true">Disabled button</button>
<a class="btn" href="#url" role="button" aria-disabled="true">Disabled button</a>
```

Similar styles are applied to primary, danger, and outline buttons:

```html live
<button class="btn btn-primary mr-2" type="button" aria-disabled="true">Disabled button</button>
<a class="btn btn-primary" href="#url" role="button" aria-disabled="true">Disabled button</a>
```

```html live
<button class="btn btn-danger mr-2" type="button" aria-disabled="true">Disabled button</button>
<a class="btn btn-danger" href="#url" role="button" aria-disabled="true">Disabled button</a>
```

```html live
<button class="btn btn-outline mr-2" type="button" aria-disabled="true">Disabled button</button>
<a class="btn btn-outline" href="#url" role="button" aria-disabled="true">Disabled button</a>
```

## Block button

Make any button full-width by adding `.btn-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`, and centers the button text.

```html live
<button class="btn btn-block mb-2" type="button">Block button</button>
<button class="btn btn-sm btn-block" type="button">Small block button</button>
```

## Link button

Create a button that looks like a link with `.btn-link`. Rather than using an `<a>` to trigger JS, this style on a `<button>` should be used for better accessibility.

**The `.btn-link` class is not designed to be used with `.btn`; the overlapping styles are not compatible.**

```html live
<button class="btn-link" type="button">Link button</button>
```

## Invisible button

When you want a link, but you want it padded and line heighted like a button best for "cancel" actions on forms.

```html live
<button class="btn btn-invisible" type="button">Cancel</button>
<button class="btn" type="button">Submit</button>
```

## Octicon button

Icon-only buttons that turn blue on hover. Use `.btn-octicon-danger` to turn an icon red on hover.

```html live
<button class="btn-octicon" type="button" aria-label="Desktop icon">
  <!-- <%= octicon "device-desktop" %> -->
  <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
</button>

<button class="btn-octicon" type="button" aria-label="Pencil icon">
  <!-- <%= octicon "pencil" %> -->
  <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
</button>

<button class="btn-octicon btn-octicon-danger" type="button" aria-label="Trashcan icon">
  <!-- <%= octicon "trashcan" %> -->
  <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
</button>

<button class="btn-octicon" type="button" aria-label="Kebab icon">
  <!-- <%= octicon "kebab-horizontal" %> -->
  <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path></svg>
</button>
```



## Close button

When using the `octicon-x` icon for a close button, add `.close-button` to remove the default button styles.

```html live
<button class="close-button" type="button">
  <!-- <%= octicon "x" %> -->
  <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" /></svg>
</button>
```

## Button with icons

Icons can be added to any button.

```html live
<button class="btn mr-2" type="button">
  <!-- <%= octicon "search" %> -->
  <svg class="octicon octicon-search" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
  <span>Find file</span>
</button>

<button class="btn btn-primary mr-2" type="button">
  <!-- <%= octicon "cloud-download" %> -->
  <svg class="octicon octicon-cloud-download" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>
  <span>Clone</span>
  <span class="dropdown-caret"></span>
</button>

<button class="btn btn-danger mr-2" type="button">
  <!-- <%= octicon "trashcan" %> -->
  <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
  <span>Delete</span>
</button>

<button class="btn btn-outline mr-2" type="button">
  <!-- <%= octicon "device-desktop" %> -->
  <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
  <span>Open in Desktop</span>
</button>

<button class="btn" type="button" aria-label="Pencil icon">
  <!-- <%= octicon "pencil" %> -->
  <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
</button>
```

## Button with counts

You can easily append a count to a **small button**. Add the `.with-count` class to the `.btn-sm` and then add the `.social-count` after the button.

**Be sure to clear the float added by the additional class.**

```html live
<div class="clearfix">
  <a class="btn btn-sm btn-with-count" href="#url" role="button">
    <!-- <%= octicon "eye" %> -->
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    <span>Watch</span>
  </a>
  <a class="social-count" href="#url">6</a>
</div>
```

You can also use the [counter](./labels#counters) component within buttons:

```html live
<button class="btn mr-2" type="button">
  Button <span class="Counter">12</span>
</button>

<button class="btn btn-primary mr-2" type="button">
  Button <span class="Counter">12</span>
</button>

<button class="btn btn-danger mr-2" type="button">
  Button <span class="Counter">12</span>
</button>

<button class="btn btn-outline" type="button">
  Button <span class="Counter">12</span>
</button>
```

## Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.BtnGroup` and the buttons will be rounded and spaced automatically.

```html live
<div class="BtnGroup mr-2">
  <button class="btn BtnGroup-item" type="button">Button</button>
  <button class="btn BtnGroup-item" type="button">Button</button>
  <button class="btn BtnGroup-item" type="button">Button</button>
</div>

<div class="BtnGroup mr-2">
  <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
  <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
  <button class="btn BtnGroup-item btn-outline" type="button">Button</button>
</div>

<div class="BtnGroup">
  <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
  <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
  <button class="btn BtnGroup-item btn-sm" type="button">Button</button>
</div>
```

Add `.BtnGroup-parent` to parent elements, like `<form>`s or `<details>`s, within `.BtnGroup`s for proper spacing and rounded corners.

```html live
<div class="BtnGroup">
  <button class="btn BtnGroup-item" type="button">Button</button>
  <form class="BtnGroup-parent">
    <button class="btn BtnGroup-item" type="button">Button in a form</button>
  </form>
  <button class="btn BtnGroup-item" type="button">Button</button>
  <button class="btn BtnGroup-item" type="button">Button</button>
</div>
```

## Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

```html live
<span class="hidden-text-expander">
  <button type="button" class="ellipsis-expander" aria-expanded="false">&hellip;</button>
</span>
```

You can also make the expander appear inline by adding `.inline`.
