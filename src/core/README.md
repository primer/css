# Primer Core

> Primer core is one of 3 meta-packages that belong to the Primer framework. Primer core contains packages that are shared between GitHub product and marketing websites.

This repository is a compilation of [several CSS packages](https://github.com/primer/css). You can break it down into smaller sections using npm.

## Usage

The source files included are written in [SCSS][scss]. Point your Sass include path at your `node_modules` directory and import it like this:

```scss
@import "@primer/css/core/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a CSS version to `build/build.css` The built CSS file is also included in the npm package.

```
$ npm run build
```

## Documentation

You can read more about primer in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[scss]: https://sass-lang.com/documentation/syntax#scss
