#!/usr/bin/env node
const semanticRelease = require('semantic-release')
const {spawnSync} = require('child_process')
const {WritableStreamBuffer} = require('stream-buffers')

const branch = getBranch()
const options = {branch, dryRun: true}

console.warn(`Running semantic-release with options: ${JSON.stringify(options)}...`)

semanticRelease(options, {
  stdout: new WritableStreamBuffer(),
  stderr: new WritableStreamBuffer()
})
  .then(result => {
    const {
      nextRelease: {version, notes}
    } = result
    console.warn(`Release ${version} notes:\n`)
    console.log(notes)
  })
  .catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })

function getBranch() {
  const {GITHUB_REF} = process.env
  if (GITHUB_REF) {
    return GITHUB_REF.replace(/^refs\/heads\//, '')
  } else {
    return spawnSync('git', ['symbolic-ref', '--short', 'HEAD'], {encoding: 'utf8'}).stdout.trim()
  }
}
