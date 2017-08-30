# Primer CSS table object

[![npm version](http://img.shields.io/npm/v/primer-dropdown.svg)](https://www.npmjs.org/package/primer-dropdown)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Table object is a module for creating dynamically resizable elements that always sit on the same horizontal line (e.g., they never break to a new line). Using table styles in our CSS means it’s cross browser friendly back to at least IE9.

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-dropdown` with this command.

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

Dropdowns are lightweight, JavaScript-powered context menus for housing navigation and actions. They're great for instances where you don't need the full power (and code) of the select menu.

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

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
