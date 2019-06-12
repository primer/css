---
title: Components
path: components/index
---

Components make it easier to mark up a set of elements that are commonly grouped together with similar visual styles. Their base styles are shared and variants are added with modifier classes, so usually components are comprised of multiple classes. Most importantly, components should be highly reusable across the site, rather than built for specific pages or features. To achieve this:

* **Separate structure and skin:** This means to define repeating visual features (like background and border styles) as separate “skins” that you can mix-and-match with your various components to achieve a large amount of visual variety without much code.
* **Separate container and content:** Essentially, this means “rarely use location-dependent styles”. A component should look the same no matter where you put it.
