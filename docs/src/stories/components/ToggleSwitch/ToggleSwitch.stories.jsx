import React from 'react'

export default {
  title: 'Components/ToggleSwitch',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['ToggleSwitchTemplate'],
  controls: { expanded: true },
  argTypes: {
    checked: {
      control: {type: 'boolean'},
      description: 'checkbox state'
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'}
    },
    size: {
      options: ['medium', 'small'],
      control: {
        type: 'inline-radio'
      },
      description: 'size'
    },
    labelPosition: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description: 'label position'
    }
  }
}

function classNamesForSwitch(disabled, checked, size, labelPosition) {
  const classNames = ['ToggleSwitch'];

  if (checked) {
    classNames.push("ToggleSwitch--checked")
  }
  if (disabled) {
    classNames.push("ToggleSwitch--disabled")
  }
  if (size === 'small') {
    classNames.push("ToggleSwitch--small")
  }
  if (labelPosition === 'end') {
    classNames.push('ToggleSwitch--statusAtEnd')
  }

  return classNames.join(' ')
}

export const ToggleSwitchTemplate = ({disabled, checked, size, labelPosition}) => (
  <>
    <toggle-switch class={classNamesForSwitch(disabled, checked, size, labelPosition)}>
      <span aria-hidden="true" className="ToggleSwitch-status">
        <div className="ToggleSwitch-statusOn" style={{visibility: checked ? 'visible' : 'hidden' }}>On</div>
        <div className="ToggleSwitch-statusOff" style={{visibility: checked ? 'hidden' : 'visible' }}>Off</div>
      </span>

      <button
        className="ToggleSwitch-track"
        role="switch"
        aria-checked={checked ? 'true' : 'false'}
        aria-disabled={disabled ? "true" : "false"}>
        <span class="sr-only">{checked ? "On" : "Off"}</span>
        <div className="ToggleSwitch-icons" aria-hidden="true">
          <div className="ToggleSwitch-lineIcon">
            <svg
              width={size === 'small' ? 12 : 16}
              height={size === 'small' ? 12 : 16}
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2Z" />
            </svg>
          </div>

          <div className="ToggleSwitch-circleIcon">
            <svg
              width={size === 'small' ? 12 : 16}
              height={size === 'small' ? 12 : 16}
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" />
            </svg>
          </div>
        </div>

        <div className="ToggleSwitch-knob" />
      </button>
    </toggle-switch>
  </>
)

export const Playground = ToggleSwitchTemplate.bind({})
Playground.args = {
  disabled: false,
  checked: false,
  size: 'medium',
  labelPosition: 'start'
}
