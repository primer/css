---
title: Margin
status: New release
status_issue: https://github.com/github/design-systems/issues/378
---

Margin spacing utilities can be applied to elements to achieve bigger y-directional spaces beyond the `primer-core` spacing scale.
See [primer-marketing-support](https://github.com/primer/primer-css/tree/master/modules/primer-marketing-support) for the extended marketing spacing scale.

## Y-Directional margin spacing

Use y-directional utilities to apply margin to the top, bottom or Y axis of an element. Directional utilities can change or override default margins, and can be used with a spacing scale of 7-11.

Note: The marketing spacing scale extends the core 0-6 scale. See [primer-marketing-support](https://github.com/primer/primer-css/tree/master/modules/primer-marketing-support) for the extended marketing spacing scale.

```html
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue mt-7">.mt-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue mb-7">.mb-7</div>
</div>
<div class="margin-orange d-inline-block">
  <div class="d-inline-block block-blue my-7">.my-7</div>
</div>
```

## Responsive y-directional margins

All y-directional margin utilities can be adjusted per [breakpoint](/styleguide/css/modules/grid#breakpoints) using the following formula: `m[y-direction]-[breakpoint]-[spacer]`. Each responsive style is applied to the specified breakpoint and up.

```html
<div class="d-inline-block margin-orange">
  <div class="my-sm-7 mb-lg-9 d-inline-block block-blue">
    .my-sm-7 .mb-lg-9
  </div>
</div>
```
