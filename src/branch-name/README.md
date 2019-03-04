# Primer / Branch Name

> A nice, consistent way to display branch names.

This repository is a module of the full [primer][primer] repository.

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-branch-name/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

Find further documentation at [primer.style/css/components/branch-name](https://primer.style/css/components/branch-name).

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
