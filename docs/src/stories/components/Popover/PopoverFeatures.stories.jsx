import React from 'react'
import clsx from 'clsx'
import {PopoverTemplateName} from './Popover.stories.jsx'

export default {
  title: 'Components/Popover/Features',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=410%3A3890'
    }
  }
}

export const Bottom = PopoverTemplateName.bind({})
Bottom.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--bottom',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mx-auto mb-2 text-left'
}
Bottom.decorators = [
  Story => (
    <div className="position-relative text-center">
      <Story />
    </div>
  )
]

export const BottomRight = PopoverTemplateName.bind({})
BottomRight.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--bottom-right',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mb-2 text-left'
}
BottomRight.decorators = [
  Story => (
    <div className="position-relative text-right">
      <Story />
    </div>
  )
]

export const BottomLeft = PopoverTemplateName.bind({})
BottomLeft.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--bottom-left',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mb-2'
}
BottomLeft.decorators = [
  Story => (
    <div className="position-relative">
      <Story />
    </div>
  )
]

export const Left = PopoverTemplateName.bind({})
Left.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--left',
  messagePosition: 'position-relative',
  trigger: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 ml-2'
}
Left.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-center">
      <Story />
    </div>
  )
]

export const LeftBottom = PopoverTemplateName.bind({})
LeftBottom.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--left-bottom',
  messagePosition: 'position-relative',
  trigger: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 ml-2'
}
LeftBottom.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-end">
      <Story />
    </div>
  )
]

export const LeftTop = PopoverTemplateName.bind({})
LeftTop.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--left-top',
  messagePosition: 'position-relative',
  trigger: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 ml-2'
}
LeftTop.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-start">
      <Story />
    </div>
  )
]

export const Right = PopoverTemplateName.bind({})
Right.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--right',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mr-2'
}
Right.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-center">
      <Story />
    </div>
  )
]

export const RightBottom = PopoverTemplateName.bind({})
RightBottom.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--right-bottom',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mr-2'
}
RightBottom.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-end">
      <Story />
    </div>
  )
]

export const RightTop = PopoverTemplateName.bind({})
RightTop.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--right-top',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mr-2'
}
RightTop.decorators = [
  Story => (
    <div className="d-flex flex-justify-center flex-items-start">
      <Story />
    </div>
  )
]

export const TopLeft = PopoverTemplateName.bind({})
TopLeft.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--top-left',
  messagePosition: 'position-relative',
  trigger: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mt-2'
}
TopLeft.decorators = [
  Story => (
    <div className="position-relative pl-2">
      <Story />
    </div>
  )
]

export const TopRight = PopoverTemplateName.bind({})
TopRight.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: 'Popover-message--top-right',
  messagePosition: 'position-relative',
  trigger: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'text-left p-4 mt-2'
}
TopRight.decorators = [
  Story => (
    <div className="position-relative text-right pr-2">
      <Story />
    </div>
  )
]

export const Large = PopoverTemplateName.bind({})
Large.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: 'Popover-message--large',
  caretPosition: 'Popover-message--bottom',
  messagePosition: 'position-relative',
  triggerBottom: [<button class="btn btn-primary">Trigger button</button>],
  primerUtilities: 'p-4 mx-auto mb-2 text-left'
}
Large.decorators = [
  Story => (
    <div className="position-relative text-center">
      <Story />
    </div>
  )
]
