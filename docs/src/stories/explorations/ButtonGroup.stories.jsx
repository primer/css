import React from 'react'
import clsx from 'clsx'
import {ButtonTemplate} from './Button.stories'
import {IconButtonTemplate} from './IconButton.stories'

export default {
  title: 'Explorations/ButtonGroup',
  excludeStories: ['ButtonGroupTemplate'],
  layout: 'padded',
  argTypes: {}
}

// build every component case here in the template (private api)
export const ButtonGroupTemplate = ({}) => (
  <div className="ButtonGroup">
    <ButtonTemplate label="Button 1" variant="Button--secondary" className="ButtonGroup-item" />
    <ButtonTemplate label="Button 2" variant="Button--secondary" className="ButtonGroup-item" pressed />
    <ButtonTemplate label="Button 3" variant="Button--secondary" className="ButtonGroup-item" />
    <IconButtonTemplate ariaLabel="label" visual variant="Button--secondary" className="ButtonGroup-item" />
  </div>
)

export const Playground = ButtonGroupTemplate.bind({})
Playground.args = {}
