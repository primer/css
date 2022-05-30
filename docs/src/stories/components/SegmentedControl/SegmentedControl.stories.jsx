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
    ariaLabel: {
      type: 'string',
      description: 'Aria label',
    },
    disabled: {
      control: {type: 'boolean'},
      description: 'disabled',
    },
    fullWidth: {
      control: {type: 'boolean'},
      description: 'full width',
    },
    iconOnlyWhenNarrow: {
      control: {type: 'boolean'},
      description: 'icon only when narrow',
    },
  }
}

function classNames(disabled, fullWidth, iconOnlyWhenNarrow) {
  const classNames = ['SegmentedControl'];

  if (disabled) {
    classNames.push("SegmentedControl--disabled")
  }
  if (fullWidth) {
    classNames.push("SegmentedControl--fullWidth")
  }
  if (iconOnlyWhenNarrow) {
    classNames.push("SegmentedControl--iconOnly-whenNarrow")
  }

  return classNames.join(' ')
}

export const SegmentedControlTemplate = ({disabled, fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="group" aria-label={ariaLabel} class={classNames(disabled, fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate label="Outline" ariaPressed />
      <SegmentedControlButtonTemplate label="Write" />
      <SegmentedControlButtonTemplate label="Preview" leadingIcon />
      <SegmentedControlButtonTemplate label="Preview" leadingIcon iconOnly />
      <SegmentedControlButtonTemplate label="Publish" />
    </segmented-control>
  </>
)

export const Playground = SegmentedControlTemplate.bind({})
Playground.args = {
  ariaLabel: "Label",
  disabled: false,
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}
