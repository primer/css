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
  //   excludeStories: ['ListTemplate'],
  argTypes: {
    showDividers: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    subGroup: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    group: {
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
    type: {
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
    ariaLabelledBy: {
      defaultValue: '',
      name: 'ariaLabelledBy',
      type: 'string',
      description: 'Reference ID of section divider'
    },
    groupId: {
      defaultValue: '',
      name: 'groupId',
      type: 'string',
      description: 'Menu group id'
    }
  },
  decorators: [
    Story => (
      <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
        <Story />
      </div>
    )
  ]
}

export const ListTemplate = ({
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
  subGroup,
  group,
  ariaLabelledBy,
  groupId,
  args
}) => (
  <ul
    className={clsx(
      !group && 'ActionList',
      showDividers && 'ActionList--divided',
      subGroup && 'ActionList-item--sub-group'
    )}
    role={role}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
  >
    <>{children}</>
  </ul>
)

// export const SubGroupNavigational = ListTemplate.bind({})

// export const SubGroupNavigational = ListTemplate.bind({})
// SubGroupNavigational.args = {
//   role: 'menu',
//   children: (
//     <>
//       <TextOnly
//         href="/"
//         text="Policies"
//         leadingVisualSize="ActionList-item-content--visual--16"

//       />

//       <TextOnly
//         href="/"
//         text="Billing & licenses"
//         leadingVisualSize="ActionList-item-content--visual--16"
//         leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M10.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm14.5 0V5h-13V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25zm0 2.75h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.5z"></path></svg>`}
//       >
//         <ul role="group" aria-label="Some description" className="ActionList-item--sub-group">
//           <TextOnly href="/" text="Overview" ariaCurrent="page" activeNavItem subItem />
//           <TextOnly text="Usage reports" subItem />
//           <TextOnly
//             href="/"
//             text="Billing & licenses"
//             leadingVisualSize="ActionList-item-content--visual--16"
//             leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M10.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm14.5 0V5h-13V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25zm0 2.75h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.5z"></path></svg>`}
//           >
//             <ul role="group" aria-label="Some description" className="ActionList-item--sub-group">
//               <TextOnly href="/" text="Overview" ariaCurrent="page" activeNavItem subItem />
//               <TextOnly text="Usage reports" subItem />
//             </ul>
//           </TextOnly>
//         </ul>
//       </TextOnly>
//     </>
//   )
// }
// SubGroupNavigational.decorators = [
//   Story => (
//     <nav>
//       <Story />
//     </nav>
//   )
// ]

// export const SubGroup = ListTemplate.bind({})
// SubGroup.args = {
//   role: 'menu',
//   children: (
//     <>
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <Divider title="Section title" id="some-id" />
//       <ul role="group" aria-labelledby="some-id">
//         <TextOnly {...TextOnly.args} />
//         <TextOnly {...TextOnly.args} />
//         <DangerItem {...DangerItem.args} />
//       </ul>
//     </>
//   )
// }

// export const DividedSection = ListTemplate.bind({})
// DividedSection.args = {
//   role: 'menu',
//   children: (
//     <>
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <Divider />
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <DangerItem {...DangerItem.args} />
//     </>
//   )
// }

// export const DividedItems = ListTemplate.bind({})
// DividedItems.args = {
//   role: 'menu',
//   children: (
//     <>
//       <TextOnly {...TextOnly.args} />
//       <Divider title="Section title" />
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <TextOnly {...TextOnly.args} />
//       <DangerItem {...DangerItem.args} />
//     </>
//   ),
//   showDividers: true
// }

// export const SingleSelect = ListTemplate.bind({})
// SingleSelect.args = {
//   role: 'menu',
//   children: (
//     <>
//       <SingleSelectItem {...SingleSelectItem.args} checked />
//       <SingleSelectItem {...SingleSelectItem.args} />
//       <SingleSelectItem {...SingleSelectItem.args} />
//     </>
//   )
// }

// export const Navigational = ListTemplate.bind({})
// Navigational.args = {
//   role: 'menu',
//   children: (
//     <>
//       <TextOnly href="#" text="I'm an anchor link" />
//       <TextOnly href="#" text="I'm an anchor link" ariaCurrent="location" />
//       <TextOnly href="#" text="I'm an anchor link" />
//       <TextOnly href="#" text="I'm an anchor link" />
//       <Divider title="Section title" id="some-id" />
//       <ul role="group" aria-labelledby="some-id">
//         <TextOnly href="#" {...TextOnly.args} />
//         <TextOnly href="#" {...TextOnly.args} />
//       </ul>
//     </>
//   )
// }
// Navigational.decorators = [
//   Story => (
//     <nav>
//       <Story />
//     </nav>
//   )
// ]
