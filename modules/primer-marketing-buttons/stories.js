import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Marketing buttons', module)
  .add('Button colors', () => (
    <div className='p-4'>
      <button className="btn btn-orange mr-6" type="button">Button button</button>
      <a className="btn btn-purple mr-6" href="#url" role="button">Link button</a>
      <button className="btn btn-blurple mr-6" type="button">Button button</button>
    </div>
  ))
  .add('btn-outline', () => (
    <div className='p-4'>
      <button className="btn btn-outline-orange mr-6" type="button">Button button</button>
      <a className="btn btn-outline-purple mr-6" href="#url" role="button">Link button</a>
      <button className="btn btn-outline-green mr-6" type="button">Button button</button>
      <div className="bg-gray-dark p-4 mt-4 mr-6">
      <button className="btn btn-transparent mr-6" type="button">Button button</button>
      </div>
    </div>
  ))
