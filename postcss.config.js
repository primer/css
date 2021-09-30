import autoprefixer from 'autoprefixer'
import sass from '@koddsson/postcss-sass'
import scss from 'postcss-scss'
import scssImport from 'postcss-import'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const plugins = [
  scssImport,
  sass({
    includePaths: [join(__dirname, 'node_modules')],
    outputStyle: process.env.CSS_MINIFY === '0' ? 'expanded' : 'compressed'
  }),
  autoprefixer,
];

export default {
  map: {
    sourcesContent: false,
    annotation: true
  },
  syntax: scss,
  parser: scss,
  plugins: plugins
}
