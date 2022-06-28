import React from 'react'
import {RadioTemplate} from './Radio.stories.jsx'

export default {
  title: 'Rails Forms/Radio/Features'
}

export const MultiRadios = ({}) => (
  <form style={{display: 'grid', gap: '.5rem'}}>
    <RadioTemplate label="First radio item" caption="This one has a caption!" id="first" />
    <RadioTemplate label="Second radio item" id="second" />
    <RadioTemplate label="Third radio item" id="third" />
  </form>
)
