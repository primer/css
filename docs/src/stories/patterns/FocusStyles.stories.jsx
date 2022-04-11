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
      <ButtonTemplate
        variant="btn-octicon"
        leadingVisual={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path d="M8 16c.9 0 1.7-.6 1.9-1.5.1-.3-.1-.5-.4-.5h-3c-.3 0-.5.2-.4.5.2.9 1 1.5 1.9 1.5zM3 5c0-2.8 2.2-5 5-5s5 2.2 5 5v3l1.7 2.6c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5h-11c-.8.1-1.5-.6-1.5-1.4 0-.3.1-.6.3-.8L3 8.1V5z"></path>
          </svg>`}
      />
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
      <LinkTemplate label="Primer link" href="/" />
      <a href="/">Link with no CSS class</a>
      <MarketingButtonTemplate label="Marketing Button" />
      <MarketingLinkTemplate label="Marketing Link" href="/" />
    </div>
    <div>
      <TabNavTemplate>
        <TabNavItemTemplate text="First tab" ariaCurrent="location" href="#url" />
        <TabNavItemTemplate text="Second tab" href="#url" />
      </TabNavTemplate>
    </div>
    <div class="BtnGroup">
      <a href="/" class="btn-sm btn BtnGroup-item">
        One
      </a>
      <a href="/" class="btn-sm btn BtnGroup-item">
        Two
      </a>
    </div>
    <div class="Box faketarget">:target styles</div>
    <nav class="UnderlineNav" aria-label="Foo bar">
      <div class="UnderlineNav-body">
        <a class="UnderlineNav-item" href="#url" aria-current="page">
          Item 1
        </a>
        <a class="UnderlineNav-item" href="#url">
          Item 2
        </a>
        <a class="UnderlineNav-item" href="#url">
          Item 3
        </a>
        <a class="UnderlineNav-item" href="#url">
          Item 4
        </a>
      </div>
      <div class="UnderlineNav-actions">
        <a class="btn btn-sm">Button</a>
      </div>
    </nav>
  </div>
)
