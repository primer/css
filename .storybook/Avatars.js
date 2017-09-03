import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Avatars', module)
.add('avatar', () => (
  <img className='avatar' alt='Uncle Cat' width='72' height='72' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
))
.add('avatar-small', () => (
  <img className='avatar avatar-small' width='32' height='32' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
))
.add('avatar-parent-child', () => (
  <div>
    <div className='avatar-parent-child float-left'>
      <img className='avatar'width='48' height='48' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      <img className='avatar avatar-child' alt='Child cat' width='20' height='20' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
    </div>
  </div>
))
.add('avatar-stack', () => (
  <div>
    <div className='avatar-stack'>
      <img className='avatar' alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      <img className='avatar' alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
      <img className='avatar' alt='Uncle Cat' width='39' height='39' src='https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png'/>
    </div>
  </div>

))
.add('CircleBadge--small', () => (
  <div>
    <a className='CircleBadge CircleBadge--small' href='#url' title='Travis CI'>
      <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png' className='CircleBadge-icon'/>
    </a>
  </div>
))
.add('CircleBadge--medium', () => (
  <div>
    <a className='CircleBadge CircleBadge--medium' href='#url' title='Travis CI'>
      <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png' className='CircleBadge-icon'/>
    </a>
  </div>
))
.add('CircleBadge--large', () => (
  <div>
    <a className='CircleBadge CircleBadge--large' href='#url' title='Travis CI'>
      <img src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png' className='CircleBadge-icon'/>
    </a>
  </div>
))
.add('DashedConnection', () => (
  <div className='DashedConnection'>
    <ul className='d-flex list-style-none flex-justify-between' aria-label='A sample GitHub workflow'>
      <li className='CircleBadge CircleBadge--small' aria-label='GitHub'>
        <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </li>
      <li className='CircleBadge CircleBadge--small' aria-label='Slack'>
        <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </li>
      <li className='CircleBadge CircleBadge--small' aria-label='Travis CI'>
        <img width='32' src='https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png'/>
      </li>
    </ul>
  </div>
))
