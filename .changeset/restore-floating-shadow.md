---
"@primer/css": patch
---

Restore the `box-shadow` on `.Toast` and `.SelectMenu-modal` by replacing the `--shadow-floating-legacy` token, which `@primer/primitives` removed in 11.7.0, with `--shadow-floating-small`.
