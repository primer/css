import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Rails Forms/TextInput',
  parameters: {
    layout: 'padded'
  },
  decorators: [
    Story => (
      <form>
        <Story />
      </form>
    )
  ],
  excludeStories: ['InputTemplate'],
  argTypes: {
    size: {
      options: [0, 1, 2], // iterator
      mapping: ['FormControl-small', 'FormControl-medium', 'FormControl-large'], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'medium', 'large']
      },
      table: {
        category: 'Input'
      }
    },
    validationStatus: {
      options: [0, 1, 2, 3], // iterator
      mapping: ['', 'FormControl-error', 'FormControl-success', 'FormControl-warning'], // values
      control: {
        type: 'inline-radio',
        labels: ['undefined', 'error', 'success', 'warning']
      },
      table: {
        category: 'Validation'
      }
    },
    fullWidth: {
      description: 'formerly called Block',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    showClearButton: {
      description: 'show clear button',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    trailingActionDivider: {
      description: 'divider between input and trailing action',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    inset: {
      description: 'formerly called Contrast',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    required: {
      description: 'required field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    invalid: {
      description: 'invalid field',
      control: {type: 'boolean'},
      table: {
        category: 'Validation'
      }
    },
    visuallyHidden: {
      description: 'visually hide label',
      control: {type: 'boolean'},
      table: {
        category: 'Label'
      }
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'string',
      table: {
        category: 'Input'
      }
    },
    label: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'Label'
      }
    },
    caption: {
      name: 'caption',
      type: 'string',
      description: 'caption',
      table: {
        category: 'Caption'
      }
    },
    validation: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'Validation'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on element',
      table: {
        category: 'Interactive'
      }
    },
    leadingVisual: {
      name: 'leadingVisual',
      type: 'boolean',
      description: 'octicon',
      table: {
        category: 'Input'
      }
    },
    readOnly: {
      description: 'readonly styles',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var input = document.getElementsByTagName('input')[0]
  // set focus on element
  input.focus()
}

export const InputTemplate = ({
  label,
  size,
  fullWidth,
  placeholder,
  inset,
  disabled,
  visuallyHidden,
  monospace,
  focusElement,
  showClearButton,
  leadingVisual,
  invalid,
  caption,
  validation,
  trailingActionDivider,
  validationStatus,
  readOnly
}) => (
  <>
    <div className={clsx('FormControl', fullWidth && 'FormControl--fullWidth')}>
      <label htmlFor="input-id" className={clsx('FormControl-label', visuallyHidden && 'sr-only')}>
        {label}
      </label>
      {showClearButton || leadingVisual ? (
        <div
          className={clsx(
            'FormControl-input-wrap',
            showClearButton && 'FormControl-input-wrap--trailingAction',
            trailingActionDivider && 'FormControl-input-wrap-trailingAction--divider',
            size && `${size}`,
            leadingVisual && 'FormControl-input-wrap--leadingVisual'
          )}
        >
          {leadingVisual && (
            <span class="FormControl-input-leadingVisualWrap">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-search FormControl-input-leadingVisual"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                ></path>
              </svg>
            </span>
          )}
          <input
            placeholder={placeholder}
            id="input-id"
            type="text"
            readonly={readOnly ? 'true' : 'false'}
            className={clsx(
              'FormControl-input',
              size && `${size}`,
              inset && 'FormControl--inset',
              monospace && 'FormControl--monospace'
            )}
            disabled={disabled ? 'true' : undefined}
            invalid={invalid ? 'true' : undefined}
          />
          {showClearButton && (
            <button
              id="input-id-clear"
              className={clsx(
                'FormControl-input-trailingAction',
                trailingActionDivider && 'FormControl-input-trailingAction--divider'
              )}
              aria-label="Clear"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-x"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          )}
        </div>
      ) : (
        <input
          placeholder={placeholder}
          id="input-id"
          type="text"
          disabled={disabled ? 'true' : undefined}
          readonly={readOnly ? 'true' : 'false'}
          className={clsx(
            'FormControl-input',
            size && `${size}`,
            validationStatus && `${validationStatus}`,
            inset && 'FormControl-inset',
            monospace && 'FormControl-monospace'
          )}
        />
      )}
      {invalid && (
        <span className="FormControl-inlineValidation">
          <svg
            aria-hidden="true"
            height="12"
            viewBox="0 0 12 12"
            version="1.1"
            width="12"
            className="octicon octicon-alert-fill"
          >
            <path
              fillRule="evenodd"
              d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 01-1.146 1.954H1.33A1.312 1.312 0 01.183 9.058L4.855.708zM7 7V3H5v4h2zm-1 3a1 1 0 100-2 1 1 0 000 2z"
            ></path>
          </svg>
          <p id="validation-5e6e1c8a">{validation}</p>
        </span>
      )}
      {caption && (
        <p className="FormControl-caption" id="caption-ebb67985">
          {caption}
        </p>
      )}
    </div>
    {focusElement && focusMethod()}
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  placeholder: 'Email address',
  label: 'Enter email address',
  fullWidth: false,
  monospace: false,
  inset: false,
  disabled: false,
  focusElement: false,
  leadingVisual: false,
  size: 1,
  caption: 'Caption',
  showClearButton: false,
  invalid: false,
  visuallyHidden: false,
  validation: '',
  trailingActionDivider: false,
  validationStatus: 0,
  readOnly: false
}
