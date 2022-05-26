import React from 'react'
import {SegmentedControlButtonTemplate} from './SegmentedControlButton.stories' // import stories for component compositions

export default {
  title: 'Components/SegmentedControl',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['SegmentedControlTemplate'],
  controls: { expanded: true },
  argTypes: {
    disabled: {
      control: {type: 'boolean'},
      description: 'disabled',
    },
    fullWidth: {
      control: {type: 'boolean'},
      description: 'full width',
    },
    ariaLabel: {
      type: 'string',
      description: 'Aria label',
    },
  }
}

function classNames(disabled, fullWidth) {
  const classNames = ['SegmentedControl'];

  if (disabled) {
    classNames.push("SegmentedControl--disabled")
  }
  if (fullWidth) {
    classNames.push("SegmentedControl--fullWidth")
  }

  return classNames.join(' ')
}

export const SegmentedControlTemplate = ({disabled, fullWidth, ariaLabel}) => (
  <>
    <segmented-control role="group" aria-label={ariaLabel} class={classNames(disabled, fullWidth)}>
      <SegmentedControlButtonTemplate text="Outline" ariaPressed />
      <SegmentedControlButtonTemplate text="Write" />
      <SegmentedControlButtonTemplate text="Preview" leadingIcon />
      <SegmentedControlButtonTemplate text="Publish" />
    </segmented-control>
  </>
)

export const Playground = SegmentedControlTemplate.bind({})
Playground.args = {
  disabled: false,
  fullWidth: false,
  ariaLabel: "Label"
}
