import React from 'react'
import clsx from 'clsx'
import {ButtonTemplate} from './Button.stories'
import {IconButtonTemplate} from './IconButton.stories'
import {LinkTemplate} from './Link.stories'
import {LinkStyledAsButtonTemplate} from './LinkStyledAsButton.stories'
import {ButtonGroupTemplate} from './ButtonGroup.stories'

export default {
  title: 'Explorations',
  layout: 'padded',
  argTypes: {}
}

const gridStyle = {
  display: 'grid',
  gridAutoFlow: 'column dense',
  gap: '16px',
  justifyItems: 'start'
}

export const ExampleSheet = ({}) => (
  <div style={{display: 'grid', gap: '16px', justifyItems: 'start'}}>
    <h4>Standard</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" />
      <ButtonTemplate variant="Button--primary" label="Primary" />
      <ButtonTemplate variant="Button--invisible" label="Invisible" />
      <ButtonTemplate variant="Button--danger" label="Danger" />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" />
    </div>
    <h4>Leading visual</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" leadingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" leadingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" leadingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" leadingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" leadingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" leadingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" leadingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" leadingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" leadingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" leadingVisual />
    </div>
    <h4>Trailing visual</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" trailingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" trailingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" trailingVisual />
    </div>
    <h4>Leading + Trailing visual</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" leadingVisual trailingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" leadingVisual trailingVisual />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" leadingVisual trailingVisual />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" leadingVisual trailingVisual />
    </div>

    <h4>Trailing action</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" trailingAction />
    </div>

    <h4>Leading visual + action</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" leadingVisual trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" leadingVisual trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" leadingVisual trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" leadingVisual trailingAction />
    </div>
    <h4>Trailing visual + action</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" trailingVisual trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" trailingVisual trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" trailingVisual trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" trailingVisual trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        trailingVisual
        trailingAction
      />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--small" trailingVisual trailingAction />
      <ButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        trailingVisual
        trailingAction
      />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--small" trailingVisual trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        trailingVisual
        trailingAction
      />
      <ButtonTemplate variant="Button--primary" label="Primary" size="Button--large" trailingVisual trailingAction />
      <ButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        trailingVisual
        trailingAction
      />
      <ButtonTemplate variant="Button--danger" label="Danger" size="Button--large" trailingVisual trailingAction />
    </div>
    <h4>Leading + Trailing visual + action</h4>
    <div style={gridStyle}>
      <ButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual trailingVisual trailingAction />
      <ButtonTemplate variant="Button--primary" label="Primary" leadingVisual trailingVisual trailingAction />
      <ButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual trailingVisual trailingAction />
      <ButtonTemplate variant="Button--danger" label="Danger" leadingVisual trailingVisual trailingAction />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--small"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--small"
        leadingVisual
        trailingVisual
        trailingAction
      />
    </div>
    <div style={gridStyle}>
      <ButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--large"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        leadingVisual
        trailingVisual
        trailingAction
      />
      <ButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--large"
        leadingVisual
        trailingVisual
        trailingAction
      />
    </div>
    <hr />
    <h4>IconButton</h4>
    <div style={gridStyle}>
      <IconButtonTemplate variant="Button--secondary" label="Secondary" visual />
      <IconButtonTemplate variant="Button--primary" label="Primary" visual />
      <IconButtonTemplate variant="Button--invisible" label="Invisible" visual />
      <IconButtonTemplate variant="Button--danger" label="Danger" visual />
    </div>
    <div style={gridStyle}>
      <IconButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" visual />
      <IconButtonTemplate variant="Button--primary" label="Primary" size="Button--small" visual />
      <IconButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" visual />
      <IconButtonTemplate variant="Button--danger" label="Danger" size="Button--small" visual />
    </div>
    <div style={gridStyle}>
      <IconButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" visual />
      <IconButtonTemplate variant="Button--primary" label="Primary" size="Button--large" visual />
      <IconButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" visual />
      <IconButtonTemplate variant="Button--danger" label="Danger" size="Button--large" visual />
    </div>
    <hr />
    <h4>LinkStyledAsButton</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--small" />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--small" />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--large" />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--large" />
    </div>
    <h4>Leading visual</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" leadingVisual />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--small" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--small" leadingVisual />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--large" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" leadingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--large" leadingVisual />
    </div>
    <h4>Trailing visual</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" trailingVisual />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--small" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--small" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--small" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--small" trailingVisual />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" size="Button--large" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--large" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" size="Button--large" trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--large" trailingVisual />
    </div>
    <h4>Leading + Trailing visual</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" leadingVisual trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual trailingVisual />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" leadingVisual trailingVisual />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--small"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--small"
        leadingVisual
        trailingVisual
      />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--large"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        leadingVisual
        trailingVisual
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--large"
        leadingVisual
        trailingVisual
      />
    </div>

    <h4>Trailing action</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" showTrailingAction />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--small" showTrailingAction />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--small" showTrailingAction />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" size="Button--large" showTrailingAction />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" size="Button--large" showTrailingAction />
    </div>

    <h4>Leading visual + action</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" leadingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" leadingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" leadingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" leadingVisual showTrailingAction />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        leadingVisual
        trailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--small"
        leadingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        leadingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--small"
        leadingVisual
        showTrailingAction
      />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        leadingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--large"
        leadingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        leadingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--large"
        leadingVisual
        showTrailingAction
      />
    </div>
    <h4>Trailing visual + action</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate variant="Button--secondary" label="Secondary" trailingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--primary" label="Primary" trailingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--invisible" label="Invisible" trailingVisual showTrailingAction />
      <LinkStyledAsButtonTemplate variant="Button--danger" label="Danger" trailingVisual showTrailingAction />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--small"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--small"
        trailingVisual
        showTrailingAction
      />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--large"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--large"
        trailingVisual
        showTrailingAction
      />
    </div>
    <h4>Leading + Trailing visual + action</h4>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--small"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--small"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--small"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--small"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
    </div>
    <div style={gridStyle}>
      <LinkStyledAsButtonTemplate
        variant="Button--secondary"
        label="Secondary"
        size="Button--large"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--primary"
        label="Primary"
        size="Button--large"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--invisible"
        label="Invisible"
        size="Button--large"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
      <LinkStyledAsButtonTemplate
        variant="Button--danger"
        label="Danger"
        size="Button--large"
        leadingVisual
        trailingVisual
        showTrailingAction
      />
    </div>
    <hr />
    <h4>Link</h4>
    <div style={gridStyle}>
      <LinkTemplate label="Default" />
      <LinkTemplate variant="Link--muted" label="Muted" />
    </div>
    <div style={gridStyle}>
      <LinkTemplate label="Default" showTrailingAction />
      <LinkTemplate variant="Link--muted" label="Muted" showTrailingAction />
    </div>
  </div>
)

// export const Playground = ExampleSheetTemplate.bind({})
// Playground.args = {}
