---
title: Action List
path: components/action-list
status: alpha
source: 'https://github.com/primer/css/tree/main/src/actionlist'
bundle: action-list
storybook: https://primer.style/css/storybook/?path=/story/components-actionlist-actionlistitem--playground
---

Reference the [Action list interface guidelines](https://primer.style/design/components/action-list) for details on where and how to use Action List.

## Action list

Action List is a `ul` list designed to contain Action List Items.

### Variants

| Class | Description |
| :- | :- |
| `ActionList` | Default styles |
| `ActionList--divided` | Show dividers between items |
| `ActionList--subGroup` | If Action List is nested as a sub-list |

#### Default

```html live
<ul class="ActionList">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Item label</span>
    </span>
  </li>
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Item label</span>
    </span>
  </li>
</ul>
```

#### Item dividers

```html live
<ul class="ActionList ActionList--divided" aria-label="Menu description">
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
   <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Action list item</span>
    </span>
  </li>
</ul>
```

#### Nested sub list

```html live
<ul class="ActionList" aria-label="Menu description">
  <li class="ActionList-item">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Action list item</span>
    </span>
  </li>
  <li class="ActionList-item ActionList-item--hasSubItem">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Sub menu label</span>
    </span>
    <ul class="ActionList ActionList--subGroup" aria-label="Menu description">
        <li class="ActionList-item ActionList-item--subItem">
            <span class="ActionList-content">
            <span class="ActionList-item-label">Sub menu item</span>
            </span>
        </li>
        <li class="ActionList-item ActionList-item--subItem">
            <span class="ActionList-content">
            <span class="ActionList-item-label">Sub menu item</span>
            </span>
        </li>
    </ul>
  </li>
</ul>
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
  <li class="ActionList-sectionDivider" role="separator"></li>
</ul>
```

#### Filled

```html live
<ul class="ActionList">
  <li class="ActionList-sectionDivider ActionList-sectionDivider--filled" role="separator"></li>
</ul>
```
### Divider with label text

When using a section label for a group, give the `li` an id to be referenced by the group `ul`
#### Filled with section label

```html live
<ul class="ActionList">
  <li class="ActionList-sectionDivider ActionList-sectionDivider--filled" role="presentation" id="nested-group-id" aria-hidden="true">Section label</li>
  <li class="ActionList-item">
      <ul class="ActionList" aria-labelledby="nested-group-id">
        <li class="ActionList-item">
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
</ul>
```

#### Default with section label

```html live
<ul class="ActionList">
  <li class="ActionList-sectionDivider" role="presentation" id="nested-group-id" aria-hidden="true">Section label</li>
  <li class="ActionList-item">
      <ul class="ActionList" aria-labelledby="nested-group-id">
        <li class="ActionList-item">
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
</ul>
```

#### Default with section label + description

```html live
<ul class="ActionList">
  <li class="ActionList-sectionDivider" role="presentation" id="nested-group-id" aria-hidden="true">
    Section label
    <span class="ActionList-item-description">
      Section description
    </span>
  </li>
  <li class="ActionList-item">
      <ul class="ActionList" aria-labelledby="nested-group-id">
        <li class="ActionList-item">
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Group Item</span>
          </a>
        </li>
      </ul>
    </li>
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

Kitchen sink

```html live
<nav>
  <ul class="ActionList" aria-label="Main menu description">
    <li class="ActionList-item">
      <a href="/" class="ActionList-content">
        <span class="ActionList-item-label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-item" >
      <a href="/" class="ActionList-content">
        <span class="ActionList-item-label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-item" >
      <a href="/" class="ActionList-content">
        <span class="ActionList-item-label">Nav Item</span>
      </a>
    </li>
    <li class="ActionList-sectionDivider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</li>
    <li class="ActionList-item ActionList-item--hasSubItem">
      <ul class="ActionList" aria-labelledby="some-unique-id">
        <li class="ActionList-item" >
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Nav Item</span>
          </a>
        </li>
        <li aria-disabled="true" class="ActionList-item" >
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Disabled Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--navActive" >
            <a href="#" aria-current="location" class="ActionList-content">
            <span class="ActionList-item-label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--danger" >
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Danger Item</span>
          </a>
        </li>
      </ul>
    </li>
    <li class="ActionList-sectionDivider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</li>
    <li class="ActionList-item ActionList-item--hasSubItem">
      <ul class="ActionList ActionList--subGroup" aria-labelledby="some-unique-id">
        <li class="ActionList-item ActionList-item--subItem" >
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--subItem" >
            <a href="#" class="ActionList-content">
            <span class="ActionList-item-label">Nav Item</span>
          </a>
        </li>
        <li class="ActionList-item ActionList-item--subItem" >
          <a href="/" class="ActionList-content">
            <span class="ActionList-item-label">Nav Item</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

```

## Action list item content

Contains and places all child content within Action List Item. Can be either an `a href` tag for list link items, or a `span` for items that provide an event on Action List Item `li`.

### Variants

| Class | Description |
| :- | :- |
| `ActionList-content` | Defines the overall layout grid |
| `ActionList-content--sizeMedium` | 40px row height |
| `ActionList-content--sizeLarge` | 48px row height, default for touch devices |
| `ActionList-content--visual16` | Creates left padding for sub list if leading visual exists |
| `ActionList-content--visual20` | Creates left padding for sub list if leading visual exists |
| `ActionList-content--visual24` | Creates left padding for sub list if leading visual exists |
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
  <ul class="ActionList" aria-label="Main menu description">
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
  <li class="ActionList-item" aria-haspopup="true" aria-expanded="true">
    <span class="ActionList-content">
      <span class="ActionList-item-label">Collapsible</span>
      <span class="ActionList-item-action ActionList-item-action--trailing">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="ActionList-item-collapseIcon">
          <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
</ul>
```

## Accessibility
### Semantic markup

The markup for Action List changes depending on the intended use case.

In all cases, the basic structure is as follows:

```html
<ul>
    <li><span>Content with action (onclick)</span></li>
    <li><a href="/">Content as link</a></li>
    <li>
        <ul>
            <li>Nested list</li>
        </ul>
    </li>
</ul>
```

Pay close attention to `role` attributes throughout the documentation. The `role` attribute may change depending on the context in which Action List is used. Some common use case specs:

[Dropdown menu](https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-links.html)

[Multi/Single select dropdown menu](https://www.w3.org/TR/wai-aria-practices-1.2/examples/menubar/menubar-2/menubar-2.html)

[Single select listbox](https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-collapsible.html)

Note: JS is required to make Action List keyboard accessible.
