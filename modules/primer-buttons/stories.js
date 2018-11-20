import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../.storybook/lib/storiesFromMarkdown'

const stories = storiesOf('Button', module)

for (const {title, story} of storiesFromMarkdown(require.context('.', true, /\.md$/))) {
  stories.add(title, story)
}
