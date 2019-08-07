# Primer product

> Primer product is one of 3 meta-packages that belong to the Primer framework. Primer product contains packages that are used on GitHub product websites.

## Usage

The source files included are written in [SCSS]. Add the `node_modules` directory to your Sass include paths and import it like so:

```scss
@import "@primer/css/product/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build
The product styles are built as a standalone CSS bundle in `dist/product.css`.

## Documentation

You can read more about primer in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
