import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Explorations/IconButton',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['IconButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: ['Button--secondary', 'Button--primary', 'Button--invisible', 'Button--danger'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'primary', 'outline', 'danger']
      },
      table: {
        category: 'CSS'
      },
      description: 'Controls button color',
      defaultValue: 'Button--secondary'
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'Button--small', 'Button--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['default [32px]', 'small [28px]', 'large [40px]']
      },
      table: {
        category: 'CSS'
      },
      description: 'Controls button height and width',
      defaultValue: 0
    },
    ariaLabel: {
      defaultValue: '',
      type: 'string',
      name: 'ariaLabel',
      description: 'Hidden button label (required)',
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
    visual: {
      name: 'visual',
      control: {type: 'boolean'},
      description: 'Slot for SVG icon (boolean only for testing purposes)',
      defaultValue: true,
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

const caret = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
  </svg>
)

export const IconButtonTemplate = ({variant, disabled, size, visual, pressed, focusElement, className, ariaLabel}) => (
  <>
    <button
      disabled={disabled}
      className={clsx(
        'Button',
        'Button--iconOnly',
        className && `${className}`,
        variant && `${variant}`,
        size && `${size}`
      )}
      aria-pressed={pressed ? pressed : undefined}
      aria-label={ariaLabel}
    >
      {visual && <span className="Button-visual">{star}</span>}
    </button>
    {focusElement && focusMethod()}
  </>
)

export const Playground = IconButtonTemplate.bind({})
Playground.args = {
  focusElement: false,
  ariaLabel: 'Button description'
}
