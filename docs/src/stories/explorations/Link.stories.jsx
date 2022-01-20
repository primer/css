import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Explorations/Link',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['LinkTemplate'],
  argTypes: {
    variant: {
      options: [0, 1], // iterator
      mapping: [null, 'Link--muted'], // values
      control: {
        type: 'inline-radio',
        labels: ['default', 'muted']
      },
      table: {
        category: 'CSS'
      },
      description: 'Controls link color',
      defaultValue: 0
    },
    label: {
      defaultValue: 'Link',
      type: 'string',
      name: 'label',
      description: 'Link label',
      table: {
        category: 'Slot'
      }
    },
    target: {
      defaultValue: '',
      type: 'string',
      name: 'target',
      description: '_blank for new tab',
      table: {
        category: 'Slot'
      }
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: '',
      table: {
        category: 'Slot'
      }
    },
    showTrailingAction: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: '',
      table: {
        category: 'CSS'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set focus on one element',
      table: {
        category: 'State'
      }
    },
    focusAllElements: {
      control: {type: 'boolean'},
      description: 'set focus on all elements for viewing in all themes',
      table: {
        category: 'State'
      }
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var button = document.getElementsByTagName('button')[0]
  // set focus on element
  button.focus()
}

const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path
      fill-rule="evenodd"
      d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
    ></path>
  </svg>
)

export const LinkTemplate = ({
  label,
  variant,
  focusElement,
  focusAllElements,
  className,
  href,
  showTrailingAction,
  target
}) => (
  <>
    <a
      className={clsx('Link', className && `${className}`, variant && `${variant}`, focusAllElements && 'focus')}
      href={href}
      target={target ? target : undefined}
    >
      {showTrailingAction ? (
        <span className="Link-trailingVisual">
          {label}
          {arrow}
        </span>
      ) : (
        label
      )}
    </a>
    {focusElement && focusMethod()}
  </>
)

export const Playground = LinkTemplate.bind({})
Playground.args = {
  focusElement: false,
  focusAllElements: false
}
