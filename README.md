# Primer

> *primer* (noun)
> A substance used as a preparatory coat on previously unpainted wood, metal, or canvas, esp. to prevent the absorption of subsequent layers of paint or the development of rust

Primer is the absolute bare bones assets package for GitHub.com and GitHub properties. It contains scss, coffeescript, images, fonts.

## Installation

### Rails

Add `https://github.com/github/primer.git` to your app's `bower.json` at `vendor/assets/bower.json`.

``` json
{
  "name": "myapp",
  "dependencies": {
    "primer": "https://github.com/github/primer.git#0.x.x"
  }
}
```

Make sure you have `>= 0.9.2` of bower:

```
$ npm install -g bower
$ bower -v
0.9.2
```

To pull down the package and any updates, `cd` into `vendor/assets` and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

You should check in `bower.json` and everything under `vendor/assets/bower_compoents`.

**Rails 3.x Note** Rails 3.x is locked to an older version of sprockets that doesn't support bower. You can work around this by installing the [sprockets 2.2.2.backport2](http://rubygems.org/gems/sprockets/versions/2.2.2.backport2) gem.

``` ruby
gem 'sprockets', '2.2.2.backport2'
```

## Usage

```css
@import "primer/components/behavior";
@import "primer/components/buttons";
@import "primer/components/icons";
@import "primer/components/markdown";
@import "primer/components/nav";
@import "primer/components/pygments";
```
