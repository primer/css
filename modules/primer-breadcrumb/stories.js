import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Breadcrumb', module)
.add('breadcrumb', () => (
  <nav aria-label='Breadcrumb'>
    <ol>
      <li className='breadcrumb-item text-small'><a href='/business'>Business</a></li>
      <li className='breadcrumb-item text-small'><a href='/business/customers'>Customers</a></li>
      <li className='breadcrumb-item breadcrumb-item-selected text-small text-gray' aria-current='page'>MailChimp</li>
    </ol>
  </nav>
))
