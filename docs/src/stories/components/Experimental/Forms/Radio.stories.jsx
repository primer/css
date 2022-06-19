import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Experimental/Forms/Radio',
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
  checked
}) => (
  <>
    <div data-view-component="true" class="FormGroup FormGroup--radio">
      <input
        placeholder={placeholder}
        id="input-id"
        name="input-id"
        type="radio"
        disabled={disabled}
        invalid={invalid ? 'true' : undefined}
        class="FormControl FormControl--radio"
        checked={checked ? 'true' : undefined}
      />
      <span class="FormControl--radio-labelWrap">
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
  checked: false
}
