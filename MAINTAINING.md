# Maintaining

Steps for updating and releasing changes to Primer and it's site.

## Versioning

Primer follows the semantic versioning approach:

- Bug fixes and docs updates are patch releases, so `1.0.x`.
- New additions are minor updates, so `1.x.x`.
- Deleting or rewriting anything are major updates, so `x.x.x`.

## Releasing

Have a new version to release? Hell yeah, let's do it.

1. Bump the version numbers in `_config.yml` for our docs and `package.json` for dependency management.
2. Run `$ grunt` to generate the latest compiled CSS and Parker stats.
3. Recompile Jekyll for the latest docs changes.
4. Head to <https://github.com/primer/primer/releases/> and create a new release. Title it `vX.X.X` and post the changelog to the body.
5. Run `$ grunt publish` to push the latest docs and CSS changes to <http://primercss.io>.
6. Rejoice!
