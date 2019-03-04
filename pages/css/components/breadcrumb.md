---
title: Breadcrumbs
path: components/breadcrumb
status: Stable
source: 'https://github.com/primer/css/tree/master/src/breadcrumb'
bundle: breadcrumb
---


Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

#### Usage

```html title="Breadcrumb"
<nav aria-label="Breadcrumb">
  <ol>
    <li class="breadcrumb-item text-small"><a href="https://github.com/business">Business</a></li>
    <li class="breadcrumb-item text-small"><a href="https://github.com/business/customers">Customers</a></li>
    <li class="breadcrumb-item breadcrumb-item-selected text-small text-gray" aria-current="page">MailChimp</li>
  </ol>
</nav>
```

