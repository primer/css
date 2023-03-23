---
title: Diffstat
path: components/diff-stat
status_issue: 'https://github.com/github/design-systems/issues/332'
status: Stable
source: 'https://github.com/primer/css/tree/main/src/diff-stat'
bundle: diff-stat
---

## Diffstat

Diffstats show how many deletions or additions a diff has. It's typically a row of 5 blocks that get colored with green or red.

```html live
<span class="diffstat tooltipped tooltipped-e" aria-label="6 changes: 3 additions &amp; 3 deletions">
  6
  <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
</span>
```

Use the `color-fg-success` and `color-fg-danger` utilities to add additional information about the size of the diff.

```html live
<span class="diffstat">
    <span class="color-fg-success">+7</span>
    <span class="color-fg-danger">−2</span>
    <span class="tooltipped tooltipped-e" aria-label="9 lines changed">
      <span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-added"></span><span class="diffstat-block-deleted"></span><span class="diffstat-block-neutral"></span>
    </span>
</span>
```
