# Primer

> *primer* (noun)
> A substance used as a preparatory coat on previously unpainted wood, metal, or canvas, esp. to prevent the absorption of subsequent layers of paint or the development of rust

Primer is the absolute bare bones assets package for GitHub.com and GitHub properties. It contains scss, coffeescript, images, fonts.

## Installation

### Rails 3.x apps

``` ruby
gem 'primer', :git => 'https://hubot:TOKEN@github.com/github/primer.git'
```

### Updating

For Rails 3 apps, just run `bundle update primer` and commit any changes to `Gemfile.lock`.

`github/github` is a special case. To update primer run `script/vendor-primer`. If there are any git pull issues, you may need to cd into `vendor/internal-gems/primer` and resolve them manually.

## Usage

```css
@import "primer/components/behavior";
@import "primer/components/buttons";
@import "primer/components/icons";
@import "primer/components/markdown";
@import "primer/components/nav";
@import "primer/components/pygments";
```
