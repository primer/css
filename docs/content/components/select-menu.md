---
title: Select Menu
status: New Release
source: 'https://github.com/primer/css/tree/master/src/select-menu'
bundle: select-menu
---

The `SelectMenu` component provides advanced support for navigation, filtering, and more. Any menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

## Basic example

Use a `<details>` element to toggle the Select Menu. The `<summary>` element can be styled in many ways. In the example below it's a `.btn`.

<<<<<<< HEAD:docs/content/components/select-menu.md

````html live
======= ```erb >>>>>>> origin/master:pages/css/components/select-menu.md
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 180px"><!-- min height for > sm --></div>
````

Add a `.SelectMenu-header` to house a clear title and a close button. Note that the close button is only shown on narrow screens (mobile).

## Right aligned

In case the Select Menu should be aligned to the right, use `SelectMenu right-0`.

```html live
<div class="d-flex flex-justify-end">
  <details class="details-reset details-overlay" open>
    <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
      Choose an item
    </summary>
    <div class="SelectMenu right-0">
      <div class="SelectMenu-modal">
        <header class="SelectMenu-header">
          <h3 class="SelectMenu-title">Title</h3>
          <button class="SelectMenu-closeButton" type="button">
            <%= octicon "x" %>
          </button>
        </header>
        <menu class="SelectMenu-list">
          <button class="SelectMenu-item" role="menuitem">Item 1</button>
          <button class="SelectMenu-item" role="menuitem">Item 2</button>
          <button class="SelectMenu-item" role="menuitem">Item 3</button>
        </menu>
      </div>
    </div>
  </details>
</div>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 180px"><!-- min height for > sm --></div>
```

## Selected state

Add a `.SelectMenu-icon .octicon-check` icon and it will show up when `aria-checked="true"` is set.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
          <%= octicon "check", class: "SelectMenu-icon" %> Selected state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox">
          <%= octicon "check", class: "SelectMenu-icon" %> Default state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
          <%= octicon "check", class: "SelectMenu-icon" %> Selected state
        </button>
        <button class="SelectMenu-item" role="menuitemcheckbox">Default state</button>
        <button class="SelectMenu-item" role="menuitemcheckbox">Default state</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 250px"><!-- min height for > sm --></div>
```

## List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). List items are also customizable with options for avatars, additional icons, and multiple lines of text. Use utility classes like `mr-2`, `d-flex` or `float-right` in case more custom styling is needed.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">
          Text only
        </button>
        <button class="SelectMenu-item" role="menuitem">
          <img
            class="avatar avatar-small mr-2"
            src="https://avatars.githubusercontent.com/hubot?s=40"
            alt="hubot"
            height="20"
            width="20"
          />
          With an avatar
        </button>
        <button class="SelectMenu-item" role="menuitem">
          With a status icon <%= octicon "primitive-dot", class: "color-green-5 ml-2" %>
        </button>
        <button class="SelectMenu-item" role="menuitem">
          With a <span class="Label bg-blue" title="Label: label">label</span>
        </button>
        <button class="SelectMenu-item" role="menuitem">
          With a counter <span class="Counter bg-gray-2 ml-1">16</span>
        </button>
        <button class="SelectMenu-item" role="menuitem">
          <h5>With a heading</h5>
          <span>and some longer description</span>
        </button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 300px"><!-- min height for > sm --></div>
```

## Divider

The Select Menu's list can be divided into multiple parts by adding a `.SelectMenu-divider`.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <div class="SelectMenu-divider">More options</div>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
        <button class="SelectMenu-item" role="menuitem">Item 4</button>
        <button class="SelectMenu-item" role="menuitem">Item 5</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 260px"><!-- min height for > sm --></div>
```

## Additional filter and footer

If the list is expected to get long, consider adding a `.SelectMenu-filter` input. Be sure to also include the `.SelectMenu--hasFilter` modifier class. On mobile devices it will add a fixed height and anchor the Select Menu to the top of the screen. This makes sure the filter input stays at the same position while typing.

Also consider adding a `.SelectMenu-footer` at the bottom. It can be used for additional information, but can also greatly improve the scrolling performance because the list doesn't need to be repainted due to the rounded corners.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter">
      </form>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</a>
        <button class="SelectMenu-item" role="menuitem">Item 2</a>
        <button class="SelectMenu-item" role="menuitem">Item 3</a>
        <button class="SelectMenu-item" role="menuitem">Item 4</a>
        <button class="SelectMenu-item" role="menuitem">Item 5</a>
        <button class="SelectMenu-item" role="menuitem">Item 6</a>
        <button class="SelectMenu-item" role="menuitem">Item 7</a>
        <button class="SelectMenu-item" role="menuitem">Item 8</a>
        <button class="SelectMenu-item" role="menuitem">Item 9</a>
        <button class="SelectMenu-item" role="menuitem">Item 10</a>
        <button class="SelectMenu-item" role="menuitem">Item 11</a>
        <button class="SelectMenu-item" role="menuitem">Item 12</a>
        <button class="SelectMenu-item" role="menuitem">Item 13</a>
        <button class="SelectMenu-item" role="menuitem">Item 14</a>
        <button class="SelectMenu-item" role="menuitem">Item 15</a>
        <button class="SelectMenu-item" role="menuitem">Item 16</a>
        <button class="SelectMenu-item" role="menuitem">Item 17</a>
        <button class="SelectMenu-item" role="menuitem">Item 18</a>
        <button class="SelectMenu-item" role="menuitem">Item 19</a>
        <button class="SelectMenu-item" role="menuitem">Item 20</a>
        <button class="SelectMenu-item" role="menuitem">Item 21</a>
        <button class="SelectMenu-item" role="menuitem">Item 22</a>
        <button class="SelectMenu-item" role="menuitem">Item 23</a>
        <button class="SelectMenu-item" role="menuitem">Item 24</a>
        <button class="SelectMenu-item" role="menuitem">Item 25</a>
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

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
      </form>
      <nav class="SelectMenu-tabs">
        <button class="SelectMenu-tab" aria-selected="true">Branches</button>
        <button class="SelectMenu-tab">Tags</button>
      </nav>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Branch 1</button>
        <button class="SelectMenu-item" role="menuitem">Branch 2</button>
        <button class="SelectMenu-item" role="menuitem">Branch 3</button>
        <button class="SelectMenu-item" role="menuitem">Branch 4</button>
        <button class="SelectMenu-item" role="menuitem">Branch 5</button>
      </menu>
      <menu class="SelectMenu-list" hidden>
        <button class="SelectMenu-item" role="menuitem">Tag 1</button>
        <button class="SelectMenu-item" role="menuitem">Tag 2</button>
        <button class="SelectMenu-item" role="menuitem">Tag 3</button>
      </menu>
      <footer class="SelectMenu-footer">Showing 5 of 5</footer>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 380px"><!-- min height for > sm --></div>
```

## Message

A `SelectMenu-message` can be used to show different kind of messages to a user. Use utility classes to further style the message.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <button class="SelectMenu-item" role="menuitem">Item 1</button>
        <button class="SelectMenu-item" role="menuitem">Item 2</button>
        <div class="SelectMenu-message border-bottom border-top bg-red-0 text-red p-2">Message goes here</div>
        <button class="SelectMenu-item" role="menuitem">Item 3</button>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 200px"><!-- min height for > sm --></div>
```

## Loading

When fetching large lists, consider showing a `.SelectMenu-loading` animation.

```html live
<details class="details-reset details-overlay">
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu SelectMenu--hasFilter">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <form class="SelectMenu-filter">
        <input class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
      </form>
      <menu class="SelectMenu-list">
        <div class="SelectMenu-loading">
          <%= octicon "octoface", class: "anim-pulse", width: 32 %>
        </div>
      </menu>
      <footer class="SelectMenu-footer">Loading...</footer>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 220px"><!-- min height for > sm --></div>
```

## Blankslate

Sometimes a Select Menu needs to communicate a "blank slate" where there's no content in the menu's list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.SelectMenu-list` with a `.SelectMenu-blankslate` and customize its contents as needed.

```html live
<details class="details-reset details-overlay" open>
  <summary class="btn" type="button" aria-haspopup="true" aria-expanded="true">
    Choose an item
  </summary>
  <div class="SelectMenu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <h3 class="SelectMenu-title">Title</h3>
        <button class="SelectMenu-closeButton" type="button">
          <%= octicon "x" %>
        </button>
      </header>
      <menu class="SelectMenu-list">
        <div class="SelectMenu-blankslate">
          <%= octicon "repo", class: "color-gray-3", width: 24 %>
          <h4 class="my-2">No repositories</h4>
          <p class="mb-3 text-gray">We didn’t find any matching repositories that you can commit to.</p>
          <button type="button" class="btn btn-sm btn-primary">Create a repository</button>
        </div>
      </menu>
    </div>
  </div>
</details>

<div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
<div class="d-none d-sm-block" style="height: 260px"><!-- min height for > sm --></div>
```

## github.com usage

When adding the `.SelectMenu` component on github.com, use the [`<details-menu>`](https://github.com/github/details-menu-element) element. It will :tophat: magically make the `.SelectMenu` work. Here a basic example:

```erb
<details class="details-reset details-overlay" id="my-select-menu">
  <summary class="btn" title="Pick an item">
    <span>Choose</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">My Select Menu</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="my-select-menu">
          <%= octicon("x", "aria-label": "Close menu") %>
        </button>
      </header>
    </div>
    <div class="SelectMenu-list">
      <a class="SelectMenu-item" href="" role="menuitem">Item 1</a>
      <a class="SelectMenu-item" href="" role="menuitem">Item 2</a>
      <a class="SelectMenu-item" href="" role="menuitem">Item 3</a>
    </div>
  </details-menu>
</details>
```

If loading content should be deferred, use the [`<include-fragment>`](https://github.com/github/details-menu-element) element:

```erb
<details-menu class="SelectMenu" src="/my-menu" preload>
  <div class="SelectMenu-modal">
    <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
      <%= octicon("octoface", class: "anim-pulse", :height => 32) %>
    </include-fragment>
  </div>
</details-menu>
```

It will add a pulsing :octoface: icon while the content is loading.
