---
title: Counter
path: components/counter
status: Stable
source: 'https://github.com/primer/css/tree/main/src/labels'
rails: 'https://primer.style/view-components/components/beta/counter'
bundle: labels
---

Use the `Counter` component to add a count to navigational elements and buttons. Counters come in 3 variations:

1. the default `Counter`,
2. the `Counter--primary` with a stronger background color
3. and `Counter--secondary` with a more subtle text color.

Note: When a counter is empty, its visibility will be hidden.

```html live
<span class="Counter mr-1">1</span>
<span class="Counter mr-1 Counter--primary">23</span>
<span class="Counter mr-1 Counter--secondary">456</span>
```

Use the `Counter` in navigation to indicate the number of items without the user having to click through or count the items, such as open issues in a GitHub repo. See more options in [navigation](./navigation).

```html live
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab" aria-current="page">Foo tab <span class="Counter">23</span></a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

You can also have icons and emojis in counters. Or use utilities for counters with different background colors.

```html live
<span class="Counter mr-1">1.5K</span>
<span class="Counter mr-1">
  <!-- <%= octicon "comment" %> -->
  <svg class="octicon octicon-comment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.5C2.6837 2.5 2.62011 2.52634 2.57322 2.57322C2.52634 2.62011 2.5 2.6837 2.5 2.75V10.25C2.5 10.388 2.612 10.5 2.75 10.5H4.75C4.94891 10.5 5.13968 10.579 5.28033 10.7197C5.42098 10.8603 5.5 11.0511 5.5 11.25V13.44L8.22 10.72C8.36052 10.5793 8.55115 10.5002 8.75 10.5H13.25C13.3163 10.5 13.3799 10.4737 13.4268 10.4268C13.4737 10.3799 13.5 10.3163 13.5 10.25V2.75C13.5 2.6837 13.4737 2.62011 13.4268 2.57322C13.3799 2.52634 13.3163 2.5 13.25 2.5H2.75ZM1 2.75C1 1.784 1.784 1 2.75 1H13.25C14.216 1 15 1.784 15 2.75V10.25C15 10.7141 14.8156 11.1592 14.4874 11.4874C14.1592 11.8156 13.7141 12 13.25 12H9.06L6.487 14.573C6.28324 14.7767 6.02367 14.9153 5.74111 14.9715C5.45854 15.0277 5.16567 14.9988 4.8995 14.8886C4.63333 14.7784 4.40581 14.5917 4.24571 14.3522C4.08561 14.1127 4.0001 13.8311 4 13.543V12H2.75C2.28587 12 1.84075 11.8156 1.51256 11.4874C1.18437 11.1592 1 10.7141 1 10.25V2.75Z"></path></svg>
  10
</span>
<span class="Counter mr-1">👍 2</span>
<span class="Counter mr-1 color-bg-success-emphasis color-fg-on-emphasis">22</span>
<span class="Counter mr-1 color-bg-danger-emphasis color-fg-on-emphasis">22</span>
<span class="Counter mr-1 color-bg-accent-emphasis color-fg-on-emphasis">22</span>
```
