# Primer CSS dropdown

[![npm version](http://img.shields.io/npm/v/primer-dropdown.svg)](https://www.npmjs.org/package/primer-dropdown)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

This repository is a submodule of the [Primer monorepo][primer].

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-dropdown` with this command.

```
$ npm install --save primer-dropdown
```

## Usage

The source files included are written in [Sass][] with SCSS syntax. If you add your `node_modules` directory to your Sass `include-path`, you can import the source files with:

```scss
@import "primer-dropdown/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. **You also need to install [primer-support] and import it** with:

```scss
@import "primer-support/index.scss";
```

## Build

The npm `build` script outputs a CSS version to `build/build.css`, which is distributed with the npm package. You can build it manually with:

```
$ npm run build
```

## Documentation

<!-- %docs
title: Dropdown
status: Stable
-->

Dropdowns are lightweight, JavaScript-powered context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

{:toc}

## Basic examples

Dropdowns may be used with `<details>` and `<summary>` elements or JS behaviors and a `<button>`. **[Each dropdown menu requires a directional class](#alignment)**, much like our tooltips.

Using `<details>` and `<summary>` (no JS required!):

```html title="Dropdown from details"
<details class="details-reset dropdown">
  <summary class="btn dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </summary>

  <div class="dropdown-menu-content">
    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="Dropdown with JS behaviors"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

Using a button customized with additional utilities:

```html title="Dropdown with link-style button"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn-link no-underline text-gray p-2 dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

## Options

### Alignment

Align the direction of dropdown menus and their arrows with modifier classes.

```html title="dropdown-ne"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-ne
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-ne">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="dropdown-e"
<div class="dropdown float-right js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-e
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-e">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="dropdown-se"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-se
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="dropdown-s"
<div class="dropdown d-inline-block mx-auto js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-s
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-s">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="dropdown-sw"
<div class="dropdown float-right js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-sw
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-sw">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

```html title="dropdown-w"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    .dropdown-w
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-w">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
    </ul>
  </div>
</div>
```

### Dividers

```html title="Dropdown with dividers"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-se">
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      <li class="dropdown-divider" role="separator"></li>
      <li><a class="dropdown-item" href="#url">Another item</a></li>
      <li><a class="dropdown-item" href="#url">One more</a></li>
    </ul>
  </div>
</div>
```

### Headers

```html title="Dropdown with headers"
<div class="dropdown js-menu-container js-select-menu">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    Dropdown
    <div class="dropdown-caret"></div>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <div class="dropdown-menu dropdown-menu-se">
      <div class="dropdown-header">
        Dropdown header
      </div>
      <ul>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
        <li><a class="dropdown-item" href="#url">Dropdown item</a></li>
      </ul>
    </div>
  </div>
</div>
```

### No overflow

Use `dropdown-menu-no-overflow` modifier class to set the width of the dropdown
to `auto` and prevent hidden overflows on item contents and text.

```html title="Dropdown with no overflow"
<div class="select-all-dropdown dropdown js-menu-container js-bulk-actions float-left js-transitionable">
  <button class="btn btn-sm mr-3 js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    1 member selected…
    <span class="dropdown-caret"></span>
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-no-overflow dropdown-menu-se">
      <a href="#url" class="dropdown-item js-menu-close">
        Change role...
      </a>
      <a href="#url" class="dropdown-item menu-item-danger js-menu-close">
        Remove from team
      </a>
    </ul>
  </div>
</div>
```

### Sign out button

Use `<button class="dropdown-item dropdown-signout">` to reset button styles
and display it as a link.

```html title="Sign out dropdown"
<div class="dropdown js-menu-container float-right position-relative">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    <img alt="@shawnbot" class="avatar" src="https://avatars0.githubusercontent.com/u/113896?v=4&amp;s=40" height="20" width="20">
  </button>

  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-sw">
      <li class="dropdown-header header-nav-current-user css-truncate">
      Signed in as <strong class="css-truncate-target">shawnbot</strong>
      </li>
      <li class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#url">Your profile</a></li>
      <li><a class="dropdown-item" href="#url">Your stars</a></li>
      <li><a class="dropdown-item" href="#url">Your Gists</a></li>
      <li class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#url">Help</a></li>
      <li><a class="dropdown-item" href="#url">Settings</a></li>
      <li>
        <form class="m-0" accept-charset="UTF-8" action="#url" class="logout-form" method="post">
          <button type="submit" class="dropdown-item dropdown-signout">
          Sign out
          </button>
        </form>
      </li>
    </ul>
  </div>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[docs]: http://primercss.io/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[primer]: https://github.com/primer/primer
[primer-support]: https://github.com/primer/primer/tree/master/modules/primer-support
[sass]: http://sass-lang.com/
