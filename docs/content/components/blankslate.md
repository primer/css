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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-git-commit blankslate-icon" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path></svg>
  <!-- <%= octicon "tag", :height = 32, :class => "blankslate-icon" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-tag blankslate-icon" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>
  <!-- <%= octicon "git-branch", :height = 32, :class => "blankslate-icon" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-git-branch blankslate-icon" aria-hidden="true">
<path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
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
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
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
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
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
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
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
    <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
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
    <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
    <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
    <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
    <button class="btn btn-primary my-3" type="button">New pull request</button>
    <p><button class="btn-link" type="button">Learn more</button></p>
  </div>
</div>
```
