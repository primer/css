import React from 'react'
import {NavigationListTemplate} from './NavigationList.stories'
import {
  PatternTitle,
  PatternFilled,
  PatternWithDescription,
  PatternSeparator
} from '../../ui-patterns/ActionList/ActionListDividerFeatures.stories.jsx'

export default {
  title: 'Components/NavigationList/NavigationListDivider/Features',
  decorators: [
    Story => (
      <NavigationListTemplate>
        <Story />
      </NavigationListTemplate>
    )
  ]
}

export const Title = ({}) => <PatternTitle {...PatternTitle.args} />

export const Filled = ({}) => <PatternFilled {...PatternFilled.args} />

export const WithDescription = ({}) => <PatternWithDescription {...PatternWithDescription.args} />

export const Separator = ({}) => <PatternSeparator {...PatternSeparator.args} />
