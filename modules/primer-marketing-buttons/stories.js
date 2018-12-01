import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Marketing buttons', module)
  .add('Button colors and outlined', () => (
    <div className='p-4'>
      <button class="btn-mktg mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-outline-mktg mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-primary-mktg mr-3" type="button">Sign up</button>
    </div>
  ))
  .add('Button sizes', () => (
    <div className='p-4'>
      <button class="btn-mktg mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-outline-mktg  mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-primary-mktg  mr-3" type="button">Sign up</button>
      <button class="btn-mktg btn-large-mktg  mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-outline-mktg btn-large-mktg  mr-3" type="button">Learn more</button>
      <button class="btn-mktg btn-primary-mktg btn-large-mktg  mr-3" type="button">Sign up</button>
    </div>
  ))
