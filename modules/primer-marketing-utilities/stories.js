import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Marketing utilities', module)
  .add('Responsive borders', () => (
    <div className='border-top border-sm-right border-md-bottom border-lg-top-0'>.border-top-0</div>
  ))
  .add('border-white-fade', () => (
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
  .add('Y directional margin', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mt-7 bg-blue-light">.mt-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mb-7 bg-blue-light">.mb-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block my-7 bg-blue-light">.my-7</div>
      </div>
    </div>
  ))
  .add('Y directional responsive margin', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mt-sm-7 bg-blue-light">.mt-sm-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mb-md-7 bg-blue-light">.mb-md-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block my-lg-7 bg-blue-light">.my-lg-7</div>
      </div>
    </div>
  ))
  .add('Y directional padding', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pt-7 bg-blue-light">.pt-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pb-7 bg-blue-light">.pb-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block py-7 bg-blue-light">.py-7</div>
      </div>
    </div>
  ))
  .add('Y directional responsive padding', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pt-sm-7 bg-blue-light">.pt-sm-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pb-md-7 bg-blue-light">.pb-md-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block py-lg-7 bg-blue-light">.py-lg-7</div>
      </div>
    </div>
  ))
  .add('Absolute position with spacing utils', () => (
    <div className='position-relative p-6 bg-gray'>
      <div className='position-absolute top-4 top-md-8 border bg-white p-2'>
        .position-absolute
      </div>
    </div>
  ))
