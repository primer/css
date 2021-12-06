import React from 'react'
import clsx from 'clsx'
import {IconButtonTemplate} from './IconButton.stories'
import {ButtonTemplate} from '../Button/Button.stories'

export default {
  title: 'Components/IconButton/Features'
}

// ButtonGroup needs a refactor, so this looks broken (but we should make it work in the future)
export const ButtonGroup = ({}) => (
  <div className="BtnGroup">
    <ButtonTemplate label="Default button" btnGroupItem />
    <IconButtonTemplate
      btnGroupItem
      icon={
        '<path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>'
      }
    />
  </div>
)
ButtonGroup.storyName = 'Button Group: right'
