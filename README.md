# Origin

Origin is FreeAgent’s internal CSS framework. We’re a growing team working across a range of different projects and codebases, and making CSS work at scale is hard. Agreed principles, approaches, and patterns mean we can do better work faster. That’s what Origin gives us.

Origin consumes our [CSS utilities](https://github.com/fac/fa-css-utilities) and provides some global UI components. It also documents our [principles](http://fac.github.io/origin/principles/) and HTML & CSS [code style](http://fac.github.io/origin/code-style/). We use it in our desktop app, mobile apps, website, and a bunch of other projects.

[**Read the Origin documentation**](http://fac.github.io/origin/) to learn more.


## Contents

- [Install](#install)
- [Structure](#structure)
  - [Documentation](#documentation)
  - [Publishing](#publishing)
- [Implementing Origin into a project](#implementing-origin-into-a-project)
- [Development](#development)
  - [Developing ideas locally](#developing-ideas-locally)
- [Contributing](#contributing)
- [License](#license)


## Install

Following these steps will install Origin and it’s docs locally, and allow you to push documentation changes to GitHub Pages.

**If you want to implement Origin into a project and don’t want the documentation, [follow these instructions](#implementing-origin-into-a-project)**

Prerequisites: Ruby, [Bundler](http://bundler.io/), [Node.js](http://nodejs.org/download/)

```bash
$ git clone git@github.com:fac/origin.git
$ cd origin
$ chruby ruby-2.1.2 (or whatever your non-system version of Ruby is)
$ bundle install
$ npm install
$ npm install -g grunt-cli (if you don’t already have Grunt installed)
$ npm install -g bower (if you don’t already have Bower installed)
$ bower install
```

Then start a local Jekyll server:

```bash
$ bundle exec jekyll serve
```

Now open a new terminal window and start Browsersync:

```bash
$ grunt browserSync
```

A new browser tab should open to `http://localhost:3001/origin/`. The docs don't run at root because when published to GitHub Pages they lives at `/origin`. There is an established workaround for this, but it’s not applicable to sites where the Jekyll source is anywhere other than the root directory, and ours lives in `/docs`.


## Structure

Very little of this repository is actually part of the [`origin-css`](https://www.npmjs.com/package/origin-css) npm package. Only:

```
.
├── assets
|   ├── fonts
|   └── scss
├── LICENSE.md
├── package.json
└── README.md
```

These are the only files needed to implement Origin in a project, so that’s all npm needs to know about. [`.npmignore`](https://github.com/fac/origin/blob/master/.npmignore) defines what’s hidden from npm in the same way a `.gitignore` file does.

If you want to make changes to Origin, it’s these files you want to change. The rest of the repository is dedicated to the documentation.

### Documentation

Origin’s documentation is built with Jekyll and Grunt. It can be run locally, and is published to [http://fac.github.io/origin/](http://fac.github.io/origin/) via the [`gh-pages`](https://github.com/fac/origin/tree/gh-pages) branch.

Aside from Jekyll’s [`_config.yml`](https://github.com/fac/origin/blob/master/_config.yml) and Grunt’s [`Gruntfile.js`](https://github.com/fac/origin/blob/master/Gruntfile.js), all files related to documentation live in [`/docs`](https://github.com/fac/origin/tree/master/docs).

Here’s where things get a bit inception-y: **Origin’s documentation _uses Origin_ to document Origin**.

The [`/docs/assets`](https://github.com/fac/origin/tree/master/docs/assets) directory contains many of the same files as the root `/assets` directory (the one included in the npm package). In this sense, the Origin docs are a good example of how you might implement Origin into a project.

But the real purpose of the docs (aside from the obvious) is to give us a sandbox for trying new ideas and approaches before considering them for deployment. It’s our “kitchen sink” view of utilities and components.


### Publishing

Use the included Grunt task to generate and publish Origin’s docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.


## Implementing Origin into a project

These instructions assume you’re implementing Origin into a new or existing project. Origin is installed via npm, and assumes your project already has mechanisms in place for compiling Sass.

Requirements: [Node.js and npm](http://nodejs.org/download/).

```bash
$ cd <your-project-directory>
$ npm install origin-css --save
```

This will add the Origin files to a new `/origin-css` directory inside the `/node_modules` directory at the root of your project, and save `origin-css` as a dependency in your `package.json` file. If npm isn’t yet being used in your project, running the above command will create the `/node_modules` directory too. You’ll want to [create a package](https://docs.npmjs.com/cli/init) to manage your npm dependencies.

After installing, do the following:

1. Copy the contents of [/origin-css/assets/scss/local](https://github.com/fac/origin/tree/master/assets/scss/local) to your project’s stylesheet directory. Just the contents, not the directory itself.
2. Use `origin.scss` as your master stylesheet, or copy it’s contents into your existing master stylesheet. You’ll need to change the paths to the global Sass partials if the location of your stylesheets directory isn’t the standard Rails `app/assets/stylesheets`.


## Development

Development of Origin happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/fac/origin/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

### Developing ideas locally

As mentioned [above](#documentation), Origin’s documentation _uses_ Origin. The [`/docs`](https://github.com/fac/origin/tree/master/docs) directory is the place to experiment with new ideas before considering adding any of them to the root [`/assets`](https://github.com/fac/origin/tree/master/assets) directory.

It’s also possible to try out new ideas for Origin in any other projects where it’s implemented. npm provides a way to point to your _local version of Origin_ instead of referencing the one installed by npm. This means you could, for example, trial changing the `background-color` of a button in Origin and see the effect it has in your app without actually having to push a new version of the Origin package to npm.

[How to symlink a package folder](https://docs.npmjs.com/cli/link)


## Contributing

All team members should be contributing back to this repo in order to improve it. All HTML and CSS should conform to the [style guidelines](http://fac.github.io/origin/code-style/).

Editor preferences are available in the [editor config](https://github.com/fac/origin/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

The process:

#### Branch off, make changes, create a PR

1. Make sure you're up to date with the master branch (`git fetch; git pull origin master`)
2. Branch off master (`git checkout -b <your-branch-name>`) and make your changes
3. Increment the version numbers in [_config.yml](https://github.com/fac/origin/blob/master/_config.yml) and [package.json](https://github.com/fac/origin/blob/master/package.json). Generally: backwards-compatible fixes and smaller amendments to existing code are patches, new components and breaking changes count as minor releases, and full rewrites are major releases. See [semver.org](http://semver.org/) for detailed guidance.
4. Push up your changes (`git push origin <your-branch-name>`) and write a [helpful pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) describing your changes

#### Get your PR reviewed, merge to master, create new release

5. Ask a fellow designer or engineer to review your changes. Make any required changes, then merge your branch into master: `git checkout master; git merge --no-ff <your-branch-name>`
6. Push up the new version of master (`git push origin master`).
7. [Create a new release](https://help.github.com/articles/creating-releases/) with a useful description. Your original PR is probably a good starting point. **If you’re making breaking changes, provide guidance in the release notes about what people will have to change in their projects**
8. [Publish the NPM package](https://docs.npmjs.com/getting-started/publishing-npm-packages) (`npm publish`). If you don't yet have access to update the npm package, have someone in the design team [add you as an owner](https://docs.npmjs.com/cli/owner).

#### Let people know, consider upgrading other projects

If this a major or minor release, let people in the #design and/or #dev Slack channels know by linking to the release. Consider bringing other projects up to date with your new release, especially [Origin](https://github.com/fac/origin).

## License

Origin is based on a fork of [Primer](https://github.com/primer/primer), created by and copyright of GitHub, Inc. Released under the [MIT license](LICENSE.md).
