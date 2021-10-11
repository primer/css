import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/ActionList/ActionListItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook?node-id=2%3A2'
    }
  },
  excludeStories: ['Template'],
  argTypes: {
    size: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'ActionList-item-content--sizeMedium', 'ActionList-item-content--sizeLarge'], // values
      control: {
        type: 'select',
        labels: ['default', 'medium', 'large']
      },
      description: 'small (default), medium, large',
      defaultValue: ''
    },
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-item-content--danger'], // values
      control: {
        type: 'select',
        labels: ['default', 'danger']
      },
      defaultValue: ''
    },
    activeNavItem: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    leadingVisual: {
      defaultValue: '',
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
    },
    trailingVisual: {
      defaultValue: '',
      name: 'trailingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
    },
    text: {
      defaultValue: 'Item label',
      type: 'string',
      name: 'text',
      description: 'string'
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: 'Item link (href)'
    },
    ariaCurrent: {
      defaultValue: 'location',
      options: ['location', 'page'],
      control: {type: 'select'},
      description: 'location for anchor links, page for global page navigation'
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string'
    },
    descriptionVariant: {
      options: [0, 1], // iterator
      mapping: ['ActionList-item-label--blockDescription', 'ActionList-item-label--inlineDescription'], // values
      control: {
        type: 'select',
        labels: ['block', 'inline']
      },
      description: 'block (default), inline',
      defaultValue: 'ActionList-item-label--blockDescription'
    }
    // role: {
    //   options: [0, 1, 2, 3, 4, 5, 6, 7, 8], // iterator
    //   mapping: ['menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'none', 'presentation', 'listitem', 'radio', 'separator'], // values
    //   control: {
    //     type: 'select',
    //     labels: ['menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'none', 'presentation', 'listitem', 'radio', 'separator'],
    //     defaultValue: 'listitem'
    //   },
  }
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

export const Template = ({
  text,
  size,
  leadingVisual,
  trailingVisual,
  description,
  descriptionVariant,
  variant,
  href,
  ariaCurrent,
  activeNavItem
}) => (
  <li
    className={clsx('ActionList-item', activeNavItem && 'ActionList-item--nav-active')}
    role={href ? 'none' : 'menuitem'}
  >
    {href ? (
      <a
        href={href}
        role={href ? 'menuitem' : undefined}
        aria-current={ariaCurrent}
        className={clsx(
          'ActionList-item-content',
          `${size}`,
          leadingVisual && 'ActionList-item-content--leadingVisual',
          trailingVisual && 'ActionList-item-content--trailingVisual',
          (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
          variant && `${variant}`
        )}
      >
        {leadingVisual && <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
        {description ? (
          <span className={`${descriptionVariant}`}>
            <span className="ActionList-item-label">{text}</span>
            <span className="ActionList-item-description">{description}</span>
          </span>
        ) : (
          <span className="ActionList-item-label">{text}</span>
        )}
        {trailingVisual && (
          <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
        )}
      </a>
    ) : (
      <span
        className={clsx(
          'ActionList-item-content',
          `${size}`,
          leadingVisual && 'ActionList-item-content--leadingVisual',
          trailingVisual && 'ActionList-item-content--trailingVisual',
          (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
          variant && `${variant}`
        )}
      >
        {leadingVisual && <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
        {description ? (
          <span className={`${descriptionVariant}`}>
            <span className="ActionList-item-label">{text}</span>
            <span className="ActionList-item-description">{description}</span>
          </span>
        ) : (
          <span className="ActionList-item-label">{text}</span>
        )}
        {trailingVisual && (
          <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
        )}
      </span>
    )}
  </li>
)

export const Playground = Template.bind({})
Playground.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

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
//   ...Playground.args,
//   text: 'Default textddddd',
//   variant: 'danger'
// }
// TextOnly.argTypes = {
//   variant: {
//     control: false
//   },
//   size: {
//     options: [0, 1, 2], // iterator
//     mapping: ['', 'ActionList-item-content--sizeMedium', 'ActionList-item-content--sizeLarge'], // values
//     control: {
//       type: 'select',
//       labels: ['default', 'medium', 'large']
//     },
//     description: 'small (default), medium, large',
//     defaultValue: ''
//   }
// }

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

// export const SizeMedium = args => (
//   <>
//     <ul className="ActionList" role="menu">
//       <li className="ActionList-item">
//         <span className="ActionList-item-content ActionList-item-content--sizeMedium">
//           <span className="ActionList-item-label">Medium item</span>
//         </span>
//       </li>
//     </ul>
//   </>
// )
// SizeMedium.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const SizeLarge = args => (
//   <>
//     <ul className="ActionList" role="menu">
//       <li className="ActionList-item">
//         <span className="ActionList-item-content ActionList-item-content--sizeLarge">
//           <span className="ActionList-item-label">Large item</span>
//         </span>
//       </li>
//     </ul>
//   </>
// )
// SizeLarge.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const LeadingVisual = args => (
//   <>
//     <li className="ActionList-item">
//       <div className="ActionList-item-content ActionList-item-content--leadingVisual">
//         <span className="ActionList-item-visual">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//             <path
//               fill-rule="evenodd"
//               d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//             ></path>
//           </svg>
//         </span>
//         <span className="ActionList-item-label">Item with leading visual</span>
//       </div>
//     </li>
//   </>
// )
// LeadingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const TrailingVisual = args => (
//   <>
//     <li className="ActionList-item">
//       <div className="ActionList-item-content ActionList-item-content--trailingVisual">
//         <span className="ActionList-item-label">Item with trailing visual</span>
//         <span className="ActionList-item-visual">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//             <path
//               fill-rule="evenodd"
//               d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//             ></path>
//           </svg>
//         </span>
//       </div>
//     </li>
//   </>
// )
// TrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const TrailingText = args => (
//   <>
//     <li className="ActionList-item">
//       <div className="ActionList-item-content ActionList-item-content--trailingVisual">
//         <span className="ActionList-item-label">Item with trailing visual</span>
//         <span className="ActionList-item-visual">⌘N</span>
//       </div>
//     </li>
//   </>
// )
// TrailingText.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const LeadingAndTrailingVisual = args => (
//   <>
//     <li className="ActionList-item">
//       <div className="ActionList-item-content ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
//         <span className="ActionList-item-visual">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//             <path
//               fill-rule="evenodd"
//               d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
//             ></path>
//           </svg>
//         </span>
//         <span className="ActionList-item-label">Item with leading + trailing visual</span>
//         <span className="ActionList-item-visual">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//             <path
//               fill-rule="evenodd"
//               d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//             ></path>
//           </svg>
//         </span>
//       </div>
//     </li>
//   </>
// )
// LeadingAndTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const BlockDescription = args => (
//   <li className="ActionList-item">
//     <div className="ActionList-item-content ActionList-item-content--blockDescription">
//       <span className="ActionList-item-label--blockDescription">
//         <span className="ActionList-item-label">Item with leading visual</span>
//         <span className="ActionList-item-description">Item with leading visual</span>
//       </span>
//     </div>
//   </li>
// )
// BlockDescription.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const BlockDescriptionWithLeadingVisual = args => (
//   <li className="ActionList-item">
//     <div className="ActionList-item-content ActionList-item-content--leadingVisual ActionList-item-content--blockDescription">
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label--blockDescription">
//         <span className="ActionList-item-label">Item with leading visual</span>
//         <span className="ActionList-item-description">Item with leading visual</span>
//       </span>
//     </div>
//   </li>
// )
// BlockDescriptionWithLeadingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const BlockDescriptionWithTrailingVisual = args => (
//   <li className="ActionList-item">
//     <div className="ActionList-item-content ActionList-item-content--trailingVisual ActionList-item-content--blockDescription">
//       <span className="ActionList-item-label--blockDescription">
//         <span className="ActionList-item-label">Item with leading visual</span>
//         <span className="ActionList-item-description">Item with leading visual</span>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </div>
//   </li>
// )
// BlockDescriptionWithTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const BlockDescriptionWithLeadingAndTrailingVisual = args => (
//   <li className="ActionList-item">
//     <div className="ActionList-item-content ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual ActionList-item-content--blockDescription">
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label--blockDescription">
//         <span className="ActionList-item-label">Item with leading visual</span>
//         <span className="ActionList-item-description">Item with leading visual</span>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </div>
//   </li>
// )
// BlockDescriptionWithLeadingAndTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const InlineDescription = args => (
//   <li className="ActionList-item">
//     <span className="ActionList-item-content">
//       <span className="ActionList-item-label--inlineDescription">
//         <span className="ActionList-item-label">Default text only item</span>
//         <span className="ActionList-item-description">Inline description</span>
//       </span>
//     </span>
//   </li>
// )
// InlineDescription.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const InlineDescriptionWithLeadingVisual = args => (
//   <li className="ActionList-item">
//     <span className="ActionList-item-content ActionList-item-content--leadingVisual">
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label--inlineDescription">
//         <span className="ActionList-item-label">Default text only item</span>
//         <span className="ActionList-item-description">Inline description</span>
//       </span>
//     </span>
//   </li>
// )
// InlineDescriptionWithLeadingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const InlineDescriptionWithTrailingVisual = args => (
//   <li className="ActionList-item">
//     <span className="ActionList-item-content ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-label--inlineDescription">
//         <span className="ActionList-item-label">Default text only item</span>
//         <span className="ActionList-item-description">Inline description</span>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </span>
//   </li>
// )
// InlineDescriptionWithTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const InlineDescriptionWithLeadingAndTrailingVisual = args => (
//   <li className="ActionList-item">
//     <span className="ActionList-item-content ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label--inlineDescription">
//         <span className="ActionList-item-label">Default text only item</span>
//         <span className="ActionList-item-description">Inline description</span>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </span>
//   </li>
// )
// InlineDescriptionWithLeadingAndTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const ActiveNavItem = args => (
//   <li className="ActionList-item ActionList-item--nav-active" role="none">
//     <a href="/placeholder" aria-current="page" className="ActionList-item-content" role="menuitem">
//       Active nav item (page level)
//     </a>
//   </li>
// )
// ActiveNavItem.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const ActiveSubNavItem = args => (
//   <li className="ActionList-item ActionList-item--nav-active" role="none">
//     <a href="#" aria-current="location" className="ActionList-item-content" role="menuitem">
//       Active subnav item (anchor link)
//     </a>
//   </li>
// )
// ActiveSubNavItem.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const DangerItem = args => (
//   <>
//     <li className="ActionList-item">
//       <div className="ActionList-item-content ActionList-item-content--danger">
//         <span className="ActionList-item-label">Danger item</span>
//       </div>
//     </li>
//   </>
// )
// DangerItem.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const MultiSelectItem = args => (
//   <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
//     <label className="ActionList-item-content ActionList-item-content--multiSelect">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <input className="form-checkbox" type="checkbox" checked="" />
//       </span>
//       <span className="ActionList-item-label">Checkbox item</span>
//     </label>
//   </li>
// )
// MultiSelectItem.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const MultiSelectItemWithLeadingVisual = args => (
//   <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
//     <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--leadingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <input className="form-checkbox" type="checkbox" checked="" />
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Checkbox item</span>
//     </label>
//   </li>
// )
// MultiSelectItemWithLeadingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const MultiSelectItemWithTrailingVisual = args => (
//   <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
//     <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <input className="form-checkbox" type="checkbox" checked="" />
//       </span>
//       <span className="ActionList-item-label">Checkbox item</span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </label>
//   </li>
// )
// MultiSelectItemWithTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const MultiSelectItemWithLeadingAndTrailingVisual = args => (
//   <li className="ActionList-item" role="menuitemcheckbox" aria-checked="true">
//     <label className="ActionList-item-content ActionList-item-content--multiSelect ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <input className="form-checkbox" type="checkbox" checked="" />
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Checkbox item</span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </label>
//   </li>
// )
// MultiSelectItemWithLeadingAndTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const SingleSelectItem = ({checked}) => (
//   <li className="ActionList-item" role="menuitemradio" aria-checked={checked ? 'true' : 'false'}>
//     <span className="ActionList-item-content ActionList-item-content--singleSelect">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Simple selected item</span>
//     </span>
//   </li>
// )
// SingleSelectItem.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]
// SingleSelectItem.argTypes = {
//   checked: {
//     defaultValue: false,
//     control: {type: 'boolean'}
//   }
// }

// export const SingleSelectItemWithLeadingVisual = args => (
//   <li className="ActionList-item" role="menuitemradio" aria-checked="true">
//     <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--leadingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Simple selected item</span>
//     </span>
//   </li>
// )
// SingleSelectItemWithLeadingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const SingleSelectItemWithTrailingVisual = args => (
//   <li className="ActionList-item" role="menuitemradio" aria-checked="true">
//     <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Simple selected item</span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </span>
//   </li>
// )
// SingleSelectItemWithTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]

// export const SingleSelectItemWithLeadingAndTrailingVisual = args => (
//   <li className="ActionList-item" role="menuitemradio" aria-checked="true">
//     <span className="ActionList-item-content ActionList-item-content--singleSelect ActionList-item-content--leadingVisual ActionList-item-content--trailingVisual">
//       <span className="ActionList-item-visual ActionList-item-check">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//       <span className="ActionList-item-label">Simple selected item</span>
//       <span className="ActionList-item-visual">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
//           <path
//             fill-rule="evenodd"
//             d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
//           ></path>
//         </svg>
//       </span>
//     </span>
//   </li>
// )
// SingleSelectItemWithLeadingAndTrailingVisual.decorators = [
//   Story => (
//     <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
//       <ul className="ActionList" role="menu">
//         <Story />
//       </ul>
//     </div>
//   )
// ]
