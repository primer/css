# Primer

> *primer* (noun)
> A substance used as a preparatory coat on previously unpainted wood, metal, or canvas, esp. to prevent the absorption of subsequent layers of paint or the development of rust

Primer is the absolute bare bones assets package for GitHub.com and GitHub properties. It contains styles to get you up and running:

* base reset of styles
* type styles
* form styles
* component styles like buttons, alerts, and tooltips

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

To pull down the package, `cd` into `vendor/assets` and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

You should check in `bower.json` and everything under `vendor/assets/bower_components`.

**Rails 3.x Note** Rails 3.x is locked to an older version of sprockets that doesn't support bower. You can work around this by installing the [sprockets 2.2.2.backport2](http://rubygems.org/gems/sprockets/versions/2.2.2.backport2) gem.

``` ruby
gem 'sprockets', '2.2.2.backport2'
```

## Updating

Within `bower.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
		"primer": "https://github.com/github/primer.git#0.x.x"
	}
}
```

To pull down the updated package, `cd` into `vendor/assets`, and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

Check in `bower.json` and all changes under `vendor/assets/bower_components`.

## Usage

```css
@import "primer/basecoat/normalize";
@import "primer/basecoat/base";
@import "primer/basecoat/forms";
@import "primer/basecoat/type";
@import "primer/basecoat/utility";

@import "primer/components/behavior";
@import "primer/components/buttons";
@import "primer/components/icons";
@import "primer/components/markdown";
@import "primer/components/nav";
@import "primer/components/pygments";
```
