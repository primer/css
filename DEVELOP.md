# Primer CSS Development

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


## Install
Run `npm install` to install the npm dependencies.

## Docs site
The Primer CSS docs are built with React using [Doctocat](https://primer.style/doctocat) and automatically deployed on every push to this repo with [Now]. You can run the server locally with:

```sh
npm start
```

Then visit http://localhost:8000 to view the site.

### The docs directory
The [docs directory](../docs/) contains all of the documentation files in our docs site. Files are nested in the `/content` folder.


### Code blocks
All `html` fenced code blocks in `src/**/*.md` will be rendered as stories and listed under the relevant module's name in the left-hand nav. File changes should trigger a live reload automatically (after a brief delay).

## Scripts
Our [`package.json`](package.json) houses a collection of [run-scripts] that we use to maintain, test, build, and publish Primer CSS. Run `npm run <script>` with any of the following values for `<script>`:

* `dist` runs `script/dist`, which creates CSS bundles of all the `index.scss` files in `src/`.
* `check-links` runs a link checker on your local development server (`localhost:3000`, started with `npm start`).
* `stylelint` lints the CSS source files.
* `eslint` lints the JavaScript source files.
* `now-build` and `now-start` are run on [Now] to build and start the docs site server. `now-test` runs them both in order.
* `start` runs the documentation site locally (alias: `dev`).
* `test` runs our test suite.

The above list may not always be up-to-date. You can list all of the available scripts by calling `npm run` with no other arguments.


[@primer/css]: https://www.npmjs.com/package/@primer/css
[run-scripts]: https://docs.npmjs.com/cli/run-script
[now]: https://zeit.co/now
[npm]: https://www.npmjs.com/
[npx]: https://www.npmjs.com/package/npx
