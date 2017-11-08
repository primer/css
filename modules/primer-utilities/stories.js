import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Utilities', module)
.add('hover-grow', () => (
  <div className='Box hover-grow p-4'>
    .hover-grow
  </div>
))
.add('circle', () => (
  <div className='border circle p-3' style={{width: '100px', height: '100px'}}>
    .circle
  </div>
))
