import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Experimental/Forms/TextInput',
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
      mapping: ['Field--small', 'Field--medium', 'Field--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'medium', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    fullWidth: {
      description: 'full width',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    showClearButton: {
      description: 'show clear button',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    inset: {
      description: 'change input background to light gray',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    invalid: {
      description: 'invalid field',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    visuallyHideLabel: {
      description: 'visually hide label',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    label: {
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    type: {
      name: 'type',
      type: 'string',
      description: 'type',
      table: {
        category: 'HTML'
      }
    },
    id: {
      name: 'id',
      type: 'string',
      description: 'id',
      table: {
        category: 'HTML'
      }
    },
    caption: {
      name: 'caption',
      type: 'string',
      description: 'caption',
      table: {
        category: 'HTML'
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
        category: 'HTML'
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
  type,
  id,
  size,
  fullWidth,
  placeholder,
  inset,
  disabled,
  visuallyHideLabel,
  monospace,
  focusElement,
  showClearButton,
  leadingVisual,
  invalid,
  caption
}) => (
  <>
    <div className={clsx('FormControl', fullWidth && 'FormControl--fullWidth')}>
      <label htmlFor={id} className={clsx('FormControl-label', visuallyHideLabel && 'sr-only')}>
        {label}
      </label>
      {showClearButton || leadingVisual ? (
        <div
          className={clsx(
            'Field-wrap',
            'Field-wrap--input',
            showClearButton && 'Field-wrap--input-trailingAction',
            size && `${size}`,
            leadingVisual && 'Field-wrap--input-leadingVisual'
          )}
        >
          {leadingVisual && (
            <span class="Field--input-leadingVisualWrap">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-search Field--input-leadingVisual"
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
            id={id}
            name="input-id"
            type={type}
            className={clsx(
              'Field',
              'Field--input',
              size && `${size}`,
              inset && 'Field--inset',
              monospace && 'Field--monospace'
            )}
            disabled={disabled}
            invalid={invalid ? 'true' : undefined}
          />
          {showClearButton && (
            <button id="input-id-clear" class="Field--input-trailingAction" aria-label="Clear">
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
          id={id}
          name="input-id"
          type={type}
          className={clsx(
            'Field',
            'Field--input',
            size && `${size}`,
            inset && 'Field--inset',
            monospace && 'Field--monospace'
          )}
        />
      )}
      {invalid && (
        <span className="FormControl-validation">
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
          <p id="validation-5e6e1c8a">Something went wrong</p>
        </span>
      )}
      {caption && (
        <p className="FormControl-caption" id="caption-ebb67985">
          Hint text
        </p>
      )}
    </div>
    {focusElement && focusMethod()}
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  type: 'email',
  id: 'some-id',
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
  visuallyHideLabel: false
}
