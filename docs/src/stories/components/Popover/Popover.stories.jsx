import React from 'react'
import clsx from 'clsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

export default {
  title: 'Components/Popover',
  excludeStories: ['PopoverTemplateName'],
  layout: 'padded',
  argTypes: {
    size: {
      options: [0, 1], // iterator
      mapping: ['', 'Popover-message--large'], // values
      control: {
        type: 'select',
        labels: ['default', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    caretPosition: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // iterator
      mapping: [
        '',
        'Popover-message--bottom',
        'Popover-message--bottom-left',
        'Popover-message--bottom-right',
        'Popover-message--left',
        'Popover-message--left-bottom',
        'Popover-message--left-top',
        'Popover-message--right',
        'Popover-message--right-bottom',
        'Popover-message--right-top',
        'Popover-message--top-left',
        'Popover-message--top-right',
        'Popover-message--no-caret'
      ], // values
      control: {
        type: 'inline-radio',
        labels: [
          'default (top)',
          'bottom',
          'bottom_left',
          'bottom_right',
          'left',
          'left_bottom',
          'left_top',
          'right',
          'right_bottom',
          'right_top',
          'top_left',
          'top_right',
          'none'
        ]
      },
      table: {
        category: 'CSS'
      }
    },
    messagePosition: {
      options: ['position-relative', 'position-absolute'],
      control: {
        type: 'inline-radio'
      },
      description: '',
      table: {
        category: 'CSS'
      }
    },
    headingText: {
      name: 'headingText',
      type: 'string',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    primerUtilities: {
      name: 'headingText',
      type: 'string',
      description: 'Primer utility classes',
      table: {
        category: 'HTML'
      }
    },
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {type: 'inline-radio'},
      description: 'h4 default',
      table: {
        category: 'HTML'
      }
    }
  }
}

export const PopoverTemplateName = ({
  size,
  caretPosition,
  messagePosition,
  headingText,
  tag,
  children,
  trigger,
  triggerBottom,
  primerUtilities
}) => (
  <>
    {trigger}
    <div className={clsx('Popover', 'right-0', 'left-0', `${messagePosition}`)}>
      <div
        className={clsx('Popover-message', 'color-shadow-large', `${primerUtilities}`, `${size}`, `${caretPosition}`)}
      >
        {tag === 'h1' && <h1 className="mb-2">{headingText}</h1>}
        {tag === 'h2' && <h2 className="mb-2">{headingText}</h2>}
        {tag === 'h3' && <h3 className="mb-2">{headingText}</h3>}
        {tag === 'h4' && <h4 className="mb-2">{headingText}</h4>}
        {tag === 'h5' && <h5 className="mb-2">{headingText}</h5>}
        {tag === 'h6' && <h6 className="mb-2">{headingText}</h6>}
        {children}
      </div>
    </div>
    {triggerBottom}
  </>
)

export const Playground = PopoverTemplateName.bind({})
Playground.args = {
  tag: 'h4',
  headingText: 'Popover heading',
  size: '',
  caretPosition: '',
  messagePosition: 'position-relative',
  primerUtilities: 'text-left p-4 mt-2 mx-aut'
}
