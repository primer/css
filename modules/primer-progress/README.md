# Primer / Progress

[![npm version](https://img.shields.io/npm/v/primer-progress-bar.svg)](https://www.npmjs.org/package/primer-progress-bar)
[![Build Status](https://travis-ci.org/primer/primer.svg?branch=master)](https://travis-ci.org/primer/primer)

> TODO: fill in this description later

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `primer-progress` with this command.

```
$ npm install --save primer-progress
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-progress/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```
## Documentation

<!-- %docs
title: Progress Bar
status: Experimental
-->

Use progress bars to show progress.

## Default Progress

```html
<span class="Progress">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Large Progress

```html
<span class="Progress Progress--large">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Small Progress

```html
<span class="Progress Progress--small">
  <span class="Progress-value bg-green" style="width: 50%;"></span>
</span>
```

## Progress with tooltip

```html
<div class="tooltipped tooltipped-n" aria-label="78 done / 6 in progress / 2 to do">
  <span class="Progress">
    <span class="Progress-value bg-green" style="width: 50%;"></span>
  </span>
</div>
```

## Progress with multiple values

```html
<div class="tooltipped tooltipped-n" aria-label="78 done / 6 in progress / 2 to do">
  <span class="Progress">
    <span class="Progress-value bg-green" style="width: 50%;"></span>
    <span class="Progress-value bg-purple" style="width: 25%;"></span>
    <span class="Progress-value bg-red" style="width: 5%;"></span>
  </span>
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
