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
.add('tooltip aligned', () => (
  <div className='p-4'>
    <span className='tooltipped tooltipped-ne tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped NE and aligned left.'>
    Tooltip North East align left 1
    </span>
    <span className='tooltipped tooltipped-ne tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped NE and aligned left.'>
    Tooltip North East align left 2
    </span>
    <span className='tooltipped tooltipped-se tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped SW and aigned left.'>
    Tooltip South East align left 1
    </span>
    <span className='tooltipped tooltipped-se tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped SW and aigned left.'>
    Tooltip South East align left 2
    </span>
    <span className='tooltipped tooltipped-nw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped NW and aligned right.'>
      Tooltip North West align right 1
    </span>
    <span className='tooltipped tooltipped-nw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped NW and aligned right.'>
      Tooltip North West align right 2
    </span>
    <span className='tooltipped tooltipped-sw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped SE and aligned right.'>
      Tooltip South West align right 1
    </span>
    <span className='tooltipped tooltipped-sw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left' aria-label='Tooltipped SE and aligned right.'>
      Tooltip South West align right 2
    </span>
  </div>
  ))
  .add('tootlipped-multiline', () => (
    <div className='p-6'>
      <span className='tooltipped tooltipped-multiline tooltipped-s border p-2 mr-2' aria-label='This is the tooltip with multiple lines. This is the tooltip with multiple lines.'>
        Tooltip with multiple lines
      </span>
      <span className='tooltipped tooltipped-multiline tooltipped-sw tooltipped-align-right-2 border p-2' aria-label='This is the tooltip with multiple lines. This is the tooltip with multiple lines.'>
        Tooltip with multiple lines
      </span>
    </div>
  ))
  .add('tootlip no delay', () => (
    <div className='p-6'>
      <span className='tooltipped tooltipped-n tooltipped-no-delay border p-2' aria-label='This is a tooltip with no delay.'>
        Tooltip no delay
      </span>
    </div>
  ))
  .add('tooltip on button', () => (
    <div className='p-6'>
      <button className='btn tooltipped tooltipped-n' aria-label='This is the tooltip on a button.'>Button</button>
    </div>
  ))
