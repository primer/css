---
title: Filter list
path: components/filter-list
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
bundle: navigation
---

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white.

```html live title="filter-list"
<ul class="filter-list">
  <li>
    <a class="filter-item" href="#url" aria-current="page">
      First filter
      <span class="count">21</span>
    </a>
  </li>
  <li>
    <a class="filter-item" href="#url">
      Second filter
      <span class="count">3</span>
    </a>
  </li>
  <li>
    <a class="filter-item" href="#url">
      Third filter
    </a>
  </li>
</ul>
```
