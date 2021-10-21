---
title: Action List
path: components/action-list
status: alpha
source: 'https://github.com/primer/css/tree/main/src/actionlist'
bundle: action-list
storybook: https://primer.style/css/stories/?path=/story/components-actionlist-actionlistitem--playground
---

Description

[Action list interface guidelines](https://primer.style/design/components/action-list)

## Action List

Action List is a `ul` list designed to contain Action List Items.

### Arguments

| Class | Description |
| :- | :- |
| `ActionList--divided` | Show dividers between items |
| `ActionList--sub-group` | If Action List is nested as a sub-list |

#### Default

```html live
<ul
  class="ActionList"
  role="menu"
  aria-label="Menu description"
>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
</ul>
```

#### Item dividers

```html live
<ul
  class="ActionList ActionList--divided"
  role="menu"
  aria-label="Menu description"
>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
</ul>
```

#### Nested sub list

```html live
<ul
  class="ActionList"
  role="menu"
  aria-label="Menu description"
>
  <li class="ActionList-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item ActionList-item--has-sub-item" role="menuitem">
    <span class="ActionList-item-content">
      <span class="ActionList-item-content--label">Sub menu label</span>
    </span>
    <ul
        class="ActionList ActionList--sub-group"
        role="menu"
        aria-label="Menu description"
        >
        <li class="ActionList-item ActionList-item--sub-item" role="menuitem">
            <span class="ActionList-item-content">
            <span class="ActionList-item-content--label">Sub menu item</span>
            </span>
        </li>
        <li class="ActionList-item ActionList-item--sub-item" role="menuitem">
            <span class="ActionList-item-content">
            <span class="ActionList-item-content--label">Sub menu item</span>
            </span>
        </li>
    </ul>
  </li>
</ul>
```



## Action List Item

Add `.flash-warn`, `.flash-error`, or `.flash-success` to the flash message to make it yellow, red, or green, respectively.

```html live
<div class="flash">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-warn">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-error">
  Flash message goes here.
</div>

<div class="flash mt-3 flash-success">
  Flash message goes here.
</div>
```

## Action List Divider

Add an icon to the left of the flash message to give it some funky fresh attention.

```html live
<div class="flash">
  <!-- <%= octicon "info" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-warn">
  <!-- <%= octicon "alert" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-error">
  <!-- <%= octicon "stop" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path></svg>
  Flash message with an icon
</div>

<div class="flash mt-3 flash-success">
  <!-- <%= octicon "check" %> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
  Flash message with an icon
</div>
```

## Patterns
