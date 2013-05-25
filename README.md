# Primer

> *primer* (noun)
> A substance used as a preparatory coat on previously unpainted wood, metal, or canvas, esp. to prevent the absorption of subsequent layers of paint or the development of rust

Primer is the absolute bare bones assets package for GitHub.com and GitHub properties. It contains scss, coffeescript, images, fonts.

## Installation

### Rails 3.x apps

``` ruby
# Gemfile
gem 'github-primer', :git => 'https://hubot:TOKEN@github.com/github/primer.git'

# application.rb
require 'primer/railtie'
```

Also make sure `config/application.rb` sets:

```
config.assets.initialize_on_precompile = true
```

### Updating

For Rails 3 apps, just run `bundle update github-primer` and commit any changes to `Gemfile.lock`.

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

## Heroku

Primer registers itself as a Railtie if Rails 3 is detected and appends it's
asset paths into the Rails asset pipeline. Unfortunately, heroku's asset
compilation and gem bundling doesn't correctly reference the octoicons font
files. To correct this, add the following to `application.rb`:

```ruby
# Heroku doesn't pick up on octoicon fonts
config.assets.paths << "#{Gem.loaded_specs['github-primer'].full_gem_path}/app/assets/fonts"

# Force append github-primer to sass load path
config.sass.load_paths << "#{Gem.loaded_specs['github-primer'].full_gem_path}/app/assets/stylesheets"
```
