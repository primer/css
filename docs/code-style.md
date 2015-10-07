---
layout: page
title: Code style
---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Whitespace
* Use soft-tabs with a two space indent.
* Keep lines equal to or fewer than 115 characters. *(Width of GitHub diff view without wrapping.)*
* Never leave trailing whitespace.
* End each file with a blank newline.

## CSS

### CSS formatting
* Always put each CSS selector on a separate line.
* Leave one blank line between every CSS comment and rule set.
* Leave one space between your CSS selector and opening curly brace.
* Write one CSS declaration per-line.
* Leave one space between your CSS property and value.
* Place the closing rule set curly brace on a separate line, in the same column as the selector.
* Leave one space between each CSS combinator character and your selectors.
* Use a semi-colon after every CSS declaration, even the last one in a rule set.
* Include a space after each comma in comma-separated property or function values.
* Don’t nest declarations more than one-level deep.

### CSS writing style
* Use lowercase and shorthand hex values (e.g. `#aaa`).
* Use single or double quotes consistently. Preference is for double quotes (e.g. `content: “”`).
* Quote attribute values in selectors (e.g. `input[type="checkbox”]`).
* Avoid ID selectors whenever possible.
* Avoid using element types as part of selectors (e.g. `.button` instead of `a.button`).

Example:

{% highlight scss %}
/**
 * Comment for the rule set below
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  display: block;
  float: left;
  @include fa-line-height(tight);
  @include fa-text-color(fa-blue);
}

/**
 * Another comment
 */

p + p,
h3 > p {
  @include fa-margin-bottom(large);
}
{% endhighlight %}

#### CSS declaration order
List all ‘vanilla’ CSS declarations alphabetically, and always `@include` rules afterwards, but still in alphabetical order with other `@include` rules.

Example:

{% highlight scss %}
.MyComponent {
  display: inline-block;
  opacity: 0.5;
  @include fa-background-color(gray-13);
  @include fa-font-family(default);
  @include fa-font-size(large);
  @include fa-line-height(tight);
  @include fa-text-color(fa-blue);
}
{% endhighlight %}

#### Exceptions and deviations
Large blocks of single declarations can use a slightly different, single-line format. In this case, a space should be included after the opening brace and before the closing brace.

Example:

{% highlight scss %}
.selector-1 { width: 10%; }
.selector-2 { width: 20%; }
.selector-3 { width: 30%; }
{% endhighlight %}

Long, comma-separated property values—such as collections of gradients or shadows—can be arranged across multiple lines in an effort to improve readability and produce more useful diffs.

Example:

{% highlight scss %}
@mixin multiple-background-thing {
  background:
    repeat-x top left / 100% 1px image-url("hairline-horizontal.png"),
    repeat-x bottom left / 100% 1px image-url("hairline-horizontal.png");
}
{% endhighlight %}

### CSS comments
Every CSS rule set should have a comment stating what it does, why it exists and why it’s been implemented the way it has. Don’t leave others guessing about the decisions you’ve made.

Comment style should be simple and consistent:

* Place comments on a new line above their rule set, leave one blank line between every CSS comment and rule set.
* Keep lines equal to or fewer than 115 characters.
* Make liberal use of comments to break CSS code into discrete sections.
* Use "sentence case" comments and consistent text indentation.
* Always reference components and utilities _exactly_ by name: `DropdownMenu-header`, not "header"
* When extra clarity is required, use numeric end-of-line comments to reference documentation for individual declarations.
* When referencing another component, utility class or other class in a comment, always format the class name exactly as it’s written elsewhere.

Example:

{% highlight scss %}
/**
 * Short description using Doxygen-style comment format
 *
 * The first sentence of the long description starts here and continues on this
 * line for a while finally concluding here at the end of this paragraph.
 *
 * The long description is ideal for more detailed explanations and
 * documentation. It can include example HTML, URLs, or any other information
 * that is deemed necessary or useful.
 *
 * TODO: This is a todo statement that describes an atomic task to be completed
 *   at a later date. It wraps after 80 characters and following lines are
 *   indented by 2 spaces.
 *
 * @tag This is a tag named 'tag'
 *
 * 1. A helpful description of a declaration's purpose.
 * 2. Another declaration or collection of declarations can reference this
 *    comment with an inline comment corresponding to the lists number.
 */

/* Thematic section comment block
   ========================================================================== */

/* Basic comment */
{% endhighlight %}

When using thematic blocks in CSS comments, there can be variance of spacing — use 2 spaces between thematic blocks if majority of declarations use one-line comments.

### CSS practical example
An example of various conventions.

{% highlight scss %}
/**
 * Segmented control
 *
 * A segmented control is a horizontal control made of multiple segments, each
 * segment functioning as a discrete button. Segment text get truncated when
 * too long to fit into the width of the segment.
 *
 * There are three variants of SegmentedControl:
 * — Low contrast variant: your default choice; contrasts well with other form elements  
 * — Base colour variant: use within a view when it really needs to stick out
 * — High contrast version: to be used against a base colour background (like the NavBar)
 */

.SegmentedControl {
  border: 1px solid $color--gray-9;
  height: $segmented-control-height;
  margin: 0;
  padding: 0;
  text-align: center;
  @include fa-border-radius(default);
  @include fa-line-height(tight);
  @include flexbox(flex);
  @include flex-align-items(stretch);
  @include flex-direction(row);
  @include flex-justify-content(center);
}

/**
 * Individual segment buttons
 */

.SegmentedControl-segment {
  background: none;
  border-color: $color--gray-9;
  border-style: solid;
  border-width: 0 1px 0 0;
  display: inline-block;
  margin: 0;
  padding: 0 4px 1px 4px;
  @include flex(1);
  @include text-truncate;
  @include fa-text-color(gray-9);
}

/* High contrast variant
   ========================================================================== */

/**
 * A higher contrast variant of the SegmentedControl, to be used primarily on
 * the base colour background
 */

.SegmentedControl--contrastHigh {
  border-color: darken($color--base, 10%);
}

.SegmentedControl--contrastHigh .SegmentedControl-segment {
  color: darken($color--base, 10%);
  border-color: darken($color--base, 10%);
}
{% endhighlight %}

## HTML

### HTML formatting
* Always use lowercase tag and attribute names.
* Write one discrete, block-level element per line.
* Use one additional level of indentation for each nested block-level element.
* Use valueless boolean attributes (e.g. `checked` rather than `checked="checked"`).
* Always use double quotes to quote attribute values.
* Omit the `type` attributes from `link` stylesheet, `style` and `script` elements.
* Always include closing tags.

Example (uses JSX syntax):

{% highlight html %}
<div className="TableView">
  <div className="TableView-cell">
    <button disabled>Send</button>
  </div>
</div>
{% endhighlight %}

#### HTML class and attribute order
Component classes (including their `--modifierName` classes) should always be listed first, in alphabetical order. `u-UtilityName` classes should be listed last, except when temporary `is-stateOfComponent` are being applied, in which case they should be listed last.

HTML attributes should be listed in alphabetical order.

Example (uses JSX syntax):

{% highlight html %}
<div className="TableView-cell TableView-cell--borderBottomNone u-textWeight--medium is-disabled" data-ui-component="tableview-cell">
{% endhighlight %}

### HTML practical example
An example of various conventions (uses JSX syntax):

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>FreeAgent Mobile App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <%= stylesheet_link_tag    'fieldagent', media: 'all'%>
    <%= javascript_include_tag 'fieldagent' %>
  </head>
  <body>
    <ViewContent>
      <div className={classes} data-ui-component="list-filter">
        <a className="DropdownMenu-header" onClick={this.toggle}>
          <div className="DropdownMenu-header-content">
            <h3 className="DropdownMenu-header-title">{selectedFilterName}</h3>
            <b className="Icon Icon--align--right Icon--vertical-align--center Icon--arrow Icon--arrow--pointsDown"></b>
          </div>
        </a>

        { this.filterOptions() }

        <Overlay ref="overlay" parent={this} />
      </div>

      <ol className="TableView TableView--titlesMultiple">
        <InfiniteScroll loadMore={loadFunc} hasMore={hasMore}>
          {list}
        </InfiniteScroll>
      </ol>

    </ViewContent>
  </body>
</html>
{% endhighlight %}

This documentation and the conventions in it are based on [SUITCSS HTML/CSS code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md). Many thanks to [Nicolas Gallagher](https://github.com/necolas).
