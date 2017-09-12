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
.add('form-actions', () => (
  <div className='form-actions'>
    <button type='submit' className='btn btn-primary'>Save changes</button>
    <button type='button' className='btn'>Cancel</button>
  </div>
))
.add('label highlight', () => (
  <div>
    <form>
      <div className='form-checkbox'>
        <label>
          <input type='checkbox' checked='checked'/>
          <em className='highlight'>Available for hire</em>
        </label>
      </div>
    </form>
  </div>
))
.add('form-checkbox-details', () => (
  <div className='form-checkbox'>
    <label aria-live='polite'>
      <input type='radio' className='form-checkbox-details-trigger' name='hireme'/>
      Available for hire
      <span className='form-checkbox-details text-normal'>
        <span className='d-block mb-1'>Available hours per week</span>
        <input type='text' name='' className='form-control input-contrast' size='3'/>
        <span className='text-small text-gray pl-2'>hours per week</span>
      </span>
    </label>
  </div>
))
.add('formgroup', () => (
  <form>
    <dl className='form-group'>
      <dt><label for='example-text'>Example Text</label></dt>
      <dd><input className='form-control' type='text' value='Example Value' id='example-text'/></dd>
    </dl>

    <dl className='form-group'>
      <dt><label for='example-select'>Example Select</label></dt>
      <dd>
        <select className='form-select' id='example-select'>
          <option>Choose an option</option>
          <option>Git</option>
          <option>Subversion</option>
          <option>Social Coding</option>
          <option>Beets</option>
          <option>Bears</option>
          <option>Battlestar Galactica</option>
        </select>
      </dd>
    </dl>

    <dl className='form-group'>
      <dt><label for='example-textarea'>Example Textarea</label></dt>
      <dd>
        <textarea className='form-control' id='example-textarea'></textarea>
      </dd>
    </dl>
  </form>
))
.add('form validation', () => (
  <div>
    <form>
      <dl className='form-group errored'>
        <dt><label for='example-text-errored'>Example Text</label></dt>
        <dd><input className='form-control' type='text' value='Example Value' id='example-text-errored' aria-describedby='form-error-text'/></dd>
        <dd className='error' id='form-error-text'>This example input has an error.</dd>
      </dl>
      <br />
      <dl className='form-group warn'>
        <dt><label for='example-text-warn'>Example Text</label></dt>
        <dd><input className='form-control' type='text' value='Example Value' id='example-text-warn' aria-describedby='form-warning-text'/></dd>
        <dd className='warning' id='form-warning-text'>This example input has a warning.</dd>
      </dl>
    </form>
  </div>
))
