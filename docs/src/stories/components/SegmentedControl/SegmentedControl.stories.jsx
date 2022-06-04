import React from 'react'
import {SegmentedControlButtonTemplate} from './SegmentedControlButton.stories' // import stories for component compositions

export default {
  title: 'Components/SegmentedControl',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['BasicTemplate', 'IconsAndLabelsTemplate', 'IconsOnlyTemplate'],
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

export const BasicTemplate = ({disabled, fullWidth, ariaLabel}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(disabled, fullWidth)}>
      <SegmentedControlButtonTemplate label="Outline" ariaCurrent />
      <SegmentedControlButtonTemplate label="Write" />
      <SegmentedControlButtonTemplate label="Preview" />
      <SegmentedControlButtonTemplate label="Publish" />
    </segmented-control>
  </>
)

export const Basic = BasicTemplate.bind({})
Basic.args = {
  ariaLabel: "Label",
  disabled: false,
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}

export const IconsAndLabelsTemplate = ({disabled, fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(disabled, fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate label="Outline" leadingIcon ariaCurrent />
      <SegmentedControlButtonTemplate label="Write" leadingIcon />
      <SegmentedControlButtonTemplate label="Preview" leadingIcon />
      <SegmentedControlButtonTemplate label="Publish" leadingIcon />
    </segmented-control>
  </>
)

export const IconsAndLabels = IconsAndLabelsTemplate.bind({})
IconsAndLabels.args = {
  ariaLabel: "Label",
  disabled: false,
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}

export const IconsOnlyTemplate = ({disabled, fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(disabled, fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate label="Outline" leadingIcon iconOnly ariaCurrent />
      <SegmentedControlButtonTemplate label="Write" leadingIcon iconOnly />
      <SegmentedControlButtonTemplate label="Preview" leadingIcon iconOnly />
      <SegmentedControlButtonTemplate label="Publish" leadingIcon iconOnly />
    </segmented-control>
  </>
)

export const IconsOnly = IconsOnlyTemplate.bind({})
IconsOnly.args = {
  ariaLabel: "Label",
  disabled: false,
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}
