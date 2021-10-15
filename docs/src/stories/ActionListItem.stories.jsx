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
  excludeStories: ['ListItemTemplate'],
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
    subItem: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    containsSubItem: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    leadingVisual: {
      defaultValue: '',
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
    },
    leadingVisualSize: {
      options: [0, 1, 2], // iterator
      mapping: ['ActionList-item-visual--16', 'ActionList-item-visual--20', 'ActionList-item-visual--24'], // values
      control: {
        type: 'select',
        labels: ['16px', '20px', '24px']
      },
      description: 'leading visual width',
      defaultValue: 'ActionList-item-visual--16'
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
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby if nested group within item'
    }
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

export const ListItemTemplate = ({
  text,
  size,
  leadingVisual,
  leadingVisualSize,
  trailingVisual,
  description,
  descriptionVariant,
  variant,
  href,
  ariaCurrent,
  children,
  subItem,
  containsSubItem,
  id
}) => (
  <li
    className={clsx(
      'ActionList-item',
      ariaCurrent && 'ActionList-item--nav-active',
      subItem && `ActionList-item--sub-item`,
      containsSubItem && `ActionList-item--has-sub-item`
    )}
    role={href ? 'none' : 'menuitem'}
    id={id}
  >
    {href ? (
      <>
        <a
          href={href}
          role={href ? 'menuitem' : undefined}
          tabindex="-1"
          aria-current={ariaCurrent}
          className={clsx(
            text && 'ActionList-item-content',
            size && `${size}`,
            leadingVisual && 'ActionList-item-content--leadingVisual',
            trailingVisual && 'ActionList-item-content--trailingVisual',
            (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
            variant && `${variant}`,
            leadingVisual && leadingVisualSize && `${leadingVisualSize}`
          )}
        >
          {leadingVisual && (
            <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />
          )}
          {description && (
            <span className={`${descriptionVariant}`}>
              <span className="ActionList-item-label">{text}</span>
              <span className="ActionList-item-description">{description}</span>
            </span>
          )}
          {!description && text && <span className="ActionList-item-label">{text}</span>}
          {trailingVisual && (
            <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
          )}
        </a>
        {children}
      </>
    ) : (
      <>
        <span
          className={clsx(
            text && 'ActionList-item-content',
            size && `${size}`,
            leadingVisual && 'ActionList-item-content--leadingVisual',
            trailingVisual && 'ActionList-item-content--trailingVisual',
            (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
            variant && `${variant}`
          )}
        >
          {leadingVisual && (
            <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />
          )}
          {description && (
            <span className={`${descriptionVariant}`}>
              <span className="ActionList-item-label">{text}</span>
              <span className="ActionList-item-description">{description}</span>
            </span>
          )}
          {!description && text && <span className="ActionList-item-label">{text}</span>}

          {trailingVisual && (
            <span className="ActionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />
          )}
        </span>
        {children}
      </>
    )}
  </li>
)

export const Playground = ListItemTemplate.bind({})
Playground.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="ActionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
