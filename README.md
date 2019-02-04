# Primer
[![npm version](https://img.shields.io/npm/v/@primer/css.svg)](https://www.npmjs.org/package/@primer/css)

Primer CSS is the Sass implementation of [Primer], the design system that powers GitHub.

## Install
This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `@primer/css` with this command.

```sh
$ npm install --save @primer/css
```

## Usage
The included source files are written in [Sass][sass] with the SCSS syntax. After [installing](#install) with npm, you can add your project's `node_modules` directory to your Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths](http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) in Ruby), then import it like this:

```scss
@import "@primer/css/index.scss";
```

You can import individual Primer modules directly from the `@primer/css` package:

Then, you would import the module with:

```scss
@import "@primer/css/core/index.scss";
@import "@primer/css/product/index.scss";
@import "@primer/css/marketing/index.scss";
```

## Development
See [DEVELOP.md](./DEVELOP.md) for development docs.

## Releasing (Staff only)
You can find docs about our release process in [RELEASING.md](./RELEASING.md).

## Documentation
The Primer CSS documentation site is created with [Next] and hosted on [Now].

### Running the site
Once you've cloned this repo and run `npm install`, you can start the site with:

```sh
npm start
```

This should start up the Next dev server and a background task that will keep the `pages` directory up-to-date whenever you change the source files in `modules/primer*`.

### Syncing the docs
If, for whatever reason, the dev server isn't syncing files, you have two choices:

1. Stop the server (`ctrl-C`) and restart it (`npm run dev`), which will re-sync the files and clear Next's cache.
2. Run [script/sync](./script/sync) manually:

    ```sh
    # in the docs directory
    script/sync
    ```

    **If you find yourself needing to do this often, please [file an issue](/primer/primer/issues/new) and tag `@shawnbot`**. :bow:

## The pages directory
The [pages directory](./pages/) contains all of the files that map to URLs on the site. Because we plan to host the site at `primer.style/css` (and because of the way that Now's path aliasing feature works), we nest all of our documentation under the additional [css directory](./pages/css).

The sync task maintains a listing of files that it's copied from the modules directory in `pages/css/.gitignore`, which ensures that none of these files are checked into git.

## Sync internals

We use [Metalsmith] to sync the source docs to the `pages` directory and transform them in the following ways:

1. We filter the list of files to only Markdown documents and `package.json` files
1. Many package `README.md`s wrap the actual documentation content in `<!-- %docs -->` HTML comments that usually include YAML frontmatter. In these instances, we extract the content that portion and reformat the frontmatter.
1. We filter out any Markdown files that _don't_ include a `path` frontmatter key, and rename the destination file to match the `path` (e.g. `path: foo/bar` writes to `pages/css/foo/bar.md`).
1. We set the `source` frontmatter key to a fully-qualified `github.com` URL for the source file so that we can link directly to it.
1. A limited list of fields for all packages is extracted into a single file (`pages/css/packages.json`), which serves as a light-weight dependency graph.
1. We read [the changelog](../CHANGELOG.md) and write it to `whats-new/changelog.md` with some additional frontmatter.
1. We read the list of files from `pages/css/.gitignore` and delete them from the filesystem, then write the new list of paths so that they aren't committed to git.

All of the logic for syncing the source docs (and transforming them in transit) is controlled in [`lib/sync.js`](./lib/sync.js), and each "step" in the transformation (as well as the watching) is implemented as a Metalsmith plugin.

**Why [Metalsmith]?** We're glad you asked! `@shawnbot` likes the simplicity of Metalsmith's core and how easy it is to write powerful plugins.

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[Metalsmith]: https://metalsmith.io/
[Next]: https://github.com/zeit/next.js
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[primer]: https://github.com/primer/primer
[sass]: http://sass-lang.com/
