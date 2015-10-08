# Origin

Origin is FreeAgent’s internal CSS framework. We’re a growing team working across a range of different projects and codebases, and making CSS work at scale is hard. Agreed principles, approaches, and patterns mean we can do better work faster. That’s what Origin gives us.

Origin consumes our [CSS utilities](https://github.com/fac/fa-css-utilities) and provides some global UI components. It also documents our [principles](http://fac.github.io/origin/principles/) and HTML & CSS [code style](http://fac.github.io/origin/code-style/). We use it in our desktop app, mobile apps, website, and a bunch of other projects.

[**Read the Origin documentation**](http://fac.github.io/origin/) to learn more.


## Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Dependencies](#dependencies)
  - [Running locally](#running-locally)
  - [Publishing](#publishing)
  - [Primer stats](#primer-stats)
- [Updating](#updating)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)

## Install

Prerequisites: Rails, [Node.js](http://nodejs.org/download/), [Bower](http://bower.io/).

```
$ bower install origin-css --save
```

If you also want to install and run the documentation locally:

```
$ bundle install
$ npm install
$ npm install -g grunt-cli
$ bower install
```

### Running documentation locally

From the Terminal, start a local Jekyll server:

```bash
$ bundle exec jekyll serve
```

Visit [http://localhost:4000/origin/](http://localhost:4000/origin/) in your browser.

Optionally, open a second Terminal tab to automatically update our [Primer stats file](#primer-stats):

```bash
$ grunt watch
```


## Documentation

Primer's documentation is built with Jekyll and published to `http://fac.github.io/origin/` via the `gh-pages` branch.


### Publishing

Use the included Grunt task to generate and publish Primer's docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.

### Primer stats

When compiling or watching the Sass files, Primer will automatically generate a `.primer-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Updating

Within `bower.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
    "primer-css": "x.x.x"
  }
}
```

To pull down the updated package, `cd` into `vendor/assets`, and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

Check in `bower.json` and all changes under `vendor/assets/bower_components`.

## Development

Development of Primer happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/primer/primer/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

## Contributing

By contributing to Primer, you agree to the terms presented in [this license agreement](https://cla.github.com/). *More information will be provided here soon.*

When contributing changes to Primer, be sure to do the following steps when opening a pull request:

1. Bump the version number in `bower.json` (it's purely placebo right now, but it's good habit) and `package.json`.
2. Run `grunt` and commit the changes. This compiles the SCSS to CSS so we can do basic analysis on the number of selectors, file size, etc.

In addition, please read through our [contributing guidelines](https://github.com/primer/primer/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [style guidelines](http://primercss.io/guidelines).

Editor preferences are available in the [editor config](https://github.com/primer/primer/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Primer is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

Created by and copyright GitHub, Inc. Released under the [MIT license](LICENSE.md).
