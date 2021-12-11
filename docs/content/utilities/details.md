---
title: Details
path: utilities/details
status: Stable
source: 'https://github.com/primer/css/blob/main/src/utilities/details.scss'
bundle: utilities
---

Details classes are created to enhance the native behaviors of `<details>`.

## Fullscreen click area

Use `.details-overlay` to expand the click area of `<summary>` to cover the full screen, so user can click anywhere on a page to close `<details>`.

```html live
<details class="details-overlay">
  <summary class="btn">More</summary>
  <div class="border p-3 mt-2">Hidden text</div>
</details>
```

## Darkened fullscreen click area

Use `.details-overlay-dark` darken the click area overlay. Useful for modals.

```html live
<details class="details-overlay details-overlay-dark">
  <summary class="btn">More</summary>
  <div class="position-relative color-bg-default rounded p-3 mt-2" style="z-index: 112;">
    Hidden text
  </div>
</details>
```

## Custom caret

Use `.details-reset` to remove the default caret (that little triangle on the left). You then can add the `.dropdown-caret` on the right of the text.

```html live
<details class="details-reset">
  <summary class="btn">More <span class="dropdown-caret"></summary>
  <div class="border p-3 mt-2">Hidden text</div>
</details>
```

## Using button styles with the details summary element

You can add `.btn` and `.btn-*` classes to any
[`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
element so that it gains the appearance of a button, and
selected/active styles when the parent
[`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
element is open.

```html live
<details>
  <summary class="btn btn-primary">More</summary>
  <div class="border p-3 mt-2">Hidden text</div>
</details>

<details class="details-reset mt-3">
  <summary class="btn-link">More <span class="dropdown-caret"></summary>
  <div class="border p-3 mt-2">Hidden text</div>
</details>
```
