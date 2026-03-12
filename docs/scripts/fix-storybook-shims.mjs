#!/usr/bin/env node
/**
 * This script patches the @storybook/manager-api and @storybook/theming
 * compatibility shim packages to work correctly with Storybook 10.
 *
 * In Storybook 10, the internal package paths changed:
 * - storybook/internal/manager-api -> storybook/manager-api (public)
 * - storybook/internal/theming -> storybook/theming (public)
 *
 * The @storybook/manager-api@8.x and @storybook/theming@8.x shims
 * still reference the old internal paths, causing build failures.
 */

import {writeFileSync, existsSync} from 'fs'
import {resolve, dirname} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const nodeModules = resolve(__dirname, '../node_modules')

const patches = [
  {pkg: '@storybook/manager-api', shimMjs: "export * from 'storybook/manager-api';\n"},
  {pkg: '@storybook/theming', shimMjs: "export * from 'storybook/theming';\n"},
]

for (const {pkg, shimMjs} of patches) {
  const shimPath = resolve(nodeModules, pkg, 'shim.mjs')
  if (existsSync(shimPath)) {
    writeFileSync(shimPath, shimMjs, 'utf-8')
    console.log(`Patched ${pkg}/shim.mjs`)
  }
}
