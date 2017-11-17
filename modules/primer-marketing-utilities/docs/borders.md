---
title: Borders
status: New release
---

The following border utilities are meant to used in addition to those within primer-core.

{:toc}

## Responsive borders

Top, right, bottom, and left border utilities are can be used responsively to add or remove borders to an element at different screensizes.

```html
<div class="border-top border-sm-right border-md-bottom border-lg-top-0">
  .border-top-0
</div>
```

## Border Colors

### White border with alpha transparency

Use `.border-white-fade` to add a white border with an alpha transparency of 0.15. This is useful when you want a border that is a lighter shade of the background color. Additional border colors are available in [primer-core border utilities](/borders/#border-colors).

```html
<div class="bg-gray-dark text-white p-3 mb-2">
  <span class="border border-white-fade p-2">
    .border-white-fade .bg-gray-dark
  </span>
</div>
<div class="bg-blue text-white p-3">
  <span class="border border-white-fade p-2">
    .border-white-fade .bg-blue
  </span>
</div>
```
