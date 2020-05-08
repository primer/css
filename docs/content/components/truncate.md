---
title: Truncate
path: components/truncate
status: Stable
source: 'https://github.com/primer/css/tree/master/src/truncate'
bundle: truncate
---


The `css-truncate` class will shorten text with an ellipsis. Always add a `title` attribute to the truncated element so the full text remains accessible.

## Truncate overflow

Combine the `css-truncate` and `css-truncate-overflow` classes to prevent text that overflows from wrapping.

```html live
<div class="col-3">
  <div class="css-truncate css-truncate-overflow border p-3"
    title="branch-name-that-is-really-long">
    branch-name-that-is-really-long
  </div>
  <div class="border p-3 mt-3">
    branch-name-that-is-really-long
  </div>
</div>
```

## Truncate target

Combine the `css-truncate` and `css-truncate-target` classes for inline (or inline-block) elements with a fixed maximum width (default: `125px`).

```html live
Some text with a
<strong class="css-truncate css-truncate-target"
  title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</strong>
```

You can override the maximum width of the truncated text with an inline `style` attribute:

```html live
Some text with a
<strong class="css-truncate css-truncate-target" style="max-width: 180px"
  title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</strong>
```

You can reveal the entire string on hover with the addition of `.expandable`.

```html live
Some text with a
<strong class="css-truncate css-truncate-target expandable"
  title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</strong>
```
