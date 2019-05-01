#!/usr/bin/env node
/* eslint-disable camelcase */
const {Toolkit} = require('actions-toolkit')

const DEFAULT_CONFIG = require('./default-config')

Toolkit.run(async tools => {
  const {ref, issue} = tools.context

  if (!ref) {
    tools.log.info(`This doesn't appear to be a PR; bailing.`, tools.context)
    return
  }

  let branch = ref.replace('refs/heads/', '')
  tools.log.info(`Branch: "${branch}"; issue context:`, issue)

  const config = {}
  // apply the default config
  Object.assign(config, DEFAULT_CONFIG)

  // apply config from package.json under the "changelog" key
  try {
    Object.assign(config, tools.config('changelog'))
  } catch (error) {
    tools.log.info(`No "changelog" config found; using the default`)
  }

  // apply arguments to the action itself, so you can do this:
  // args = ["--labels.internal=internal"]
  Object.assign(config, tools.arguments)

  const getData = res => res.data
  const {owner, repo} = tools.context.repo

  onCommand(tools, async args => {
    // and lastly, any arguments passed in the slash command...
    Object.assign(config, args)

    const issueContext = issue.number
      ? issue
      : await tools.github.pulls
          .list({owner, repo, head: branch, state: 'open'})
          .then(getData)
          .then(list => list[0])

    if (!issueContext) {
      return tools.log.fatal(`Unable to get issue context for branch "${branch}"`)
    }
    tools.log.info(`Issue context (for comments):`, issueContext)

    if (args.branch) {
      tools.log.info(`Listing pulls for branch "${args.branch}", from /command args:`, args)
      branch = args.branch
    }

    const closed = await tools.github.pulls
      .list({owner, repo, base: branch, state: 'closed'})
      .then(getData)
      .catch(() => [])

    const merged = closed.length ? await filterMergedPulls(closed) : []
    tools.log.debug(`Found %d merged PRs (out of %d in closed state)`, merged.length, closed.length)
    return

    const {categories = [], committers = []} = await getChanges(merged)

    tools.log.debug(`Changes:`, categories)
    tools.log.debug(`Committers:`, committers)

    const message = `
Hi, here's the changelog for this pull request:

${'```json'}
${categories.map(formatChanges).join('\n\n')}

### Committers
${committers.map(formatCommitter).join('\n')}
${'```'}
`

    tools.log.debug(`Message:`, message)

    return tools.github.issues
      .createComment({
        owner,
        repo,
        issue_number: issueContext.number,
        body: message
      })
      .then(res => {
        tools.log.debug(`Comment created:`, res)
      })
      .catch(error => {
        tools.log.fatal(`Unable to create comment:`, error)
      })
  })

  async function getChanges(pulls) {
    if (!pulls.length) {
      tools.log.warn(`No pulls from which to get changes!`)
      return {}
    }

    const groups = {}
    const committers = new Set()

    for (const pull of pulls) {
      let categorized = false

      for (const label of pull.labels) {
        if (label.name in config.labels) {
          const category = config.labels[label.name]
          if (category && categorized) {
            tools.log.error(
              `PR #{pull.number} has multiple changelog category labels: "${pull.labels
                .map(label => label.name)
                .join('", "')}"`
            )
          } else if (category in groups) {
            groups[category].push(pull)
          } else if (category) {
            groups[category] = [pull]
          }
          categorized = category

          // XXX should we count the PR author as a committer?
          committers.add(pull.user.login)

          tools.log.pending(`Fetching commits for #${pull.number}...`)
          const commits = await tools.github.pulls
            .listCommits({
              owner,
              repo,
              pull_number: pull.number
            })
            .then(getData)
          tools.log.info(`Got %d commits for #${pull.number}`, commits.length)
          for (const commit of commits) {
            committers.add(commit.author.login)
            committers.add(commit.committer.login)
          }
        }
      }

      if (categorized) {
        tools.log.success(`Categorized #${pull.number} as "${categorized}"`)
      } else {
        tools.log.warn(`#${pull.number} doesn't have any category labels`)
      }
    }

    const categories = Object.entries(groups)
      .map(([categoryId, pulls]) => {
        const category = config.categories[categoryId] || {title: categoryId}
        return {
          category,
          pulls: pulls
            .map(pull => {
              const {number, title, body, user, labels} = pull
              return {
                number,
                title,
                body,
                author: user.login,
                link: pull.html_url,
                branch: pull.head.ref,
                created: pull.created_at,
                merged: pull.merged_at,
                labels: labels.map(label => label.name)
              }
            })
            .sort((a, b) => ascending(a, b, d => d.merged))
        }
      })
      .sort((a, b) => ascending(a, b, getCategorySortValue))

    return {
      categories,
      committers: Array.from(committers)
    }
  }

  async function filterMergedPulls(pulls) {
    return await pulls.filter(async pull => {
      return await tools.github.pulls
        .checkIfMerged({owner, repo, pull_number: pull.number})
        .then(() => true)
        .catch(() => false)
    })
  }
})

function formatChanges({category, pulls}) {
  return `### ${category.title}
${pulls.map(formatPull).join('\n')}`
}

function formatPull(pull) {
  return `- [#${pull.number}](${pull.link}) ${pull.title} (${formatLogin(pull.author)})`
}

function formatCommitter(login) {
  return `- ${formatLogin(login)}`
}

function formatLogin(login) {
  return `[@${login}](https://github.com/${login})`
}

function onCommand(tools, fn) {
  return fn({pull: 773}) // FIXME: tools.command('changelog', fn)
}

function ascending(a, b, value) {
  return value(a) - value(b)
}

function getCategorySortValue({order, title}) {
  return isNaN(order) ? title : order
}
