import React from 'react'
import clsx from 'clsx'
import {Template} from './ActionListItem.stories'

export default {
  title: 'Components/ActionList/ActionListItem/Features',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  }
  //   argTypes: {
  //     size: {
  //       options: [0, 1, 2], // iterator
  //       mapping: ['', 'ActionList-item-content--sizeMedium', 'ActionList-item-content--sizeLarge'], // values
  //       control: {
  //         type: 'select',
  //         labels: ['default', 'medium', 'large']
  //       },
  //       description: 'small (default), medium, large',
  //       defaultValue: ''
  //     },
  //     variant: {
  //       options: [0, 1], // iterator
  //       mapping: ['', 'ActionList-item-content--danger'], // values
  //       control: {
  //         type: 'select',
  //         labels: ['default', 'danger']
  //       },
  //       defaultValue: ''
  //     },
  //     activeNavItem: {
  //       defaultValue: false,
  //       control: {type: 'boolean'}
  //     },
  //     leadingVisual: {
  //       defaultValue: '',
  //       name: 'leadingVisual',
  //       type: 'string',
  //       description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
  //     },
  //     trailingVisual: {
  //       defaultValue: '',
  //       name: 'trailingVisual',
  //       type: 'string',
  //       description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
  //     },
  //     text: {
  //       defaultValue: 'Item label',
  //       type: 'string',
  //       name: 'text',
  //       description: 'string'
  //     },
  //     href: {
  //       defaultValue: '',
  //       type: 'string',
  //       name: 'href',
  //       description: 'Item link (href)'
  //     },
  //     ariaCurrent: {
  //       defaultValue: 'location',
  //       options: ['location', 'page'],
  //       control: {type: 'select'},
  //       description: 'location for anchor links, page for global page navigation'
  //     },
  //     description: {
  //       defaultValue: '',
  //       type: 'string',
  //       name: 'description',
  //       description: 'string'
  //     },
  //     descriptionVariant: {
  //       options: [0, 1], // iterator
  //       mapping: ['ActionList-item-label--blockDescription', 'ActionList-item-label--inlineDescription'], // values
  //       control: {
  //         type: 'select',
  //         labels: ['block', 'inline']
  //       },
  //       description: 'block (default), inline',
  //       defaultValue: 'ActionList-item-label--blockDescription'
  //     }
  // role: {
  //   options: [0, 1, 2, 3, 4, 5, 6, 7, 8], // iterator
  //   mapping: ['menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'none', 'presentation', 'listitem', 'radio', 'separator'], // values
  //   control: {
  //     type: 'select',
  //     labels: ['menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'none', 'presentation', 'listitem', 'radio', 'separator'],
  //     defaultValue: 'listitem'
  //   },
  //   }
  //   decorators: [
  //     Story => (
  //       <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
  //         <ul className="ActionList" role="menu">
  //           <Story />
  //         </ul>
  //       </div>
  //     )
  //   ]
}

// const Template = ({
//   text,
//   size,
//   leadingVisual,
//   trailingVisual,
//   description,
//   descriptionVariant,
//   variant,
//   href,
//   ariaCurrent,
//   activeNavItem
// }) => (
//   <li
//     className={clsx('ActionList-item', activeNavItem && 'ActionList-item--nav-active')}
//     role={href ? 'none' : 'menuitem'}
//   >
//     {href ? (
//       <a
//         href={href}
//         role={href ? 'menuitem' : undefined}
//         aria-current={ariaCurrent}
//         className={clsx(
//           'ActionList-item-content',
//           `${size}`,
//           leadingVisual && 'ActionList-item-content--leadingVisual',
//           trailingVisual && 'ActionList-item-content--trailingVisual',
//           (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
//           variant && `${variant}`
//         )}
//       >
//         {leadingVisual && <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
//         {description ? (
//           <span className={`${descriptionVariant}`}>
//             <span className="ActionList-item-label">{text}</span>
//             <span className="ActionList-item-description">{description}</span>
//           </span>
//         ) : (
//           <span className="ActionList-item-label">{text}</span>
//         )}
//         {trailingVisual && (
//           <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
//         )}
//       </a>
//     ) : (
//       <span
//         className={clsx(
//           'ActionList-item-content',
//           `${size}`,
//           leadingVisual && 'ActionList-item-content--leadingVisual',
//           trailingVisual && 'ActionList-item-content--trailingVisual',
//           (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
//           variant && `${variant}`
//         )}
//       >
//         {leadingVisual && <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
//         {description ? (
//           <span className={`${descriptionVariant}`}>
//             <span className="ActionList-item-label">{text}</span>
//             <span className="ActionList-item-description">{description}</span>
//           </span>
//         ) : (
//           <span className="ActionList-item-label">{text}</span>
//         )}
//         {trailingVisual && (
//           <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
//         )}
//       </span>
//     )}
//   </li>
// )

// export const Playground = Template.bind({})
// Playground.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const TextOnly = ({text}) => (
//   <li className="ActionList-item">
//     <span className="ActionList-item-content">
//       <span className="ActionList-item-label">{text}</span>
//     </span>
//   </li>
// )
// TextOnly.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]
// TextOnly.args = {
//   text: 'Default text'
// }

// export const Sink = Template.bind({})
// Sink.args = {
//   ...Playground.args,
//   ...TextOnly.args
// }
// Sink.decorators = [
//   Story => (
//     <ul className="ActionList" role="menu">
//       <Story />
//     </ul>
//   )
// ]

// export const TextOnly = Template.bind({})
// // TextOnly.storyName = 'Feature/TextOnly'
// TextOnly.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]
// ;(TextOnly.args = {
//   ...Playground.args,
//   text: 'Default textddddd'
// }),
//   (TextOnly.argTypes = {
//     variant: {
//       control: false
//     }
//   })

export const TextOnly = Template.bind({})
TextOnly.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
TextOnly.args = {
  text: 'Basic item label'
}
TextOnly.argTypes = {
  variant: {
    control: false
  }
}

export const SizeMedium = Template.bind({})
SizeMedium.args = {
  ...Template.args,
  text: 'Medium item',
  size: 'ActionList-item-content--sizeMedium'
}
SizeMedium.argTypes = {
  size: {
    control: false
  }
}
SizeMedium.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SizeLarge = Template.bind({})
SizeLarge.args = {
  ...Template.args,
  text: 'Large item',
  size: 'ActionList-item-content--sizeLarge'
}
SizeLarge.argTypes = {
  size: {
    control: false
  }
}
SizeLarge.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingVisual = Template.bind({})
LeadingVisual.args = {
  ...Template.args,
  text: 'Item with leading visual',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}
LeadingVisual.argTypes = {
  size: {
    control: false
  }
}
LeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const TrailingVisual = Template.bind({})
TrailingVisual.args = {
  ...Template.args,
  text: 'Item with trailing visual',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
      ></path>
    </svg>`
}
TrailingVisual.argTypes = {
  size: {
    control: false
  }
}
TrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const TrailingText = Template.bind({})
TrailingText.args = {
  ...Template.args,
  text: 'Item with trailing text',
  trailingVisual: `⌘N`
}
TrailingText.argTypes = {
  size: {
    control: false
  }
}
TrailingText.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingAndTrailingVisual = Template.bind({})
LeadingAndTrailingVisual.args = {
  ...Template.args,
  text: 'Item with trailing visual',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>`,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
LeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
LeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescription = Template.bind({})
BlockDescription.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--blockDescription'
}
BlockDescription.argTypes = {
  size: {
    control: false
  }
}
BlockDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithLeadingVisual = Template.bind({})
BlockDescriptionWithLeadingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--blockDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
BlockDescriptionWithLeadingVisual.argTypes = {
  size: {
    control: false
  }
}
BlockDescriptionWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithTrailingVisual = Template.bind({})
BlockDescriptionWithTrailingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--blockDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
BlockDescriptionWithTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
BlockDescriptionWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithLeadingAndTrailingVisual = Template.bind({})
BlockDescriptionWithLeadingAndTrailingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--blockDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`,
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>`
}
BlockDescriptionWithLeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
BlockDescriptionWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescription = Template.bind({})
InlineDescription.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--inlineDescription'
}
InlineDescription.argTypes = {
  size: {
    control: false
  }
}
InlineDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithLeadingVisual = Template.bind({})
InlineDescriptionWithLeadingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--inlineDescription',
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
InlineDescriptionWithLeadingVisual.argTypes = {
  size: {
    control: false
  }
}
InlineDescriptionWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithTrailingVisual = Template.bind({})
InlineDescriptionWithTrailingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--inlineDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`
}
InlineDescriptionWithTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
InlineDescriptionWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithLeadingAndTrailingVisual = Template.bind({})
InlineDescriptionWithLeadingAndTrailingVisual.args = {
  ...Template.args,
  text: 'Item label',
  description: 'This is a description',
  descriptionVariant: 'ActionList-item-label--inlineDescription',
  trailingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>`,
  leadingVisual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>`
}
InlineDescriptionWithLeadingAndTrailingVisual.argTypes = {
  size: {
    control: false
  }
}
InlineDescriptionWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const ActiveNavItem = Template.bind({})
ActiveNavItem.args = {
  ...Template.args,
  text: 'Im an anchor link',
  href: '#someid',
  ariaCurrent: 'page',
  activeNavItem: true
}
ActiveNavItem.argTypes = {
  size: {
    control: false
  }
}
ActiveNavItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const ActiveSubNavItem = Template.bind({})
ActiveSubNavItem.args = {
  ...Template.args,
  text: 'Im a page level link',
  href: '#someid',
  ariaCurrent: 'location',
  activeNavItem: true
}
ActiveSubNavItem.argTypes = {
  size: {
    control: false
  }
}
ActiveSubNavItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const DangerItem = Template.bind({})
DangerItem.args = {
  ...Template.args,
  text: 'Danger danger',
  variant: 'ActionList-item-content--danger'
}
DangerItem.argTypes = {
  size: {
    control: false
  }
}
DangerItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItem = ({checked}) => (
  <li className="ActionList-item" role="menuitemradio" aria-checked={checked ? 'true' : 'false'}>
    <span className="ActionList-item-content ActionList-item-content--singleSelect">
      <span className="ActionList-item-visual ActionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Simple selected item</span>
    </span>
  </li>
)
SingleSelectItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
SingleSelectItem.argTypes = {
  checked: {
    defaultValue: false,
    control: {type: 'boolean'}
  }
}

export const SingleSelectItemWithLeadingVisual = args => (
  <li className="ActionList-item" role="menuitemradio" aria-checked="true">
    <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--leadingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Simple selected item</span>
    </span>
  </li>
)
SingleSelectItemWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItemWithTrailingVisual = args => (
  <li className="ActionList-item" role="menuitemradio" aria-checked="true">
    <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--trailingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Simple selected item</span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
SingleSelectItemWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItemWithLeadingAndTrailingVisual = args => (
  <li className="ActionList-item" role="menuitemradio" aria-checked="true">
    <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Simple selected item</span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
SingleSelectItemWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItem = args => (
  <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="ActionList-item-content ActionList-item-content--multiSelect">
      <span className="ActionList-item-visual ActionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="ActionList-item-label">Checkbox item</span>
    </label>
  </li>
)
MultiSelectItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithLeadingVisual = args => (
  <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--leadingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Checkbox item</span>
    </label>
  </li>
)
MultiSelectItemWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithTrailingVisual = args => (
  <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--trailingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="ActionList-item-label">Checkbox item</span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </label>
  </li>
)
MultiSelectItemWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithLeadingAndTrailingVisual = args => (
  <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
      <span className="ActionList-item-visual ActionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="ActionList-item-label">Checkbox item</span>
      <span className="ActionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </label>
  </li>
)
MultiSelectItemWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
