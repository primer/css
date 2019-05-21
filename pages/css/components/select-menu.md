---
title: Select Menu
path: components/select-menu
status: New Release
source: 'https://github.com/primer/css/tree/master/src/select-menu'
bundle: select-menu
---

The `SelectMenu` component provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Select menus should use a `<details>` element and be trigged by a `<summary>` element.

```html
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <menu class="SelectMenu-list">
        <a href="#url" class="SelectMenu-item"> <span class="SelectMenu-text">Item 1</span> </a>
        <a href="#url" class="SelectMenu-item"> <span class="SelectMenu-text">Item 2</span> </a>
        <a href="#url" class="SelectMenu-item"> <span class="SelectMenu-text">Item 3</span> </a>
      </menu>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

## With a divider

```html
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <menu class="SelectMenu-list">
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 1</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 2</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 3</span> </a>
        <div class="SelectMenu-divider">More options</div>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 4</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 5</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 6</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 7</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 8</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 9</span> </a>
      </menu>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

## With filter

```html
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter">
      </form>
      <menu class="SelectMenu-list">
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 1</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 2</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 3</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 4</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 5</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 6</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 7</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 8</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 9</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 10</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 11</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 12</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 13</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 14</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 15</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 16</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 17</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 18</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 19</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 20</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 21</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">...</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 42</span> </a>
      </menu>
      <footer class="SelectMenu-footer">Showing 42/42</footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```

```html
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" value="Item 1-5" aria-label="Filter">
      </form>
      <menu class="SelectMenu-list">
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 1</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 2</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 3</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 4</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 5</span> </a>
      </menu>
      <footer class="SelectMenu-footer">Showing 5/42</footer>
    </div>
  </div>
</details>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

<p class="mt-3">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
```
