import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Marketing Utilities', module)
.add('Responsive borders', () => (
  <div className='border-top border-sm-right border-md-bottom border-lg-top-0'>.border-top-0</div>
))
.add('Border colors', () => (
<div className='bg-blue text-white p-3'>
  <span className='border border-white-fade p-2'>
    .border-white-fade
  </span>
</div>
))
.add('Responsive position', () => (
  <div className='position-relative p-6 bg-gray'>
    <div className='d-inline-block position-md-absolute bottom-0 right-0 border bg-white p-2'>
      .position-md-absolute
    </div>
  </div>
))
