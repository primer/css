---
title: Dropdown
status: Beta
---

Dropdowns are lightweight context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

## Basic examples

Dropdowns should be triggered by a `<button>`. **[Each dropdown menu requires a directional class](#alignment)**, much like our tooltips.

Using a GitHub button:

```html live
<div style="margin-bottom: 100px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      Dropdown
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

Using a button customized with additional utilities:

```html live
<div style="margin-bottom: 100px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="color-fg-muted p-2 d-inline" aria-haspopup="true">
      Dropdown
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

## Options

### Alignment

Align the direction of dropdown menus and their arrows with modifier classes.

```html live
<div style="margin-top: 100px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-ne
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-ne">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

```html live
<div style="margin-bottom: 100px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-e
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-e">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

```html live
<div style="margin-bottom: 100px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-se
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

```html live
<div style="margin-bottom: 100px" class="d-flex flex-justify-center">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-s
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-s">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

```html live
<div style="margin-bottom: 100px" class="d-flex flex-justify-end">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-sw
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-sw">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

```html live
<div style="margin-bottom: 100px" class="d-flex flex-justify-end">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      .dropdown-w
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-w">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </details>
</div>
```

### Dividers

```html live
<div style="margin-bottom: 170px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      Dropdown
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li class="dropdown-divider" role="separator"></li>
      <li><a class="dropdown-item" href="#url">Another item</a></li>
      <li><a class="dropdown-item" href="#url">One more</a></li>
    </ul>
  </details>
</div>
```

### Headers

```html live
<div style="margin-bottom: 126px">
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true">
      Dropdown
      <div class="dropdown-caret"></div>
    </summary>

    <div class="dropdown-menu dropdown-menu-se">
      <div class="dropdown-header">
        Dropdown header
      </div>
      <ul>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      </ul>
    </div>
  </details>
</div>
```
