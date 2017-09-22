import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import '../modules/primer-css/index.scss'

setOptions({
  name: 'Primer',
  url: 'http://primercss.io/',
  showDownPanel: false,
})

addDecorator(story => (
  <div className='p-4'>
    {story()}
  </div>
))

const contexts = [
  require.context('.', true, /\.js$/),
  require.context('../modules', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)
