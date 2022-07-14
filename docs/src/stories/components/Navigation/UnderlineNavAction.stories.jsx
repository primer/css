import React from 'react'
import clsx from 'clsx'
import {ButtonTemplate} from '../Button/Button.stories'
import {LinkTemplate} from '../Link/Link.stories'

export default {
  title: 'Components/Navigation/UnderlineNav/Action',
  excludeStories: ['UnderlineNavActionTemplate'],
  layout: 'padded',
  argTypes: {
    semanticItemType: {
      options: ['button', 'link'],
      control: {
        type: 'inline-radio'
      },
      description: 'item can be a button or a link',
      table: {
        category: 'HTML'
      }
    },
    label: {
      name: 'label',
      type: 'string',
      description: 'Item label text',
      table: {
        category: 'HTML'
      }
    },
    focusElement: {
      control: {type: 'boolean'},
      description: 'set manual focus on item',
      table: {
        category: 'Interactive'
      }
    }
  }
}

export const UnderlineNavActionTemplate = ({semanticItemType, label, focusElement}) => {
  return (
    <div class="UnderlineNav-actions">
      {semanticItemType === 'button' ? (
        <ButtonTemplate label={label} focusAllElements={focusElement} />
      ) : (
        <LinkTemplate label={label} focusAllElements={focusElement} />
      )}
    </div>
  )
}

export const Playground = UnderlineNavActionTemplate.bind({})
Playground.args = {
  semanticItemType: 'button',
  label: 'Action',
  focusElement: false
}
