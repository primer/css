import React from 'react'
import clsx from 'clsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

export default {
  title: 'Utilities/Typography',
  excludeStories: ['TypographyTemplate'],
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
export const TypographyTemplate = ({booleanExample, radioExample, stringExample, children}) => (
  <div
    // use clsx for multiple classnames
    className={clsx('defaultClass', radioExample && `radioExample`, booleanExample && 'defaultClass--modifier')}
    // use undefined for values that shouldn't be set if false
    // aria-hidden={booleanExample ? 'true' : undefined}
  >
    {/* use {children} for wrapper component templates */}
    <>
      <h1 class="h1">Pizza 1</h1>
      <h2 class="h2">Pizza 2</h2>
      <h3 class="h3">Pizza 3</h3>
      <h4 class="h4">Pizza 4</h4>
      <h5 class="h5">Pizza 5</h5>
      <h6 class="h6">Pizza 6</h6>
    </>
  </div>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = TypographyTemplate.bind({})
Playground.args = {
  stringExample: 'Default text',
  booleanExample: false
  //   children: (
  //     <>
  //       <StoryTemplateName {...StoryTemplateName.args} />
  //     </>
  //   )
}
