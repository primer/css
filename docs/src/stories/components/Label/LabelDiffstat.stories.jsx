import React from 'react'

export default {
  title: 'Components/Label/Diffstat',
  excludeStories: ['LabelDiffstatTemplate'],
  argTypes: {
    diffValueIntent: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'color-fg-success', 'color-fg-danger'], // values
      control: {
        type: 'select',
        labels: ['default', 'success', 'danger'] // public labels
      },
      table: {
        category: 'CSS'
      }
    },
    diffValue: {
      name: 'diffValue',
      type: 'string',
      description: '7',
      table: {
        category: 'HTML'
      }
    }
  }
}

// build every component case here in the template (private api)
export const LabelDiffstatTemplate = ({diffValue, diffValueIntent}) => (
  <span class="diffstat tooltipped tooltipped-e" aria-label="6 changes: 3 additions &amp; 3 deletions">
    {diffValueIntent === 'color-fg-success' && <span class="color-fg-success">+{diffValue}</span>}
    {diffValueIntent === 'color-fg-danger' && <span class="color-fg-danger">-{diffValue}</span>}
    {diffValueIntent === '' && diffValue} <span class="diffstat-block-added"></span>
    <span class="diffstat-block-added"></span>
    <span class="diffstat-block-deleted"></span>
    <span class="diffstat-block-deleted"></span>
    <span class="diffstat-block-neutral"></span>
  </span>
)

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = LabelDiffstatTemplate.bind({})
Playground.args = {
  diffValue: '7',
  diffValueIntent: ''
}
