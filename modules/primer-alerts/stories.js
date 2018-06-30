import React from 'react'
import { storiesOf } from '@storybook/react'
import { WithFigma } from 'storybook-addon-figma'
import { figma as figmaConfig } from './../package.json'

const generateFigmaUrl = (name) =>
   `${figmaConfig.url}?node-id=${figmaConfig.components[name].id.split(":")[0]}%3A${figmaConfig.components[name].id.split(":")[1]}`

storiesOf('Flash alerts', module)

.add('flash', () => (
  <WithFigma
    url={generateFigmaUrl('flash')}
  >
    <div className='p-4'>
      <div className='flash'>
        flash
      </div>
    </div>
  </WithFigma>
))
.add('flash-warn', () => (
  <WithFigma
    url={generateFigmaUrl('flash-warn')}
  >
    <div className='p-4'>
      <div className='flash flash-warn'>
        flash-warn
      </div>
    </div>
  </WithFigma>
))
.add('flash-error', () => (
  <WithFigma
    url={generateFigmaUrl('flash-error')}
  >
    <div className='p-4'>
      <div className='flash flash-error'>
        flash-error
      </div>
    </div>
  </WithFigma>
))
.add('flash-success', () => (
  <WithFigma
    url={generateFigmaUrl('flash-success')}
  >
    <div className='p-4'>
      <div className='flash flash-success'>
        flash-success
      </div>
    </div>
  </WithFigma>
))
.add('flash with action button', () => (
  <WithFigma
    url={generateFigmaUrl('flash with action button')}
  >
    <div className='p-4'>
      <div className="flash">
        <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
        Flash message with action here.
      </div>
    </div>
  </WithFigma>
))
.add('flash-full', () => (
  <WithFigma
    url={generateFigmaUrl('flash-full')}
  >
    <div className='p-4'>
      <div className="container-lg">
        <div className="flash flash-full">
          Full width flash message.
        </div>
      </div>
    </div>
  </WithFigma>
))
