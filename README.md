# Origin

Origin is FreeAgent’s internal CSS framework. We’re a growing team working across a range of different projects and codebases, and making CSS work at scale is hard. Agreed principles, approaches, and patterns mean we can do better work faster. That’s what Origin gives us.

Origin consumes our [CSS utilities](https://github.com/fac/fa-css-utilities) and provides some global UI components. It also documents our [principles](http://fac.github.io/origin/principles/) and HTML & CSS [code style](http://fac.github.io/origin/code-style/). We use it in our desktop app, mobile apps, website, and a bunch of other projects.

[**Read the Origin documentation**](http://fac.github.io/origin/) to learn more.


## Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Running documentation locally](#running-documentation-locally)
  - [Publishing](#publishing)
- [Updating](#updating)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)


## Install

**These instructions assume you’re implementing Origin into a new or existing project and _don’t_ want to run the documentation locally**. If you do want to run the documentation or make updates to it, skip to [Running documentation locally](#running-documentation-locally).

Origin can be installed using either npm or Bower.

### Install via npm
Requirements: [Node.js and npm](http://nodejs.org/download/).

```bash
$ cd <your-project-directory>
$ npm install origin-css --save
```

This will add the Origin files to a new `/origin-css` directory inside the `/node_modules` directory at the root of your project, and save `origin-css` as a dependency in your `package.json` file.

If npm isn’t yet being used in your project, running the above command will create the `/node_modules` directory too. You’ll want to [create a package](https://docs.npmjs.com/cli/init) to manage your npm dependencies.

### Install via Bower
Requirements: [Node.js and npm](http://nodejs.org/download/), [Bower](http://bower.io/).

```bash
$ cd <your-project-directory>
$ bower install origin-css --save
```

This will add the Origin files to a new `/origin-css` directory inside the `/bower_components` directory at the root of your project, and save `origin-css` as a dependency in your `bower.json` file.

If Bower isn’t yet being used in your project, running the above command will create the `/bower_components` directory too. You’ll want to [create a package](http://bower.io/docs/creating-packages/) to manage your Bower dependencies.


## Usage

After installing, do the following:

1. Copy the contents of [/origin-css/assets/scss/local](https://github.com/fac/origin/tree/master/assets/scss/local) to your project’s stylesheet directory. Just the contents, not the directory itself.
2. Use `origin.scss` as your master stylesheet. You’ll need to change the paths to the global Sass partials if a) the location of your stylesheets directory isn’t the standard Rails `app/assets/stylesheets` _or_ b) you installed the app via Bower (in which case swap `node_modules` for `bower_components`).

Apart from the docs, Origin doesn’t come with built-in Sass compiler assumes you’re either integrating


## Documentation

Origin’s documentation is built with Jekyll and Grunt. It can be run locally, and is published to [http://fac.github.io/origin/](http://fac.github.io/origin/) via the [`gh-pages`](https://github.com/fac/origin/tree/gh-pages) branch.

All documentation-related files live in the [/docs](https://github.com/fac/origin/tree/master/docs) directory.

Note that the [/assets/scss](https://github.com/fac/origin/blob/master/assets/scss/origin.scss) directory contains the same content as [/docs/scss](https://github.com/fac/origin/blob/master/docs/assets/scss/origin.scss), with a couple of extra additions. **This allows us to use the locally running documentation as a sandbox for new ideas and approaches before publishing them to npm or Bower**.


### Running documentation locally

Following these steps will install Origin, allow you to view documentation locally, and allow you to push documentation changes to [fac.github.io/origin/](http://fac.github.io/origin/).

Requirements: Ruby.

```bash
$ git clone git@github.com:fac/origin.git
$ cd origin
$ bundle install
$ bower install
$ npm install
$ npm install -g grunt-cli
```

Then start a local Jekyll server:

```bash
$ jekyll serve
```

You may need to run `bundle exec jekyll serve` depending on which version of Ruby the gems were installed to on your machine.

Visit [http://localhost:4000/origin/](http://localhost:4000/origin/) in your browser (note the trailing slash).


### Publishing

Use the included Grunt task to generate and publish Origin’s docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.


## Updating

### npm

Within `package.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
    "origin-css": "~1.0.0"
  }
}
```

### Bower

Within `bower.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
    "origin-css": "https://github.com/fac/origin.git#1.0.0"
  }
}
```


## Development

Development of Origin happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/fac/origin/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.


## Contributing

All team members should be contributing back to this repo in order to improve it. The process:

1. Make sure you're up to date with the master branch (`git fetch; git pull origin master`)
2. Branch off master (`git checkout -b <your-branch-name>`) and make your changes
3. Increment the version numbers in [_config.yml](https://github.com/fac/origin/blob/master/_config.yml), [package.json](https://github.com/fac/origin/blob/master/package.json) and [bower.json](https://github.com/fac/origin/blob/master/bower.json). Generally: backwards-compatible fixes and smaller amendments to existing code are patches, new components and breaking changes count as minor releases, and full rewrites are major releases. See [semver.org](http://semver.org/) for detailed guidance.
4. Push up your changes (`git push origin <your-branch-name>`) and write a [helpful pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) describing your changes
5. Ask a fellow designer or engineer to review your changes. Make any required changes, then merge your branch into master: `git checkout master; git merge --no-ff <your-branch-name>`
6. Push up the new version of master (`git push origin master`).
7. [Create a new release](https://help.github.com/articles/creating-releases/) with a useful description. **If you’re making breaking changes, provide guidance in the release notes about what people will have to change in their projects (e.g. “rename instances of `u-padding--none` to `u-padding--0`”)**
8. [Update the NPM package](https://docs.npmjs.com/getting-started/publishing-npm-packages) (`npm publish`) with a new version number. If you don't yet have access to update the NPM package, have someone in the design team add as a contributor. There's no need to manually update the Bower package, as Bower relies solely on git tags for package version information.
9. Consider updating the `origin` version numbers in `package.json` and `bower.json` for any other projects that should receive these updates.

In addition, please read through our [contributing guidelines](https://github.com/fac/origin/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [style guidelines](http://fac.github.io/origin/code-style/).

Editor preferences are available in the [editor config](https://github.com/fac/origin/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


## License

Origin is based on a fork of [Primer](https://github.com/primer/primer), created by and copyright of GitHub, Inc. Released under the [MIT license](LICENSE.md).
