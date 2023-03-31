# Releasing a new version of Primer CSS 🎉

## Prepare the release (in `primer/css`)

The release process is automated by [changesets]. After you familiarize yourself with how they work. We use an [action workflow integrated in ci](https://github.com/atlassian/changesets#integrating-with-ci).

1. Visit the pull requests page and find the [latest Release tracking pr from primer-css](https://github.com/primer/css/pulls/primer-css). If there isn't one, we'll need to build the next release by merging in PRs with changeset files.

## Test the release candidate (in `github/github`):

1. Create a new branch in the `github/github` repo, name it `primer-<version>`.

1. Update the Primer CSS version to the published release candidate with:

    ```sh
    bin/npm install @primer/css@<version>-rc.<sha>
    ```

    Then commit and push the changes to `package.json`, `package-lock.json`, `LICENSE` and `vendor/npm`.

1. If you need to make changes to github/github due to the Primer CSS release, do them in a branch and merge _that_ into your release branch after testing.

1. Add or re-request reviewers and fix any breaking tests.

1. Test on review-lab.


## Publish the release (in `primer/css`)

1. If the release PR got approved and you've done necessary testing, merge it.

    After tests run, the docs site will be deployed and `@primer/css` will be published with your changes to the `latest` dist-tag. You can check [npm](https://www.npmjs.com/package/@primer/css?activeTab=versions) to see if actions has finished.

2. Done! 🎉


## Update github.com (in `github/github`):

1. Install the latest published version in the same `primer-<version>` branch created earlier with:

    ```
    bin/npm install @primer/css@<version> -w ./npm-workspaces/primer/
    ```

    Then commit and push the changes to `package.json`, `package-lock.json`, `LICENSE` and `vendor/npm`.

1. Fix any breaking tests.

1. Deploy! :rocket:

[changelog]: ../CHANGELOG.md
[changesets]: https://github.com/atlassian/changesets
