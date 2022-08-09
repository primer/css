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

function classNames(fullWidth, iconOnlyWhenNarrow) {
  const classNames = ['SegmentedControl'];

  if (fullWidth) {
    classNames.push("SegmentedControl--fullWidth")
  }
  if (iconOnlyWhenNarrow) {
    classNames.push("SegmentedControl--iconOnly-whenNarrow")
  }

  return classNames.join(' ')
}

export const BasicTemplate = ({fullWidth, ariaLabel}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(fullWidth)}>
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
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}

export const IconsAndTextTemplate = ({fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <>
    <segmented-control role="toolbar" aria-label={ariaLabel} class={classNames(fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate text="Outline" leadingVisual />
      <SegmentedControlButtonTemplate text="Write" leadingVisual selected />
      <SegmentedControlButtonTemplate text="Preview" leadingVisual />
      <SegmentedControlButtonTemplate text="Publish" leadingVisual />
    </segmented-control>
  </>
)

export const IconsAndText = IconsAndTextTemplate.bind({})
IconsAndText.args = {
  ariaLabel: "Label",
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}

export const IconsOnlyTemplate = ({fullWidth, ariaLabel, iconOnlyWhenNarrow}) => (
  <segmented-control>
    <ul aria-label={ariaLabel} class={classNames(fullWidth, iconOnlyWhenNarrow)}>
      <SegmentedControlButtonTemplate text="Outline" leadingVisual iconOnly />
      <SegmentedControlButtonTemplate text="Write" leadingVisual iconOnly />
      <SegmentedControlButtonTemplate text="Preview" leadingVisual iconOnly />
      <SegmentedControlButtonTemplate text="Publish" leadingVisual iconOnly selected />
    </ul>
  </segmented-control>
)

export const IconsOnly = IconsOnlyTemplate.bind({})
IconsOnly.args = {
  ariaLabel: "Label",
  fullWidth: false,
  iconOnlyWhenNarrow: false,
}
