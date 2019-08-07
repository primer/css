# Primer marketing

> Primer marketing is one of 3 meta-packages that belong to the Primer framework. Primer marketing contains packages that are used on GitHub marketing websites.

## Usage

The source files included are written in [SCSS]. Add the `node_modules` directory to your Sass include paths and import it with:

```scss
@import "@primer/css/marketing/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

A standalone CSS bundle is built and distributed in `dist/marketing.css`.

## Documentation

You can read more about Primer in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[scss]: https://sass-lang.com/documentation/syntax#scss
