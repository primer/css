---
title: Blankslate
path: components/blankslate
status: Stable
source: 'https://github.com/primer/css/tree/main/src/blankslate'
bundle: blankslate
---

Blankslates are for when there is a lack of content within a page or section. Use them as placeholders to tell users why something isn't there. Be sure to provide an action to add content as well.

## Basic example

Wrap some content in the outer `.blankslate` wrapper to give it the blankslate appearance.

```html live
<div class="blankslate">
  <h3 class="mb-1">This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

## With Octicons

When it helps the message, include (relevant) icons in your blank slate. Add the `.blankslate-icon` class to give icons the proper styling.

```html live
<div class="blankslate">
  <!-- <%= octicon "octoface", :height = 24, :class => "blankslate-icon" %> -->
  <svg class="octicon octicon-octoface blankslate-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path><path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path></svg>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>
```

## With graphic, button and link

Add a graphic, button and/or link to add additional information and provide users a way to add content to this page.

```html live
<div class="blankslate">
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

## Variations

Add an additional optional class to the `.blankslate` to change its appearance.

### Narrow

`.blankslate-narrow` narrows the blankslate container to not occupy the entire available width.

```html live
<div class="blankslate blankslate-narrow">
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Large

`.blankslate-large` increases the size of the text in the blankslate

```html live
<div class="blankslate blankslate-large">
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

### Spacious

`.blankslate-spacious` significantly increases the vertical padding.

```html live
<div class="blankslate blankslate-spacious">
  <img src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png" alt="" class="mb-3" />
  <h3 class="mb-1">You don’t seem to have any pull requests.</h3>
  <p>Pull requests help you discuss potential changes before they are merged into the base branch.</p>
  <button class="btn btn-primary my-3" type="button">New pull request</button>
  <p><button class="btn-link" type="button">Learn more</button></p>
</div>
```

**Note**: It's possible to combine variations. Large and spacious (`blankslate blankslate-large blankslate-spacious`) is often used together.

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
