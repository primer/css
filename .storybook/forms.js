import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Forms', module)
.add('form-control', () => (
  <div>
    <input className='form-control' type='text' placeholder='Standard input' aria-label='Standard input'/>
  </div>
))
.add('input-lg', () => (
  <div>
    <input className='form-control input-lg' type='text' placeholder='Large input' aria-label='Large input'/>
  </div>
))
.add('input-sm', () => (
  <div>
    <input className='form-control input-sm' type='text' placeholder='Small input' aria-label='Small input'/>
  </div>
))
.add('input-block', () => (
  <div>
    <input className='form-control input-block' type='text' placeholder='Block input' aria-label='Block input'/>
  </div>
))
.add('input-monospace', () => (
  <div>
    <input className='form-control input-monospace' type='text' placeholder='Monospace input' aria-label='SHA'/>
  </div>
))
.add('form-select', () => (
  <div>
    <select className='form-select' aria-label='Important decision'>
      <option>Select</option>
      <option value='option 2'>Option 2</option>
    </select>
  </div>
))
.add('select-sm', () => (
  <div>
    <select className='form-select select-sm' aria-label='Important decision'>
      <option>Select</option>
      <option value='option 2'>Option 2</option>
    </select>
  </div>
))
.add('radio', () => (
  <div>
    <label>
      <input type='radio' id='derp' name='radio'/>
       Radio
    </label>
  </div>
))
.add('checkbox', () => (
  <div>
    <label>
      <input type='checkbox'/>
       checkbox
    </label>
  </div>
))
.add('textarea', () => (
  <div>
    <textarea className='form-control'>
    </textarea>
  </div>
))
