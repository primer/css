---
'@primer/css': patch
---

Fixing the `color-mode-theme` mixin. Currently the mixin doesn't take into account when `mode="light"` and `light-theme="dark"`. This fix allows dark themes to be set as light themes and to toggle into single light mode.
