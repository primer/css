---
title: Layout
status: New release
status_issue: https://github.com/github/design-systems/issues/325
---

The following layout utilities are meant to used in addition to those within primer-core.

{:toc}

## Responsive position

These position utilities behave the same way as the positioning utilities in primer-core, however they include responsive states so that they can be used at specific viewport widths.

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
