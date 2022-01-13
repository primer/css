import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Marketing/Link',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['LinkTemplate'],
  argTypes: {
    size: {
      options: [0, 1], // iterator
      mapping: ['f4-mktg', 'f3-mktg'], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    emphasis: {
      defaultValue: false,
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
    href: {
      name: 'href',
      type: 'string',
      description: 'url',
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
    focusAllElements: {
      control: {type: 'boolean'},
      description: 'set focus on all elements for viewing in all themes',
      table: {
        category: 'Interactive'
      }
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var link = document.getElementsByTagName('a')[0]
  // set focus on element
  link.focus()
}

export const LinkTemplate = ({label, emphasis, href, size, focusElement, focusAllElements}) => (
  <>
    <a
      href={href}
      className={clsx(
        'link-mktg arrow-target-mktg text-semibold',
        size && `${size}`,
        focusAllElements && 'focus',
        emphasis && 'link-emphasis-mktg'
      )}
    >
      {label}{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="octicon arrow-symbol-mktg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
        ></path>
        <path stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </a>
    {focusElement && focusMethod()}
  </>
)

export const Playground = LinkTemplate.bind({})
Playground.args = {
  label: 'Link label',
  href: '/',
  focusElement: false,
  focusAllElements: false,
  size: 3,
  emphasis: false
}
