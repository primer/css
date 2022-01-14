import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Explorations/Button',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['ButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3], // iterator
      mapping: [null, 'Button-primary', 'Button-outline', 'Button-danger'], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'outline', 'danger']
      },
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'Button-small', 'Button-large'], // values
      control: {
        type: 'select',
        labels: ['default', 'small', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    label: {
      defaultValue: 'Button',
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    disabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    fullWidth: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    leadingVisual: {
      name: 'leadingVisual',
      control: {type: 'boolean'},
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    trailingVisual: {
      name: 'trailingVisual',
      control: {type: 'boolean'},
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field',
      table: {
        category: 'HTML'
      }
    },
    trailingAction: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    pressed: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on one element',
      table: {
        category: 'Interactive'
      }
    },
    focusAllElements: {
      control: {type: 'boolean'},
      description: 'set focus on all elements for viewing in all themes',
      table: {
        category: 'Interactive'
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

const mona = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path
      fill-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
)

const caret = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
  </svg>
)

export const ButtonTemplate = ({
  label,
  variant,
  disabled,
  size,
  fullWidth,
  leadingVisual,
  trailingVisual,
  trailingAction,
  pressed,
  focusElement,
  focusAllElements
}) => (
  <>
    <button
      disabled={disabled}
      className={clsx(
        'Button',
        variant && `${variant}`,
        size && `${size}`,
        fullWidth && 'btn-block',
        focusAllElements && 'focus'
      )}
      aria-pressed={pressed}
    >
      {/* {leadingVisual && <span className="" dangerouslySetInnerHTML={{__html: leadingVisual}} />} */}
      {leadingVisual && <span className="Button--visual Button--leadingVisual">{mona}</span>}
      <span className="Button--label">{label}</span>
      {trailingVisual && <span className="Button--visual Button--trailingVisual">{mona}</span>}
      {trailingAction && <span className="Button--visual Button--trailingAction">{caret}</span>}
    </button>
    {focusElement && focusMethod()}
  </>
)

export const Playground = ButtonTemplate.bind({})
Playground.args = {
  focusElement: false,
  focusAllElements: false,
  leadingVisual: false,
  trailingAction: false,
  trailingVisual: false
}
