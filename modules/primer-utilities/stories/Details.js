import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Details utilities', module)
.add('details-overlay', () => (
  <details className='details-overlay'>
    <summary className='btn'>More</summary>
    <div className='position-relative bg-white p-3 border' style={{zIndex: 100}}>Hidden text</div>
  </details>
))
.add('details-overlay-dark', () => (
  <details className='details-overlay details-overlay-dark'>
    <summary className='btn'>More</summary>
    <div className='position-relative bg-white p-3 border' style={{zIndex: 100}}>Hidden text</div>
  </details>
))
