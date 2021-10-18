import React from 'react'
import clsx from 'clsx'
import {Popover} from './Popover.stories.jsx'

export default {
  title: 'Components/Popover/Features',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=410%3A3890'
    }
  }
}

export const Responsive = Popover.bind({})
Responsive.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: '',
  messagePosition: 'position-absolute',
  trigger: [<button class="btn btn-primary">Trigger button</button>]
}
Responsive.decorators = [
  Story => (
    <div className="page-responsive">
      <div className="position-relative text-center">
        <Story />
      </div>
    </div>
  )
]
