---
title: Toasts
path: components/toasts
status: Experimental
status_issue: 'https://github.com/github/design-systems/issues/101'
source: ''
bundle: toasts
---

# Toasts

To create a default toast, use `.Toast`

```html title="Toast"
<div class="Toast">
  Submitting issue to <strong>github/github</strong>
</div>
```


## Classic style

```html title="Classic style"
<div class="Toast Toast-classic-default">
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-classic-warning">
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-classic-success">
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-classic-error">
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
```

## Light style

```html title="Light style"
<div class="Toast Toast-light-default">
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-light-warning">
  <span class="Toast-octicon"></span>
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-light-success">
  <span class="Toast-octicon"></span>
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
<div class="Toast Toast-light-error">
  <span class="Toast-octicon"></span>
  <span>Submitting issue to <strong>github/github</strong></span>
</div>
```

## Toast with action

```html title="Toast with action"
<div class="Toast Toast-light-error">
  <span class="Toast-octicon"></span>
  <span>Submitting issue to <strong>github/github</strong></span>
  <button class="Toast-action btn btn-sm btn-outline">Try again</button>
</div>
```
