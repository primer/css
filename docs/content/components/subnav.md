---
title: Sub navigation
path: components/subnav
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
bundle: navigation
---

`.subnav` is navigation that is typically used when on a dashboard type interface with another set of navigation above it. This helps distinguish navigation hierarchy.

```html live title="subnav"
<nav class="subnav" aria-label="Repository">
  <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
  <a class="subnav-item" href="#url">Item 2</a>
  <a class="subnav-item" href="#url">Item 3</a>
</nav>
```

You can have `subnav-search` in the subnav bar.

```html live
<div class="subnav">
  <nav class="subnav-links" aria-label="Repository">
    <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
    <a class="subnav-item" href="#url">Item 2</a>
    <a class="subnav-item" href="#url">Item 3</a>
  </nav>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", class: "subnav-search-icon" %> -->
    <svg class="subnav-search-icon octicon octicon-search" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"> <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" /> </svg>
  </div>
</div>
```

You can also use a `subnav-search-context` to display search help in a select menu.

```html live
<div class="subnav">
  <nav class="subnav-links">
    <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
    <a class="subnav-item" href="#url">Item 2</a>
    <a class="subnav-item" href="#url">Item 3</a>
  </nav>
</div>
<div class="subnav">
  <div class="float-left subnav-search-context">
    <button class="btn" type="button" name="button" aria-expanded="false" aria-haspopup="true">
      Filters
      <span class="dropdown-caret"></span>
    </button>
  </div>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", class: "subnav-search-icon" %> -->
    <svg class="subnav-search-icon octicon octicon-search" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"> <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" /> </svg>
  </div>
</div>
```
