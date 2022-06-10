import React from 'react'
import {SegmentedControlButtonTemplate} from './SegmentedControlButton.stories' // import stories for component compositions

export default {
  title: 'Components/SegmentedControl',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['BasicTemplate', 'IconsAndTextTemplate', 'IconsOnlyTemplate'],
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
      <SegmentedControlButtonTemplate text="Outline" selected />
      <SegmentedControlButtonTemplate text="Write" />
      <SegmentedControlButtonTemplate text="Preview" />
      <SegmentedControlButtonTemplate text="Publish" />
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

export const IconsAndTextTemplate = ({disabled, fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(disabled, fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate text="Outline" leadingVisual selected />
      <SegmentedControlButtonTemplate text="Write" leadingVisual />
      <SegmentedControlButtonTemplate text="Preview" leadingVisual />
      <SegmentedControlButtonTemplate text="Publish" leadingVisual />
    </segmented-control>
  </>
)

export const IconsAndText = IconsAndTextTemplate.bind({})
IconsAndText.args = {
  ariaLabel: "Label",
  disabled: false,
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}

export const IconsOnlyTemplate = ({disabled, fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(disabled, fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate text="Outline" leadingVisual iconOnly selected />
      <SegmentedControlButtonTemplate text="Write" leadingVisual iconOnly />
      <SegmentedControlButtonTemplate text="Preview" leadingVisual iconOnly />
      <SegmentedControlButtonTemplate text="Publish" leadingVisual iconOnly />
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
