---
title: Local development
internal: true
path: tools/local-primer
---

When you are working with the `github/github` codebase, you can link Primer CSS modules with your local development environment using the Primerize script. This will allow you to make changes to Primer CSS and see them reflected on `github.localhost` without the overhead of pulling in alpha releases of a package.

## Prerequisites

1. Working with `github/github` on the latest codebase.
2. Cloned down latest version of [primer/primer](https://github.com/primer/primer).
3. The `github/github` folder and the `primer/primer` folder must share the same parent folder.

**Example:**
```
~/codefolder/
├── github
└── primer
```

## Linking to your local Primer CSS repository

In your terminal start the server with the environment variable `LOCAL_PRIMER=1`. For example.

```
> LOCAL_PRIMER=1 script/server
```

When the variable is present, the script will check for linked local Primer CSS packages. If it's not linked, then it will proceed to link the Primer CSS packages in `../primer` to your GitHub application. When the server starts with successfully linked packages, you will see a clear message.

**Example output:**

```
❯ LOCAL_PRIMER=1 script/server
--------------------------------------------------------------------------------
 Development Primer is linked to the local Primer repository found here
 /Users/usera/github/primer
--------------------------------------------------------------------------------
14:09:14 web.1        | started with pid 36981
14:09:14 assets.1     | started with pid 36982
14:09:14 longpoll.1   | started with pid 36984
14:09:14 git-daemon.1 | started with pid 36986
14:09:14 gitauth.1    | started with pid 36988
14:09:14 codeload.1   | started with pid 36991
14:09:14 babeld.1     | started with pid 36996
```

## Resetting github/github development assets

To turn off Primerize, rerun `script/server` without the `LOCAL_PRIMER` flag. The script checks if you are still linked and restores everything to normal.

**Example output:**

```
❯ script/server
--------------------------------------------------------------------------------
 Development Primer is linked to the local Primer repository found here
 /Users/usera/github/primer
--------------------------------------------------------------------------------
Turning off linked primer
extracting primer-alerts@1.5.5.tgz
extracting primer-avatars@1.5.2.tgz
extracting primer-base@1.7.0.tgz
extracting primer-blankslate@1.4.5.tgz
extracting primer-box@2.5.5.tgz
extracting primer-branch-name@1.0.3.tgz
extracting primer-breadcrumb@1.5.1.tgz
extracting primer-buttons@2.5.3.tgz
extracting primer-core@6.8.0.tgz
extracting primer-forms@2.1.0.tgz
extracting primer-labels@1.5.5.tgz
extracting primer-layout@1.4.5.tgz
extracting primer-markdown@3.7.5.tgz
extracting primer-marketing-buttons@1.0.4.tgz
extracting primer-marketing-support@1.5.0.tgz
extracting primer-marketing-type@1.4.5.tgz
extracting primer-marketing-utilities@1.6.1.tgz
extracting primer-marketing@6.2.0.tgz
extracting primer-navigation@1.5.3.tgz
extracting primer-page-headers@1.4.5.tgz
extracting primer-page-sections@1.4.5.tgz
extracting primer-popover@0.0.6.tgz
extracting primer-product@5.6.2.tgz
extracting primer-subhead@1.0.3.tgz
extracting primer-support@4.5.2.tgz
extracting primer-table-object@1.4.5.tgz
extracting primer-tables@1.4.5.tgz
extracting primer-tooltips@1.5.3.tgz
extracting primer-truncate@1.4.5.tgz
extracting primer-utilities@4.8.5.tgz
extracting primer@10.4.0.tgz
regenerating node binstubs
14:13:17 web.1        | started with pid 38585
14:13:17 assets.1     | started with pid 38586
```
