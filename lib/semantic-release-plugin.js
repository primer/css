const Octokit = require('@octokit/rest')

const commitMetadata = new Map()

const noteGroups = {
  breaking: {title: ':boom: Breaking changes'},
  enhancement: {title: ':rocket: Enhancements'},
  fix: {title: ':bug: Bug fixes'},
  docs: {title: ':memo: Documentation'},
  internal: {title: ':house: Internal'},
  polish: {title: ':nail_care: Polish'}
}

const releaseLabels = {
  'Tag: Breaking Change': {releaseType: 'major', group: 'breaking'},
  'Tag: Enhancement': {releaseType: 'minor', group: 'enhancement'},
  'Tag: Bug Fix': {releaseType: 'patch', group: 'fix'},
  'Tag: Documentation': {releaseType: 'patch', group: 'docs'},
  'Tag: Internal': {releaseType: 'patch', group: 'internal'},
  'Tag: Polish': {releaseType: 'patch', group: 'polish'}
}

const repoContext = {owner: 'primer', repo: 'css'}
const githubOptions = {
  userAgent: '@primer/css changelog'
}
const {GITHUB_TOKEN} = process.env
if (GITHUB_TOKEN) {
  githubOptions.auth = GITHUB_TOKEN
}

const github = new Octokit(githubOptions)

module.exports = {analyzeCommits, generateNotes}

async function analyzeCommits(options, context) {
  const {commits, logger} = context

  const releaseTypes = new Map()

  for (const commit of commits) {
    const match = commit.message.match(/Merge pull request #(\d+)/)
    if (match) {
      const [, pullNumber] = match
      logger.log(`Fetching PR #${pullNumber}...`)
      const {data: pull} = await github.pulls.get(Object.assign({pull_number: pullNumber}, repoContext))

      const labels = pull.labels.map(label => label.name)
      if (labels.length) {
        logger.log(`Got labels: "${labels.join('", "')}"`)
        for (const label of labels) {
          const {releaseType, group} = releaseLabels[label] || {}
          if (releaseType) {
            logger.info(`Label "${label}" matches release type: ${releaseType}`)

            if (!releaseTypes.has(releaseType)) {
              releaseTypes.set(releaseType, [])
            }
            releaseTypes.get(releaseType).push({pull, label})

            commitMetadata.set(commit.hash, {label, pull, group})
          }
        }
      }
    } else {
      logger.log(`No PR number found in commit: "${commit.message}"`)
    }
  }

  let returnReleaseType

  for (const releaseType of ['major', 'minor', 'patch']) {
    if (releaseTypes.has(releaseType)) {
      const pulls = releaseTypes.get(releaseType)
      logger.info(`Found ${pulls.length} pulls for release type: ${releaseType}`)
      for (const {pull, label} of pulls) {
        logger.info(`- PR #${pull.number} labeled "${label}"`)
        if (!returnReleaseType) {
          returnReleaseType = releaseType
        }
      }
    }
  }

  return returnReleaseType
}

async function generateNotes(options, context) {
  const {
    commits,
    logger,
    nextRelease: {version}
  } = context

  logger.info(`Finding metadata for ${commitMetadata.size} commits...`)
  const releaseCommits = commits.map(commit => commitMetadata.get(commit.hash)).filter(Boolean)

  if (releaseCommits.length) {
    logger.info(`Got ${releaseCommits.length} release commits!`)

    const groupItems = new Map()
    const committers = new Set()
    const {owner, repo} = repoContext
    const baseURL = `https://github.com/${owner}/${repo}`
    for (const {label, pull, group} of releaseCommits) {
      if (!groupItems.has(group)) {
        groupItems.set(group, [])
      }
      const {
        number,
        title,
        user: {login}
      } = pull
      groupItems.get(group).push(`- [#${number}](${baseURL}/${number}) ${title}`)
      committers.add(login)
    }

    return [
      `## ${version}`,
      ...Object.entries(noteGroups)
        .filter(([group]) => groupItems.has(group))
        .map(([group, {title}]) => `\n### ${title}\n${groupItems.get(group).join('\n')}`),
      '',
      `### Committers`,
      ...Array.from(committers)
        .sort()
        .map(login => `- [@${login}](https://github.com/${login})`),
      ''
    ].join('\n')
  } else {
    logger.info(`No release commits. :(`)
  }
}
