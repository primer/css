---
title: Gap
path: utilities/gap
status: Stable
source: 'https://github.com/primer/css/blob/main/src/utilities/gap.scss'
bundle: utilities
---

Gap utilities can be used on elements with a display type of `flex` or `grid` to create consistent spacing between child elements. This can replace the need for using margins in many cases.

Gap utilities are based on a global [spacing scale](/support/spacing) which helps keep spacing consistent. These utilities help us reduce the amount of custom CSS that share the same properties, and allows to achieve many different page layouts using the same styles.


## Naming convention

Since gap utilities have many variations and will be used in many places, we use a shorthand naming convention to help keep class names succinct.

| Shorthand | Description |
| --- | --- |
| 0   | 0     |
| 1   | 4px   |
| 2   | 8px   |
| 3   | 16px  |
| 4   | 24px  |
| 5   | 32px  |
| 6   | 40px  |


## Gap utilities

Use gap utilities on parent elements to apply equal spacing between all of their child elements. These utilities can be used with a spacing scale from 0-6.

```html live
<div class="mt-3 color-bg-attention d-flex gap-0">
  <div class="color-bg-subtle p-1">.gap-0</div>
  <div class="color-bg-subtle p-1">.gap-0</div>
  <div class="color-bg-subtle p-1">.gap-0</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-1">
  <div class="color-bg-subtle p-1">.gap-1</div>
  <div class="color-bg-subtle p-1">.gap-1</div>
  <div class="color-bg-subtle p-1">.gap-1</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-2">
  <div class="color-bg-subtle p-1">.gap-2</div>
  <div class="color-bg-subtle p-1">.gap-2</div>
  <div class="color-bg-subtle p-1">.gap-2</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-3">
  <div class="color-bg-subtle p-1">.gap-3</div>
  <div class="color-bg-subtle p-1">.gap-3</div>
  <div class="color-bg-subtle p-1">.gap-3</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-4">
  <div class="color-bg-subtle p-1">.gap-4</div>
  <div class="color-bg-subtle p-1">.gap-4</div>
  <div class="color-bg-subtle p-1">.gap-4</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-5">
  <div class="color-bg-subtle p-1">.gap-5</div>
  <div class="color-bg-subtle p-1">.gap-5</div>
  <div class="color-bg-subtle p-1">.gap-5</div>
</div>
<div class="mt-3 color-bg-attention d-flex gap-6">
  <div class="color-bg-subtle p-1">.gap-6</div>
  <div class="color-bg-subtle p-1">.gap-6</div>
  <div class="color-bg-subtle p-1">.gap-6</div>
</div>
```


## Reset gap
Reset gap values built into components with `gap-0`.


## Responsive gaps

All gap utilities can be adjusted per [breakpoint](/utilities/grid#breakpoints) using the following formula: `gap-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.
