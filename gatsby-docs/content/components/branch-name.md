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

```jsx live
<span class="branch-name">
  {/* <%= octicon("git-branch", width:16, height:16) %> */}
  <StyledOcticon icon={getIconByName('git-branch')} mr={1} />
  a_new_feature_branch
</span>
```
