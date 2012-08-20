# Primer

> *primer* (noun)
> A substance used as a preparatory coat on previously unpainted wood, metal, or canvas, esp. to prevent the absorption of subsequent layers of paint or the development of rust

Primer is the absolute bare bones assets package for GitHub.com and GitHub properties. It contains scss, coffeescript, images, fonts.

## Installation

### Rails 3.x apps

``` ruby
gem 'primer', :git => 'https://hubot:TOKEN@github.com/github/primer.git'
```

To update, run `bundle update primer` and commit any changes to `Gemfile.lock`.

## Usage

```css
@import "primer/components/behavior";
@import "primer/components/buttons";
@import "primer/components/icons";
@import "primer/components/markdown";
@import "primer/components/nav";
@import "primer/components/pygments";
```
