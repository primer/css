---
title: Header
path: components/header
status: Stable
source: 'https://github.com/primer/css/tree/master/src/header'
bundle: header
---

Use the Header component to create a header that has all of it's items aligned vertically with consistent horizontal spacing.

## Table of Contents

## Header

The `.Header` class is the wrapping class that aligns all the items properly and gives the header it's dark background. Each direct child of the `.Header` component is expected to be a `.Header-item` component. The component utilizes flexbox CSS to align all these items properly and applies spacing scale margin.

```html title="Header"
<div class="Header">
  <div class="Header-item">
    <a href="#" class="Header-link f4 d-flex flex-items-center">
      <%= octicon "mark-github", class: "mr-2", height: 32 %>
       GitHub
    </a>
  </div>
  <div class="Header-item">
    <input type="search" class="form-control input-dark" />
  </div>
  <div class="Header-item Header-item--full">
    Menu
  </div>
  <div class="Header-item mr-0">
    <img class="avatar" height="20" alt="@octocat" src="https://github.com/octocat.png" width="20">
  </div>
</div>

```

## Header-item

All items directly under the `.Header` component should be a `.Header-item` component. Inside these components can be anything (text, forms, images...), and the `.Header-item` component will make sure these elements vertically align with each other.

`.Header-item` elements have a built-in margin that will need to be overridden with the `mr-0` utility class for the last element in the container. We relied on the utility classes here instead of `:last-child` because the last child isn't always the item visible. On responsive pages, there's a mobile menu that gets presented to the user at smaller breakpoints.

```html title="Header-item"
<div class="Header">
  <!-- Text item -->
  <div class="Header-item">
    Text item
  </div>

  <!-- Form item  -->
  <div class="Header-item">
    <input class="form-control input-dark" type="text"/>
  </div>

  <!-- Image item  -->
  <div class="Header-item">
    <img class="avatar" height="20" alt="@octocat" src="https://github.com/octocat.png" width="20">
  </div>
</div>

```



### Header-item--full

The `.Header-item` element has a modifier class, `.Header-item--full`, that stretches it to fill the available space and push any remaining items to the right.

```html title="Header-item--full"
<div class="Header">
  <div class="Header-item">
    Item 1
  </div>

  <!-- Full item stretches across -->
  <div class="Header-item Header-item--full border">
    Item 2
  </div>

  <div class="Header-item mr-0 ">
    Item 3
  </div>

</div>

```

## Header-link

Add the `.Header-link` class to any anchor tags in the header to give them consistent styling and hover opacity. This class makes the links white, bold and 70% fade on hover.

```html title="Header-link"
<div class="Header">
  <div class="Header-item">
    <a href="#" class="Header-link">About</a>
  </div>
  <div class="Header-item">
    <a href="#" class="Header-link">Releases</a>
  </div>
  <div class="Header-item">
    <a href="#" class="Header-link">Team</a>
  </div>
</div>
```
