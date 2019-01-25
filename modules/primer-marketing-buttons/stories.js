import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../.storybook/lib/storiesFromMarkdown'

const stories = storiesOf('Marketing buttons', module)

for (const {title, story} of storiesFromMarkdown(require.context('.', true, /\.md$/))) {
  stories.add(title, story)
}
