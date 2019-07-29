---
title: Progress
path: components/progress
status: New Release
source: 'https://github.com/primer/css/tree/master/src/progress'
bundle: progress
---


Use Progress components to visualize task completion. The `Progress` class adds a background color and aligns its children horizontally with flexbox. The children should be individually colored with [background utilities](/css/utilities/colors#background-colors) and sized with inline `width` styles in percentages. Overflow is hidden, so children that overflow will be clipped.

```html
<span class="Progress">
  <span class="bg-green" style="width: 50%;"></span>
</span>
```

## Large Progress
Large progress bars are slightly taller than the default.

```html
<span class="Progress Progress--large">
  <span class="bg-green" style="width: 50%;"></span>
</span>
```

## Small Progress
Large progress bars are shorter than the default.

```html
<span class="Progress Progress--small">
  <span class="bg-green" style="width: 50%;"></span>
</span>
```

## Inline Progress
For inline progress indicators, use the `Progress` and `d-inline-flex` with an inline element such as `<span>` and add a custom `width` style:

```html
<span class="text-small text-gray mr-2">4 of 16</span>
<span class="Progress d-inline-flex" style="width: 160px">
  <div class="bg-green" style="width: 25%"></div>
</span>
```

## Accessibility
In cases where it's not possible to describe the progress in text, provide an `aria-label` attribute that does so:

```html
<div aria-label="tasks: 8 of 10 complete">
  <span class="Progress">
    <span class="bg-green" style="width: 80%;"></span>
  </span>
</div>
```

## Progress with multiple values
To show the progress of tasks in multiple states (such as "done", "in progress", and "open"), use distinct background color utilities and give each one a percentage width proportional to the total number. Children are stacked from left to right, so if your widths add up to 100%, your bars will too.

```html
<div class="tooltipped tooltipped-n" aria-label="tasks: 80 done, 14 in progress, 6 open">
  <span class="Progress">
    <span class="bg-green" style="width: 80%;"></span>
    <span class="bg-purple" style="width: 14%;"></span>
    <span class="bg-red" style="width: 6%;"></span>
  </span>
</div>
```

