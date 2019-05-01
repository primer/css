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

    const branch = ref.replace('refs/heads/', '')
    const pullContext = tools.context.issue.number
      ? tools.context.issue
      : args.pull
        ? await tools.github.pulls.get({owner, repo, pull_number: args.pull}).then(getData)
        : await tools.github.pulls.list({owner, repo, head: branch, state: 'open'}).then(res => res.data[0])

    if (pullContext) {
      tools.log.info(`Pull context: #${pullContext.number}`)
    } else {
      tools.log.fatal(`No pull context found for this command; bailing! issue context:`, tools.context.issue)
      return
    }

    const pulls = await tools.github.pulls
      .list({owner, repo, head: branch, state: 'closed'})
      .then(getData)
      .then(closed => closed.filter(pull => pull.merged))
      .catch(() => [])
    tools.log.debug(`Found %d merged PRs`, pulls.length)

    const changes = await getChanges(pulls)

    const message = `
Hi, here's the changelog for this pull request:

${'```json'}
${JSON.stringify(changes, null, 2)}
${'```'}
`

    tools.log.debug(`Changes:`, changes)
    tools.log.debug(`Message:`, message)
    return

    /*
    const added = await tools.github.issues
      .createComment({
        owner,
        repo,
        issue_number: pullContext.number,
        body: message
      })
      .then(getData)

    tools.log.debug('added?', added)
    */
  })

  async function getChanges(pulls) {
    if (!pulls.length) {
      return [
        {
          category: {title: 'No PRs in which to find changes'},
          pulls: []
        }
      ]
    }

    const groups = {}
    const committers = {}

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
            committers[commit.author.email] = true
            committers[commit.committer.email] = true
          }
        }
      }

      if (categorized) {
        tools.log.success(`Categorized #${pull.number} as "${categorized}"`)
      } else {
        tools.log.warn(`#${pull.number} doesn't have any category labels`)
      }
    }

    return Object.entries(groups)
      .map(([categoryId, pulls]) => {
        const category = config.categories[categoryId] || {title: categoryId}
        return {
          category,
          pulls: pulls.map(pull => {
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
        }
      })
      .sort((a, b) => compare(a, b, d => (isNaN(d.category.order) ? d.category.title : d.category.order)))
  }
})

function onCommand(tools, fn) {
  return fn({pull: 773}) // FIXME: tools.command('changelog', fn)
}

function compare(a, b, value) {
  return value(b) - value(a)
}
