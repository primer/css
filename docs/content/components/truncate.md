---
title: Truncate
path: components/truncate
status: Alpha
source: 'https://github.com/primer/css/tree/main/src/truncate'
bundle: truncate
---

When text reaches lengths larger than existing container, shorten with ellipses.

## Truncate

Adding the `.Truncate` class and wrapping the inner text with `.Truncate-text` will truncate the text. `.Truncate-text` must be a direct descendant of `.Truncate`.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <span class="Truncate">
    <span class="Truncate-text">branch-name-that-is-really-long</span>
  </span>
</div>
```

## Truncate multiple items

You can add multiple `.Truncate-text` items in the same row and they will truncate evenly. If you want to make one of the items the primary text that doesn't truncate first, add the class `.Truncate-text--primary` class.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <span class="Truncate">
    <span class="Truncate-text">really-long-repository-owner-name</span>
    <span class="Truncate-text Truncate-text--primary text-bold">
      <span class="text-normal">/</span> really-long-repository-name
    </span>
  </span>
</div>
```

`.Truncate-text--primary` doesn't need to be the last item in the list or only have one instance. Consider this breadcrumb example where we want to highlight the Repository name and the Issue title. The rest of the breadcrumb will truncate and leave the name and title untruncated until we run out of space.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <ol class="Truncate">
    <li class="Truncate-text">primer</li>
    <li class="Truncate-text Truncate-text--primary">/ css</li>
    <li class="Truncate-text">/ Issues</li>
    <li class="Truncate-text">/ #123 —</li>
    <li class="Truncate-text Truncate-text--primary">
      Visual bug on primer.style found in lists
    </li>
  </ol>
</div>
```

## Expand on hover or focus

When there are multiple items in a list, you can add the `.Truncate-text--expandable` class to the `.Truncate-text` items and they will grow when `:hover` or `:focus` state is applied to them.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <span class="Truncate">
    <a href="#" class="Truncate-text Truncate-text--expandable">really-long-repository-owner-name</a>
    <a href="#" class="Truncate-text Truncate-text--expandable">really-long-repository-owner-name</a>
    <a href="#" class="Truncate-text Truncate-text--expandable">really-long-repository-owner-name</a>
    <a href="#" class="Truncate-text Truncate-text--expandable">really-long-repository-owner-name</a>
  </span>
</div>
```

## Custom max widths

It is recommended to use `max-width` as an inline style when you would like to have control over how far something can grow, even when there's enough space available.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <div class="Truncate">
    <span class="Truncate-text Truncate-text--expandable" style="max-width: 300px;">branch-name-that-is-really-long-branch-name-that-is-really-long-branch-name-that-is-really-long</span>
  </div>
  <br>
  <div class="Truncate">
    <span class="Truncate-text Truncate-text--expandable" style="max-width: 200px;">branch-name-that-is-really-long-branch-name-that-is-really-long-branch-name-that-is-really-long</span>
  </div>
  <br>
  <div class="Truncate">
    <span class="Truncate-text Truncate-text--expandable" style="max-width: 100px;">branch-name-that-is-really-long-branch-name-that-is-really-long-branch-name-that-is-really-long</span>
  </div>
</div>
```
