# Primer CSS Module Generator

[![npm version](http://img.shields.io/npm/v/generator-primer-module.svg)](https://www.npmjs.org/package/generator-primer-module)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

Primer is the CSS framework that powers GitHub's front-end design. This is a
[Yeoman] generator that we use to scaffold new Primer modules.

## Usage

### In the Monorepo

1. `cd` to the top level directory of the `primer-css` repository
1. Run:

    ```sh
    npm run new-module
    ```

    You can also pass the module name as a positional argument like this:

    ```sh
    npm run new-module -- primer-module-name
    ```

1. Answer the interactive prompts.

    > If you don't know some of the answers (aside from the module name, which
    > is required), it's okay to press <kbd>enter</kbd> or <kbd>return</kbd>.

1. If all goes well, the new module will be bootstrapped and ready to use. You
   should see a directory with this structure:

    ```
    modules/primer-module-name/
    ├── LICENSE
    ├── README.md
    ├── index.scss
    ├── lib
    │   └── module-name.scss
    └── package.json
    ```

1. If you have any TODOs left from unanswered prompts, fill them out! You can
   list them again with:

   ```sh
   ack TODO modules/primer-module-name
   ```

   (Note: you can use `grep` if you don't have `ack` installed.)


### Standalone installation

This repository is distributed with [npm][npm]. After [installing
npm][install-npm], you can install `generator-primer-module` with this command.

```sh
npm install --save generator-primer-module
```

You'll also need to install the [`yo` CLI](https://github.com/yeoman/yo):

```sh
npm install -g yo
```

### Standalone usage

It's possible to use this generator to create "standalone" Primer modules that
live outside of the Primer CSS monorepo, with the following caveats:

* When prompted to add the new module to existing meta-packages, you will need
  to un-select them all.
* You will also need to manually install all of the monorepo's top-level dev
  dependencies to get tools like `primer-module-build` and `ava`.
* The `npm test` command will not work, because it references a test spec in
  the monorepo.

To run the generator, just pass `primer-module` to the `yo` CLI:

```sh
yo primer-module
```

Then answer the interactiv prompts. **Note that, unlike most other generators,
this one creates a new directory with the provided module name in the current
working directory.**

You can also pass the module name as a positional argument, as in:

```sh
yo primer-module primer-foo-bar
```


## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
[yeoman]: http://yeoman.io
