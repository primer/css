import React from 'react'
import clsx from 'clsx'
import DarkColorblind from '@primer/primitives/dist/json/colors/dark_colorblind.json'
import DarkDimmed from '@primer/primitives/dist/json/colors/dark_dimmed.json'
import DarkHighContrast from '@primer/primitives/dist/json/colors/dark_high_contrast.json'
import Dark from '@primer/primitives/dist/json/colors/dark.json'
import Light from '@primer/primitives/dist/json/colors/light.json'
import LightColorblind from '@primer/primitives/dist/json/colors/light_colorblind.json'
// import useToggle from '../helpers/useToggle.jsx'
// import ColorBlock from '../helpers/ColorBlock'
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
    radioExample: {
      options: ['string1', 'string2', 'string3', 'string4'],
      control: {
        type: 'inline-radio'
      },
      description: 'radio buttons mapping to strings (example: use for variant class names)'
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
      description: 'use with an inline style tag to access a colorpicker control'
    }
  }
}

// Prototype within PlaygroundTemplate
// delete argTypes between ({ here }) if not using
export const PlaygroundTemplate = ({booleanExample, radioExample, stringExample, slot, backgroundColor}) => {
  return (
    <>
      <div className="example">Your prototype here!</div>
    </>
  )
}

export const Playground = PlaygroundTemplate.bind({})
// Set default values for Playground story here
Playground.args = {
  //   backgroundColor: ''
  //   stringExample: 'Default text',
  //   booleanExample: false
  // example: how to use args to set slot content
  //   slot: (
  //     <>
  //       <StoryTemplateName {...StoryTemplateName.args} />
  //     </>
  //   )
}
// access color primitives from the paintbrush icon in the toolbar
Playground.parameters = {
  colorPalettes: {
    palettes: [
      {
        name: 'dark_colorblind',
        palette: DarkColorblind
      },
      {
        name: 'dark_dimmed',
        palette: DarkDimmed
      },
      {
        name: 'dark_high_contrast',
        palette: DarkHighContrast
      },
      {
        name: 'dark',
        palette: Dark
      },
      {
        name: 'light',
        palette: Light
      },
      {
        name: 'light_colorblind',
        palette: LightColorblind
      }
    ]
  }
}
