---
title: Pagination
path: components/pagination
status: Beta
source: 'https://github.com/primer/css/tree/main/src/pagination'
bundle: pagination
---

Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous, next, or page numbers).

## Previous/next pagination

You can make a very simple pagination container with just the Previous and Next buttons. Add the `aria-disabled="true"` attribute to the `Previous` button if there isn't a preceding page, or to the `Next` button if there isn't a succeeding page.

```html live
<nav class="paginate-container" aria-label="Pagination">
  <div class="pagination">
    <span class="previous_page" aria-disabled="true">Previous</span>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">Next</a>
  </div>
</nav>
```

## Numbered pagination

For pagination across multiple pages, make sure it's clear to the user where they are in a set of pages.

To do this, add anchor links to the `pagination` element. Previous and Next buttons should always be present. Add the `aria-disabled="true"` attribute to the Previous button if you're on the first page. Apply the `aria-current="page"` attribute to the current numbered page.

As always, make sure to include the appropriate `aria` attributes to make the element accessible.

- Add `aria-label="Pagination"` to the the `paginate-container` element.
- Add `aria-label="Page X"` to each anchor link.

```html live
<nav class="paginate-container" aria-label="Pagination">
  <div class="pagination">
    <span class="previous_page" aria-disabled="true">Previous</span>
    <em aria-current="page">1</em>
    <a href="#url" aria-label="Page 2">2</a>
    <a href="#url" aria-label="Page 3">3</a>
    <span class="gap">…</span>
    <a href="#url" aria-label="Page 8">8</a>
    <a href="#url" aria-label="Page 9">9</a>
    <a href="#url" aria-label="Page 10">10</a>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">Next</a>
  </div>
</nav>
```
