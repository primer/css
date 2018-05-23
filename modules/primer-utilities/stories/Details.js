import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Details utilities', module)
.add('details-expanded', () => (
  <details className='details-expanded'>
    <summary className='btn'>More</summary>
    <div className='position-relative bg-white p-3 border' style={{zIndex: 100}}>Hidden text</div>
  </details>
))
.add('details-expanded-dark', () => (
  <details className='details-expanded details-expanded-dark'>
    <summary className='btn'>More</summary>
    <div className='position-relative bg-white p-3 border' style={{zIndex: 100}}>Hidden text</div>
  </details>
))
