---
layout: page
title: Components
---

Components are self-contained collections of HTML, CSS, and often JS, that perform a specific function. Buttons, dialogs, tables, navbars, and dropdown menus are all examples of components.

Each component should have a dedicated CSS file, and live in a distinct `/components` directory.

Each component should implement a single part of the UI. Don't try to do
too much. In addition to core styles, components often have variants; modified states for specific contexts.

Most components should not set their own width, margin, and positioning. By authoring a component to be full-width or inline, it can better adapt to the dimensions of an ancestral context.

## Component scope

The component's core class name (e.g., `ComponentName`) reserves a namespace
that can only be used by that component.

All selectors in a component file must start with the component's
namespace. For example, a component called `MyComponent` could have the
following CSS, where every selector starts with the string `MyComponent`.

{% highlight scss %}
.MyComponent {}
.MyComponent--large {}
.MyComponent-title {}
.MyComponent-image {}
.MyComponent-text {}
.MyComponent-time {}
{% endhighlight %}

Each class provides a hook to style specific elements within the HTML definition.

{% highlight html %}
<article class="MyComponent">
  <h1 class="MyComponent-title"></h1>
  <img class="MyComponent-image" src="" alt="">
  <p class="MyComponent-text">
    <span class="MyComponent-time"></span>
  </p>
</div>
{% endhighlight %}


## Documenting implementation details

Components must document their implementation. The CSS comments for a component
should seek to answer the following questions:

* What is the intended presentation?
* What are the modifiers and states?
* What are the reasons for specific, opaque property values.
* What are the known limitations?

[How to write your CSS comments]({{ site.baseurl }}/code-style/#css-comments)

## Naming components
Syntax:

{% highlight bash %}
<ComponentName>[--modifierName|-descendentName]
{% endhighlight %}

Component names should be in upper camel case. In addition to no other elements of our HTML & CSS using upper camel case, there are several benefits:

* It helps to distinguish between the classes for the root of the component, descendent elements, and modifications
* It keeps the specificity of selectors low
* It helps to decouple presentation semantics from document semantics


#### ComponentName

{% highlight scss %}
.MyComponent
.TableView
.DropdownMenu
.Button
.Card
{% endhighlight %}

{% highlight html %}
<div class="MyComponent">
  …
</div>
{% endhighlight %}


#### ComponentName--modifierName

A component modifier is a class that modifies the presentation of the base component in some form (for a certain configuration of the component)

* Write modifier names in lower camel case
* Separate modifiers from the component name by two hyphens
* Include modifiers _in addition_ to the base component class

{% highlight scss %}
/* Core `SegmentedControl` styles */

.SegmentedControl {}

/* High-contrast `SegementedControl` styles */

.SegmentedControl--contrastHigh {}
{% endhighlight %}

{% highlight html %}
<div class="SegmentedControl SegmentedControl--contrastHigh">…</div>
{% endhighlight %}


#### ComponentName-descendentName

A component descendent is a class that is attached to a descendent (child) node of a component. It's responsible for applying presentation directly to the descendent on behalf of a particular component. Write descendent names in lower camel case.

{% highlight html %}
<ol class="TableView">
  <li class="TableView-cell">
    <h3 class="TableView-cell-title">…</h3>
    <h4 class="TableView-cell-label">…</h4>
  </li>
</ol>
{% endhighlight %}

#### ComponentName.is-stateOfComponent

Use `is-stateName` to reflect changes to a component's state. The state name must be lower camel case. **Never style these classes directly; they should always be used as an adjoining class.**

This means that the same state names can be used in multiple contexts, but every component must define its own styles for the state (as they are scoped to the component).

Don't use `is-stateName` classes when you should be using a `ComponentName--modifierName` class. `is-stateName` classes should only be used for **temporary** states (e.g. don't use `is-flash` to create a flash notice when it should actually be `Notice--flash`).

{% highlight scss %}
.DropdownMenu {}
.DropdownMenu.is-expanded {}
{% endhighlight %}

{% highlight html %}
<div class="DropdownMenu is-expanded">
  …
</div>
{% endhighlight %}

### Styling dependencies

**A component should not know about the implementation of its dependencies**.
The appearance of dependencies must be configured using the interface they provide.

Controlling dimensions, margins, position, and inheritable styles of a
component can be done _indirectly_. Add a class to its root element, or wrap
it in another element.
