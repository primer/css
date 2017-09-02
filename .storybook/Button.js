import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Button', module)
  .add('btn', () => (
    <button className='btn'>Button</button>
  ))
  .add('btn-primary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-primary'>Button</button>
      <button className='btn btn-primary hover'>Button</button>
      <button className='btn btn-primary focus'>Button</button>
      <button className='btn btn-primary selected'>Button</button>
      <button className='btn btn-primary disabled'>Button</button>
    </div>
  ))
  .add('btn-secondary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-secondary'>Button</button>
      <button className='btn btn-secondary hover'>Button</button>
      <button className='btn btn-secondary focus'>Button</button>
      <button className='btn btn-secondary selected'>Button</button>
      <button className='btn btn-secondary disabled'>Button</button>
    </div>
  ))
  .add('btn-danger', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-danger'>Button</button>
      <button className='btn btn-danger hover'>Button</button>
      <button className='btn btn-danger focus'>Button</button>
      <button className='btn btn-danger selected'>Button</button>
      <button className='btn btn-danger disabled'>Button</button>
    </div>
  ))
  .add('btn-outline', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-outline'>Button</button>
      <button className='btn btn-outline hover'>Button</button>
      <button className='btn btn-outline focus'>Button</button>
      <button className='btn btn-outline selected'>Button</button>
      <button className='btn btn-outline disabled'>Button</button>
    </div>
  ))
  .add('btn-blue', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-blue'>Button</button>
      <button className='btn btn-blue hover'>Button</button>
      <button className='btn btn-blue focus'>Button</button>
      <button className='btn btn-blue selected'>Button</button>
      <button className='btn btn-blue disabled'>Button</button>
    </div>
  ))
  .add('btn-purple', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <button className='btn btn-purple'>Button</button>
      <button className='btn btn-purple hover'>Button</button>
      <button className='btn btn-purple focus'>Button</button>
      <button className='btn btn-purple selected'>Button</button>
      <button className='btn btn-purple disabled'>Button</button>
    </div>
  ))
