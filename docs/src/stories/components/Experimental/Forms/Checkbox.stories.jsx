import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Experimental/Forms/Checkbox',
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
    checked: {
      control: {type: 'boolean'},
      description: 'checked',
      table: {
        category: 'Interactive'
      }
    },
    indeterminate: {
      control: {type: 'boolean'},
      description: 'indeterminate',
      table: {
        category: 'Interactive'
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
  id,
  placeholder,
  disabled,
  visuallyHideLabel,
  focusElement,
  invalid,
  caption,
  checked,
  indeterminate
}) => (
  <>
    <div data-view-component="true" class="FormGroup FormGroup--checkbox FormControl-caption">
      <input
        placeholder={placeholder}
        id={id}
        name="input-id"
        type="checkbox"
        disabled={disabled}
        invalid={invalid ? 'true' : undefined}
        class="FormControl FormControl--checkbox"
        checked={checked}
        indeterminate={indeterminate ? 'true' : undefined}
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        class="FormControl--checkbox-svg"
      >
        <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" class="FormControl--checkbox-background" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.7799 5.22007C14.9203 5.36069 14.9992 5.55132 14.9992 5.75007C14.9992 5.94882 14.9203 6.13944 14.7799 6.28007L7.52985 13.5301C7.38922 13.6705 7.1986 13.7494 6.99985 13.7494C6.8011 13.7494 6.61047 13.6705 6.46985 13.5301L3.21985 10.2801C3.08737 10.1379 3.01525 9.94985 3.01867 9.75554C3.0221 9.56124 3.10081 9.37586 3.23823 9.23844C3.37564 9.10103 3.56103 9.02232 3.75533 9.01889C3.94963 9.01546 4.13767 9.08759 4.27985 9.22007L6.99985 11.9401L13.7199 5.22007C13.8605 5.07962 14.0511 5.00073 14.2499 5.00073C14.4486 5.00073 14.6393 5.07962 14.7799 5.22007Z"
          class="FormControl--checkbox-check"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 9C4 8.44772 4.44772 8 5 8H13C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H5C4.44772 10 4 9.55228 4 9Z"
          class="FormControl--checkbox-indeterminate"
        />
      </svg>
      <span class="FormControl--checkbox-labelWrap">
        <label htmlFor="input-id" className={clsx('FormControl-label', visuallyHideLabel && 'sr-only')}>
          {label}
        </label>
        {caption && (
          <p className="FormControl-caption" id="caption-ebb67985">
            {caption}
          </p>
        )}
      </span>
    </div>

    {focusElement && focusMethod()}
  </>
)

export const Playground = InputTemplate.bind({})
Playground.args = {
  id: 'some-id',
  placeholder: 'Email address',
  label: 'Enter email address',
  disabled: false,
  focusElement: false,
  caption: 'Caption',
  invalid: false,
  visuallyHideLabel: false,
  checked: false,
  indeterminate: false
}
