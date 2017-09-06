# Primer Marketing CSS Buttons

[![npm version](http://img.shields.io/npm/v/primer-marketing-buttons.svg)](https://www.npmjs.org/package/primer-marketing-buttons)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [primer-css][primer] repository.

## Documentation

<!-- %docs
title: Marketing Buttons
status: New Release
-->

The buttons on our marketing pages are based on Primer's core with the addition of more color options, color outline buttons, a transparent button, and larger button sizes.


## Color

The `btn` has been extended with the marketing color palette:

```html

<button class="btn btn-orange" type="button">Button button</button>
<a class="btn btn-purple" href="#url" role="button">Link button</a>
<button class="btn btn-blue" type="button">Button button</button>

```

## Outline buttons

The `btn-outline` has also been extended with the marketing color palette:

```html

<button class="btn btn-outline-orange" type="button">Button button</button>
<a class="btn btn-outline-purple" href="#url" role="button">Link button</a>
<button class="btn btn-outline-blue" type="button">Button button</button>
<div class="bg-gray-dark p-4 mt-4">
  <button class="btn btn-transparent" type="button">Button button</button>
</div>

```

## Additional sizing
There are cases where you might want to increase the size of a button, for example when putting a main CTA inside of a jumbotron or major page callout. The btn-large class does the following to make a button more prominent:

1. Adds extra additional padding in `ems` so that the padding scales proportionately with the `font-size`
2. Increases the border radius to 6px

It can optionally be used in combination with a font-size utility (like `f3`) on the parent to increase the font-size.

```html

<p class="f3">
  <a class="btn btn-large btn-purple" href="#url" role="button">Large link button</a>
  <button class="btn btn-large btn-outline-blue" type="button">Large button button</button>
</p>

```

<!-- %enddocs -->

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-marketing-buttons` with this command.

```
$ npm install --save primer-marketing-buttons
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-marketing-buttons/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css`

```
$ npm run build
```

## License

MIT &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[primer-support]: https://github.com/primer/primer-support
[support]: https://github.com/primer/primer-support
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
