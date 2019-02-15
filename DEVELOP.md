# Primer Development

If you've made it this far, **thank you**! We appreciate your contribution, and hope that this document helps you along the way. If you have any questions or problems, don't hesitate to [file an issue](https://github.com/primer/css/issues/new).

## Structure
Primer CSS is published to [npm] as [@primer/css]. Each of Primer CSS's "modules" lives in a subfolder under `src/` with an `index.scss` in it. Generally speaking, the styles are divided into three primary themes:

* **Core** styles (in `core/`) are common dependencies, which include support variables, native element and typography styles, buttons, navigation, tooltips, etc.
* **Product** styles (in `product/`) are specific to github.com, and include components such as avatars, labels, markdown styles, popovers, and progress indicators.
* **Marketing** styles (in `marketing/`) are specific to GitHub marketing efforts, including international and event-focused sites as well as the more design-heavy feature pages on github.com. Marketing styles include new colors and button styles, and extend the core typography and whitespace scales.

### Paths
Here's what you need to know about how the files are structured in both git and in the published npm module:

* In git, all of the SCSS source files live in the `src/` directory.
* When published, all of the files in `src/` are "hoisted" to the package root so that you can import, say, utilities with:

    ```scss
    @import "@primer/css/utilities/index.scss";
    ```

* All bundle interdependencies within Primer CSS are defined as relative imports (e.g. with `../`), so everything should work fine as long as the `@primer/css` directory is in one of your Sass include paths (i.e. `node_modules`).


## Workflow
The typical Primer workflow looks something like this:

1. `npm install` to install the development dependencies.
1. [Start Storybook](#storybook)
1. Navigate to the module you're working on and modify the SCSS and/or markdown files.
1. Test your changes in Storybook.
1. Push your work to a new branch.
1. Request a review from one of the Primer "core" team members.

## Install
Run `npm install` to install the npm dependencies.

## Docs site
The Primer CSS docs are built with React using [Primer Components](https://primer.style/components) and automatically deployed on every push to this repo using our [primer/deploy action](/primer/deploy). You can run the server locally with:

```sh
npm start
```

Then visit http://localhost:3000/css to view the site.

:rotating_light: **Warning:** Next.js has a [long-running issue](https://github.com/zeit/next.js/issues/1189) with trailing slashes in URLs. Avoid visiting `http://localhost:3000/` if possible, as this may cause your development server to fail in less-than-graceful ways.


### Syncing the docs
Both before and while the Next dev server runs, all of the Markdown files within the `src/` directory are synced to Next's `pages/` directory and rewritten to include useful metadata.

If, for whatever reason, the dev server isn't syncing files from `src/` to `pages/`, you have two choices:

1. Stop the server (`ctrl-C`) and restart it (`npm start`), which will re-sync the files and clear Next's cache.
2. Run [script/sync](./script/sync) manually:

    ```sh
    # in the docs directory
    script/sync
    ```

    **If you find yourself needing to do this often, please [file an issue](/primer/primer/issues/new) and tag `@shawnbot`**. :bow:

### The pages directory
The [pages directory](./pages/) contains all of the files that map to URLs on the site. Because we plan to host the site at `primer.style/css` (and because of the way that Now's path aliasing feature works), we nest all of our documentation under the [css subdirectory](./pages/css).

The sync task maintains a listing of files that it's copied from the modules directory in `pages/css/.gitignore`, which ensures that none of these files are checked into git.

### Sync internals
We use [Metalsmith] to sync the source docs to the `pages` directory and transform them in the following ways:

1. We filter the list of files to only Markdown documents (`**/*.md`).
1. Many bundle `README.md`s wrap the actual documentation content in `<!-- %docs -->` HTML comments that usually include YAML frontmatter. In these instances, we extract the content that portion and reformat the frontmatter.
1. We filter out any Markdown files that _don't_ include a `path` frontmatter key, and rename the destination file to match the `path` (e.g. `path: foo/bar` writes to `pages/css/foo/bar.md`).
1. We set the `source` frontmatter key to a fully-qualified `github.com` URL for the source file so that we can link directly to it.
1. We read the list of files from `pages/css/.gitignore` and delete them from the filesystem, then write the new list of paths so that they aren't committed to git.

All of the logic for syncing the source docs (and transforming them in transit) is controlled in [`lib/sync.js`](./lib/sync.js), and each "step" in the transformation (as well as the watching) is implemented as a Metalsmith plugin.

### URL tests
We have a script that catches inadvertent URL changes caused by renaming or deleting Markdown docs:

```sh
npm run test-urls
```

This script includes some exceptions for URLs that have been intentionally moved or removed in the process of moving away from the [GitHub Style Guide](https://styleguide.github.com/primer/), and which you will need to modify if you rename or remove either Markdown docs or their `path` frontmatter. See [#641](https://github.com/primer/css/pull/641) for more information.

## Storybook
To borrow a [metaphor from Brad Frost](http://bradfrost.com/blog/post/the-workshop-and-the-storefront/), the [docs site](#docs-site) is Primer CSS's storefront, and [Storybook] is its workshop.

Our Storybook setup allows you to view every HTML code block in Primer CSS's Markdown docs in isolation. To get started, run the Storybook server with:

```sh
npm run start-storybook
```

Then visit http://localhost:8000 to test your work.

### Code blocks
All `html` fenced code blocks in `src/**/*.md` will be rendered as stories and listed under the relevant module's name in the left-hand nav. File changes should trigger a live reload automatically (after a brief delay).

If the bundle you're working on has a `stories.js`, it probably includes a snippet like this:

```js
const stories = storiesOf('Module name', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach(({title, story}) => {
    stories.add(title, story)
  })
```

This is how we find all of the Markdown files in the bundle directory and generate stories from their code blocks. Storybook sections are labeled by the first argument to `storiesOf()` (in the above example, "Module name"), and individual stories get their titles from either the previous Markdown heading or the `title` attribute in the fenced code block. See the [`code-blocks` docs](https://npmjs.com/package/code-blocks) and the [`storiesFromMarkdown()` source](./.storybook/lib/storiesFromMarkdown.js) for more info.

## Scripts
Our [`package.json`](package.json) houses a collection of [run-scripts] that we use to maintain, test, build, and publish Primer CSS, notably:

* `dist` runs `script/dist`, which creates CSS bundles of all the `index.scss` files in `src/`.
* `check-links` runs a link checker on your local development server (`localhost:3000`, started with `npm start`).
* `lint` lints all of our SCSS source files.
* `lint-js` lints the docs site and supporting scripts.
* `now-build` and `now-start` are run on [Now] to build and start the docs site server.
* `sync` copies Markdown docs from `src/` to `pages/css/` and preps them for inclusion in the docs site.
* `test-urls` compares a (pre-generated) list of paths from the [Primer Style Guide](https://styleguide.github.com/primer/) to files in `pages/css`, and lets us know if we've inadvertently deleted or renamed anything.
* `test-migrate` tests the [`primer-migrate`](MIGRATING.md#primer-migrate) command line utility.
* `watch` runs the sync script in watch mode, copying files as they're changed from `src/` to `pages/css/`.

You can list all of the available scripts with:

```sh
npm run
```


[@primer/css]: https://www.npmjs.com/package/@primer/css
[metalsmith]: https://metalsmith.io/
[run-scripts]: https://docs.npmjs.com/cli/run-script
[storybook]: https://storybook.js.org/
[npm]: https://www.npmjs.com/
[npx]: https://www.npmjs.com/package/npx
