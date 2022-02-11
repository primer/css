---
title: Tooltips
path: components/tooltips
status: Deprecated
source: 'https://github.com/primer/css/tree/main/src/tooltips'
bundle: tooltips
---

<Note>
  Please note that the `.tooltipped` component is **deprecated**.
</Note>

Add tooltips built entirely in CSS to appropriate elements.

## Implementation and accessibility

Tooltips as a UI pattern should be our last resort for conveying information because it is hidden by default and often with zero or little visual indicator of its existence.

Before adding a tooltip, please consider: Is this information essential and necessary* Can the UI be made clearer? Can the information be shown on the page by default?

### Attention

- **Never** use tooltips on static elements. They should only be used on interactive elements, because users cannot tab-focus into static elements, which may make the content inaccessible for keyboard-only users and screen readers.
- we use `aria-label` for tooltip contents, because it is crucial that they are accessible to screen reader users. However, `aria-label` **replaces** the text content of an element in screen readers, so only use `.tooltipped` on elements with no existing text content such as an icon-only button.
- Tooltip classes will conflict with Octicon styles, and as such, must be applied to the parent element instead of the icon.

## Tooltip direction
Specify the direction of a tooltip with north, south, east, and west directions:

```html live
<div class="d-flex flex-justify-center pt-4">
  <button type="button" class="tooltipped tooltipped-nw m-2 p-2 border" aria-label="This is the tooltip on the North West side.">
    .tooltipped-nw
  </button>
  <button type="button" class="tooltipped tooltipped-n m-2 p-2 border" aria-label="This is the tooltip on the North side.">
    .tooltipped-n
  </button>
  <button type="button" class="tooltipped tooltipped-ne m-2 p-2 border" aria-label="This is the tooltip on the North East side.">
    .tooltipped-ne
  </button>
</div>
<div class="d-flex flex-justify-center">
  <button type="button" class="tooltipped tooltipped-w m-2 p-2 border" aria-label="This is the tooltip on the West side.">
    .tooltipped-w
  </button>
  <button type="button" class="tooltipped tooltipped-e m-2 p-2 border" aria-label="This is the tooltip on the East side.">
    .tooltipped-e
  </button>
</div>
<div class="d-flex flex-justify-center pb-4">
  <button type="button" class="tooltipped tooltipped-sw m-2 p-2 border" aria-label="This is the tooltip on the South West side.">
    .tooltipped-sw
  </button>
  <button type="button" class="tooltipped tooltipped-s m-2 p-2 border" aria-label="This is the tooltip on the South side.">
    .tooltipped-s
  </button>
  <button type="button" class="tooltipped tooltipped-se m-2 p-2 border" aria-label="This is the tooltip on the South East side.">
    .tooltipped-se
  </button>
</div>
```

## Tooltip alignment
Align tooltips to the left or right of an element, combined with a directional class to specify north or south. Use a modifier of `1` or `2` to choose how much the tooltip's arrow is indented.

```html live
<div class="d-flex flex-justify-center pt-4">
  <button type="button" class="tooltipped tooltipped-nw tooltipped-align-right-1 m-2 p-2 border" aria-label="Tooltipped NW and aligned right.">
    .tooltipped-nw .tooltipped-align-right-1
  </button>
  <button type="button" class="tooltipped tooltipped-ne tooltipped-align-left-1 m-2 p-2 border" aria-label="Tooltipped NE and aligned left.">
    .tooltipped-ne .tooltipped-align-left-1
  </button>
</div>
<div class="d-flex flex-justify-center">
  <button type="button" class="tooltipped tooltipped-nw tooltipped-align-right-2 m-2 p-2 border" aria-label="Tooltipped NW and aligned right.">
    .tooltipped-nw .tooltipped-align-right-2
  </button>
  <button type="button" class="tooltipped tooltipped-ne tooltipped-align-left-2 m-2 p-2 border" aria-label="Tooltipped NE and aligned left.">
    .tooltipped-ne .tooltipped-align-left-2
  </button>
</div>
<div class="d-flex flex-justify-center">
  <button type="button" class="tooltipped tooltipped-sw tooltipped-align-right-1 m-2 p-2 border" aria-label="Tooltipped SE and aligned right.">
    .tooltipped-sw .tooltipped-align-right-1
  </button>
  <button type="button" class="tooltipped tooltipped-se tooltipped-align-left-1 m-2 p-2 border" aria-label="Tooltipped SW and aligned left.">
    .tooltipped-se .tooltipped-align-left-1
  </button>
</div>
<div class="d-flex flex-justify-center pb-4">
  <button type="button" class="tooltipped tooltipped-sw tooltipped-align-right-2 m-2 p-2 border" aria-label="Tooltipped SE and aligned right.">
    .tooltipped-sw .tooltipped-align-right-2
  </button>
  <button type="button" class="tooltipped tooltipped-se tooltipped-align-left-2 m-2 p-2 border" aria-label="Tooltipped SW and aligned left.">
    .tooltipped-se .tooltipped-align-left-2
  </button>
</div>
```

## Tooltips with multiple lines
Use `.tooltipped-multiline` when you have long content. This style has some limitations: you cannot pre-format the text with newlines, and tooltips are limited to a max-width of `250px`.


```html live
<div class="d-flex flex-justify-center pt-6">
  <button type="button" class="tooltipped tooltipped-n tooltipped-multiline m-2 p-2 border" aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines.">
    .tooltipped-multiline
  </button>
</div>
```

## Tooltips with no delay

By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being distracting. There is a `.tooltipped-no-delay` modifier class you can use to override this.

```html live
<div class="d-flex flex-justify-center pt-4">
  <button type="button" class="tooltipped tooltipped-n tooltipped-no-delay m-2 p-2 border" aria-label="This is the tooltip on the no delay side.">
    .tooltipped-no-delay
  </button>
</div>
```
