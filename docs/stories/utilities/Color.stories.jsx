export default {
  title: 'Utilities/Color',
}

export const Text = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column', gap: '0.25rem'}}>
    <div class="color-fg-default">.color-fg-default</div>
    <div class="color-fg-muted">.color-fg-muted</div>
    <div class="color-fg-subtle">.color-fg-subtle</div>

    <div class="color-fg-accent mt-3">.color-fg-accent</div>
    <div class="color-fg-success">.color-fg-success</div>
    <div class="color-fg-attention">.color-fg-attention</div>
    <div class="color-fg-severe">.color-fg-severe</div>
    <div class="color-fg-danger">.color-fg-danger</div>
    <div class="color-fg-open">.color-fg-open</div>
    <div class="color-fg-closed">.color-fg-closed</div>
    <div class="color-fg-done">.color-fg-done</div>
    <div class="color-fg-sponsors">.color-fg-sponsors</div>

    <div class="color-fg-on-emphasis color-bg-accent-emphasis p-2 rounded mt-3">.color-fg-on-emphasis</div>
  </div>
)

export const NewText = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column', gap: '0.25rem'}}>
    <div class="fgColor-default">.fgColor-default</div>
    <div class="fgColor-muted">.fgColor-muted</div>

    <div class="fgColor-accent mt-3">.fgColor-accent</div>
    <div class="fgColor-success">.fgColor-success</div>
    <div class="fgColor-attention">.fgColor-attention</div>
    <div class="fgColor-severe">.fgColor-severe</div>
    <div class="fgColor-danger">.fgColor-danger</div>
    <div class="fgColor-open">.fgColor-open</div>
    <div class="fgColor-closed">.fgColor-closed</div>
    <div class="fgColor-done">.fgColor-done</div>
    <div class="fgColor-sponsors">.fgColor-sponsors</div>

    <div class="fgColor-onEmphasis fgColor-accent-emphasis p-2 rounded mt-3">.fgColor-onEmphasis</div>
  </div>
)

export const TextInherit = ({}) => (
  <div class="color-fg-success">
    This text is green,{' '}
    <a href="#" class="color-fg-inherit">
      including the link
    </a>
  </div>
)

export const Background = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column'}}>
    <div class="color-bg-default p-2 rounded mb-2">.color-bg-default</div>
    <div class="color-bg-overlay p-2 rounded mb-2">.color-bg-overlay</div>
    <div class="color-bg-inset p-2 rounded mb-2">.color-bg-inset</div>
    <div class="color-bg-subtle p-2 rounded mb-2">.color-bg-subtle</div>
    <div class="color-bg-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-emphasis</div>

    <div class="color-bg-accent p-2 rounded mb-2">.color-bg-accent</div>
    <div class="color-bg-accent-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-accent-emphasis</div>

    <div class="color-bg-success p-2 rounded mb-2">.color-bg-success</div>
    <div class="color-bg-success-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-success-emphasis</div>

    <div class="color-bg-attention p-2 rounded mb-2">.color-bg-attention</div>
    <div class="color-bg-attention-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-attention-emphasis</div>

    <div class="color-bg-severe p-2 rounded mb-2">.color-bg-severe</div>
    <div class="color-bg-severe-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-severe-emphasis</div>

    <div class="color-bg-danger p-2 rounded mb-2">.color-bg-danger</div>
    <div class="color-bg-danger-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-danger-emphasis</div>

    <div class="color-bg-open p-2 rounded mb-2">.color-bg-open</div>
    <div class="color-bg-open-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-open-emphasis</div>

    <div class="color-bg-closed p-2 rounded mb-2">.color-bg-closed</div>
    <div class="color-bg-closed-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-closed-emphasis</div>

    <div class="color-bg-done p-2 rounded mb-2">.color-bg-done</div>
    <div class="color-bg-done-emphasis color-fg-on-emphasis p-2 rounded mb-4">.color-bg-done-emphasis</div>

    <div class="color-bg-sponsors p-2 rounded mb-2">.color-bg-sponsors</div>
    <div class="color-bg-sponsors-emphasis color-fg-on-emphasis p-2 rounded">.color-bg-sponsors-emphasis</div>

    <div class="color-bg-transparent p-2 rounded mb-2">.color-bg-transparent</div>
  </div>
)

export const NewBackground = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column'}}>
    <div class="bgColor-default p-2 rounded mb-2">.bgColor-default</div>
    <div class="bgColor-inset p-2 rounded mb-2">.bgColor-inset</div>
    <div class="bgColor-muted p-2 rounded mb-2">.bgColor-subtle</div>
    <div class="bgColor-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-emphasis</div>

    <div class="bgColor-accent-muted p-2 rounded mb-2">.bgColor-accent-muted</div>
    <div class="bgColor-accent-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-accent-emphasis</div>

    <div class="bgColor-success-muted p-2 rounded mb-2">.bgColor-success-muted</div>
    <div class="bgColor-success-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-success-emphasis</div>

    <div class="bgColor-attention-muted p-2 rounded mb-2">.bgColor-attention-muted</div>
    <div class="bgColor-attention-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-attention-emphasis</div>

    <div class="bgColor-severe-muted p-2 rounded mb-2">.bgColor-severe-muted</div>
    <div class="bgColor-severe-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-severe-emphasis</div>

    <div class="bgColor-danger-muted p-2 rounded mb-2">.bgColor-danger-muted</div>
    <div class="bgColor-danger-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-danger-emphasis</div>

    <div class="bgColor-open-muted p-2 rounded mb-2">.bgColor-open-muted</div>
    <div class="bgColor-open-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-open-emphasis</div>

    <div class="bgColor-closed-muted p-2 rounded mb-2">.bgColor-closed-muted</div>
    <div class="bgColor-closed-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-closed-emphasis</div>

    <div class="bgColor-done-muted p-2 rounded mb-2">.bgColor-done-muted</div>
    <div class="bgColor-done-emphasis fgColor-onEmphasis p-2 rounded mb-4">.bgColor-done-emphasis</div>

    <div class="bgColor-sponsors-muted p-2 rounded mb-2">.bgColor-sponsors-muted</div>
    <div class="bgColor-sponsors-emphasis fgColor-onEmphasis p-2 rounded">.bgColor-sponsors-emphasis</div>

    <div class="bgColor-transparent p-2 rounded mb-2">.bgColor-transparent</div>
  </div>
)

export const Border = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column'}}>
    <div class="border color-border-default p-2 rounded mb-2">.color-border-default</div>
    <div class="border color-border-muted p-2 rounded mb-2">.color-border-muted</div>
    <div class="border color-border-subtle p-2 rounded mb-4">.color-border-subtle</div>

    <div class="border color-border-accent p-2 rounded mb-2">.color-border-accent</div>
    <div class="border color-border-accent-emphasis p-2 rounded mb-4">.color-border-accent-emphasis</div>

    <div class="border color-border-success p-2 rounded mb-2">.color-border-success</div>
    <div class="border color-border-success-emphasis p-2 rounded mb-4">.color-border-success-emphasis</div>

    <div class="border color-border-attention p-2 rounded mb-2">.color-border-attention</div>
    <div class="border color-border-attention-emphasis p-2 rounded mb-4">.color-border-attention-emphasis</div>

    <div class="border color-border-severe p-2 rounded mb-2">.color-border-severe</div>
    <div class="border color-border-severe-emphasis p-2 rounded mb-4">.color-border-severe-emphasis</div>

    <div class="border color-border-danger p-2 rounded mb-2">.color-border-danger</div>
    <div class="border color-border-danger-emphasis p-2 rounded mb-4">.color-border-danger-emphasis</div>

    <div class="border color-border-open p-2 rounded mb-2">.color-border-open</div>
    <div class="border color-border-open-emphasis p-2 rounded mb-4">.color-border-open-emphasis</div>

    <div class="border color-border-closed p-2 rounded mb-2">.color-border-closed</div>
    <div class="border color-border-closed-emphasis p-2 rounded mb-4">.color-border-closed-emphasis</div>

    <div class="border color-border-done p-2 rounded mb-2">.color-border-done</div>
    <div class="border color-border-done-emphasis p-2 rounded mb-4">.color-border-done-emphasis</div>

    <div class="border color-border-sponsors p-2 rounded mb-2">.color-border-sponsors</div>
    <div class="border color-border-sponsors-emphasis p-2 rounded">.color-border-sponsors-emphasis</div>
  </div>
)

export const NewBorder = ({}) => (
  <div style={{display: 'inline-flex', flexDirection: 'column'}}>
    <div class="border borderColor-default p-2 rounded mb-2">.borderColor-default</div>
    <div class="border borderColor-muted p-2 rounded mb-2">.borderColor-muted</div>

    <div class="border borderColor-accent-muted p-2 rounded mb-2">.borderColor-accent-muted</div>
    <div class="border borderColor-accent-emphasis p-2 rounded mb-4">.borderColor-accent-emphasis</div>

    <div class="border borderColor-success-muted p-2 rounded mb-2">.borderColor-success-muted</div>
    <div class="border borderColor-success-emphasis p-2 rounded mb-4">.borderColor-success-emphasis</div>

    <div class="border borderColor-attention-muted p-2 rounded mb-2">.borderColor-attention-muted</div>
    <div class="border borderColor-attention-emphasis p-2 rounded mb-4">.borderColor-attention-emphasis</div>

    <div class="border borderColor-severe-muted p-2 rounded mb-2">.borderColor-severe-muted</div>
    <div class="border borderColor-severe-emphasis p-2 rounded mb-4">.borderColor-severe-emphasis</div>

    <div class="border borderColor-danger-muted p-2 rounded mb-2">.borderColor-danger-muted</div>
    <div class="border borderColor-danger-emphasis p-2 rounded mb-4">.borderColor-danger-emphasis</div>

    <div class="border borderColor-open-muted p-2 rounded mb-2">.borderColor-open-muted</div>
    <div class="border borderColor-open-emphasis p-2 rounded mb-4">.borderColor-open-emphasis</div>

    <div class="border borderColor-closed-muted p-2 rounded mb-2">.borderColor-closed-muted</div>
    <div class="border borderColor-closed-emphasis p-2 rounded mb-4">.borderColor-closed-emphasis</div>

    <div class="border borderColor-done-muted p-2 rounded mb-2">.borderColor-done-muted</div>
    <div class="border borderColor-done-emphasis p-2 rounded mb-4">.borderColor-done-emphasis</div>

    <div class="border borderColor-sponsors-muted p-2 rounded mb-2">.borderColor-sponsors-muted</div>
    <div class="border borderColor-sponsors-emphasis p-2 rounded">.borderColor-sponsors-emphasis</div>
  </div>
)
