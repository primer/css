# Primer CSS / <%= title %>

[![npm version](http://img.shields.io/npm/v/<%= module %>.svg)](https://www.npmjs.org/package/<%= module %>)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> <%= description %>

This repository is a module of the full [primer-css][primer-css] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `<%= module %>` with this command.

```
$ npm install --save <%= module %>
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "<%= module %>/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package:

```
$ npm run build
```

## Documentation

<!-- %docs
title: <%= title %>
status: <%= status || "Experimental" %>
-->

<%= docs || "TODO: Write some documentation here." %>

<!-- %enddocs -->

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer-css]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
