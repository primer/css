---
title: Branch name
path: components/branch-name
status: Stable
source: 'https://github.com/primer/css/tree/master/modules/branch-name/README.md'
bundle: branch-name
---


Branch names can be a link name or not:

```html title="Branch name"
<span class="branch-name">a_new_feature_branch</span>
```

```html title="Branch name with link"
<a href="#url" class="branch-name">a_new_feature_branch</a>
```

You may also include an octicon before the branch name text:

```erb title="Branch name with icon"
<span class="branch-name">
  <%= octicon("git-branch", width:16, height:16) %>
  a_new_feature_branch
</span>
```

