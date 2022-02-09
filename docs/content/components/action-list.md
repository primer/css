---
title: Action List
path: components/action-list
status: alpha
source: 'https://github.com/primer/css/tree/main/src/actionlist'
bundle: action-list
storybook: https://primer.style/css/storybook/?path=/story/components-actionlist-actionlistitem--playground
---

Reference the [Action list interface guidelines](https://primer.style/design/components/action-list) for details on where and how to use Action list.

## Action list

Action list is a `ul` list designed to contain list items.

### Variants

| Class | Description |
| :- | :- |
| `ActionList` | Default styles |
| `ActionList--divided` | Show dividers between items |
| `ActionList--subGroup` | If Action List is nested as a sub-list |
| `ActionList--tree` | Tree-view specific styles |

#### Default

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Action list item</span>
    </span>
  </li>
</ul>
```

#### Item dividers

```html live
<ul class="ActionList ActionList--divided">
  <li class="ActionList-item">
    <a href="/" class="ActionList-content">
      <span class="ActionList-item-label">Item 1</span>
    </a>
  </li>
  <li class="ActionList-item">
    <a href="/" class="ActionList-content">
      <span class="ActionList-item-label">Item 2</span>
    </a>
  </li>
  <li class="ActionList-item">
    <a href="/" class="ActionList-content">
      <span class="ActionList-item-label">Item 3</span>
    </a>
  </li>
</ul>
```

#### Nested sub list

```html live
<nav>
    <li class="ActionList-sectionDivider">
      <h3 class="ActionList-sectionDivider-title" id="group-id-1">Access</h3>
    </li>
    <ul class="ActionList" role="list" aria-labelledby="group-id-1">
        <li class="ActionList-item ActionList-item--hasSubItem">
            <button aria-expanded="true" class="ActionList-content ActionList-content--visual16 ActionList-content--hasActiveSubItem">
                <span class="ActionList-item-visual ActionList-item-visual--leading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
                </span>
                <span class="ActionList-item-label">Moderation</span>
                <span class="ActionList-item-action ActionList-item-action--trailing">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-collapseIcon"><path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path></svg>
                </span>
            </button>
            <ul class="ActionList ActionList--subGroup" role="list">
                <li class="ActionList-item ActionList-item--subItem">
                    <a href="#" class="ActionList-content">
                        <span class="ActionList-item-label">Interaction limits</span>
                    </a>
                </li>
                <li class="ActionList-item ActionList-item--navActive ActionList-item--subItem">
                    <a href="#" aria-current="page" class="ActionList-content">
                        <span class="ActionList-item-label">Code review limits</span>
                    </a>
                </li>
                <li class="ActionList-item ActionList-item--subItem">
                    <a href="#" class="ActionList-content">
                        <span class="ActionList-item-label">Reported content</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```


## Action list divider

List item `li` for separating groups of content

### Variants

| Class | Description |
| :- | :- |
| `ActionList-sectionDivider` | Default subtle divider line |
| `ActionList-sectionDivider--filled` | Thicker divider line |
| `ActionList-item-description` | Optional section header secondary text |

#### Default

```html live
<ul class="ActionList">
  <li
    class="ActionList-sectionDivider"
    role="separator"
    aria-hidden="true"
  ></li>
</ul>
```

#### Filled

```html live
<ul class="ActionList">
  <li
    class="ActionList-sectionDivider ActionList-sectionDivider--filled"
    role="separator"
    aria-hidden="true"
  ></li>
</ul>
```
### Divider with label text

When using a section label for a group, give the `h3` an id to be referenced by the group `ul`
#### Filled with section label

```html live
<ul>
    <li class="ActionList-sectionDivider ActionList-sectionDivider--filled">
        <h3 class="ActionList-sectionDivider-title" id="group-id">
        List group title
        </h3>
    </li>
    <ul class="ActionList" aria-labelledby="group-id">
        <li class="ActionList-item">
            <a href="/" class="ActionList-content">
                <span class="ActionList-item-label">Group Item</span>
            </a>
        </li>
    </ul>
</ul>
```

#### Default with section label

```html live
<ul>
    <li class="ActionList-sectionDivider">
        <h3 class="ActionList-sectionDivider-title" id="group-id">
        List group title
        </h3>
    </li>
    <ul class="ActionList" aria-labelledby="group-id">
        <li class="ActionList-item">
            <a href="/" class="ActionList-content">
                <span class="ActionList-item-label">Group Item</span>
            </a>
        </li>
    </ul>
</ul>
```

#### Default with section label + description

```html live
<ul>
    <li class="ActionList-sectionDivider">
        <h3 class="ActionList-sectionDivider-title" id="group-id">
            List group title
        </h3>
        <span class="ActionList-item-description">Group description</span>
    </li>
    <ul class="ActionList" aria-labelledby="group-id">
        <li class="ActionList-item">
            <a href="/" class="ActionList-content">
                <span class="ActionList-item-label">Group Item</span>
            </a>
        </li>
    </ul>
</ul>
```

## Action list item

List item `li` handling semantics, state and interactions

### Variants

| Class | Description |
| :- | :- |
| `ActionList-item` | Default styles |
| `ActionList-item--hasSubItem` | Item contains a sub item `ul` |
| `ActionList-item--subItem` | Indent + small font size for sub item `li` (optional) |
| `ActionList-item--navActive` | Nav item and `aria-current` |
| `ActionList-item--danger` | Item is destructive |


## Action list item content

Contains and places all child elements within action list item. Can be either an `a href` tag for list link items, or a `button` for items that provide an event on Action List Item `li`.

### Variants

| Class | Description |
| :- | :- |
| `ActionList-content` | Defines the overall layout grid |
| `ActionList-content--sizeMedium` | 40px row height |
| `ActionList-content--sizeLarge` | 48px row height, default for touch devices |
| `ActionList-content--visual16` | Creates left padding for sub list if leading visual exists |
| `ActionList-content--visual20` | Creates left padding for sub list if leading visual exists |
| `ActionList-content--visual24` | Creates left padding for sub list if leading visual exists |
| `ActionList-content--hasActiveSubItem` | Handles active nav state if child item is active |
| `ActionList-item-action` | min-height + default styles for visual slot |
| `ActionList-item-action--leading` | Slot: multi/single select |
| `ActionList-item-action--trailing` | Slot: Button, collapse icon |
| `ActionList-item-visual` | min-height + default styles for visual slot |
| `ActionList-item-visual--leading` | Slot: SVG or graphic like Avatar |
| `ActionList-item-visual--trailing` | Slot: SVG or text |
| `ActionList-item-label` | Item text |
| `ActionList-item-descriptionWrap` | Wraps label/description |
| `ActionList-item-descriptionWrap--inline` | Display description inline with label |
| `ActionList-item-description` | Item description (block by default) |

### Basic text only item

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Basic item label</span>
    </span>
  </li>
</ul>
```

### Size (all options)

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content ActionList-content--sizeMedium">
      <span class="ActionList-item-label">Medium item</span>
    </span>
  </li>
</ul>
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content ActionList-content--sizeLarge">
      <span class="ActionList-item-label">Large item</span>
    </span>
  </li>
</ul>
```

### Visuals (all options- leading & trailing)

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-visual ActionList-item-visual--leading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path>
        </svg>
      </span>
      <span class="ActionList-item-label">Item with trailing visual</span>
      <span class="ActionList-item-visual ActionList-item-visual--trailing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
</ul>
```

### Trailing visual as text

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Item with trailing visual</span>
      <span class="ActionList-item-visual ActionList-item-visual--trailing">
        ⌘N
      </span>
    </span>
  </li>
</ul>
```

### Inline description

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-descriptionWrap ActionList-item-descriptionWrap--inline">
        <span class="ActionList-item-label">Item label</span>
        <span class="ActionList-item-description">This is a description</span>
      </span>
    </span>
  </li>
</ul>
```

### Active navigational item

```html live
<nav>
  <ul class="ActionList">
    <li class="ActionList-item">
      <a href="/" class="ActionList-content">
        <span class="ActionList-item-label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-item">
      <a href="/" class="ActionList-content" aria-current="page">
        <span class="ActionList-item-label">Nav Item</span>
      </a>
    </li>
</nav>
```

### Danger item

```html live
<ul class="ActionList">
  <li class="ActionList-item ActionList-item--danger">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Danger danger</span>
    </span>
  </li>
</ul>
```

### Actions

### Leading action: single select listbox

```html live
<ul class="ActionList" role="listbox" aria-label="Select an option">
  <li class="ActionList-item" role="option" aria-selected="true">
    <span class="ActionList-content">
      <span class="ActionList-item-action ActionList-item-action--leading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-singleSelectCheckmark">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
      </span>
      <span class="ActionList-item-label">Option label</span>
    </span>
  </li>
  <li class="ActionList-item" role="option" aria-selected="false">
    <span class="ActionList-content">
      <span class="ActionList-item-action ActionList-item-action--leading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-singleSelectCheckmark">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
      </span>
      <span class="ActionList-item-label">Option label</span>
    </span>
  </li>
  <li class="ActionList-item" role="option" aria-selected="false">
    <span class="ActionList-content">
      <span class="ActionList-item-action ActionList-item-action--leading">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-singleSelectCheckmark">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
      </span>
      <span class="ActionList-item-label">Option label</span>
    </span>
  </li>
</ul>
```

### Leading action: multi select listbox

```html live
<ul class="ActionList" role="listbox" aria-label="Select multiple options"
  aria-multiselectable="true">
  <li class="ActionList-item" role="option" aria-selected="true">
    <span class="ActionList-content">
      <span class="ActionList-item-action ActionList-item-action--leading">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="ActionList-item-multiSelectIcon">
          <rect x="2" y="2" width="12" height="12" rx="4" class="ActionList-item-multiSelectIconRect"
          ></rect>
          <path fill-rule="evenodd" d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z" class="ActionList-item-multiSelectCheckmark"
          ></path>
        </svg>
      </span>
      <span class="ActionList-item-label">Multi select item</span>
    </span>
  </li>
  <li class="ActionList-item" role="option" aria-selected="true">
    <span class="ActionList-content">
      <span class="ActionList-item-action ActionList-item-action--leading">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="ActionList-item-multiSelectIcon">
          <rect x="2" y="2" width="12" height="12" rx="4" class="ActionList-item-multiSelectIconRect"
          ></rect>
          <path fill-rule="evenodd" d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z" class="ActionList-item-multiSelectCheckmark"
          ></path>
        </svg>
      </span>
      <span class="ActionList-item-label">Multi select item</span>
    </span>
  </li>
</ul>
```

### Trailing action: collapse

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <button class="ActionList-content" aria-expanded="true">
      <span class="ActionList-item-label">Collapsible</span>
      <span class="ActionList-item-action ActionList-item-action--trailing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-collapseIcon">
          <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
    </button>
  </li>
</ul>
```
