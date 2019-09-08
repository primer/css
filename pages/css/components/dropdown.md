---
title: Dropdown
path: components/dropdown
status: Stable
source: 'https://github.com/github/github/tree/master/app/assets/stylesheets/components/dropdown.scss'
symbols: [active, anim-scale-in, btn-link, dropdown, dropdown-caret, dropdown-divider, dropdown-header, dropdown-item, dropdown-menu, dropdown-menu-content, dropdown-menu-e, dropdown-menu-ne, dropdown-menu-no-overflow, dropdown-menu-s, dropdown-menu-se, dropdown-menu-sw, dropdown-menu-w, dropdown-signout, octicon, zeroclipboard-is-hover]
---

Dropdowns are lightweight, JavaScript-powered context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

{:toc}

## Basic examples

Dropdowns should be trigged by a `<button>`. **[Each dropdown menu requires a directional class](#alignment)**, much like our tooltips.

Using a GitHub button:

```html
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
```

Using a button customized with additional utilities:


```html
<details class="dropdown details-reset details-overlay d-inline-block">
  <summary class="text-gray p-2 d-inline" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </summary>

  <ul class="dropdown-menu dropdown-menu-se">
    <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
  </ul>
</details>
```

## Options

### Alignment

Align the direction of dropdown menus and their arrows with modifier classes.

```html
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
```

```html
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
```

```html
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
```

```html
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
```

```html
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
```

```html
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
```

### Dividers

```html
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
```

### Headers

```html
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
```
