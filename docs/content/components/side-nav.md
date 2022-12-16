---
title: SideNav
path: components/side-nav
status: Stable
source: 'https://github.com/primer/css/tree/main/src/navigation'
rails: 'https://primer.style/view-components/components/alpha/navlist'
bundle: navigation
---

The Side Nav is a vertical list of navigational links, typically used on the left side of a page. For maximum flexibility, **Side Nav elements have no default width or positioning**. We suggest using [column grid](../utilities/grid) classes or an inline `width` style for sizing, and [flexbox utilities](../utilities/flexbox) for positioning alongside content.

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
    <!-- <%= octicon "octoface", class: "SideNav-icon" %> -->
    <svg class="SideNav-icon octicon octicon-octoface" version="1.1" width="16" height="16" viewBox="0 0 16 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /> </svg>
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
    With a label <span class="Label">label</span>
  </a>
  <a class="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
    With a counter <span class="Counter ml-1">16</span>
  </a>
  <a class="SideNav-item" href="#url">
    <h5>With a heading</h5>
    <span>and some longer description</span>
  </a>
</nav>
```

The `.SideNav-subItem` is an alternative, more lightweight version without borders and more condensed. It can be used stand-alone.

```html live
<aside class="color-bg-subtle border p-3" style="max-width: 360px">
  <h5 class="color-fg-muted mb-2 pb-1 border-bottom">Menu</h5>
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
    <!-- <%= octicon "person", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-person SideNav-icon" width="12" height="16" viewBox="0 0 12 16" aria-hidden="true"> <path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z" /> </svg>
    <span>Account</span>
  </a>
  <a class="SideNav-item" href="#url" aria-current="page">
    <!-- <%= octicon "octoface", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-octoface SideNav-icon" width="16" height="16" viewBox="0 0 16 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /> </svg>
    <span>Profile</span>
  </a>
  <nav class="SideNav color-bg-default border-top py-3" style="padding-left: 44px">
    <a class="SideNav-subItem" href="#url" aria-current="page">Sub item 1</a>
    <a class="SideNav-subItem" href="#url">Sub item 2</a>
    <a class="SideNav-subItem" href="#url">Sub item 3</a>
  </nav>
  <a class="SideNav-item" href="#url">
    <!-- <%= octicon "mail", class: "SideNav-icon" %> -->
    <svg class="octicon octicon-mail SideNav-icon" width="14" height="16" viewBox="0 0 14 16"  aria-hidden="true"> <path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z" /> </svg>
    <span>Emails</span>
  </a>
</nav>
```
