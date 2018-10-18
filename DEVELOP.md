# Primer Development

If you've made it this far, **thank you**! We appreciate your contribution, and hope that this document helps you along the way.

## Structure
The project is structured as a [monorepo] made up of lots of small npm modules, many of which depend on each other. We use [Lerna] to manage, version, and publish all of the packages together.

The top-level `package.json` is not published, but tracks common dependencies for developing Primer, and hosts some useful npm [run-scripts].

## Workflow
The typical Primer workflow looks something like this:

1. [Install]
2. [Start Storybook][Storybook]
3. Navigate to the module you're working on and modify the SCSS and/or markdown files.
4. Test your changes in Storybook.
5. Push your work to a new branch to test it on Travis and have it reviewed by the Primer "core" team.

## Install
Run `npm install` to install the npm dependencies and automatically run link all of the local packages together with `npm run bootstrap`.

**If you run into trouble installing**, try starting over from scratch by running:

```sh
npx lerna clean --yes
rm -rf node_modules
```

**You may need to do this whenever switching between branches with different dependencies, submodules, or versions of Node and/or npm.** Be sure to use Node 8 or greater and npm 6 or greater. You can check which versions you're running with:

```sh
npm --version
node --version
```

## Storybook
Run `npm start` to fire up [Storybook], then visit [localhost:3000](http://localhost:3000) to test your work. By default, all `html` code blocks of all `*.md` files in each module will be rendered as stories and listed under the module's name in the left-hand nav. File changes should trigger live reload automatically after a brief delay.

## CSS packages
All of the Primer CSS packages live in the [modules](./modules) subdirectory, including the [`primer`](./modules/package) omnibus package.

## Tools
Many tools specific to development of Primer CSS live in the [tools](./tools) subdirectory.

[monorepo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[Lerna]: https://github.com/lerna/lerna
[run-scripts]: https://docs.npmjs.com/cli/run-script
[Storybook]: https://storybook.js.org/
