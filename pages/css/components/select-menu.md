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

Use a `<details>` element to toggle the Select Menu. The `<summary>` element can be anything. In the example below it's a button.

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
        <button class="SelectMenu-item">Item 1</button>
        <button class="SelectMenu-item">Item 2</button>
        <button class="SelectMenu-item">Item 3</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 180px"> <!-- min height for > sm --> </div>
```

Also be sure to include the `.SelectMenu-title` and `.SelectMenu-closeButton`. Note that the close button is only shown for narrow screens (mobile).

## Selected state

Use `aria-checked="true"` to mark a list item as selected. Including `.SelectMenu-icon .octicon-check` adds a check icon to the left.

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
          Selected state
        </button>
        <button class="SelectMenu-item">Default state</button>
        <button class="SelectMenu-item" aria-checked="true">
          <svg height="16" class="SelectMenu-icon octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          Selected state
        </button>
        <button class="SelectMenu-item">Default state</button>
        <button class="SelectMenu-item">Default state</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 250px"> <!-- min height for > sm --> </div>
```

## List item types

The `.SelectMenu-item` can contain different kind of content. Use utility classes like `mr-2`, `d-flex` or `float-right` in case you need to position certain elements.

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
        <button class="SelectMenu-item">
          Text only
        </button>
        <button class="SelectMenu-item">
          <img class="avatar avatar-small mr-2" src="https://avatars.githubusercontent.com/jonrohan?s=40" alt="jonrohan" height="20" width="20">
          With an avatar
        </button>
        <button class="SelectMenu-item">
          With a status icon <svg class="octicon octicon-primitive-dot color-green-5 ml-2" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
        </button>
        <button class="SelectMenu-item">
          With a <span class="Label bg-blue" title="Label: label">label</span>
        </button>
        <button class="SelectMenu-item">
          With a counter <span class="Counter bg-gray-2 ml-1">16</span>
        </button>
        <button class="SelectMenu-item">
          <h5>With a heading</h5>
          <span>and some longer description</span>
        </button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 300px"> <!-- min height for > sm --> </div>
```

## Additional filter and footer

If the list is expected to get long, consider adding a filter. Be sure to also include the `.SelectMenu--hasFilter` modifier class. On mobile devices it will add a fixed height and anchor the Select Menu to the top of the screen. This makes sure the filter input stays at the same position while typing. Also consider adding a `.SelectMenu-footer` at the bottom. It can be used for additional information, but can also greatly improve the scrolling performance because the list doesn't need to be repainted due to the rounded corners.

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
        <a class="SelectMenu-item" href="#url">Item 1</a>
        <a class="SelectMenu-item" href="#url">Item 2</a>
        <a class="SelectMenu-item" href="#url">Item 3</a>
        <a class="SelectMenu-item" href="#url">Item 4</a>
        <a class="SelectMenu-item" href="#url">Item 5</a>
        <a class="SelectMenu-item" href="#url">Item 6</a>
        <a class="SelectMenu-item" href="#url">Item 7</a>
        <a class="SelectMenu-item" href="#url">Item 8</a>
        <a class="SelectMenu-item" href="#url">Item 9</a>
        <a class="SelectMenu-item" href="#url">Item 10</a>
        <a class="SelectMenu-item" href="#url">Item 11</a>
        <a class="SelectMenu-item" href="#url">Item 12</a>
        <a class="SelectMenu-item" href="#url">Item 13</a>
        <a class="SelectMenu-item" href="#url">Item 14</a>
        <a class="SelectMenu-item" href="#url">Item 15</a>
        <a class="SelectMenu-item" href="#url">Item 16</a>
        <a class="SelectMenu-item" href="#url">Item 17</a>
        <a class="SelectMenu-item" href="#url">Item 18</a>
        <a class="SelectMenu-item" href="#url">Item 19</a>
        <a class="SelectMenu-item" href="#url">Item 20</a>
        <a class="SelectMenu-item" href="#url">Item 21</a>
        <a class="SelectMenu-item" href="#url">Item 22</a>
        <a class="SelectMenu-item" href="#url">Item 23</a>
        <a class="SelectMenu-item" href="#url">Item 24</a>
        <a class="SelectMenu-item" href="#url">Item 25</a>
      </menu>
      <footer class="SelectMenu-footer">Showing 25 of 25</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
```

## Loading

When fetching large lists, consider showing a `.SelectMenu-loading` animation.

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
        <div class="SelectMenu-loading">
          <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
        </div>
      </menu>
      <footer class="SelectMenu-footer">Loading...</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 200px"> <!-- min height for > sm --> </div>
```

## Divider

The list can be divided into multiple parts by adding a `.SelectMenu-divider`.

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
        <button class="SelectMenu-item">Item 1</button>
        <button class="SelectMenu-item">Item 2</button>
        <div class="SelectMenu-divider">More options</div>
        <button class="SelectMenu-item">Item 3</button>
        <button class="SelectMenu-item">Item 4</button>
        <button class="SelectMenu-item">Item 5</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 260px"> <!-- min height for > sm --> </div>
```

## Right aligned

In case the Select Menu should be right aligned, add a `right-0` utility class.

```html
<div class="d-flex flex-justify-end">

  <details class="details-reset details-overlay" open>
    <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
      Choose an item
    </summary>
    <div class="SelectMenu right-0">
      <div class="SelectMenu-modal">
        <header class="SelectMenu-header">
          <h3 class="SelectMenu-title">Title</h3>
          <button class="SelectMenu-closeButton" type="button"><svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
        </header>
        <menu class="SelectMenu-list">
          <button class="SelectMenu-item">Item 1</button>
          <button class="SelectMenu-item">Item 2</button>
          <button class="SelectMenu-item">Item 3</button>
        </menu>
      </div>
    </div>
  </details>

</div>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 180px"> <!-- min height for > sm --> </div>
```
