import React from 'react'
import {configure, addParameters, addDecorator} from '@storybook/react'
import {name, homepage, version} from '../package.json'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

// this enables HMR for the SCSS source files
import '../src/index.scss'

// wrap every view in 4x padding
addDecorator(story => <div className="p-4">{story()}</div>)

addParameters({
  options: {
    brandTitle: `${name}@${version}`,
    brandUrl: homepage,
    showAddonsPanel: false
  },
  viewport: {
    viewports: {
      sm: {
        name: 'Small ($width-sm)',
        styles: {width: '544px', height: 'auto'}
      },
      md: {
        name: 'Medium ($width-md)',
        styles: {width: '768px', height: 'auto'}
      },
      lg: {
        name: 'Large ($width-lg)',
        styles: {width: '1012px', height: 'auto'}
      },
      xl: {
        name: 'XL ($width-xl)',
        styles: {width: '1280px', height: 'auto'}
      },
      ...INITIAL_VIEWPORTS
    }
  }
})

configure(() => {
  const loadMarkdown = require.context('../pages/css', true, /\.md$/)
  for (const path of loadMarkdown.keys()) {
    loadMarkdown(path)
  }
}, module)
