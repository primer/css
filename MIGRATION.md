# Migration guide

When updating to a new major version of Primer CSS, some variables or classes might not be available anymore. Please refer to this migration guide to see what needs to be changed.

## v16 → v17

- Replace `.bg-shade-gradient` with `.color-bg-secondary`
- Replace `.bottom/left/top/right-n0` with `.bottom/left/top/right-0`
- Replace `.color-border-overlay` with `.color-border-primary`
- Replace `.h00-mktg`, `.h000-mktg` + .lead-mktg with updated [marketing headers](https://github.com/primer/css/blob/9ef606d4a5e4f27eee86273af54ea4ff145e7f22/src/marketing/type/typography.scss#L2-L8)
- Replace `.p-[7-12]` without the shorthand. Example `p-11` -> `pt-11 pr-11 pb-11 pl-11`
- Add `Inter` to the `$marketing-font-path`
- Remove `primer/octicons` from github/github package.json and make sure there's no `primer/octicons/index.scss` imports

See https://github.com/primer/css/pull/1351#issuecomment-833017035 for a complete list of class additions and deletions.

## v15 → v16

See this separate [v16 migration guide](https://github.com/primer/css/blob/ee4b464619b65fda79cd4bd0463bdf9f0e6a4023/docs/content/support/v16-migration.mdx).
