## Releasing a new Primer version 🎉


### In this repo <a name="in-primerprimer"></a>

1. Check off all of the boxes in your release PR.

1. Test your changes with the latest release candidate version [in github/github](#in-github-github).

1. Once the release PR is approved and you've done necessary testing, merge it. After tests run, the site will be deployed and `@primer/css` will be published with your changes.

1. Create a new release branch for the next release from `master` and name it `release-<version>`. Please use the following template for the PR description, linking to the relevant issues and/or pull requests for each change, and removing irrelevant headings:

    ```md
    # Primer [Major|Minor|Patch] Release

    Version: 📦 **0.0.0**
    Approximate release date: 📆 DD/MM/YY

    ### :boom: Breaking Change
    - [ ] Description #

    ### :rocket: Enhancement
    - [ ] Description #

    ### :bug: Bug Fix
    - [ ] Description #
    
    ### :nail_care: Polish
    - [ ] Description #
    
    ### :memo: Documentation
    - [ ] Description #
    
    ### :house: Internal
    - [ ] Description #

    ----

    ### Ship checklist

    - [ ] Update `CHANGELOG.md`
    - [ ] Increment version in `package.json` with `npm version`
    - [ ] [Create a new release](https://github.com/primer/css/releases/new)
    - [ ] [Update github/github](https://github.com/primer/css/blob/master/RELEASING.md#in-githubgithub)
    - [ ] Create a new pull request for the next release

    /cc @primer/ds-core
    ```


### In `github/github`:

1. Create a new branch

1. Update the primer version in your terminal  `bin/npm install @primer/css@<version>`. [primer/publish](/primer/publish) will create a check status listing the published version.
   * If you're working on a release candidate, the `<version>` will be suffixed with `-rc.<sha>`, where `<sha>` is the 7-character SHA of the most recently published commit.
   * Otherwise, your work will be published to the `canary` dist-tag as `0.0.0-sha.<sha>`.

1. If you need to make changes to github/github due to the Primer release, do them in a branch and merge _that_ into your release branch after testing.

1. Add or re-request reviewers and fix any breaking tests.

1. Test on review-lab.

1. Publish `@primer/css` to the `latest` dist-tag by merging the release branch and waiting for the publish action to finish.

1. Run `bin/npm install @primer/css@<version>` with the published version and commit the resulting changes.

1. Push your changes and fix any breaking tests.

1. Deploy! :rocket:


### Publish release tag

1. [Create a new release](https://github.com/primer/primer/releases/new) with tag `v<version>`.

2. Copy the changes from the [CHANGELOG] and paste them into the release notes.

3. Publish 🎉

[changelog]: ../CHANGELOG.md
