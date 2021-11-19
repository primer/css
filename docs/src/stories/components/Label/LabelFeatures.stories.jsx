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
  variant: ''
}

export const VariantPrimary = LabelTemplate.bind({})
VariantPrimary.storyName = '[Variant] Primary'
VariantPrimary.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--primary'
}

export const VariantSecondary = LabelTemplate.bind({})
VariantSecondary.storyName = '[Variant] Secondary'
VariantSecondary.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--secondary'
}

export const VariantAccent = LabelTemplate.bind({})
VariantAccent.storyName = '[Variant] Accent'
VariantAccent.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--accent'
}

export const VariantSuccess = LabelTemplate.bind({})
VariantSuccess.storyName = '[Variant] Success'
VariantSuccess.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--success'
}

export const VariantAttention = LabelTemplate.bind({})
VariantAttention.storyName = '[Variant] Attention'
VariantAttention.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--attention'
}

export const VariantSevere = LabelTemplate.bind({})
VariantSevere.storyName = '[Variant] Severe'
VariantSevere.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--severe'
}

export const VariantDanger = LabelTemplate.bind({})
VariantDanger.storyName = '[Variant] Danger'
VariantDanger.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--danger'
}

export const VariantDone = LabelTemplate.bind({})
VariantDone.storyName = '[Variant] Done'
VariantDone.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--done'
}

export const VariantSponsors = LabelTemplate.bind({})
VariantSponsors.storyName = '[Variant] Sponsors'
VariantSponsors.args = {
  text: 'Label text',
  inline: false,
  variant: 'Label--sponsors'
}

export const AllVariants = ({}) => (
  <>
    <LabelTemplate text="Default" />
    <LabelTemplate text="Primary" variant="Label--primary" />
    <LabelTemplate text="Secondary" variant="Label--secondary" />
    <LabelTemplate text="Accent" variant="Label--accent" />
    <LabelTemplate text="Success" variant="Label--success" />
    <LabelTemplate text="Attention" variant="Label--attention" />
    <LabelTemplate text="Severe" variant="Label--severe" />
    <LabelTemplate text="Danger" variant="Label--danger" />
    <LabelTemplate text="Done" variant="Label--done" />
    <LabelTemplate text="Sponsors" variant="Label--sponsors" />
  </>
)
AllVariants.decorators = [
  Story => (
    <div style={{display: 'flex', gap: '0.5rem'}}>
      <Story />
    </div>
  )
]
