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
<div class="p-1">
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Toast message goes here</span>
  </div>
</div>
```

The Toast content is formattable. We recommend keeping your message under 140 characters.

```erb title="Toast with long text"
<div class="p-1">
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa. Cum sociis <em>natoque</em> penatibus et ma</span>
  </div>
</div>
```

## Variations

Use the success, warning, and error modifiers to communicate different states.

Always use the `check` octicon for success states.

```erb title="Success toast"
<div class="p-1">
  <div class="Toast Toast--success">
    <span class="Toast-icon">
      <%= octicon "check" %>
    </span>
    <span class="Toast-content">Success message goes here.</span>
  </div>
</div>
```

Always use the `alert` octicon for warning states.

```erb title="Warning toast"
<div class="p-1">
  <div class="Toast Toast--warning">
    <span class="Toast-icon">
      <%= octicon "alert" %>
    </span>
    <span class="Toast-content">Warning message goes here.</span>
  </div>
</div>
```

Always use the `stop` octicon for error states.

```erb title="Error toast"
<div class="p-1">
  <div class="Toast Toast--error">
    <span class="Toast-icon">
      <%= octicon "stop" %>
    </span>
    <span class="Toast-content">Error message goes here</span>
  </div>
</div>
```

## Toast with dismiss

Use `.Toast-dismissButton` to allow a user to explicitly dismiss a Toast.

```erb title="Toast with dismiss"
<div class="p-1">
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">This toast is dismissable.</span>
    <button class="Toast-dismissButton">
      <%= octicon "x" %>
    </button>
  </div>
</div>
```

## Toast with link

Include a link to allow users to take actions within a Toast.

```erb title="Toast with link"
<div class="p-1">
  <div class="Toast">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Toast message goes here </strong><a href="#">Action.</a></span>
  </div>
</div>
```

## Toast animation in

The `Toast--animateIn` and `Toast--animateOut` modifier classes can be used to animate the toast in and out from the bottom.

```erb title="Toast animating"
<div class="p-1">
  <div class="Toast Toast--animateIn">
    <span class="Toast-icon">
      <%= octicon "info" %>
    </span>
    <span class="Toast-content">Toast message goes here.</span>
  </div>
</div>
```

## Toast with loading animation
Add the `Toast--spinner` modifier class on the `Toast-icon` `svg` to communicate a loading state.

```html title="Toast loading"
<div class="p-1">
  <div class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18">
        <path fill="#959da5" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content">Toast message goes here.</span>
  </div>
</div>
```

## Toast position

Use the `position-fixed bottom-0` utility classes on a wrapper element to position Toasts at the **bottom left** of the viewport.

```erb title="Toast animating"
<div class="border bg-gray-light" style="height:150px">
  <div class="position-fixed bottom-0">
    <div class="Toast">
      <span class="Toast-icon">
        <%= octicon "info" %>
      </span>
      <span class="Toast-content">Toast message goes here.</span>
    </div>
  </div>
</div>
```
