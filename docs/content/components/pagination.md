---
title: Pagination
path: components/pagination
status: New
source: 'https://github.com/primer/css/tree/master/src/pagination'
bundle: pagination
---

Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous, next, or page numbers).

## Previous/next pagination

You can make a very simple pagination container with just the Previous and Next buttons. Add the `aria-disabled="true"` attribute to the `Previous` button if there isn't a preceding page, or to the `Next` button if there isn't a succeeding page.

```html live
<nav class="paginate-container" aria-label="Pagination">
  <div class="pagination">
    <span class="previous_page" aria-disabled="true">
      <!-- <%= octicon "chevron-left mr-1" %> -->
      <svg class="octicon octicon-chevron-left mr-1" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78033 12.7803C9.48744 13.0732 9.01256 13.0732 8.71967 12.7803L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967L8.71967 3.21967C9.01256 2.92678 9.48744 2.92678 9.78033 3.21967C10.0732 3.51256 10.0732 3.98744 9.78033 4.28033L6.06066 8L9.78033 11.7197C10.0732 12.0126 10.0732 12.4874 9.78033 12.7803Z"></path></svg>
      Previous
    </span>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">
      Next
      <!-- <%= octicon "chevron-right ml-1" %> -->
      <svg  class="octicon octicon-chevron-right ml-1" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.21967C6.51256 2.92678 6.98744 2.92678 7.28033 3.21967L11.5303 7.46967C11.8232 7.76256 11.8232 8.23744 11.5303 8.53033L7.28033 12.7803C6.98744 13.0732 6.51256 13.0732 6.21967 12.7803C5.92678 12.4874 5.92678 12.0126 6.21967 11.7197L9.93934 8L6.21967 4.28033C5.92678 3.98744 5.92678 3.51256 6.21967 3.21967Z"></path></svg>
    </a>
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
    <span class="previous_page" aria-disabled="true">
      <!-- <%= octicon "chevron-left mr-1" %> -->
      <svg class="octicon octicon-chevron-left mr-1" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78033 12.7803C9.48744 13.0732 9.01256 13.0732 8.71967 12.7803L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967L8.71967 3.21967C9.01256 2.92678 9.48744 2.92678 9.78033 3.21967C10.0732 3.51256 10.0732 3.98744 9.78033 4.28033L6.06066 8L9.78033 11.7197C10.0732 12.0126 10.0732 12.4874 9.78033 12.7803Z"></path></svg>
      Previous
    </span>
    <em aria-current="page">1</em>
    <a href="#url" aria-label="Page 2">2</a>
    <a href="#url" aria-label="Page 3">3</a>
    <span class="gap">…</span>
    <a href="#url" aria-label="Page 8">8</a>
    <a href="#url" aria-label="Page 9">9</a>
    <a href="#url" aria-label="Page 10">10</a>
    <a class="next_page" rel="next" href="#url" aria-label="Next Page">
      Next
      <!-- <%= octicon "chevron-right ml-1" %> -->
      <svg  class="octicon octicon-chevron-right ml-1" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.21967C6.51256 2.92678 6.98744 2.92678 7.28033 3.21967L11.5303 7.46967C11.8232 7.76256 11.8232 8.23744 11.5303 8.53033L7.28033 12.7803C6.98744 13.0732 6.51256 13.0732 6.21967 12.7803C5.92678 12.4874 5.92678 12.0126 6.21967 11.7197L9.93934 8L6.21967 4.28033C5.92678 3.98744 5.92678 3.51256 6.21967 3.21967Z"></path></svg>
    </a>
  </div>
</nav>
```
