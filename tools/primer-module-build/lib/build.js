const cssstats = require('cssstats')
const fse = require('fs-extra')
const postcss = require('postcss')
const {promisify} = require('util')
const sass = require('node-sass')
const sassRender = promisify(sass.render)
const nodeSassImport = require('node-sass-import')

const arrayify = value => Array.isArray(value) ? value : [value]

module.exports = (src, flags) => {

  const cwd = process.cwd()
  const sourceFile = `${cwd}/${src}`
  const outputDir = flags.outputDir || `${cwd}/build`
  const outputFile = flags.output || `${outputDir}/build.css`
  const outputJSFile = flags.outputJS || `${outputDir}/index.js`
  const outputDataFile = flags.outputData || `${outputDir}/data.json`

  const sassOptions = {
    file: sourceFile,
    outputStyle: flags.outputStyle || 'compressed',
    importer: nodeSassImport,
    includePaths: arrayify(flags.include)
  }

  console.warn('sass options:', sassOptions)

  return fse.mkdirp(outputDir)
    .then(() => {
      try {
        return sassRender(sassOptions)
      } catch (error) {
        console.warn('ERROR!')
        throw error
      }
    })
    .then(({css}) => {
      function postcssPlugins() {
        const postcssrc = (() => {
          if (flags.postcssconfig && fse.existsSync(`${cwd}/${flags.postcssconfig}`)) {
            return require(`${cwd}/${flags.postcssconfig}`)
          } else if (fse.existsSync(`${cwd}/.postcss.json`)) {
            return require(`${cwd}/.postcss.json`)
          } else {
            return require('./.postcss.json')
          }
        })()
        return postcssrc.use.map(name => {
          return require(name)(postcssrc[name])
        })
      }
      return postcss(postcssPlugins())
        .process(css, {
          from: sourceFile,
          to: outputFile
        })
    })
    .then(result => {
      const data = {
        cssstats: cssstats(result.css)
      }
      const json = JSON.stringify(data)

      return Promise.all([
        fse.writeFile(outputFile, result.css),
        fse.writeFile(outputJSFile, `module.exports = ${json}`),
        fse.writeFile(outputDataFile, json)
      ])
      .then(() => [outputFile, outputJSFile, outputDataFile])
    })
}
