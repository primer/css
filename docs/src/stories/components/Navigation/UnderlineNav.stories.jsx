import React from 'react'
import clsx from 'clsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

export default {
  title: 'Components/Navigation/UnderlineNav',
  excludeStories: ['UnderlineNavTemplate'],
  layout: 'padded',
  argTypes: {
    booleanExample: {
      control: {type: 'boolean'},
      description: 'true/false toggle to controls',
      table: {
        category: 'Pick one: CSS, HTML, Interactive'
      }
    },
    radioExample: {
      options: ['string1', 'string2', 'string3', 'string4'],
      control: {
        type: 'inline-radio'
      },
      description: 'radio buttons mapping to strings (example: use for variant class names)',
      table: {
        category: 'Pick one: CSS, HTML, Interactive'
      }
    },
    stringExample: {
      name: 'stringExample',
      type: 'string',
      description: 'text box control',
      table: {
        category: 'Pick one: CSS, HTML, Interactive'
      }
    },
    children: {
      description: 'creates a slot for children',
      table: {
        category: 'HTML'
      }
    }
  }
}

// build every component case here in the template (private api)
export const UnderlineNavTemplate = ({booleanExample, radioExample, stringExample, children}) => (
  <nav class="UnderlineNav">
    <div class="UnderlineNav-body" role="tablist">
      <button class="UnderlineNav-item" role="tab" type="button" aria-selected="true">
        Item 1
      </button>
      <button class="UnderlineNav-item" role="tab" type="button">
        Item 2
      </button>
      <button class="UnderlineNav-item" role="tab" type="button">
        Item 3
      </button>
      <button class="UnderlineNav-item" role="tab" type="button">
        Item 4
      </button>
    </div>
  </nav>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = UnderlineNavTemplate.bind({})
Playground.args = {
  stringExample: 'Default text',
  booleanExample: false
  //   children: (
  //     <>
  //       <StoryTemplateName {...StoryTemplateName.args} />
  //     </>
  //   )
}
