# Maintaining

Steps for updating and releasing changes to Primer and it's site.

## Versioning

Primer follows the semantic versioning approach:

- Bug fixes and docs updates are patch releases, so `1.0.x`.
- New additions are minor updates, so `1.x.x`.
- Deleting or rewriting anything are major updates, so `x.x.x`.

## Changelogs and milestones

Changelogs are handled with dedicated tracking issues ([see example](https://github.com/primer/primer/issues/108)). When starting work on a new release:

1. Open a new milestone.
2. Open a new tracking issue and immediately lock it. (No comments are needed, ship lists are just for us.)
3. As you close issues and merge pull requests, add a link to those threads to the tracking issue.

When the release and milestone are about ready to ship, move on the the releasing flow.

## Releasing

Have a new version to release? Hell yeah, let's do it.

1. Bump the version numbers in `_config.yml` for our docs and `package.json` for dependency management.
2. Run `$ grunt` to generate the latest compiled CSS and Parker stats.
3. Recompile Jekyll for the latest docs changes.
4. Punt any remaining open issues and PRs on the milestone to the next milestone, then close that milestone.
5. Head to <https://github.com/primer/primer/releases/> and create a new release. Title it `vX.X.X` and post the changelog to the body.
6. Run `$ grunt publish` to push the latest docs and CSS changes to <http://primercss.io>.
7. Rejoice!
