import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Explorations/LinkStyledAsButton',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['LinkStyledAsButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        'LinkStyledAsButton--secondary',
        'LinkStyledAsButton--primary',
        'LinkStyledAsButton--invisible',
        'LinkStyledAsButton--danger'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['secondary', 'primary', 'invisible', 'danger']
      },
      table: {
        category: 'CSS'
      },
      description: 'Controls button color',
      defaultValue: 'LinkStyledAsButton--secondary'
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'LinkStyledAsButton--small', 'LinkStyledAsButton--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['default [32px]', 'small [28px]', 'large [40px]']
      },
      table: {
        category: 'CSS'
      },
      description: 'Controls button height',
      defaultValue: 0
    },
    visualPosition: {
      options: [0, 1], // iterator
      mapping: [null, 'LinkStyledAsButton-content--visualFixed'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'fixed']
      },
      table: {
        category: 'CSS'
      },
      description:
        '[Name TBD!] Controls where the leading or trailing visuals position themselves in a fullWidth button (lock to text label or button bounds)',
      defaultValue: 'Button-visual--fixed'
    },
    label: {
      defaultValue: 'Link',
      type: 'string',
      name: 'label',
      description: 'Visible button label',
      table: {
        category: 'Slot'
      }
    },
    target: {
      defaultValue: '',
      type: 'string',
      name: 'target',
      description: '_blank for new tab',
      table: {
        category: 'Slot'
      }
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: '',
      table: {
        category: 'Slot'
      }
    },
    disabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'State'
      }
    },
    fullWidth: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: 'Allow button to stretch and fill container',
      table: {
        category: 'CSS'
      }
    },
    leadingVisual: {
      name: 'leadingVisual',
      control: {type: 'boolean'},
      description: 'Slot for SVG icon or emoji (boolean only for testing purposes)',
      defaultValue: false,
      table: {
        category: 'Slot'
      }
    },
    trailingVisual: {
      name: 'trailingVisual',
      control: {type: 'boolean'},
      description: 'Slot for SVG icon or emoji (boolean only for testing purposes)',
      table: {
        category: 'Slot'
      },
      defaultValue: false
    },
    showTrailingAction: {
      defaultValue: false,
      control: {type: 'boolean'},
      description:
        'Slot for SVG icon that indicates an action. Primarily used by other Primer components, like a DropdownMenu or overlay trigger (boolean only for testing purposes)',
      table: {
        category: 'Slot'
      }
    },
    pressed: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'State'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on one element',
      table: {
        category: 'State'
      }
    },
    active: {
      control: {type: 'boolean'},
      description: 'set button to active state',
      table: {
        category: 'State'
      }
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var button = document.getElementsByTagName('button')[0]
  // set focus on element
  button.focus()
}

const star = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path
      fill-rule="evenodd"
      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
    ></path>
  </svg>
)

const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path
      fill-rule="evenodd"
      d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
    ></path>
  </svg>
)

export const LinkStyledAsButtonTemplate = ({
  label,
  variant,
  size,
  fullWidth,
  leadingVisual,
  trailingVisual,
  showTrailingAction,
  focusElement,
  active,
  visualPosition,
  className,
  href,
  target
}) => (
  <>
    <a
      href={href}
      target={target ? target : undefined}
      className={clsx(
        'LinkStyledAsButton',
        className && `${className}`,
        variant && `${variant}`,
        size && `${size}`,
        fullWidth && 'LinkStyledAsButton--fullWidth',
        active && 'LinkStyledAsButton--active'
      )}
    >
      {/* {leadingVisual && <span className="" dangerouslySetInnerHTML={{__html: leadingVisual}} />} */}
      <span className={clsx(visualPosition && `${visualPosition}`, 'LinkStyledAsButton-content')}>
        {leadingVisual && <span className="LinkStyledAsButton-visual LinkStyledAsButton-leadingVisual">{star}</span>}
        <span className="LinkStyledAsButton-label">{label}</span>
        {trailingVisual && <span className="LinkStyledAsButton-visual LinkStyledAsButton-trailingVisual">{star}</span>}
      </span>
      {showTrailingAction && (
        <span className="LinkStyledAsButton-visual LinkStyledAsButton-trailingAction">{arrow}</span>
      )}
    </a>
    {focusElement && focusMethod()}
  </>
)

export const Playground = LinkStyledAsButtonTemplate.bind({})
Playground.args = {
  focusElement: false,
  active: false,
  variant: 'LinkStyledAsButton--secondary',
  leadingVisual: false,
  showTrailingAction: false,
  trailingVisual: false
}
