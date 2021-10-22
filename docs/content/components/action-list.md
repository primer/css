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


## Action List Divider

List item `li` for separating groups of content

### Arguments

| Class | Description |
| :- | :- |
| `ActionList-sectionDivider` | Default subtle divider line |
| `ActionList-sectionDivider--filled` | Thicker divider line |
| `ActionList-sectionDivider--description` | Optional section header secondary text |

#### Default

```html live
<ul class="ActionList" role="menu">
  <li class="ActionList-sectionDivider" role="separator"></li>
</ul>
```

#### Filled

```html live
<ul class="ActionList" role="menu">
  <li class="ActionList-sectionDivider ActionList-sectionDivider--filled" role="separator"></li>
</ul>
```
### Divider with label text

When using a section label for a group, give the `li` an id to be referenced by the group `ul`
#### Filled with section label

```html live
<ul class="ActionList" role="menu">
  <li
    class="ActionList-sectionDivider ActionList-sectionDivider--filled"
    role="presentation"
    id="nested-group-id"
    aria-hidden="true"
  >
    Section label
  </li>
  <li class="ActionList-item" role="menuitem">
      <ul class="ActionList" role="menu" aria-labelledby="nested-group-id">
        <li class="ActionList-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
</ul>
```

#### Default with section label

```html live
<ul class="ActionList" role="menu">
  <li
    class="ActionList-sectionDivider"
    role="presentation"
    id="nested-group-id"
    aria-hidden="true"
  >
    Section label
  </li>
  <li class="ActionList-item" role="menuitem">
      <ul class="ActionList" role="menu" aria-labelledby="nested-group-id">
        <li class="ActionList-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
</ul>
```

#### Default with section label + description

```html live
<ul class="ActionList" role="menu">
  <li
    class="ActionList-sectionDivider subtle"
    role="presentation"
    id="nested-group-id"
    aria-hidden="true"
  >
    Section title
    <span class="ActionList-sectionDivider--description">
      Section description
    </span>
  </li>
  <li class="ActionList-item" role="menuitem">
      <ul class="ActionList" role="menu" aria-labelledby="nested-group-id">
        <li class="ActionList-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
</ul>
```

## Action List Item

List item `li` handling semantics, state and interactions

### Arguments

| Class | Description |
| :- | :- |
| `ActionList-item` | Default styles |
| `ActionList-item--has-sub-item` | Item contains a sub item `ul` |
| `ActionList-item--sub-item` | Indent + small font size for sub item `li` (optional) |
| `ActionList-item--nav-active` | Nav item and `aria-current` |
| `ActionList-item--danger` | Item is destructive |

Kitchen sink

```html live
<nav>
  <ul class="ActionList" role="menu" aria-label="Main menu description">
    <li class="ActionList-item" role="none">
      <a href="/" role="menuitem" class="ActionList-item-content">
        <span class="ActionList-item-content--label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-item" role="none">
      <a href="/" role="menuitem" class="ActionList-item-content">
        <span class="ActionList-item-content--label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-item" role="none">
      <a href="/" role="menuitem" class="ActionList-item-content">
        <span class="ActionList-item-content--label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-sectionDivider" role="presentation" id="some-unique-id" aria-hidden="true"
    >Section Divider</li>
    <li class="ActionList-item ActionList-item--has-sub-item" role="menuitem">
      <ul class="ActionList" role="menu" aria-labelledby="some-unique-id">
        <li class="ActionList-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--nav-active" role="none">
            <a href="#" role="menuitem" aria-current="location" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--danger" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
      </ul>
    </li>
    <li class="ActionList-sectionDivider" role="presentation" id="some-unique-id" aria-hidden="true"
    >Section Divider</li>
    <li class="ActionList-item ActionList-item--has-sub-item" role="menuitem">
      <ul class="ActionList ActionList--sub-group" role="menu" aria-labelledby="some-unique-id">
        <li class="ActionList-item ActionList-item--sub-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--sub-item" role="none">
            <a href="#" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--sub-item" role="none">
          <a href="/" role="menuitem" class="ActionList-item-content">
            <span class="ActionList-item-content--label">Nav Item</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

```

## Action List Item Content

Contains and places all child content within Action List Item. Can be either an `a href` tag for list link items, or a `span` for items that provide an event on Action List Item `li`.

### Arguments

| Class | Description |
| :- | :- |
| `ActionList-item-content` | Defines the overall layout grid |
| `ActionList-item-content--sizeMedium` | 40px row height |
| `ActionList-item-content--sizeLarge` | 48px row height, default for touch devices |
| `ActionList-item-content--action-leading` | Slot: multi/single select |
| `ActionList-item-content--visual-leading` | Slot: SVG or graphic like Avatar |
| `ActionList-item-content--label` | Item text |
| `ActionList-item-content--description` | Item description (optional) |
| `ActionList-item-content--label-blockDescription` | Display description as block |
| `ActionList-item-content--label-inlineDescription` | Display description inline with label |
| `ActionList-item-content--visual-trailing` | Slot: SVG or text |
| `ActionList-item-content--action-trailing` | Slot: Button, collapse icon |
| `ActionList-item-content--visual` | min-height + default styles for visual slot |
| `ActionList-item-content--action` | min-height + default styles for visual slot |
| `ActionList-item-content--visual--16` | Creates left padding for sub list if leading visual exists |
| `ActionList-item-content--visual--20` | Creates left padding for sub list if leading visual exists |
| `ActionList-item-content--visual--24` | Creates left padding for sub list if leading visual exists |
