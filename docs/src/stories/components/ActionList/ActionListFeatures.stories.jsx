import React from 'react'
import {
  PatternShowDividers,
  PatternInsetPadding,
  PatternFullBleed
} from '../../ui-patterns/ActionList/ActionListFeatures.stories.jsx'

export default {
  title: 'Components/ActionList/ActionList/Features'
}

export const ShowDividers = ({}) => <PatternShowDividers {...PatternShowDividers.args} />

export const InsetPadding = ({}) => <PatternInsetPadding {...PatternInsetPadding.args} />

export const FullBleed = ({}) => <PatternFullBleed {...PatternFullBleed.args} />
