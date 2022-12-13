---
title: Menu
path: components/menu
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
rails: 'https://primer.style/view-components/components/alpha/menu'
bundle: navigation
---

The menu is a vertical list of navigational links. **A menu's width and placement must be set by you.** If you like, just use our grid columns as a parent. Otherwise, apply a custom `width`.

```html live title="Menu"
<nav class="menu" aria-label="Person settings">
  <a class="menu-item" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```

There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.

```html live
<nav class="menu" aria-label="Person settings">
  <a class="menu-item" href="#url" aria-current="page">
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
  <a class="menu-item" href="#url" aria-current="page">Account</a>
  <a class="menu-item" href="#url">Profile</a>
  <a class="menu-item" href="#url">Emails</a>
  <a class="menu-item" href="#url">Notifications</a>
</nav>
```
