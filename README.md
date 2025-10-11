# Primer CSS
The CSS implementation of GitHub's Primer Design System

[![npm package](https://img.shields.io/npm/v/@primer/css.svg)](https://www.npmjs.com/package/@primer/css)
[![build status](https://github.com/primer/css/actions/workflows/ci.yml/badge.svg)](https://github.com/primer/css/actions/workflows/ci.yml)
[![contributors graph](https://img.shields.io/github/contributors/primer/css.svg)](https://github.com/primer/css/graphs/contributors)
[![last commit](https://img.shields.io/github/last-commit/primer/css.svg)](https://github.com/primer/css/commits/main)
[![license](https://img.shields.io/github/license/primer/css.svg)](https://github.com/primer/css/blob/main/LICENSE)

> :warning: **This project is in KTLO mode!** Use existing utility classes from this project where needed. For more complete patterns that include styling and markup, please use [primer/react](https://github.com/primer/react) or, if necessary, [primer/view_components](https://github.com/primer/view_components).

## Documentation
Our documentation site lives at [primer.style/css](https://primer.style/css). You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Install
This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@primer/css` with this command:

```sh
npm install --save @primer/css
```

## Usage
The included source files are written in [Sass] using SCSS syntax. Once installed, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "@primer/css/index.scss";
```

You can import individual Primer modules directly from the `@primer/css` package:

```scss
@import "@primer/css/core/index.scss";
@import "@primer/css/product/index.scss";
@import "@primer/css/marketing/index.scss";
```

## Development
See [DEVELOP.md](DEVELOP.md) for development docs.

## Releasing (for GitHub staff)
You can find docs about our release process in [RELEASING.md](RELEASING.md).

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)


[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[sass]: http://sass-lang.com/
