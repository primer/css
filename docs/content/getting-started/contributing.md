---
title: Contributing
description: Guidelines for contributing to GitHub's CSS
---

While this contributing guide is for GitHub employees, all contributions from the community are welcome.

## Decision process for adding new styles

### Components

[Components](/components) are frequently used visual patterns we've abstracted into a set of convenient styles, that would be otherwise difficult to achieve with utilities and layout objects.

Decisions to add new components are made on a case-by-case basis, with help from the GitHub Design Systems team. Some questions that we use to guide these decisions include:

- How often is this pattern used across the site?
- Could these styles be achieved with existing components, objects, and utilities?
- If your design is difficult to compose with current styles, does this highlight problems with existing components (such as overly-specific components, or missing objects and utilities)?
- Is this a totally new pattern or should it be an extension of an existing component?
- How is this pattern being implemented currently - have you identified problems with it’s current implementation that can be improved with adding a new pattern?
- Is the desire for this new pattern a side-effect of lacking documentation or misunderstanding of use with current styles?
- Are there special factors that need to be considered as to why the this pattern needs it’s own styles? Such legal issues, usability issues, or branding and trademarks?
- Is this something that would be better handled by other front-end code rather than CSS?
- Every new addition of CSS means we ask our users to download a larger CSS file, and we increase the maintenance work of our CSS framework. Does the convenience of adding these new styles outweigh those costs?

### Objects and utilities

Many of the same questions can be applied to objects and utilities, however the purpose of these styles is different:

- [Objects](/objects) aren't concerned with thematic styles. They are for common display and positioning styles we find in page layouts and common content types.
- [Utilities](/utilities) do one thing well and one thing only. These styles are immutable and therefore often use the `!important` tag. For this reason we aim not to change the properties of utilities very often. They often form the building blocks of our pages and when we introduce new ones we need to do so with care as we'll likely need to live with these styles for a long time. When assessing whether there is a need to add a new utility, consider these additional questions:
  - How does this new utility fit within our existing set of utilities? If it is an addition to an existing set then it should follow the same naming convention.
  - Is it for a property that would likely need to be changed at different breakpoints? If so it may need responsive options.
  - If this style is part of a family of properties, do we need to consider adding the full set? Reasons for adding a full set could be that the other property values are often used, or that there would be a need to switch the property on and off (such as display or visibility).
  - Does introducing this new utility cause any clashes or potential confusion with the use of existing utilities? If so, what steps can we take to avoid those issues.
  - Does the utility have a connection with a set of variables? If so do the corresponding variables need to be updated?

## Step-by-step instructions for adding new styles

### Step 1: Open an issue

It's usually better to open an issue before investing time in spiking out a new pattern. This gives the design systems team a heads up and allows other designers to share thoughts. Here's an outline of what's helpful to include in a new style issue:

1. What the pattern is, and how it's being used on GitHub.com. Post screenshots and/or URLs whenever possible. If you need help identifying where the pattern is used, call that out in the issue.
2. Why you think a new pattern is needed (this should answer the relevant questions above).
3. If you intend to work on these new styles yourself, let us know what your timeline and next steps are. If you need help and this is a dependency for shipping another project, please make that clear here and what the timeline is.
4. Add the appropriate label(s):
    - `Type: Enhancement` for new styles
    - `Type: Bug Fix` for—you guessed it!—bug fixes
    - `Type: Polish` for refactors of existing styles
    - `Type: Breaking Change` for any change that [removes CSS selectors or SCSS variables](#removing-styles-and-variables)

### Step 2: Design and build the new styles

- You may want to explore the visual design for a new component before spiking it out in code. If so, continue in the issue and post your design mockups. Using our [CodePen template](https://codepen.io/team/GitHub/pen/xYLdZd) could also be a good option, it pulls in Primer CSS so you can explore options in isolation before jumping into production code.
- When you're ready, spike out a branch and build out your new component, object, or utilities according to the style guide principles, ensuring you follow our naming convention for each of the styles.
- Refactor parts of the product where you think those new styles could be used to test they work for each use case. This does not mean for every instance, but enough of the key use cases to be sure the styles are flexible enough. To avoid blowing out your initial pull request we recommend you do larger amounts of refactoring in an additional branch.
- When you're ready for review, add the `status: review needed` and the `design-systems` labels to your pull request. Follow the [ship checklist](#ship-checklist) for additional shipping steps.

### Step 3: Follow up with refactoring

New styles we add should be used in as many places as makes sense to in production. Often it takes time to refactor all instances to use the new styles in one pr, but you should ensure this is followed up on.

- Add a tracking issue to the design systems repo with the label `type: refactor`. Add a task list with links to the code or pages that need updating. If you need help, request help in this issue.
- Follow up with as many refactoring pull requests as you can make time for. This is an important part of the process and helps us reduce CSS bloat. Think of it as the project isn't finished until the new styles are being used everywhere they should be in production.

### Step 4: Feel awesome

If you get to this step you've helped contribute to a style guide that many of your colleagues use on a daily basis, you've contributed to an open source project that's referenced and used by many others, and you've helped improve the usability and consistency of GitHub for our users. Thank you!

[Please open an issue](#step-1-open-an-issue) if we can improve these guidelines and make following this process any easier.


## Documentation structure

- Our documentation site for Primer CSS is built using [Doctocat](https://primer.style/doctocat) and deployed with [Now](https://zeit.co/now). Our site is built from the `docs` folder and uses [MDX](https://mdxjs.com) to render markdown.

- Documentation for Primer CSS modules should live in the corresponding `.md` or `.mdx` file for that module in the `/docs/content` folder.

- There are separate folders in `/docs/content` for component, object, support, and utilities docs, as well as separate folders for more general documentation such as principles and tooling.

- Documents in `docs/content/` automatically become pages with URLs based on their path relative to `content/`. For example, `docs/content/components/box.md` creates a `/components/box` page.

- To add new documentation, locate the appropriate folder and create a new `.md` or `.mdx` file. Be sure to include the proper front matter (at minimum, title and status). For example:

```
---
title: Alerts
status: Stable
source: 'https://github.com/primer/css/tree/main/src/alerts'
---
```

### Table of contents

A table of contents is automatically inserted at the top of every page published on [primer.style/css](https://primer.style/css).

### Navigation

For new components or doc pages, add the title and url to [nav.yml](https://github.com/primer/css/blob/main/docs/src/%40primer/gatsby-theme-doctocat/nav.yml).

### Live code

Check out Doctocat's [live code](https://primer.style/doctocat/usage/live-code) documentation for more information about creating live code examples.

### Versioning

Primer CSS follows [semantic versioning](http://semver.org/) conventions. This helps others know when a change is a patch, minor, or breaking change.

To understand what choice to make, you'll need to understand semver and know if one of the changes shown is a major, minor, or patch. Semver is confusing at first, so we recommend reviewing [semver](http://semver.org/) and/or asking the team by [opening an issue](#step-1-open-an-issue).

[semantic versioning]: https://semver.org
[script/test-deprecations.js]: https://github.com/primer/css/tree/main/script/test-deprecations.js
[deprecations.js]: https://github.com/primer/css/tree/main/deprecations.js
