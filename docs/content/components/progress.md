---
title: Progress
path: components/progress
status: Beta
source: 'https://github.com/primer/css/tree/main/src/progress'
bundle: progress
---

Use progress components to visualize task completion. The `Progress` class adds a background color and aligns its children horizontally with flexbox. The children (`Progress-item`) should be individually colored with [background utilities](/utilities/colors#background-colors) and sized with inline `width` styles in percentages. Overflow is hidden, so children that overflow will be clipped.

```html live
<span class="Progress">
  <span class="Progress-item color-bg-success-emphasis" style="width: 50%;"></span>
</span>
```

## Large progress

Large progress bars are slightly taller than the default.

```html live
<span class="Progress Progress--large">
  <span class="Progress-item color-bg-success-emphasis" style="width: 50%;"></span>
</span>
```

## Small progress

Small progress bars are shorter than the default.

```html live
<span class="Progress Progress--small">
  <span class="Progress-item color-bg-success-emphasis" style="width: 50%;"></span>
</span>
```

## Inline progress

For inline progress indicators, use the `Progress` and `d-inline-flex` with an inline element such as `<span>` and add a custom `width` style:

```html live
<span class="text-small color-fg-muted mr-2">4 of 16</span>
<span class="Progress d-inline-flex" style="width: 160px">
  <span class="Progress-item color-bg-success-emphasis" style="width: 25%"></span>
</span>
```

## Accessibility

In cases where it's not possible to describe the progress in text, provide an `aria-label` attribute that does so:

```html live
<div aria-label="tasks: 8 of 10 complete">
  <span class="Progress">
    <span class="Progress-item color-bg-success-emphasis" style="width: 80%;"></span>
  </span>
</div>
```

## Progress with multiple values

To show the progress of tasks in multiple states (such as "done", "in progress", and "open"), add the `Progress-item` class and a distinct background color utility. Then give each one a percentage width proportional to the total number. Children are stacked from left to right, so if your widths add up to 100%, your bars will too. Note that items with very low percentage values might not be visible if they are smaller than `1px` in width.

```html live
<div class="tooltipped tooltipped-n" aria-label="tasks: 80 done, 14 in progress, 6 open">
  <span class="Progress">
    <span class="Progress-item color-bg-success-emphasis" style="width: 50%;"></span>
    <span class="Progress-item color-bg-attention-emphasis" style="width: 25%;"></span>
    <span class="Progress-item color-bg-danger-emphasis" style="width: 15%;"></span>
    <span class="Progress-item color-bg-accent-emphasis" style="width: 10%;"></span>
  </span>
</div>
```
