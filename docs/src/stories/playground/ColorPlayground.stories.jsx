import React from 'react'
import clsx from 'clsx'
import ColorBlock from '../helpers/ColorBlock'
import DarkColorblind from '@primer/primitives/dist/json/colors/dark_colorblind.json'
import DarkDimmed from '@primer/primitives/dist/json/colors/dark_dimmed.json'
import DarkHighContrast from '@primer/primitives/dist/json/colors/dark_high_contrast.json'
import Dark from '@primer/primitives/dist/json/colors/dark.json'
import Light from '@primer/primitives/dist/json/colors/light.json'
import LightColorblind from '@primer/primitives/dist/json/colors/light_colorblind.json'

/*
* Welcome to the Primer CSS Playground!

* Use the code snippets from [prototyping guide](./Prototyping.stories.mdx) for setting up controls and conditional logic

* Uncomment any code that you need, and feel free to delete whatever gets in your way

* argTypes are optional for prototyping
*/

export default {
  title: 'Prototypes/Color',
  //   layout: 'padded', // add padding around frame
  layout: 'fullwidth',
  excludeStories: ['ColorPlaygroundTemplate'],
  // optional argTypes
  argTypes: {
    backgroundColor: {
      name: 'color',
      control: 'color',
      description: 'use with an inline style tag to access a colorpicker control'
    }
  }
}

const ColorPlaygroundTemplate = ({backgroundColor}) => {
  return (
    <div className="colorBlockWrap">
      <ColorBlock backgroundColor={backgroundColor} showValueLabel />
      <ColorBlock backgroundColor="var(--color-fg-default)" />
    </div>
  )
}

export const Color = ColorPlaygroundTemplate.bind({})
Color.args = {
  backgroundColor: '#000000'
}
Color.parameters = {
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
