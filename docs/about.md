---
layout: simple
title: About
---

Learn more about this styleguide, particularly how it's built and who maintains it.

### What and why

Primer is GitHub's internal CSS framework. It includes basic global styling for typography, small components like buttons and tabs, and our general guidelines for writing HTML and CSS. It's been used internally at GitHub for years now.

Open-sourcing Primer means sharing and learning with the community. There's a lot we can improve upon in Primer, and help is always appreciated. While we don't currently plan on building this out as a competitor to other front-end frameworks, we will occasionally add, remove, or modify things.

### Browser support

Primer currently supports Internet Explorer 9+ and the latest two versions of Chrome, Safari, and Firefox on OS X and Windows. While not a responsive or mobile-focused project, Mobile Safari and Chrome for Android should render just fine. Support for Linux-based browsers is not strictly guaranteed, but accounted for whenever possible.

### Future updates

See the [roadmap](/roadmap) for a rough outline on what's slated for future versions of Primer.

### Dependencies

- Our styles are built with SCSS.
- Bower is used to link GitHub assets, namely our [Octicons](http://octicons.github.com) icon font and Markdown styles.
- Autoprefixer is used to generate vendor-prefixed declarations and is handled via our Gruntfile.
- A custom plugin for snippet and example combos, `example.rb`, was created as a fork of Jekyll's built-in `highlight` plugin.

### Who

Currently maintained by [@mdo](https://twitter.com/mdo), [@jonrohan](https://twitter.com/jonrohan), and the GitHub CSS team.
