import React from 'react'
import clsx from 'clsx'
import {CheckboxTemplate} from './Checkbox.stories'

export default {
  title: 'Components/Forms/Radio',
  parameters: {
    layout: 'padded'
  },
  decorators: [
    Story => (
      <form>
        <Story />
      </form>
    )
  ]
}

export const Playground = CheckboxTemplate.bind({})
Playground.args = {
  label: 'Label',
  focusElement: false,
  disabled: false,
  checked: false,
  highlight: false,
  note: '',
  type: 'radio',
  focusAllElements: false
}
