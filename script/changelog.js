#!/usr/bin/env node
const semanticRelease = require('semantic-release')
const {spawnSync} = require('child_process')
const {WritableStreamBuffer} = require('stream-buffers')

const branch = spawnSync('git', ['symbolic-ref', '--short', 'HEAD'], {encoding: 'utf8'}).stdout.trim()
const options = {branch, dryRun: true}
console.warn(`Running semantic-release with options: ${JSON.stringify(options)}...`)
semanticRelease(options, {
  stdout: new WritableStreamBuffer(),
  stderr: new WritableStreamBuffer()
}).then(result => {
  const {
    nextRelease: {version, notes}
  } = result
  console.warn(`Release ${version} notes:\n`)
  console.log(notes)
})
