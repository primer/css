# Primer Navigation

[![npm version](https://img.shields.io/npm/v/primer-navigation.svg)](https://www.npmjs.org/package/primer-navigation)
[![Build Status](https://travis-ci.org/primer/css.svg?branch=master)](https://travis-ci.org/primer/primer)

> Primer comes with several navigation components. Some were designed with singular purposes, while others were design to be more flexible and appear quite frequently.

This repository is a module of the full [primer][primer] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-navigation` with this command.

```
$ npm install --save primer-navigation
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-navigation/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

Find further documentation at [primer.style/css/components/navigation](https://primer.style/css/components/navigation).

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
