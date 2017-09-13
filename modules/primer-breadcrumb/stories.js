import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../.storybook/lib/storiesFromMarkdown'

const stories = storiesOf('Breadcrumb', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach(({story, title}) => {
    stories.add(title, () => story)
  })
