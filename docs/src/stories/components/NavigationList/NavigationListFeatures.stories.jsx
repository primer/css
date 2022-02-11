import React from 'react'
import {
  PatternShowDividers,
  PatternInsetPadding,
  PatternFullBleed,
  PatternNestedGroup
} from '../../ui-patterns/ActionList/ActionListFeatures.stories.jsx'

export default {
  title: 'Components/NavigationList/NavigationList/Features'
}

export const ShowDividers = ({}) => <PatternShowDividers {...PatternShowDividers.args} />

export const InsetPadding = ({}) => <PatternInsetPadding {...PatternInsetPadding.args} />

export const FullBleed = ({}) => <PatternFullBleed {...PatternFullBleed.args} />

export const NestedGroup = ({}) => <PatternNestedGroup {...PatternNestedGroup.args} />
