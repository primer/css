import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Flash alerts', module)
.add('flash', () => (
  <div className='p-4'>
    <div className='flash'>
      flash
    </div>
  </div>
))
.add('flash-warn', () => (
  <div className='p-4'>
    <div className='flash flash-warn'>
      flash-warn
    </div>
  </div>
))
.add('flash-error', () => (
  <div className='p-4'>
    <div className='flash flash-error'>
      flash-error
    </div>
  </div>
))
.add('flash-success', () => (
  <div className='p-4'>
    <div className='flash flash-success'>
      flash-success
    </div>
  </div>
))
.add('flash with action button', () => (
  <div className='p-4'>
    <div className="flash">
      <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
      Flash message with action here.
    </div>
  </div>
))
.add('flash-full', () => (
  <div className='p-4'>
    <div className="container-lg">
      <div className="flash flash-full">
        Full width flash message.
      </div>
    </div>
  </div>
))
