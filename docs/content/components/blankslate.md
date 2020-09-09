---
title: Blankslate
path: components/blankslate
status: Stable
source: 'https://github.com/primer/css/tree/master/src/blankslate'
bundle: blankslate
---

Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

## Basic example

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

```html live
<div class="blankslate">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

## With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add `.blankslate-icon` to any `.mega-octicon`s as the first elements in the blankslate, like so.

```html live
<div class="blankslate">
  <!-- <%= octicon "git-commit", :height = 32, :class => "blankslate-icon" %> -->
  <svg width="28" height="32" viewBox="0 0 14 16" class="octicon octicon-git-commit blankslate-icon" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
    />
  </svg>
  <!-- <%= octicon "tag", :height = 32, :class => "blankslate-icon" %> -->
  <svg width="28" height="32" viewBox="0 0 14 16" class="octicon octicon-tag blankslate-icon" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"
    />
  </svg>
  <!-- <%= octicon "git-branch", :height = 32, :class => "blankslate-icon" %> -->
  <svg width="20" height="32" viewBox="0 0 10 16" class="octicon octicon-git-branch blankslate-icon" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    />
  </svg>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

## Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Narrow

Narrows the blankslate container to not occupy the entire available width.

```html live
<div class="blankslate blankslate-narrow">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Spacious

Significantly increases the vertical padding.

```html live
<div class="blankslate blankslate-spacious">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Large

Increases the size of the text in the blankslate

```html live
<div class="blankslate blankslate-large">
  <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Add border

To add a border, wrap the blankstate component with the [Box component](/components/box).

```html live
<div class="Box">
  <div class="blankslate">
    <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
    <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
    <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
    <button class="btn btn-primary my-3" type="button">New pull request</button>
    <p><button class="btn-link" type="button">Learn more</button></p>
  </div>
</div>
```

### Capped

Removes the `border-radius` on the top corners.

```html live
<div class="Box rounded-top-0">
  <div class="blankslate">
    <img src="https://ghicons.github.com/assets/images/light/Pull%20Request.png" alt="" class="mb-3" />
    <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
    <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
    <button class="btn btn-primary my-3" type="button">New pull request</button>
    <p><button class="btn-link" type="button">Learn more</button></p>
  </div>
</div>
```
