---
title: Layout
status: New release
---

Marketing layout utilities build on top of [primer-core utilities](../../utilities/layout/#position), adding the option of responsive positioning.

{:toc}

## Responsive position

Use responsive position utilities to adjust the position of an element at different breakpoints.

```html
<div class="position-relative p-6 bg-gray">
  <div class="d-inline-block position-md-absolute bottom-0 right-0 border bg-white p-2">
    .position-md-absolute
  </div>
</div>

<div class="float-left border m-3" style="width:100px; height:100px;">
  default
</div>
<div class="float-left position-lg-relative border m-3" style="width:100px; height:100px; top:12px; left:12px;">
  .position-lg-relative
</div>
<div class="float-left border m-3" style="width:100px; height:100px;">
  default
</div>
<div class="float-left border m-3" style="width:100px; height:100px;">
  default
</div>
```

## Position elements with spacing utilities

Position elements from all four element edges (`top`, `right`, `bottom`, and `left`) using any spacing utility from the global spacing scale and the marketing spacing scale (from `$spacer-1` to `$spacer-12`).

Commonly used with `.position-absolute` to position decorative assets and shapes on marketing sites.

```html
<div className='position-relative p-6 bg-gray'>
  <div className='position-absolute top-4 top-md-8 border bg-white p-2'>
    .position-absolute
  </div>
</div>
```
