---
title: Contributing
path: getting-started/contributing
---

Guidelines for contributing to GitHub's CSS.

- [Decision process for adding new styles](#decision-process-for-adding-new-styles)
- [Step-by-step instructions for adding new styles](#step-by-step-instructions-for-adding-new-styles)
- [Documentation structure](#documentation-structure)
- [Primer CSS modules](#primer-css-modules)
- [Ship checklist](#ship-checklist)

## Decision process for adding new styles

### Components

[Components](/css/components) are frequently used visual patterns we've abstracted into a set of convenient styles, that would be otherwise difficult to achieve with utilities and layout objects.

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
* [Objects](/css/objects) aren't concerned with thematic styles. They are for common display and positioning styles we find in page layouts and common content types.
* [Utilities](/css/utilities) do one thing well and one thing only. These styles are immutable and therefore often use the `!important` tag. For this reason we aim not to change the properties of utilities very often. They often form the building blocks of our pages and when we introduce new ones we need to do so with care as we'll likely need to live with these styles for a long time. When assessing whether there is a need to add a new utility, consider these additional questions:
    - How does this new utility fit within our existing set of utilities? If it is an addition to an existing set then it should follow the same naming convention.
    - Is it for a property that would likely need to be changed at different breakpoints? If so it may need responsive options.
    - If this style is part of a family of properties, do we need to consider adding the full set? Reasons for adding a full set could be that the other property values are often used, or that there would be a need to switch the property on and off (such as display or visibility).
    - Does introducing this new utility cause any clashes or potential confusion with the use of existing utilities? If so, what steps can we take to avoid those issues.
    - Does the utility have a connection with a set of variables? If so do the corresponding variables need to be updated?

## Step-by-step instructions for adding new styles

### Step 1: Open an issue
It's usually better to open an issue before investing time in spiking out a new pattern. This gives the design systems team a heads up and allows other designers to share thoughts. Here's an outline of what's helpful to include in a new style issue:

1. What the pattern is and how it's being used across the site - post screenshots and urls where possible. If you need help identifying where the pattern is being used, call that out here and cc the relevant team and/or cc `@product-design` to help.
2. Why you think a new pattern is needed (this should answer the relevant questions above).
3. If you intend to work on these new styles yourself, let us know what your timeline and next steps are. If you need help and this is a dependency for shipping another project, please make that clear here and what the timeline is.
4. Add the `type: new styles` label, or `type: refactor` where appropriate.


### Step 2: Design and build the new styles

* You may want to explore the visual design for a new component before spiking it out in code. If so, continue in the issue and post your design mockups. Using our [CodePen template](https://codepen.io/team/GitHub/pen/xYLdZd) could also be a good option, it pulls in Primer CSS so you can explore options in isolation before jumping into production code.
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

- Our documentation site for Primer CSS is built using Next.js and deployed with Now. Our site is built from the `pages` folder and uses MDX to render markdown.

- Documentation for Primer CSS modules should live in the corresponding `.md` file for that module in the `/pages/css` folder. 

-There are separate folders in `/pages/css` for component, object, support, and utilities docs, as well as separate folders for more general documentation such as principles and tooling.

- Each folder corresponds to a new url such as `primer.style/css/utilities`.

- To add new documentation, locate the appropriate folder and create a new `.md` file. Be sure to include the proper front matter (at minimum, title, path and status). For example:

```
---
title: Alerts
path: components/alerts
status: Stable
source: 'https://github.com/primer/css/tree/master/src/alerts'
bundle: alerts
---
```

### Documentation Anatomy

The anatomy of a Primer CSS markdown file is pretty straight forward, but has a few optional properties for making the page render special features.

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

1. **YML frontmatter** _(optional)_, similar to jekyll’s frontmatter, this is used to generate the sidebar and title components.
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
source: https://github.com/github/github/tree/master/app/assets/stylesheets/components/x.scss
---
```

The source option will let you point the document to the source file. **This is only necessary for components that still live in the `github/github` repo**; Primer CSS source files will have the `source` field populated automatically.

### Special tags

#### Tables of contents

In pages published on [primer.style/css](https://primer.style/css), a table of contents is automatically inserted after the first `## Table of Contents` heading (if present).

#### Code blocks

When using code blocks for demo purposes, you can choose to render each of the blocks differently by specifying the layout in the info string. For example if you want to use `toggle` as the layout for a code block:

```markdown
  ```html layout=toggle
  <div class="p-5">Animation</div>
  ```
```

#### Versioning

Primer CSS follows [semantic versioning](http://semver.org/) conventions. This helps others know when a change is a patch, minor, or breaking change.

To understand what choice to make, you'll need to understand semver and know if one of the changes shown is a major, minor, or patch. Semver is confusing at first, so I recommend reviewing [semver](http://semver.org/) and/or ask in [#design-systems](https://github.slack.com/archives/design-systems) or and experienced open-source contributor.
