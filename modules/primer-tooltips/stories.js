import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Tooltips', module)
.add('tooltipped direction', () => (
  <div className='p-4'>
    <span className='tooltipped tooltipped-n border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the North side.'>
    Tooltip North
    </span>
    <span className='tooltipped tooltipped-ne border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the North East side.'>
      Tooltip North East
    </span>
    <span className='tooltipped tooltipped-e border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the East side.'>
      Tooltip East
    </span>
    <span className='tooltipped tooltipped-se border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the South East side.'>
      Tooltip South East
    </span>
    <span className='tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the South side.'>
      Tooltip South
    </span>
    <span className='tooltipped tooltipped-sw border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the South West side.'>
      Tooltip South West
    </span>
    <span className='tooltipped tooltipped-w border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the West side.'>
      Tooltip West
    </span>
    <span className='tooltipped tooltipped-nw border p-2 mb-2 mr-2 float-left' aria-label='This is the tooltip on the North West side.'>
      Tooltip North West
    </span>
  </div>
))
.add('tooltip-in-button', () => (
  <div className='p-6'>
    <button className='btn btn-secondary tooltipped tooltipped-n' aria-label='This is the tooltip on a button.'>Button</button>
  </div>
))
.add('tootlipped-multiline', () => (
  <div className='p-6'>
    <span className='tooltipped tooltipped-multiline tooltipped-s border p-2' aria-label='This is the tooltip with multiple lines. This is the tooltip with multiple lines.'>
      Tooltip with multiple lines
    </span>
  </div>
))
