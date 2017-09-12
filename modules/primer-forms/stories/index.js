import React from 'react'
import { storiesOf } from '@storybook/react'

// sub-stories
import inputGroup from './input-group'

storiesOf('Forms', module)
  .addDecorator(story => (
    <form>
      {story()}
    </form>
  ))
  .add('form-control', () => (
    <input className='form-control' type='text' placeholder='Standard input' aria-label='Standard input'/>
  ))
  .add('input-block', () => (
    <input className='form-control input-block' type='text' placeholder='Block input' aria-label='Block input'/>
  ))
  .add('input-group', inputGroup)
  .add('input-lg', () => (
    <input className='form-control input-lg' type='text' placeholder='Large input' aria-label='Large input'/>
  ))
  .add('input-sm', () => (
    <input className='form-control input-sm' type='text' placeholder='Small input' aria-label='Small input'/>
  ))
  .add('input-monospace', () => (
    <input className='form-control input-monospace' type='text' placeholder='Monospace input' aria-label='SHA'/>
  ))
  .add('form-select', () => (
    <select className='form-select' aria-label='Important decision'>
      <option>Select</option>
      <option value='option 2'>Option 2</option>
    </select>
  ))
  .add('select-sm', () => (
    <select className='form-select select-sm' aria-label='Important decision'>
      <option>Select</option>
      <option value='option 2'>Option 2</option>
    </select>
  ))
  .add('radio', () => (
    <label>
      <input type='radio' id='derp' name='radio'/>
      Radio
    </label>
  ))
  .add('checkbox', () => (
    <label>
      <input type='checkbox'/>
      checkbox
    </label>
  ))
  .add('textarea', () => (
    <textarea className='form-control'>
    </textarea>
  ))
  .add('form-actions', () => (
    <div className='form-actions'>
      <button type='submit' className='btn btn-primary'>Save changes</button>
      <button type='button' className='btn'>Cancel</button>
    </div>
  ))
  .add('label highlight', () => (
    <div className='form-checkbox'>
      <label>
        <input type='checkbox' checked='checked'/>
        <em className='highlight'>Available for hire</em>
      </label>
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
  .add('form-group', () => (
    <div>
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
    </div>
  ))
  .add('form validation', () => (
    <div>
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
    </div>
  ))
