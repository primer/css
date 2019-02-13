# Primer
[![npm version](https://img.shields.io/npm/v/@primer/css.svg)](https://www.npmjs.org/package/@primer/css)

Primer CSS is the Sass implementation of [Primer], the design system that powers GitHub.

## Install
This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@primer/css` with this command:

```sh
$ npm install --save @primer/css
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
See [DEVELOP.md](./DEVELOP.md) for development docs.

## Releasing (for GitHub staff)
You can find docs about our release process in [RELEASING.md](./RELEASING.md).

## Documentation
The Primer CSS docs site in this repo is created with [Primer Components], [Next], and hosted on [Now].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)


[next]: https://github.com/zeit/next.js
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[primer]: https://primer.style
[sass]: http://sass-lang.com/
[primer components]: https://primer.style/components
[now]: https://zeit.co/now
