---
title: Breadcrumbs
path: components/breadcrumb
status: Stable
source: 'https://github.com/primer/css/tree/main/src/breadcrumb'
bundle: breadcrumb
---

Breadcrumbs are used to show taxonomical context on pages that are many levels deep in a site’s hierarchy. Breadcrumbs show and link to parent, grandparent, and sometimes great-grandparent pages. Breadcrumbs are most appropriate on pages that:

- Are many levels deep on a site
- Do not have a section-level navigation
- May need the ability to quickly go back to the previous (parent) page

All items must contain links, and the last item must be selected.

#### Usage

```html live
<nav aria-label="Breadcrumb">
  <ol>
    <li class="breadcrumb-item">
      <a href="https://github.com/business">Business</a>
    </li>
    <li class="breadcrumb-item">
      <a href="https://github.com/business/customers">Customers</a>
    </li>
    <li class="breadcrumb-item breadcrumb-item-selected">
      <a href="https://github.com/business/customers/mailchimp" aria-current="page">MailChimp</a>
    </li>
  </ol>
</nav>
```
