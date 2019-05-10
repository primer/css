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

```html
<menu class="SelectMenu">
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
```

## Modal

Modal that contains a Select menu. Wrapped by a `<details>` element.

```html

<link href="/static/github/styleguide.css" rel="stylesheet">
<div class="p-5">

<p class="mb-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<details class="details-reset details-overlay" open>
  <summary class="btn" aria-haspopup="menu">
    Choose an item
  </summary>
  <div class="Modal">
    <div class="Modal-box">
      <header class="Modal-header">
        <h3 class="Modal-title">Title</h3>
      </header>
      <menu class="Modal-content SelectMenu border-0">
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
      <footer class="Modal-footer">
        Footer
      </footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

</div>
```
