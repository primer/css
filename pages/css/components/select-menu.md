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
        <button class="SelectMenu-item"><span class="SelectMenu-text">Item 1</span></button>
        <button class="SelectMenu-item"><span class="SelectMenu-text">Item 2</span></button>
        <button class="SelectMenu-item"><span class="SelectMenu-text">Item 3</span></button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 180px"> <!-- min height for > sm --> </div>
```

## Different options

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
        <button class="SelectMenu-item" aria-checked="true">
          <svg height="16" class="SelectMenu-icon octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <span class="SelectMenu-text">Selected state</span>
        </button>
        <button class="SelectMenu-item">
          <span class="SelectMenu-text">Default state</span>
        </button>
        <div class="SelectMenu-divider">More options</div>
        <button class="SelectMenu-item">
          <img class="avatar avatar-small mr-2" src="https://avatars.githubusercontent.com/jonrohan?s=40" alt="jonrohan" height="20" width="20">
          <span class="SelectMenu-text">With an avatar</span>
        </button>
        <button class="SelectMenu-item">
          <span class="SelectMenu-text">With a status icon</span>
          <svg class="octicon octicon-primitive-dot color-green-5 ml-2" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
        </button>
        <button class="SelectMenu-item">
          <span class="SelectMenu-text">With a </span> <span class="Label bg-blue" title="Label: label">label</span>
        </button>
        <button class="SelectMenu-item">
          <span class="SelectMenu-text">With a counter</span> <span class="Counter bg-gray-2">16</span>
        </button>
        <button class="SelectMenu-item">
          <span class="SelectMenu-text">
            <h5>With a heading</h5>
            <span>and some longer description</span>
          </span>
        </button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
```

## With a filter and footer

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
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 22</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 23</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 24</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 25</span> </a>
      </menu>
      <footer class="SelectMenu-footer">Showing 25 of 25</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
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
        <a class="SelectMenu-item" href="#url" aria-checked="true">
          <svg height="16" class="SelectMenu-icon octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <span class="SelectMenu-text">Item 2</span>
        </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 2</span> </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 3</span> </a>
        <a class="SelectMenu-item" href="#url" aria-checked="true">
          <svg height="16" class="SelectMenu-icon octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          <span class="SelectMenu-text">Item 4</span>
        </a>
        <a class="SelectMenu-item" href="#url"> <span class="SelectMenu-text">Item 5</span> </a>
      </menu>
      <footer class="SelectMenu-footer">Selected 3 ・ Showing 5 of 42</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
```
