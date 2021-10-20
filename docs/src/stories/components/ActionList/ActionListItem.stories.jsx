import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'

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
    type: {
      options: [0, 1], // iterator
      mapping: ['ActionList-item--default', 'ActionList-item--has-sub-item'], // values
      control: {
        type: 'select',
        labels: ['direct-child', 'contains-children']
      },
      description: 'conditional for CSS specific to li position in ul',
      defaultValue: 'ActionList-item--default'
    },
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
      mapping: ['', 'ActionList-item--danger'], // values
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
      mapping: [
        'ActionList-item-content--visual--16',
        'ActionList-item-content--visual--20',
        'ActionList-item-content--visual--24'
      ], // values
      control: {
        type: 'select',
        labels: ['16px', '20px', '24px']
      },
      description: 'leading visual width',
      defaultValue: 'ActionList-item-content--visual--16'
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
      mapping: ['ActionList-item-content--label-blockDescription', 'ActionList-item-content--label-inlineDescription'], // values
      control: {
        type: 'select',
        labels: ['block', 'inline']
      },
      description: 'block (default), inline',
      defaultValue: 'ActionList-item-content--label-blockDescription'
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby if nested group within item'
    },
    collapsible: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    singleSelect: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    multiSelect: {
      defaultValue: false,
      control: {type: 'boolean'}
    }
  }
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
  id,
  type,
  collapsible,
  trailingAction,
  leadingAction,
  singleSelect,
  multiSelect
}) => {
  const [isCollapsed, itemIsCollapsed] = useToggle()
  const [isChecked, itemIsChecked] = useToggle()
  return (
    <li
      className={clsx(
        'ActionList-item',
        type && `${type}`,
        ariaCurrent && 'ActionList-item--nav-active',
        subItem && `ActionList-item--sub-item`,
        containsSubItem && `ActionList-item--has-sub-item`,
        variant && `${variant}`
      )}
      onClick={collapsible ? itemIsCollapsed : itemIsChecked}
      role={singleSelect ? 'menuitemradio' : multiSelect ? 'menuitemcheckbox' : href ? 'none' : 'menuitem'}
      id={id}
      aria-haspopup={collapsible ? 'true' : undefined}
      aria-expanded={collapsible ? (isCollapsed ? 'false' : 'true') : undefined}
      aria-checked={singleSelect || multiSelect ? (isChecked ? 'true' : 'false') : undefined}
    >
      {href ? (
        <>
          <a
            href={href}
            role={href ? 'menuitem' : undefined}
            aria-current={ariaCurrent}
            className={clsx(
              text && 'ActionList-item-content',
              size && `${size}`,
              (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription',
              leadingVisual && leadingVisualSize && `${leadingVisualSize}`
            )}
          >
            {(leadingAction || singleSelect || multiSelect) && (
              <span className="ActionList-item-content--action ActionList-item-content--action-leading">
                {singleSelect && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    className="ActionList-item-content--singleSelect"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                )}
                {multiSelect && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="ActionList-item-content--multiSelect"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="12"
                      height="12"
                      rx="4"
                      className="ActionList-item-content--multiSelect-rectangle"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
                      className="ActionList-item-content--multiSelect-checkmark"
                    />
                  </svg>
                )}
                {leadingAction}
              </span>
            )}
            {leadingVisual && (
              <span
                className="ActionList-item-content--visual ActionList-item-content--visual-leading"
                dangerouslySetInnerHTML={{__html: leadingVisual}}
              />
            )}
            {description && (
              <span className={`${descriptionVariant}`}>
                <span className="ActionList-item-content--label">{text}</span>
                <span className="ActionList-item-content--description">{description}</span>
              </span>
            )}
            {!description && text && <span className="ActionList-item-content--label">{text}</span>}
            {trailingVisual && (
              <span
                className="ActionList-item-content--visual ActionList-item-content--visual-trailing"
                dangerouslySetInnerHTML={{__html: trailingVisual}}
              />
            )}
            {trailingAction ||
              (collapsible && (
                <span className="ActionList-item-content--action ActionList-item-content--action-trailing">
                  {collapsible && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-content--collapseIcon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>
                  )}
                  {trailingAction}
                </span>
              ))}
          </a>
          {children}
        </>
      ) : (
        <>
          <span
            className={clsx(
              text && 'ActionList-item-content',
              size && `${size}`,
              (leadingVisual || trailingVisual) && description && 'ActionList-item-content--blockDescription'
            )}
          >
            {(leadingAction || singleSelect || multiSelect) && (
              <span className="ActionList-item-content--action ActionList-item-content--action-leading">
                {singleSelect && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    className="ActionList-item-content--singleSelect"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                )}
                {multiSelect && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    className="ActionList-item-content--multiSelect"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="12"
                      height="12"
                      rx="4"
                      className="ActionList-item-content--multiSelect-rectangle"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
                      className="ActionList-item-content--multiSelect-checkmark"
                    />
                  </svg>
                )}
                {leadingAction}
              </span>
            )}
            {leadingVisual && (
              <span
                className="ActionList-item-content--visual ActionList-item-content--visual-leading"
                dangerouslySetInnerHTML={{__html: leadingVisual}}
              />
            )}
            {description && (
              <span className={`${descriptionVariant}`}>
                <span className="ActionList-item-content--label">{text}</span>
                <span className="ActionList-item-content--description">{description}</span>
              </span>
            )}
            {!description && text && <span className="ActionList-item-content--label">{text}</span>}

            {trailingVisual && (
              <span
                className="ActionList-item-content--visual ActionList-item-content--visual-trailing"
                dangerouslySetInnerHTML={{__html: trailingVisual}}
              />
            )}
            {trailingAction ||
              (collapsible && (
                <span className="ActionList-item-content--action ActionList-item-content--action-trailing">
                  {collapsible && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-content--collapseIcon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>
                  )}
                  {trailingAction}
                </span>
              ))}
          </span>
          {children}
        </>
      )}
    </li>
  )
}

export const Playground = ListItemTemplate.bind({})
Playground.decorators = [
  Story => (
    <ul className="ActionList" role="menu">
      <Story />
    </ul>
  )
]
