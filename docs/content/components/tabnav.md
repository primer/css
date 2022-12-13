---
title: Tabnav
path: components/tabnav
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
rails: 'https://primer.style/view-components/components/alpha/tabnav'
bundle: navigation
---

When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of... tabs!

```html live title="tabnav"
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo tab</a>
    <a class="tabnav-tab" href="#url">Bar tab</a>
  </nav>
</div>
```

Tabs can also contain icons and counters.

```html live
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">
      <!-- <%= octicon "comment-discussion" %> -->
      <svg class="octicon octicon-comment-discussion" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.75C1.5 2.6837 1.52634 2.62011 1.57322 2.57322C1.62011 2.52634 1.6837 2.5 1.75 2.5H10.25C10.3163 2.5 10.3799 2.52634 10.4268 2.57322C10.4737 2.62011 10.5 2.6837 10.5 2.75V8.25C10.5 8.3163 10.4737 8.37989 10.4268 8.42678C10.3799 8.47366 10.3163 8.5 10.25 8.5H6.75C6.55115 8.50017 6.36052 8.57931 6.22 8.72L3.5 11.44V9.25C3.5 9.05109 3.42098 8.86032 3.28033 8.71967C3.13968 8.57902 2.94891 8.5 2.75 8.5H1.75C1.6837 8.5 1.62011 8.47366 1.57322 8.42678C1.52634 8.37989 1.5 8.3163 1.5 8.25V2.75ZM1.75 1C1.28587 1 0.840752 1.18437 0.512563 1.51256C0.184374 1.84075 0 2.28587 0 2.75L0 8.25C0 9.216 0.784 10 1.75 10H2V11.543C2.0001 11.8311 2.08561 12.1127 2.24571 12.3522C2.40581 12.5917 2.63333 12.7784 2.8995 12.8886C3.16567 12.9988 3.45854 13.0277 3.74111 12.9715C4.02367 12.9153 4.28324 12.7767 4.487 12.573L7.061 10H10.25C10.7141 10 11.1592 9.81563 11.4874 9.48744C11.8156 9.15925 12 8.71413 12 8.25V2.75C12 2.28587 11.8156 1.84075 11.4874 1.51256C11.1592 1.18437 10.7141 1 10.25 1H1.75ZM14.5 4.75C14.5 4.6837 14.4737 4.62011 14.4268 4.57322C14.3799 4.52634 14.3163 4.5 14.25 4.5H13.75C13.5511 4.5 13.3603 4.42098 13.2197 4.28033C13.079 4.13968 13 3.94891 13 3.75C13 3.55109 13.079 3.36032 13.2197 3.21967C13.3603 3.07902 13.5511 3 13.75 3H14.25C15.216 3 16 3.784 16 4.75V10.25C16 10.7141 15.8156 11.1592 15.4874 11.4874C15.1592 11.8156 14.7141 12 14.25 12H14V13.543C13.9999 13.8311 13.9144 14.1127 13.7543 14.3522C13.5942 14.5917 13.3667 14.7784 13.1005 14.8886C12.8343 14.9988 12.5415 15.0277 12.2589 14.9715C11.9763 14.9153 11.7168 14.7767 11.513 14.573L9.22 12.28C9.14631 12.2113 9.08721 12.1285 9.04622 12.0365C9.00523 11.9445 8.98318 11.8452 8.98141 11.7445C8.97963 11.6438 8.99816 11.5438 9.03588 11.4504C9.0736 11.357 9.12974 11.2722 9.20096 11.201C9.27218 11.1297 9.35701 11.0736 9.4504 11.0359C9.54379 10.9982 9.64382 10.9796 9.74452 10.9814C9.84523 10.9832 9.94454 11.0052 10.0365 11.0462C10.1285 11.0872 10.2113 11.1463 10.28 11.22L12.5 13.44V11.25C12.5 11.0511 12.579 10.8603 12.7197 10.7197C12.8603 10.579 13.0511 10.5 13.25 10.5H14.25C14.3163 10.5 14.3799 10.4737 14.4268 10.4268C14.4737 10.3799 14.5 10.3163 14.5 10.25V4.75Z"></path></svg>
      <span>Conversation</span>
      <span class="Counter">2</span>
    </a>

    <a class="tabnav-tab" href="#url">
      <!-- <%= octicon "git-commit" %> -->
      <svg class="octicon octicon-git-commit" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 7.75C10.5 8.41305 10.2366 9.04893 9.76777 9.51777C9.29893 9.98661 8.66304 10.25 8 10.25C7.33696 10.25 6.70107 9.98661 6.23223 9.51777C5.76339 9.04893 5.5 8.41305 5.5 7.75C5.5 7.08696 5.76339 6.45108 6.23223 5.98224C6.70107 5.5134 7.33696 5.25 8 5.25C8.66304 5.25 9.29893 5.5134 9.76777 5.98224C10.2366 6.45108 10.5 7.08696 10.5 7.75ZM11.93 8.5C11.7554 9.41441 11.2674 10.2393 10.5501 10.8327C9.83272 11.426 8.93093 11.7506 8 11.7506C7.06907 11.7506 6.16728 11.426 5.44994 10.8327C4.73259 10.2393 4.2446 9.41441 4.07 8.5H0.75C0.551088 8.5 0.360322 8.42099 0.21967 8.28033C0.0790176 8.13968 0 7.94892 0 7.75C0 7.55109 0.0790176 7.36033 0.21967 7.21967C0.360322 7.07902 0.551088 7 0.75 7H4.07C4.2446 6.0856 4.73259 5.26069 5.44994 4.66736C6.16728 4.07403 7.06907 3.7494 8 3.7494C8.93093 3.7494 9.83272 4.07403 10.5501 4.66736C11.2674 5.26069 11.7554 6.0856 11.93 7H15.25C15.4489 7 15.6397 7.07902 15.7803 7.21967C15.921 7.36033 16 7.55109 16 7.75C16 7.94892 15.921 8.13968 15.7803 8.28033C15.6397 8.42099 15.4489 8.5 15.25 8.5H11.93Z"></path></svg>
      <span>Commits</span>
      <span class="Counter">3</span>
    </a>

    <a class="tabnav-tab" href="#url">
     <!-- <%= octicon "checklist" %> -->
      <svg class="octicon octicon-checklist" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.75C2.5 1.61193 2.61193 1.5 2.75 1.5H11.25C11.3881 1.5 11.5 1.61193 11.5 1.75V9.48645C11.5 9.90067 11.8358 10.2365 12.25 10.2365C12.6642 10.2365 13 9.90067 13 9.48645V1.75C13 0.783502 12.2165 0 11.25 0H2.75C1.7835 0 1 0.783502 1 1.75V13.25C1 14.2165 1.7835 15 2.75 15H5.92083C6.33504 15 6.67083 14.6642 6.67083 14.25C6.67083 13.8358 6.33504 13.5 5.92083 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25V1.75ZM4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5H9.25C9.66421 5.5 10 5.16421 10 4.75C10 4.33579 9.66421 4 9.25 4H4.75ZM4 7.75C4 7.33579 4.33579 7 4.75 7H6.75C7.16421 7 7.5 7.33579 7.5 7.75C7.5 8.16421 7.16421 8.5 6.75 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75ZM15.774 11.2866C16.0703 10.9972 16.076 10.5223 15.7866 10.226C15.4972 9.92965 15.0223 9.92402 14.726 10.2134L10.7003 14.1447L9.28127 12.7206C8.98889 12.4272 8.51402 12.4264 8.22061 12.7187C7.9272 13.0111 7.92636 13.486 8.21873 13.7794L10.1618 15.7294C10.4521 16.0207 10.9229 16.0239 11.2171 15.7366L15.774 11.2866Z"></path></svg>
      <span>Checks</span>
      <span class="Counter">27</span>
    </a>

    <a class="tabnav-tab" href="#url">
      <!-- <%= octicon "diff" %> -->
      <svg class="octicon octicon-diff" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1.5C2.61193 1.5 2.5 1.61193 2.5 1.75V14.25C2.5 14.3881 2.61193 14.5 2.75 14.5H13.25C13.3881 14.5 13.5 14.3881 13.5 14.25V4.66421C13.5 4.59791 13.4737 4.53432 13.4268 4.48744L10.5126 1.57322C10.4657 1.52634 10.4021 1.5 10.3358 1.5H2.75ZM1 1.75C1 0.783502 1.7835 0 2.75 0H10.3358C10.7999 0 11.245 0.184374 11.5732 0.512563L14.4874 3.42678C14.8156 3.75497 15 4.20008 15 4.66421V14.25C15 15.2165 14.2165 16 13.25 16H2.75C1.7835 16 1 15.2165 1 14.25V1.75ZM8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V5.5H10.25C10.6642 5.5 11 5.83579 11 6.25C11 6.66421 10.6642 7 10.25 7H8.75V8.5C8.75 8.91421 8.41421 9.25 8 9.25C7.58579 9.25 7.25 8.91421 7.25 8.5V7H5.75C5.33579 7 5 6.66421 5 6.25C5 5.83579 5.33579 5.5 5.75 5.5H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25ZM5 11.25C5 10.8358 5.33579 10.5 5.75 10.5H10.25C10.6642 10.5 11 10.8358 11 11.25C11 11.6642 10.6642 12 10.25 12H5.75C5.33579 12 5 11.6642 5 11.25Z"></path></svg>
      <span>Files changed</span>
      <span class="Counter">6</span>
    </a>
  </nav>
</div>
```

Use `.float-right` to align additional elements in the `.tabnav`:

```html live title="tabnav with buttons"
<div class="tabnav">
  <a class="btn btn-sm float-right" href="#url" role="button">Button</a>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```

Additional bits of text and links can be styled for optimal placement with `.tabnav-extra`:

```html live title="tabnav-extra"
<div class="tabnav">
  <div class="tabnav-extra float-right">Tabnav widget text here.</div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```

```html live title="tabnav with everything"
<div class="tabnav">
  <div class="float-right">
    <a class="tabnav-extra" href="#url">Tabnav extra link</a>
    <a class="tabnav-extra" href="#url">Tabnav extra link</a>
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a class="tabnav-tab" href="#url" aria-current="page">Foo Tab</a>
    <a class="tabnav-tab" href="#url">Bar Tab</a>
  </nav>
</div>
```
