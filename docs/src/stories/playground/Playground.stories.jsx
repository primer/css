import React from 'react'
import clsx from 'clsx'
import ColorBlock from '../helpers/ColorBlock'
// import useToggle from '../helpers/useToggle.jsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

/*
* Welcome to the Primer CSS Playground!

* Use the code snippets from [prototyping guide](./Prototyping.stories.mdx) for setting up controls and conditional logic

* Uncomment any code that you need, and feel free to delete whatever gets in your way

* argTypes are optional for prototyping
*/

export default {
  title: 'Prototypes/Playground',
  //   layout: 'padded', // add padding around frame
  layout: 'fullwidth',
  excludeStories: ['PlaygroundTemplate'],
  // optional argType examples below
  argTypes: {
    booleanExample: {
      control: {type: 'boolean'},
      description: 'true/false toggle to controls'
    },
    selectExample: {
      options: [0, 1, 2, 3], // iterator
      mapping: ['string1', 'string2', 'string3', 'string4'], // values
      control: {
        type: 'select',
        labels: ['string1-label', 'string2-label', 'string3-label', 'string4-label'] // public labels
      },
      description: 'select menu mapping to strings (example: use for variant class names)'
    },
    stringExample: {
      name: 'stringExample',
      type: 'string',
      description: 'text box control'
    },
    slot: {
      description: 'creates a slot for children'
    },
    backgroundColor: {
      name: 'color',
      control: 'color',
      description: 'text box control',
      controls: {
        presetColors: [{color: '#ff4785', title: 'Coral'}, 'rgba(0, 159, 183, 1)', '#fe4a49']
      }
    }
  }
}

// Prototype within PlaygroundTemplate
// delete argTypes between ({ here }) if not using
export const PlaygroundTemplate = ({booleanExample, selectExample, stringExample, slot, backgroundColor}) => {
  return (
    <div className="colorBlockWrap">
      {/* <div className="example">Your prototype here!</div> */}
      <ColorBlock backgroundColor={backgroundColor} showValueLabel />
      <ColorBlock backgroundColor="var(--color-marketing-icon-primary)" />
    </div>
  )
}

export const Playground = PlaygroundTemplate.bind({})
// Set default values for Playground story here
Playground.args = {
  backgroundColor: '#000000'
  //   stringExample: 'Default text',
  //   booleanExample: false
  // example: how to use args to set slot content
  //   slot: (
  //     <>
  //       <StoryTemplateName {...StoryTemplateName.args} />
  //     </>
  //   )
}
