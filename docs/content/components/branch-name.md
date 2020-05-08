---
title: Branch name
path: components/branch-name
status: Stable
source: 'https://github.com/primer/css/tree/master/src/branch-name'
bundle: branch-name
---

Branch names can be a link name or not:

```html live
<span class="branch-name">a_new_feature_branch</span>
```

```html live
<a href="#url" class="branch-name">a_new_feature_branch</a>
```

You may also include an octicon before the branch name text:

```html live
<span class="branch-name">
  <!-- <%= octicon("git-branch", width:16, height:16) %> -->
  <svg width="10" height="16" viewBox="0 0 10 16" class="octicon octicon-git-branch" aria-hidden="true">
    <path
      fill-rule="evenodd"
      d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    />
  </svg>
  a_new_feature_branch
</span>
```
