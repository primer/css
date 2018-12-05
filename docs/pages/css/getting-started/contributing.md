---
title: Contributing
doc_type: css
category: getting_started
---

Guidelines for contributing to GitHub's CSS.

- [Decision process for adding new styles](#decision-process-for-adding-new-styles)
- [Step-by-step instructions for adding new styles](#step-by-step-instructions-for-adding-new-styles)
- [Documentation structure](#documentation-structure)
- [Primer modules](#primer-modules)
- [Ship checklist](#ship-checklist)

## Decision process for adding new styles

### Components

[Components](./codestyle/principles#components) are frequently used visual patterns we've abstracted into a set of convenient styles, that would be otherwise difficult to achieve with utilities and layout objects.

Making a decision on whether new components should be added is done on a case by case basis. It's not always easy to make that decision but here are some questions you should ask yourself before moving forward with a pull request. The design systems team will help you make this decision.

* How often is this pattern used across the site?
* Could these styles be achieved with existing components, objects, and utilities?
* If your design is difficult to compose with current styles, does this highlight problems with existing components (such as overly-specific components, or missing objects and utilities)?
* Is this a totally new pattern or should it be an extension of an existing component?
* How is this pattern being implemented currently - have you identified problems with it’s current implementation that can be improved with adding a new pattern?
* Is the desire for this new pattern a side-effect of lacking documentation or mis-understandings of use with current styles?
* Are there special factors that need to be considered as to why the this pattern needs it’s own styles? Such legal issues, usability issues, or branding and trademarks?
* Is this something that would be better handled by other front-end code rather than CSS?
* Every new addition of CSS means we ask our users to download a larger CSS file, and we increase the maintenance work of our CSS framework. Does the convenience of adding these new styles outweigh those costs?

### Objects and utilities

Many of the same questions can be applied to objects and utilities, however the purpose of these styles is different:
* [Objects](./codestyle/principles#objects) aren't concerned with thematic styles. They are for common display and positioning styles we find in page layouts and common content types.
* [Utilities](./codestyle/principles#utilities) do one thing well and one thing only. These styles are immutable and therefore often use the `!important` tag. For this reason we aim not to change the properties of utilities very often. They often form the building blocks of our pages and when we introduce new ones we need to do so with care as we'll likely need to live with these styles for a long time. When assessing whether there is a need to add a new utility, consider these additional questions:
 - how does this new utility fit within our existing set of utilities? If it is an addition to an existing set then it should follow the same naming convention.
 - is it for a property that would likely need to be changed at different breakpoints? If so it may need responsive options.
 - if this style is part of a family of properties, do we need to consider adding the full set? Reasons for adding a full set could be that the other property values are often used, or that there would be a need to switch the property on and off (such as display or visibility).
 - does introducing this new utility cause any clashes or potential confusion with the use of existing utilities? If so, what steps can we take to avoid those issues.
 - does the utility have a connection with a set of variables? If so do the corresponding variables need to be updated?

## Step-by-step instructions for adding new styles

### Step 1: Open an issue
It's usually better to open an issue before investing time in spiking out a new pattern. This gives the design systems team a heads up and allows other designers to share thoughts. Here's and outline of what's helpful to include in a new style issue:

1. What the pattern is and how it's being used across the site - post screenshots and urls where possible. If you need help identifying where the pattern is being used, call that out here and cc the relevant team and/or cc `@product-design` to help.
2. Why you think a new pattern is needed (this should answer the relevant questions above).
3. If you intend to work on these new styles yourself, let us know what your timeline and next steps are. If you need help and this is a dependency for shipping another project, please make that clear here and what the timeline is.
4. Add the `type: new styles` label, or `type: refactor` where appropriate.


### Step 2: Design and build the new styles

* You may want to explore the visual design for a new component before spiking it out in code. If so, continue in the issue and post your design mockups. Using the [Jekyll prototyping tool](https://github.com/github/design/blob/master/docs/resources/prototyping.md#jekyll) could also be a good option, it pulls in the production CSS so you can explore options in isolation before jumping into production code.
* When you're ready, spike out a branch and build out your new component, object, or utilities according to the style guide principles, ensuring you follow our naming convention for each of the styles.
* Refactor parts of the product where you think those new styles could be used to test they work for each use case. This does not mean for every instance, but enough of the key use cases to be sure the styles are flexible enough. To avoid blowing out your initial pull request we recommend you do larger amounts of refactoring in an additional branch.
* When you're ready for review, add the `status: review needed` and the `design-systems` labels to your pull request. Follow the [ship checklist](#ship-checklist) for additional shipping steps.

### Step 3: Follow up with refactoring

New styles we add should be used in as many places as makes sense to in production. Often it takes time to refactor all instances to use the new styles in one pr, but you should ensure this is followed up on.
* Add a tracking issue to the design systems repo with the label `type: refactor`. Add a task list with links to the code or pages that need updating. If you need help, request help in this issue.
* Follow up with as many refactoring pull requests as you can make time for. This is an important part of the process and helps us reduce CSS bloat. Think of it as the project isn't finished until the new styles are being used everywhere they should be in production.

### Step 4: Feel awesome
If you get to this step you've helped contribute to a style guide that many of your colleagues use on a daily basis, you've contributed to an open source project that's referenced and used by many others, and you've helped improve the usability and consistency of GitHub for our users. Thank you!

Let the [design systems team](https://github.com/github/design-systems) know if we can improve these guidelines and make following this process any easier.


## Documentation structure

_**Note:** Documentation for Primer modules should live in the `README` of that module, see the [primer modules](#primer-modules) section below for more details. The [anatomy of a guide](#anatomy-of-a-guide) will work the same as part of a module README as well as regular markdown documentation._

The style guide takes a content first approach. Everything you see on the site is built from markdown files found in this folder.

Currently there’s a few levels of hierarchy. The top level is `styleguide/` inside the only content rendered is the `README.md` file on the style guide homepage.

The folders immediately in `styleguide/` represent top level navigation. There’s a little bit of setup needed to create a new top level navigation item.

* Create a new navigation tab in the navigation partial `github/github/app/views/navigation/_styleguide.html.erb`

Everything inside these top level navigation items gets built into the guide for that section. `README.md` files will be returned for sections (ie. `primer`, `js`, `ruby`, `branding`) when the user is on a section landing page ie `/primer/`.

### Anatomy of a guide

The anatomy of a style guide markdown file pretty straight forward, but has a few optional properties for making the page render special features.

Typically the file will look something like this:

    ---
    title: Avatar stack
    ---

    # Avatar stack

    Stacked avatars can be used to show who is participating in thread when there is limited space available. When you hover over the stack, the avatars will reveal themselves. Optimally, you should put no more than 3 avatars in the stack.

    ```erb
    <span class="avatar-stack tooltipped tooltipped-s" aria-label="jonrohan, broccolini, and shawnbot">
      <%= avatar_for("jonrohan", 39, class: "avatar") %>
      <%= avatar_for("broccolini", 39, class: "avatar") %>
      <%= avatar_for("shawnbot", 39, class: "avatar") %>
    </span>
    ```

Which consists of three parts:

1. **YML frontmatter** _(optional)_, similar to jekyll’s frontmatter, this is a way to pass info to the controller
2. **Docs section** _(required)_, This is the section between the YML and the first `````html`
3. **The example section** _(optional)_, This section is denoted by ````html` and will render into an example used in the page. This can contain rails helpers also eg. `<%= octicons 'fire' %>`

The options you have for the frontmatter are outlined below:

```yml
---
title: Document title
---
```

This is a nicer title for the guide section. If `title:` is not present, the helper will use the filename.

```yml
---
example_layout: toggle
---
```

Example layout will be applied to code blocks. By default it will just put the html into the page along with the syntax highlighted code, but for special cases, like animations, we need some customizations. The options for this property are **toggle, plain, none**. You can also [specify example layout on a per code block basis](#code-blocks).

```yml
---
example_template: icons
---
```

In cases where you don't want to use code blocks to render examples, you can choose to make your example templates. Just specify the template name here, and it will be rendered at the end of a guide.

```yml
---
status: Needs refactoring
---
```

The status option is a tag that will tag a module as a thing, displaying what state the feature is in.


```yml
---
source: /app/assets/stylesheets/primer-product/avatars/lib/avatar-stack.scss
---
```

The source option will let you point the document to the source file. This will then display a link in the styleguide to the sourcefile.

```yml
---
homepage: https://github.com/primer/primer
---
```

Homepage is useful for when you want to point a guide to public source code. When it exists the source icon and link will be displayed publicly.

```yml
---
draft: true
---
```

When a section is public, but you want to keep some of the sections in the guide private, you can set `draft: true`. This will only show that guide to users who meet the `draft_user?` criteria.

### Sorting articles

```yml
# These sort arrays would manual sort these items above the other items in the
# page. The rest of the articles will be sorted alphabetically

# Sort topic sections
css:
  - support

# Sort section articles
css/codestyle:
  - principles
  - SCSS
```

You have the ability to sort the articles manually within each section. create an array with the key that is the styleguide path of the section, ie `css/codestyle` is the array, with `principles` being sorted first.

By default the articles inside each section are sorted alphabetically. When you land on a page like /styleguide/ruby

What you see is something like this.

```
1. README - _the README for the section is always stuck up top, with no sidebar nav_
2. Article A
3. Article B
4. Article C
```

If you add an article to the `.sort.yml` file, then that section will be sorted above the alphabetical section, according to the index of the article in the yml array.

```
1. README - _the README for the section is always stuck up top, with no sidebar nav_
2. Article B - `sort: 1`
3. Article C - `sort: 2`
4. Article A
```

### Special tags

#### Table of contents

In the style guide you can add a `{:toc}` tag to have a table of contents automatically generated.

#### Code blocks

When using code blocks for demo purposes, you can choose to render each of the blocks differently by specifying the layout in the info string. For example if you want to use `toggle` as the layout for a code block:

```markdown
    ```html layout=toggle
      <div class="p-5">Animation</div>
    ```
```

## Primer modules

Modules are created for all the styles we include in the Primer framework. Modules are folders with a specific structure that include CSS, a `package.json`, and other files for publishing to repositories in our GitHub Primer organization and NPM.

The source of truth for our CSS will be in the github/github codebase, but we publish updates to NPM whenever styles in github/github are changed. By publishing to NPM we are able to distribute our reusable modules to other GitHub properties.

Modules are grouped into three packages:
- **primer-core:** modules that are used for dotcom as well as marketing websites
- **primer-product:** modules that are only used on dotcom
- **primer-marketing:** modules that are only used on marketing websites and occasionally for promotional content on dotcom

You can add module packages by including any or all of the following imports in your bundle:
```
@import "primer-core/index.scss"
@import "primer-product/index.scss"
@import "primer-marketing/index.scss"
```

### Creating a module

1. Create a new repository on https://github.com/primer that will be the location for your module. Only the design systems team have write access to that repository. If you don't have access, ask in #design-systems and someone will create a folder for you.
2. Create a new folder inside one of the primer directories (core, product, or marketing), and within the appropriate styles folder (components, objects, utilities etc.). This folder cannot be inside another module with a `package.json` file.
3. Inside the folder you'll need at least a `package.json` file. Here is an example of what you'll need in the package file. The main thing it's looking for are `name, version, and repository`. The publish script uses this to push to the distribution repository.

    ```js
    {
      "name": "module-name",
      "version": "0.1.0",
      "description": "",
      "homepage": "https://github.com/styleguide",
      "license": "MIT",
      "repository": "https://github.com/primer/primer.git",
      "main": "utilities.scss",
      "bugs": {
        "url": "https://github.com/primer/primer/issues"
      },
      "author": "GitHub, Inc.",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "primer",
        "css",
        "github",
        "primercss"
      ]
    }
    ```

5. The directory layout should typically be like this:

    ```
    a-module/
      ├── lib/
      │   ├── partial.scss
      │   └── partial.scss
      ├── index.scss
      ├── README.md
      └── package.json
    ```

    Create a stylesheet named `index.scss`. In this file include a list of relative imports for the partials required, like the example below:

    ```scss
    @import "primer-support/index.scss";
    @import "./lib/button.scss";
    @import "./lib/button-group.scss";
    ```

    Add a `README` to give some info on the module and how to install it, and a documentation section. Here's an example of the [buttons README](https://github.com/primer/primer/blob/master/README.md).

### Publishing changes and new modules

Once you have your directory setup, you will be ready to publish the module.

To publish, there are two requirements. First, you must be on the `master` branch. Second, all changes should be committed and synced with the remote `master`. These requirements protect us from changes being overwritten. Once you're on `master` run `script/css-modules --help` to get a list of all the available commands. This script will help with versioning and publishing.

#### Versioning

All the individual Primer modules are [semver](http://semver.org/) versioned. This helps others know when a change is a patch, minor, or breaking change.

When you're ready to cut a new release for a specific module, you'll want to update that module's version number in the `package.json` file inside of the `github/github` repository.

To help determine what version number to update for the modules, there's a command in `script/css-modules --version` that will interactively step through each module, show you what's changed, and ask if you would like to make a `(M)ajor, M(i)nor, (P)atch` update. The output will look something like this:

```
Changes to primer-navigation since last version 0.3.0:

 * Updating link to real primer repository - Jon Rohan [github/github@bbaedda](https://github.com/github/github/commit/bbaedda)
 * Updating the modules stylelint - Jon Rohan [github/github@389609f](https://github.com/github/github/commit/389609f)
 * move over all bold variable changes - Mark Otto [github/github@6b5b021](https://github.com/github/github/commit/6b5b021)

Do you want to create a new version? (M)ajor, M(i)nor, (P)atch, (S)kip i
 [✓] Updated version number to 0.4.0
```

To understand what choice to make, you'll need to understand semver and know if one of the changes shown is a major, minor, or patch. Semver is confusing at first, so I recommend reviewing [semver](http://semver.org/) and/or ask in [#design-systems](https://github.slack.com/archives/design-systems) or and experienced open-source contributor.

**Running through this script is not required**, but it helps updating the version numbers across all the modules. Afterwards you should have a bunch of updated version numbers in the modules.

### Publishing

After you've [versioned](#versioning) your modules and the new version numbers are on the `master` branch. You're ready to publish those modules to the primer org.

To begin publishing, run `script/css-modules --publish`. This will publish all the commits since the last publish to the primer org.

If any of the modules fail to publish, the script will fail out for that module, and continue with the next.

### NPM

We publish the modules to NPM to make them easy for others to use. You won't need to do anything for this to happen. Once you've [published](#publishing) the module. [TravisCI](https://travis-ci.org/primer) takes over. It runs lint tests on the code, then auto publishes the module to npm.


## Ship checklist

Our CSS framework—[Primer](http://primercss.io/)—is published to [NPM](https://www.npmjs.com/package/primer) and the [Primer organization](https://github.com/primer) on GitHub. When changes are made to primer-core, primer-product, or primer-marketing modules, a few steps are required to keep the framework up-to-date and reliable for everyone to use.

### Required steps
- update the style guide [changelog](../changelog) with a link to the corresponding pull request
- update the Primer module version number according to the [semantic versioning system](http://semver.org/)
- add the labels `design-systems` and `status: review needed` to your pull request, and ensure a design systems [core maintainer](https://github.com/github/design-systems/#core-maintainers) reviews the changes before shipping
- run the publish script once changes are merged into master, if you hit any issues with this please reach out to the [design systems team](https://github.com/github/design-systems)

### Optional steps
Depending on the changes made, you may need to complete these additional steps:
- add a new repo to the [Primer organization](https://github.com/primer) if you are adding a new module
- update the style guide [status](/css#status) in the documentation if the status of the module has changed, and if needed, create a new [feedback issue](https://github.com/github/design-systems/issues?q=is%3Aissue+is%3Aopen+label%3A%22type%3A+feedback%22) in the design systems repo and link it to the documentation
- add documentation when adding a new module, or update documentation if code changes to class names or other implementation details have changed
- write a team post if changes are significant, ask a [core maintainer](https://github.com/github/design-systems/#core-maintainers) to review before posting

To make it clear to reviewers, add the following checklist to your pull request description (edit items as needed):

```md
### Ship checklist
- [ ] Update documentation
- [ ] Update status label
- [ ] Update Changelog.md
- [ ] Update primer module version number
- [ ] Add repo to Primer organization
- [ ] Run publish script to update Primer modules
- [ ] Write team post
```
