import { configure } from '@storybook/react'
import '../modules/primer-css/index.scss'

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
