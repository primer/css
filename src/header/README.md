# Primer Header

> Header that is used on GitHub.com

This repository is a module of the full [primer][primer] repository.

## Usage

The source files included are written in [SCSS]. Add the `node_modules` directory to your Sass include paths and import it with:

```scss
@import "@primer/css/header/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

A CSS bundle of this module is distributed with the npm package in `dist/header.css`.

```
$ npm run build
```

## Documentation

Find further documentation at [primer.style/css/components/header](https://primer.style/css/components/header).


## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
