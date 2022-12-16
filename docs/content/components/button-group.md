---
title: Button group
path: components/button-group
status: Stable
source: 'https://github.com/primer/css/tree/main/src/buttons'
rails: 'https://primer.style/view-components/components/beta/buttongroup'
bundle: buttons
---

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
