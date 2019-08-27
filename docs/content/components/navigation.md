---
title: Navigation
path: components/navigation
status: Stable
source: 'https://github.com/primer/css/tree/master/src/navigation'
bundle: navigation
---

Primer CSS comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

## Menu

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent. Otherwise, apply a custom `width`.

```html live title="Menu"
<nav class="menu" aria-label="Person settings">
  <a class="menu-item selected" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.

```html live
<nav class="menu" aria-label="Person settings">
  <a class="menu-item selected" href="#url" aria-current="page">
    <!-- <%= octicon "tools" %> -->
    <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-tools" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
      />
    </svg>
    Account
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "person" %> -->
    <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-person" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
      />
    </svg>
    Profile
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "mail" %>-->
    <svg version="1.1" width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-mail" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
      />
    </svg>
    Emails
  </a>
  <a class="menu-item" href="#url">
    <!-- <%= octicon "radio-tower" %> -->
    <svg
      version="1.1"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="octicon octicon-radio-tower"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"
      />
    </svg>
    <span class="Counter">3</span>
    Notifications
  </a>
</nav>
```

You can also add optional headings to a menu. Feel free to use nearly any semantic element with the `.menu-heading` class, including inline elements, headings, and more.

```html live title="Menu with heading"
<nav class="menu" aria-labelledby="menu-heading">
  <span class="menu-heading" id="menu-heading">Menu heading</span>
  <a class="menu-item selected" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

## Underline nav

Use `.UnderlineNav` to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page. This component comes with variations to accommodate icons, containers and other content.

```html live title="UnderlineNav"
<nav class="UnderlineNav">
  <div class="UnderlineNav-body">
    <a href="#url" role="tab" title="Item 1" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" role="tab" title="Item 2" class="UnderlineNav-item">Item 2</a>
    <a href="#url" role="tab" title="Item 3" class="UnderlineNav-item">Item 3</a>
    <a href="#url" role="tab" title="Item 4" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

Use `.UnderlineNav-actions` to place another element, such as a button, to the opposite side of the navigation items.

```html live title="UnderlineNav-actions"
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" class="UnderlineNav-item">Item 2</a>
    <a href="#url" class="UnderlineNav-item">Item 3</a>
    <a href="#url" class="UnderlineNav-item">Item 4</a>
  </div>
  <div class="UnderlineNav-actions">
    <a class="btn">Button</a>
  </div>
</nav>
```

Use `.UnderlineNav--right` to right align the navigation.

```html live title="UnderlineNav--right"
<nav class="UnderlineNav UnderlineNav--right">
  <div class="UnderlineNav-body">
    <a href="#url" role="tab" title="Item 1" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" role="tab" title="Item 2" class="UnderlineNav-item">Item 2</a>
    <a href="#url" role="tab" title="Item 3" class="UnderlineNav-item">Item 3</a>
    <a href="#url" role="tab" title="Item 4" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

`.UnderlineNav--right` also works with when used with `.UnderlineNav-actions`.

```html live title="UnderlineNav--right with actions"
<nav class="UnderlineNav UnderlineNav--right" aria-label="Foo bar">
  <div class="UnderlineNav-actions">
    <a class="btn">Button</a>
  </div>
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">Item 1</a>
    <a href="#url" class="UnderlineNav-item">Item 2</a>
    <a href="#url" class="UnderlineNav-item">Item 3</a>
    <a href="#url" class="UnderlineNav-item">Item 4</a>
  </div>
</nav>
```

<!-- Update wording here -->

`.Counters` and `.octicons` can be used with navigation items. Use `.UnderlineNav-octicon` to add color and hover styles.

```html live
<nav class="UnderlineNav" aria-label="Foo bar">
  <div class="UnderlineNav-body">
    <a href="#url" class="UnderlineNav-item selected">
      <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
      <svg
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="octicon octicon-tools UnderlineNav-octicon"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
        />
      </svg>
      Item 1
    </a>
    <a href="#url" class="UnderlineNav-item">
      <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
      <svg
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="octicon octicon-tools UnderlineNav-octicon"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
        />
      </svg>
      Item 2
      <span class="Counter">10</span>
    </a>
    <a href="#url" class="UnderlineNav-item">
      <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
      <svg
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="octicon octicon-tools UnderlineNav-octicon"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
        />
      </svg>
      Item 3
    </a>
    <a href="#url" class="UnderlineNav-item">
      <!-- <%= octicon "tools", :class = "UnderlineNav-octicon" %> -->
      <svg
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="octicon octicon-tools UnderlineNav-octicon"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
        />
      </svg>
      Item 4
    </a>
  </div>
</nav>
```

Use `.UnderlineNav--full` in combination with container styles and `.UnderlineNav-container` to make navigation fill the width of the container.

```html live title="UnderlineNav--full"
<nav class="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
  <div class="container-lg UnderlineNav-container">
    <div class="UnderlineNav-body">
      <a href="#url" class="UnderlineNav-item selected">Item 1</a>
      <a href="#url" class="UnderlineNav-item"
        >Item 2
        <span class="Counter">10</span>
      </a>
      <a href="#url" class="UnderlineNav-item">Item 3</a>
      <a href="#url" class="UnderlineNav-item">Item 4</a>
    </div>
    <div class="UnderlineNav-actions">
      <a class="btn">Button</a>
    </div>
  </div>
</nav>
```

## Side Nav

The Side Nav is a vertical list of navigational links, typically used on the left side of a page. For maximum flexibility, **Side Nav elements have no default width or positioning**. We suggest using [column grid](../../objects/grid) classes or an inline `width` style for sizing, and [flexbox utilities](../../utilities/flexbox) for positioning alongside content.

- You can use a **border** if the parent element doesn't have it already.
- Add `aria-current="page"` to show a link as selected. Selected button elements in tab-like UIs should instead have `aria-selected="true"`.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">Account</a>
  <a class="SideNav-item" href="#url" aria-current="page">Profile</a>
  <a class="SideNav-item" href="#url">Emails</a>
  <a class="SideNav-item" href="#url">Notifications</a>
</nav>
```

Different kind of content can be added inside a Side Nav item. Use utility classes to further style them if needed.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    Text only
  </a>
  <a class="SideNav-item" href="#url">
    <img
      class="avatar avatar-small mr-2"
      src="https://avatars.githubusercontent.com/hubot?s=40"
      alt="hubot"
      height="20"
      width="20"
    />
    With an avatar
  </a>
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "octoface", class: "mr-2" %> -->
    <svg
      version="1.1"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="octicon octicon-octoface mr-2"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
      />
    </svg>
    With an icon
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a status icon
    <!-- <%= octicon "primitive-dot", class: "color-green-5 ml-2 float-right" %> -->
    <svg
      version="1.1"
      width="8"
      height="16"
      viewBox="0 0 8 16"
      class="octicon octicon-primitive-dot color-green-5 ml-2 float-right"
      aria-hidden="true"
    >
      <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
    </svg>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a label <span class="Label bg-blue" title="Label: label">label</span>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a counter <span class="Counter bg-gray-2 ml-1">16</span>
  </a>
  <a class="SideNav-item" href="#url">
    <h5>With a heading</h5>
    <span>and some longer description</span>
  </a>
</nav>
```

The `.SideNav-subItem` is an alternative, more lightweight version without borders and more condensed. It can be used stand-alone.

```html live
<aside class="bg-gray-light border p-3" style="max-width: 360px">
  <h5 class="text-gray mb-2 pb-1 border-bottom">Menu</h5>
  <nav class="SideNav">
    <a class="SideNav-subItem" href="#url">Account</a>
    <a class="SideNav-subItem" href="#url" aria-current="page">Profile</a>
    <a class="SideNav-subItem" href="#url">Emails</a>
    <a class="SideNav-subItem" href="#url">Notifications</a>
  </nav>
</aside>
```

Or also appear nested, as a sub navigation. Use margin/padding utility classes to add indentation.

```html live
<nav class="SideNav border" style="max-width: 360px">
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "person", class: "mr-2" %> -->
    <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-person mr-2" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
      />
    </svg>
    <span>Account</span>
  </a>
  <a class="SideNav-item" href="#url" aria-current="page">
    <!-- <%= octicon "octoface", class: "mr-2" %> -->
    <svg width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-octoface mr-2" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
      />
    </svg>
    <span>Profile</span>
  </a>
  <nav class="SideNav bg-white border-top py-3 pl-6">
    <a class="SideNav-subItem" href="#url" aria-current="page">Sub item 1</a>
    <a class="SideNav-subItem" href="#url">Sub item 2</a>
    <a class="SideNav-subItem" href="#url">Sub item 3</a>
  </nav>
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "mail", class: "mr-2" %> -->
    <svg width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-mail mr-2" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
      />
    </svg>
    <span>Emails</span>
  </a>
</nav>
```

## Tabnav

When you need to toggle between different views, consider using a tabnav. It'll give you a left-aligned horizontal row of... tabs!

```html live title="tabnav"
<div class="tabnav">
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo tab</a>
    <a href="#url" class="tabnav-tab">Bar tab</a>
  </nav>
</div>
```

Use `.float-right` to align additional elements in the `.tabnav`:

```html live title="tabnav with buttons"
<div class="tabnav">
  <a class="btn btn-sm float-right" href="#url" role="button">Button</a>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

Additional bits of text and links can be styled for optimal placement with `.tabnav-extra`:

```html live title="tabnav-extra"
<div class="tabnav">
  <div class="tabnav-extra float-right">
    Tabnav widget text here.
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

```html live title="tabnav with everything"
<div class="tabnav">
  <div class="float-right">
    <a class="tabnav-extra" href="#url">
      Tabnav extra link
    </a>
    <a class="tabnav-extra" href="#url">
      Tabnav extra link
    </a>
  </div>
  <nav class="tabnav-tabs" aria-label="Foo bar">
    <a href="#url" class="tabnav-tab selected" aria-current="page">Foo Tab</a>
    <a href="#url" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>
```

## Filter list

A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue and make the text white.

```html live title="filter-list"
<ul class="filter-list">
  <li>
    <a href="#url" class="filter-item selected" aria-current="page">
      <span class="count" title="results">21</span>
      First filter
    </a>
  </li>
  <li>
    <a href="#url" class="filter-item">
      <span class="count" title="results">3</span>
      Second filter
    </a>
  </li>
  <li>
    <a href="#url" class="filter-item">
      Third filter
    </a>
  </li>
</ul>
```

## Sub navigation

`.subnav` is navigation that is typically used when on a dashboard type interface with another set of navigation above it. This helps distinguish navigation hierarchy.

```html live title="subnav"
<nav class="subnav" aria-label="Respository">
  <a href="#url" class="subnav-item selected" aria-current="page">Item 1</a>
  <a href="#url" class="subnav-item">Item 2</a>
  <a href="#url" class="subnav-item">Item 3</a>
</nav>
```

You can have `subnav-search` in the subnav bar.

```html live
<div class="subnav">
  <nav class="subnav-links" aria-label="Repository">
    <a href="#url" class="subnav-item selected" aria-current="page">Item 1</a>
    <a href="#url" class="subnav-item">Item 2</a>
    <a href="#url" class="subnav-item">Item 3</a>
  </nav>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", :class = "subnav-search-icon" %> -->
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="octicon octicon-search subnav-search-icon"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
      />
    </svg>
  </div>
</div>
```

You can also use a `subnav-search-context` to display search help in a select menu.

```html live
<div class="subnav">
  <nav class="subnav-links">
    <a href="#url" class="subnav-item selected">Item 1</a>
    <a href="#url" class="subnav-item">Item 2</a>
    <a href="#url" class="subnav-item">Item 3</a>
  </nav>
  <div class="float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context">
    <button
      type="button"
      name="button"
      class="btn select-menu-button js-menu-target"
      aria-expanded="false"
      aria-haspopup="true"
    >
      Filters
    </button>
    <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
      <div class="select-menu-modal">
        <div class="select-menu-list">
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 1
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 2
            </div>
          </a>
          <a href="#url" class="select-menu-item js-navigation-item">
            <div class="select-menu-item-text">
              Search filter 3
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="subnav-search float-left">
    <input type="search" name="name" class="form-control subnav-search-input" value="" aria-label="Search site" />
    <!-- <%= octicon "search", :class = "subnav-search-icon" %> -->
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="octicon octicon-search subnav-search-icon"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
      />
    </svg>
  </div>
</div>
```
