import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Box', module)
  .add('Box', () => (
    <div className='Box'>
      Box
    </div>
  ))
  .add('Box elements', () => (
    <div className='Box'>
      <div className='Box-header'>
        <h3 className='Box-title'>
          Box-title
        </h3>
      </div>
      <div className='Box-body'>
        Box-body
      </div>
      <div className='Box-footer'>
        Box-footer
      </div>
    </div>
  ))
  .add('Box-row', () => (
    <div className='Box'>
      <ul>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
      </ul>
    </div>
  ))
  .add('Box--condensed', () => (
    <div className='Box Box--condensed'>
      <div className='Box-header'>
        <h3 className='Box-title'>
          Box-title
        </h3>
      </div>
      <div className='Box-body'>
        Box-body
      </div>
      <ul>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
      </ul>
      <div className='Box-footer'>
        Box-footer
      </div>
    </div>
  ))
  .add('Box--spacious', () => (
    <div className='Box Box--spacious'>
      <div className='Box-header'>
        <h3 className='Box-title'>
          Box-title
        </h3>
      </div>
      <div className='Box-body'>
        Box-body
      </div>
      <ul>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
      </ul>
      <div className='Box-footer'>
        Box-footer
      </div>
    </div>
  ))
  .add('Box--blue', () => (
    <div className='Box Box--blue'>
      <div className='Box-header'>
        <h3 className='Box-title'>
          Box-title
        </h3>
      </div>
      <div className='Box-body'>
        Box-body
      </div>
      <ul>
        <li className='Box-row'>
          Box-row
        </li>
        <li className='Box-row'>
          Box-row
        </li>
      </ul>
      <div className='Box-footer'>
        Box-footer
      </div>
    </div>
  ))
  .add('Box-header--blue', () => (
    <div className='Box'>
      <div className='Box-header Box-header--blue'>
        <h3 className='Box-title'>Box-title</h3>
      </div>
      <div className='Box-body'>
        Box-body
      </div>
    </div>
  ))
  .add('Box--danger', () => (
    <div className='Box Box--danger'>
      <div className='Box-row'>
        Row one
      </div>
      <div className='Box-row'>
        Row two
      </div>
    </div>
  ))
  .add('Box-row themes', () => (
    <div>
      <div className='Box mb-4'>
        <div className='Box-row Box-row--gray'>
          .Box-row--gray
        </div>
        <div className='Box-row Box-row--hover-gray'>
          .Box-row--hover-gray
        </div>
        <div className='Box-row Box-row--yellow'>
          .Box-row--yellow
        </div>
        <div className='Box-row Box-row--hover-blue'>
          .Box-row--hover-blue
        </div>
        <div className='Box-row Box-row--blue'>
          .Box-row--blue
        </div>
      </div>
      <div className='Box'>
        <div className='Box-row Box-row--focus-gray navigation-focus'>
          .Box-row--focus-gray and .navigation-focus
        </div>
        <div className='Box-row Box-row--focus-gray'>
          .Box-row--focus-gray
        </div>
        <div className='Box-row Box-row--focus-blue navigation-focus'>
          .Box-row--focus-blue and .navigation-focus
        </div>
        <div className='Box-row Box-row--focus-blue'>
          .Box-row--focus-blue
        </div>
      </div>
    </div>
  ))
  .add('Box-row--unread', () => (
    <div className='Box'>
      <div className='Box-row'>
        Box row
      </div>
      <div className='Box-row Box-row--unread'>
        Box row unread
      </div>
      <div className='Box-row'>
        Box row
      </div>
    </div>
  ))
  .add('Box-row-link', () => (
    <div className='Box'>
      <div className='Box-row'>
        <a className='Box-row-link' href='#url'>Box row link</a>
      </div>
    </div>
  ))
  .add('Box border-dashed', () => (
    <div className='Box border-dashed p-2'>
      Box border-dashed
    </div>
  ))
  .add('Box with flash-full', () => (
    <div className='Box'>
      <div className='Box-header'>
        Box-header
      </div>
      <div className='flash flash-full'>
        flash-full
      </div>
      <div className='flash flash-full flash-success'>
        flash-full flash-success
      </div>
      <div className='flash flash-full flash-warn'>
        flash-full flash-warn
      </div>
      <div className='flash flash-full flash-error'>
        flash-full flash-error
      </div>
      <div className='Box-body'>
        Box-body
      </div>
    </div>
  ))
