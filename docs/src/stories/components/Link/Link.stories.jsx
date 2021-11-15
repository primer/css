import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Link',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['LinkTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3, 4], // iterator
      mapping: [null, 'Link--primary', 'Link--secondary', 'Link--muted', 'Link--onHover'], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'secondar', 'muted', 'onHover', 'invisible', 'close', 'with-count']
      },
      table: {
        category: 'CSS'
      }
    },
    noUnderline: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
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
    }
  }
}

const focusMethod = function getFocus() {
  // find the focusable element
  var link = document.getElementsByTagName('a')[0]
  // set focus on element
  link.focus()
}

export const LinkTemplate = ({label, variant, href, noUnderline, focusElement}) => (
  <>
    <a href={href} className={clsx(variant && `${variant}`, noUnderline && 'no-underline')}>
      {label}
    </a>
    {focusElement && focusMethod()}
  </>
)

export const Playground = LinkTemplate.bind({})
Playground.args = {
  label: 'Link label',
  href: '/',
  focusElement: false
}
