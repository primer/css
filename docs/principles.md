---
layout: page
title: Principles
---

We write HTML & CSS using a component-based methodology. It massively improves the authoring experience, ease of maintenance and code quality.

This method is different to “traditional” standards-compliant HTML & CSS in that our semantics are _not_ typically content-derived. Instead we overrule the inherited styles of global HTML elements (`h1`, `p`, `li` etc) and derive class names from our design patterns and functionality. Doing so means we can:

* Create highly reusable [utilities]({{ site.baseurl }}/utilities/) and [components]({{ site.baseurl }}/components/), named in ways that communicate useful information to developers
* Add semantic value for machines using global HTML elements without worrying how they affect about presentation

We also use attributes like `data-ui-component` to add extra semantic value.

### Further reading
* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [Block Element Modifier method](http://bem.info/method/)
* [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [Object Oriented CSS](https://github.com/stubbornella/oocss/wiki)
* [Scalable Modular Architecture CSS](http://smacss.com/book/)

## Principles

_Reproduced from [SUIT CSS design principles](https://github.com/suitcss/suit/blob/master/doc/design-principles.md)_

1. [Modularity](#modularity)
2. [Cohesion](#cohesion)
3. [Composition and configuration](#composition)
4. [Loose coupling](#coupling)
5. [Soft encapsulation](#encapsulation)
6. [Documentation](#documentation)

### Modularity

Each component should have a single focus and contain everything necessary to realise a specific part of the UI. Components may contain HTML, CSS, JavaScript, and associated assets without making assumptions about the outer rendering context.

### Cohesion

The functionality and presentation defined by a component must be semantically related. Components do not have direct influence over each other.

### Composable and configurable

Composability is concerned with the inter-relationships of components. Composable systems have components that can be assembled in various combinations, as required.

Configuration is done via interfaces that are provided and used by components.

### Loose coupling

Components should not directly modify the presentation or behaviour of their dependencies. Relying on interfaces and events for inter-component communication results in a loose coupling.

Attempting to reuse too much code across components can increase their coupling. Isolation is more important than avoiding the repetition of superficially similar code.

### Soft encapsulation

The implementation of a component should not be exposed to other components. For example: your component should not leak styles into the HTML tree fragments of other components; a component's HTML should not be directly included in the HTML for another component.

Complexity is a significant problem for large, adaptive applications. The more you can reduce the entanglement of your components, the easier it is to reason about the system.

### Documentation

Write small, independent components that are well documented to describe how the components should be used, and why specific CSS properties are needed in the implementation. Do not assume that CSS is self-documenting.
