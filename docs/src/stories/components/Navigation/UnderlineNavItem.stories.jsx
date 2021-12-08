import React from 'react'
import clsx from 'clsx'
import useToggle from '../../helpers/useToggle.jsx'

export default {
  title: 'Components/Navigation/UnderlineNav/Item',
  excludeStories: ['UnderlineNavItemTemplate'],
  layout: 'padded',
  argTypes: {
    selected: {
      control: {type: 'boolean'},
      description: 'active nav item',
      table: {
        category: 'CSS'
      }
    },
    usesDataContent: {
      control: {type: 'boolean'},
      description: 'creates a hidden label to allow for bold text without layout shift',
      table: {
        category: 'CSS'
      }
    },
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
      description: 'set manual focus on tab item',
      table: {
        category: 'Interactive'
      }
    },
    icon: {
      control: {type: 'boolean'},
      description: 'show icon',
      table: {
        category: 'CSS'
      }
    },
    counter: {
      control: {type: 'boolean'},
      description: 'show counter',
      table: {
        category: 'CSS'
      }
    }
  }
}

export const UnderlineNavItemTemplate = ({
  semanticItemType,
  label,
  selected,
  focusElement,
  icon,
  counter,
  usesDataContent
}) => {
  const [isSelected, itemisSelected] = useToggle()
  return (
    <li className="d-inline-flex">
      {semanticItemType === 'button' ? (
        <button
          className={clsx('UnderlineNav-item', focusElement && 'focus')}
          role="tab"
          aria-selected={selected || isSelected ? 'true' : undefined}
          onClick={itemisSelected}
        >
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="UnderlineNav-octicon"
            >
              <path
                fill-rule="evenodd"
                d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"
              ></path>
            </svg>
          )}
          <span data-content={usesDataContent ? label : undefined}>{label}</span>
          {counter && <span class="Counter">10</span>}
        </button>
      ) : (
        <a
          className={clsx('UnderlineNav-item', focusElement && 'focus')}
          aria-current={selected || isSelected ? 'true' : undefined}
          onClick={itemisSelected}
          //   aria-current={selected ? 'page' : undefined}
        >
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="UnderlineNav-octicon"
            >
              <path
                fill-rule="evenodd"
                d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"
              ></path>
            </svg>
          )}
          <span data-content={usesDataContent ? label : undefined}>{label}</span>
          {counter && <span class="Counter">10</span>}
        </a>
      )}
    </li>
  )
}

export const Playground = UnderlineNavItemTemplate.bind({})
Playground.args = {
  semanticItemType: 'button',
  label: 'Item',
  selected: false,
  focusElement: false,
  icon: false,
  counter: false,
  usesDataContent: true
}
