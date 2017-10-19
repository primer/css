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
<div class="position-relative p-6">
  <div class="position-md-absolute bottom-0 right-0 border p-2">
    <a href="#url" class="d-block p-1">Mashed potatoes</a>
  </div>
</div>
```
