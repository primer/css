# Primer Development

If you've made it this far, **thank you**! We appreciate your contribution, and hope that this document helps you along the way.

## Structure
The project is structured as a [monorepo] made up of lots of small npm modules, many of which depend on each other. We use [Lerna] to manage, version, and publish all of the packages together.

The top-level `package.json` is not published, but tracks common dependencies for developing Primer, and hosts some useful npm [run-scripts]. See the [scripts section](#scripts) for more info.

## Workflow
The typical Primer workflow looks something like this:

1. [Install](#install)
2. [Start Storybook](#storybook)
3. Navigate to the module you're working on and modify the SCSS and/or markdown files.
4. Test your changes in Storybook.
5. Push your work to a new branch to test it on Travis and have it reviewed by the Primer "core" team.

## Install
Run `npm install` to install the npm dependencies and automatically run link all of the local packages together with `npm run bootstrap`.

### Troubleshooting install problems
If you run into trouble installing, it's always best to ensure that you're starting from a clean slate by running the following from the repository root directory:

```sh
npm run fresh
```

If _that_ gives you problems, then you can try manually deleting everything and starting over:

```
rm -rf node_modules
rm -f package-lock.json */*/package-lock.json
npm install
```

**You may need to do this whenever switching between branches with different dependencies, submodules, or versions of Node and/or npm.** The Primer core team generally uses the latest major version of Node (10 as of this writing), but our CI tests run Node 8 and npm 6. You can check which versions you're running with:

```sh
npm --version
node --version
```

## Storybook
Run `npm start` to start up [Storybook], then visit [localhost:3000](http://localhost:3000) to test your work. By default, all `html` code blocks of all `*.md` files in each module will be rendered as stories and listed under the module's name in the left-hand nav. File changes should trigger live reload automatically after a brief delay.

If the package you're working on has a `stories.js`, it probably includes a snippet like this:

```js
const stories = storiesOf('Module name', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach(({title, story}) => {
    stories.add(title, story)
  })
```

This is how we find all of the Markdown files in the package directory and generate stories from their code blocks. Storybook sections are labeled by the first argument to `storiesOf()` (in the above example, "Module name"), and individual stories get their titles from either the previous Markdown heading or the `title` attribute in the fenced code block. See the [`code-blocks` docs](https://npmjs.com/package/code-blocks) and the [`storiesFromMarkdown()` source](./.storybook/lib/storiesFromMarkdown.js) for more info.

## CSS packages
All of the Primer CSS packages live in the [modules](./modules) subdirectory, including the [`primer`](./modules/package) omnibus package.

## Tools
Many tools specific to development of Primer CSS live in the [tools](./tools) subdirectory. 

## Scripts
The [`script` directory](./script) houses a collection of scripts that we use to maintain, test, build, and publish packages. Some scripts of note:

* `script/check-imports` compares the list of Primer npm dependencies for each package with SCSS `@import` statements in its source, and warns if any mismatches (dependencies without corresponding imports, or vice-versa) are found.
* `script/compare-published` compares the latest published versions of each Primer CSS package with the `version` field in its local `package.json`, and reports any discrepancies.
* `script/get-packages` lists all of the package subdirectories from both `modules` and `tools` directories, and is useful for iterating in shell scripts:

    ```sh
    for pkg in $(script/get-packages); do
      echo $pkg
    done
    ```
    
    If you're looking for more detail, you can also run `npx lerna ls`, which will list the packages by name along with their versions.
    
Scripts like `lint-scss`, `notify`, and `test-docs` are called from individual packages to run specific common tasks.


[monorepo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[Lerna]: https://github.com/lerna/lerna
[run-scripts]: https://docs.npmjs.com/cli/run-script
[Storybook]: https://storybook.js.org/
[npx]: https://www.npmjs.com/package/npx
