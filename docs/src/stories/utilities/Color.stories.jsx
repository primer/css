export default {
  title: 'Utilities/Color'
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

export const TextInherit = ({}) => (
  <div class="color-fg-success">This text is green, <a href="#" class="color-fg-inherit">including the link</a></div>
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
