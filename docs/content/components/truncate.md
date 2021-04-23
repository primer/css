---
title: Truncate
path: components/truncate
status: Experimental
source: 'https://github.com/primer/css/tree/main/src/truncate'
bundle: truncate
---

When text reaches lengths larger than existing container, shorten with ellipses.

## Truncate

Adding the `.Truncate` class and wrapping the inner text with `.Truncate-text` will truncate the text.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <span class="Truncate">
    <span class="Truncate-text">branch-name-that-is-really-long</span>
  </span>
</div>
```

## Truncate beginning

Adding `.Truncate-text--beginning` to the `.Truncate-text` element will add the ellipses to the beginning of the line of text.

```html live
<div class="Box p-2" style="resize: horizontal;overflow: scroll;">
  <span class="Truncate">
    <span class="Truncate-text Truncate-text--beginning">branch-name-that-is-really-long</span>
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
