---
title: Branch name
path: components/branch-name
status: Stable
source: 'https://github.com/primer/css/tree/main/src/branch-name'
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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-git-branch"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
  a_new_feature_branch
</span>
```
