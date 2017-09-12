import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Flash alerts', module)
.add('flash', () => (
  <div className='flash'>
    flash
  </div>
))
.add('flash-warn', () => (
  <div className='flash flash-warn'>
    flash-warn
  </div>
))
.add('flash-error', () => (
  <div className='flash flash-error'>
    flash-error
  </div>
))
.add('flash-success', () => (
  <div className='flash flash-success'>
    flash-success
  </div>
))
.add('flash with action button', () => (
  <div className="flash">
    <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
    Flash message with action here.
  </div>
))
.add('flash-full', () => (
  <div className="container-lg">
    <div className="flash flash-full">
      Full width flash message.
    </div>
  </div>
))
