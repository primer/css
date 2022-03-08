import React from 'react'
import {ListTemplate} from '../../ui-patterns/ActionList/ActionList.stories.jsx'

import {
  PatternTitle,
  PatternFilled,
  PatternWithDescription,
  PatternSeparator
} from '../../ui-patterns/ActionList/ActionListDividerFeatures.stories.jsx'

export default {
  title: 'Components/ActionList/ActionListDivider/Features',
  decorators: [
    Story => (
      <ListTemplate>
        <Story />
      </ListTemplate>
    )
  ]
}

export const Title = ({}) => <PatternTitle {...PatternTitle.args} />

export const Filled = ({}) => <PatternFilled {...PatternFilled.args} />

export const WithDescription = ({}) => <PatternWithDescription {...PatternWithDescription.args} />

export const Separator = ({}) => <PatternSeparator {...PatternSeparator.args} />
