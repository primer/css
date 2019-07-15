---
title: Toasts
path: components/toasts
status: Experimental
status_issue: 'https://github.com/github/design-systems/issues/101'
source: ''
bundle: toasts
---

Toasts are used to show live, time-sensitive feedback to users.


## Default

To create a default toast, use `.Toast`. Always use the `info` icon for default messages.

```erb title="Default toast"
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Toast message goes here</span>
  </div>
```

The Toast content is formattable. We recommend keeping your message under 140 characters.

```erb title="Toast with long text"
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa. Cum sociis <em>natoque</em> penatibus et ma</span>
  </div>
```

## Variations

Use the success, warning, and error modifiers to communicate different states.

Always use the `check` octicon for success states.

``` erb title="Success toast"
<div class="Toast Toast--success">
  <span class="Toast-icon">
    <%= octicon "check" %>
  </span>
  <span class="Toast-content">Success message goes here.</span>
</div>
```

Always use the `alert` octicon for warning states.

``` erb title="Warning toast"
<div class="Toast Toast--warning">
  <span class="Toast-icon">
    <%= octicon "alert" %>
  </span>
  <span class="Toast-content">Warning message goes here.</span>
</div>
```

Always use the `stop` octicon for error states.

```erb title="Error toast"
<div class="Toast Toast--error">
  <span class="Toast-icon">
    <%= octicon "stop" %>
  </span>
  <span class="Toast-content">Error message goes here</span>
</div>
```

## Toast with dismiss

Use `.Toast-dismissButton` to allow a user to explicitly dismiss a Toast.

```erb title="Toast with dismiss"
<div class="Toast">
  <span class="Toast-icon">
    <%= octicon "info" %>
  </span>
  <span class="Toast-content">This toast is dismissable.</span>
  <button class="Toast-dismissButton">
    <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
  </button>
</div>
```

## Toast with link

Include a link to allow users to take actions within a Toast.

```erb title="Toast with link"
<div class="p-3">
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Toast message goes here </strong><a href="#">Action.</a></span>
  </div>
</div>
```

## Toast animation

The toast will animate in and out from the bottom left of the viewport.

```erb title="Toast animating"
<div class="Toast Toast--animateIn">
  <span class="Toast-icon">
    <%= octicon "info" %>
  </span>
  <span class="Toast-content">Toast message goes here.</span>
</div>
```
