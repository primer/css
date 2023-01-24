<p align="center">
  <img width="300px" alt="" src="./docs/src/readme.png">
</p>

<h1 align="center">Primer CSS</h1>

<p align="center">The CSS implementation of GitHub's Primer Design System</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@primer/css">
    <img alt="" src="https://img.shields.io/npm/v/@primer/css.svg">
  </a>
  <a aria-label="build status" href="https://github.com/primer/css/actions/workflows/ci.yml">
    <img alt="" src="https://github.com/primer/css/actions/workflows/ci.yml/badge.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/primer/css/graphs/contributors">
    <img alt="" src="https://img.shields.io/github/contributors/primer/css.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/primer/css/commits/main">
    <img alt="" src="https://img.shields.io/github/last-commit/primer/css.svg">
  </a>
  <a aria-label="license" href="https://github.com/primer/css/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/primer/css.svg" alt="">
  </a>
</p>

## Documentation

> :warning: **The documentation of this repo is not maintained anymore**. Please raise any documentation-specific pull requests in [primer.style/design](https://github.com/primer/design/) 

Our documentation site lives at [primer.style/css](https://primer.style/css). You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Install
This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@primer/css` with this command:

```sh
npm install --save @primer/css
```

## Usage
The included source files are written in [Sass] using SCSS syntax. After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

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
[primer]: https://primer.style/
[sass]: http://sass-lang.com/
