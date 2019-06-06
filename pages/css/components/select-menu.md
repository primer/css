---
title: Select Menu
path: components/select-menu
status: New Release
source: 'https://github.com/primer/css/tree/master/src/select-menu'
bundle: select-menu
---

The `SelectMenu` component provides advanced support for navigation, filtering, and more. Any popover within a Select Menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Use a `<details>` element to toggle the Select Menu. The `<summary>` element can be styled in many ways. In the example below it's a `.btn`.

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

Add a `.SelectMenu-header` to house a clear title and a close button. Note that the close button is only shown on narrow screens (mobile).

## Right aligned

In case the Select Menu should be aligned to the right, add a `right-0` utility class.

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
        <button class="SelectMenu-item">
          <svg height="16" class="SelectMenu-icon octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
          Default state
        </button>
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

## List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). List items are also customizable with options for avatars, additional icons, and multiple lines of text. Use utility classes like `mr-2`, `d-flex` or `float-right` in case more custom styling is needed.

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

## Divider

The Select Menu's list can be divided into multiple parts by adding a `.SelectMenu-divider`.

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

## Additional filter and footer

If the list is expected to get long, consider adding a `.SelectMenu-filter` input. Be sure to also include the `.SelectMenu--hasFilter` modifier class. On mobile devices it will add a fixed height and anchor the Select Menu to the top of the screen. This makes sure the filter input stays at the same position while typing.

Also consider adding a `.SelectMenu-footer` at the bottom. It can be used for additional information, but can also greatly improve the scrolling performance because the list doesn't need to be repainted due to the rounded corners.

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
        <button class="SelectMenu-item">Item 1</a>
        <button class="SelectMenu-item">Item 2</a>
        <button class="SelectMenu-item">Item 3</a>
        <button class="SelectMenu-item">Item 4</a>
        <button class="SelectMenu-item">Item 5</a>
        <button class="SelectMenu-item">Item 6</a>
        <button class="SelectMenu-item">Item 7</a>
        <button class="SelectMenu-item">Item 8</a>
        <button class="SelectMenu-item">Item 9</a>
        <button class="SelectMenu-item">Item 10</a>
        <button class="SelectMenu-item">Item 11</a>
        <button class="SelectMenu-item">Item 12</a>
        <button class="SelectMenu-item">Item 13</a>
        <button class="SelectMenu-item">Item 14</a>
        <button class="SelectMenu-item">Item 15</a>
        <button class="SelectMenu-item">Item 16</a>
        <button class="SelectMenu-item">Item 17</a>
        <button class="SelectMenu-item">Item 18</a>
        <button class="SelectMenu-item">Item 19</a>
        <button class="SelectMenu-item">Item 20</a>
        <button class="SelectMenu-item">Item 21</a>
        <button class="SelectMenu-item">Item 22</a>
        <button class="SelectMenu-item">Item 23</a>
        <button class="SelectMenu-item">Item 24</a>
        <button class="SelectMenu-item">Item 25</a>
      </menu>
      <footer class="SelectMenu-footer">Showing 25 of 25</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
```

## Tabs

Sometimes you need two or more lists of items in your Select Menu, e.g. branches and tags. Select Menu lists can be tabbed with the addition of `.SelectMenu-tabs` above the menu.

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
      <nav class="SelectMenu-tabs">
        <button class="SelectMenu-tab" aria-selected="true">Branches</button>
        <button class="SelectMenu-tab">Tags</button>
      </nav>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item">Branch 1</button>
        <button class="SelectMenu-item">Branch 2</button>
        <button class="SelectMenu-item">Branch 3</button>
        <button class="SelectMenu-item">Branch 4</button>
        <button class="SelectMenu-item">Branch 5</button>
      </menu>
      <menu class="SelectMenu-list" hidden>
        <button class="SelectMenu-item">Tag 1</button>
        <button class="SelectMenu-item">Tag 2</button>
        <button class="SelectMenu-item">Tag 3</button>
      </menu>
      <footer class="SelectMenu-footer">Showing 5 of 5</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 380px"> <!-- min height for > sm --> </div>
```

## Loading

When fetching large lists, consider showing a `.SelectMenu-loading` animation.

```html
<details class="details-reset details-overlay">
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
          <svg class="SelectMenu-loadingIcon octicon octicon-octoface" width="32px" height="26px" viewBox="0 0 32 26" version="1.1">
            <path class="SelectMenu-loadingFace" d="M29.4,6.68 C29.66,6.04 30.5,3.5 29.14,0.06 C29.14,0.06 27.04,-0.6 22.26,2.66 C20.26,2.1 18.12,2.02 16,2.02 C13.88,2.02 11.74,2.1 9.74,2.66 C4.96,-0.62 2.86,0.06 2.86,0.06 C1.5,3.5 2.34,6.04 2.6,6.68 C0.98,8.42 0,10.66 0,13.38 C0,23.68 6.66,26 15.96,26 C25.26,26 32,23.68 32,13.38 C32,10.66 31.02,8.42 29.4,6.68 Z M16,24.04 C9.4,24.04 4.04,23.74 4.04,17.34 C4.04,15.82 4.8,14.38 6.08,13.2 C8.22,11.24 11.88,12.28 16,12.28 C20.14,12.28 23.76,11.24 25.92,13.2 C27.22,14.38 27.96,15.8 27.96,17.34 C27.96,23.72 22.6,24.04 16,24.04 Z"></path>
            <path class="SelectMenu-loadingEyes" d="M21.02,14.02 C22.36,14.02 23.42,15.6 23.42,17.58 C23.42,19.56 22.34,21.16 21.02,21.16 C19.7,21.16 18.62,19.56 18.62,17.58 C18.62,15.6 19.7,14.02 21.02,14.02 Z M10.98,14.02 C12.3,14.02 13.38,15.6 13.38,17.58 C13.38,19.56 12.3,21.16 10.98,21.16 C9.66,21.16 8.58,19.54 8.58,17.58 C8.58,15.62 9.66,14.02 10.98,14.02 Z"></path>
          </svg>
        </div>
      </menu>
      <footer class="SelectMenu-footer">Loading...</footer>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 200px"> <!-- min height for > sm --> </div>
```

## Blankslate

Sometimes a Select Menu needs to communicate a "blank slate" where there's no content in the menu's list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.SelectMenu-list` with the `.SelectMenu-blankslate` and customize its contents as needed.

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
      <div class="SelectMenu-blankslate">
        <svg height="32" class="octicon octicon-repo color-gray-3" viewBox="0 0 12 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
        <h4 class="my-2">No repositories</h4>
        <p class="mb-3 text-gray">We didn’t find any matching repositories that you can commit to.</p>
        <button type="button" class="btn btn-sm btn-primary">Create a repository</button>
      </div>
    </div>
  </div>
</details>

<div class="d-sm-none"         style="height: 600px"> <!-- min height for < sm --> </div>
<div class="d-none d-sm-block" style="height: 260px"> <!-- min height for > sm --> </div>
```
