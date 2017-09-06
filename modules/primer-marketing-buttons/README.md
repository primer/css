# Primer Marketing CSS Buttons

[![npm version](http://img.shields.io/npm/v/primer-marketing-type.svg)](https://www.npmjs.org/package/primer-marketing-buttons)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.

This repository is a module of the full [primer-css][primer] repository.

## Documentation

<!-- %docs
title: Typography
status: New Release
-->

The buttons on our marketing pages are based on Primer's core with the addition of more color options for outline buttons, a transparent button, and sizes.


## Outline buttons

The `.btn-outline` has also been extended with the marketing color palette:

```html

<button class="btn btn-outline-orange" type="button">Button button</button>
<a class="btn btn-outline-purple" href="#url" role="button">Link button</a>
<button class="btn btn-outline-blue" type="button">Button button</button>
<button class="btn btn-transparent" type="button">Button button</button>

```

<!-- %enddocs -->

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-marketing-typography` with this command.

```
$ npm install --save primer-marketing-typography
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
