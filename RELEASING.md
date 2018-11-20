## Releasing a new Primer version 🎉


### In `primer/primer`:


1. Go through the tracking PR and make sure everything listed is merged in.

2. To update the change log for your release, click on the details links for the continuous-integration/travis-ci/push build.  Expand the `Deploying application` output and copy the change log content. Update the [CHANGELOG.md](https://github.com/primer/primer/blob/master/CHANGELOG.md) file with the change log content from the build.

3. Bump the package versions in your terminal:

  ```sh
  npm run bump
  ```

4. Run `script/check-versions` to catch any cross-module version mismatches. You may need to update peer dependencies in `primer-popover` and `primer-marketing-buttons`.

5. Test your changes with the latest release candidate version in the appropriate places (styleguide, storybook, github/github).

6. Once the release PR is approved and you've done necessary testing, merge to `master`. This will trigger publishing to npm.

7. Create a new release branch for the next release from `master` and name it `release-<version>`. Please use the following template for the PR description:

    ```md
    # Primer [Major|Minor|Patch] Release

    Tracking Issue for next release: 📦 **0.0.0**
    Approximate release date: 📆 DD/MM/YY

    ### Must

    - [ ]

    ### Should

    - [ ]

    ### Could

    - [ ]

    ----

    ### Ship checklist

    - [ ] Update CHANGELOG
    - [ ] Run version bump
    - [ ] Update primer.github.io
    - [ ] Update github/github
    - [ ] Update the style guide
    - [ ] Update the release tag note
    - [ ] Create a new pull request for the next release

    /cc @primer/ds-core
    ```


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
