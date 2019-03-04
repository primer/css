---
title: Progress
path: components/progress
status: New Release
source: 'https://github.com/primer/css/tree/master/modules/progress/README.md'
bundle: progress
---


Use Progress components to visualize task completion.

## Default Progress

```html
<span class="Progress">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Large Progress

```html
<span class="Progress Progress--large">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Small Progress

```html
<span class="Progress Progress--small">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Progress with tooltip

```html
<div class="tooltipped tooltipped-n" aria-label="78 done / 6 in progress / 2 to do">
  <span class="Progress">
    <span class="Progress-value bg-green" style="width: 50%;"></span>
  </span>
</div>
```

## Progress with multiple values

```html
<div class="tooltipped tooltipped-n" aria-label="78 done / 6 in progress / 2 to do">
  <span class="Progress">
    <span class="Progress-value bg-green" style="width: 50%;"></span>
    <span class="Progress-value bg-purple" style="width: 25%;"></span>
    <span class="Progress-value bg-red" style="width: 5%;"></span>
  </span>
</div>
```

