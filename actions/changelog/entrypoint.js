#!/usr/bin/env node
const {Toolkit} = require('actions-toolkit')

const DEFAULT_CONFIG = require('./default-config')

Toolkit.run(async tools => {
  const base = (tools.context.ref || '').replace('refs/heads/', '')
  const {owner, repo} = tools.context.repo

  tools.command('changelog', async args => {
    const options = {}
    // apply the default options
    Object.assign(options, DEFAULT_OPTIONS)

    // apply options from package.json under the "changelog" key
    try {
      Object.assign(config, tools.config('changelog'))
    } catch (error) {
      tools.log.info(`No "changelog" config found; using the default`)
    }

    // apply arguments to the action itself, so you can do this:
    // args = ["--labels.internal=internal"]
    Object.assign(options, tools.arguments)

    const closed = await tools.github.pulls.list({owner, repo, base, state: 'closed'})
    const pulls = []
    for (const pull of pulls) {
      const merged = await tools.github.pulls.checkIfMerged({
        owner,
        repo,
        pull_number: pull.number
      })
      if (merged) {
        pulls.push(pull)
      }
    }

    const groups = {}
    const committers = {}

    for (const pull of pulls) {
      for (const label of pull.labels) {
        let categorized = false

        if (label in options.labels) {
          const category = options.labels[label.name]
          if (category && categorized) {
            tools.log.error(`PR #{pull.number} has multiple categorized labels: "${pull.labels.map(label => label.name).join('", "')}"`)
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
      const category = options.categories[categoryId] || {title: categoryId}
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

    tools.log.info(`added? ${JSON.stringify(added, null, 2)}`)

}, {
  event: ['push']
})
