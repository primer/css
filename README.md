# Primer Module Build Script

[![NPM version](http://img.shields.io/npm/v/primer-module-build.svg)](https://www.npmjs.org/package/primer-module-build)
[![Build Status](https://travis-ci.org/primer/primer-module-build.svg?branch=master)](https://travis-ci.org/primer/primer-module-build)

> Scripts to build primer SCSS modules into CSS and stats

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-module-build` with this command.

```
$ npm install --save primer-module-build
```

## Documentation & Usage

The script is CLI based. What it does is compiles the scss then runs it throught postcss. Placing the output in the `build/build.css` file. Then it compiles some stats on the module and places it in the `build/index.js` file.

```
$ primer-module-build index.scss
```

The best way to set this up for automation is to place `primer-module-build path/to/file.scss` in the `"prepublish"` npm script.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
