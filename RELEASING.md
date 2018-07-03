## Releasing a new Primer version 🎉


### In `primer/primer`:


1. Go through the tracking PR and make sure everything that should be merged in is merged in.

2. Once your builds finish, click on the details links for the continuous-integration/travis-ci/push build.  Expand the `Deploying application` output and you should be able to find an outputted change log here. Copy this and update the [CHANGELOG.md](https://github.com/primer/primer/blob/master/CHANGELOG.md) file.

3. Run the version bump in your terminal: `npm run bump`.

4. Test your changes with the latest release candidate version in the appropriate places (styleguide, storybook, github/github).

5. Once the release PR is approved and you've done necessary testing, merge to `master`. This will trigger a publish to npm.

6. Create a new release branch for the next release from `master` and name it `release-<version>`.

 (CI will publish a release candidate version to npm for branches prefixed with `release`. These version numbers have a `rc.<number>` suffix on them)


### In `github/github`:

1. Create a new branch

2. Update the primer version in your terminal  `bin/npm install primer@<version>`.

3. Update `stylelint-config-primer` in your terminal to the appropriate version `bin/npm install stylelint-config-primer@latest`.

4. If you need to make changes to github/github due to the Primer release, make a separate branch. When ready, merge that branch into your release branch.

5. Add reviewers.

6. Check that every deleted vendor file has an accompanying updated vendor file and that the version numbers look correct.

7. Test on review-lab.

8. When ready, merge! 🎉


## Other items that need to be done after publishing Primer

#### Update the Style Guide

1. In [github/styleguide](https://github.com/github/styleguide), update `primer` to your newly released version in your terminal:

  `npm install primer@latest`

2. Then  run: `script/update-primer-docs`.

3. Commit changes, make PR, get it approved, merge! 🚀

#### Update [primer.github.io](primer.github.io)

1. Edit  [index.html](https://github.com/primer/primer.github.io/blob/master/index.html) to include the latest version.


#### Publish release tag

1. Create a new release tag [here](https://github.com/primer/primer/releases/new).

2. Copy the changes from the [CHANGELOG](https://github.com/primer/primer/blob/master/CHANGELOG.md) and paste it into the release notes.

3. Publish 🎉
