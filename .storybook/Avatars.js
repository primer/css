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
    <div className="avatar-parent-child float-left">
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
