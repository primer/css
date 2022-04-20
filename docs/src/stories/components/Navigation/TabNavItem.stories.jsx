import React from 'react'
import clsx from 'clsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

export default {
  title: 'Components/Navigation/TabNavItem',
  excludeStories: ['TabNavItemTemplate'],
  layout: 'padded',
  argTypes: {
    leadingVisual: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: 'Show octicon',
      table: {
        category: 'HTML'
      }
    },
    trailingVisual: {
      defaultValue: false,
      control: {type: 'boolean'},
      description: 'Show counter',
      table: {
        category: 'HTML'
      }
    },
    text: {
      defaultValue: 'Item label',
      type: 'string',
      name: 'text',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    href: {
      defaultValue: '',
      type: 'string',
      name: 'href',
      description: 'Item link (href)',
      table: {
        category: 'HTML'
      }
    },
    ariaCurrent: {
      options: ['location', 'page'],
      control: {type: 'inline-radio'},
      description: 'location for anchor links, page for global page navigation',
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

// build every component case here in the template (private api)
export const TabNavItemTemplate = ({leadingVisual, trailingVisual, text, href, ariaCurrent, focusElement}) => (
  <>
    <a class="tabnav-tab" href={href} aria-current={ariaCurrent}>
      {leadingVisual && (
        <svg
          class="octicon octicon-comment-discussion"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 2.75C1.5 2.6837 1.52634 2.62011 1.57322 2.57322C1.62011 2.52634 1.6837 2.5 1.75 2.5H10.25C10.3163 2.5 10.3799 2.52634 10.4268 2.57322C10.4737 2.62011 10.5 2.6837 10.5 2.75V8.25C10.5 8.3163 10.4737 8.37989 10.4268 8.42678C10.3799 8.47366 10.3163 8.5 10.25 8.5H6.75C6.55115 8.50017 6.36052 8.57931 6.22 8.72L3.5 11.44V9.25C3.5 9.05109 3.42098 8.86032 3.28033 8.71967C3.13968 8.57902 2.94891 8.5 2.75 8.5H1.75C1.6837 8.5 1.62011 8.47366 1.57322 8.42678C1.52634 8.37989 1.5 8.3163 1.5 8.25V2.75ZM1.75 1C1.28587 1 0.840752 1.18437 0.512563 1.51256C0.184374 1.84075 0 2.28587 0 2.75L0 8.25C0 9.216 0.784 10 1.75 10H2V11.543C2.0001 11.8311 2.08561 12.1127 2.24571 12.3522C2.40581 12.5917 2.63333 12.7784 2.8995 12.8886C3.16567 12.9988 3.45854 13.0277 3.74111 12.9715C4.02367 12.9153 4.28324 12.7767 4.487 12.573L7.061 10H10.25C10.7141 10 11.1592 9.81563 11.4874 9.48744C11.8156 9.15925 12 8.71413 12 8.25V2.75C12 2.28587 11.8156 1.84075 11.4874 1.51256C11.1592 1.18437 10.7141 1 10.25 1H1.75ZM14.5 4.75C14.5 4.6837 14.4737 4.62011 14.4268 4.57322C14.3799 4.52634 14.3163 4.5 14.25 4.5H13.75C13.5511 4.5 13.3603 4.42098 13.2197 4.28033C13.079 4.13968 13 3.94891 13 3.75C13 3.55109 13.079 3.36032 13.2197 3.21967C13.3603 3.07902 13.5511 3 13.75 3H14.25C15.216 3 16 3.784 16 4.75V10.25C16 10.7141 15.8156 11.1592 15.4874 11.4874C15.1592 11.8156 14.7141 12 14.25 12H14V13.543C13.9999 13.8311 13.9144 14.1127 13.7543 14.3522C13.5942 14.5917 13.3667 14.7784 13.1005 14.8886C12.8343 14.9988 12.5415 15.0277 12.2589 14.9715C11.9763 14.9153 11.7168 14.7767 11.513 14.573L9.22 12.28C9.14631 12.2113 9.08721 12.1285 9.04622 12.0365C9.00523 11.9445 8.98318 11.8452 8.98141 11.7445C8.97963 11.6438 8.99816 11.5438 9.03588 11.4504C9.0736 11.357 9.12974 11.2722 9.20096 11.201C9.27218 11.1297 9.35701 11.0736 9.4504 11.0359C9.54379 10.9982 9.64382 10.9796 9.74452 10.9814C9.84523 10.9832 9.94454 11.0052 10.0365 11.0462C10.1285 11.0872 10.2113 11.1463 10.28 11.22L12.5 13.44V11.25C12.5 11.0511 12.579 10.8603 12.7197 10.7197C12.8603 10.579 13.0511 10.5 13.25 10.5H14.25C14.3163 10.5 14.3799 10.4737 14.4268 10.4268C14.4737 10.3799 14.5 10.3163 14.5 10.25V4.75Z"
          ></path>
        </svg>
      )}
      {text}
      {trailingVisual && <span class="Counter">2</span>}
    </a>
    {focusElement && focusMethod()}
  </>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = TabNavItemTemplate.bind({})
Playground.args = {
  text: 'Foo tab',
  href: '#url',
  leadingVisual: false,
  trailingVisual: false,
  focusElement: false
}
