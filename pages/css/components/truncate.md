---
title: Truncate
path: components/truncate
status: Stable
source: 'https://github.com/primer/css/tree/master/src/truncate'
bundle: truncate
---


`.css-truncate` will shorten text with an ellipsis. The maximum width of the truncated text can be changed by overriding the max-width of `.css-truncate-target`. Unless the full text is so long that it affects performace, always add `title` to the truncated element so the full text can still be seen.

```html title="Truncate"
<span class="branch-ref css-truncate css-truncate-target" title="really-long-branch-name">
  really-long-branch-name
</span>
```

You can reveal the entire string on hover with the addition of `.expandable`.

```html title="Truncate Expandable"
<span class="css-truncate expandable">
  <span class="branch-ref css-truncate-target">this-is-a-really-long-branch-name</span>
</span>
```
