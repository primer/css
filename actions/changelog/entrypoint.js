#!/usr/bin/env node
/* eslint-disable camelcase */
const {Toolkit} = require('actions-toolkit')

const DEFAULT_CONFIG = require('./default-config')

Toolkit.run(async tools => {
  const {ref} = tools.context
  if (!ref) {
    tools.log.info(`This doesn't appear to be a PR; bailing.`, tools.context)
    return
  }

  onCommand(tools, async args => {
    const base = ref.replace('refs/heads/', '')
    const {owner, repo} = tools.context.repo

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

    // and lastly, any arguments passed in the slash command...
    Object.assign(config, args)

    const closed = await tools.github.pulls.list({owner, repo, base, state: 'closed'})
    tools.log.debug(`Got closed:`, closed)
    const pulls = []
    for (const pull of closed) {
      const merged = await tools.github.pulls.checkIfMerged({
        owner,
        repo,
        pull_number: pull.number
      })
      if (merged) {
        pulls.push(pull)
      }
    }
    tools.log.debug(`Got %d merged PRs`, pulls.length)

    const groups = {}
    const committers = {}

    for (const pull of pulls) {
      for (const label of pull.labels) {
        let categorized = false

        if (label in config.labels) {
          const category = config.labels[label.name]
          if (category && categorized) {
            tools.log.error(
              `PR #{pull.number} has multiple categorized labels: "${pull.labels
                .map(label => label.name)
                .join('", "')}"`
            )
          } else if (category in groups) {
            groups[category].push(pull)
          } else if (category) {
            groups[category] = [pull]
          }
          categorized = true
          const commits = await tools.github.pulls.listCommits({
            owner,
            repo,
            pull_number: pull.number
          })
          for (const commit of commits) {
            committers[commit.author.email] = true
            committers[commit.committer.email] = true
          }
        }
      }
    }

    const changes = Object.entries(groups).map(([categoryId, pulls]) => {
      const category = config.categories[categoryId] || {title: categoryId}
      return {
        category,
        pulls
      }
    })

    const message = `
Hi, here's the changelog for this pull request:

${'```json'}
${JSON.stringify(changes, null, 2)}
${'```'}
`

    const added = await tools.github.pulls.createComment({
      owner,
      repo,
      pull_number: tools.context.issue.number,
      body: message
    })

    tools.log.debug('added?', added)
  }),
  {
    event: ['push']
  }
})

function onCommand(tools, fn) {
  return fn({}) // FIXME: tools.command('changelog', fn)
}
