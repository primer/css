---
title: Padding
status: New release
status_issue: https://github.com/github/design-systems/issues/378
---

Padding spacing utilities can be applied to elements to achieve bigger y-directional spaces beyond the `primer-core` spacing scale.
See [primer-marketing-support](https://github.com/primer/primer-css/tree/master/modules/primer-marketing-support) for the extended marketing spacing scale.

## Y-Directional padding spacing

Use y-directional utilities to apply padding to the top, bottom or Y axis of an element. Directional utilities can change or override default padding, and can be used with a spacing scale of 7-11.

Note: The marketing spacing scale extends the core 0-6 scale. See [primer-marketing-support](https://github.com/primer/primer-css/tree/master/modules/primer-marketing-support) for the extended marketing spacing scale.

```html
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pt-7">.pt-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue pb-7">.pb-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue py-7">.py-7</div>
</div>
```

## Responsive y-directional padding

All y-directional padding utilities can be adjusted per [breakpoint](/styleguide/css/modules/grid#breakpoints) using the following formula: `p[y-direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html
<div class="d-inline-block margin-orange">
  <div class="py-sm-7 pb-lg-9 d-inline-block block-blue">
    .py-sm-7 .pb-lg-9
  </div>
</div>
```
