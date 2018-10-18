## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.
* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Validate and lint your code** &mdash; [validate your HTML](http://html5.validator.nu) to ensure your problem isn't caused by a simple error in your own code.

2. **Use the GitHub issue search** &mdash; check if the issue has already been reported.

3. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `master` branch in the repository.

4. **Isolate the problem** &mdash; ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? Do other browsers show the bug differently? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Feature requests

Feature requests are welcome, but take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

### Updating Primer modules

Anyone can open a pull request on Primer. You do not need to work at GitHub or be a member of the org to open a pull request.

1. Fork and clone [this repository](https://github.com/primer/primer).
2. Configure and install the dependencies: `npm install`
3. Create a new branch from master `git checkout -b my-branch-name`
4. Make your changes and commit them.
5. Push your branch and open a pull request. Add a comment describing your proposed changes and request a review from `@primer/ds-core`.
6. Wait for CI tests to finish.
   - If the tests pass, you should see a status check telling you which alpha version of primer you can install with npm to test your work in other projects.
   - If the tests fail, review the logs and address any issues.
   - If the builds fail for any other reason (as they occasionally do), they may need to be manually restarted.
7. When CI tests pass, a new npm alpha release will be posted under the CI checks, you can use this npm version for testing in your project or with a GitHub site if you are staff.
8. Pat yourself on the back and wait for your pull request to be reviewed.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

## Releasing a new Primer version 🎉

This section is targeted at maintainers of primer, to instruct them on the processes for releasing a new version.

### In `primer/primer`:

1. Find or create a new pull request with a release branch from `master` and name it `release-<version>`.

   (CI will publish a release candidate version to npm for branches prefixed with `release`. These version numbers have a `rc.<number>` suffix on them)

   For the pull request you can use the following template:

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

2. Go through the tracking issue and make sure everything that should be merged in is merged in.

3. Once your builds finish, click on the details links for the continuous-integration/travis-ci/push build.  Expand the `Deploying application` output and you should be able to find an outputted change log here. Copy this and update the [CHANGELOG.md](https://github.com/primer/primer/blob/master/CHANGELOG.md) file.

4. Run the version bump in your terminal: `npm run bump`.

5. Test your changes with the latest release candidate version in the appropriate places (styleguide, storybook, github/github).

6. Once the release PR is approved and you've done necessary testing, merge to `master`. This will trigger a publish to npm.

### In `github/github`:

1. Create a new branch

2. Update the primer version in your terminal  `bin/npm install primer@<version>`.

3. If you need to make changes to github/github due to the Primer release, make a separate branch. When ready, merge that branch into your release branch.

4. Add reviewers.

5. Check that every deleted vendor file has an accompanying updated vendor file and that the version numbers look correct.

6. Test on review-lab.

7. When ready, merge! 🎉


## Other items that need to be done after publishing Primer

#### Update the Style Guide

1. In [github/styleguide](https://github.com/github/styleguide), update `primer` to your newly released version in your terminal:

  `npm install primer@latest`

2. Then  run: `script/update-primer-docs`.

3. Commit changes, make PR, get it approved, merge! 🚀

#### Update [primer.github.io](primer.github.io)

1. Edit  [index.html](https://github.com/primer/primer.github.io/blob/master/index.html) to include the latest version.

#### Update Storybook

1. Pull the latest from master on primer/primer (after merging in release branch).

2. Run `npm run publish-storybook`.

#### Publish release tag

1. Create a new release tag [here](https://github.com/primer/primer/releases/new).

2. Copy the changes from the [CHANGELOG](https://github.com/primer/primer/blob/master/CHANGELOG.md) and paste it into the release notes.

3. Publish 🎉


## Resources

- [Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/)
- [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
- [GitHub Help](https://help.github.com)

[fork]: https://github.com/primer/primer/fork
[pr]: https://github.com/primer/primer/compare
[style]: https://styleguide.github.com/primer/principles/
