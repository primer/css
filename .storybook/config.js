import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import '../modules/primer-css/index.scss'

setOptions({
  name: 'Primer',
  url: 'http://primercss.io/',
  showDownPanel: false,
})

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
