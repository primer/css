---
title: Select menu (deprecated)
path: components/select-menu
status: Deprecated
source: 'https://github.com/github/github/blob/main/app/assets/stylesheets/components/select-menu.scss'
symbols: [active, close-button, css-truncate-target, description, description-inline, description-warning, disabled, filterable-empty, has-error, hidden-select-button-text, icon-only, indeterminate, is-loading, is-showing-new-item-form, label-select-menu, last-visible, menu-active, modal-backdrop, navigation-focus, octicon, octicon-check, octicon-dash, octicon-octoface, octicon-x, opaque, primary, select-menu, select-menu-action, select-menu-blankslate, select-menu-button, select-menu-button-gravatar, select-menu-button-large, select-menu-clear-item, select-menu-divider, select-menu-error, select-menu-filters, select-menu-header, select-menu-item, select-menu-item-gravatar, select-menu-item-heading, select-menu-item-icon, select-menu-item-parent, select-menu-item-template, select-menu-item-text, select-menu-list, select-menu-loading-overlay, select-menu-modal, select-menu-modal-holder, select-menu-modal-narrow, select-menu-modal-right, select-menu-new-item-form, select-menu-no-results, select-menu-tab, select-menu-tab-bucket, select-menu-tab-nav, select-menu-tabs, select-menu-text-filter, select-menu-title, selected, spinner]
---

<Note>
  Please note that the `.select-menu` component is **deprecated**. Use the [`.SelectMenu`](select-menu) instead.
</Note>

## Migration guide

Here are a few tips on how to migrate an existing `.select-menu` to `.SelectMenu`.

1. Use a `<details>` element to toggle the Select Menu.
2. Use a [`<details-menu>`](https://github.com/github/details-menu-element) element to add JS behaviour. The older `.js-select-menu` is not compatible.
3. In case custom styling is needed, use [utility classes](https://primer.style/css/utilities) if possible.

Below is a comparison between class names:

`.select-menu` | `.SelectMenu`
--- | ---
`select-menu` | -
`select-menu-button` | -
`select-menu-modal-holder` | -
`select-menu-modal` | `SelectMenu`
`select-menu-modal-right` | `SelectMenu right-0`
- | `SelectMenu-modal`
`select-menu-loading-overlay` | `SelectMenu-loading`
`select-menu-item-icon` | `SelectMenu-icon`
`select-menu-header` | `SelectMenu-header`
`select-menu-title` | `SelectMenu-title`
`close-button` | `SelectMenu-closeButton`
`select-menu-filters` | -
`select-menu-text-filter` | `SelectMenu-filter`
- | `SelectMenu-input`
`select-menu-tabs` | `SelectMenu-tabs`
`select-menu-tab` | `SelectMenu-tab`
`select-menu-tab-nav` | -
`select-menu-list` | `SelectMenu-list`
`select-menu-item` | `SelectMenu-item`
`select-menu-item-text` | -
`select-menu-no-results` | `SelectMenu-message`
`select-menu-blankslate` | `SelectMenu-blankslate`
`selected` | `aria-checked="true"`


---

The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.

{:toc}

## Basic example

Select menus should be trigged by a `<button>`. In the markup below, all classes prefixed with `select-menu` and `.js-` are required.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Menu contents

The contents of a select menu are easily customized with support for headers, footers, tabbed lists, and live filtering.

### Headers

Add a header to any select menu's popover to house a clear title and a dismiss button.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### List items

The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about any [interactive content](http://w3c.github.io/html/dom.html#interactive-content). [List items are also customizable](#menu-list-items) with options for avatars, additional icons, and multiple lines of text.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <button type="button" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </button>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item" href="#url">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Filter

Enable live filtering of list items within a `.select-menu-list` with a search input. Only a handful of changes to your menu's markup are required:

- Add the text input, housed in `.select-menu-filters`, before the `.select-menu-list`.
- Add two attributes, `data-filterable-for` and `data-filterable-type`, to the `.select-menu-list` to scope the filter to the list.

There are no required changes for the `.select-menu-item`s.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Label:</i>
    <span class="js-select-button">Choose an item</span>
  </button>
  <div class="select-menu-modal-holder js-menu-content js-navigation-container">
    <div class="select-menu-modal">
      <div class="select-menu-header" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="js-select-menu-deferred-content">
        <div class="select-menu-filters">
          <div class="select-menu-text-filter">
            <input type="text" id="example-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter this list" aria-label="Type to filter" autocomplete="off">
          </div>
        </div>
        <div class="select-menu-list" data-filterable-for="example-filter-field" data-filterable-type="substring">
          <input hidden="checkbox" name="example" value="">
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Test element
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Filter to this
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              More content
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Something else
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              One more thing
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Tabs

Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with the addition of the tab toggles at the top of the menu and a few changes to the `.select-menu-list`.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Label:</i>
    <span class="js-select-button">Choose an item</span>
  </button>
  <div class="select-menu-modal-holder js-menu-content js-navigation-container">
    <div class="select-menu-modal">
      <div class="select-menu-header" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="js-select-menu-deferred-content">
        <div class="select-menu-filters">
          <div class="select-menu-tabs">
            <ul>
              <li class="select-menu-tab">
                <a href="#url" data-tab-filter="branches" data-filter-placeholder="Filter for " class="js-select-menu-tab" aria-current="false">Branches</a>
              </li>
              <li class="select-menu-tab">
                <a href="#url" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab selected" aria-current="true">Tags</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected" data-filterable-for="example-filter-field" data-filterable-type="substring" data-tab-filter="branches" role="menu">
          <input hidden="checkbox" name="example" value="">
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 3
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 4
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 5
            </div>
          </a>
        </div>
        <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-filterable-for="example-filter-field" data-filterable-type="substring" data-tab-filter="tags" role="menu">
          <input hidden="checkbox" name="example" value="">
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 3
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 4
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 5
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Filter and tabs

Show a filter and tabs in a single select menu.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Label:</i>
    <span class="js-select-button">Choose an item</span>
  </button>
  <div class="select-menu-modal-holder js-menu-content js-navigation-container">
    <div class="select-menu-modal">
      <div class="select-menu-header" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="js-select-menu-deferred-content">
        <div class="select-menu-filters">
          <div class="select-menu-text-filter">
            <input type="text" id="example-filter-field-2" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter labels" aria-label="Type or choose a label" autocomplete="off">
          </div>
          <div class="select-menu-tabs">
            <ul>
              <li class="select-menu-tab">
                <a href="#url" data-tab-filter="branches" data-filter-placeholder="Filter for " class="js-select-menu-tab" aria-current="false">Branches</a>
              </li>
              <li class="select-menu-tab">
                <a href="#url" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab selected" aria-current="true">Tags</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected" data-filterable-for="example-filter-field" data-filterable-type="substring" data-tab-filter="branches" role="menu">
          <input hidden="checkbox" name="example" value="">
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 3
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 4
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Branch 5
            </div>
          </a>
        </div>
        <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-filterable-for="example-filter-field" data-filterable-type="substring" data-tab-filter="tags" role="menu">
          <input hidden="checkbox" name="example" value="">
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 3
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 4
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <%= octicon("check", :class => "select-menu-item-icon") %>
            <div class="select-menu-item-text js-select-button-text">
              Tag 5
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Blankslate

Sometimes a select menu needs to communicate a "blank slate" where there's no content in the menu's list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a `.select-menu-list` with the `.select-menu-blankslate` and customize its contents as needed.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <div class="select-menu-blankslate">
          <%= octicon("check", :height => 32) %>
          <h3>Select menu blankslate</h3>
          <p>Some text here to describe why you're seeing a blankslate and how to go about fixing that up.</p>
          <button type="button" class="btn btn-sm btn-primary mt-3 mb-3">Deal with it</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Menu list items

Select menu list items have a few options available to them for more complex information patterns.

### Multi-line text

Sometimes the contents of your select menu list require a heading and a description instead of just a string. Select menus come with some default styles for such situations with the addition of a few classes and wrapping `<span>`s.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Multi line:</i>
    <span class="js-select-button">Choose an item</span>
  </button>

  <div class="select-menu-modal-holder">
    <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="false">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Notifications</span>
      </div>
      <div class="select-menu-list js-navigation-container js-active-navigation-container" role="menu">
        <a href="#url" class="select-menu-item js-navigation-item selected" role="menuitem">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Not watching</span>
            <span class="description">Be notified when participating or @mentioned.</span>
            <span class="js-select-button-text hidden-select-button-text">
              Watch
            </span>
          </div>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item" role="menuitem">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Watching</span>
            <span class="description">Be notified of all conversations.</span>
            <span class="js-select-button-text hidden-select-button-text">
              Stop watching
            </span>
          </div>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item" role="menuitem">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <div class="select-menu-item-text">
            <span class="select-menu-item-heading">Ignoring</span>
            <span class="description">Never be notified.</span>
            <span class="js-select-button-text hidden-select-button-text">
              Stop ignoring
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
```

### With avatars

Add avatars to a select menu to help indicate when a menu list item represents a user.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :alt => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :alt => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :alt => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### With dismiss icon

Indicate how to toggle the selected state on a select menu list item with the addition of a dismiss icon.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <button type="button" class="select-menu-item selected js-navigation-item width-full">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">
            <%= octicon("x", :"aria-label" => "Click to remove") %>
            Item 1
          </span>
        </button>
        <button type="button" class="select-menu-item js-navigation-item width-full">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">
            <%= octicon("x", :"aria-label" => "Click to remove") %>
            Item 2
          </span>
        </button>
        <button type="button" class="select-menu-item js-navigation-item width-full">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">
            <%= octicon("x", :"aria-label" => "Click to remove") %>
            Item 3
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
```

## Menu alignment

By default select menus are automatically aligned to the top left corner of an element, but you can also customize that with a few utilities or custom display.

### Right aligned menus

When select menus are right aligned, you can also right-align the select menu's popover with `.select-menu-modal-right`.

```erb
<div class="select-menu float-right select-menu-modal-right js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Choose an item
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Button options

Customize the select menu's trigger button by changing the button modifier class, enabling stateful text, and more.

### Style options

Since select menus are powered by JavaScript behaviors, the specific display of your select menu button is up to you and your use case.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Default button
  </button>

  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn btn-primary select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Primary button
  </button>

  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn btn-outline select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Outline button
  </button>

  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    Link button
  </button>

  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 1</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 2</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">Item 3</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Stateful text

Select menu buttons have the option of showing the current selection in the button itself. Wrap the string you intend to update with a `.js-select-button` and the select menu JavaScript will automatically update the contents of that element with the selected item's text.

Open the select menu below and click different options to see it in action.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <span class="js-select-button">main</span>
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">main</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">feature-branch</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">refactor-component-name</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Emphasized text

You may want to include an emphasized label in the select menu. For example, you may want to include the word `Branch:` in front of the current branch on a repository **Code** page. To do this, within the button, wrap the string in an `<i>` element.

As shown below, emphasized text works well with the stateful text functionality mentioned above.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <i>Branch:</i>
    <span class="js-select-button">main</span>
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">main</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">feature-branch</span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-text js-select-button-text">refactor-component-name</span>
        </a>
      </div>
    </div>
  </div>
</div>
```

### Button avatars

Add an avatar to the button, like, for example, in the context switcher in the signed in dashboard.

```erb
<div class="select-menu js-menu-container js-select-menu">
  <button class="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
    <div class="select-menu-button-gravatar js-select-button-gravatar">
      <%= avatar_for(current_user, 20, :"aria-label" => "") %>
    </div>
    <span class="js-select-button css-truncate css-truncate-target">probot</span>
  </button>
  <div class="select-menu-modal-holder">
    <div class="select-menu-modal js-menu-content">
      <div class="select-menu-header js-navigation-enable" tabindex="-1">
        <button class="btn-link close-button js-menu-close" type="button"><%= octicon("x", :"aria-label" => "Close menu") %></button>
        <span class="select-menu-title">Options</span>
      </div>
      <div class="select-menu-list js-navigation-container">
        <a href="#url" class="select-menu-item selected js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :"aria-label" => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :"aria-label" => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
        <a href="#url" class="select-menu-item js-navigation-item">
          <%= octicon("check", :class => "select-menu-item-icon") %>
          <span class="select-menu-item-gravatar">
            <%= avatar_for(current_user, 20, :"aria-label" => "") %>
          </span>
          <span class="select-menu-item-text js-select-button-text">
            probot
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
```
