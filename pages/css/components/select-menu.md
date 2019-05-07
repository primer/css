---
title: Select menu
path: components/select-menu
status: New Release
source: 'https://github.com/primer/css/tree/master/src/select-menu'
bundle: select-menu
---

The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Select menus should be wrapped by a `<details>` element.

```html

<link href="/static/github/styleguide.css" rel="stylesheet">
<div class="p-5" style="height: 500px">

<details class="Modal details-reset details-overlay">
  <summary class="btn" aria-haspopup="menu">
    Choose an item
  </summary>
  <div class="Modal-box Box Box--condensed box-shadow-medium">
    <header class="Box-header">
      <h3 class="Box-title">Title</h3>
    </header>
    <menu class="Modal-content SelectMenu" role="menu">
      <a class="SelectMenu-item selected" href="#url">
        <span class="SelectMenu-text">Item 1</span>
      </a>
      <a class="SelectMenu-item" href="#url">
        <span class="SelectMenu-text">Item 2</span>
      </a>
      <a class="SelectMenu-item" href="#url">
        <span class="SelectMenu-text">Item 3</span>
      </a>
    </menu>
    <footer class="Box-footer">
      Footer
    </footer>
  </div>
</details>

</div>
```
