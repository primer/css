import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Rails Forms/Checkbox',
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
    visuallyHidden: {
      description: 'visually hide label',
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
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

export const InputTemplate = ({label, disabled, visuallyHidden, focusElement, caption, checked, indeterminate}) => (
  <>
    <div data-view-component="true" class="FormControl-checkbox-wrap">
      <input
        id="input-id"
        type="checkbox"
        disabled={disabled}
        class="FormControl-checkbox"
        checked={checked ? 'true' : undefined}
        indeterminate={indeterminate ? 'true' : undefined}
        ariaDescribedBy={caption ? 'caption-ebb67985' : undefined}
      />
      <span class="Field--checkbox-labelWrap">
        <label htmlFor="input-id" className={clsx('FormControl-label', visuallyHidden && 'sr-only')}>
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
  label: 'Select an option',
  disabled: false,
  focusElement: false,
  caption: 'Caption',
  invalid: false,
  visuallyHidden: false,
  checked: false,
  indeterminate: false
}
