---
"@primer/css": patch
---

Replace the universal `*` subject in the `.pagination` responsive rules with tag-bucketed selectors (`> a, > span, > em`). A universal subject compound (`.pagination > *`) forces Blink to test the rule against every direct child on every style recalc; bucketing by the actual child tags lets the engine fast-reject it, reducing wasted selector-matching time without changing the rendered output.
