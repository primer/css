# Primer CSS dropdown

[![npm version](http://img.shields.io/npm/v/primer-dropdown.svg)](https://www.npmjs.org/package/primer-dropdown)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Dropdowns are lightweight, JavaScript-powered context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-dropdown` with this command.

```
$ npm install --save primer-dropdown
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-dropdown/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

<!-- %docs
title: Dropdown
status: Stable
source: https://github.com/github/github/blob/master/app/assets/stylesheets/components/dropdown.scss
-->

{:toc}

## Basic examples

Dropdowns should be trigged by a `<button>`. **[Each dropdown menu requires a directional class](#alignment)**, much like our tooltips.

Using a GitHub button:

```html
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


```html
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

```html
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

```html
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

```html
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

```html
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

```html
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

```html
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

```html
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

```html
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

```html
<div class="select-all-dropdown dropdown js-menu-container js-bulk-actions float-left js-transitionable active">
  <button class="btn btn-sm mr-3 js-menu-target selected" type="button" aria-expanded="true" aria-haspopup="true">
    1 member selected…
    <span class="dropdown-caret"></span>
  </button>
  <div class="dropdown-menu-content js-menu-content">
    <ul class="dropdown-menu dropdown-menu-no-overflow dropdown-menu-se">
      <a href="#change-role-54012" rel="facebox[.change-role-54012]" class="dropdown-item js-menu-close">
        Change role...
      </a>
      <a href="#remove-team-members-54012" class="dropdown-item menu-item-danger js-menu-close">
        Remove from team
      </a>
    </ul>
  </div>
</div>
```

### Sign out button

```html
<div class="dropdown js-menu-container">
  <button class="btn dropdown-toggle js-menu-target" type="button" aria-expanded="false" aria-haspopup="true">
    <img alt="@shawnbot" class="avatar" src="https://avatars0.githubusercontent.com/u/113896?v=4&amp;s=40" height="20" width="20">
  </button>
  <ul class="dropdown-menu dropdown-menu-sw">
    <li class="dropdown-header header-nav-current-user css-truncate">
      Signed in as <strong class="css-truncate-target">shawnbot</strong>
    </li>
    <li class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="/shawnbot">Your profile</a></li>
    <li><a class="dropdown-item" href="/shawnbot?tab=stars">Your stars</a></li>
    <li><a class="dropdown-item" href="https://gist.github.com/">Your Gists</a></li>
    <li class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="https://help.github.com">Help</a></li>
    <li><a class="dropdown-item" href="/settings/profile">Settings</a></li>
    <li>
      <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post">
        <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
          Sign out
        </button>
      </form>
    </li>
  </ul>
</div>
```

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
