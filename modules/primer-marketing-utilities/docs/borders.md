---
title: Borders
status: New release
status_issue: https://github.com/github/design-systems/issues/325
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

In addition to `.border-black-fade` which is in primer-core, primer-marketing includes `.border-white-fade`. This adds a rgba white border with an alpha transparency of `0.15`. This is useful when you want a border that is a lighter shade of the background color.

```html
<div class="border border-white-fade bg-gray-dark p-2 mb-2">
  .border-white-fade .bg-gray-dark
</div>
<div class="border border-white-fade bg-blue p-2 mb-2">
  .border-white-fade .bg-blue
</div>
```
