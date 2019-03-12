# Primer Avatars

> Avatars are images that users can set as their profile picture. On GitHub, they’re always going to be rounded squares. They can be custom photos, uploaded by users, or generated as Identicons as a placeholder.

This repository is a module of the full [primer][primer] repository.

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-avatars/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

Find further documentation at [primer.style/css/components/avatars](https://primer.style/css/components/avatars).

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/css
[docs]: https://primer.style/css
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
