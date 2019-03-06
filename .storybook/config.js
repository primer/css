import React from 'react'
import {configure, addParameters, addDecorator} from '@storybook/react'
import {name, homepage, version} from '../package.json'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

import '../src/index.scss'

addParameters({
  options: {
    brandTitle: `${name}@${version}`,
    brandUrl: homepage,
    showAddonsPanel: false
  },
  viewport: {
    viewports: {
      sm: {
        name: 'Primer: sm ($width-sm)',
        styles: {width: '544px', height: '100%'}
      },
      md: {
        name: 'Primer: md ($width-md)',
        styles: {width: '768px', height: '100%'}
      },
      lg: {
        name: 'Primer: lg ($width-lg)',
        styles: {width: '1012px', height: '100%'}
      },
      xl: {
        name: 'Primer: xl ($width-xl)',
        styles: {width: '1280px', height: '100%'}
      },
      ...INITIAL_VIEWPORTS
    }
  }
})

// addDecorator(story => <div className="p-4">{story()}</div>)

configure(() => {
  const loadMarkdown = require.context('../src', true, /\.md$/)
  for (const path of loadMarkdown.keys()) {
    loadMarkdown(path)
  }
}, module)
