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

3. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `main` branch in the repository.

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

### Updating Primer CSS

Anyone can open a pull request on Primer CSS. You do not need to work at GitHub or be a member of the org to open a pull request.

1. Fork and clone [this repository](https://github.com/primer/css).
2. Configure and install the dependencies: `npm install`
3. Create a new branch from main `git checkout -b my-branch-name`
4. Make your changes and commit them.
5. Create a changeset for your changes: `npx changeset`
    - See [changesets/changesets](https://github.com/changesets/changesets) for more information.
6. Push your branch and open a pull request. Add a comment describing your proposed changes and request a review from `@primer/css-reviewers`.
7. Wait for CI tests to finish.
   - If the tests pass, you should see a status check telling you which alpha version of `@primer/css` you can install with npm to test your work in other projects.
   - If the tests fail, review the logs and address any issues.
   - If the builds fail for any other reason (as they occasionally do), they may need to be manually restarted.
8. When CI tests pass, a new npm alpha release will be posted under the CI checks, you can use this npm version for testing in your project or with a GitHub site if you are staff.
9. Pat yourself on the back and wait for your pull request to be reviewed.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

## Releasing a new Primer CSS version
See [RELEASING.md](RELEASING.md) for our release process.

## Resources

- [Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/)
- [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
- [GitHub Help](https://help.github.com)

[fork]: https://github.com/primer/css/fork
[pr]: https://github.com/primer/css/compare
[style]: https://primer.style/css/principles
