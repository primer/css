import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/SegmentedControl/SegmentedControlButton',
  excludeStories: ['SegmentedControlButtonTemplate'],
  layout: 'padded',

  argTypes: {
    selected: {
      control: {type: 'boolean'},
      description: 'Currently selected item',
    },
    text: {
      defaultValue: 'Item',
      type: 'string',
      name: 'text',
      description: 'Button text',
    },
    leadingVisual: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: 'Has icon'
    },
    iconOnly: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: 'Show icon only',
    },
  }
}

// build every component case here in the template (private api)
export const SegmentedControlButtonTemplate = ({selected, text, leadingVisual, iconOnly }) => (
  <>
    <li>
      <button className={clsx(
          'SegmentedControl-button',
          iconOnly && `SegmentedControl-button--iconOnly`,
          selected && `SegmentedControl-button--selected`,
        )}
        aria-current={selected}
        aria-label={iconOnly && text}
      >
        <div class="SegmentedControl-content">
          {leadingVisual && (
            <svg class="SegmentedControl-leadingVisual octicon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          )}

            <span class="SegmentedControl-text" data-content={text}>{text}</span>
          )}
        </div>
      </button>
    </li>
  </>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = SegmentedControlButtonTemplate.bind({})
Playground.args = {
  text: 'Preview',
  leadingVisual: true,
  selected: true,
}
