import React from 'react'

export default {
  title: 'Components/Forms/Fieldset',
  decorators: [
    Story => (
        <form>
          <Story/>
        </form>
    )
  ],
  argTypes: {
    disabled: {
      description: 'disabled fieldset',
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    }
  }
}

const FieldsetTemplate = ({disabled}) => (
    <fieldset disabled={disabled}>
      <label htmlFor="email">Email</label>
      <input className="form-control" id="email"/>

      <label htmlFor="username">Username</label>
      <input className="form-control" id="username"/>
    </fieldset>
)

export const Playground = FieldsetTemplate.bind({})
Playground.args = {
  disabled: false
}
