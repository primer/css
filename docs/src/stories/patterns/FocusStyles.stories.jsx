import React from 'react'
import clsx from 'clsx'
import {ButtonTemplate} from '../components/Button/Button.stories.jsx'
import {CheckboxTemplate} from '../components/Forms/Checkbox.stories.jsx'
import {InputTemplate} from '../components/Forms/Input.stories.jsx'
import {SelectTemplate} from '../components/Forms/Select.stories.jsx'
import {TextareaTemplate} from '../components/Forms/Textarea.stories.jsx'
import {LinkTemplate} from '../components/Link/Link.stories.jsx'
import {MarketingButtonTemplate} from '../components/Marketing/MarketingButton.stories.jsx'
import {MarketingLinkTemplate} from '../components/Marketing/MarketingLink.stories.jsx'
import {TabNavTemplate} from '../components/Navigation/TabNav.stories.jsx'
import {TabNavItemTemplate} from '../components/Navigation/TabNavItem.stories.jsx'

export default {
  title: 'Patterns/FocusStyles',
  layout: 'padded'
}

export const FocusStyles = ({}) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
    <div style={{display: 'flex', gap: '0.5rem'}}>
      <ButtonTemplate variant="btn-primary" label="Primary" />
      <ButtonTemplate variant="btn-secondary" label="Secondary" />
      <ButtonTemplate variant="btn-outline" label="Outline" />
      <ButtonTemplate variant="btn-danger" label="Danger" />
      <ButtonTemplate variant="btn-link" label="Link" />
      <ButtonTemplate variant="btn-invisible" label="Invisible" />
      <ButtonTemplate variant="btn-primary" label="Primary" disabled />
      <ButtonTemplate variant="btn-secondary" label="Secondary" disabled />
      <ButtonTemplate variant="btn-outline" label="Outline" disabled />
      <ButtonTemplate variant="btn-danger" label="Danger" disabled />
      <ButtonTemplate variant="btn-link" label="Link" disabled />
      <ButtonTemplate variant="btn-invisible" label="Invisible" disabled />
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <CheckboxTemplate label="checkbox" type="checkbox" />
      <CheckboxTemplate label="radio" type="radio" />
      <InputTemplate label="input" type="text" />
      <SelectTemplate label="select" />
      <TextareaTemplate label="textarea" />
      <LinkTemplate label="Link" href="/" />
      <MarketingButtonTemplate label="Marketing Button" />
      <MarketingLinkTemplate label="Marketing Link" href="/" />
    </div>
    <div>
      <TabNavTemplate>
        <TabNavItemTemplate text="First tab" ariaCurrent="location" href="#url" />
        <TabNavItemTemplate text="Second tab" href="#url" />
      </TabNavTemplate>
    </div>
  </div>
)
