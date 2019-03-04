# Primer Pagination

> Pagination component for applying button styles to a connected set of links that go to related pages

This repository is a module of the full [primer][primer] repository.

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-pagination/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

Find further documentation at [primer.style/css/components/pagination](https://primer.style/css/components/pagination).
