---
"@primer/css": patch
---

Optimize color-mode-theme mixin by removing redundant ::selection and ::backdrop pseudo-element selectors. CSS custom properties now inherit from parent elements, reducing selector evaluation cost from ~110ms+ to <1ms and eliminating 6+ complex selectors per theme variant.
