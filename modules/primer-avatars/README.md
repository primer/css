# Primer Avatars

[![npm version](https://img.shields.io/npm/v/primer-avatars.svg)](https://www.npmjs.org/package/primer-avatars)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> Avatars are images that users can set as their profile picture. On GitHub, they’re always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-avatars` with this command.

```
$ npm install --save primer-avatars
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-avatars/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

<!-- %docs
title: Avatars
path: components/avatars
status: Stable
-->

Avatars are images that users can set as their profile picture. On GitHub, they're always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

{:toc}

## Basic example

Add `.avatar` to any `<img>` element to make it an avatar. This resets some key styles for alignment, address a Firefox image placeholder bug, and rounds the corners.

Be sure to set `width` and `height` attributes for maximum browser performance.

```html
<img class="avatar" alt="jonrohan" src="/jonrohan.png?v=3&s=144" width="72" height="72">
```

### Small avatars

We occasionally use smaller avatars. Anything less than `48px` wide should include the `.avatar-small` modifier class to reset the `border-radius` to a more appropriate level.

```html
<img class="avatar avatar-small" alt="jonrohan" src="/jonrohan.png?v=3&s=64" width="32" height="32">
```

### Parent-child avatars

When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes.

```html
<div class="avatar-parent-child float-left">
  <img class="avatar" alt="jonrohan" src="/jonrohan.png?v=3&s=96" width="48" height="48">
  <img class="avatar avatar-child" alt="josh" src="/josh.png?v=3&s=40" width="20" height="20">
</div>
```

### Avatar stack

Stacked avatars can be used to show multiple collaborators or participants when there is limited space available. When you hover over the stack, the avatars will reveal themselves.

```html
<div class="AvatarStack AvatarStack--three-plus">
  <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
  </div>
</div>
```

Based on the number of avatars in the stack, add these modifier classes:
- `AvatarStack--two` for 2 avatars.
- `AvatarStack--three-plus` for 3 or more avatars.

If you have more than three avatars, add a div with the classes `avatar avatar-more` as the third avatar in the stack, as such:

```html
<div class="AvatarStack AvatarStack--three-plus">
  <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, octocat, octocat, and octocat">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <div class="avatar avatar-more"></div>
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
  </div>
</div>
```

You can also link individual avatars. To do this shift the `avatar` class over to the anchor:

```html
<div class="AvatarStack AvatarStack--two">
  <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
    <a href="#" class="avatar">
      <img height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    </a>
    <a href="#" class="avatar">
      <img height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    </a>
  </div>
</div>
```

Use `AvatarStack--right` to right-align the avatar stack. Remember to switch the alignment of tooltips when making this change.

```html
<div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
  <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
    <img class="avatar" height="20" alt="@octocat" src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png" width="20">
  </div>
</div>
```

## Circle Badge

`.CircleBadge` allows for the display of badge-like icons or logos. They are used mostly with Octicons or partner integration icons.

`.CircleBadge` should have an `aria-label`, `title` (for a link), or an `alt` (for child `img` elements) attribute specified if there is no text-based alternative to describe it. If there is a text-based alternative or the icon has no semantic value, `aria-hidden="true"` or an empty `alt` attribute may be used.

### Small

```html
<a class="CircleBadge CircleBadge--small float-left mr-2" href="#small" title="Travis CI">
  <img src="<%= image_path "modules/site/travis-logo.png" %>"  class="CircleBadge-icon" alt="">
</a>
<a class="CircleBadge CircleBadge--small bg-yellow" title="Zap this!" href="#small">
  <%= octicon "zap",  :class => "CircleBadge-icon text-white" %>
</a>
```

### Medium

```html
<div class="CircleBadge CircleBadge--medium bg-gray-dark">
    <img src="<%= image_path "modules/site/travis-logo.png" %>"  alt="Travis CI" class="CircleBadge-icon">
</div>
```

### Large

```html
<div class="CircleBadge CircleBadge--large">
  <img src="<%= image_path "modules/site/travis-logo.png" %>"  alt="Travis CI" class="CircleBadge-icon">
</div>
```

### Dashed connection

For specific cases where two badges or more need to be shown as related or connected (such as integrations or specific product workflows), a `DashedConnection` class was created. Use utility classes to ensure badges are spaced correctly.

```html
<div class="DashedConnection">
  <ul class="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
    <li class="CircleBadge CircleBadge--small" aria-label="GitHub">
      <%= octicon "mark-github", :class => "width-full height-full" %>
    </li>

    <li class="CircleBadge CircleBadge--small" aria-label="Slack">
        <img src="<%= image_path "modules/site/logos/slack-logo.png" %>"  alt="" class="CircleBadge-icon">
    </li>

    <li class="CircleBadge CircleBadge--small" aria-label="Travis CI">
        <img src="<%= image_path "modules/site/travis-logo.png" %>"  alt="" class="CircleBadge-icon">
    </li>
  </ul>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primer.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
