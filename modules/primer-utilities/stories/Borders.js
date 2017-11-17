import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Border utilities', module)
.add('circle', () => (
  <div className='border circle p-3' style={{width: '100px', height: '100px'}}>
    .circle
  </div>
))
