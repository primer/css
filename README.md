# Primer

Primer is the CSS toolkit that powers GitHub's front-end design. It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely *GitHubby*. It's built with SCSS and available via NPM, so it's easy to include all or part of it within your own project.

## Contents

- [Install](#install)
- [Dependencies](#dependencies)
- [Primer stats](#primer-stats)
- [License](#license)

## Install

### NPM

```
$ npm install --save primer-css
```

#### SCSS

Then include a primer import in your scss file

```scss
@import "node_modules/primer-css/primer";
```

#### CSS

You can compile this directory by cloning and running `npm install`. This will install all dependencies and compile a css version for use.

### Dependencies

You'll need the following installed:

- Latest Sass: `$ gem install sass`
- Latest Grunt CLI: `$ npm install -g grunt-cli`
- [Node.js and npm](http://nodejs.org/download/)

Chances are you have all this already if you work on `github/github` or similar projects. If you have all those set up, now you can install the dependencies:

```bash
$ npm install
```

### Primer stats

When compiling or watching the Sass files, Primer will automatically generate a `.primer-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## License

Created by and copyright GitHub, Inc. Released under the [MIT license](LICENSE.md).
