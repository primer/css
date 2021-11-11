import React from 'react'
import clsx from 'clsx'
// import useToggle from '../helpers/useToggle.jsx'
// import { StoryTemplateName } from './OtherStoryFile.stories' // import stories for component compositions

/*
* Welcome to the Primer CSS Playground!

* Use the code snippets from [prototyping guide](./Prototyping.stories.mdx)

* This file includes helper code for configuring controls, setting default values, importing other story files and toggling state.

* Uncomment the code that you need, and feel free to delete whatever gets in your way

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
    children: {
      description: 'creates a slot for children'
    }
  }
}

// delete argTypes between ({ here }) if not using
export const PlaygroundTemplate = ({booleanExample, selectExample, stringExample, slot}) => {
  /* How to toggle state with a button or checkbox
   * import useToggle from '../helpers/useToggle.jsx'
   * const [isCollapsed, itemIsCollapsed] = useToggle()
   * <button onClick={itemIsCollapsed}>Toggle state</button>
   * <div className={isCollapsed ? 'someClass' : 'someOtherClass'or null} />
   */
  //   const [isCollapsed, itemIsCollapsed] = useToggle()
  return (
    <>
      <div className="example"></div>
    </>
  )
}

export const Playground = PlaygroundTemplate.bind({})
// Set default values for Playground story here
Playground.args = {
  stringExample: 'Default text',
  booleanExample: false
  // example: how to use args to set slot content
  //   slot: (
  //     <>
  //       <StoryTemplateName {...StoryTemplateName.args} />
  //     </>
  //   )
}
