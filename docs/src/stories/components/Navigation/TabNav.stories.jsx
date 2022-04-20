import React from 'react'
import clsx from 'clsx'
import {TabNavItemTemplate} from './TabNavItem.stories' // import stories for component compositions

export default {
  title: 'Components/Navigation/TabNav',
  excludeStories: ['TabNavTemplate'],
  layout: 'padded',
  argTypes: {
    children: {
      description: 'slot for tab items',
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

export const TabNavTemplate = ({children, focusElement}) => (
  <div class="tabnav">
    <nav class="tabnav-tabs" aria-label="Foo bar">
      {children}
    </nav>
    {focusElement && focusMethod()}
  </div>
)

export const Playground = TabNavTemplate.bind({})
Playground.args = {
  focusElement: false,
  children: (
    <>
      <TabNavItemTemplate text="First tab" ariaCurrent="location" href="#url" />
      <TabNavItemTemplate text="Second tab" />
    </>
  )
}
