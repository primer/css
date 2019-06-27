---
title: Navigation
path: components/navigation
status: Stable
source: 'https://github.com/primer/css/tree/master/src/navigation'
bundle: navigation
---


Primer CSS comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

{:toc}

## Menu

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent. Otherwise, apply a custom `width`.

```html title="Menu"
<nav class="menu" aria-label="Person settings">
  <a class="menu-item selected" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.

```erb title="Menu with octicons, avatars and counters"
<nav class="menu" aria-label="Person settings">
  <a class="menu-item selected" href="#url" aria-current="page">
    <%= octicon "tools" %>
    Account
  </a>
  <a class="menu-item" href="#url">
    <%= octicon "person" %>
    Profile
  </a>
  <a class="menu-item" href="#url">
    <%= octicon "mail" %>
    Emails
  </a>
  <a class="menu-item" href="#url">
    <%= octicon "radio-tower" %>
    <span class="Counter">3</span>
    Notifications
  </a>
</nav>
```

You can also add optional headings to a menu. Feel free to use nearly any semantic element with the `.menu-heading` class, including inline elements, headings, and more.

```html title="Menu with heading"
<nav class="menu" aria-labelledby="menu-heading">
  <span class="menu-heading" id="menu-heading">Menu heading</span>
  <a class="menu-item selected" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

## Underline nav

Use `.UnderlineNav` to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page. This component comes with variations to accommodate icons, containers and other content.

```html title="UnderlineNav"
<nav class="UnderlineNav">
  <div class="UnderlineNav-body">
    <a href="#url" role="tab" title="Item 1" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" role="tab" title="Item 2" class="UnderlineNav-item">Item 2</a>
    <a href="#url" role="tab" title="Item 3" class="UnderlineNav-item">Item 3</a>
    <a href="#url" role="tab" title="Item 4" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

Use `.UnderlineNav-actions` to place another element, such as a button, to the opposite side of the navigation items.

```html title="UnderlineNav-actions"
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" class="UnderlineNav-item">Item 2</a>
    <a href="#url" class="UnderlineNav-item">Item 3</a>
    <a href="#url" class="UnderlineNav-item">Item 4</a>
  </div>
  <div class="UnderlineNav-actions">
    <a class="btn">Button</a>
  </div>
</nav>
```

Use `.UnderlineNav--right` to right align the navigation.

```html title="UnderlineNav--right"
<nav class="UnderlineNav UnderlineNav--right">
  <div class="UnderlineNav-body">
    <a href="#url" role="tab" title="Item 1" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" role="tab" title="Item 2" class="UnderlineNav-item">Item 2</a>
    <a href="#url" role="tab" title="Item 3" class="UnderlineNav-item">Item 3</a>
    <a href="#url" role="tab" title="Item 4" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

`.UnderlineNav--right` also works with when used with `.UnderlineNav-actions`.

```html title="UnderlineNav--right with actions"
<nav class="UnderlineNav UnderlineNav--right" aria-label="Foo bar">
  <div class="UnderlineNav-actions">
    <a class="btn">Button</a>
  </div>
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" class="UnderlineNav-item">Item 2</a>
    <a href="#url" class="UnderlineNav-item">Item 3</a>
    <a href="#url" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

<!-- Update wording here -->
`.Counters` and `.octicons` can be used with navigation items. Use `.UnderlineNav-octicon` to add color and hover styles.

```erb title="UnderlineNav with Counter"
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">
      <%= octicon "tools", :class => "UnderlineNav-octicon" %>
      Item 1
    </a>
    <a href="#url" class="UnderlineNav-item">
      <%= octicon "tools", :class => "UnderlineNav-octicon" %>
      Item 2
      <span class="Counter">10</span>
     </a>
     <a href="#url" class="UnderlineNav-item">
       <%= octicon "tools", :class => "UnderlineNav-octicon" %>
       Item 3
    </a>
    <a href="#url" class="UnderlineNav-item">
      <%= octicon "tools", :class => "UnderlineNav-octicon" %>
      Item 4
     </a>
  </div>
</nav>
```

Use `.UnderlineNav--full` in combination with container styles and `.UnderlineNav-container` to make navigation fill the width of the container.

```html title="UnderlineNav--full"
<nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
  <div class="container-lg UnderlineNav-container">
    <div class="UnderlineNav-body">
      <a href="#url" class="UnderlineNav-item selected">Item 1</a>
      <a href="#url" class="UnderlineNav-item">Item 2
        <span class="Counter">10</span>
       </a>
      <a href="#url" class="UnderlineNav-item">Item 3</a>
      <a href="#url" class="UnderlineNav-item">Item 4</a>
    </div>
    <div class="UnderlineNav-actions">
      <a class="btn">Button</a>
    </div>
  </div>
</nav>
```

## Side Nav

The Side Nav is a vertical list of navigational links, typically used on the left side of a page. **Width and placement must be set by you.** For example by using our grid columns or by applying an inline `width`.

- You can use a **light gray background** and a **border** if the parent element doesn't have it already.
- To add a "selected" state use `aria-current="page"`. If it should act more like a "tab menu" with button elements, use `aria-selected="true"` instead.

```html
<nav class="SideNav bg-gray-light border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">Account</a>
  <a class="SideNav-item" href="#url" aria-current="page">Profile</a>
  <a class="SideNav-item" href="#url">Emails</a>
  <a class="SideNav-item" href="#url">Notifications</a>
</nav>
```

Any kind of content can be added inside a Side Nav item. Use utility classes to further style them if needed.

```html
<nav class="SideNav bg-gray-light border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    Text only
  </a>
  <a class="SideNav-item" href="#url">
    <img class="avatar avatar-small mr-2" src="https://avatars.githubusercontent.com/hubot?s=40" alt="hubot" height="20" width="20">
    With an avatar
  </a>
  <a class="SideNav-item" href="#url">
    <svg class="octicon octicon-octoface mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
    With an icon
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a status icon <svg class="octicon octicon-primitive-dot color-green-5 ml-2 float-right" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a label <span class="Label bg-blue" title="Label: label">label</span>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a counter <span class="Counter bg-gray-2 ml-1">16</span>
  </a>
  <a class="SideNav-item" href="#url">
    <h5>With a heading</h5>
    <span>and some longer description</span>
  </a>
</nav>
```

### Side Sub Nav

A more lightweight version, without borders and more condensed.

```html
<aside class="bg-gray-light border" style="max-width: 360px">
  <nav class="SideSubNav">
    <h5 class="text-gray mb-2 pb-1 border-bottom">Menu</h5>
    <a class="SideSubNav-item" href="#url">Account</a>
    <a class="SideSubNav-item" href="#url" aria-current="page">Profile</a>
    <a class="SideSubNav-item" href="#url">Emails</a>
    <a class="SideSubNav-item" href="#url">Notifications</a>
  </nav>
<aside>
```

The `.SideSubNav` can also be nested.

```html
<nav class="SideNav bg-gray-light border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    <svg class="SideNav-icon octicon octicon-person mr-2" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
    Account
  </a>
  <a class="SideNav-item" href="#url" aria-current="page">
    <svg class="SideNav-icon octicon octicon-octoface mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
    Profile
  </a>
  <nav class="SideSubNav border-top pl-6">
    <a class="SideSubNav-item pl-1" href="#url" aria-current="page">Sub item 1</a>
    <a class="SideSubNav-item pl-1" href="#url">Sub item 2</a>
    <a class="SideSubNav-item pl-1" href="#url">Sub item 3</a>
  </nav>
  <a class="SideNav-item" href="#url">
    <svg class="SideNav-icon octicon octicon-mail mr-2" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
    Emails
  </a>
</nav>
```

## Tabnav

When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of... tabs!

```html title="tabnav"
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo tab</a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

Use `.float-right` to align additional elements in the `.tabnav`:

```html title="tabnav with buttons"
<div class="tabnav">
  <a class="btn btn-sm float-right" href="#url" role="button">Button</a>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

Additional bits of text and links can be styled for optimal placement with `.tabnav-extra`:

```html title="tabnav-extra"
<div class="tabnav">
  <div class="tabnav-extra float-right">
    Tabnav widget text here.
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

```html title="tabnav with everything"
<div class="tabnav">
  <div class="float-right">
    <a class="tabnav-extra" href="#url">
      Tabnav extra link
    </a>
    <a class="tabnav-extra" href="#url">
      Tabnav extra link
    </a>
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

## Filter list

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white.

```html title="filter-list"
<ul class="filter-list">
  <li>
    <a href="#url" class="filter-item selected" aria-current="page">
      <span class="count" title="results">21</span>
      First filter
    </a>
  </li>
  <li>
    <a href="#url" class="filter-item">
      <span class="count" title="results">3</span>
      Second filter
    </a>
  </li>
  <li>
    <a href="#url" class="filter-item">
      Third filter
    </a>
  </li>
</ul>
```

## Sub navigation

`.subnav` is navigation that is typically used when on a dashboard type interface with another set of navigation above it. This helps distinguish navigation hierarchy.

```html title="subnav"
<nav class="subnav" aria-label="Respository">
  <a href="#url" class="subnav-item selected" aria-current="page">Item 1</a>
  <a href="#url" class="subnav-item">Item 2</a>
  <a href="#url" class="subnav-item">Item 3</a>
</nav>
```

You can have `subnav-search` in the subnav bar.

```erb title="subnav-search"
<div class="subnav">
  <nav class="subnav-links" aria-label="Repository">
    <a href="#url" class="subnav-item selected" aria-current="page">Item 1</a>
    <a href="#url" class="subnav-item">Item 2</a>
    <a href="#url" class="subnav-item">Item 3</a>
  </nav>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site">
    <%= octicon "search", :class => "subnav-search-icon" %>
  </div>
</div>
```


You can also use a `subnav-search-context` to display search help in a select menu.

```erb title="subnav-search-context"
<div class="subnav">
  <nav class="subnav-links">
    <a href="#url" class="subnav-item selected">Item 1</a>
    <a href="#url" class="subnav-item">Item 2</a>
    <a href="#url" class="subnav-item">Item 3</a>
  </nav>
  <div class="float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context">
    <button type="button" name="button" class="btn select-menu-button js-menu-target" aria-expanded="false" aria-haspopup="true">Filters </button>
    <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
      <div class="select-menu-modal">
        <div class="select-menu-list">
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 3
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site">
    <%= octicon "search", :class => "subnav-search-icon" %>
  </div>
</div>
```
