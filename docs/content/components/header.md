---
title: Header
path: components/header
status: Stable
source: 'https://github.com/primer/css/tree/main/src/header'
bundle: header
---

Use the Header component to create a header that has all of its items aligned vertically with consistent horizontal spacing.

## Header

The `.Header` class is the wrapping class that aligns all the items properly and gives the header its dark background. Each direct child of the `.Header` component is expected to be a `.Header-item` component. The component utilizes flexbox CSS to align all these items properly and applies spacing scale margin.

```html live
<div class="Header">
  <div class="Header-item">
    <a href="#" class="Header-link f4 d-flex flex-items-center">
      <!-- <%= octicon "mark-github", class: "mr-2", height: 32 %> -->
      <svg height="32" class="octicon octicon-mark-github mr-2" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>GitHub</span>
    </a>
  </div>
  <div class="Header-item">
    <input type="search" class="form-control Header-input" />
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

```html live
<div class="Header">
  <!-- Text item -->
  <div class="Header-item">
    Text item
  </div>

  <!-- Form item  -->
  <div class="Header-item">
    <input class="form-control Header-input" type="text"/>
  </div>

  <!-- Image item  -->
  <div class="Header-item">
    <img class="avatar" height="20" alt="@octocat" src="https://github.com/octocat.png" width="20">
  </div>
</div>

```



### Header-item--full

The `.Header-item` element has a modifier class, `.Header-item--full`, that stretches it to fill the available space and push any remaining items to the right.

```html live
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

```html live
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
