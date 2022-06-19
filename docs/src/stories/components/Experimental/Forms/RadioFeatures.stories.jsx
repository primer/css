import React from 'react'
import {RadioTemplate} from './Radio.stories.jsx'

export default {
  title: 'Components/Experimental/Forms/Radio/Features'
}

export const MultiRadios = ({}) => (
  <div style={{display: 'grid', gap: '.5rem'}}>
    <RadioTemplate label="First radio item" caption="This one has a caption!" />
    <RadioTemplate label="Second radio item" />
    <RadioTemplate label="Third radio item" />
  </div>
)
