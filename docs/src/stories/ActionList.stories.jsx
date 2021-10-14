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
  SingleSelectItemWithLeadingAndTrailingVisual
} from './ActionListItemFeatures.stories'
import {Divider} from './ActionListDivider.stories'

export default {
  title: 'Components/ActionList',
  argTypes: {
    showDividers: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    role: {
      options: [0, 1, 2, 3, 4, 5, 6], // iterator
      mapping: ['menu', 'group', 'listbox', 'menubar', 'none', 'radiogroup', 'list'], // values
      control: {
        type: 'select',
        labels: ['menu', 'group', 'listbox', 'menubar', 'none', 'radiogroup', 'list'],
        defaultValue: 'list'
      },
      description: 'small (default), medium, large'
    },
    ariaLabel: {
      defaultValue: '',
      name: 'ariaLabel',
      type: 'string',
      description: 'Descriptive label for menu contents'
    },
    groupId: {
      defaultValue: '',
      name: 'groupId',
      type: 'string',
      description: 'Menu group id'
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
  role,
  ariaLabel,
  groupId,
  args
}) => (
  <ul className={clsx('ActionList', showDividers && 'ActionList--divided')} role={role} aria-label={ariaLabel}>
    <>{children}</>
  </ul>
)

export const SubGroupNavigational = Template.bind({})
SubGroupNavigational.args = {
  role: 'menu',
  children: (
    <>
      <TextOnly
        href="/"
        text="Policies"
        leadingVisualSize="ActionList-item-visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>`}
      />

      <TextOnly
        href="/"
        text="Billing & licenses"
        leadingVisualSize="ActionList-item-visual--16"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M10.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm14.5 0V5h-13V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25zm0 2.75h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.5z"></path></svg>`}
      >
        <ul role="group" aria-label="Some description" className="ActionList-item--sub-group">
          <TextOnly href="/" text="Overview" ariaCurrent="page" activeNavItem subItem />
          <TextOnly text="Usage reports" subItem />
          <TextOnly
            href="/"
            text="Billing & licenses"
            leadingVisualSize="ActionList-item-visual--16"
            leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M10.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm14.5 0V5h-13V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25zm0 2.75h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.5z"></path></svg>`}
          >
            <ul role="group" aria-label="Some description" className="ActionList-item--sub-group">
              <TextOnly href="/" text="Overview" ariaCurrent="page" activeNavItem subItem />
              <TextOnly text="Usage reports" subItem />
            </ul>
          </TextOnly>
        </ul>
      </TextOnly>
    </>
  )
}
SubGroupNavigational.decorators = [
  Story => (
    <nav>
      <Story />
    </nav>
  )
]

export const SubGroup = Template.bind({})
SubGroup.args = {
  role: 'menu',
  children: (
    <>
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <Divider title="Section title" id="some-id" />
      <ul role="group" aria-labelledby="some-id">
        <TextOnly {...TextOnly.args} />
        <TextOnly {...TextOnly.args} />
        <DangerItem {...DangerItem.args} />
      </ul>
    </>
  )
}

export const DividedSection = Template.bind({})
DividedSection.args = {
  role: 'menu',
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
  role: 'menu',
  children: (
    <>
      <TextOnly {...TextOnly.args} />
      <Divider title="Section title" />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <TextOnly {...TextOnly.args} />
      <DangerItem {...DangerItem.args} />
    </>
  ),
  showDividers: true
}

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  role: 'menu',
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
  role: 'menu',
  children: (
    <>
      <TextOnly href="#" text="I'm an anchor link" />
      <TextOnly href="#" text="I'm an anchor link" ariaCurrent="location" />
      <TextOnly href="#" text="I'm an anchor link" />
      <TextOnly href="#" text="I'm an anchor link" />
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
