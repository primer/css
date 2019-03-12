---
title: Marketing Borders
sort_title: Borders Marketing
path: utilities/marketing-borders
status: New release
source: 'https://github.com/primer/css/blob/master/src/marketing/utilities/borders.scss'
bundle: marketing-utilities
---

The following border utilities are meant to be used in addition to those within primer-core.

{:toc}

## Border Colors

### White border with alpha transparency

Use `.border-white-fade-xx` to add a white border with various levels of alpha transparency. This is useful when you want a border that is a lighter shade of the background color. Additional border colors are available in [primer-core border utilities](/css/utilities/borders#border-colors).

```html
<div class="bg-gray-dark text-white p-3 mb-3">
  <div class="border-bottom border-white-fade-15 p-2 mb-2">
    .border-white-fade-15
  </div>
  <div class="border-bottom border-white-fade-30 p-2 mb-2">
    .border-white-fade-30
  </div>
  <div class="border-bottom border-white-fade-50 p-2 mb-2">
    .border-white-fade-50
  </div>
  <div class="border-bottom border-white-fade-70 p-2 mb-2">
    .border-white-fade-70
  </div>
  <div class="border-bottom border-white-fade-85 p-2 mb-2">
    .border-white-fade-85
  </div>
</div>
<div class="bg-blue text-white p-3">
  <div class="border-bottom border-white-fade-15 p-2 mb-2">
    .border-white-fade-15
  </div>
  <div class="border-bottom border-white-fade-30 p-2 mb-2">
    .border-white-fade-30
  </div>
  <div class="border-bottom border-white-fade-50 p-2 mb-2">
    .border-white-fade-50
  </div>
  <div class="border-bottom border-white-fade-70 p-2 mb-2">
    .border-white-fade-70
  </div>
  <div class="border-bottom border-white-fade-85 p-2 mb-2">
    .border-white-fade-85
  </div>
</div>
```
