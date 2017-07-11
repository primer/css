# Primer CSS

[![npm version](http://img.shields.io/npm/v/primer-css.svg)](https://www.npmjs.org/package/primer-css)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

Primer is the CSS framework that powers GitHub's front-end design. Primer CSS includes 23 packages that are grouped into 3 core meta-packages for easy install. Each package and meta-package is independently versioned and distributed via npm, so it's easy to include all or part of Primer within your own project.

## Packages

The Primer CSS repo is managed as a monorepo that is composed of many npm packages.

### Core Packages

| Package | Version |
|---|---|
| **[primer-css](/modules/primer-css)** <br />Includes all 23 packages | [![npm](http://img.shields.io/npm/v/primer-css.svg)](https://www.npmjs.com/package/primer-css) |
| [primer-core](/modules/primer-core) | [![npm](http://img.shields.io/npm/v/primer-core.svg)](https://www.npmjs.com/package/primer-core) |
| [primer-product](/modules/primer-product) |  [![npm](http://img.shields.io/npm/v/primer-product.svg)](https://www.npmjs.com/package/primer-product) |
| [primer-marketing](/modules/primer-marketing) | [![npm](http://img.shields.io/npm/v/primer-marketing.svg)](https://www.npmjs.com/package/primer-marketing) |

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-css` with this command.

```sh
$ npm install --save primer-css
```

## Usage

The source files included are written in [Sass][sass] (SCSS). After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "primer-css/index.scss";
```

You can import individual Primer modules by installing them with npm, for instance:

```sh
$ npm install --save primer-navigation
```

Then, you would import the module with:

```scss
@import "primer-navigation/index.scss";
```

Or, while you're figuring out which modules you need, you can import them directly from the `primer-css` [`packages` directory](./packages) like so:

```scss
@import "primer-css/modules/primer-navigation/index.css";
```


## Build

For a compiled **CSS** version of this module, an npm script is included that will output a CSS version to `build/build.css`. The built CSS file is also included in the npm package.

```sh
$ npm run build
```

## Documentation

You can read more about primer in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
