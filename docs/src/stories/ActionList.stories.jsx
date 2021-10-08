import React from 'react'
import clsx from 'clsx'
import {
  TextOnly,
  SizeMedium,
  SizeLarge,
  SectionDivider,
  ActiveNavItem,
  ActiveSubNavItem,
  SectionDividerFilled,
  SectionDividerSimple,
  LeadingVisual,
  TrailingVisual,
  TrailingText,
  LeadingAndTrailingVisual,
  BlockDescription,
  BlockDescriptionWithLeadingVisual,
  BlockDescriptionWithTrailingVisual,
  BlockDescriptionWithLeadingAndTrailingVisual,
  InlineDescription,
  InlineDescriptionWithLeadingVisual,
  InlineDescriptionWithTrailingVisual,
  InlineDescriptionWithLeadingAndTrailingVisual,
  DangerItem,
  MultiSelectItem,
  MultiSelectItemWithLeadingVisual,
  MultiSelectItemWithTrailingVisual,
  MultiSelectItemWithLeadingAndTrailingVisual,
  SingleSelectItem,
  SingleSelectItemWithLeadingVisual,
  SingleSelectItemWithTrailingVisual,
  SingleSelectItemWithLeadingAndTrailingVisual,
  Playground
} from './ActionListItem.stories'
import {Divider} from './ActionListDivider.stories'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActionList',
  //   component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    showDividers: {
      defaultValue: false,
      control: {type: 'boolean'}
    }
  },
  subcomponents: {TextOnly},
  decorators: [
    Story => (
      <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
        <Story />
      </div>
    )
  ]
}

const Template = ({
  itemLabel,
  size,
  leadingVisual,
  trailingVisual,
  blockDescription,
  description,
  descriptionPosition,
  danger,
  showDividers,
  children,
  args
}) => (
  <ul className={clsx('actionList', showDividers && 'actionList--divided')}>
    <>{children}</>
  </ul>
)

export const DividedSection = Template.bind({})
DividedSection.args = {
  children: (
    <>
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <Divider />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <DangerItem {...DangerItem.args} />
    </>
  )
}

export const DividedItems = Template.bind({})
DividedItems.args = {
  children: (
    <>
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <Divider title="Section title" />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <DangerItem {...DangerItem.args} />
    </>
  ),
  showDividers: true
}

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  children: (
    <>
      <SingleSelectItem {...SingleSelectItem.args} checked />
      <SingleSelectItem {...SingleSelectItem.args} />
      <SingleSelectItem {...SingleSelectItem.args} />
    </>
  )
}

export const Navigational = Template.bind({})
Navigational.args = {
  children: (
    <>
      <Playground href="#" text="I'm an anchor link" ariaCurrent="location" />
      <Playground href="#" text="I'm an anchor link" ariaCurrent="location" activeNavItem />
      <Playground href="#" text="I'm an anchor link" ariaCurrent="location" />
      <Playground href="#" text="I'm an anchor link" ariaCurrent="location" />
    </>
  )
}
Navigational.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]
