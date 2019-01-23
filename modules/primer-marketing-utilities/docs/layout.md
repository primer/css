---
title: Marketing Layout
sort_title: Layout Marketing
path: utilities/marketing-layout
status: Stable
---

Marketing layout utilities build on top of [primer-core utilities](/css/utilities/layout#position), adding the option of responsive positioning.

{:toc}

## Position elements with spacing utilities

Position elements from all four element edges (`top`, `right`, `bottom`, and `left`) using any spacing utility from the global spacing scale and the marketing spacing scale (from `$spacer-1` to `$spacer-12`), including negative and 0 values.

Commonly used with `.position-absolute` to position decorative assets and shapes on marketing sites.

In an effort to reduce css bloat, responsive breakpoints are only supported for `md` and `lg` breakpoints. There is no support for `sm` and `xl` breakpoints.

```html
<div class="position-relative p-6 bg-gray">
  <div class="position-absolute top-2 top-md-0 top-lg-8 border bg-white p-2">
    <span class="d-md-none">.top-2</span>
    <span class="d-none d-md-inline d-lg-none">.top-md-0</span>
    <span class="d-none d-lg-inline">.top-lg-8</span>
  </div>
</div>
```
