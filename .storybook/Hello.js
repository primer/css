import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Hello', module)
  .add('f00-light', () => (
<div>
    <h1 className='f00-light'>Hello</h1>
    <h1 className='f1'>Hello</h1>
    <h1 className='f2'>Hello</h1>
    <h1 className='f3'>Hello</h1>
</div>
  ))
  .add('f1', () => (
    <h1 className='f1'>
      Hello
    </h1>
  ))
