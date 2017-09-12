import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../.storybook/lib/storiesFromMarkdown'

const stories = storiesOf('Breadcrumb', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach((story, i) => {
    stories.add(`story #${i + 1}`, () => story)
  })
