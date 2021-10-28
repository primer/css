import React from 'react'
import {LabelTemplate} from './Label.stories' // import stories for component compositions

export default {
  title: 'Components/Label/Label/Features'
}

export const VariantDefault = LabelTemplate.bind({})
VariantDefault.storyName = '[Variant] Default'
VariantDefault.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--default'
}

export const VariantPrimary = LabelTemplate.bind({})
VariantPrimary.storyName = '[Variant] Primary'
VariantPrimary.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--primary'
}

export const VariantInfo = LabelTemplate.bind({})
VariantInfo.storyName = '[Variant] Info'
VariantInfo.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--info'
}

export const VariantSuccess = LabelTemplate.bind({})
VariantSuccess.storyName = '[Variant] Success'
VariantSuccess.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--success'
}

export const VariantWarning = LabelTemplate.bind({})
VariantWarning.storyName = '[Variant] Warning'
VariantWarning.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--warning'
}

export const VariantDanger = LabelTemplate.bind({})
VariantDanger.storyName = '[Variant] Danger'
VariantDanger.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--danger'
}

export const AllVariants = ({}) => (
  <>
    <LabelTemplate text="Default" variant="Label--default" />
    <LabelTemplate text="Primary" variant="Label--primary" />
    <LabelTemplate text="Info" variant="Label--info" />
    <LabelTemplate text="Success" variant="Label--success" />
    <LabelTemplate text="Warning" variant="Label--warning" />
    <LabelTemplate text="Danger" variant="Label--danger" />
  </>
)
AllVariants.decorators = [
  Story => (
    <div style={{display: 'flex', gap: '0.5rem'}}>
      <Story />
    </div>
  )
]
