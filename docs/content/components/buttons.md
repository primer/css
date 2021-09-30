---
title: Buttons
path: components/buttons
status: Stable
source: 'https://github.com/primer/css/tree/main/src/buttons'
bundle: buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

```html live
<button class="btn" type="button">Button</button>
```

Note: When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

```html live
<button class="btn mr-2" type="button">Button button</button>
<a class="btn" href="#url" role="button">Link button</a>
```

## Button types

### Default

Use the standard — yet classy — `.btn` for form actions and general page actions. These are used extensively around the site.

```html live
<button class="btn" type="button">Default</button>
```

### Primary

Primary buttons are green and are used to indicate the _primary_ action on a page. When you need your buttons to stand out, use `.btn.btn-primary`. You can use it with both button sizes—just add `.btn-primary`.

```html live
<button class="btn btn-primary" type="button">Primary</button>
```

### Outline

Outline buttons downplay an action as they appear like boxy links. Just add `.btn-outline` and go.

```html live
<button class="btn btn-outline" type="button">Outline</button>
```

### Danger

Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a repo or transferring ownership). Similar to the primary buttons, just add `.btn-danger`.

```html live
<button class="btn btn-danger" type="button">Danger</button>
```

## Button states

### Selected

Adding an `aria-selected="true"` attribute will keep the button in a selected state. Typically used for [`BtnGroups`](#button-groups).

```html live
<div class="BtnGroup d-block mb-2">
  <button class="BtnGroup-item btn" type="button">Button</button>
  <button class="BtnGroup-item btn" type="button" aria-selected="true">Button</button>
  <button class="BtnGroup-item btn btn-danger" type="button">Danger</button>
</div>

<div class="BtnGroup d-block mb-2 ml-0">
  <button class="BtnGroup-item btn btn-outline" type="button">Button</button>
  <button class="BtnGroup-item btn btn-outline" type="button" aria-selected="true">Button</button>
  <button class="BtnGroup-item btn btn-outline" type="button">Button</button>
</div>
```

### Disabled

Disable `<button>` and `<a>` elements with the `aria-disabled="true"` attribute.

```html live
<button class="btn mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-primary mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-outline mr-2" type="button" aria-disabled="true">Disabled</button>
<button class="btn btn-danger" type="button" aria-disabled="true">Disabled</button>
```

## Button variations

### Sizes

Next to the default size there is also a `.btn-sm` (small) and `.btn-large` option. Use them to decrese or increase the button size. This is useful for fitting a button next to an input or turning a button into a prominent call to action in hero sections.

[Type scale utilities](/support/typography#type-scale) can be used to alter the font-size if needed. Padding is applied in em's so that it scales proportionally with the font-size.

```html live
<button class="btn btn-sm mr-2" type="button">Small</button>
<button class="btn mr-2" type="button">Default</button>
<button class="btn btn-large" type="button">Large</button>
```

Use `.btn-large` with a type scale utility to transform the text to a bigger size.

```html live
<div class="f3">
  <button class="btn btn-large btn-outline mr-2" type="button">Large button button</button>
  <a class="btn btn-large" href="#url" role="button">Large link button</a>
</div>
```

### Block button

Make any button full-width by adding `.btn-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`, and centers the button text.

```html live
<button class="btn btn-block mb-2" type="button">Block button</button>
<button class="btn btn-sm btn-block" type="button">Small block button</button>
```

### Link button

Create a button that looks like a link with `.btn-link`. Rather than using an `<a>` to trigger JS, this style on a `<button>` should be used for better accessibility.

**The `.btn-link` class is not designed to be used with `.btn`; the overlapping styles are not compatible.**

```html live
<button class="btn-link" type="button">Link button</button>
```

### Invisible button

When you want a link, but you want it padded and line heightened like a button best for "cancel" actions on forms.

```html live
<button class="btn btn-invisible" type="button">Cancel</button>
<button class="btn" type="button">Submit</button>
```

### Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

```html live
<span class="hidden-text-expander">
  <button type="button" class="ellipsis-expander" aria-expanded="false">&hellip;</button>
</span>
```

You can also make the expander appear inline by adding `.inline`.

## Button with icons

Icons can be added to any button.

```html live
<button class="btn mr-2" type="button">
  <!-- <%= octicon "search" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
</button>

<button class="btn btn-primary mr-2" type="button">
  <!-- <%= octicon "download" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>
  <span>Clone</span>
  <span class="dropdown-caret"></span>
</button>

<button class="btn btn-danger mr-2" type="button">
  <!-- <%= octicon "trashcan" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
  <span>Delete</span>
</button>

<button class="btn btn-outline mr-2" type="button">
  <!-- <%= octicon "device-desktop" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
  <span>Open in Desktop</span>
</button>

<button class="btn" type="button" aria-label="Pencil icon">
  <!-- <%= octicon "pencil" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
</button>
```

### Icon-only button

Icon-only buttons `.btn-octicon` turn blue on hover. Use `.btn-octicon-danger` to turn an icon red on hover.

```html live
<button class="btn-octicon" type="button" aria-label="Desktop icon">
  <!-- <%= octicon "device-desktop" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
</button>

<button class="btn-octicon" type="button" aria-label="Pencil icon">
  <!-- <%= octicon "pencil" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
</button>

<button class="btn-octicon btn-octicon-danger" type="button" aria-label="Trashcan icon">
  <!-- <%= octicon "trashcan" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
</button>

<button class="btn-octicon" type="button" aria-label="Kebab icon">
  <!-- <%= octicon "kebab-horizontal" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
</button>
```

### Close button

When using the `octicon-x` icon for a close button, add `.close-button` to remove the default button styles.

```html live
<button class="close-button" type="button">
  <!-- <%= octicon "x" %> -->
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
</button>
```

## Button with counts

You can easily append a count to a **small button**. Add the `.btn-with-count` class to the `.btn-sm` and then add the `.social-count` after the button.

**Be sure to clear the float added by the additional class.**

```html live
<div class="clearfix">
  <a class="btn btn-sm btn-with-count" href="#url" role="button">
    <!-- <%= octicon "eye" %> -->
    <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
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
<div class="BtnGroup d-block mb-2">
  <button class="BtnGroup-item btn" type="button">Button</button>
  <button class="BtnGroup-item btn" type="button">Button</button>
  <button class="BtnGroup-item btn btn-danger" type="button">Danger</button>
</div>

<div class="BtnGroup d-block mb-2 ml-0">
  <button class="BtnGroup-item btn btn-outline" type="button">Button</button>
  <button class="BtnGroup-item btn btn-outline" type="button">Button</button>
  <button class="BtnGroup-item btn btn-outline" type="button">Button</button>
</div>
```

Use `BtnGroup-item btn btn-sm` for a smaller BtnGroup items.

```html live
<div class="BtnGroup">
  <button class="BtnGroup-item btn btn-sm" type="button">Button</button>
  <button class="BtnGroup-item btn btn-sm" type="button">Button</button>
  <button class="BtnGroup-item btn btn-sm" type="button">Button</button>
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
