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
    <div data-view-component="true" class="FormGroup FormGroup--radio FormControl-caption">
      <input
        placeholder={placeholder}
        id={id}
        name="input-id"
        type="radio"
        disabled={disabled}
        invalid={invalid ? 'true' : undefined}
        class="FormControl FormControl--radio"
        checked={checked}
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        class="FormControl--radio-svg"
        style={{overflow: 'visible'}}
      >
        <defs>
          <radialGradient
            id="paint0_radial_14515_53881"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(9 9) rotate(90) scale(8.5)"
            class="FormControl--radio-svgGradient"
          >
            <stop offset="0.828125" stop-color="white" />
            <stop offset="0.828225" stop-color="var(--color-accent-fg)" />
          </radialGradient>
        </defs>
        <circle
          cx="9"
          cy="9"
          r="7"
          fill="#0969DA"
          stroke="url(#paint0_radial_14515_53881)"
          stroke-width="1"
          class="FormControl--radio-background"
        />
        <path
          d="M9 13.375C11.4162 13.375 13.375 11.4162 13.375 9C13.375 6.58376 11.4162 4.625 9 4.625C6.58376 4.625 4.625 6.58376 4.625 9C4.625 11.4162 6.58376 13.375 9 13.375Z"
          class="FormControl--radio-circle"
        />
      </svg>
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
