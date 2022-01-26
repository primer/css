import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'

export default {
  title: 'Components/NavigationList/NavigationListItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oMiRuexZW6gqVbMhQd6lwP/Storybook-Docs?node-id=23%3A30843'
    }
  },
  excludeStories: ['ListItemTemplate'],
  argTypes: {
    size: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'ActionList-content--sizeMedium', 'ActionList-content--sizeLarge'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'medium', 'large']
      },
      description: 'small (default), medium, large',
      defaultValue: '',
      table: {
        category: 'CSS'
      }
    },
    variant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-item--danger'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'danger']
      },
      defaultValue: '',
      table: {
        category: 'CSS'
      }
    },
    subItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    containsSubItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    truncateItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    containsActiveSubItem: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    leadingVisual: {
      defaultValue: '',
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    leadingVisualSize: {
      options: [0, 1, 2], // iterator
      mapping: ['ActionList-content--visual16', 'ActionList-content--visual20', 'ActionList-content--visual24'], // values
      control: {
        type: 'inline-radio',
        labels: ['16px', '20px', '24px']
      },
      description: 'leading visual width',
      defaultValue: 'ActionList-content--visual16',
      table: {
        category: 'CSS'
      }
    },
    trailingVisual: {
      defaultValue: '',
      name: 'trailingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    text: {
      defaultValue: 'Item label',
      type: 'string',
      name: 'text',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: 'Item link (href)',
      table: {
        category: 'HTML'
      }
    },
    ariaCurrent: {
      options: ['location', 'page'],
      control: {type: 'inline-radio'},
      description: 'location for anchor links, page for global page navigation',
      table: {
        category: 'HTML'
      }
    },
    description: {
      defaultValue: '',
      type: 'string',
      name: 'description',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    descriptionVariant: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-item-descriptionWrap--inline'], // values
      control: {
        type: 'inline-radio',
        labels: ['block', 'inline']
      },
      description: 'block (default), inline',
      defaultValue: 'ActionList-item-blockDescription',
      table: {
        category: 'CSS'
      }
    },
    id: {
      defaultValue: '',
      type: 'string',
      name: 'id',
      description: 'Used for aria-labelledby if nested group within item',
      table: {
        category: 'HTML'
      }
    },
    collapsible: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    collapsibleLeading: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    ariaDisabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    fontSize: {
      options: [0, 1], // iterator
      mapping: ['', 'ActionList-content--fontSmall'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'small']
      },
      description: 'Used to adjust font-size for subgroup items',
      table: {
        category: 'CSS'
      }
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
  collapsible,
  trailingAction,
  leadingAction,
  ariaDisabled,
  containsActiveSubItem,
  collapsibleLeading,
  truncateItem,
  fontSize
}) => {
  const [isCollapsed, itemIsCollapsed] = useToggle()

  return (
    <li
      className={clsx(
        'ActionList-item',
        ariaCurrent && 'ActionList-item--navActive',
        subItem && `ActionList-item--subItem`,
        containsSubItem && `ActionList-item--hasSubItem`,
        containsActiveSubItem && `ActionList-item--hasActiveSubItem`,
        variant && `${variant}`
      )}
      id={id}
      aria-disabled={ariaDisabled ? 'true' : undefined}
    >
      {href ? (
        <>
          <a
            href={href}
            aria-current={ariaCurrent}
            className={clsx(
              text && 'ActionList-content',
              size && `${size}`,
              fontSize && `${fontSize}`,
              (leadingVisual || trailingVisual) && description && 'ActionList-content--blockDescription',
              leadingVisual && leadingVisualSize && `${leadingVisualSize}`
            )}
          >
            {(leadingAction || collapsibleLeading) && (
              <span className="ActionList-item-action ActionList-item-action--leading">
                {collapsibleLeading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    className="ActionList-item-collapseIcon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                )}
                {leadingAction}
              </span>
            )}
            {leadingVisual && (
              <span
                className="ActionList-item-visual ActionList-item-visual--leading"
                dangerouslySetInnerHTML={{__html: leadingVisual}}
              />
            )}
            {description && (
              <span className={clsx('ActionList-item-descriptionWrap', `${descriptionVariant}`)}>
                <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
                  {text}
                </span>
                <span className="ActionList-item-description">{description}</span>
              </span>
            )}
            {!description && text && (
              <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
                {text}
              </span>
            )}
            {trailingVisual && (
              <span
                className="ActionList-item-visual ActionList-item-visual--trailing"
                dangerouslySetInnerHTML={{__html: trailingVisual}}
              />
            )}
            {trailingAction ||
              (collapsible && (
                <span className="ActionList-item-action ActionList-item-action--trailing">
                  {collapsible && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-collapseIcon"
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
          <button
            onClick={collapsible || collapsibleLeading ? itemIsCollapsed : undefined}
            aria-haspopup={collapsible || collapsibleLeading ? 'true' : undefined}
            aria-expanded={collapsible || collapsibleLeading ? (isCollapsed ? 'false' : 'true') : undefined}
            className={clsx(
              'ActionList-content',
              size && `${size}`,
              fontSize && `${fontSize}`,
              (leadingVisual || trailingVisual) && description && 'ActionList-content--blockDescription',
              leadingVisual && leadingVisualSize && `${leadingVisualSize}`
            )}
          >
            {(leadingAction || collapsibleLeading) && (
              <span className="ActionList-item-action ActionList-item-action--leading">
                {collapsibleLeading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    className="ActionList-item-collapseIcon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                )}
                {leadingAction}
              </span>
            )}
            {leadingVisual && (
              <span
                className="ActionList-item-visual ActionList-item-visual--leading"
                dangerouslySetInnerHTML={{__html: leadingVisual}}
              />
            )}
            {description && (
              <span className={clsx('ActionList-item-descriptionWrap', `${descriptionVariant}`)}>
                <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
                  {text}
                </span>
                <span className="ActionList-item-description">{description}</span>
              </span>
            )}
            {!description && text && (
              <span className={clsx('ActionList-item-label', truncateItem && 'ActionList-item-label--truncate')}>
                {text}
              </span>
            )}

            {trailingVisual && (
              <span
                className="ActionList-item-visual ActionList-item-visual--trailing"
                dangerouslySetInnerHTML={{__html: trailingVisual}}
              />
            )}
            {trailingAction ||
              (collapsible && (
                <span className="ActionList-item-action ActionList-item-action--trailing">
                  {collapsible && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      className="ActionList-item-collapseIcon"
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
            {children}
          </button>
        </>
      )}
    </li>
  )
}

export const Playground = ListItemTemplate.bind({})
Playground.decorators = [
  Story => (
    <ul className="ActionList">
      <Story />
    </ul>
  )
]
Playground.args = {
  id: null,
  truncateItem: false
}
